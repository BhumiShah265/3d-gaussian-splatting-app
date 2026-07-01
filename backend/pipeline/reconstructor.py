import time
import os
import shutil
import logging
import urllib.request
import concurrent.futures
from gradio_client import Client, handle_file

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
        from .video import extract_frames
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
        
        keyframe_path = os.path.join(frames_folder, extracted_files[0])
        logger.info(f"Job {job_id}: Handshaking Hugging Face space. Uploading keyframe: {keyframe_path}")

        # Use ThreadPoolExecutor to wrap the network call in a timeout
        with concurrent.futures.ThreadPoolExecutor() as executor:
            # Connect to community Trellis space
            client = Client("trellis-community/TRELLIS")
            
            # Submit the cloud GPU prediction task
            future = executor.submit(
                client.predict,
                image=handle_file(keyframe_path),
                seed=0,
                ss_guidance_strength=7.5,
                ss_sampling_steps=12,
                slat_guidance_strength=3.0,
                slat_sampling_steps=12,
                api_name="/image_to_3d"
            )
            
            try:
                # Set a strict 5 minute (300 seconds) timeout on the Gradio response
                logger.info(f"Job {job_id}: Cloud inference started. Waiting for response (max 5 minutes)...")
                result = future.result(timeout=300)
            except concurrent.futures.TimeoutError:
                logger.error(f"Job {job_id}: Cloud reconstruction timed out after 5 minutes.")
                raise Exception("The cloud GPU reconstruction task timed out.")

        update_job(job_id, progress=90)
        logger.info(f"Job {job_id}: Cloud inference finished. Output data structure: {result}")

        # Parse output result to find the downloaded .ply file path
        ply_file_path = None
        if isinstance(result, dict):
            for val in result.values():
                if isinstance(val, str) and val.endswith('.ply'):
                    ply_file_path = val
                    break
        elif isinstance(result, (list, tuple)):
            for val in result:
                if isinstance(val, str) and val.endswith('.ply'):
                    ply_file_path = val
                    break
                elif isinstance(val, dict) and val.get('name', '').endswith('.ply'):
                    ply_file_path = val['name']
                    break

        if not ply_file_path or not os.path.exists(ply_file_path):
            raise Exception(f"Failed to locate the generated 3D .ply file in Gradio outputs. Result was: {result}")

        # Step 4: Save the final 3D point cloud file on disk
        destination_path = os.path.join(outputs_dir, f"{job_id}.ply")
        logger.info(f"Job {job_id}: Saving final 3D Gaussian Splat model to {destination_path}")
        shutil.copy(ply_file_path, destination_path)

        # Mark job complete in SQLite database
        update_job(job_id, status="completed", progress=100, file_type="ply")
        logger.info(f"Job {job_id}: Reconstruction completed successfully.")

    except Exception as e:
        logger.error(f"Job {job_id}: Pipeline processing failed: {str(e)}")
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
