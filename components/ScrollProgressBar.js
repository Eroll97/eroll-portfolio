
"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = null;

    function updateProgress() {
      frame = null;

      const documentElement =
        document.documentElement;

      const maxScroll =
        documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(
              Math.max(window.scrollY / maxScroll, 0),
              1
            )
          : 0;

      if (barRef.current) {
        barRef.current.style.transform =
          `scaleX(${progress})`;
      }
    }

    function onScroll() {
      if (frame === null) {
        frame = requestAnimationFrame(
          updateProgress
        );
      }
    }

    updateProgress();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    const observer = new ResizeObserver(onScroll);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      observer.disconnect();

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "4px",
        zIndex: 2147483647,
        pointerEvents: "none",
        background: "transparent",
      }}
    >
      <div
        ref={barRef}
        style={{
          width: "100%",
          height: "100%",
          background: "#ffffff",
          transform: "scaleX(0)",
          transformOrigin: "left center",
          transition: "transform 100ms linear",
          boxShadow:
            "0 0 10px rgba(255,255,255,0.5)",
        }}
      />
    </div>
  );
}
