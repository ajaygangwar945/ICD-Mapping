from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os
from app.api.routes import router as api_router
from app.api.settings import router as settings_router

# Create FastAPI app instance
app = FastAPI(
    title="AYUSH FHIR Integration Platform",
    description="API for integrating AYUSH systems with FHIR standards",
    version="2.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router)
app.include_router(settings_router)

@app.get("/health")
async def health_check():
    return {"status": "ok", "version": "2.0.0"}

# Serve Frontend Static Files (Production)
@app.get("/{full_path:path}")
async def serve_spa(full_path: str):
    # API requests should be handled by the router, but if they reach here, return 404
    if full_path.startswith("api/"):
        return {"detail": "Not Found"}
        
    # Get the directory of the current file
    current_dir = os.path.dirname(os.path.abspath(__file__))
    static_dir = os.path.join(os.path.dirname(current_dir), "static")
    
    # Check if the requested path corresponds to a static file (e.g., assets/main.js)
    static_file = os.path.join(static_dir, full_path)
    if os.path.isfile(static_file):
        return FileResponse(static_file)
    
    # For any other route (like /ingestion, /fhir), serve index.html to let React Router handle it
    index_path = os.path.join(static_dir, "index.html")
    if os.path.exists(index_path):
        return FileResponse(index_path)
    
    # Fallback if index.html is missing
    return {"detail": "Not Found"}
