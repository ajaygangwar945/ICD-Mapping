import pandas as pd
import json
import os
from typing import List, Dict, Any

class MappingService:
    def __init__(self, data_dir: str = "app/data"):
        self.data_dir = data_dir
        self.csv_path = os.path.join(data_dir, "sample-namaste.csv")
        self.json_path = os.path.join(data_dir, "search-results.json")
        self._load_data()

    def _load_data(self):
        # Load CSV data
        if os.path.exists(self.csv_path):
            self.df = pd.read_csv(self.csv_path)
        else:
            self.df = pd.DataFrame(columns=["id", "term", "category", "synonyms", "icd11_tm2_code"])

        # Load JSON data
        if os.path.exists(self.json_path):
            with open(self.json_path, "r", encoding="utf-8") as f:
                self.results_json = json.load(f)
        else:
            self.results_json = {"exact": [], "partial": []}

    def search(self, query: str, limit: int = 10) -> List[Dict[str, Any]]:
        query = query.lower()
        results = []

        # Search in JSON results (from partial)
        for item in self.results_json.get("partial", []):
            if query in item["label"].lower() or any(query in s.lower() for s in item.get("synonyms", [])):
                results.append({
                    "id": item["code"],
                    "term": item["label"],
                    "code": item["code"],
                    "match": ", ".join(item.get("icd11_tm2_codes", [])),
                    "confidence": 0.95 if query == item["label"].lower() else 0.85
                })

        # Complement with CSV search
        if len(results) < limit:
            mask = self.df["term"].str.contains(query, case=False, na=False) | \
                   self.df["synonyms"].str.contains(query, case=False, na=False)
            
            csv_results = self.df[mask].head(limit - len(results))
            for _, row in csv_results.iterrows():
                # Avoid duplicates
                if not any(r["id"] == row["id"] for r in results):
                    results.append({
                        "id": row["id"],
                        "term": row["term"],
                        "code": row["id"],
                        "match": row["icd11_tm2_code"] if pd.notna(row["icd11_tm2_code"]) else "No Direct Match",
                        "confidence": 0.80
                    })

        return results[:limit]

    def translate(self, code: str) -> Dict[str, Any]:
        # Search in CSV
        row = self.df[self.df["id"] == code]
        if not row.empty:
            data = row.iloc[0]
            return {
                "source_code": data["id"],
                "source_term": data["term"],
                "target_code": data["icd11_tm2_code"] if pd.notna(data["icd11_tm2_code"]) else "TBD",
                "system": "ICD-11 TM2",
                "status": "Mapped" if pd.notna(data["icd11_tm2_code"]) else "Pending"
            }
        
        # Search in JSON
        for item in self.results_json.get("partial", []):
            if item["code"] == code:
                return {
                    "source_code": item["code"],
                    "source_term": item["label"],
                    "target_code": item["icd11_tm2_codes"][0] if item["icd11_tm2_codes"] else "TBD",
                    "system": "ICD-11",
                    "status": "Mapped"
                }

        return None

    def get_stats(self) -> Dict[str, Any]:
        return {
            "total_mappings": len(self.df) + len(self.results_json.get("partial", [])),
            "daily_queries": 142,  # Mock stat
            "active_users": 12,    # Mock stat
            "fhir_resources": len(self.df)
        }

mapping_service = MappingService()
