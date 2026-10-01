'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';

export default function VantaGlobe({ children }) {
  const heroRef = useRef(null);
  const effectRef = useRef(null);

  const [threeReady, setThreeReady] = useState(false);
  const [vantaReady, setVantaReady] = useState(false);

  useEffect(() => {
    if (
      !threeReady ||
      !vantaReady ||
      !heroRef.current ||
      typeof window === 'undefined' ||
      !window.VANTA?.GLOBE
    ) {
      return;
    }

    if (effectRef.current) {
      effectRef.current.destroy();
      effectRef.current = null;
    }

    effectRef.current = window.VANTA.GLOBE({
      el: heroRef.current,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,

      scale: 1,
      scaleMobile: 1,

      color: 0xf7f7f7,
      color2: 0xffffff,

      backgroundColor: 0x000000,

      size: 1,
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
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setThreeReady(true)}
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
        strategy="afterInteractive"
        onLoad={() => setVantaReady(true)}
      />

      <section
        ref={heroRef}
        className="hero-section"
      >
        {children}
      </section>
    </>
  );
}