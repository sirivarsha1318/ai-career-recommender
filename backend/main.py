from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Allow frontend connections
origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request model
class UserInput(BaseModel):
    skills: list[str]
    interests: list[str]
    traits: list[str]
    remote_friendly: bool

# Example simple logic
@app.post("/recommend")
def recommend_career(data: UserInput):
    recommendations = []

    if "coding" in data.skills or "python" in data.skills:
        recommendations.append("Software Engineer")
    if "design" in data.interests:
        recommendations.append("UI/UX Designer")
    if "ai" in data.interests:
        recommendations.append("AI Engineer")
    if "communication" in data.skills:
        recommendations.append("Product Manager")
    if data.remote_friendly:
        recommendations.append("Remote Freelancer")

    if not recommendations:
        recommendations.append("Data Analyst")

    return {"recommendations": recommendations}
# Add this to your main.py
@app.get("/")
def root():
    return {"message": "AI Career Recommender is live!"}
