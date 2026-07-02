import Spread from './ui/Spread';
import Reveal from './ui/Reveal';
import Plate from './ui/Plate';
import { papers } from '@/lib/data';

export default function Research() {
  return (
    <Spread id="research" page="02" kicker="Research" label={`Papers / 0${papers.length}`} caption="Peer-reviewed">
      {/* Section opener */}
      <Reveal style={{ marginBottom: 'clamp(36px, 6vw, 72px)' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <h2 className="display" style={{ fontSize: 'clamp(52px, 11vw, 168px)' }}>
            Published
          </h2>
          <p className="col" style={{ maxWidth: 340, textAlign: 'left' }}>
            Two first-author papers on compressing, deploying and using LUT-based neural networks as
            part of larger accelerators for low-latency FPGA inference.
          </p>
        </div>
      </Reveal>

      {/* Papers */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(48px, 8vw, 96px)' }}>
        {papers.map((p, i) => {
          const imageLeft = i % 2 === 0;
          const isDiagram = p.id === 'cascadelut';
          const figure = (
            <Plate
              src={p.image}
              alt={p.title}
              caption={`FIG. 0${i + 1} — ${p.venue}`}
              aspect={isDiagram ? '16 / 10' : '4 / 3'}
              fit={isDiagram ? 'contain' : 'cover'}
              frameBg={isDiagram ? 'var(--paper-pure)' : undefined}
              tint={isDiagram ? 'soft' : true}
            />
          );

          const content = (
            <div>
              <div
                className="meta"
                style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)' }}
              >
                <span>Paper No. 0{i + 1}</span>
                <span>{p.role}</span>
              </div>
              <div
                className="display"
                style={{
                  fontSize: 'clamp(56px, 7vw, 96px)',
                  lineHeight: 0.92,
                  margin: '6px 0 18px',
                }}
              >
                {p.id === 'reducedlut' ? 'ReducedLUT' : 'CascadeLUT'}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(15px, 1.7vw, 19px)',
                  lineHeight: 1.3,
                  marginBottom: 16,
                }}
              >
                {p.title}
              </h3>

              <div
                className="meta"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '4px 18px',
                  color: 'var(--ink)',
                  borderTop: '1px solid var(--rule)',
                  borderBottom: '1px solid var(--rule)',
                  padding: '12px 0',
                  marginBottom: 18,
                }}
              >
                <span>{p.venueFullName}</span>
                <span>· {p.location}</span>
                <span>· {p.year}</span>
              </div>

              <p className="col" style={{ marginBottom: 20 }}>
                {p.abstract}
              </p>

              {/* Stats */}
              <dl style={{ display: 'grid', gap: 0, marginBottom: 20 }}>
                {p.stats.map((s, si) => (
                  <div
                    key={s.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      gap: 16,
                      padding: '9px 0',
                      borderTop: si === 0 ? 'none' : '1px solid var(--rule)',
                    }}
                  >
                    <dt className="meta" style={{ color: 'var(--muted)' }}>
                      {s.label}
                    </dt>
                    <dd
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                        fontSize: 14,
                        textAlign: 'right',
                      }}
                    >
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Badges + link */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                {p.badges.map((b) => (
                  <span
                    key={b}
                    className="meta"
                    style={{
                      border: '1px solid var(--ink)',
                      padding: '5px 10px',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {b}
                  </span>
                ))}
                {p.achievement && (
                  <span
                    className="meta"
                    style={{ background: 'var(--ink)', color: 'var(--paper)', padding: '6px 10px' }}
                  >
                    ★ {p.achievement}
                  </span>
                )}
                {p.arxiv ? (
                  <a
                    href={p.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="meta"
                    style={{
                      color: 'var(--ink)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--ink)',
                      paddingBottom: 2,
                    }}
                  >
                    Read on arXiv ↗
                  </a>
                ) : (
                  <span className="meta" style={{ color: 'var(--muted)' }}>
                    Preprint forthcoming
                  </span>
                )}
              </div>
            </div>
          );

          return (
            <Reveal key={p.id}>
              <article
                className="r-feature"
                style={{
                  display: 'grid',
                  gap: 'clamp(24px, 4vw, 56px)',
                  alignItems: 'center',
                }}
              >
                {imageLeft ? (
                  <>
                    {figure}
                    {content}
                  </>
                ) : (
                  <>
                    <div style={{ order: 2 }}>{figure}</div>
                    <div style={{ order: 1 }}>{content}</div>
                  </>
                )}
              </article>
            </Reveal>
          );
        })}
      </div>
    </Spread>
  );
}
