import React from 'react';
import './styles/Footer.css';

function FooterSection() {
  return (
    <footer className="footer">
      <div className="social">
        <a 
          href="https://linkedin.com/in/oliver-cassidy-286ba3235" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className='bx bxl-linkedin'></i>
        </a>
        <a 
          href="https://github.com/ollycassidy13" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className='bx bxl-github'></i>
        </a>
        <a 
          href="https://scholar.google.com/citations?user=CzGdJSAAAAAJ&hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className='bx bxs-graduation'></i>
        </a>
      </div>

      <nav className="footer-nav">
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#commits-section">Commits</a></li>
          <li><a href="#papers">Papers</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <p className="copyright">
        © {new Date().getFullYear()} Oliver Cassidy | All Rights Reserved
      </p>
    </footer>
  );
}

export default FooterSection;