import React from 'react';
// Import your profile photo
import profilePhoto from '../assets/images/profile-photo.jpg';

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <img 
          src={profilePhoto} 
          alt="Mason Crim" 
          className="about-image" 
        />
        <div className="about-text">
          <p>
            Hello! I'm a passionate CS student with interests in software development, embedded systems, and artificial intelligence. 
            Currently studying Computer Science at Truman State University, I've worked on various projects 
            ranging from low-level firmware development to sophisticated web applications.
          </p>
          <p>
            My journey in technology began as a kid playing video games and modding them. Since then, I've been dedicated 
            to creating efficient, reliable, and innovative solutions to complex problems in the real world. Hoping to find
            a career that pushes me to the best of my ability.
          </p>
          <p>
            When I'm not behind a computer, you can find me playing football, fishing, or hanging out with friends.
          </p>
          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Science in Computer Science</h4>
              <p>Truman State University, Expected 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;