
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./TechLogoLoop.module.css";

/* ==========================================
   EROLL OLIVER - TECHNOLOGY LOGO LOOP

   16 Technology Logos
   Two-Row Continuous Rotation
   Even Spacing - No Large Empty Gaps
   Responsive Desktop / Tablet / Mobile
========================================== */

const favicon = (domain) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

/* ==========================================
   TECHNOLOGIES
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
];

/* ==========================================
   LOGO COMPONENT
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
   MAIN COMPONENT
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

    let animationFrame = 0;
    let geometry = null;

    const startTime = performance.now();

    /* ======================================
       FIXED EVEN-SPACING CALCULATION

       The previous version could leave
       large empty portions of the track.

       This version calculates the loop
       from the viewport width and the
       actual size of each logo card.
    ====================================== */

    function measure() {
      const firstCard = cardRefs.current[0];

      if (!firstCard) return false;

      const viewportWidth = viewport.clientWidth;

      if (viewportWidth <= 0) return false;

      const cardWidth = firstCard.offsetWidth;
      const cardHeight = firstCard.offsetHeight;

      const mobile = viewportWidth <= 600;

      const cardGap = mobile ? 14 : 18;
      const rowGap = mobile ? 16 : 18;

      const topY =
        cardHeight / 2 + (mobile ? 14 : 18);

      const bottomY =
        topY + cardHeight + rowGap;

      const centerY =
        (topY + bottomY) / 2;

      const radius =
        (bottomY - topY) / 2;

      const arcLength =
        Math.PI * radius;

      /* KEEP EVEN SPACING BETWEEN LOGOS */

      const preferredStep =
        cardWidth + cardGap;

      /* KEEP THE FULL WIDTH POPULATED */

      const screenStep =
        (
          2 * (viewportWidth + 40) +
          2 * arcLength
        ) / BRANDS.length;

      const step = Math.max(
        preferredStep,
        screenStep
      );

      /* MATCH LOOP SIZE TO ALL 16 LOGOS */

      const straight =
        (BRANDS.length * step) / 2 -
        arcLength;

      const leftX =
        (viewportWidth - straight) / 2;

      const rightX =
        leftX + straight;

      const perimeter =
        BRANDS.length * step;

      geometry = {
        cardWidth,
        cardHeight,
        topY,
        bottomY,
        centerY,
        radius,
        arcLength,
        straight,
        leftX,
        rightX,
        perimeter,
        step,

        /* ANIMATION SPEED */

        speed: mobile ? 42 : 56,

        /* HIGHLEVEL STARTS ON TOP LEFT */

        initialOffset:
          cardWidth / 2 + 16 - leftX,
      };

      return true;
    }

    /* ======================================
       SINGLE CLOSED LOOP

       TOP     -> RIGHT
       RIGHT   -> DOWN
       BOTTOM  -> LEFT
       LEFT    -> UP
       REPEAT
    ====================================== */

    function getPosition(distance) {
      const g = geometry;

      const d =
        ((distance % g.perimeter) +
          g.perimeter) %
        g.perimeter;

      /* TOP ROW */

      if (d < g.straight) {
        return {
          x: g.leftX + d,
          y: g.topY,
        };
      }

      /* RIGHT SIDE - DOWNWARD TURN */

      if (
        d < g.straight + g.arcLength
      ) {
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

      /* BOTTOM ROW */

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

      /* LEFT SIDE - UPWARD TURN */

      const angle =
        Math.PI / 2 +
        (
          d -
          2 * g.straight -
          g.arcLength
        ) / g.radius;

      return {
        x:
          g.leftX +
          g.radius * Math.cos(angle),

        y:
          g.centerY +
          g.radius * Math.sin(angle),
      };
    }

    /* ======================================
       POSITION ALL 16 LOGOS

       Equal spacing along the entire
       loop prevents large empty gaps.
    ====================================== */

    function draw(time) {
      if (!geometry) return;

      const elapsed =
        (time - startTime) / 1000;

      const progress =
        elapsed * geometry.speed;

      cardRefs.current.forEach(
        (card, index) => {
          if (!card) return;

          const distance =
            geometry.initialOffset +
            index * geometry.step +
            progress;

          const position =
            getPosition(distance);

          const x =
            position.x -
            geometry.cardWidth / 2;

          const y =
            position.y -
            geometry.cardHeight / 2;

          card.style.transform =
            `translate3d(${x}px, ${y}px, 0)`;
        }
      );

      /* SHOW ONLY AFTER POSITIONING */

      viewport.classList.add(
        styles.ready
      );
    }

    /* ======================================
       CONTINUOUS ANIMATION
    ====================================== */

    function animate(timestamp) {
      draw(timestamp);

      animationFrame =
        requestAnimationFrame(animate);
    }

    /* ======================================
       START / RESTART
    ====================================== */

    function restart() {
      cancelAnimationFrame(animationFrame);

      if (motionPreference.matches) {
        viewport.classList.remove(
          styles.ready
        );

        cardRefs.current.forEach((card) => {
          if (card) {
            card.style.transform = "";
          }
        });

        return;
      }

      if (!measure()) return;

      draw(performance.now());

      animationFrame =
        requestAnimationFrame(animate);
    }

    /* ======================================
       RESPONSIVE RESIZE HANDLING
    ====================================== */

    const resizeObserver =
      new ResizeObserver(() => {
        if (motionPreference.matches) {
          return;
        }

        if (measure()) {
          draw(performance.now());
        }
      });

    resizeObserver.observe(viewport);

    motionPreference.addEventListener(
      "change",
      restart
    );

    restart();

    /* ======================================
       CLEANUP
    ====================================== */

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      resizeObserver.disconnect();

      motionPreference.removeEventListener(
        "change",
        restart
      );
    };
  }, []);

  /* ==========================================
     RENDER
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
            key={brand.name}
            role="listitem"
            className={styles.pill}
            ref={(node) => {
              cardRefs.current[index] = node;
            }}
          >
            <BrandIcon brand={brand} />

            <span className={styles.name}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
