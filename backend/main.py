from gradio_client.utils import UPLOAD_URL
if __package__:
    from .pipeline.reconstructor import process_reconstruction
else:
    from pipeline.reconstructor import process_reconstruction
from fastapi import FastAPI, UploadFile, File, HTTPException, BackgroundTasks 
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.responses import FileResponse 
from pathlib import Path
import os,uuid
from dotenv import load_dotenv
import logging
from db import init_db, create_job, get_job

BASE_DIR = Path(__file__).resolve().parent
STORAGE_DIR = BASE_DIR/"storage"
UPLOAD_DIR = STORAGE_DIR/"uploads"
OUTPUT_DIR = STORAGE_DIR/"outputs"
load_dotenv(BASE_DIR / ".env")

UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
app = FastAPI()
logging.basicConfig(
    level = logging.INFO,
    format ="%(asctime)s [%(levelname)s] %(message)s",
    handlers =[
        logging.StreamHandler(),
        logging.FileHandler("storage/server.log")
    ]
)
logger = logging.getLogger("main")
init_db()

@app.post("/api/upload")
async def upload_video(background_task:BackgroundTasks,file: UploadFile = File(...),):
    job_id = str(uuid.uuid4())
    file_stored = os.path.join(UPLOAD_DIR,f"{job_id}.mp4")
    file_bytes = await file.read()
    with open(file_stored,'wb') as BYTE:
        BYTE.write(file_bytes)
    
    create_job[job_id] 

    background_task.add_task(process_reconstruction, job_id,file_stored,str(OUTPUT_DIR))

    return {"job_id":job_id,"status":"queued"}

@app.get("/api/status/{job_id}")
async def get_status(job_id: str):
    job = get_job(job_id)
    if not job:
        raise HTTPException(status_code = 404, detail="Job not found")
    else:
        return {
            "status": job["status"],
            "progress": job["progress"],
            "file_type": job.get("file_type", "splat"),
            "error": job.get("error"),
        }

@app.get("/api/splat/{job_id}.{ext}")
async def get_splat(job_id:str,ext:str):
   splat_file= os.path.join(OUTPUT_DIR,f"{job_id}.{ext}")
   if os.path.exists(splat_file):
       return FileResponse(splat_file, media_type = "application/octet-stream")
   else:
       raise HTTPException(status_code=404,detail = "Splat file not found")
       
