# Ayush ICD-11 Mapping Platform

A premium, state-of-the-art healthcare interoperability platform designed to map traditional Ayush terminology to modern ICD-11 and FHIR standards.

## ✨ Features

- **Neural Mapping Engine**: Intelligent search and translation between NAMASTE and ICD-11.
- **Dark Mode Support**: Fully integrated theme switching with a premium dark aesthetic.
- **FHIR R4 Compliant**: Generates and manages healthcare terminology resources.
- **Glassmorphic UI**: High-end modern design using Framer Motion and TailwindCSS.

---

## 🚀 Getting Started

### Prerequisites

- **Python**: 3.9+ (3.11 recommended)
- **Node.js**: 18.x or later
- **Git**

### 1. Repository Setup

```bash
git clone https://github.com/ajaygangwar945/ICD-Mapping.git
cd ICD-Mapping
```

---

## 🛠️ Running the Project (Stepwise)

### Option A: Development Mode (Recommended for testing UI)

*Runs Backend and Frontend separately for hot-reloading.*

#### 1. Start the Backend

```bash
cd backend
python -m venv venv
# Windows:
.\venv\Scripts\activate
# Linux/macOS:
source venv/bin/activate

pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

*Backend will be available at: <http://localhost:8000>*

#### 2. Start the Frontend

In a **new terminal**:

```bash
cd frontend
npm install
npm run dev
```

*Frontend will be available at: <http://localhost:5173>*

---

### Option B: Production Mode (Monolithic)

*Builds the frontend and serves it directly via the backend server.*

#### 1. Build the Frontend

```bash
cd frontend
npm install
npm run build
```

#### 2. Prepare Backend Static Files

Copy the `dist` folder to the backend:

```bash
# Windows (PowerShell):
Copy-Item -Path ".\dist\*" -Destination "..\backend\static" -Recurse -Force
# Linux/macOS:
cp -r dist/* ../backend/static
```

#### 3. Run Unified Server

```bash
cd ../backend
# Activate venv if not already done
uvicorn app.main:app --port 8000
```

*The full application (Frontend + API) will be available at: <http://localhost:8000>*

---

## 🏗️ Project Structure

- `/frontend`: React + Vite application (UI/UX).
- `/backend`: FastAPI application (Mapping Logic & FHIR).
- `/legacy_backup`: Archival of previous iterations.

## 📄 License

This project is developed for the Smart India Hackathon (SIH) 2024.
