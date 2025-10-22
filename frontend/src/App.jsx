import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

// ----- Styled Components -----
const Container = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 0;
  margin: 0;
`;

const Hero = styled.div`
  background-image: url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f');
  background-size: cover;
  background-position: center;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 6px rgba(0,0,0,0.6);
`;

const Form = styled.form`
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #4CAF50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #45a049;
  }
`;

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
  padding: 15px;
  margin: 15px auto;
  max-width: 600px;
  background: white;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
`;

const Tag = styled.span`
  background: ${props => props.color || "#eee"};
  color: white;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
`;

// Color palette for tags
const colors = ["#FF6B6B","#4ECDC4","#1A535C","#FFA500","#6A4C93","#FF9F1C","#2EC4B6"];

function App() {
  const [skills, setSkills] = useState("");
  const [interests, setInterests] = useState("");
  const [traits, setTraits] = useState("");
  const [remote, setRemote] = useState(true);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      skills: skills.split(",").map(s => s.trim()),
      interests: interests.split(",").map(s => s.trim()),
      traits: traits.split(",").map(t => t.trim()),
      remote_friendly: remote
    };

    try {
      console.log("Sending data:", data);
      const res = await axios.post("https://ai-career-recommender-production.up.railway.app/recommend", data);
      console.log("Response:", res.data);
      setResults(res.data.recommendations);
    } catch (err) {
      console.error(err);
    }
  };

  const renderTags = (items) => (
    <Tags>
      {items.map((item, idx) => (
        <Tag key={idx} color={colors[idx % colors.length]}>{item}</Tag>
      ))}
    </Tags>
  );

  return (
    <Container>
      <Hero>AI Career Recommender</Hero>

      <Form onSubmit={handleSubmit}>
        <label>Skills (comma separated):</label>
        <Input value={skills} onChange={e => setSkills(e.target.value)} />

        <label>Interests (comma separated):</label>
        <Input value={interests} onChange={e => setInterests(e.target.value)} />

        <label>Traits (comma separated):</label>
        <Input value={traits} onChange={e => setTraits(e.target.value)} />

        <label>
          Remote friendly:
          <input type="checkbox" checked={remote} onChange={e => setRemote(e.target.checked)} />
        </label>

        <Button type="submit">Get Recommendations</Button>
      </Form>

      <div>
        {results.map((r, idx) => (
          <Card key={idx}>
            <h3>{r}</h3>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default App;
