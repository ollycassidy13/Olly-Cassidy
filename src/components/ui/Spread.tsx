import type { CSSProperties, ReactNode } from 'react';
import { meta } from '@/lib/data';

type Props = {
  id?: string;
  /** Two-digit page/section number, e.g. "03". */
  page: string;
  /** Left kicker, e.g. "RESEARCH". */
  kicker: string;
  /** Right header label, e.g. "PAPERS / 02". */
  label?: string;
  /** Footer caption on the right. */
  caption?: string;
  invert?: boolean;
  children: ReactNode;
  style?: CSSProperties;
};

/**
 * A single magazine "page" — full-viewport panel with editorial chrome:
 * hairline header (kicker + page no.), the content, and a running foot.
 */
export default function Spread({
  id,
  page,
  kicker,
  label,
  caption,
  invert = false,
  children,
  style,
}: Props) {
  const fg = invert ? 'var(--invert-fg)' : 'var(--ink)';
  const bg = invert ? 'var(--invert-bg)' : 'var(--paper)';
  const rule = invert ? 'var(--invert-rule)' : 'var(--rule)';

  return (
    <section
      id={id}
      style={{
        position: 'relative',
        minHeight: '100svh',
        background: bg,
        color: fg,
        padding: 'clamp(20px, 3.2vw, 48px) clamp(20px, 4vw, 72px)',
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      {/* Header rule */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderTop: `1px solid ${invert ? 'var(--invert-fg)' : 'var(--rule-strong)'}`,
          paddingTop: 10,
          marginBottom: 'clamp(24px, 5vw, 64px)',
          gap: 16,
        }}
      >
        <span className="meta" style={{ color: fg }}>
          {kicker}
        </span>
        <span className="meta" style={{ color: invert ? 'rgba(244,242,238,0.55)' : 'var(--muted)' }}>
          {label ?? meta.brand}
        </span>
        <span
          className="display"
          style={{ fontSize: 'clamp(20px, 2.2vw, 30px)', lineHeight: 1, color: fg }}
        >
          {page}
        </span>
      </div>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>{children}</div>

      {/* Running foot */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          borderTop: `1px solid ${rule}`,
          paddingTop: 10,
          marginTop: 'clamp(24px, 4vw, 48px)',
          gap: 16,
        }}
      >
        <span className="meta" style={{ color: invert ? 'rgba(244,242,238,0.45)' : 'var(--muted)' }}>
          {meta.brand} — {meta.name.toUpperCase()}
        </span>
        <span className="meta" style={{ color: invert ? 'rgba(244,242,238,0.45)' : 'var(--muted)' }}>
          {caption ?? 'PORTFOLIO MMXXVI'}
        </span>
      </div>
    </section>
  );
}
