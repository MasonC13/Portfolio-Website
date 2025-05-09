import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    // Note: We're not preventing default here as we want the form to submit to Formspree
    // e.preventDefault();

    // You can still validate if you want before submission
    if (!formData.name || !formData.email || !formData.message) {
      e.preventDefault(); // Prevent submission if validation fails
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }

    // If using Formspree, the actual submission is handled by the form action
    // This function just handles client-side validation
    // Formspree will redirect back to the page after submission
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        
      <div className="contact-info">
  <h3>Contact Information</h3>
  <p>Feel free to reach out through the form or connect with me below.</p>

  <div className="contact-details">
    <div className="contact-item">
      <div className="contact-icon">✉️</div>
      <span>masoncrim137@gmail.com</span>
    </div>
    <div className="contact-item">
      <div className="contact-icon">📍</div>
      <span>Kansas City, Missouri</span>
    </div>
    <div className="contact-item">
  <div className="contact-icon">👨‍💻</div>
  <div className="social-links" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <a href="https://github.com/MasonC13" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    <span style={{ fontSize: '1rem', lineHeight: '1' }}>|</span>
    <a href="https://www.linkedin.com/in/mason-crim-19960a294/" target="_blank" rel="noopener noreferrer">
      LinkedIn
    </a>
  </div>

    </div>
  </div>
</div>

        <div className="contact-form-container">
          {/* Replace YOUR_FORM_ID with the actual ID from Formspree */}
          <form 
            className="contact-form" 
            action="https://formspree.io/f/xgvkzwgw" 
            method="POST"
            onSubmit={handleSubmit}
          >
            {formStatus.message && (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
