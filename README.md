# AI Career Recommender

A web application that suggests career paths based on your skills, interests, traits, and work preferences. Built with **FastAPI** for the backend and **React** for the frontend.

---

## 🚀 Features

- Input your **skills, interests, traits**, and whether you are **remote-friendly**.
- Get personalized **career recommendations**.
- Clean and responsive UI.
- FastAPI backend handles the recommendation logic.
- React frontend for interactive input and results display.

---

## 🛠 Tech Stack

- **Backend:** FastAPI, Python, Pydantic
- **Frontend:** React, Styled Components
- **HTTP Client:** Axios

---

## ⚡ Installation (Local)

### Backend

```bash
# Navigate to backend folder
cd backend

# Activate virtual environment
source venv/bin/activate   # or .venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the server
uvicorn main:app --reload --port 8001



Frontend
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Run the React app
npm start

Open your browser at http://localhost:3000 (or 3001) to use the app.

🔗 API Endpoint

POST /recommend

Request Body:

{
  "skills": ["python", "java"],
  "interests": ["ai", "design"],
  "traits": ["adaptive", "creative"],
  "remote_friendly": true
}


Response:

{
  "recommendations": [
    "Software Engineer",
    "AI Engineer",
    "Remote Freelancer"
  ]
}

🌐 Deployment

You can deploy the app on free platforms like:

Railway.app (backend and frontend)

Render.com (backend)

Vercel (frontend)

Make sure the backend is running and the frontend points to the correct API URL.

📸 Screenshots

<img width="1438" height="792" alt="Screenshot 2025-10-22 at 12 10 22 PM" src="https://github.com/user-attachments/assets/2027831b-ba58-4442-96d6-138181dace28" />
