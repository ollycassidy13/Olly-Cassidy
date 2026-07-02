import Spread from './ui/Spread';
import Reveal from './ui/Reveal';
import { meta, updates } from '@/lib/data';

const LINKS = [
  { label: 'LinkedIn', href: meta.linkedin },
  { label: 'GitHub', href: meta.github },
  { label: 'Scholar', href: meta.scholar },
  { label: 'CV', href: meta.cv },
];

export default function Intro() {
  return (
    <Spread id="editorial" page="01" kicker="Editorial" label="A note from the desk" caption="Page 01">
      <div
        className="r-editorial"
        style={{
          display: 'grid',
          gap: 'clamp(28px, 5vw, 72px)',
          alignItems: 'start',
          flex: 1,
        }}
      >
        {/* Left — editorial letter + links + in-progress log */}
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <p className="col">
            Oliver Cassidy is a hardware-ML researcher reading for an MEng in Electronic &amp;
            Information Engineering at Imperial College London. His work sits at the seam between
            machine learning and silicon — squeezing neural networks onto FPGAs until inference
            happens in nanoseconds, not milliseconds.
          </p>
          <p className="col">
            Two papers, a stack of built things, and a standing belief that the most interesting
            problems live where the model meets the metal. This issue collects the work.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px 22px',
              borderTop: '1px solid var(--rule)',
              paddingTop: 16,
            }}
          >
            {LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="meta"
                style={{
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--ink)',
                  paddingBottom: 2,
                }}
              >
                {label} ↗
              </a>
            ))}
          </div>

          {/* In progress / on deck */}
          <div style={{ marginTop: 4 }}>
            <div
              className="meta"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: 'var(--ink)',
                borderTop: '1px solid var(--rule-strong)',
                paddingTop: 12,
                marginBottom: 4,
              }}
            >
              <span>● Currently</span>
              <span style={{ color: 'var(--muted)' }}>In progress / on deck</span>
            </div>
            <ul style={{ listStyle: 'none' }}>
              {updates.map((u) => (
                <li
                  key={u.text}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(78px, auto) 1fr',
                    gap: 14,
                    alignItems: 'baseline',
                    padding: '11px 0',
                    borderTop: '1px solid var(--rule)',
                  }}
                >
                  <span className="meta" style={{ color: 'var(--muted)' }}>
                    {u.status}
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5 }}>
                    {u.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Right — typographic statement */}
        <Reveal>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 10vw, 168px)' }}>
            Compressing
            <br />
            intelligence
            <br />
            <span style={{ WebkitTextStroke: '1.5px var(--ink)', color: 'transparent' }}>
              into nano—
            </span>
            <br />
            seconds.
          </h2>
          <p
            className="col"
            style={{ maxWidth: 460, marginTop: 'clamp(24px, 4vw, 44px)', textAlign: 'left' }}
          >
            {meta.role} · {meta.location}. Open to research, work and collaboration — the
            back cover has every way to reach me.
          </p>
        </Reveal>
      </div>
    </Spread>
  );
}
