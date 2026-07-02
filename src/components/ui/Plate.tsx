'use client';

import { useState } from 'react';

type Props = {
  src: string;
  caption: string;
  alt?: string;
  aspect?: string;
  /** 'cover' for photos (default), 'contain' for diagrams that must show fully. */
  fit?: 'cover' | 'contain';
  /** Frame background — use a light value behind 'contain' diagrams. */
  frameBg?: string;
  /** Grayscale editorial filter: true (full), 'soft' (keeps a hint of hue), or false. */
  tint?: boolean | 'soft';
};

/**
 * Editorial image plate with a graceful fallback: until the real image
 * exists at `src`, it shows a framed placeholder with the caption.
 */
export default function Plate({
  src,
  caption,
  alt,
  aspect = '4 / 3',
  fit = 'cover',
  frameBg = 'var(--ink)',
  tint = true,
}: Props) {
  const [errored, setErrored] = useState(false);

  return (
    <figure style={{ margin: 0 }}>
      <div
        style={{
          position: 'relative',
          aspectRatio: aspect,
          overflow: 'hidden',
          border: '1px solid var(--rule-strong)',
          background: errored ? 'var(--ink)' : frameBg,
        }}
      >
        {errored ? (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'grid',
              placeItems: 'center',
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(244,242,238,0.06) 0 1px, transparent 1px 11px)',
            }}
          >
            <span className="meta" style={{ color: 'rgba(244,242,238,0.6)', textAlign: 'center', padding: 12 }}>
              ▢ Add photo
              <br />
              {caption}
            </span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt ?? caption}
            className={tint === 'soft' ? 'bw-soft' : tint ? 'bw' : undefined}
            onError={() => setErrored(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: fit,
              padding: fit === 'contain' ? 'clamp(10px, 2.5%, 28px)' : 0,
            }}
          />
        )}
      </div>
      <figcaption className="meta" style={{ color: 'var(--muted)', marginTop: 10 }}>
        {caption}
      </figcaption>
    </figure>
  );
}
