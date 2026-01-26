from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List

router = APIRouter(prefix="/api", tags=["mapping"])

class SearchRequest(BaseModel):
    query: str
    limit: int = 10

class MappingResult(BaseModel):
    id: int
    term: str
    code: str
    match: str
    confidence: float

@router.post("/search", response_model=List[MappingResult])
async def search_mappings(request: SearchRequest):
    """
    Search for ICD-11 mappings for given Ayush term
    """
    # Mock data - replace with actual mapping logic
    mock_results = [
        {
            "id": 1,
            "term": request.query,
            "code": "NAM:123",
            "match": "MG26 (Fever of unknown origin)",
            "confidence": 0.92
        },
        {
            "id": 2,
            "term": request.query,
            "code": "NAM:456",
            "match": "MD30 (Cough)",
            "confidence": 0.88
        }
    ]
    return mock_results[:request.limit]

@router.get("/stats")
async def get_stats():
    """
    Get system statistics
    """
    return {
        "total_mappings": 12450,
        "daily_queries": 856,
        "active_users": 24,
        "fhir_resources": 1203
    }
