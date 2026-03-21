<img align="center" src="frontend/public/Gemini_Generated_Image_bxbcikbxbcikbxbc.png" width="100%" height="200" style="object-fit: cover">

<h1 align="center"> 🏥 Ayush Intelligence</h1>
<div align="center">

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square&logo=fastapi)
![Vite](https://img.shields.io/badge/Frontend-Vite_/_React-646CFF?style=flat-square&logo=vite)

</div>

---

## 🌟 Overview

<div align="left">

A premium, state-of-the-art healthcare interoperability platform designed to map traditional **Ayush** terminology to modern **ICD-11** and **FHIR** standards. Built with a focus on intelligence, speed, and a high-end user experience.

</div>

---

## 🚀 Live Website

The project is fully deployed and accessible online.  

[![Live](https://img.shields.io/badge/Live-Visit%20Site-brightgreen?style=flat-square)](https://icd-mapping.onrender.com)

---

## ✨ Key Features

- 🧠 **Neural Mapping Engine**: Intelligent search and translation between NAMASTE and ICD-11 with a 1000+ term dataset.
- 📱 **Mobile-First Responsiveness**: Hand-crafted UI optimized for every breakpoint from 375px (Mobile) to 1440px+ (Desktop).
- 🌓 **Adaptive Theming**: Premium dark and light modes with custom-tuned gradients and glassmorphism.
- 🏥 **FHIR R4 Integration**: Native support for FHIR JSON resource generation and schema synchronization.
- ⚡ **High Performance**: Optimized Vite build and FastAPI backend for lightning-fast sub-second responses.
- 🛠️ **Unified Deployment**: Single-command build and run system using `run_monolith.bat`.

---

## 🛠️ Project Architecture

The project follows a modern decoupled architecture:

- **`/frontend`**: React + Vite + TailwindCSS + Lucide Icons + Framer Motion.
- **`/backend`**: FastAPI + Python 3.14 + Pydantic + Neural Mapping Engine.
- **`/backend/static`**: Production build of the frontend served via the backend for a unified deployment experience.

## 📂 File Structure

```text
.
├── backend/                # FastAPI Backend
│   ├── app/                # Application logic
│   │   ├── api/            # API endpoints & routing
│   │   │   ├── routes.py   # Main mapping & search endpoints
│   │   │   └── settings.py # Auth & Gateway configuration API
│   │   ├── data/           # Persistent data storage
│   │   │   ├── search-results.json # Neural mapping ledger rules
│   │   │   ├── settings.json # Persisted configuration
│   │   │   └── sample-namaste.csv # 1000+ medical terms
│   │   ├── services/       # Neural mapping & business logic
│   │   │   └── mapping_service.py # Mapping Engine Logic
│   │   ├── main.py         # FastAPI instance & static file server
│   │   └── test_import.py  # Backend test script
│   ├── static/             # Compiled Frontend (Production)
│   └── requirements.txt    # Backend dependencies
├── frontend/               # React Frontend (Vite + TailwindCSS)
│   ├── src/                # Source code
│   │   ├── assets/         # Design system & images
│   │   ├── components/     # UI Core components
│   │   ├── pages/          # All application views (Landing, Dashboard, etc.)
│   │   ├── App.tsx         # Root component & Routing
│   │   ├── index.css       # Global styles & Tailwind
│   │   └── main.tsx        # React entry point
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── vite.config.ts      # Dev server & reverse-proxy config
├── details.txt             # Comprehensive Project Details Documentation
├── build.sh                # Unified build/deploy script (Bash)
├── main.py                 # Unified root entry point
├── pyproject.toml          # Dev environment configuration
├── render.yaml             # Cloud deployment configuration
├── run_monolith.bat        # Windows automation script
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
| :--- | :--- |
| **Python** | 3.14+ |
| **Node.js** | 18.x or later |
| **Git** | Optional |

### 1. Unified Run (Recommended)

To run the entire platform as a single unit on Windows:

```bash
run_monolith.bat
```

### 2. Manual Development Mode (Hot-Reloading)

#### **Backend**

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

#### **Frontend**

```bash
cd frontend
npm install
npm run dev
```

*Frontend: [http://localhost:5173](http://localhost:5173)* | *Backend API: [http://localhost:8000/health](http://localhost:8000/health)* | *API Docs: [http://localhost:8000/docs](http://localhost:8000/docs)*

---

<div align="center">

⭐ Created for SIH 2026 - Ayush Intelligence & ICD-11 Integration  
🌊 Seamlessly Bridging Traditional Wisdom with Global Standards  

</div>
