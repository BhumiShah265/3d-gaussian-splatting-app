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

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")

jobs = {}

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_credentials = True,
    allow_origins = ["*"],
    allow_methods = ["*"],
    allow_headers = ["*"],
)
output = str(BASE_DIR / "storage" / "outputs")
upload = str(BASE_DIR / "storage" / "uploads")
os.makedirs(upload, exist_ok=True)
os.makedirs(output,exist_ok = True)

@app.post("/api/upload")
async def upload_video(background_task:BackgroundTasks,file: UploadFile = File(...),):
    job_id = str(uuid.uuid4())
    file_stored = os.path.join(upload,f"{job_id}.mp4")
    file_bytes = await file.read()
    with open(file_stored,'wb') as BYTE:
        BYTE.write(file_bytes)
    
    jobs[job_id] = {"status": "queued", "progress": 0, "error": None}

    background_task.add_task(process_reconstruction,job_id, file_stored, output, jobs)

    return {"job_id":job_id,"status":"queued"}

@app.get("/api/status/{job_id}")
async def get_status(job_id: str):
    if job_id not in jobs:
        raise HTTPException(status_code = 404, detail="Job not found")
    else:
        return {
            "status": jobs[job_id]["status"],
            "progress": jobs[job_id]["progress"],
            "file_type": jobs[job_id].get("file_type", "splat"),
            "error": jobs[job_id].get("error"),
        }

@app.get("/api/splat/{job_id}.{ext}")
async def get_splat(job_id:str,ext:str):
   splat_file= os.path.join(output,f"{job_id}.{ext}")
   if os.path.exists(splat_file):
       return FileResponse(splat_file, media_type = "application/octet-stream")
   else:
       raise HTTPException(status_code=404,detail = "Splat file not found")
       
