'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import styles from './FeaturedCarousel.module.css';

const MAX_FEATURED_PROJECTS = 16;
const AUTOPLAY_DELAY = 4500;

function getItemsPerPage() {
  if (typeof window === 'undefined') {
    return 4;
  }

  if (window.innerWidth <= 680) {
    return 1;
  }

  if (window.innerWidth <= 1000) {
    return 2;
  }

  return 4;
}

function getProjectTags(project) {
  const platform =
    project?.platform || 'Website';

  if (
    platform
      .toLowerCase()
      .includes('wordpress')
  ) {
    return [
      platform,
      'Elementor',
      'HTML5',
      'CSS3',
    ];
  }

  if (
    platform
      .toLowerCase()
      .includes('shopify')
  ) {
    return [
      platform,
      'eCommerce',
      'Liquid',
      'CSS3',
    ];
  }

  if (
    platform
      .toLowerCase()
      .includes('highlevel') ||
    platform
      .toLowerCase()
      .includes('gohighlevel')
  ) {
    return [
      platform,
      'Funnels',
      'CRM',
      'Automation',
    ];
  }

  return [
    platform,
    'Responsive',
    'HTML5',
    'CSS3',
  ];
}

export default function FeaturedCarousel({
  projects = [],
}) {
  const trackRef = useRef(null);

  const [currentPage, setCurrentPage] =
    useState(0);

  const [itemsPerPage, setItemsPerPage] =
    useState(4);

  const [paused, setPaused] =
    useState(false);

  const featuredProjects = useMemo(
    () =>
      projects.slice(
        0,
        MAX_FEATURED_PROJECTS
      ),
    [projects]
  );

  const pageCount = Math.max(
    1,
    Math.ceil(
      featuredProjects.length /
        itemsPerPage
    )
  );

  /* =========================================================
     RESPONSIVE CARD COUNT
  ========================================================= */

  useEffect(() => {
    const updateItems = () => {
      setItemsPerPage(
        getItemsPerPage()
      );
    };

    updateItems();

    window.addEventListener(
      'resize',
      updateItems
    );

    return () => {
      window.removeEventListener(
        'resize',
        updateItems
      );
    };
  }, []);

  /* =========================================================
     MOVE TO A PAGE
  ========================================================= */

  const goToPage = useCallback(
    (page) => {
      const track = trackRef.current;

      if (!track) {
        return;
      }

      let nextPage = page;

      if (nextPage >= pageCount) {
        nextPage = 0;
      }

      if (nextPage < 0) {
        nextPage =
          pageCount - 1;
      }

      const targetIndex =
        nextPage * itemsPerPage;

      const cards =
        track.querySelectorAll(
          '[data-featured-card]'
        );

      const target =
        cards[targetIndex];

      const firstCard =
        cards[0];

      if (!target || !firstCard) {
        return;
      }

      const targetLeft =
        target.offsetLeft -
        firstCard.offsetLeft;

      track.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });

      setCurrentPage(nextPage);
    },
    [
      pageCount,
      itemsPerPage,
    ]
  );

  /* =========================================================
     AUTOPLAY
  ========================================================= */

  useEffect(() => {
    if (
      paused ||
      pageCount <= 1
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentPage(
        (previousPage) => {
          const nextPage =
            (previousPage + 1) %
            pageCount;

          const track =
            trackRef.current;

          if (track) {
            const cards =
              track.querySelectorAll(
                '[data-featured-card]'
              );

            const targetIndex =
              nextPage *
              itemsPerPage;

            const target =
              cards[targetIndex];

            const firstCard =
              cards[0];

            if (
              target &&
              firstCard
            ) {
              track.scrollTo({
                left:
                  target.offsetLeft -
                  firstCard.offsetLeft,

                behavior:
                  'smooth',
              });
            }
          }

          return nextPage;
        }
      );
    }, AUTOPLAY_DELAY);

    return () => {
      clearInterval(timer);
    };
  }, [
    paused,
    pageCount,
    itemsPerPage,
  ]);

  /* =========================================================
     RESET AFTER RESIZE
  ========================================================= */

  useEffect(() => {
    setCurrentPage(0);

    const track =
      trackRef.current;

    if (track) {
      track.scrollTo({
        left: 0,
        behavior: 'auto',
      });
    }
  }, [itemsPerPage]);

  /* =========================================================
     CARD CURSOR TILT
  ========================================================= */

  const handleCardMove = (
    event
  ) => {
    const card =
      event.currentTarget;

    const rect =
      card.getBoundingClientRect();

    const x =
      event.clientX -
      rect.left;

    const y =
      event.clientY -
      rect.top;

    const centerX =
      rect.width / 2;

    const centerY =
      rect.height / 2;

    const rotateY =
      ((x - centerX) /
        centerX) *
      2.2;

    const rotateX =
      -(
        (y - centerY) /
        centerY
      ) * 1.7;

    card.style.setProperty(
      '--rotate-x',
      `${rotateX}deg`
    );

    card.style.setProperty(
      '--rotate-y',
      `${rotateY}deg`
    );
  };

  const resetCard = (
    event
  ) => {
    const card =
      event.currentTarget;

    card.style.setProperty(
      '--rotate-x',
      '0deg'
    );

    card.style.setProperty(
      '--rotate-y',
      '0deg'
    );
  };

  if (
    !featuredProjects.length
  ) {
    return null;
  }

  return (
    <div
      className={
        styles.carousel
      }
    >
      {/* ================================================
          ARROWS
      ================================================= */}

      <div
        className={
          styles.controls
        }
      >
        <button
          type="button"
          aria-label="Previous projects"
          onClick={() =>
            goToPage(
              currentPage - 1
            )
          }
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M15 18 9 12l6-6" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next projects"
          onClick={() =>
            goToPage(
              currentPage + 1
            )
          }
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ================================================
          PROJECTS
      ================================================= */}

      <div
        ref={trackRef}
        className={styles.track}
      >
        {featuredProjects.map(
          (project, index) => {
            const tags =
              getProjectTags(
                project
              );

            return (
              <div
                key={
                  project.id ||
                  project.name ||
                  index
                }
                data-featured-card
                className={
                  styles.item
                }
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    styles.card
                  }
                  onMouseMove={
                    handleCardMove
                  }
                  onMouseEnter={() =>
                    setPaused(true)
                  }
                  onMouseLeave={(
                    event
                  ) => {
                    resetCard(
                      event
                    );

                    setPaused(
                      false
                    );
                  }}
                >
                  {/* IMAGE */}

                  <div
                    className={
                      styles.imageWindow
                    }
                  >
                    <img
                      src={
                        project.image
                      }
                      alt={`${project.name} website`}
                      loading="lazy"
                    />

                    <div
                      className={
                        styles.imageFade
                      }
                    />

                    <span
                      className={
                        styles.platform
                      }
                    >
                      {project.platform ||
                        'Website'}
                    </span>

                    <span
                      className={
                        styles.category
                      }
                    >
                      {project.category ||
                        'Website'}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div
                    className={
                      styles.content
                    }
                  >
                    <div
                      className={
                        styles.heading
                      }
                    >
                      <div>
                        <h3>
                          {
                            project.name
                          }
                        </h3>

                        <p>
                          {project.description}
                        </p>
                      </div>

                      <span
                        className={
                          styles.arrow
                        }
                      >
                        ↗
                      </span>
                    </div>

                    {/* TAGS */}

                    <div
                      className={
                        styles.tags
                      }
                    >
                      {tags.map(
                        (tag) => (
                          <span
                            key={
                              tag
                            }
                          >
                            {tag}
                          </span>
                        )
                      )}
                    </div>

                    {/* VIEW PROJECT */}

                    <div
                      className={
                        styles.view
                      }
                    >
                      <span>
                        View Project

                        <b>
                          ↗
                        </b>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            );
          }
        )}
      </div>

      {/* ================================================
          DOTS
      ================================================= */}

      <div
        className={styles.dots}
      >
        {Array.from({
          length: pageCount,
        }).map((_, index) => (
          <button
            type="button"
            key={index}
            aria-label={`Go to slide ${
              index + 1
            }`}
            className={
              currentPage ===
              index
                ? styles.activeDot
                : ''
            }
            onClick={() =>
              goToPage(index)
            }
          />
        ))}
      </div>
    </div>
  );
}