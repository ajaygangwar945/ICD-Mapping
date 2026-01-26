from fastapi import APIRouter, HTTPException, UploadFile, File
from pydantic import BaseModel
from typing import List, Optional
from app.services.mapping_service import mapping_service

router = APIRouter(prefix="/api", tags=["mapping"])

class SearchRequest(BaseModel):
    query: str
    limit: int = 10

class MappingResult(BaseModel):
    id: str
    term: str
    code: str
    match: str
    confidence: float

class TranslationResult(BaseModel):
    source_code: str
    source_term: str
    target_code: str
    system: str
    status: str

@router.post("/search", response_model=List[MappingResult])
async def search_mappings(request: SearchRequest):
    """
    Search for ICD-11 mappings for given Ayush term
    """
    results = mapping_service.search(request.query, request.limit)
    return results

@router.get("/translate/{code}", response_model=TranslationResult)
async def translate_code(code: str):
    """
    Translate a specific NAMASTE code to ICD-11
    """
    result = mapping_service.translate(code)
    if not result:
        raise HTTPException(status_code=404, detail="Code not found")
    return result

@router.get("/stats")
async def get_stats():
    """
    Get system statistics
    """
    return mapping_service.get_stats()

@router.post("/ingest-demo")
async def ingest_demo():
    """
    Reload demo data from files
    """
    try:
        mapping_service._load_data()
        return {"status": "success", "message": "Demo data reloaded"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    """
    Handle file uploads (placeholder)
    """
    return {"filename": file.filename, "status": "Uploaded (Processing simulated)"}
