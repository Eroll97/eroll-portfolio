'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;

    let ringX = -100;
    let ringY = -100;

    let animationFrame;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      dot.style.transform = `translate3d(
        ${mouseX}px,
        ${mouseY}px,
        0
      ) translate(-50%, -50%)`;

      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      ring.style.transform = `translate3d(
        ${ringX}px,
        ${ringY}px,
        0
      ) translate(-50%, -50%)`;

      animationFrame = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animateRing();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="custom-cursor-ring"
      />

      <div
        ref={dotRef}
        className="custom-cursor-dot"
      />

      <style jsx global>{`
        @media (pointer: fine) {
          html,
          body,
          a,
          button,
          input,
          textarea,
          select,
          [role='button'] {
            cursor: none !important;
          }

          .custom-cursor-dot {
            position: fixed;

            left: 0;
            top: 0;

            width: 9px;
            height: 9px;

            border-radius: 50%;

            background: #ffffff;

            pointer-events: none;

            z-index: 999999;

            opacity: 0;

            mix-blend-mode: difference;

            will-change: transform;

            transition: opacity 0.2s ease;
          }

          .custom-cursor-ring {
            position: fixed;

            left: 0;
            top: 0;

            width: 46px;
            height: 46px;

            border: 1px solid rgba(255, 255, 255, 0.65);

            border-radius: 50%;

            pointer-events: none;

            z-index: 999998;

            opacity: 0;

            mix-blend-mode: difference;

            will-change: transform;

            transition:
              width 0.25s ease,
              height 0.25s ease,
              border-color 0.25s ease,
              opacity 0.2s ease;
          }
        }

        @media (pointer: coarse) {
          .custom-cursor-dot,
          .custom-cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}