'use client';

import { Fragment } from 'react';
import useCountUpProgress from './useCountUpProgress';

const stats = [
  { value: 6, suffix: '+', lines: ['YEARS', 'EXPERIENCE'] },
  { value: 800, suffix: '+', lines: ['SITES', 'LAUNCHED'] },
  { value: 4, suffix: '+', lines: ['COMPANIES'] },
  { value: 24, suffix: '/7', lines: ['AUTOMATION'] },
];

export default function AboutStats() {
  const { containerRef, progress } = useCountUpProgress();

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
