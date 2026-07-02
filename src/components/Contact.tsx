import Reveal from './ui/Reveal';
import { meta } from '@/lib/data';

const DIRECTORY = [
  { label: 'Email', value: meta.email, href: `mailto:${meta.email}` },
  { label: 'LinkedIn', value: '/oliver-cassidy', href: meta.linkedin },
  { label: 'GitHub', value: '@ollycassidy13', href: meta.github },
  { label: 'Scholar', value: 'Citations profile', href: meta.scholar },
  { label: 'arXiv', value: 'cassidy_o_1', href: meta.arxiv },
  { label: 'CV', value: 'Download PDF', href: meta.cv },
  { label: 'Live site', value: 'olly-cassidy.vercel.app', href: meta.currentPortfolio },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: 'var(--invert-bg)',
        color: 'var(--invert-fg)',
        display: 'flex',
        flexDirection: 'column',
        padding: 'clamp(20px, 3.2vw, 48px) clamp(20px, 4vw, 72px)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--invert-fg)',
          paddingTop: 10,
          gap: 16,
        }}
      >
        <span className="meta">Contact</span>
        <span className="meta" style={{ color: 'rgba(244,242,238,0.55)' }}>
          Back cover
        </span>
        <span className="display" style={{ fontSize: 'clamp(20px, 2.2vw, 30px)' }}>
          06
        </span>
      </div>

      {/* Body */}
      <div
        className="r-feature"
        style={{
          flex: 1,
          display: 'grid',
          gap: 'clamp(32px, 5vw, 72px)',
          alignItems: 'center',
          padding: 'clamp(28px, 5vh, 64px) 0',
        }}
      >
        {/* Left — statement + email */}
        <div>
          <Reveal>
            <div className="meta" style={{ color: 'rgba(244,242,238,0.6)', marginBottom: 22 }}>
              ↘ Open to research · work · collaboration
            </div>
            <h2 className="display" style={{ fontSize: 'clamp(56px, 12vw, 184px)' }}>
              Let&apos;s
              <br />
              <span style={{ WebkitTextStroke: '1.5px var(--invert-fg)', color: 'transparent' }}>
                Build*
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1} style={{ marginTop: 'clamp(24px, 4vw, 44px)' }}>
            <a
              href={`mailto:${meta.email}`}
              className="display"
              style={{
                fontSize: 'clamp(22px, 3.4vw, 46px)',
                color: 'var(--invert-fg)',
                textDecoration: 'none',
                borderBottom: '2px solid var(--invert-fg)',
                paddingBottom: 6,
                display: 'inline-block',
              }}
            >
              {meta.email}
            </a>
          </Reveal>
        </div>

        {/* Right — directory + status */}
        <Reveal delay={0.15}>
          <div className="meta" style={{ color: 'rgba(244,242,238,0.55)', marginBottom: 6 }}>
            Direct lines
          </div>
          <div style={{ borderTop: '1px solid var(--invert-fg)' }}>
            {DIRECTORY.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target={d.href.startsWith('http') ? '_blank' : undefined}
                rel={d.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-row"
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--invert-rule)',
                  textDecoration: 'none',
                  color: 'var(--invert-fg)',
                }}
              >
                <span className="meta" style={{ color: 'rgba(244,242,238,0.6)' }}>
                  {d.label}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'baseline', gap: 10 }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 'clamp(14px, 1.6vw, 17px)' }}>
                    {d.value}
                  </span>
                  <span aria-hidden style={{ opacity: 0.6 }}>
                    ↗
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Status */}
          <div
            style={{
              marginTop: 'clamp(20px, 3vw, 32px)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px 32px',
            }}
          >
            <div>
              <div className="meta" style={{ color: 'rgba(244,242,238,0.5)', marginBottom: 6 }}>
                Status
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600 }}>
                <span
                  style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--invert-fg)', display: 'inline-block' }}
                />
                At AMD RAD Lab — open to what&apos;s next
              </div>
            </div>
            <div>
              <div className="meta" style={{ color: 'rgba(244,242,238,0.5)', marginBottom: 6 }}>
                Based in
              </div>
              <div style={{ fontWeight: 600 }}>{meta.location}</div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Colophon */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--invert-rule)',
          paddingTop: 14,
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div className="meta" style={{ color: 'rgba(244,242,238,0.5)', maxWidth: 380, lineHeight: 1.8 }}>
          {meta.brand} — an editorial portfolio of {meta.name}. Set in Anton &amp; Inter. Built with
          Next.js. © MMXXVI.
        </div>
        <span className="meta" style={{ color: 'rgba(244,242,238,0.5)' }}>
          ← Turn back to the cover
        </span>
        <span className="display" style={{ fontSize: 'clamp(28px, 4vw, 64px)', letterSpacing: '0.04em' }}>
          {meta.brand}
        </span>
      </div>
    </section>
  );
}
