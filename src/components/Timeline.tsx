import Spread from './ui/Spread';
import Reveal from './ui/Reveal';
import { timeline } from '@/lib/data';

// Group entries by year, preserving order.
function groupByYear(items: typeof timeline) {
  const groups: { year: string; items: typeof timeline }[] = [];
  for (const item of items) {
    const last = groups[groups.length - 1];
    if (last && last.year === item.year) last.items.push(item);
    else groups.push({ year: item.year, items: [item] });
  }
  return groups;
}

export default function Timeline() {
  const groups = groupByYear(timeline);

  return (
    <Spread id="timeline" page="03" kicker="Chronology" label="Field log / 2021—2026" caption="Reverse order">
      <Reveal
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 'clamp(24px, 4vw, 48px)',
        }}
      >
        <h2 className="display" style={{ fontSize: 'clamp(52px, 11vw, 168px)' }}>
          Track
          <br />
          Record
        </h2>
        <p className="col" style={{ maxWidth: 300, textAlign: 'left' }}>
          A reverse chronology — papers, internships, builds and the odd prize, from sixth form to
          AMD&apos;s RAD Lab.
        </p>
      </Reveal>

      <div style={{ borderTop: '1px solid var(--rule-strong)' }}>
        {groups.map((g, gi) => (
          <Reveal key={`${g.year}-${gi}`} delay={Math.min(gi * 0.03, 0.2)}>
            <div
              className="r-tl-group"
              style={{
                display: 'grid',
                gap: 'clamp(16px, 3vw, 48px)',
                padding: 'clamp(18px, 2.6vw, 30px) 0',
                borderBottom: '1px solid var(--rule)',
              }}
            >
              {/* Year */}
              <div className="display" style={{ fontSize: 'clamp(34px, 4.5vw, 64px)', lineHeight: 0.9 }}>
                {g.year}
              </div>

              {/* Entries */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {g.items.map((it, i) => (
                  <div
                    key={i}
                    className="r-tl-entry"
                    style={{
                      display: 'grid',
                      gap: 'clamp(12px, 2vw, 32px)',
                      alignItems: 'baseline',
                    }}
                  >
                    <div>
                      <span
                        className="meta"
                        style={{
                          display: 'inline-block',
                          marginBottom: 6,
                          color: 'var(--muted)',
                        }}
                      >
                        {it.type}
                      </span>
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontWeight: 700,
                          fontSize: 'clamp(16px, 1.8vw, 21px)',
                          lineHeight: 1.15,
                        }}
                      >
                        {it.label}
                      </div>
                    </div>
                    <p className="col" style={{ textAlign: 'left' }}>
                      {it.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Spread>
  );
}
