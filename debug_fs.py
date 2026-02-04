from pathlib import Path
import json
import os

# Replicate the logic from settings.py
BASE_DIR = Path("c:/Users/ajayg/Event/SIH 25026/ICD-Mapping/backend/app")
DATA_FILE = BASE_DIR / "data" / "settings.json"

print(f"Testing write to: {DATA_FILE}")

try:
    # Ensure directory exists
    if not DATA_FILE.parent.exists():
        print(f"Creating directory: {DATA_FILE.parent}")
        DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    
    # Try writing
    data = {"test": "value"}
    with open(DATA_FILE, "w") as f:
        json.dump(data, f)
    print("Success: File written.")
    
    # Try reading
    with open(DATA_FILE, "r") as f:
        read_data = json.load(f)
    print(f"Success: Read data: {read_data}")

except Exception as e:
    print(f"FAILURE: {e}")
