# 3D Gaussian Splatting App

This repo implements a minimal web+API app that generates 3D Gaussian-splat models from uploaded videos using a cloud inference space.

Contents
- backend/ — FastAPI server and reconstruction pipeline (Python)
- frontend/ — Vite + React viewer using three.js and gaussian-splats-3d

Quickstart (recommended for development)

Prerequisites
- Python 3.8+ and pip
- Node 16+ / npm or yarn
- A Hugging Face token (HF_TOKEN) with access to the Trellis space used by the pipeline

Backend (API + worker)

1. Install

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # or .\.venv\Scripts\activate on Windows
pip install -r requirements.txt
# additional runtime deps used by pipeline
pip install numpy plyfile
```

2. Environment
Create `backend/.env` with at least:

```
HF_TOKEN="<your-huggingface-token>"
# Optional: REPLICATE_API_TOKEN if you use replicate elsewhere
```

Important: this repository currently contains a committed `backend/.env` file with an API token. Delete that file from the repo and rotate the token immediately. Add `backend/.env` and `backend/storage/` to .gitignore.

3. Run

```bash
# from repo root
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The server creates `backend/storage/` at startup and writes `jobs.db` (sqlite) and `server.log` there.

Frontend (viewer)

```bash
cd frontend
npm install
npm run dev      # starts Vite dev server
# or build: npm run build && npm run preview
```

API overview
- POST /api/upload — form-upload a video file (field name: `file`). Returns {"job_id": "<uuid>", "status": "queued"}
- GET /api/status/{job_id} — returns {status, progress, file_type, error}
- GET /api/splat/{job_id}.{ext} — download the generated .splat/.ply/.glb file if ready

Project notes & tips
- Database path: `backend/storage/jobs.db` (sqlite)
- Logs: `backend/storage/server.log`
- Key backend dependencies: fastapi, uvicorn, python-multipart, opencv-python, python-dotenv, gradio_client (+ numpy, plyfile)
- When running the backend, run from the `backend` directory (or set PYTHONPATH) so local package imports (e.g., `pipeline` and `db`) resolve correctly.

Security
- Never commit `.env` files or secrets. Remove the committed `backend/.env` and rotate tokens.
- Add a top-level `.gitignore` with at minimum:

```
# python
backend/.venv
backend/.env
backend/storage/

# node
frontend/node_modules/
```

Development checklist (next improvements)
- Add tests for `pipeline.video` and `splat_utils` (unit test sharpness selection and rotation)
- Add CI to run linting and tests (GitHub Actions)
- Harden error handling in the pipeline: validate cloud responses before assuming index positions
- Pin Python and Node dependency versions in requirements and package.json for reproducible builds

If you'd like, run a quick PR that (1) removes the committed backend/.env, (2) adds .gitignore, and (3) updates requirements.txt to include missing deps. Say "do the PR" and it will be created.