import requests
import json

url = "http://localhost:8000/api/settings"
headers = {"Content-Type": "application/json"}
data = {
    "client_id": "debug-client-id",
    "callback_url": "/debug/callback",
    "environment": "Debug Environment"
}

try:
    print(f"Sending PUT to {url}")
    response = requests.put(url, headers=headers, json=data)
    print(f"Status Code: {response.status_code}")
    print(f"Response Body: {response.text}")
except Exception as e:
    print(f"Request failed: {e}")
