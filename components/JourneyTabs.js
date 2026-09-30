'use client';

import { useState } from 'react';

export default function JourneyTabs({ experience, education, achievements }) {
  const tabs = {
    Experience: experience,
    Education: education,
    Achievements: achievements,
  };
  const [active, setActive] = useState('Experience');
  const items = tabs[active];

  return (
    <div className="journey-wrap">
      <div className="journey-tabs" role="tablist" aria-label="Professional journey">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={active === tab}
            className={active === tab ? 'active' : ''}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="journey-list">
        {items.map((item, index) => (
          <article className="journey-item" key={`${active}-${index}`} data-reveal>
            <div className="journey-date">{item.period}</div>
            <div className="journey-logo" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
            <div className="journey-copy">
              <h3>{item.title}</h3>
              <strong>{item.company}</strong>
              <p>{item.text}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
