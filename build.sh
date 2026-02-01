#!/bin/bash
set -e

echo "Build script started..."
echo "Current directory: $(pwd)"
ls -la

# Build Frontend
echo "Building Frontend..."
cd frontend
npm install
npm run build
cd ..

# Prepare Static Files for Backend
echo "Moving frontend build to backend/static..."
mkdir -p backend/static
cp -r frontend/dist/* backend/static/

# Try to find requirements.txt in potential locations
if [ -f "requirements.txt" ]; then
    echo "Found requirements.txt at root."
    pip install -r requirements.txt
elif [ -f "backend/requirements.txt" ]; then
    echo "Found requirements.txt in backend/"
    pip install -r backend/requirements.txt
else
    echo "No requirements.txt found! generating..."
    # Fallback minimal install
    pip install fastapi uvicorn pydantic python-multipart requests pandas jinja2
fi

# Install dependencies if poetry is present
if [ -f "pyproject.toml" ]; then
    echo "Found pyproject.toml, installing via poetry..."
    pip install poetry
    poetry config virtualenvs.create false
    poetry install --no-root
fi

echo "Build completed successfully."
