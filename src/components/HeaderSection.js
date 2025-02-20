import React, { useState, useEffect } from 'react';
import './styles/Header.css';

function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`header ${isScrolled ? 'scrolled' : ''} ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="/#home" className="logo">
        Olly<span>Cassidy</span>
      </a>

      <nav className="navbar">
        <a href="/#home" className="active">Home</a>
        <a href="/#about">About Me</a>
        <a href="/#timeline">Timeline</a>
        <a href="/#commits-section">Commits</a>
        <a href="/#papers">Papers</a>
        <a href="/#projects">Projects</a>
      </nav>
    </header>
  );
}

export default HeaderSection;