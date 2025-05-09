import React, { useState } from 'react';
import rpeTrackerImage from '../assets/images/RPE.png';
import pongGameImage from '../assets/images/pong-game.jpg';
import injuryRiskImage from '../assets/images/InjuryRisk.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Sample project data - replace with your own
  const projects = [
    {
      id: 1,
      title: "RPE Tracker",
      description: "A web application to submit workout data and visualize it using React and Python. Features include customizable tracking, progress graphs, and goal setting.",
      image: rpeTrackerImage,
      category: "software",
      technologies: ["React", "Python", "Flask", "Chart.js"],
      link: "https://github.com/MasonC13/RPE-Data-Tracker"
    },
    {
      id: 2,
      title: "1D Pong Game",
      description: "An embedded systems project that implements the classic Pong game on a single strip of LEDs. Built with Arduino and custom controller hardware.",
      image: pongGameImage,
      category: "embedded",
      technologies: ["Arduino", "C++", "Custom PCB", "LED Programming"],
      link: "https://github.com/MasonC13/1D-Pong"
    },
    {
      id: 3,
      title: "Machine Learning Injury Prediction",
      description: "A machine learning model that predicts the likelihood of sports injuries based on historical data. Utilizes Python and TensorFlow for model training.",
      // Change this line to use a placeholder div instead
      // image: project3Image,
      image: injuryRiskImage, // Use this as a marker
      category: "ai",
      technologies: ["Python", "TensorFlow", "NLTK", "Flask"],
      link: "https://github.com/MasonC13/ML-Injury-Prediction"
    }
    // Add more projects as needed
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'software' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('software')}
        >
          Software
        </button>
        <button 
          className={filter === 'embedded' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('embedded')}
        >
          Embedded Systems
        </button>
        <button 
          className={filter === 'ai' ? 'filter-btn active' : 'filter-btn'}
          onClick={() => setFilter('ai')}
        >
          AI
        </button>
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            {/* Check if image is a placeholder or an actual image */}
            {project.image === "placeholder" ? (
              <div className="project-image placeholder"></div>
            ) : (
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span className="tech-tag" key={index}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;