import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { title: 'CMATMUL',                href: 'https://github.com/ollycassidy13/CMATMUL',            image: '/img/cannl.png',     description: 'C++ matrix multiplication kernel with 100× throughput gain via cache-aware tiling, AVX2 microkernel and OpenMP.', category: 'Performance' },
  { title: 'MP3Meta',                href: 'https://mp3-meta.vercel.app/',                         image: '/img/mp3meta.png',   description: 'React web app for editing MP3 file metadata using the ID3 library.', category: 'Web' },
  { title: 'CAPTCHA',              href: 'https://github.com/ollycassidy13/CAPTCHA',                                           image: '/img/captcha.jpg', description: 'ML model trained to break CAPTCHA challenges — image classification using CRNN.', category: 'ML' },
  { title: 'Topz',                   href: 'https://github.com/ollycassidy13/Topz',                image: '/img/topz.png',      description: 'Real-time Linux system performance monitor in C++ — CPU, memory, and disk usage.', category: 'Systems' },
  { title: 'Network Intrusion',      href: 'https://github.com/ollycassidy13/nids',                image: '/img/nids.png',      description: 'FNN trained on CIC-IDS2017 to classify 15 types of network attacks.', category: 'ML' },
  { title: 'Wildfire Sentinel',      href: 'https://wildfire-sentinel.onrender.com/',              image: '/img/wildfire.png',  description: 'NASA wildfire data on an interactive OpenStreetMap with real-time event tracking.', category: 'Web' },
  { title: 'Landline',               href: '/landline',                                            image: '/img/landline.jpg',  description: 'Landline built from Op Amps, logic gates and flip flops. PCM over fibre optic. Presented at Craft! X Scale Down.', category: 'Hardware' },
  { title: 'Lego Minifigure',        href: 'https://lego-design.vercel.app/',                     image: '/img/lego.png',      description: 'Interactive customiser for Lego minifigures. iOS Swift app in development.', category: 'Interactive' },
  { title: 'Snake Game',             href: 'https://github.com/ollycassidy13/Snake',               image: '/img/snake.png',     description: 'Classic Snake in Java with Swing GUI — pause, restart, and score tracking.', category: 'Game' },
  { title: 'Voltmeter',              href: '/voltmeter',                                           image: '/img/voltmeter.jpg', description: 'Voltmeter from logic gates and op amps. Ramp generator ADC. Accurate to ±0.5 V (0–9.5 V).', category: 'Hardware' },
];

const categories = ['All', 'Hardware', 'Web', 'ML', 'Systems', 'Interactive', 'Game'];

// Magazine layout for 10 projects
const colSpans = [2, 1, 1, 1, 1, 2, 1, 1, 1, 1];

function ProjectCard({ project, colSpan, index }) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = colSpan === 2;

  return (
    <motion.a
      href={project.href}
      target={project.href.startsWith('http') ? '_blank' : undefined}
      rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      style={{
        gridColumn: `span ${colSpan}`,
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        textDecoration: 'none',
        height: isFeatured ? '360px' : '280px',
        border: '1px solid rgba(10,10,10,0.08)',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={project.image}
        alt={project.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Default state: just category badge */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          backgroundColor: '#0A0A0A',
          color: '#F8F7F4',
          padding: '4px 10px',
        }}
      >
        {project.category}
      </div>

      {/* Hover overlay — slides up from bottom */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(10,10,10,0.88)',
              padding: '24px 24px 20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#FF3C00',
                marginBottom: '8px',
              }}
            >
              {project.category}
            </div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: isFeatured ? '22px' : '17px',
                color: '#F8F7F4',
                lineHeight: 1.2,
                marginBottom: '10px',
              }}
            >
              {project.title}
            </h3>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '13px',
                lineHeight: 1.6,
                color: '#888888',
                marginBottom: '16px',
              }}
            >
              {project.description}
            </p>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#FF3C00',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span>→</span> View Project
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
}

export default function ProjectsBento() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{ backgroundColor: '#F8F7F4', paddingTop: '80px', paddingBottom: '80px' }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '40px' }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#FF3C00',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            / Projects
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#0A0A0A',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Things I've built.
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
            borderBottom: '1px solid rgba(10,10,10,0.1)',
            marginBottom: '40px',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeFilter === cat ? '2px solid #FF3C00' : '2px solid transparent',
                padding: '10px 20px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: activeFilter === cat ? '#FF3C00' : '#888888',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                marginBottom: '-1px',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Magazine grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((project, index) => {
            const originalIndex = projects.indexOf(project);
            const span = filtered.length === projects.length ? (colSpans[originalIndex] || 1) : 1;
            return (
              <ProjectCard
                key={project.title}
                project={project}
                colSpan={span}
                index={index}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
