import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function HeaderSection() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
    { name: 'about',    href: '#about',          id: 'about' },
    { name: 'timeline', href: '#timeline',        id: 'timeline' },
    { name: 'research', href: '#papers',          id: 'papers' },
    { name: 'projects', href: '#projects',        id: 'projects' },
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        style={{
          backgroundColor: isScrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          transition: 'background-color 0.4s ease, backdrop-filter 0.4s ease',
          borderBottom: isScrolled ? '1px solid rgba(248,247,244,0.08)' : 'none',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.a
              href="/#home"
              className="font-black text-xl tracking-tight"
              style={{ color: isScrolled ? '#F8F7F4' : '#0A0A0A' }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.15 }}
            >
              OC
            </motion.a>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="relative"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: isScrolled ? '#F8F7F4' : '#0A0A0A',
                    opacity: activeSection === item.id ? 1 : 0.5,
                    transition: 'opacity 0.2s ease',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ color: '#FF3C00', marginRight: '3px' }}>/</span>
                  {item.name}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        right: 0,
                        height: '1.5px',
                        backgroundColor: '#FF3C00',
                        display: 'block',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <motion.a
              href="https://linkedin.com/in/oliver-cassidy-286ba3235"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: isScrolled ? '#F8F7F4' : '#0A0A0A',
                padding: '6px 14px',
                border: isScrolled ? '1px solid rgba(248,247,244,0.25)' : '1px solid rgba(10,10,10,0.25)',
                transition: 'border-color 0.2s ease, color 0.2s ease',
                textDecoration: 'none',
              }}
              whileHover={{ borderColor: '#FF3C00', color: '#FF3C00' }}
            >
              [ contact ]
            </motion.a>

          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default HeaderSection;
