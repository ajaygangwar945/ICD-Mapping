from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import router as api_router
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path
from .ingest import ingest_csv_file

app = FastAPI(title="Ayush Interop & FHIR Service", version="0.1.0")

# Add CORS middleware to allow frontend (port 8080) to communicate with backend (port 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "http://localhost:5173",  # Vite's default port
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router)

@app.get('/health')
def health():
    return {'status': 'ok'}

# Serve frontend static files
app.mount('/static', StaticFiles(directory='static', html=True), name='static')
# Map absolute /assets/* requests (from Vite build) to static/assets
app.mount('/assets', StaticFiles(directory='static/assets'), name='assets')

@app.get('/')
def index():
    return FileResponse('static/index.html')

@app.on_event('startup')
def preload_dataset() -> None:
    # Auto-ingest default dataset for smoother UX
    data_path = Path(__file__).resolve().parents[1] / 'data' / 'namaste_200.csv'
    if data_path.exists():
        try:
            ingest_csv_file(data_path.read_bytes())
        except Exception:
            # best-effort; ignore on startup
            pass


