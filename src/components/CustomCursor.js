import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onEnter = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true);
      }
    };

    const onLeave = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter, true);
    document.addEventListener('mouseleave', onLeave, true);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter, true);
      document.removeEventListener('mouseleave', onLeave, true);
    };
  }, [cursorX, cursorY, isVisible]);

  const [isFinePointer, setIsFinePointer] = useState(false);
  useEffect(() => {
    setIsFinePointer(window.matchMedia('(pointer: fine)').matches);
  }, []);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Dot — mix-blend-mode: difference makes it white on dark, dark on light automatically */}
      <motion.div
        style={{
          position: 'fixed',
          left: cursorX,
          top: cursorY,
          x: '-50%',
          y: '-50%',
          zIndex: 99999,
          pointerEvents: 'none',
          width: isHovering ? 0 : 8,
          height: isHovering ? 0 : 8,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        }}
      />

      {/* Ring — also uses difference blend so it inverts on any background */}
      <motion.div
        style={{
          position: 'fixed',
          left: ringX,
          top: ringY,
          x: '-50%',
          y: '-50%',
          zIndex: 99998,
          pointerEvents: 'none',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          mixBlendMode: isHovering ? 'normal' : 'difference',
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 52 : 32,
            height: isHovering ? 52 : 32,
            borderColor: isHovering ? '#FF3C00' : '#ffffff',
            borderWidth: isHovering ? 2 : 1.5,
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{
            borderRadius: '50%',
            borderStyle: 'solid',
          }}
        />
      </motion.div>
    </>
  );
}
