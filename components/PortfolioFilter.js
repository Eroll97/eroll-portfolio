'use client';

import { useMemo, useState } from 'react';
import ProjectCard from './ProjectCard';

export default function PortfolioFilter({ projects }) {
  const [platform, setPlatform] = useState('All');
  const [category, setCategory] = useState('All');

  const platformOptions = ['All', 'WordPress', 'Shopify', 'GoHighLevel'];
  const categoryOptions = useMemo(() => ['All', ...new Set(projects.map((project) => project.category))], [projects]);
  const categoryCounts = useMemo(() => Object.fromEntries(categoryOptions.map((item) => [item, item === 'All' ? projects.length : projects.filter((project) => project.category === item).length])), [categoryOptions, projects]);

  const filtered = useMemo(() => projects.filter((project) => {
    const platformMatches = platform === 'All' || project.platform === platform;
    const categoryMatches = category === 'All' || project.category === category;
    return platformMatches && categoryMatches;
  }), [projects, platform, category]);

  return (
    <>
      <div className="portfolio-controls" data-reveal>
        <label className="category-select">
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            {categoryOptions.map((item) => <option key={item} value={item}>{item} ({categoryCounts[item]})</option>)}
          </select>
        </label>
        <div className="platform-filter">
          <span>Platform</span>
          <div>{platformOptions.map((item) => <button type="button" className={platform === item ? 'active' : ''} key={item} onClick={() => setPlatform(item)}>{item}</button>)}</div>
        </div>
      </div>
      <div className="category-strip" data-reveal>
        {categoryOptions.map((item) => <button type="button" key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item} <small>({categoryCounts[item]})</small></button>)}
      </div>
      <div className="results-count">Showing {filtered.length} project{filtered.length === 1 ? '' : 's'}</div>
      <div className="project-grid portfolio-grid">{filtered.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
    </>
  );
}
