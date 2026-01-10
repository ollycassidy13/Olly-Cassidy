import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './styles/Header.css';

function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'timeline', 'commits-section', 'papers', 'projects'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Commits', href: '#commits-section', id: 'commits-section' },
    { name: 'Papers', href: '#papers', id: 'papers' },
    { name: 'Projects', href: '#projects', id: 'projects' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={`flex items-center justify-between backdrop-blur-xl bg-white/80 rounded-full px-6 py-3 shadow-lg transition-all duration-300 ${
          isScrolled ? 'shadow-xl' : ''
        }`}>
          <motion.a 
            href="/#home" 
            className="text-2xl font-black text-gray-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Olly <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Cassidy</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-2 bg-gray-100 rounded-full p-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-white rounded-full shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </nav>

          <motion.a
            href="https://linkedin.com/in/oliver-cassidy-286ba3235"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}

export default HeaderSection;