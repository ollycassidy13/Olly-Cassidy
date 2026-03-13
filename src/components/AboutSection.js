import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const items = [
  {
    num: '01',
    title: 'Academics',
    content: "I am a penultimate-year Electronic and Information Engineering student. Some of my favourite courseworks include a pipelined RISC-V CPU implemented in SystemVerilog and a C90 compiler. Outside of my degree I've been enjoying research related to the efficient use of FPGAs across different domains.",
    link: { href: '#timeline', label: 'View timeline' },
  },
  {
    num: '02',
    title: 'Running',
    content: 'I am also a dedicated athlete, running competitively for both Imperial College and Thames Valley Harriers. Training and competing as an athlete has taught me resilience, time management, and the importance of "trusting the plan", all of which I bring into the rest of my life. I compete in 3k and 5k events on the track.',
  },
  {
    num: '03',
    title: 'Projects',
    content: 'Outside of my studies I have been involved in various projects ranging from hardware design such as a remote control car and a landline from gate level, to web design, hardware optimisation and software development.',
    link: { href: '#projects', label: 'View projects' },
  },
  {
    num: '04',
    title: 'Music',
    content: 'I have a strong love of music and enjoy making playlists on Spotify to share my favourite songs. Check out what I\'m listening to:',
    spotify: 'https://open.spotify.com/embed/playlist/3swVm6ONJql9RHzD7AXem5',
  },
];

function AboutItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ borderBottom: '1px solid rgba(10,10,10,0.1)' }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'baseline',
          gap: '20px',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            color: open ? '#FF3C00' : '#888888',
            flexShrink: 0,
            transition: 'color 0.2s ease',
          }}
        >
          {item.num}
        </span>
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(22px, 3vw, 32px)',
            color: '#0A0A0A',
            lineHeight: 1,
            flex: 1,
          }}
        >
          {item.title}
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '18px',
            color: '#888888',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            display: 'inline-block',
            transition: 'transform 0.3s ease',
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ paddingBottom: '28px', paddingLeft: '32px' }}>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: '#555555',
                  maxWidth: '560px',
                  marginBottom: item.link || item.spotify ? '16px' : 0,
                }}
              >
                {item.content}
              </p>

              {item.spotify && (
                <div style={{ marginTop: '16px', maxWidth: '460px' }}>
                  <iframe
                    src={item.spotify}
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="encrypted-media"
                    title="Spotify Playlist"
                    style={{ display: 'block' }}
                  />
                </div>
              )}

              {item.link && (
                <motion.a
                  href={item.link.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#FF3C00',
                    textDecoration: 'none',
                  }}
                  whileHover={{ gap: '12px' }}
                >
                  <span>→</span> {item.link.label}
                </motion.a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" style={{ backgroundColor: '#F8F7F4', position: 'relative' }}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-28 lg:py-36">

        {/* Watermark + heading */}
        <div style={{ position: 'relative', marginBottom: '64px' }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(80px, 15vw, 180px)',
              color: '#0A0A0A',
              opacity: 0.04,
              lineHeight: 1,
              userSelect: 'none',
              pointerEvents: 'none',
              position: 'absolute',
              top: '-20px',
              left: '-10px',
            }}
          >
            ABOUT
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#FF3C00',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              / About me
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(36px, 5vw, 64px)',
                color: '#0A0A0A',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              Four things<br />define me.
            </h2>
          </motion.div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[36%_64%] gap-16 lg:gap-24">

          {/* Left: statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', paddingTop: '8px' }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: 'clamp(18px, 2vw, 24px)',
                color: '#0A0A0A',
                lineHeight: 1.4,
                fontStyle: 'italic',
              }}
            >
              Hardware to software. Research to production.
            </p>
            <div
              style={{
                marginTop: '32px',
                width: '40px',
                height: '2px',
                backgroundColor: '#FF3C00',
              }}
            />
          </motion.div>

          {/* Right: accordion */}
          <div style={{ borderTop: '1px solid rgba(10,10,10,0.1)' }}>
            {items.map((item, i) => (
              <AboutItem key={item.num} item={item} index={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
