'use client';

import { Fragment, useEffect, useRef, useState } from 'react';

const stats = [
  { value: 6, suffix: '+', lines: ['YEARS', 'EXPERIENCE'] },
  { value: 800, suffix: '+', lines: ['SITES', 'LAUNCHED'] },
  { value: 4, suffix: '+', lines: ['COMPANIES'] },
  { value: 24, suffix: '/7', lines: ['AUTOMATION'] },
];

export default function AboutStats() {
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

  return (
    <div className="about-stats" ref={containerRef}>
      {stats.map(stat => (
        <div className="stat-box" key={stat.value}>
          <strong aria-label={`${stat.value}${stat.suffix}`} aria-live="off" style={{ minWidth: `${String(stat.value).length + stat.suffix.length}ch` }}>
            {Math.floor(stat.value * progress)}{stat.suffix}
          </strong>
          <span>{stat.lines.map((line, index) => <Fragment key={line}>{index > 0 && <br />}{line}</Fragment>)}</span>
        </div>
      ))}
    </div>
  );
}
