'use client';

import useCountUpProgress from './useCountUpProgress';

const stats = [
  { value: 6, label: 'Years experience' },
  { value: 800, label: 'Websites launched' },
  { value: 4, label: 'Companies worked with' },
];

export default function HeroStats() {
  const { containerRef, progress } = useCountUpProgress();

  return (
    <div className="hero-stats" ref={containerRef}>
      {stats.map(stat => (
        <div key={stat.label}>
          <strong aria-label={`${stat.value}+`} aria-live="off" style={{ minWidth: `${String(stat.value).length + 1}ch`, fontVariantNumeric: 'tabular-nums' }}>
            {Math.floor(stat.value * progress)}+
          </strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
