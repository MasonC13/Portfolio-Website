import React from 'react';

const Skills = () => {
  const skills = {
    languages: ["JavaScript", "Python", "C/C++", "Java", "HTML/CSS", "C#"],
    frameworks: ["React", "Node.js", "Express", "Flask", "TensorFlow", "PyTorch", "Chart.js"],
    tools: ["Git", "Linux", "VS Code", "Jupyter", "Makefile", "AVR-GCC Toolchain"],
    embedded: [
      "ATmega328p Microcontrollers",
      "Timers & Interrupts",
      "PWM & Buzzer Control",
      "Analog-to-Digital Conversion (ADC)",
      "Hardware Debouncing",
      "LED & Button Interfaces",
      "Breadboarding & Circuit Prototyping",
      "Power Management & Sleep Modes",
      "Arduino",
      "Custom PCB Design"
    ],
    web: [
      "Frontend: React, Vite, CSS Modules",
      "Backend: Flask, Python APIs",
      "Data Visualization: Plotly.js, Dash",
      "CSV Data Processing",
      "Email Notifications (SMTP, Nodemailer)"
    ],
    ai: [
      "Machine Learning Model Development",
      "Data Augmentation & Synthetic Data Generation",
      "Injury Risk Prediction",
      "Scikit-learn, TensorFlow"
    ]
  };

  return (
    <section className="skills-section">
      <h2 className="section-title">Skills & Expertise</h2>

      {Object.entries(skills).map(([category, items], index) => (
        <div className="skill-category" key={index}>
          <h3>{category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
          <div className="skills-grid">
            {items.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <div className="skill-icon placeholder"></div>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
