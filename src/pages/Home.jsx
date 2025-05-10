import React from 'react';
import { Link } from 'react-router-dom';
// Import your project images with the correct filenames
import rpeTrackerImage from '../assets/images/RPE.png';
import pongGameImage from '../assets/images/pong-game.jpg';

const Home = () => {
  return (
    <section className="home-section">
      <div className="hero">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Mason Crim</span>
        </h1>
        <h2 className="hero-subtitle">
          Software Development | Embedded Systems | Artificial Intelligence
        </h2>
        <p className="hero-text">
          I merge my background in athletics with my passion for building intelligent technology.

          Bringing the discipline of sports to the world of tech,
          I create practical applications that connect software, hardware, and AI.
        </p>
        <div className="cta-buttons">
          <Link to="/projects" className="cta primary">View Projects</Link>
          <Link to="/contact" className="cta secondary">Get in Touch</Link>
        </div>
      </div>
      
      <div className="featured-section">
        <h3>Featured Projects</h3>
        <div className="featured-projects">
          {/* Just a preview of 2 projects */}
          <div className="project-card">
            <img 
              src={rpeTrackerImage} 
              alt="RPE Tracker" 
              className="project-image" 
            />
            <h4>RPE Tracker</h4>
            <p>A web application to submit data and visualize it using React and Python.</p>
            <Link to="/projects" className="read-more">Learn more →</Link>
          </div>
          <div className="project-card">
            <img 
              src={pongGameImage} 
              alt="1D Pong Game" 
              className="project-image" 
            />
            <h4>1D Pong Game</h4>
            <p>A fun embedded systems project to play pong as you know it over LEDs.</p>
            <Link to="/projects" className="read-more">Learn more →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;