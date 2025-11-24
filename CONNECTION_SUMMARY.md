# Connection Summary: ayush-fhir Backend ↔ ayush-fhir-sparkle Frontend

## ✅ Changes Completed

### 1. Backend Configuration (ayush-fhir)

**File**: `c:\Users\ajayg\Event\SIH 25026\ICD-Mapping\ayush-fhir\app\main.py`

✅ **Added CORS Middleware** to allow cross-origin requests from the React frontend:
```python
from fastapi.middleware.cors import CORSMiddleware

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
```

### 2. Frontend Configuration (ayush-fhir-sparkle)

**File**: `c:\Users\ajayg\Event\SIH 25026\ICD-Mapping\ayush-fhir-sparkle\src\config\api.ts`

✅ **Updated API Base URL** from Hugging Face placeholder to local backend:
```typescript
const API_BASE_URL = 'http://localhost:8000';
```

## 🚀 How to Run Both Systems

### Terminal 1: Start Backend (Port 8000)

```powershell
cd "c:\Users\ajayg\Event\SIH 25026\ICD-Mapping\ayush-fhir"

# Activate virtual environment (if not already activated)
.\venv\Scripts\activate

# Start FastAPI backend
python -m uvicorn app.main:app --reload
```

**Expected Output**:
```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
INFO:     Started reloader process
INFO:     Started server process
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

**Test Backend**: Open browser to http://localhost:8000/health
- Should return: `{"status":"ok"}`

---

### Terminal 2: Start Frontend (Port 8080)

```powershell
cd "c:\Users\ajayg\Event\SIH 25026\ICD-Mapping\ayush-fhir-sparkle"

# Start Vite dev server
npm run dev
```

**Expected Output**:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Access Frontend**: Open browser to http://localhost:8080

---

## ✅ Verification Checklist

Once both servers are running, test the connection:

1. **Open Frontend**: http://localhost:8080
2. **Open Browser Console** (F12 → Console tab)
3. **Click "Load Demo Data"** button
4. **Verify**:
   - ✅ No CORS errors in console
   - ✅ Success message appears
   - ✅ Data loads successfully
   - ✅ Network tab shows requests to `http://localhost:8000`

5. **Test Search**:
   - Type "Amlapitta" in search box
   - ✅ Results appear
   - ✅ No errors in console

6. **Test Translation**:
   - Enter code "AY001"
   - Select "NAMASTE" system
   - Click "Translate"
   - ✅ ICD-11 codes are returned

---

## 📁 Project Structure

```
c:\Users\ajayg\Event\SIH 25026\ICD-Mapping\
├── ayush-fhir\              # Backend (FastAPI/Python)
│   ├── app\
│   │   ├── main.py          # ✅ CORS configured
│   │   ├── api.py           # API endpoints
│   │   └── ...
│   ├── data\
│   │   └── namaste_200.csv  # Default dataset
│   ├── requirements.txt
│   └── venv\
│
└── ayush-fhir-sparkle\      # Frontend (React/TypeScript/Vite)
    ├── src\
    │   ├── config\
    │   │   └── api.ts       # ✅ API URL configured
    │   ├── components\
    │   └── ...
    ├── package.json
    └── node_modules\
```

---

## 🔧 Troubleshooting

### Issue: CORS Errors

**Symptom**: Console shows "Access to fetch at 'http://localhost:8000/...' from origin 'http://localhost:8080' has been blocked by CORS policy"

**Solution**: 
- Verify CORS middleware is in `main.py`
- Restart backend server
- Clear browser cache

### Issue: Connection Refused

**Symptom**: "Failed to fetch" or "net::ERR_CONNECTION_REFUSED"

**Solution**:
- Verify backend is running on port 8000
- Check `http://localhost:8000/health` in browser
- Ensure no firewall blocking

### Issue: 404 Not Found

**Symptom**: API calls return 404

**Solution**:
- Verify API_BASE_URL in `api.ts` is `http://localhost:8000`
- Check endpoint paths match backend routes
- Restart frontend dev server

---

## 📝 Summary

**What Changed**:
1. Backend now accepts requests from frontend (CORS enabled)
2. Frontend now points to local backend instead of Hugging Face URL

**Result**: Both systems can now communicate properly! 🎉

The frontend (React app on port 8080) can now successfully make API calls to the backend (FastAPI on port 8000).
