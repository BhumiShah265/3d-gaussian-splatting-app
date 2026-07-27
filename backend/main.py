"""
3D Gaussian Splatting App - FastAPI Server

Video upload, job management, and 3D model download endpoints.
"""
import os
import uuid
import logging
from pathlib import Path

from fastapi import FastAPI, UploadFile, File, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from dotenv import load_dotenv

from pipeline.reconstructor import process_reconstruction
from db import init_db, create_job, get_job

# Configuration
BASE_DIR = Path(__file__).resolve().parent
STORAGE_DIR = BASE_DIR / "storage"
UPLOAD_DIR = STORAGE_DIR / "uploads"
OUTPUT_DIR = STORAGE_DIR / "outputs"

load_dotenv(BASE_DIR / ".env")

# Ensure storage directories exist
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Logging setup
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler(str(STORAGE_DIR / "server.log"))
    ]
)
logger = logging.getLogger("main")

# FastAPI app
app = FastAPI(
    title="3D Gaussian Splatting API",
    description="Transform videos into 3D Gaussian Splat models",
    version="1.0.0"
)

# Initialize database
init_db()


@app.post("/api/upload")
async def upload_video(background_tasks: BackgroundTasks, file: UploadFile = File(...)):
    """
    Upload a video file for 3D reconstruction.

    Args:
        file: Video file (MP4, WebM, etc.)

    Returns:
        dict: Job ID and initial status
    """
    job_id = str(uuid.uuid4())
    file_path = os.path.join(UPLOAD_DIR, f"{job_id}.mp4")

    try:
        file_bytes = await file.read()
        with open(file_path, "wb") as f:
            f.write(file_bytes)

        create_job(job_id)
        background_tasks.add_task(
            process_reconstruction, job_id, file_path, str(OUTPUT_DIR)
        )

        logger.info(f"Job {job_id}: Video uploaded successfully")
        return {"job_id": job_id, "status": "queued"}

    except Exception as e:
        logger.error(f"Job {job_id}: Upload failed - {e}")
        raise HTTPException(status_code=400, detail="Failed to upload file")


@app.get("/api/status/{job_id}")
async def get_status(job_id: str):
    """
    Get job status and progress.

    Args:
        job_id: Unique job identifier

    Returns:
        dict: Job status, progress percentage, file type, and error message (if any)
    """
    job = get_job(job_id)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")

    return {
        "status": job["status"],
        "progress": job["progress"],
        "file_type": job.get("file_type", "splat"),
        "error": job.get("error"),
    }


@app.get("/api/splat/{job_id}.{ext}")
async def download_splat(job_id: str, ext: str):
    """
    Download the generated 3D model file.

    Args:
        job_id: Unique job identifier
        ext: File extension (splat, ply, glb)

    Returns:
        FileResponse: 3D model file
    """
    splat_file = os.path.join(OUTPUT_DIR, f"{job_id}.{ext}")
    if os.path.exists(splat_file):
        return FileResponse(
            splat_file,
            media_type="application/octet-stream",
            filename=f"model.{ext}"
        )
    else:
        raise HTTPException(status_code=404, detail="3D model not found")
