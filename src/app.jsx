import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';  // Make sure this import exists
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  // Set initial theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = prefersDark ? 'dark' : 'light';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  return (
    <BrowserRouter>
      <div className="portfolio">
        <header className="header">
          <div className="logo">
            <span className="logo-text">Mason.dev</span>
          </div>
          <nav className="nav-tabs">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "nav-tab active" : "nav-tab"
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "nav-tab active" : "nav-tab"
            }>
              About
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => 
              isActive ? "nav-tab active" : "nav-tab"
            }>
              Projects
            </NavLink>
            <NavLink to="/skills" className={({ isActive }) => 
              isActive ? "nav-tab active" : "nav-tab"
            }>
              Skills
            </NavLink>
            {/* Make sure this Resume NavLink exists */}
            <NavLink to="/resume" className={({ isActive }) => 
              isActive ? "nav-tab active" : "nav-tab"
            }>
              Resume
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "nav-tab active" : "nav-tab"
            }>
              Contact
            </NavLink>
          </nav>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            {/* Make sure this Resume Route exists */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="social-links">
            <a href="https://github.com/mbrockman1" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/mason-brockman" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:masoncrim137@gmail.com">Email</a>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Mason Crim. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;