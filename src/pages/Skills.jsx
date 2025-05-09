import React from 'react';

const Skills = () => {
  const skills = {
    languages: ["JavaScript", "Python", "C/C++", "Java", "HTML/CSS"],
    frameworks: ["React", "Node.js", "Express", "TensorFlow", "PyTorch", "Arduino"],
    tools: ["Git", "Docker", "AWS", "Linux", "VS Code", "Jupyter"],
    embedded: ["Microcontrollers", "Sensors", "PCB Design", "RTOS", "IoT Protocols"]
  };

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills & Expertise</h2>
      
      <div className="skills-container">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skills-grid">
            {skills.languages.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon placeholder"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Frameworks & Libraries</h3>
          <div className="skills-grid">
            {skills.frameworks.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon placeholder"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Tools & Platforms</h3>
          <div className="skills-grid">
            {skills.tools.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon placeholder"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="skill-category">
          <h3>Embedded Systems</h3>
          <div className="skills-grid">
            {skills.embedded.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon placeholder"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;