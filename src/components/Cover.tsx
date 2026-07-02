'use client';

import { motion } from 'framer-motion';
import { meta } from '@/lib/data';

const ease = [0.16, 1, 0.3, 1] as const;

export default function Cover() {
  return (
    <section
      id="cover"
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: 'var(--invert-bg)',
        color: 'var(--invert-fg)',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(20px, 3.2vw, 48px) clamp(20px, 4vw, 72px)',
        overflow: 'hidden',
      }}
    >
      {/* ── Masthead row ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--invert-rule)',
          paddingBottom: 14,
          gap: 16,
          zIndex: 3,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span
            style={{
              width: 30,
              height: 30,
              borderRadius: '50%',
              border: '1px solid var(--invert-fg)',
              display: 'grid',
              placeItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '0.05em',
            }}
          >
            OC
          </span>
          <span className="display" style={{ fontSize: 'clamp(18px, 2vw, 26px)', letterSpacing: '0.04em' }}>
            {meta.brand}
          </span>
        </div>
        <span className="meta" style={{ color: 'rgba(244,242,238,0.6)' }}>
          Issue 01 · MMXXVI
        </span>
        <span className="meta" style={{ color: 'rgba(244,242,238,0.6)' }} aria-hidden>
          ↘
        </span>
      </motion.div>

      {/* ── Main grid ── */}
      <div
        className="r-cover"
        style={{
          flex: 1,
          display: 'grid',
          gap: 'clamp(24px, 5vw, 80px)',
          alignItems: 'center',
          padding: 'clamp(28px, 6vh, 80px) 0',
        }}
      >
        {/* Left: titling */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="meta"
            style={{
              color: 'rgba(244,242,238,0.7)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 28,
            }}
          >
            <span style={{ width: 36, height: 1, background: 'var(--invert-fg)' }} />
            Hardware ML · FPGA · AMD RAD Lab
          </motion.div>

          <h1 style={{ marginBottom: 30 }}>
            {['Oliver', 'Cassidy*'].map((word, i) => (
              <span key={word} style={{ display: 'block', overflow: 'hidden' }}>
                <motion.span
                  className="display"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.45 + i * 0.12, ease }}
                  style={{
                    display: 'block',
                    fontSize: 'clamp(58px, 12.5vw, 188px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 'clamp(15px, 1.8vw, 21px)',
              lineHeight: 1.5,
              color: 'rgba(244,242,238,0.65)',
              maxWidth: 460,
            }}
          >
            {meta.tagline}
          </motion.p>
        </div>

        {/* Right: cover portrait (placeholder image) */}
        <motion.figure
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
          style={{ position: 'relative', alignSelf: 'stretch', minHeight: 320 }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              border: '1px solid var(--invert-rule)',
              overflow: 'hidden',
            }}
          >
            {/* PLACEHOLDER — swap for a high-contrast B&W portrait */}
            <img
              src="/img/home.png"
              alt="Oliver Cassidy"
              className="bw"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.92 }}
            />
            <span
              className="meta"
              style={{
                position: 'absolute',
                bottom: 10,
                left: 12,
                color: 'rgba(244,242,238,0.85)',
                mixBlendMode: 'difference',
              }}
            >
              FIG. 00 — COVER
            </span>
          </div>
        </motion.figure>
      </div>

      {/* ── Foot row ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--invert-rule)',
          paddingTop: 14,
          gap: 16,
        }}
      >
        <span className="meta" style={{ color: 'rgba(244,242,238,0.6)' }}>
          {meta.role}
        </span>
        <motion.span
          className="meta"
          style={{ color: 'rgba(244,242,238,0.6)' }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          Turn the page →
        </motion.span>
        <span className="display" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}>
          00
        </span>
      </motion.div>
    </section>
  );
}
