'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

export type Page = { id: string; no: string; label: string; node: ReactNode };

const turn = {
  enter: (dir: number) => ({ rotateY: dir > 0 ? 105 : -105, opacity: 0.15 }),
  center: { rotateY: 0, opacity: 1 },
  exit: (dir: number) => ({ rotateY: dir > 0 ? -105 : 105, opacity: 0.15 }),
};

export default function Flipbook({ pages }: { pages: Page[] }) {
  const [[index, dir], setState] = useState<[number, number]>([0, 0]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const last = pages.length - 1;

  const go = useCallback(
    (next: number, direction: number) => {
      setState(([cur]) => {
        const clamped = Math.max(0, Math.min(last, next));
        if (clamped === cur) return [cur, 0];
        return [clamped, direction];
      });
    },
    [last]
  );

  const prev = useCallback(() => go(index - 1, -1), [go, index]);
  const next = useCallback(() => go(index + 1, 1), [go, index]);

  // Keyboard paging — ignore when focus is in the rail buttons handled separately
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  // Each page mounts fresh, so its scroll starts at the top automatically.
  const page = pages[index];

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--ink)',
        perspective: '2200px',
        overflow: 'hidden',
      }}
    >
      <AnimatePresence custom={dir} mode="popLayout" initial={false}>
        <motion.div
          key={page.id}
          custom={dir}
          variants={turn}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.62, ease: [0.33, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            transformOrigin: dir >= 0 ? 'left center' : 'right center',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
            boxShadow: '0 0 60px rgba(0,0,0,0.5)',
          }}
        >
          <div
            ref={scrollRef}
            className="hide-scrollbar"
            style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden' }}
          >
            {page.node}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Edge arrows */}
      {index > 0 && (
        <FlipArrow side="left" label="Previous page" onClick={prev} glyph="←" />
      )}
      {index < last && (
        <FlipArrow side="right" label="Next page" onClick={next} glyph="→" />
      )}

      {/* Bottom navigation bar — prev · page ticks · next */}
      <div
        style={{
          position: 'fixed',
          bottom: 'clamp(10px, 2.2vh, 22px)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(10px, 1.6vw, 18px)',
          mixBlendMode: 'difference',
          color: '#fff',
          maxWidth: '94vw',
        }}
      >
        <button onClick={prev} disabled={index === 0} className="flip-ctl meta" aria-label="Previous page">
          ← Prev
        </button>

        <nav aria-label="Pages" style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          {pages.map((p, i) => {
            const active = i === index;
            return (
              <button
                key={p.id}
                onClick={() => go(i, i > index ? 1 : -1)}
                aria-label={p.label}
                aria-current={active ? 'true' : undefined}
                title={`${p.no} · ${p.label}`}
                style={{
                  width: active ? 26 : 12,
                  height: 2,
                  background: '#fff',
                  opacity: active ? 1 : 0.4,
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  transition: 'width 0.3s, opacity 0.2s',
                }}
              />
            );
          })}
        </nav>

        <span className="meta" style={{ color: '#fff', whiteSpace: 'nowrap' }}>
          {page.no} / {pages[last].no} · {page.label}
        </span>

        <button onClick={next} disabled={index === last} className="flip-ctl meta" aria-label="Next page">
          Next →
        </button>
      </div>
    </div>
  );
}

function FlipArrow({
  side,
  label,
  onClick,
  glyph,
}: {
  side: 'left' | 'right';
  label: string;
  onClick: () => void;
  glyph: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="flip-arrow"
      style={{
        position: 'fixed',
        top: '50%',
        [side]: 'clamp(6px, 2vw, 26px)',
        transform: 'translateY(-50%)',
        zIndex: 60,
        width: 46,
        height: 46,
        borderRadius: '50%',
        border: '1px solid #fff',
        background: 'none',
        color: '#fff',
        cursor: 'pointer',
        display: 'grid',
        placeItems: 'center',
        fontSize: 18,
        mixBlendMode: 'difference',
      }}
    >
      {glyph}
    </button>
  );
}
