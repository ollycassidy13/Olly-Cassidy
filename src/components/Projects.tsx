'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spread from './ui/Spread';
import Reveal from './ui/Reveal';
import { projects, projectCategories } from '@/lib/data';

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const isFeatured = project.featured;
  const isExternal = project.href.startsWith('http');

  return (
    <motion.a
      href={project.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        display: 'block',
        textDecoration: 'none',
        color: 'var(--ink)',
        gridColumn: isFeatured ? 'span 2' : 'span 1',
        aspectRatio: isFeatured ? '2 / 1.18' : '1 / 1.18',
        overflow: 'hidden',
        border: '1px solid var(--rule-strong)',
        background: 'var(--ink)',
      }}
    >
      {/* PLACEHOLDER — project still */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="bw"
        animate={{ scale: hovered ? 1.05 : 1, opacity: hovered ? 0.32 : 0.92 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Top meta */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '12px 14px',
          zIndex: 2,
          mixBlendMode: 'difference',
          color: '#fff',
        }}
      >
        <span className="meta">{project.category}</span>
        <span className="meta">No. {String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Title */}
      <div
        style={{
          position: 'absolute',
          left: 14,
          right: 14,
          bottom: 12,
          zIndex: 2,
          mixBlendMode: hovered ? 'normal' : 'difference',
          color: '#fff',
        }}
      >
        <div
          className="display"
          style={{ fontSize: isFeatured ? 'clamp(30px, 4vw, 56px)' : 'clamp(20px, 2.4vw, 30px)', lineHeight: 0.92 }}
        >
          {project.title}
        </div>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12.5,
            lineHeight: 1.5,
            marginTop: hovered ? 8 : 0,
            overflow: 'hidden',
            maxWidth: 460,
          }}
        >
          {project.description}
          <span style={{ display: 'block', marginTop: 6 }} className="meta">
            {isExternal ? 'Visit ↗' : 'Case study'}
          </span>
        </motion.p>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <Spread id="projects" page="04" kicker="Selected Work" label="Index / Built things" caption="Selected">
      {/* Opener */}
      <Reveal
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <h2 className="display" style={{ fontSize: 'clamp(52px, 11vw, 168px)' }}>
          Built
        </h2>
        <p className="col" style={{ maxWidth: 320, textAlign: 'left' }}>
          Hardware, ML and the web — a working index of things made, shipped and occasionally
          soldered by hand.
        </p>
      </Reveal>

      {/* Filter bar */}
      <Reveal
        delay={0.05}
        style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}
      >
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="meta"
            style={{
              cursor: 'pointer',
              padding: '7px 14px',
              border: '1px solid var(--ink)',
              background: active === cat ? 'var(--ink)' : 'transparent',
              color: active === cat ? 'var(--paper)' : 'var(--ink)',
              transition: 'all 0.2s',
            }}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      {/* Grid */}
      <motion.div
        layout
        className="r-projects"
        style={{
          display: 'grid',
          gap: 10,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Spread>
  );
}
