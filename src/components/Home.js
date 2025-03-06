import React, { useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [selectedModel, setSelectedModel] = useState(null);

  const roleModels = {
    einstein: {
      name: "Albert Einstein",
      title: "Theoretical Physicist & Nobel Laureate",
      quote: "Imagination is more important than knowledge.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg",
      achievements: [
        {
          title: "Nobel Prize",
          description: "Awarded the 1921 Nobel Prize in Physics for his services to Theoretical Physics."
        },
        {
          title: "Theory of Relativity",
          description: "Developed the theory of relativity, one of the two pillars of modern physics."
        },
        {
          title: "Scientific Papers",
          description: "Published more than 300 scientific papers and over 150 non-scientific works."
        }
      ]
    },
    tesla: {
      name: "Nikola Tesla",
      title: "Inventor & Electrical Engineer",
      quote: "The present is theirs; the future, for which I work, is mine.",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg",
      
      achievements: [
        {
          title: "AC System",
          description: "Developed the alternating current (AC) electrical system that powers the world today."
        },
        {
          title: "Tesla Coil",
          description: "Invented the Tesla Coil, revolutionizing the transmission of electrical energy."
        },
        {
          title: "Patents",
          description: "Held over 300 patents and made groundbreaking discoveries in wireless technology."
        }
      ]
    }
  };

  const handleBack = () => {
    setSelectedModel(null);
  };

  if (selectedModel) {
    const model = roleModels[selectedModel];
    return (
      <div className="selected-model-container">
        <div className="container py-3">
          <button className="btn btn-secondary mb-4" onClick={handleBack}>
            ← Back to Role Models
          </button>
          
          <div className="role-model-details">
            <h1 className="mb-3">{model.name}</h1>
            <p className="lead mb-4">{model.title}</p>

            <div className="quote-section mb-4">
              <blockquote className="blockquote text-center">
                <p className="mb-0">"{model.quote}"</p>
                <footer className="blockquote-footer">{model.name}</footer>
              </blockquote>
            </div>

            <h2 className="text-center mb-4">Key Achievements</h2>
            <div className="row">
              {model.achievements.map((achievement, index) => (
                <div className="col-md-4 col-sm-6 mb-4" key={index}>
                  <div className="achievement-card">
                    <h3>{achievement.title}</h3>
                    <p>{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="container py-3">
        <h1 className="text-center mb-4">Inspiring Role Models</h1>
        <div className="row justify-content-center">
          {Object.entries(roleModels).map(([key, model]) => (
            <div className="col-lg-6 col-md-8 col-sm-12 mb-4" key={key}>
              <div className="role-model-card">
                <img 
                  src={model.image} 
                  alt={model.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h2 className="card-title">{model.name}</h2>
                  <p className="card-text">{model.title}</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedModel(key)}
                  >
                    View Achievements
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
