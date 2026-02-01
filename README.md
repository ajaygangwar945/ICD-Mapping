# 🏥 Ayush ICD-11 Mapping Platform

![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)
![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=flat-square&logo=fastapi)
![Vite](https://img.shields.io/badge/Frontend-Vite_/_React-646CFF?style=flat-square&logo=vite)

A premium, state-of-the-art healthcare interoperability platform designed to map traditional **Ayush** terminology to modern **ICD-11** and **FHIR** standards. Built with a focus on intelligence, speed, and a high-end user experience.

---

## 🚀 Live Website

The project is fully deployed and accessible online.  

[![Live](https://img.shields.io/badge/Live-Visit%20Site-brightgreen?style=flat-square)](https://icd-mapping.onrender.com)

---

## ✨ Key Features

- 🧠 **Neural Mapping Engine**: Intelligent search and translation between NAMASTE and ICD-11.
- 📱 **Mobile First Design**: Fully responsive UI that works seamlessly on any device.
- 🌓 **Adaptive Theming**: Premium dark and light modes with glassmorphic aesthetics.
- 🏥 **FHIR R4 Integration**: Native support for healthcare terminology resources.
- ⚡ **High Performance**: Built with Vite and FastAPI for sub-second response times.

---

## 🛠️ Project Architecture

The project follows a modern decoupled architecture:

- **`/frontend`**: React + Vite + TailwindCSS + Lucide Icons.
- **`/backend`**: FastAPI + Python 3.11 + Pydantic.
- **`/backend/static`**: Production build of the frontend served via the backend.

## 📂 File Structure

```text
.
├── backend/                # FastAPI Backend
│   ├── app/                # Application logic
│   │   ├── api/            # API endpoints & routing
│   │   ├── core/           # Configuration & security
│   │   ├── data/           # Database models & schemas
│   │   └── services/       # Business logic & mapping engine
│   ├── static/             # Frontend production build (generated)
│   ├── requirements.txt    # Backend dependencies
│   └── venv/               # Python virtual environment
├── frontend/               # React Frontend
│   ├── src/                # Source code
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application views
│   │   ├── App.tsx         # Main app entry point
│   │   └── main.tsx        # React mounting point
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite configuration
├── build.sh                # Unified build script
├── main.py                 # Root entry point (Production)
├── pyproject.toml          # Project configuration
├── render.yaml             # Render deployment config
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version |
| :--- | :--- |
| **Python** | 3.11+ |
| **Node.js** | 18.x or later |
| **Git** | Latest |

### 1. Development Mode (Hot-Reloading)

> [!NOTE]
> Recommended for testing UI changes and API adjustments.

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

*Access at: [http://localhost:5173](http://localhost:5173)*

### 2. Production Mode (Unified)

> [!TIP]
> Use this to test the final application as a single package.

1. Build frontend: `cd frontend && npm run build`
2. Run automation: `run_monolith.bat`

---

## 📄 Project Status

This platform represents a significant step forward in digitizing traditional medicine systems with international interoperability standards. It is currently in active development and maintenance.

© 2025 Ayush Intelligence. All Rights Reserved.
