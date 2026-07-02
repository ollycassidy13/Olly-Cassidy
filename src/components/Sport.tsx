import Spread from './ui/Spread';
import Reveal from './ui/Reveal';
import Plate from './ui/Plate';
import { sport } from '@/lib/data';

export default function Sport() {
  const { running, cycling } = sport;

  return (
    <Spread id="sport" page="05" kicker="Athletics" label="Off the clock / Track & bike" caption="Run · Ride">
      {/* Opener */}
      <Reveal
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 'clamp(28px, 5vw, 56px)',
        }}
      >
        <h2 className="display" style={{ fontSize: 'clamp(52px, 11vw, 168px)' }}>
          Off the
          <br />
          Clock
        </h2>
        <p className="col" style={{ maxWidth: 340, textAlign: 'left' }}>
          The same obsession with shaving off milliseconds, away from the bench — on the track and,
          before that, across three cycling disciplines.
        </p>
      </Reveal>

      {/* ── Running ── */}
      <Reveal>
        <div
          className="r-sport"
          style={{
            display: 'grid',
            gap: 'clamp(24px, 4vw, 56px)',
            alignItems: 'start',
            borderTop: '1px solid var(--rule-strong)',
            paddingTop: 'clamp(20px, 3vw, 32px)',
          }}
        >
          {/* Left — events */}
          <div>
            <div
              className="meta"
              style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)', marginBottom: 6 }}
            >
              <span>01 / Discipline</span>
              <span>Current</span>
            </div>
            <div className="display" style={{ fontSize: 'clamp(34px, 4.4vw, 64px)', marginBottom: 14 }}>
              {running.label}
            </div>
            <p className="col" style={{ textAlign: 'left', marginBottom: 18 }}>
              {running.blurb}
            </p>

            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {running.events.map((e) => (
                <div
                  key={e.distance}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '12px 0',
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <span className="display" style={{ fontSize: 'clamp(22px, 3vw, 34px)' }}>
                    {e.distance}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 500,
                        fontSize: 'clamp(16px, 2vw, 22px)',
                      }}
                    >
                      {e.pb}
                    </span>
                    <span className="meta" style={{ color: 'var(--muted)' }}>
                      {e.note}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — plates */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {running.images.map((img) => (
              <Plate key={img.src} src={img.src} caption={img.caption} aspect="3 / 4" />
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Cycling ── */}
      <Reveal style={{ marginTop: 'clamp(36px, 6vw, 64px)' }}>
        <div
          className="r-sport"
          style={{
            display: 'grid',
            gap: 'clamp(24px, 4vw, 56px)',
            alignItems: 'start',
            borderTop: '1px solid var(--rule-strong)',
            paddingTop: 'clamp(20px, 3vw, 32px)',
          }}
        >
          {/* Left — plates (mirrored layout) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, order: 1 }}>
            {cycling.images.map((img) => (
              <Plate key={img.src} src={img.src} caption={img.caption} aspect="3 / 4" />
            ))}
          </div>

          {/* Right — disciplines */}
          <div style={{ order: 2 }}>
            <div
              className="meta"
              style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--muted)', marginBottom: 6 }}
            >
              <span>02 / Discipline</span>
              <span>Previously</span>
            </div>
            <div className="display" style={{ fontSize: 'clamp(34px, 4.4vw, 64px)', marginBottom: 14 }}>
              {cycling.label}
            </div>
            <p className="col" style={{ textAlign: 'left', marginBottom: 18 }}>
              {cycling.blurb}
            </p>

            <div style={{ borderTop: '1px solid var(--rule)' }}>
              {cycling.disciplines.map((d, i) => (
                <div
                  key={d.name}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(110px, auto) 1fr',
                    gap: 16,
                    alignItems: 'baseline',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--rule)',
                  }}
                >
                  <span className="display" style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}>
                    0{i + 1} {d.name}
                  </span>
                  <p className="col" style={{ textAlign: 'left' }}>
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Spread>
  );
}
