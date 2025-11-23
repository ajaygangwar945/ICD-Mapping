<div align="center">

# 🏥 Ayush FHIR Sparkle

### ✨ Advanced Healthcare Interoperability Platform for Ayush Systems

[![React](https://img.shields.io/badge/React-18.x-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

![Banner](https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80)

</div>

---

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [🎯 Key Features](#-key-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📦 Project Structure](#-project-structure)
- [🔗 Backend Connection](#-backend-connection)
- [🎨 UI Components](#-ui-components)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## ✨ Overview

**Ayush FHIR Sparkle** is a cutting-edge healthcare interoperability platform designed to bridge the gap between traditional Ayush systems and modern FHIR (Fast Healthcare Interoperability Resources) standards. This frontend application provides a beautiful, intuitive interface for seamless data exchange, intelligent coding, and comprehensive analytics for healthcare providers.

### 🎯 Why Ayush FHIR Sparkle?

- 🏥 **Interoperability First**: Seamlessly connect traditional Ayush practices with modern healthcare systems
- 📊 **Data-Driven Insights**: Real-time analytics and visualization for better decision-making
- 🔒 **Secure & Compliant**: Built with healthcare standards and security best practices
- 🎨 **Modern UX**: Intuitive, responsive design that healthcare professionals love

---

## 🎯 Key Features

### 🔄 **FHIR Integration**
Complete HL7 FHIR R4 protocol support for standardized healthcare data exchange

### 📊 **Interactive Analytics Dashboard**
- Real-time system statistics visualization
- Beautiful charts powered by Chart.js and Recharts
- Dual-coding coverage metrics
- Top terms frequency analysis

### 📝 **Intelligent ICD Mapping**
- AI-powered mapping of Ayush terms to ICD-11 codes
- Confidence-scored suggestions
- Bidirectional translation (NAMASTE ↔ ICD-11)
- Fuzzy search with typo tolerance

### 📤 **CSV Data Ingestion**
- Drag-and-drop file upload
- Bulk data import capabilities
- Real-time validation and feedback
- Support for NAMASTE terminology datasets

### 🔍 **Advanced Search**
- Auto-complete functionality
- Fuzzy matching for better results
- Multi-language support (English, Hindi)
- SNOMED CT and LOINC integration

### 🔐 **Authentication & Security**
- ABHA (Ayushman Bharat Health Account) OAuth integration
- ISO 22600 access control
- Consent management
- Audit trail visualization

### ⚡ **Real-time Processing**
Fast and efficient data processing with instant feedback

### 🎨 **Modern UI/UX**
- Responsive design for all devices
- Dark mode support
- Glassmorphism effects
- Smooth animations and transitions
- Accessible components (shadcn/ui)

---

## 🛠️ Tech Stack

### **Core Framework**
- ⚛️ **React 18.x** - Modern UI library with hooks
- 📘 **TypeScript 5.x** - Type-safe development
- ⚡ **Vite 5.x** - Lightning-fast build tool

### **Styling & UI**
- 🎨 **Tailwind CSS 3.x** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful, accessible component library
- 🎭 **Lucide React** - Modern icon library

### **Data Visualization**
- 📊 **Chart.js** - Flexible charting library
- 📈 **Recharts** - Composable charting library
- 🎯 **react-chartjs-2** - React wrapper for Chart.js

### **Additional Libraries**
- 📁 **react-dropzone** - Drag-and-drop file uploads
- 🔄 **Axios** - HTTP client for API calls

---

## 🚀 Quick Start

### 📋 Prerequisites

Make sure you have the following installed on your system:

- 📦 **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- 📦 **npm** (v7 or higher) - Comes with Node.js
- 🔧 **Git** - [Download](https://git-scm.com/)

### 🔧 Installation

1️⃣ **Clone the repository**
```bash
git clone <YOUR_REPO_URL>
cd ICD-Mapping/Ayush-FHIR-Sparkle
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Configure API endpoint** (Optional)

Edit `src/config/api.ts` to point to your backend:
```typescript
const API_BASE_URL = 'http://localhost:8000'; // Change if needed
```

4️⃣ **Start the development server**
```bash
npm run dev
```

5️⃣ **Open in your browser**
```
🌐 Frontend: http://localhost:5173
📚 Vite Dev Server: Running with hot module replacement
```

### 🏗️ Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📦 Project Structure

```
Ayush-FHIR-Sparkle/
├── 📁 public/              # Static assets
├── 📁 src/
│   ├── 📁 components/      # React components
│   │   ├── DashboardSection.tsx
│   │   ├── CSVIngestSection.tsx
│   │   ├── ModernCSVIngestSection.tsx
│   │   ├── FhirProblemSection.tsx
│   │   ├── AuthBundleSection.tsx
│   │   └── ...
│   ├── 📁 config/          # Configuration files
│   │   └── api.ts          # API endpoints configuration
│   ├── 📁 lib/             # Utility functions
│   ├── 📁 hooks/           # Custom React hooks
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── 📄 package.json         # Dependencies and scripts
├── 📄 tsconfig.json        # TypeScript configuration
├── 📄 vite.config.ts       # Vite configuration
├── 📄 tailwind.config.js   # Tailwind CSS configuration
└── 📄 README.md            # This file
```

---

## 🔗 Backend Connection

This frontend connects to the **Ayush-FHIR** FastAPI backend. Make sure the backend is running before starting the frontend.

### 🔧 Backend Setup

```bash
# Navigate to backend directory
cd ../Ayush-FHIR

# Activate virtual environment
.\venv\Scripts\activate  # Windows
source venv/bin/activate # Linux/Mac

# Start backend server
python -m uvicorn app.main:app --reload
```

### 🌐 API Endpoints

The frontend communicates with these backend endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/ingest-csv` | POST | Upload CSV data |
| `/ingest-default` | POST | Load default dataset |
| `/search` | GET | Search NAMASTE terms |
| `/suggest` | GET | AI-powered suggestions |
| `/translate` | GET | Translate between systems |
| `/who/tm2/search` | GET | Search WHO ICD-11 TM2 |
| `/snomed/search` | GET | Search SNOMED CT |
| `/loinc/search` | GET | Search LOINC codes |
| `/fhir/problem-list` | POST | Create dual-coded entry |
| `/auth` | POST | ABHA authentication |
| `/stats/top-terms` | GET | Analytics data |

For complete API documentation, visit: `http://localhost:8000/docs`

---

## 🎨 UI Components

### 🏠 Main Sections

- **📊 Dashboard** - System statistics and analytics
- **📤 CSV Ingest** - Data upload and management
- **🔍 Search & Translate** - Term lookup and conversion
- **🔐 Authentication** - ABHA OAuth integration
- **📋 Problem List** - Dual-coded clinical entries
- **🔒 Access Control** - ISO 22600 compliance
- **📜 Audit & Provenance** - Compliance tracking

### 🎨 Design System

- **Color Palette**: Modern, healthcare-friendly colors
- **Typography**: Inter font family for clarity
- **Spacing**: Consistent 8px grid system
- **Components**: Reusable shadcn/ui components
- **Animations**: Smooth transitions and micro-interactions

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork the repository**
2. 🌿 **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. 💾 **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. 📤 **Push to the branch** (`git push origin feature/AmazingFeature`)
5. 🎉 **Open a Pull Request**

### 📝 Coding Standards

- Use TypeScript for type safety
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic
- Test your changes thoroughly

---

## 📄 License

This project is developed for the **Ministry of Ayush** hackathon, demonstrating interoperability between traditional Indian medicine and global healthcare standards.

---

<div align="center">

### 🌟 Built with ❤️ for Better Healthcare Interoperability

**Ministry of Ayush** | **All India Institute of Ayurveda (AIIA)**

**Category**: Software | **Theme**: MedTech / BioTech / HealthTech

---

**[⬆ Back to Top](#-ayush-fhir-sparkle)**

</div>
