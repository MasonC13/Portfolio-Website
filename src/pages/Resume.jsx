import React from 'react';
import resumePDF from '../assets/documents/resume.pdf';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2 className="section-title">My Resume</h2>
      
      <div className="resume-container">
        <div className="resume-actions">
          <a 
            href={resumePDF} 
            download="Mason_Brockman_Resume.pdf"
            className="cta primary"
          >
            Download Resume
          </a>
          <a 
            href={resumePDF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta secondary"
          >
            Open in New Tab
          </a>
        </div>
        
        <div className="pdf-viewer">
          <iframe
            src={`${resumePDF}#view=FitH`}
            title="Resume"
            width="100%"
            height="800px"
            style={{ border: "1px solid var(--border)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;