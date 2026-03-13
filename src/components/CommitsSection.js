import { motion } from 'framer-motion';

const stats = [
  { label: 'Public Repos', value: '15+' },
  { label: 'Languages', value: '8+' },
  { label: 'Contributions', value: '300+' },
];

export default function CommitsSection() {
  return (
    <section id="commits-section" style={{ backgroundColor: '#F8F7F4', paddingTop: '80px', paddingBottom: '80px' }}>
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
            / Commits
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
            Code every day.
          </h2>
        </motion.div>

        {/* Contributions chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            border: '1px solid rgba(10,10,10,0.1)',
            padding: '24px',
            marginBottom: '32px',
            overflowX: 'auto',
          }}
        >
          <iframe
            style={{ display: 'block', border: 'none', width: '100%', maxWidth: '900px', height: '200px', margin: '0 auto' }}
            src="https://ghchart.rshah.org/FF3C00/ollycassidy13"
            title="GitHub Contributions Chart"
          />
        </motion.div>

        {/* Stats row */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
            borderTop: '1px solid rgba(10,10,10,0.1)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: '1 1 160px',
                padding: '24px 0',
                borderRight: i < stats.length - 1 ? '1px solid rgba(10,10,10,0.1)' : 'none',
                paddingRight: i < stats.length - 1 ? '32px' : 0,
                paddingLeft: i > 0 ? '32px' : 0,
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: '36px',
                  color: '#0A0A0A',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#888888',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}

          {/* GitHub link as last stat-style item */}
          <div
            style={{
              flex: '1 1 160px',
              padding: '24px 0',
              paddingLeft: '32px',
              borderLeft: '1px solid rgba(10,10,10,0.1)',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <motion.a
              href="https://github.com/ollycassidy13"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#0A0A0A',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                border: '1px solid rgba(10,10,10,0.2)',
              }}
              whileHover={{ borderColor: '#FF3C00', color: '#FF3C00' }}
            >
              <span style={{ color: '#FF3C00' }}>→</span> View GitHub
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
