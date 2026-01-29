@echo off
echo Building Ayush Intelligence Unified Platform...

:: Build Frontend
echo [*] Building Frontend...
cd frontend
call npm install
call npm run build
if %ERRORLEVEL% NEQ 0 (
    echo [!] Frontend build failed.
    exit /b %ERRORLEVEL%
)
cd ..

:: Sync static files
echo [*] Syncing static files to backend...
if not exist "backend\static" mkdir "backend\static"
xcopy /E /I /Y "frontend\dist\*" "backend\static\"

:: Start Backend
echo [*] Starting Unified Server...
cd backend
if not exist "venv" (
    echo [*] Creating virtual environment...
    python -m venv venv
)
call .\venv\Scripts\activate
pip install -r requirements.txt
echo [!] Server starting at http://localhost:8000
python -m uvicorn app.main:app --reload --port 8000
