import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Newest first — user scrolls left-to-right to go back in time
const timelineItems = [
  {
    year: '2026',
    title: 'AMD RAD Lab',
    description: '6-month internship working on novel low-latency AI acceleration techniques.',
  },
  {
    year: '2025',
    title: 'Fast ML 2025',
    description: 'Delivered a tutorial on LUT-based NNs with a live end-to-end demo on a PYNQ board.',
  },
  {
    year: '2025',
    title: 'T. Rowe Price',
    description: 'Software Engineering Intern — implemented OpenAI agents securely in Azure-based pipelines.',
  },
  {
    year: '2025',
    title: 'ISFPGA 2025',
    description: 'Presented ReducedLUT at the FPGA 2025 conference in Monterey, California.',
  },
  {
    year: '2024',
    title: 'Research',
    description: 'Focused on reducing P-LUT utilisation when implementing L-LUT based NN models on FPGA devices.',
  },
  {
    year: '2024',
    title: "Dean's List",
    description: 'Ranked 2nd in year at Imperial College London.',
  },
  {
    year: '2023',
    title: 'Imperial College',
    description: 'Electronic & Information Engineering. Predicted First-Class Honours.',
  },
  {
    year: '2021',
    title: 'A Levels',
    description: 'Studied at The Manchester Grammar School. Achieved A* in Maths, Further Maths, Physics and Electronics.',
  },
];

export default function TimelineSection() {
  const scrollRef = useRef(null);

  // Mouse drag-to-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onMouseDown = (e) => {
      isDown = true;
      el.style.cursor = 'grabbing';
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
      el.style.cursor = 'grab';
    };

    const onMouseUp = () => {
      isDown = false;
      el.style.cursor = 'grab';
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      el.scrollLeft = scrollLeft - walk;
    };

    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mouseleave', onMouseLeave);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mousemove', onMouseMove);

    return () => {
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mouseleave', onMouseLeave);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section
      id="timeline"
      style={{
        backgroundColor: '#0A0A0A',
        position: 'relative',
        overflowY: 'hidden',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
    >
      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(80px, 18vw, 220px)',
          color: '#F8F7F4',
          opacity: 0.03,
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        TIMELINE
      </div>

      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-12">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
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
              / Timeline
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(32px, 5vw, 56px)',
                color: '#F8F7F4',
                lineHeight: 1,
                margin: 0,
              }}
            >
              The journey<br />so far.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: '#888888',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
            Drag to go further back
          </motion.div>
        </div>
      </div>

      {/* Horizontal scroll track */}
      <div
        ref={scrollRef}
        style={{
          overflowX: 'auto',
          overflowY: 'visible',
          paddingLeft: '48px',
          paddingRight: '48px',
          paddingBottom: '40px',
          scrollSnapType: 'x proximity',
          WebkitOverflowScrolling: 'touch',
          cursor: 'grab',
          userSelect: 'none',
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            display: 'flex',
            gap: '0',
            position: 'relative',
            width: 'max-content',
            paddingTop: '48px',
          }}
        >
          {/* Connecting orange line — runs through dot centres (dot is 10px, centred at paddingTop + 5px = 53px) */}
          <div
            style={{
              position: 'absolute',
              top: '53px',
              left: 0,
              right: 0,
              height: '1px',
              backgroundColor: '#FF3C00',
              opacity: 0.35,
            }}
          />

          {timelineItems.map((item, index) => (
            <div
              key={index}
              style={{
                width: '280px',
                flexShrink: 0,
                scrollSnapAlign: 'start',
                paddingRight: '28px',
                position: 'relative',
              }}
            >
              {/* Dot — sits ON the line */}
              <motion.div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === 0 ? '#FF3C00' : 'rgba(255,60,0,0.5)',
                  marginBottom: '16px',
                  position: 'relative',
                  zIndex: 1,
                  flexShrink: 0,
                }}
                whileHover={{ scale: 1.8, backgroundColor: '#FF3C00' }}
                transition={{ duration: 0.2 }}
              />

              {/* Faded year — below the line */}
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '36px',
                  color: '#F8F7F4',
                  opacity: index === 0 ? 0.3 : 0.1,
                  lineHeight: 1,
                  marginBottom: '10px',
                }}
              >
                {item.year}
              </div>

              {/* Card */}
              <motion.div
                style={{
                  border: index === 0
                    ? '1px solid rgba(255,60,0,0.35)'
                    : '1px solid rgba(248,247,244,0.08)',
                  padding: '20px 22px',
                }}
                whileHover={{
                  borderColor: 'rgba(255,60,0,0.5)',
                  y: -4,
                }}
                transition={{ duration: 0.2 }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#FF3C00',
                    marginBottom: '8px',
                  }}
                >
                  {item.year}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '17px',
                    color: '#F8F7F4',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '13px',
                    lineHeight: 1.6,
                    color: '#888888',
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
