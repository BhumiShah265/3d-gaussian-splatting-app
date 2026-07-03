import time
import os
import shutil
import logging
import urllib.request
import concurrent.futures
from gradio_client import Client, handle_file
from pipeline.video import extract_frames, select_best_keyframe
from pipeline.splat_utils import rotate_gaussian_splat_ply

# Import database helper functions
from db import update_job

logger = logging.getLogger("reconstructor")

def process_reconstruction(job_id: str, video_path: str, outputs_dir: str, jobs=None):
    """
    Background worker that extracts frames, uploads a keyframe to Hugging Face,
    downloads the resulting 3D .ply Gaussian Splat file, and deletes temporary files.
    """
    logger.info(f"Job {job_id}: Processing started for video {video_path}")
    frames_folder = os.path.join(os.path.dirname(video_path), f"{job_id}_frames")

    try:
        # Step 1: Extract Frames
        update_job(job_id, status="extracting_frames", progress=10)
        logger.info(f"Job {job_id}: Beginning frame extraction...")
        
        # Import video helper locally to prevent circular imports
        from pipeline.video import extract_frames
        saved_count = extract_frames(video_path, frames_folder, extract_rate=2.0)
        
        logger.info(f"Job {job_id}: Frame extraction complete. Extracted {saved_count} frames.")
        update_job(job_id, progress=25)
        time.sleep(1)

        # Step 2: Camera Pose Tracking (COLMAP Simulation)
        update_job(job_id, status="running_sfm", progress=35)
        logger.info(f"Job {job_id}: Simulating camera pose estimation (COLMAP)...")
        time.sleep(2)
        update_job(job_id, progress=50)
        time.sleep(1)

        # Step 3: Cloud GPU Training via Hugging Face Trellis Space
        update_job(job_id, status="training", progress=60)
        
        # Locate the first frame to act as our 3D keyframe
        extracted_files = sorted([f for f in os.listdir(frames_folder) if f.endswith(".jpg")])
        if not extracted_files:
            raise Exception("No valid JPEG frames were extracted from the video file.")
        best_frame = select_best_keyframe(frames_folder, extracted_files)
        keyframe_path = os.path.join(frames_folder, best_frame)
        logger.info(f"Job {job_id}: Handshaking Hugging Face space. Uploading keyframe: {keyframe_path}")
        def find_output_file(value):
            valid_extensions = (".splat", ".ply", ".glb")
            if isinstance(value, str) and value.endswith(valid_extensions) and os.path.exists(value):
                return value
            if isinstance(value, dict):
                for key in ("path", "name"):
                    path = value.get(key)
                    if isinstance(path, str) and path.endswith(valid_extensions) and os.path.exists(path):
                        return path
                for nested in value.values():
                    found = find_output_file(nested)
                    if found:
                        return found
            if isinstance(value, (list, tuple)):
                for item in value:
                    found = find_output_file(item)
                    if found:
                        return found
            return None

        # Use ThreadPoolExecutor to wrap the network call in a timeout
        with concurrent.futures.ThreadPoolExecutor() as executor:
            # Connect to community Trellis space
            client = Client("trellis-community/TRELLIS", token=os.getenv("HF_TOKEN"))
            
            # We define a nested helper to run the preprocessing and 3D generation sequentially
            

            def run_cloud_inference():
                # 🔑 FIX: session start karna zaroori hai, warna server-side temp dir nahi banta
                logger.info("Step 3a0: Starting Gradio session...")
                client.predict(api_name="/start_session")

                logger.info("Step 3a: Preprocessing keyframe on cloud (/preprocess_image)...")
                preprocessed_img = client.predict(
                    image=handle_file(keyframe_path),
                    api_name="/preprocess_image"
                )
                logger.info("Step 3b: Preprocessing complete. Generating 3D asset (/generate_and_extract_glb)...")
                if isinstance(preprocessed_img, dict):
                    preprocessed_path = preprocessed_img.get("path")
                else:
                    preprocessed_path = preprocessed_img

                if not preprocessed_path:
                    raise Exception("Preprocessing did not return a valid local file path.")

                # 🔑 generate_and_extract_glb needs image + all its other named params
                # (they have defaults, but pass explicitly for clarity/control)
                glb_res = client.predict(
                    image=handle_file(preprocessed_path),
                    multiimages=[],
                    seed=0,
                    ss_guidance_strength=7.5,
                    ss_sampling_steps=12,
                    slat_guidance_strength=3.0,
                    slat_sampling_steps=12,
                    multiimage_algo="stochastic",
                    mesh_simplify=0.95,
                    texture_size=1024,
                    api_name="/generate_and_extract_glb"
                )
                return glb_res

            future = executor.submit(run_cloud_inference)
            try:
                # Set a strict 5 minute (300 seconds) timeout on the Gradio response
                logger.info(f"Job {job_id}: Cloud inference started. Waiting for response (max 5 minutes)...")
                result = future.result(timeout=300)
            except concurrent.futures.TimeoutError:
                logger.error(f"Job {job_id}: Cloud reconstruction timed out after 5 minutes.")
                raise Exception("The cloud GPU reconstruction task timed out.")

        update_job(job_id, progress=90)
        logger.info(f"Job {job_id}: Cloud inference finished. Output data structure: {result}")

        # result = (generated_3d_asset [video], extracted_glbgaussian [glb path], download_glb [glb path])
        glb_path = result[2] if isinstance(result, (list, tuple)) and len(result) >= 3 else None

        gaussian_result = client.predict(api_name="/extract_gaussian")
        logger.info(f"Job {job_id}: Gaussian extraction finished. Output data structure: {gaussian_result}")

        # gaussian_result = (extracted_glbgaussian [path], download_gaussian [ply/splat path])
        gaussian_path = gaussian_result[1] if isinstance(gaussian_result, (list, tuple)) and len(gaussian_result) >= 2 else None

        # Prefer gaussian (.ply/.splat) over glb, matching your original preference
        output_file_path = None
        for candidate in (gaussian_path, glb_path):
            if candidate and os.path.exists(candidate):
                output_file_path = candidate
                break

        # fallback to old recursive search just in case shape varies
        if not output_file_path:
            output_file_path = find_output_file(gaussian_result) or find_output_file(result)

        if not output_file_path:
            raise Exception(f"Failed to locate the generated 3D file. Result: {result}; Gaussian result: {gaussian_result}")
        # Step 4: Save the final 3D point cloud file on disk
        file_type = os.path.splitext(output_file_path)[1].lstrip(".")
        destination_path = os.path.join(outputs_dir, f"{job_id}.{file_type}")
        logger.info(f"Job {job_id}: Saving final 3D Gaussian Splat model to {destination_path}")
        shutil.copy(output_file_path, destination_path)

        # Fix upside-down orientation for Gaussian Splat .ply files
        if file_type == "ply":
            logger.info(f"Job {job_id}: Rotating splat to correct orientation...")
            rotate_gaussian_splat_ply(destination_path, destination_path, angle_deg=180.0, axis="x")
        # Mark job complete in SQLite database
        update_job(job_id, status="completed", progress=100, file_type=file_type)
        logger.info(f"Job {job_id}: Reconstruction completed successfully.")

    except Exception as e:
        logger.error(f"Job {job_id}: Pipeline processing failed:", exc_info=True)
        # Fail the job in SQLite database
        try:
            update_job(job_id, status="failed")
        except Exception as db_err:
            logger.error(f"Job {job_id}: Failed to update failure status in database: {db_err}")

    finally:
        # persistently clean up temporary local folders to free up disk space
        logger.info(f"Job {job_id}: Running server file cleanup sequence...")
        
        # 1. Delete temporary uploaded video file
        if os.path.exists(video_path):
            try:
                os.remove(video_path)
                logger.info(f"Job {job_id}: Cleanup successfully deleted temporary video file: {video_path}")
            except Exception as e:
                logger.warning(f"Job {job_id}: Cleanup failed to remove video file: {e}")
        
        # 2. Delete temporary extracted frames directory
        if os.path.exists(frames_folder):
            try:
                shutil.rmtree(frames_folder, ignore_errors=True)
                logger.info(f"Job {job_id}: Cleanup successfully deleted temporary frames folder: {frames_folder}")
            except Exception as e:
                logger.warning(f"Job {job_id}: Cleanup failed to remove frames folder: {e}")
