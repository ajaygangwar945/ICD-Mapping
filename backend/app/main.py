from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from app.api.routes import router as api_router

app = FastAPI(title="Ayush Interop API", version="2.0.0")

# CORS
origins = [
    "http://localhost:5173",
    "http://localhost:8000",
    "https://icd-mapping.onrender.com",
    "*"  # Allow all for development
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router)

@app.get("/health")
async def health_check():
    return {"status": "ok", "version": "2.0.0"}

# Serve Frontend Static Files (Production)
# We will copy the frontend dist folder to backend/static during build
if os.path.exists("static"):
    app.mount("/", StaticFiles(directory="static", html=True), name="static")
