"""
Database management for job tracking.

Stores job metadata: status, progress, output file type.
Uses SQLite for simplicity and portability.
"""
import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "storage", "jobs.db")


def init_db():
    """Initialize the jobs database table if it doesn't exist."""
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    cur.execute(
        """
        CREATE TABLE IF NOT EXISTS jobs (
            job_id TEXT PRIMARY KEY,
            status TEXT NOT NULL,
            progress INTEGER NOT NULL,
            file_type TEXT DEFAULT 'splat'
        )
        """
    )
    con.commit()
    con.close()


def create_job(
    job_id: str, status: str = "queued", progress: int = 0, file_type: str = "splat"
):
    """
    Create a new job record.

    Args:
        job_id: Unique job identifier
        status: Initial job status (default: "queued")
        progress: Initial progress percentage (default: 0)
        file_type: Expected output file type (default: "splat")
    """
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    cur.execute(
        "INSERT INTO jobs (job_id, status, progress, file_type) VALUES (?, ?, ?, ?)",
        (job_id, status, progress, file_type),
    )
    con.commit()
    con.close()


def update_job(
    job_id: str, status: str = None, progress: int = None, file_type: str = None
):
    """
    Update job record fields.

    Args:
        job_id: Job identifier
        status: New status (optional)
        progress: New progress percentage (optional)
        file_type: New file type (optional)
    """
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()

    fields = []
    values = []

    if status is not None:
        fields.append("status = ?")
        values.append(status)

    if progress is not None:
        fields.append("progress = ?")
        values.append(progress)

    if file_type is not None:
        fields.append("file_type = ?")
        values.append(file_type)

    if fields:
        values.append(job_id)
        query = f"UPDATE jobs SET {', '.join(fields)} WHERE job_id = ?"
        cur.execute(query, tuple(values))
        con.commit()

    con.close()


def get_job(job_id: str):
    """
    Retrieve job record.

    Args:
        job_id: Job identifier

    Returns:
        dict: Job data (status, progress, file_type) or None if not found
    """
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    cur.execute(
        "SELECT status, progress, file_type FROM jobs WHERE job_id = ?", (job_id,)
    )
    row = cur.fetchone()
    con.close()

    if row:
        return {"status": row[0], "progress": row[1], "file_type": row[2]}
    return None