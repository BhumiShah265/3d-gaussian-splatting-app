import time
import os, shutil
from .video import extract_frames 

def process_reconstruction(job_id, video_path, outputs_dir, jobs):
    try:
        jobs[job_id]["status"] = "extracting_frames"
        jobs[job_id]["progress"] = 10
        frames_folder = os.path.join(os.path.dirname(video_path), f"{job_id}_frames")
        extract_frames(video_path, frames_folder)
        jobs[job_id]["progress"] = 25
        time.sleep(2)

        jobs[job_id]["status"] = "running_sfm"
        jobs[job_id]["progress"] = 35
        time.sleep(2)
        jobs[job_id]["progress"] = 50
        time.sleep(2)

        jobs[job_id]["status"] = "training"
        jobs[job_id]["progress"] = 70
        time.sleep(2)
        jobs[job_id]["progress"] = 90
        time.sleep(2)

        destination_path = os.path.join(outputs_dir, f"{job_id}.splat")
        source_path = os.path.join(os.path.dirname(outputs_dir), "sample.splat")

        if os.path.exists(source_path):
            shutil.copy(source_path, destination_path)
        
        else:
            with open(destination_path,"w") as file:
                file.write("Dummy splat Data")
            
        jobs[job_id]["status"] = "completed"
        jobs[job_id]["progress"] = 100

    except Exception as e:
        jobs[job_id]["status"] = "failed"
        print(f"Error processing job {job_id}:{e}")

