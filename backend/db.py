import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__),"storage","jobs.db")
def init_db():
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    cur.execute("""CREATE TABLE IF NOT EXISTS Jobs
    (
        job_id TEXT PRIMARY KEY,
        STATUS TEXT NOT NULL,
        PROGRESS INTEGER NOT NULL,
        FILE_TYPE TEXT DEFAULT "SPLAT");"""
        )
    con.commit()
    con.close()

def create_job(job_id:str, status: str = "queued", progress:int =0, file_type: str = "splat"):

    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    cur.execute("""INSERT INTO jobs(job_id,status, progress, file_type)
        VALUES (?,?,?,?)""",
        (job_id,status,progress,file_type)
        )
    con.commit()
    con.close()

def update_job(job_id: str, status: str = None, progress: int = None, file_type: str = None):
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    
    # 1. We keep track of which columns we want to update
    fields = []
    values = []
    
    # 2. Check if a parameter was provided, and add it to our list
    if status is not None:
        fields.append("status = ?")
        values.append(status)
        
    if progress is not None:
        fields.append("progress = ?")
        values.append(progress)
        
    if file_type is not None:
        fields.append("file_type = ?")
        values.append(file_type)
        
    # 3. If we actually have fields to update, run the query
    if fields:
        # Add the job_id for the WHERE clause at the end of values
        values.append(job_id)
        
        # This joins your fields with commas, creating e.g., "SET status = ?, progress = ?"
        query = f"UPDATE jobs SET {', '.join(fields)} WHERE job_id = ?"
        
        cur.execute(query, tuple(values))
        con.commit()
        
    con.close()

def get_job(job_id: str):
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    cur.execute("""SELECT status, progress, file_type FROM jobs WHERE job_id = ?""",(job_id,))
    row = cur.fetchone()
    con.close()
    if row:
        sol = {"status": row[0], "progress": row[1], "file_type": row[2]}
        return sol
    return None

   