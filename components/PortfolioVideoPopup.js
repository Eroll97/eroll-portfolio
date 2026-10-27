"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import styles from "./PortfolioVideoPopup.module.css";
import TapVideo from "./TapVideo";

// Set to true only if you want this video to pop up automatically
// once per browser tab session, 2 seconds after the Home page opens.
const AUTO_OPEN_ON_FIRST_VISIT = false;
const VIDEO_URL = "/videos/Eroll_Oliver_GHL_Reel_BW.mp4";
const POSTER_URL = "/videos/Eroll_Oliver_GHL_Reel_BW_poster.png";
const CAPTIONS_URL = "/videos/Eroll_Oliver_GHL_Reel_BW.vtt";

export default function PortfolioVideoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const videoRef = useRef(null);

  const openPopup = () => setIsOpen(true);

  const closePopup = () => {
    setIsOpen(false);
    // Return keyboard focus to the button that opened the popup.
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  // Optional first-visit autoplay popup (off by default).
  useEffect(() => {
    if (!AUTO_OPEN_ON_FIRST_VISIT) return;
    try {
      if (window.sessionStorage.getItem("eo-ghl-video-seen")) return;
    } catch (_) {
      // Browsers that block sessionStorage can still show the popup.
    }
    const timer = window.setTimeout(() => {
      try {
        window.sessionStorage.setItem("eo-ghl-video-seen", "yes");
      } catch (_) {}
      setIsOpen(true);
    }, 2000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const video = videoRef.current;
    // The popup normally follows a button click, so sound is allowed in
    // most browsers. Visitors can tap the video if autoplay is restricted.
    if (video) {
      const promise = video.play();
      if (promise && typeof promise.catch === "function") {
        promise.catch(() => {});
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closePopup();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const items = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter((node) => node.getClientRects().length > 0);
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, [isOpen]);

  return (
    <>
      {/* Place this component inside the existing .hero-actions container. */}
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={openPopup}
        aria-haspopup="dialog"
      >
        <span className={styles.playCircle} aria-hidden="true">
          <svg viewBox="0 0 20 20" fill="none">
            <path d="m7 4.8 8.4 5.2L7 15.2V4.8Z" fill="currentColor" />
          </svg>
        </span>
        <span>Watch My GHL AI Demo</span>
        <span className={styles.triggerTime}>01:49</span>
      </button>

      {isOpen && typeof document !== "undefined" && createPortal(
        <div
          className={styles.backdrop}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup();
          }}
        >
          <section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="eo-ghl-video-title"
            aria-describedby="eo-ghl-video-description"
            className={styles.dialog}
          >
            <header className={styles.dialogHeader}>
              <div className={styles.headerCopy}>
                <p className={styles.eyebrow}>
                  <span className={styles.eyebrowDot} aria-hidden="true" />
                  EROLL OLIVER / PROJECT SHOWCASE
                </p>
                <h2 id="eo-ghl-video-title">Inside My GHL &amp; AI Systems</h2>
                <p id="eo-ghl-video-description" className={styles.subheading}>
                  CRM, automation, Conversation AI, Voice AI and smarter workflows.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className={styles.closeButton}
                aria-label="Close video popup"
                title="Close video"
                onClick={closePopup}
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </header>

            <div className={styles.playerFrame}>
              <TapVideo
                ref={videoRef}
                className={styles.video}
                src={VIDEO_URL}
                poster={POSTER_URL}
                preload="metadata"
                label="Eroll Oliver GoHighLevel and AI systems demo reel"
              >
                <track
                  kind="captions"
                  src={CAPTIONS_URL}
                  srcLang="en"
                  label="English"
                />
                Your browser does not support HTML5 video.
              </TapVideo>
            </div>

            <footer className={styles.dialogFooter}>
              <div className={styles.footerInfo}>
                <span className={styles.footerKicker}>GHL AI DEMO • 1 MIN 49 SEC</span>
                <span className={styles.footerDescription}>
                  Real tools. Connected systems. Built for growing businesses.
                </span>
              </div>
              <Link href="/contact" className={styles.cta} onClick={() => setIsOpen(false)}>
                LET'S WORK TOGETHER <span aria-hidden="true">↗</span>
              </Link>
            </footer>
          </section>
        </div>,
        document.body
      )}
    </>
  );
}
