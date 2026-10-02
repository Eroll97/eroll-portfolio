'use client';

import { useRef } from 'react';

export default function CursorParallax({ children, className = '' }) {
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const element = containerRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      element.style.setProperty('--rotateX', `${percentY * -5}deg`);
      element.style.setProperty('--rotateY', `${percentX * 5}deg`);

      element.style.setProperty('--moveX', `${percentX * 12}px`);
      element.style.setProperty('--moveY', `${percentY * 12}px`);

      element.style.setProperty('--moveX2', `${percentX * 22}px`);
      element.style.setProperty('--moveY2', `${percentY * 22}px`);

      element.style.setProperty('--moveX3', `${percentX * -15}px`);
      element.style.setProperty('--moveY3', `${percentY * -15}px`);
    });
  };

  const handleMouseLeave = () => {
    const element = containerRef.current;
    if (!element) return;

    cancelAnimationFrame(frameRef.current);

    element.style.setProperty('--rotateX', '0deg');
    element.style.setProperty('--rotateY', '0deg');

    element.style.setProperty('--moveX', '0px');
    element.style.setProperty('--moveY', '0px');

    element.style.setProperty('--moveX2', '0px');
    element.style.setProperty('--moveY2', '0px');

    element.style.setProperty('--moveX3', '0px');
    element.style.setProperty('--moveY3', '0px');
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`cursor-parallax ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>

      <style jsx>{`
        .cursor-parallax {
          --rotateX: 0deg;
          --rotateY: 0deg;

          --moveX: 0px;
          --moveY: 0px;

          --moveX2: 0px;
          --moveY2: 0px;

          --moveX3: 0px;
          --moveY3: 0px;

          position: relative;
          transform-style: preserve-3d;
          perspective: 1200px;

          transform:
            rotateX(var(--rotateX))
            rotateY(var(--rotateY));

          transition: transform 0.12s ease-out;
          will-change: transform;
        }

        /*
        =====================================================
        ADD THESE CLASSES TO THE ITEMS INSIDE YOUR VISUAL
        =====================================================

        Main website screenshot:
        className="parallax-main"

        Second overlapping website screenshot:
        className="parallax-front"

        WordPress / Shopify / GHL badges:
        className="parallax-badge"

        800+ box / Loads in <2s:
        className="parallax-stat"
        */

        .cursor-parallax :global(.parallax-main) {
          transform:
            translate3d(
              var(--moveX),
              var(--moveY),
              20px
            );

          transition: transform 0.15s ease-out;
          will-change: transform;
        }

        .cursor-parallax :global(.parallax-front) {
          transform:
            translate3d(
              var(--moveX2),
              var(--moveY2),
              50px
            );

          transition: transform 0.12s ease-out;
          will-change: transform;
        }

        .cursor-parallax :global(.parallax-badge) {
          transform:
            translate3d(
              var(--moveX3),
              var(--moveY3),
              80px
            );

          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        .cursor-parallax :global(.parallax-stat) {
          transform:
            translate3d(
              var(--moveX2),
              var(--moveY2),
              100px
            );

          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        @media (hover: none), (pointer: coarse) {
          .cursor-parallax {
            transform: none !important;
          }

          .cursor-parallax :global(.parallax-main),
          .cursor-parallax :global(.parallax-front),
          .cursor-parallax :global(.parallax-badge),
          .cursor-parallax :global(.parallax-stat) {
            transform: none !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cursor-parallax,
          .cursor-parallax :global(*) {
            transition: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </>
  );
}

/*

=============================================================
HOW TO USE IT IN YOUR EXISTING SECTION
=============================================================

FIRST IMPORT:

import CursorParallax from '@/components/CursorParallax';


THEN CHANGE YOUR RIGHT-SIDE VISUAL FROM SOMETHING LIKE:

<div className="launch-visual">

TO:

<CursorParallax className="launch-visual">


AND CLOSE IT WITH:

</CursorParallax>


=============================================================
ADD THESE CLASSES TO YOUR EXISTING ELEMENTS
=============================================================

MAIN BACK WEBSITE:

<div className="website-card parallax-main">
  ...
</div>


FRONT / SHOPIFY WEBSITE:

<div className="store-card parallax-front">
  ...
</div>


WORDPRESS BADGE:

<div className="platform-badge wordpress parallax-badge">
  WordPress
</div>


GOHIGHLEVEL BADGE:

<div className="platform-badge ghl parallax-badge">
  GoHighLevel
</div>


SHOPIFY BADGE:

<div className="platform-badge shopify parallax-badge">
  Shopify
</div>


800+ BOX:

<div className="sites-stat parallax-stat">
  <strong>800+</strong>
  <span>SITES LAUNCHED</span>
</div>


LOADS IN <2S BADGE:

<div className="speed-badge parallax-badge">
  Loads in &lt;2s
</div>

=============================================================

*/