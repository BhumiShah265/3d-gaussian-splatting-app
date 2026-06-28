import time
import os, shutil
from .video import extract_frames
from gradio_client import Client, handle_file


TRELLIS_SPACE = "trellis-community/TRELLIS"


def _find_ply_file(value):
    if isinstance(value, str) and value.endswith(".ply") and os.path.exists(value):
        return value
    if isinstance(value, dict):
        for key in ("path", "name", "value"):
            path = value.get(key)
            if isinstance(path, str) and path.endswith(".ply") and os.path.exists(path):
                return path
        for nested in value.values():
            path = _find_ply_file(nested)
            if path:
                return path
    if isinstance(value, (list, tuple)):
        for nested in value:
            path = _find_ply_file(nested)
            if path:
                return path
    return None


def process_reconstruction(job_id, video_path, outputs_dir, jobs):
    try:
        jobs[job_id]["status"] = "extracting_frames"
        jobs[job_id]["progress"] = 10
        frames_folder = os.path.join(os.path.dirname(video_path), f"{job_id}_frames")
        saved_frames = extract_frames(video_path, frames_folder)
        if saved_frames == 0:
            raise RuntimeError("OpenCV could not extract frames from this video")
        jobs[job_id]["progress"] = 25
        time.sleep(2)

        jobs[job_id]["status"] = "running_sfm"
        jobs[job_id]["progress"] = 35
        time.sleep(2)
        jobs[job_id]["progress"] = 50
        time.sleep(2)

        # Step 3: Gaussian Splat Cloud Training via Free Hugging Face Space
        jobs[job_id]["status"] = "training"
        jobs[job_id]["progress"] = 60
        
        # Locate the keyframe image
        extracted_frames = sorted([f for f in os.listdir(frames_folder) if f.endswith(".jpg")])
        if not extracted_frames:
            raise Exception("No frames extracted from the video file")
        
        keyframe_path = os.path.join(frames_folder, extracted_frames[0])
        print(f"Sending keyframe {extracted_frames[0]} to Hugging Face Free GPU...")
        
        client = Client(TRELLIS_SPACE)
        client.predict(api_name="/start_session")

        processed_image = client.predict(
            image=handle_file(keyframe_path),
            api_name="/preprocess_image",
        )

        client.predict(
            image=handle_file(processed_image) if isinstance(processed_image, str) else processed_image,
            multiimages=[],
            seed=0,
            ss_guidance_strength=7.5,
            ss_sampling_steps=12,
            slat_guidance_strength=3.0,
            slat_sampling_steps=12,
            multiimage_algo="stochastic",
            mesh_simplify=0.95,
            texture_size=1024,
            api_name="/generate_and_extract_glb",
        )

        result = client.predict(api_name="/extract_gaussian")
        
        jobs[job_id]["progress"] = 90
        
        ply_file_path = _find_ply_file(result)
                    
        if not ply_file_path or not os.path.exists(ply_file_path):
            raise Exception(f"Trellis model failed to return a valid 3D file. Output was: {result}")
            
        # Step 4: Move the downloaded 3D model to outputs
        destination_path = os.path.join(outputs_dir, f"{job_id}.ply")
        print(f"Moving 3D model to: {destination_path}")
        shutil.copy(ply_file_path, destination_path)
        
        # Mark the job state as completed
        jobs[job_id]["file_type"] = "ply"
        jobs[job_id]["status"] = "completed"
        jobs[job_id]["progress"] = 100
        jobs[job_id]["error"] = None
       


    except Exception as e:
        jobs[job_id]["status"] = "failed"
        jobs[job_id]["error"] = str(e)
        print(f"Error processing job {job_id}: {e}")
