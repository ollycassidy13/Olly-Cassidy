import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = [
  { label: 'Software Engineer',       num: '01' },
  { label: 'Digital Design Engineer', num: '02' },
  { label: 'FPGA Researcher',         num: '03' },
  { label: 'Track Athlete',           num: '04' },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const charReveal = {
  hidden: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
  show: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HomeSection() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentRole]);

  const labelChars = 'OLIVER CASSIDY — 2026'.split('');

  return (
    <section className="home" id="home">
      <div
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundColor: '#F8F7F4' }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-20 min-h-screen flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 items-center">

            {/* ── Left ── */}
            <div>
              {/* Animated label */}
              <motion.div
                className="mb-8"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#888888',
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  {labelChars.map((ch, i) => (
                    <motion.span
                      key={i}
                      variants={charReveal}
                      style={{ display: 'inline-block', whiteSpace: 'pre' }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* OLLY */}
              <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
                <motion.div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(72px, 13vw, 152px)',
                    lineHeight: 0.88,
                    color: '#0A0A0A',
                    letterSpacing: '-0.02em',
                  }}
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  OLLY
                </motion.div>
              </div>

              {/* CASSIDY */}
              <div style={{ overflow: 'hidden', marginBottom: '28px' }}>
                <motion.div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 900,
                    fontSize: 'clamp(72px, 13vw, 152px)',
                    lineHeight: 0.88,
                    color: '#0A0A0A',
                    letterSpacing: '-0.02em',
                  }}
                  initial={{ y: '115%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.85, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                >
                  CASSIDY
                </motion.div>
              </div>

              {/* Rule */}
              <motion.div
                style={{ height: '1px', backgroundColor: '#0A0A0A', marginBottom: '24px' }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Role indicator */}
              <motion.div
                style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '36px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#FF3C00' }}>
                  {roles[currentRole].num}/04
                </span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#888' }}>
                  →
                </span>
                <div style={{ height: '20px', overflow: 'hidden' }}>
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRole}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -24, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        display: 'block',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '13px',
                        color: '#0A0A0A',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {roles[currentRole].label}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <motion.a
                  href="#about"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#0A0A0A',
                    color: '#F8F7F4',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    padding: '13px 26px',
                    textDecoration: 'none',
                    border: '1.5px solid #0A0A0A',
                  }}
                  whileHover={{ backgroundColor: '#FF3C00', borderColor: '#FF3C00' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Work
                </motion.a>

                <motion.a
                  href="Oliver_Cassidy_CV.pdf"
                  download="Oliver_Cassidy_CV.pdf"
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'transparent',
                    color: '#0A0A0A',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    padding: '13px 26px',
                    textDecoration: 'none',
                    border: '1.5px solid rgba(10,10,10,0.25)',
                  }}
                  whileHover={{ borderColor: '#0A0A0A' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social links */}
              <motion.div
                style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                {[
                  { label: 'LinkedIn', href: 'https://linkedin.com/in/oliver-cassidy-286ba3235' },
                  { label: 'GitHub',   href: 'https://github.com/ollycassidy13' },
                  { label: 'Scholar',  href: 'https://scholar.google.com/citations?user=CzGdJSAAAAAJ&hl=en' },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: '#888888',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    whileHover={{ color: '#FF3C00' }}
                  >
                    <span style={{ color: '#FF3C00' }}>→</span> {s.label}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* ── Right ── */}
            <motion.div
              className="hidden lg:flex justify-center items-center"
              style={{ position: 'relative' }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{ position: 'relative', display: 'inline-block' }}>
                {/* Photo */}
                <div
                  style={{
                    transform: 'rotate(-3deg)',
                    border: '3px solid #FF3C00',
                    width: '320px',
                    height: '400px',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/img/home.png"
                    alt="Olly Cassidy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Side label */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-48px',
                    top: '50%',
                    transform: 'translateY(-50%) rotate(-90deg)',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#888888',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Imperial College London
                </div>

                {/* Stickers */}
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-16px',
                    right: '-32px',
                    backgroundColor: '#0A0A0A',
                    color: '#F8F7F4',
                    padding: '7px 13px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                    transform: 'rotate(2deg)',
                  }}
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Dean's List 2024
                </motion.div>

                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '-40px',
                    backgroundColor: '#FF3C00',
                    color: '#F8F7F4',
                    padding: '7px 13px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                    transform: 'rotate(-1.5deg)',
                  }}
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                >
                  FPGA 2025
                </motion.div>

                <motion.div
                  style={{
                    position: 'absolute',
                    bottom: '-18px',
                    left: '16px',
                    backgroundColor: '#0A0A0A',
                    color: '#F8F7F4',
                    padding: '7px 13px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    whiteSpace: 'nowrap',
                    transform: 'rotate(1deg)',
                  }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  AMD 2026 ↗
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.div
            style={{ width: '1px', height: '44px', backgroundColor: '#0A0A0A', opacity: 0.3 }}
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#888888',
              writingMode: 'vertical-rl',
            }}
          >
            scroll
          </span>
        </motion.div>

      </div>
    </section>
  );
}
