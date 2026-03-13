import { motion } from 'framer-motion';

const results = [
  '> P-LUT reduction:  up to 1.63×',
  '> Accuracy drop:    ≤ 0.01 pts',
  '> Venue:            FPGA 2025, Monterey CA',
];

export default function PublicationsSection() {
  return (
    <section
      id="papers"
      style={{ backgroundColor: '#0A0A0A', position: 'relative', overflow: 'hidden', paddingTop: '80px', paddingBottom: '80px' }}
    >
      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(60px, 14vw, 180px)',
          color: '#F8F7F4',
          opacity: 0.04,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        RESEARCH
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative" style={{ zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '56px' }}
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
            / Research
          </span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#F8F7F4',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Published work.
          </h2>
        </motion.div>

        {/* Paper card */}
        <motion.a
          href="https://arxiv.org/abs/2412.18579"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            border: '1px solid rgba(248,247,244,0.12)',
            textDecoration: 'none',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ borderColor: 'rgba(255,60,0,0.4)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]">

            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden', minHeight: '240px' }}>
              <img
                src="/img/reducedlut.JPG"
                alt="ReducedLUT"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'grayscale(40%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '3px',
                  height: '100%',
                  backgroundColor: '#FF3C00',
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {/* Badges */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '18px', flexWrap: 'wrap' }}>
                {[
                  { label: 'FPGA 2025', filled: true },
                  { label: 'Lead Author', filled: false },
                  { label: 'Published', filled: false, muted: true },
                ].map((b) => (
                  <span
                    key={b.label}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      padding: '4px 10px',
                      backgroundColor: b.filled ? '#FF3C00' : 'transparent',
                      border: b.filled ? 'none' : '1px solid rgba(248,247,244,0.2)',
                      color: b.muted ? '#888888' : '#F8F7F4',
                    }}
                  >
                    {b.label}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: 'clamp(17px, 2vw, 23px)',
                  color: '#F8F7F4',
                  lineHeight: 1.3,
                  marginBottom: '20px',
                }}
              >
                ReducedLUT: Table Decomposition with "Don't Care" Conditions
              </h3>

              {/* Terminal results */}
              <div
                style={{
                  backgroundColor: '#0d1f0d',
                  padding: '14px 18px',
                  marginBottom: '22px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '12px',
                  lineHeight: 1.9,
                  color: '#4ade80',
                }}
              >
                {results.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>

              {/* Link */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#FF3C00',
                }}
              >
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  →
                </motion.span>
                Read the paper
              </div>
            </div>

          </div>
        </motion.a>

      </div>
    </section>
  );
}
