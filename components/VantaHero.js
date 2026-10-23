"use client";

import { useEffect, useRef } from "react";

/**
 * 3D globe hero for Next.js.
 *
 * The Vanta effect is created when this component mounts and destroyed when
 * it unmounts. This makes the globe reappear after client-side navigation
 * (for example, Home -> Portfolio -> Home).
 */
export default function VantaHero({ children }) {
  const heroRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let globeEffect = null;

    async function initializeGlobe() {
      try {
        // Import browser-dependent libraries only after mounting on the client.
        const [THREE, vantaModule] = await Promise.all([
          import("three"),
          import("vanta/dist/vanta.globe.min"),
        ]);

        if (cancelled || !heroRef.current) return;

        const createGlobe = vantaModule.default || vantaModule;

        globeEffect = createGlobe({
          el: heroRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200,
          minWidth: 200,
          scale: 1,
          scaleMobile: 1,
          backgroundColor: 0x030303,
          color: 0xffffff,
          color2: 0x777777,
          size: 1.2,
        });
      } catch (error) {
        if (!cancelled) {
          console.error("Vanta globe could not start:", error);
        }
      }
    }

    initializeGlobe();

    return () => {
      // Covers both normal navigation and React Strict Mode cleanup.
      cancelled = true;
      if (globeEffect) {
        globeEffect.destroy();
        globeEffect = null;
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="hero-section">
      {children}
    </section>
  );
}
