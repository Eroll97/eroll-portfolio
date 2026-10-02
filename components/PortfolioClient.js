'use client';

import { useMemo, useState } from 'react';
import styles from './PortfolioClient.module.css';

function getTags(project) {
  const platform = project?.platform || 'Website';
  const lower = platform.toLowerCase();

  if (lower.includes('wordpress')) {
    return ['WordPress', 'Elementor', 'HTML5', 'CSS3'];
  }

  if (lower.includes('shopify')) {
    return ['Shopify', 'eCommerce', 'Liquid', 'CSS3'];
  }

  if (
    lower.includes('gohighlevel') ||
    lower.includes('highlevel') ||
    lower.includes('ghl')
  ) {
    return ['GoHighLevel', 'Funnels', 'CRM', 'Automation'];
  }

  return [platform, 'Responsive', 'HTML5', 'CSS3'];
}

export default function PortfolioClient({ projects = [] }) {
  const [category, setCategory] = useState('All Projects');
  const [platform, setPlatform] = useState('All');

  /* =========================================================
     CATEGORY LIST
  ========================================================= */

  const categories = useMemo(() => {
    const map = {};

    projects.forEach((project) => {
      const name = project.category || 'Other';
      map[name] = (map[name] || 0) + 1;
    });

    return Object.entries(map).sort((a, b) =>
      a[0].localeCompare(b[0])
    );
  }, [projects]);

  /* =========================================================
     PLATFORM LIST
  ========================================================= */

  const platforms = useMemo(() => {
    const unique = new Set();

    projects.forEach((project) => {
      if (project.platform) {
        unique.add(project.platform);
      }
    });

    return ['All', ...Array.from(unique)];
  }, [projects]);

  /* =========================================================
     FILTERED PROJECTS
  ========================================================= */

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        category === 'All Projects' ||
        project.category === category;

      const matchesPlatform =
        platform === 'All' ||
        project.platform === platform;

      return matchesCategory && matchesPlatform;
    });
  }, [projects, category, platform]);

  /* =========================================================
     3D CARD TILT
  ========================================================= */

  const handleCardPointerMove = (event) => {
    if (event.pointerType === 'touch') return;

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    /*
      Change 7 below if you want stronger/weaker tilt.
      5 = soft
      7 = balanced
      10 = strong
    */

    const rotateY =
      ((mouseX - centerX) / centerX) * 7;

    const rotateX =
      -((mouseY - centerY) / centerY) * 7;

    card.style.setProperty(
      '--tilt-x',
      `${rotateX}deg`
    );

    card.style.setProperty(
      '--tilt-y',
      `${rotateY}deg`
    );

    card.style.setProperty(
      '--glare-x',
      `${(mouseX / rect.width) * 100}%`
    );

    card.style.setProperty(
      '--glare-y',
      `${(mouseY / rect.height) * 100}%`
    );
  };

  const handleCardPointerEnter = (event) => {
    if (event.pointerType === 'touch') return;

    const card = event.currentTarget;

    card.style.setProperty(
      '--card-lift',
      '-6px'
    );

    card.style.setProperty(
      '--card-scale',
      '1.018'
    );
  };

  const resetCardTilt = (event) => {
    const card = event.currentTarget;

    card.style.setProperty(
      '--tilt-x',
      '0deg'
    );

    card.style.setProperty(
      '--tilt-y',
      '0deg'
    );

    card.style.setProperty(
      '--card-lift',
      '0px'
    );

    card.style.setProperty(
      '--card-scale',
      '1'
    );

    card.style.setProperty(
      '--glare-x',
      '50%'
    );

    card.style.setProperty(
      '--glare-y',
      '50%'
    );
  };

  return (
    <div className={styles.layout}>
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className={styles.sidebar}>
        <div className={styles.filterBox}>
          <p className={styles.filterTitle}>
            Categories
          </p>

          <button
            type="button"
            className={
              category === 'All Projects'
                ? styles.activeCategory
                : ''
            }
            onClick={() =>
              setCategory('All Projects')
            }
          >
            <span className={styles.categoryIcon}>
              ◈
            </span>

            <span>All Projects</span>

            <b>{projects.length}</b>
          </button>

          {categories.map(([name, count]) => (
            <button
              type="button"
              key={name}
              className={
                category === name
                  ? styles.activeCategory
                  : ''
              }
              onClick={() =>
                setCategory(name)
              }
            >
              <span className={styles.categoryIcon}>
                ◇
              </span>

              <span>{name}</span>

              <b>{count}</b>
            </button>
          ))}
        </div>

        {/* PLATFORM FILTER */}

        <div className={styles.platformBox}>
          <p className={styles.filterTitle}>
            Platform
          </p>

          <div className={styles.platformList}>
            {platforms.map((item) => (
              <button
                type="button"
                key={item}
                className={
                  platform === item
                    ? styles.activePlatform
                    : ''
                }
                onClick={() =>
                  setPlatform(item)
                }
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* =====================================================
          RESULTS
      ===================================================== */}

      <section className={styles.results}>
        {/* MOBILE FILTERS */}

        <div className={styles.mobileFilters}>
          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option value="All Projects">
              All Projects
            </option>

            {categories.map(([name]) => (
              <option
                key={name}
                value={name}
              >
                {name}
              </option>
            ))}
          </select>

          <select
            value={platform}
            onChange={(event) =>
              setPlatform(event.target.value)
            }
          >
            {platforms.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

        <p className={styles.showing}>
          Showing{' '}
          <strong>
            {filteredProjects.length}
          </strong>{' '}
          project
          {filteredProjects.length !== 1
            ? 's'
            : ''}
        </p>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className={styles.projectGrid}>
          {filteredProjects.map(
            (project, index) => {
              const tags = getTags(project);

              return (
                <article
                  className={styles.projectItem}
                  key={
                    project.id ||
                    `${project.name}-${index}`
                  }
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectCard}
                    onPointerMove={
                      handleCardPointerMove
                    }
                    onPointerEnter={
                      handleCardPointerEnter
                    }
                    onPointerLeave={
                      resetCardTilt
                    }
                    onPointerCancel={
                      resetCardTilt
                    }
                  >
                    {/* 3D CURSOR LIGHT */}

                    <div
                      className={styles.cardGlare}
                    />

                    {/* ==========================================
                        WEBSITE SCREENSHOT
                    ========================================== */}

                    <div
                      className={styles.projectShot}
                    >
                      <img
                        src={project.image}
                        alt={`${project.name} website screenshot`}
                        loading="lazy"
                      />

                      <div
                        className={styles.projectFade}
                      />

                      <span
                        className={styles.platformBadge}
                      >
                        {project.platform ||
                          'Website'}
                      </span>

                      <span
                        className={styles.categoryBadge}
                      >
                        {project.category ||
                          'Website'}
                      </span>
                    </div>

                    {/* ==========================================
                        PROJECT CONTENT
                    ========================================== */}

                    <div
                      className={styles.projectContent}
                    >
                      <div
                        className={styles.projectHeading}
                      >
                        <div>
                          <h2>
                            {project.name}
                          </h2>

                          <p>
                            {project.description}
                          </p>
                        </div>

                        <span
                          className={styles.projectArrow}
                        >
                          ↗
                        </span>
                      </div>

                      {/* TAGS */}

                      <div className={styles.tags}>
                        {tags.map((tag) => (
                          <span key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* VIEW PROJECT */}

                      <div
                        className={styles.projectButton}
                      >
                        <span>
                          View Project

                          <b>↗</b>
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
              );
            }
          )}
        </div>

        {/* EMPTY STATE */}

        {filteredProjects.length === 0 && (
          <div className={styles.empty}>
            <h3>No projects found</h3>

            <p>
              Try another category or platform.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}