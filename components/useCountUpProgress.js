'use client';

import { useEffect, useRef, useState } from 'react';

export default function useCountUpProgress() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const container = containerRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!container || reducedMotion.matches || !('IntersectionObserver' in window)) return;

    let frame;
    let started = false;
    let startTime;
    let disposed = false;
    setProgress(0);

    const tick = time => {
      if (disposed) return;
      startTime ??= time;
      const elapsed = Math.min((time - startTime) / 1800, 1);
      setProgress(1 - Math.pow(1 - elapsed, 3));
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(entries => {
      if (!started && entries.some(entry => entry.isIntersecting)) {
        started = true;
        observer.disconnect();
        frame = requestAnimationFrame(tick);
      }
    }, { threshold: 0.25 });
    observer.observe(container);

    const finish = event => {
      if (event.matches) {
        started = true;
        observer.disconnect();
        cancelAnimationFrame(frame);
        setProgress(1);
      }
    };
    reducedMotion.addEventListener('change', finish);
    return () => {
      disposed = true;
      observer.disconnect();
      reducedMotion.removeEventListener('change', finish);
      cancelAnimationFrame(frame);
    };
  }, []);

  return { containerRef, progress };
}
