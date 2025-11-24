# 🚀 Deploying Ayush FHIR to Render

This guide will help you deploy both the **Backend (FastAPI)** and **Frontend (React/Vite)** to Render.

---

## 📋 Prerequisites

1. ✅ GitHub repository: https://github.com/ajaygangwar945/ICD-Mapping
2. ✅ Render account (free): https://render.com
3. ✅ Code pushed to GitHub

---

## 🔧 Step 1: Prepare Backend for Deployment

### 1.1 Create `render.yaml` (Optional - for Blueprint)

Create a file `render.yaml` in the root directory:

```yaml
services:
  - type: web
    name: ayush-fhir-backend
    env: python
    region: oregon
    buildCommand: "pip install -r ayush-fhir/requirements.txt"
    startCommand: "cd ayush-fhir && uvicorn app.main:app --host 0.0.0.0 --port $PORT"
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.0
```

### 1.2 Update Backend Requirements

Make sure `ayush-fhir/requirements.txt` includes all dependencies:

```txt
fastapi
uvicorn[standard]
python-multipart
pydantic
requests
```

---

## 🎨 Step 2: Prepare Frontend for Deployment

### 2.1 Create Build Script

The frontend is already configured with Vite. Ensure `package.json` has:

```json
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### 2.2 Update API Configuration

Update `ayush-fhir-sparkle/src/config/api.ts` to use environment variables:

```typescript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
```

---

## 🌐 Step 3: Deploy Backend to Render

### Option A: Using Render Dashboard (Recommended)

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click "New +"** → Select **"Web Service"**
3. **Connect GitHub Repository**:
   - Authorize Render to access your GitHub
   - Select repository: `ajaygangwar945/ICD-Mapping`
4. **Configure Service**:
   - **Name**: `ayush-fhir-backend`
   - **Region**: Oregon (US West) or closest to you
   - **Branch**: `main`
   - **Root Directory**: `ayush-fhir`
   - **Runtime**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
5. **Environment Variables** (if needed):
   - Add any API keys or configuration
6. **Select Plan**: Free (or paid if needed)
7. **Click "Create Web Service"**

### Option B: Using Render Blueprint

1. Push the `render.yaml` file to your repository
2. Go to Render Dashboard → **"New +"** → **"Blueprint"**
3. Connect your repository
4. Render will automatically detect and deploy based on `render.yaml`

---

## 🎨 Step 4: Deploy Frontend to Render

### 4.1 Deploy as Static Site

1. **Go to Render Dashboard**: https://dashboard.render.com
2. **Click "New +"** → Select **"Static Site"**
3. **Connect GitHub Repository**:
   - Select repository: `ajaygangwar945/ICD-Mapping`
4. **Configure Static Site**:
   - **Name**: `ayush-fhir-frontend`
   - **Branch**: `main`
   - **Root Directory**: `ayush-fhir-sparkle`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. **Environment Variables**:
   - **Key**: `VITE_API_URL`
   - **Value**: `https://ayush-fhir-backend.onrender.com` (your backend URL)
6. **Click "Create Static Site"**

---

## 🔗 Step 5: Configure CORS

Update `ayush-fhir/app/main.py` to allow your frontend domain:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://ayush-fhir-frontend.onrender.com"  # Add your Render frontend URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Commit and push this change:

```bash
git add ayush-fhir/app/main.py
git commit -m "feat: Add CORS configuration for Render deployment"
git push origin main
```

---

## ✅ Step 6: Verify Deployment

### Backend
1. Visit: `https://ayush-fhir-backend.onrender.com`
2. Check API docs: `https://ayush-fhir-backend.onrender.com/docs`
3. Test health endpoint: `https://ayush-fhir-backend.onrender.com/health`

### Frontend
1. Visit: `https://ayush-fhir-frontend.onrender.com`
2. Test all features
3. Verify API connectivity

---

## 🔄 Step 7: Auto-Deploy on Git Push

Render automatically deploys when you push to the `main` branch:

```bash
# Make changes
git add .
git commit -m "Your commit message"
git push origin main

# Render will automatically detect and deploy! 🚀
```

---

## 📝 Important Notes

### Free Tier Limitations
- ⚠️ **Cold Starts**: Free services spin down after 15 minutes of inactivity
- ⚠️ **First Request**: May take 30-60 seconds to wake up
- ⚠️ **Build Time**: Limited to 90 seconds on free tier

### Upgrade Options
- **Starter Plan**: $7/month - No cold starts, faster builds
- **Standard Plan**: $25/month - More resources, custom domains

---

## 🐛 Troubleshooting

### Backend Not Starting
- Check logs in Render Dashboard
- Verify `requirements.txt` is complete
- Ensure `PORT` environment variable is used

### Frontend Build Fails
- Check Node.js version compatibility
- Verify all dependencies in `package.json`
- Check build logs for errors

### CORS Errors
- Verify backend CORS configuration
- Check frontend API URL configuration
- Ensure both services are deployed

---

## 🎯 Quick Deployment Checklist

- [ ] Push latest code to GitHub
- [ ] Create Render account
- [ ] Deploy backend web service
- [ ] Note backend URL
- [ ] Deploy frontend static site with backend URL
- [ ] Update CORS in backend
- [ ] Test both deployments
- [ ] Share live URLs!

---

## 🌟 Your Live URLs

After deployment, you'll have:

- **Backend**: `https://ayush-fhir-backend.onrender.com`
- **Frontend**: `https://ayush-fhir-frontend.onrender.com`
- **API Docs**: `https://ayush-fhir-backend.onrender.com/docs`

---

## 📚 Additional Resources

- [Render Documentation](https://render.com/docs)
- [FastAPI Deployment Guide](https://fastapi.tiangolo.com/deployment/)
- [Vite Production Build](https://vitejs.dev/guide/build.html)

---

**Happy Deploying! 🚀**
