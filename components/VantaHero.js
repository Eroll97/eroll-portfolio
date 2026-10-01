'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function VantaHero({ children, className = '' }) {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !threeReady ||
      !vantaReady ||
      !vantaRef.current ||
      !window.THREE ||
      !window.VANTA?.GLOBE
    ) {
      return;
    }

    if (effectRef.current) {
      effectRef.current.destroy();
      effectRef.current = null;
    }

    effectRef.current = window.VANTA.GLOBE({
      el: vantaRef.current,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,

      scale: 1,
      scaleMobile: 1,

      backgroundColor: 0x0,
      color: 0xf7f7f7,
      color2: 0xffffff,

      size: 0.95,
    });

    return () => {
      if (effectRef.current) {
        effectRef.current.destroy();
        effectRef.current = null;
      }
    };
  }, [threeReady, vantaReady]);

  return (
    <>
      <Script
        id="three-js"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeReady(true)}
      />

      {threeReady && (
        <Script
          id="vanta-globe"
          src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
          strategy="afterInteractive"
          onLoad={() => setVantaReady(true)}
        />
      )}

      <section className={`hero-section vanta-hero-shell ${className}`}>
        {/* FULL HERO BACKGROUND */}
        <div ref={vantaRef} className="hero-vanta-bg" aria-hidden="true" />

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="hero-vanta-overlay-full" aria-hidden="true" />

        {/* YOUR HERO CONTENT */}
        {children}

        <style jsx>{`
          .vanta-hero-shell {
            position: relative !important;
            width: 100% !important;
            min-height: 100vh !important;
            overflow: hidden !important;
            isolation: isolate !important;
            background: #030303 !important;
          }

          .hero-vanta-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background: #030303;
            overflow: hidden;
          }

          :global(.hero-vanta-bg canvas) {
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            display: block !important;
            transform: none !important;
          }

          .hero-vanta-overlay-full {
            position: absolute;
            inset: 0;
            z-index: 1;
            pointer-events: none;
            background:
              linear-gradient(
                90deg,
                rgba(3, 3, 3, 0.82) 0%,
                rgba(3, 3, 3, 0.56) 28%,
                rgba(3, 3, 3, 0.18) 55%,
                rgba(3, 3, 3, 0.06) 78%,
                rgba(3, 3, 3, 0.02) 100%
              ),
              linear-gradient(
                180deg,
                rgba(3, 3, 3, 0.08) 0%,
                rgba(3, 3, 3, 0.02) 55%,
                rgba(3, 3, 3, 0.1) 100%
              );
          }

          /* KEEP GRID ABOVE VANTA */
          :global(.vanta-hero-shell .hero-grid-bg) {
            position: absolute !important;
            inset: 0 !important;
            z-index: 2 !important;
            pointer-events: none !important;
          }

          /* KEEP DECORATIONS ABOVE BG */
          :global(.vanta-hero-shell .hero-glow),
          :global(.vanta-hero-shell .hero-ring),
          :global(.vanta-hero-shell .hero-dot),
          :global(.vanta-hero-shell .hero-vanta-overlay) {
            z-index: 3 !important;
            pointer-events: none !important;
          }

          /* KEEP CONTENT ABOVE EVERYTHING */
          :global(.vanta-hero-shell .shell),
          :global(.vanta-hero-shell .hero-inner),
          :global(.vanta-hero-shell .availability),
          :global(.vanta-hero-shell .hero-title),
          :global(.vanta-hero-shell .hero-bottom),
          :global(.vanta-hero-shell .hero-copy),
          :global(.vanta-hero-shell .hero-stats),
          :global(.vanta-hero-shell .hero-actions),
          :global(.vanta-hero-shell .scroll-cue) {
            position: relative !important;
            z-index: 10 !important;
          }

          @media (max-width: 991px) {
            .hero-vanta-overlay-full {
              background:
                linear-gradient(
                  90deg,
                  rgba(3, 3, 3, 0.9) 0%,
                  rgba(3, 3, 3, 0.68) 35%,
                  rgba(3, 3, 3, 0.2) 72%,
                  rgba(3, 3, 3, 0.05) 100%
                );
            }
          }

          @media (max-width: 767px) {
            .hero-vanta-overlay-full {
              background:
                linear-gradient(
                  90deg,
                  rgba(3, 3, 3, 0.95) 0%,
                  rgba(3, 3, 3, 0.82) 45%,
                  rgba(3, 3, 3, 0.42) 78%,
                  rgba(3, 3, 3, 0.12) 100%
                );
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-vanta-bg {
              pointer-events: none;
            }
          }
        `}</style>
      </section>
    </>
  );
}