import { motion } from 'framer-motion';

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/oliver-cassidy-286ba3235' },
  { label: 'GitHub',   href: 'https://github.com/ollycassidy13' },
  { label: 'Scholar',  href: 'https://scholar.google.com/citations?user=CzGdJSAAAAAJ&hl=en' },
];

function FooterSection() {
  return (
    <footer style={{ backgroundColor: '#0A0A0A' }}>

      {/* Giant headline */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ paddingTop: '60px' }}>
        <motion.a
          href="https://linkedin.com/in/oliver-cassidy-286ba3235"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(52px, 11vw, 148px)',
            color: '#F8F7F4',
            lineHeight: 0.88,
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
          whileHover={{ color: '#FF3C00' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LET'S<br />TALK.
        </motion.a>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        style={{
          marginTop: '48px',
          paddingTop: '24px',
          paddingBottom: '40px',
          borderTop: '1px solid rgba(248,247,244,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#888888',
          }}
        >
          Oliver Cassidy © {new Date().getFullYear()}
        </span>

        <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap' }}>
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#888888',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
              whileHover={{ color: '#FF3C00' }}
            >
              <span style={{ color: '#FF3C00' }}>→</span> {s.label}
            </motion.a>
          ))}
        </div>
      </div>

    </footer>
  );
}

export default FooterSection;
