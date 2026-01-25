<div align="center">

# 🏥 ICD-Mapping: Ayush Healthcare Interoperability Platform

### 🌿 Bridging Traditional Medicine with Modern Healthcare Standards

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-success?style=for-the-badge)](https://icd-mapping.onrender.com)
[![Python](https://img.shields.io/badge/Python-3.11+-3776ab?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![FHIR](https://img.shields.io/badge/FHIR-R4-ff6b6b?style=for-the-badge&logo=hl7&logoColor=white)](https://www.hl7.org/fhir/)
[![ICD-11](https://img.shields.io/badge/ICD--11-WHO-4dabf7?style=for-the-badge&logo=world-health-organization&logoColor=white)](https://icd.who.int/)

![Healthcare Banner](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80)

**🚀 [Visit Live Application](https://icd-mapping.onrender.com) | 📚 [API Documentation](https://icd-mapping.onrender.com/docs) | 🎯 [Backend Repo](ayush-fhir/) | ⚡ [Frontend Repo](ayush-fhir-sparkle/)**

</div>

---

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [🎯 Problem Statement](#-problem-statement)
- [🌟 Key Features](#-key-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📦 Project Structure](#-project-structure)
- [🌐 Deployment](#-deployment)
- [📡 API Endpoints](#-api-endpoints)
- [🎨 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Overview

**ICD-Mapping** is a comprehensive healthcare interoperability platform that enables seamless integration between India's traditional **Ayush systems** (Ayurveda, Yoga, Unani, Siddha, Homeopathy) and modern global healthcare standards through **FHIR R4** compliance and **ICD-11** dual coding.

### 🎯 Why ICD-Mapping?

| Benefit | Description |
|---------|-------------|
| 🔄 **Interoperability** | Enable clinicians across different systems to understand patient records |
| 📊 **Analytics** | Support public health analytics spanning traditional and biomedical medicine |
| 💰 **Insurance** | Make Ayush treatments reimbursable through ICD-11 coding |
| ✅ **Compliance** | Full adherence to India's 2016 EHR Standards and FHIR R4 |
| 🌍 **Global Standards** | Integration with WHO ICD-11, SNOMED CT, and LOINC |

---

## 🎯 Problem Statement

Traditional Ayush healthcare systems in India face critical challenges in interoperability with modern healthcare infrastructure. This platform addresses:

- **🔗 Data Exchange**: Lack of standardized terminology mapping between Ayush and biomedical systems
- **📋 Insurance Claims**: Difficulty in processing insurance claims for traditional treatments
- **📊 Public Health**: Limited ability to analyze health trends across traditional and modern medicine
- **🏥 Clinical Integration**: Challenges in sharing patient records between Ayush and allopathic practitioners

### 💡 Our Solution

ICD-Mapping implements **dual/double coding** that maps NAMASTE (National Ayush Morbidity And Standardized Terminologies Electronic) codes to:

- 🌿 **WHO ICD-11 Traditional Medicine (TM2)** linearization
- 💊 **WHO ICD-11 Biomedicine** codes
- 🧬 **SNOMED CT** clinical findings
- 🧪 **LOINC** laboratory tests

---

## 🌟 Key Features

### 🔥 Core Capabilities

- ✅ **FHIR R4 Compliant** - Full HL7 FHIR R4 protocol implementation
- ✅ **Dual Coding System** - NAMASTE ↔ ICD-11 bidirectional translation
- ✅ **AI-Powered Mapping** - Confidence-scored suggestions for term mapping
- ✅ **WHO ICD-11 Integration** - Real-time API integration with WHO terminology
- ✅ **SNOMED CT/LOINC** - Semantic coding for clinical findings and lab tests
- ✅ **CSV Data Ingestion** - Bulk upload and validation of terminology datasets
- ✅ **Auto-complete Search** - Fuzzy matching with typo tolerance
- ✅ **Multi-language Support** - English and Hindi terminology support

### 🔐 Security & Compliance

- ✅ **ABHA OAuth2** - Ayushman Bharat Health Account authentication
- ✅ **ISO 22600 Access Control** - Consent-based privilege management
- ✅ **Audit Trails** - Complete AuditEvent and Provenance tracking
- ✅ **Version Control** - Resource versioning and update timestamps

### 📊 Analytics & Visualization

- ✅ **Interactive Dashboard** - Real-time statistics and charts giving a snapshot of the system's health and usage.
- ✅ **Dual Coding Coverage** -  A key metric showing the percentage of NAMASTE terms that have been successfully mapped to ICD-11, SNOMED CT, or LOINC. This percentage helps track the progress of interoperability efforts.
- ✅ **Top Terms Analysis** - A dynamic bar chart visualizing the most frequently accessed or mapped NAMASTE terms, helping to identify high-priority conditions for resource allocation.
- ✅ **Usage Patterns** - System monitoring and insights to understand how practitioners are interacting with the platform.

---

## 🏗️ Architecture

### 🔧 System Architecture

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[⚛️ React + TypeScript<br/>Vite + Tailwind CSS]
    end
    
    subgraph "Backend Layer"
        B[🐍 FastAPI Server]
        C[📊 NAMASTE Integration]
        D[🌍 WHO ICD-11 API]
        E[🧬 SNOMED CT/LOINC]
        F[🔐 ISO 22600 Access Control]
        G[🔑 ABHA OAuth2]
    end
    
    subgraph "Data Layer"
        H[💾 In-Memory Store]
        I[📋 FHIR Resources]
    end
    
    subgraph "External Services"
        J[🌐 WHO ICD-11 API]
        K[🔒 ABHA Service]
    end
    
    A -->|REST API| B
    B --> C
    B --> D
    B --> E
    B --> F
    B --> G
    C --> H
    D --> J
    G --> K
    B --> I
    
    style A fill:#61dafb,color:#000
    style B fill:#009688,color:#fff
    style H fill:#3776ab,color:#fff
    style I fill:#ff6b6b,color:#fff
```

### 📦 Component Overview

| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Frontend** | React 18 + TypeScript + Vite | Modern, responsive UI with real-time updates |
| **Backend** | FastAPI (Python 3.11+) | High-performance REST API server |
| **FHIR Engine** | Custom FHIR R4 Implementation | CodeSystem, ConceptMap, Condition resources |
| **Authentication** | OAuth2 + JWT | ABHA integration and access control |
| **Data Storage** | In-memory (Production: PostgreSQL) | Fast terminology lookups |
| **Deployment** | Render.com | Cloud hosting with auto-scaling |

---

## 🛠️ Tech Stack

### 🔙 Backend (ayush-fhir)

| Technology | Version | Purpose |
|------------|---------|---------|
| ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) | 3.11+ | Core language |
| ![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat&logo=fastapi&logoColor=white) | 0.100+ | Web framework |
| ![Uvicorn](https://img.shields.io/badge/Uvicorn-499848?style=flat&logo=gunicorn&logoColor=white) | Latest | ASGI server |
| ![Pydantic](https://img.shields.io/badge/Pydantic-E92063?style=flat&logo=pydantic&logoColor=white) | Latest | Data validation |

### 🎨 Frontend (ayush-fhir-sparkle)

| Technology | Version | Purpose |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black) | 18.x | UI library |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | 5.x | Type safety |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | 5.x | Build tool |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white) | 3.x | Styling |
| ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chart.js&logoColor=white) | Latest | Data visualization |

### 📋 Standards & Protocols

- 🏥 **FHIR R4** - Fast Healthcare Interoperability Resources
- 🌍 **ICD-11** - WHO International Classification of Diseases
- 🧬 **SNOMED CT** - Systematized Nomenclature of Medicine
- 🧪 **LOINC** - Logical Observation Identifiers Names and Codes
- 🔒 **ISO 22600** - Health informatics privilege management
- 🔑 **OAuth 2.0** - Authorization framework

---

## 🚀 Quick Start

### 📋 Prerequisites

- 🐍 **Python 3.11+** - [Download](https://www.python.org/)
- 📦 **Node.js 16+** - [Download](https://nodejs.org/)
- 🔧 **Git** - [Download](https://git-scm.com/)

### 🔧 Installation

#### 1️⃣ Clone the Repository

```bash
git clone <YOUR_REPO_URL>
cd ICD-Mapping
```

#### 2️⃣ Backend Setup (ayush-fhir)

```bash
# Navigate to backend directory
cd ayush-fhir

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Backend will be available at:** `http://localhost:8000`

#### 3️⃣ Frontend Setup (ayush-fhir-sparkle)

```bash
# Open a new terminal and navigate to frontend directory
cd ayush-fhir-sparkle

# Install dependencies
npm install

# Start the development server
npm run dev
```

**Frontend will be available at:** `http://localhost:5173`

### 🌐 Access the Application

| Service | URL | Description |
|---------|-----|-------------|
| 🏠 **Frontend UI** | <http://localhost:5173> | Main application interface |
| 🔌 **Backend API** | <http://localhost:8000> | REST API server |
| 📚 **API Docs** | <http://localhost:8000/docs> | Interactive Swagger documentation |
| 🔍 **ReDoc** | <http://localhost:8000/redoc> | Alternative API documentation |
| ❤️ **Health Check** | <http://localhost:8000/health> | Server health status |

---

## 📦 Project Structure

```
ICD-Mapping/
├── 📁 ayush-fhir/                    # Backend (FastAPI)
│   ├── 📁 app/
│   │   ├── main.py                   # FastAPI application entry
│   │   ├── api.py                    # API endpoints
│   │   ├── fhir_resources.py         # FHIR resource generation
│   │   ├── who_api.py                # WHO ICD-11 integration
│   │   ├── snomed_loinc.py           # SNOMED CT/LOINC integration
│   │   ├── iso_22600.py              # Access control
│   │   ├── storage.py                # Data storage
│   │   └── ingest.py                 # CSV ingestion
│   ├── 📁 data/                      # NAMASTE datasets
│   ├── 📁 static/                    # Static files
│   ├── requirements.txt              # Python dependencies
│   ├── cli.py                        # CLI interface
│   └── README.md                     # Backend documentation
│
├── 📁 ayush-fhir-sparkle/            # Frontend (React + TypeScript)
│   ├── 📁 src/
│   │   ├── 📁 components/            # React components
│   │   ├── 📁 pages/                 # Page components
│   │   ├── 📁 config/                # Configuration
│   │   ├── 📁 lib/                   # Utilities
│   │   ├── 📁 hooks/                 # Custom hooks
│   │   ├── App.tsx                   # Main app component
│   │   ├── main.tsx                  # Entry point
│   │   └── index.css                 # Global styles
│   ├── 📁 public/                    # Static assets
│   ├── package.json                  # Node dependencies
│   ├── vite.config.ts                # Vite configuration
│   ├── tailwind.config.ts            # Tailwind configuration
│   └── README.md                     # Frontend documentation
│
├── render.yaml                       # Render deployment config
├── requirements.txt                  # Root Python dependencies
└── README.md                         # This file
```

---

## 🌐 Deployment

### 🚀 Live Application

**🌐 Production URL:** [https://icd-mapping.onrender.com](https://icd-mapping.onrender.com)

### ☁️ Deployment Platform: Render.com

This application is deployed on **Render** with the following configuration:

#### Backend Service

- **Type:** Web Service
- **Environment:** Python 3.11
- **Region:** Oregon
- **Build Command:** `pip install -r requirements.txt`
- **Start Command:** `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

#### Frontend Service

- **Type:** Static Site
- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

### 📝 Deployment Configuration

The `render.yaml` file contains the complete deployment configuration for both services.

### 🔄 Auto-Deployment

- ✅ Automatic deployments on Git push
- ✅ Zero-downtime deployments
- ✅ Automatic HTTPS/SSL certificates
- ✅ Environment variable management

---

## 📡 API Endpoints

### 🔤 Core Terminology

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/search?q={term}` | GET | 🔍 Search NAMASTE terms with fuzzy matching |
| `/suggest?q={term}` | GET | 🤖 AI-powered suggestions with confidence scores |
| `/translate?code={code}&system={namaste\|icd11}` | GET | 🔄 Bidirectional translation |
| `/codesystem` | GET | 📋 FHIR CodeSystem for NAMASTE terms |
| `/conceptmap` | GET | 🗺️ FHIR ConceptMap NAMASTE → ICD-11 |

### 🌍 WHO ICD-11 Integration

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/who/tm2/search?q={term}` | GET | 🌿 Search WHO ICD-11 TM2 entities |
| `/who/biomedicine/search?q={term}` | GET | 💊 Search WHO ICD-11 Biomedicine |

### 🔬 SNOMED CT / LOINC

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/snomed/search?q={term}` | GET | 🧬 Search SNOMED CT concepts |
| `/loinc/search?q={term}` | GET | 🧪 Search LOINC codes |

### 📋 FHIR Resources

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/fhir/problem-list?namaste_code={code}` | POST | 🏥 Create dual-coded Problem List entry |
| `/ingest-bundle` | POST | 📦 Ingest FHIR Bundle with validation |
| `/ingest-csv` | POST | 📤 Upload CSV data |
| `/ingest-default` | POST | 📥 Load default 200-record dataset |

### 🔐 Security & Compliance

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth?abha_id={id}` | POST | 🔑 Mock ABHA authentication |
| `/access-check` | POST | 🔒 ISO 22600 access control validation |
| `/audit` | GET | 📜 Retrieve AuditEvent logs |
| `/provenance` | GET | 🔍 Retrieve Provenance metadata |

### 📊 Analytics

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/stats/top-terms` | GET | 📈 Top NAMASTE terms by frequency |
| `/stats/dual-coding-rate` | GET | 📊 Dual coding coverage statistics |

**📚 Complete API Documentation:** [https://icd-mapping.onrender.com/docs](https://icd-mapping.onrender.com/docs)

---

## 🎨 Screenshots

> **Note:** Visit the [live application](https://icd-mapping.onrender.com) to see the platform in action!

### Key Features

- 📊 **Interactive Dashboard** with real-time analytics
- 🔍 **Smart Search** with auto-complete and fuzzy matching
- 🔄 **Dual Coding Interface** for NAMASTE ↔ ICD-11 translation
- 📤 **CSV Upload** with drag-and-drop functionality
- 🏥 **FHIR Problem List** creation with multiple coding systems
- 📈 **Analytics Charts** showing usage patterns and coverage

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 📝 Contribution Guidelines

1. 🍴 **Fork the repository**
2. 🌿 **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push to the branch** (`git push origin feature/AmazingFeature`)
5. 🎉 **Open a Pull Request**

### 🔧 Development Guidelines

- Use **Python 3.11+** for backend development
- Follow **PEP 8** style guide for Python code
- Use **TypeScript** for frontend development
- Follow **React best practices** and hooks patterns
- Write **meaningful commit messages**
- Add **comments** for complex logic
- Test your changes thoroughly

### 🐛 Bug Reports

Found a bug? Please open an issue with:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

---

## 📄 License

This project is developed for the **Ministry of Ayush** hackathon and demonstrates interoperability between traditional Indian medicine and global healthcare standards.

**Category:** Software | **Theme:** MedTech / BioTech / HealthTech

---

## 🏆 Acknowledgments

### 🙏 Built For

- **Ministry of Ayush** - Government of India
- **All India Institute of Ayurveda (AIIA)**

### 🌟 Standards & Organizations

- **HL7 International** - FHIR R4 Standards
- **World Health Organization (WHO)** - ICD-11 Classification
- **SNOMED International** - Clinical Terminology
- **Regenstrief Institute** - LOINC Codes

### 💡 Special Thanks

- Healthcare interoperability community
- Open source contributors
- FHIR community

---

<div align="center">

### 🌟 Built with ❤️ for Better Healthcare Interoperability

**🚀 [Visit Live Application](https://icd-mapping.onrender.com)**

[![GitHub](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github)](https://github.com/your-repo)
[![Documentation](https://img.shields.io/badge/📚_API-Documentation-009688?style=for-the-badge)](https://icd-mapping.onrender.com/docs)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

**[⬆ Back to Top](#-icd-mapping-ayush-healthcare-interoperability-platform)**

</div>
