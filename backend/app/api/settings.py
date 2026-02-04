from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import json
import os
from pathlib import Path

router = APIRouter(prefix="/api/settings", tags=["auth-audit"])

# Define the path to the settings file
# Assuming running from backend directory or similar, but let's make it robust
BASE_DIR = Path(__file__).resolve().parent.parent
DATA_FILE = BASE_DIR / "data" / "settings.json"

class SettingsModel(BaseModel):
    client_id: str
    callback_url: str
    environment: str = "Sandbox Gateway v2.4" # Default value

def ensure_data_file():
    if not DATA_FILE.exists():
        DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
        default_settings = {
            "client_id": "sbx-837-299-441-992",
            "callback_url": "/api/v1/auth/callback",
            "environment": "Sandbox Gateway v2.4"
        }
        with open(DATA_FILE, "w") as f:
            json.dump(default_settings, f, indent=4)

@router.get("", response_model=SettingsModel)
def get_settings():
    ensure_data_file()
    try:
        with open(DATA_FILE, "r") as f:
            data = json.load(f)
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error reading settings: {str(e)}")

@router.put("", response_model=SettingsModel)
def update_settings(settings: SettingsModel):
    ensure_data_file()
    print(f"DEBUG: Attempting to save settings to {DATA_FILE}")
    try:
        with open(DATA_FILE, "w") as f:
            json.dump(settings.model_dump(), f, indent=4)
        print("DEBUG: Settings saved successfully")
        return settings
    except Exception as e:
        print(f"DEBUG: Failed to save settings: {e}")
        raise HTTPException(status_code=500, detail=f"Error saving settings: {str(e)}")
