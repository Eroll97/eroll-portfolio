
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TechLogoLoop.module.css";

/* ==========================================
   EROLL OLIVER - TECHNOLOGY LOGO LOOP

   20 Logos
   Continuous Two-Row Rotation
   Original Logo Colors
   Responsive Design
   CSS Module - No First-Load Flash
========================================== */

const favicon = (domain) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/* ==========================================
   TECHNOLOGY & COMPANY LOGOS
========================================== */

const BRANDS = [
  {
    name: "HighLevel",
    image: favicon("gohighlevel.com"),
    fallback: "H",
    color: "#2563eb",
  },
  {
    name: "Make",
    image: favicon("make.com"),
    fallback: "M",
    color: "#9240e8",
  },
  {
    name: "Instantly",
    image: favicon("instantly.ai"),
    fallback: "I",
    color: "#2563eb",
  },
  {
    name: "n8n",
    image: favicon("n8n.io"),
    fallback: "n",
    color: "#ff4875",
  },
  {
    name: "Lovable",
    image: favicon("lovable.dev"),
    fallback: "L",
    color: "#f06a63",
  },
  {
    name: "WordPress",
    image: favicon("wordpress.org"),
    fallback: "W",
    color: "#21759b",
  },
  {
    name: "Canva",
    image:
      "https://storage.googleapis.com/msgsndr/UNudbxb51b3TVF0aJVZS/media/66e9cfd6b50fd59f9020927e.png",
    fallback: "C",
    color: "#00bfd1",
  },
  {
    name: "HubSpot",
    image:
      "https://www.sixandflow.com/hs-fs/hubfs/HubSpot%20Logo.png?width=306&height=306&name=HubSpot%20Logo.png",
    fallback: "H",
    color: "#ff6652",
  },
  {
    name: "Apify",
    image:
      "https://storage.googleapis.com/msgsndr/UNudbxb51b3TVF0aJVZS/media/6866f05cc5b220ef4071a254.png",
    fallback: "A",
    color: "#335eea",
  },
  {
    name: "Zapier",
    image:
      "https://storage.googleapis.com/msgsndr/UNudbxb51b3TVF0aJVZS/media/66e9cfd62e82ca37ed113ace.png",
    fallback: "Z",
    color: "#ff6719",
  },
  {
    name: "ChatGPT",
    image: favicon("chatgpt.com"),
    fallback: "C",
    color: "#111111",
  },
  {
    name: "HeyGen",
    image: favicon("heygen.com"),
    fallback: "H",
    color: "#6559e8",
  },
  {
    name: "Meta Ads",
    image: favicon("facebook.com"),
    fallback: "M",
    color: "#0866ff",
  },
  {
    name: "Google Ads",
    image: favicon("ads.google.com"),
    fallback: "G",
    color: "#4285f4",
  },
  {
    name: "Mailchimp",
    image: favicon("mailchimp.com"),
    fallback: "M",
    color: "#e9be26",
  },
  {
    name: "Claude",
    image: favicon("claude.ai"),
    fallback: "C",
    color: "#cb8466",
  },

  /* ========================================
     ADDITIONAL COMPANY LOGOS
  ======================================== */

  {
    name: "D1TechCreative",
    image: "/icons/d1tech.png",
    fallback: "D1",
    color: "#181818",
    compact: true,
  },
  {
    name: "Hamsol",
    image: "/icons/hamsol.png",
    fallback: "H",
    color: "#181818",
  },
  {
    name: "Leadflex",
    image: "/icons/leadflex.png",
    fallback: "L",
    color: "#181818",
  },
  {
    name: "ZG Tech Solutions",
    image: "/icons/zgtech.png",
    fallback: "ZG",
    color: "#181818",
    compact: true,
  },
];

/* ==========================================
   BRAND IMAGE WITH FALLBACK
========================================== */

function BrandIcon({ brand }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className={styles.fallback}
        style={{
          backgroundColor: brand.color,
        }}
        aria-hidden="true"
      >
        {brand.fallback}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.icon}
      src={brand.image}
      alt=""
      width={34}
      height={34}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => setFailed(true)}
    />
  );
}

/* ==========================================
   MAIN TECHNOLOGY LOOP
========================================== */

export default function TechLogoLoop() {
  const viewportRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return;

    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    let frameId = 0;
    let geometry = null;

    const startTime = performance.now();

    /* ========================================
       MEASURE CARD DIMENSIONS
    ======================================== */

    function measure() {
      const firstCard = cardRefs.current[0];

      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const cardHeight = firstCard.offsetHeight;

      const width = viewport.clientWidth;
      const mobile = width <= 600;

      const gap = mobile ? 14 : 18;
      const rowGap = mobile ? 16 : 18;

      const topY = cardHeight / 2 + 16;

      const bottomY =
        topY + cardHeight + rowGap;

      const radius =
        (bottomY - topY) / 2;

      const arcLength = Math.PI * radius;

      // Automatically adjust spacing based
      // on the number of logos.

      const minimumStraight =
        (BRANDS.length / 2) *
          (cardWidth + gap) -
        arcLength;

      const straight = Math.max(
        minimumStraight,
        width - cardWidth - 2 * radius - 32
      );

      const leftX =
        (width - straight) / 2;

      const rightX =
        leftX + straight;

      geometry = {
        cardWidth,
        cardHeight,
        leftX,
        rightX,
        topY,
        bottomY,

        centerY: (topY + bottomY) / 2,

        radius,
        arcLength,
        straight,

        perimeter:
          2 * straight + 2 * arcLength,

        speed: mobile ? 44 : 55,

        initialOffset: Math.max(
          0,
          cardWidth / 2 + 16 - leftX
        ),
      };
    }

    /* ========================================
       ONE CONTINUOUS CLOSED LOOP
    ======================================== */

    function position(distance) {
      const g = geometry;

      const d =
        ((distance % g.perimeter) +
          g.perimeter) %
        g.perimeter;

      /* TOP ROW - MOVES RIGHT */

      if (d < g.straight) {
        return {
          x: g.leftX + d,
          y: g.topY,
        };
      }

      /* RIGHT SIDE - MOVES DOWN */

      if (d < g.straight + g.arcLength) {
        const angle =
          -Math.PI / 2 +
          (d - g.straight) / g.radius;

        return {
          x:
            g.rightX +
            g.radius * Math.cos(angle),

          y:
            g.centerY +
            g.radius * Math.sin(angle),
        };
      }

      /* BOTTOM ROW - MOVES LEFT */

      if (
        d <
        2 * g.straight + g.arcLength
      ) {
        return {
          x:
            g.rightX -
            (d -
              g.straight -
              g.arcLength),

          y: g.bottomY,
        };
      }

      /* LEFT SIDE - MOVES UP */

      const angle =
        Math.PI / 2 +
        (d -
          2 * g.straight -
          g.arcLength) /
          g.radius;

      return {
        x:
          g.leftX +
          g.radius * Math.cos(angle),

        y:
          g.centerY +
          g.radius * Math.sin(angle),
      };
    }

    /* ========================================
       POSITION ALL 20 LOGOS
    ======================================== */

    function draw(time) {
      if (!geometry) return;

      const progress =
        ((time - startTime) / 1000) *
        geometry.speed;

      const spacing =
        geometry.perimeter /
        BRANDS.length;

      cardRefs.current.forEach(
        (card, index) => {
          if (!card) return;

          const p = position(
            geometry.initialOffset +
              index * spacing +
              progress
          );

          const x =
            p.x -
            geometry.cardWidth / 2;

          const y =
            p.y -
            geometry.cardHeight / 2;

          card.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;
        }
      );

      // Reveal logos after correct
      // positions have been calculated.

      viewport.classList.add(styles.ready);
    }

    /* ========================================
       SMOOTH CONTINUOUS ANIMATION
    ======================================== */

    function animate(time) {
      draw(time);

      frameId =
        requestAnimationFrame(animate);
    }

    /* ========================================
       INITIALIZE ANIMATION
    ======================================== */

    function resetAnimation() {
      cancelAnimationFrame(frameId);

      if (motionPreference.matches) {
        // CSS displays a static grid
        // for reduced-motion preference.

        viewport.classList.remove(
          styles.ready
        );

        return;
      }

      measure();

      draw(performance.now());

      frameId =
        requestAnimationFrame(animate);
    }

    /* ========================================
       RESPONSIVE RESIZING
    ======================================== */

    const observer = new ResizeObserver(() => {
      if (!motionPreference.matches) {
        measure();
        draw(performance.now());
      }
    });

    observer.observe(viewport);

    motionPreference.addEventListener(
      "change",
      resetAnimation
    );

    resetAnimation();

    /* ========================================
       CLEANUP
    ======================================== */

    return () => {
      cancelAnimationFrame(frameId);

      observer.disconnect();

      motionPreference.removeEventListener(
        "change",
        resetAnimation
      );
    };
  }, []);

  /* ==========================================
     RENDER ALL LOGOS
  ========================================== */

  return (
    <div className={styles.root}>
      <div
        className={styles.viewport}
        ref={viewportRef}
        role="list"
        aria-label="Technologies and tools I work with"
      >
        {BRANDS.map((brand, index) => (
          <div
            role="listitem"
            className={styles.pill}
            key={brand.name}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
          >
            <BrandIcon brand={brand} />

            <span
              className={styles.name}
              style={
                brand.compact
                  ? {
                      fontSize: "11px",
                      letterSpacing: "-0.04em",
                    }
                  : undefined
              }
            >
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
