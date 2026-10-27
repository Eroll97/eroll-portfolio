"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Script from "next/script";
import styles from "./FloatingLetsTalk.module.css";

// Eroll Oliver's public 30-minute Calendly booking page.
const CALENDLY_URL = "https://calendly.com/erolloliver97/discuss-your-project-30-minute-consultation";

const VIDEO_URL = "/videos/eroll-lets-talk.mp4";
const POSTER_URL = "/videos/eroll-lets-talk-poster.jpg";

export default function FloatingLetsTalk() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [widgetReady, setWidgetReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [calendarHeight, setCalendarHeight] = useState(760);
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const embedRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !widgetReady || !embedRef.current) return;
    const container = embedRef.current;
    window.Calendly.initInlineWidget({
      url: `${CALENDLY_URL}?background_color=ffffff&text_color=0b2540&primary_color=006bff`,
      parentElement: container,
      // Our own validated message listener fits both width and height.
      resize: false,
    });
    return () => container.replaceChildren();
  }, [isOpen, widgetReady]);

  useEffect(() => {
    if (!isOpen) return;

    const measureViewport = () => setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const onCalendarMessage = (event) => {
      if (event.origin !== "https://calendly.com" ||
          event.source !== embedRef.current?.querySelector("iframe")?.contentWindow) return;
      if (typeof event.data?.event === "string" &&
          event.data.event.startsWith("calendly.")) setIsLoading(false);
      if (event.data?.event === "calendly.page_height") {
        const height = Number.parseFloat(event.data.payload?.height);
        if (Number.isFinite(height) && height >= 400 && height <= 3000) {
          setCalendarHeight(Math.ceil(height));
        }
      }
    };
    measureViewport();
    window.addEventListener("resize", measureViewport);
    window.addEventListener("message", onCalendarMessage);
    return () => {
      window.removeEventListener("resize", measureViewport);
      window.removeEventListener("message", onCalendarMessage);
    };
  }, [isOpen]);

  // Keep Calendly's complete layout visible, including on shorter laptops.
  const calendarWidth = viewport.width <= 700
    ? Math.max(320, viewport.width - 24)
    : 1040;
  const calendarScale = Math.min(
    1,
    (viewport.width - 24) / calendarWidth,
    (viewport.height - 88) / calendarHeight
  );

  useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const previousBodyOverflow = body.style.overflow;
    const previousHtmlOverflow = html.style.overflow;
    const backgroundElements = Array.from(body.children).filter(
      (element) => !element.contains(closeRef.current) && element.tagName !== "SCRIPT"
    );
    const previousInert = backgroundElements.map((element) => element.inert);
    backgroundElements.forEach((element) => { element.inert = true; });

    // Prevent the portfolio underneath the calendar from scrolling.
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";
    html.classList.add("eo-calendly-open");

    // Keep the modal keyboard-accessible.
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousBodyOverflow;
      html.style.overflow = previousHtmlOverflow;
      html.classList.remove("eo-calendly-open");
      backgroundElements.forEach((element, index) => {
        element.inert = previousInert[index];
      });
      triggerRef.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  const calendarModal = (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        // Click outside the white booking window to dismiss.
        if (event.target === event.currentTarget) setIsOpen(false);
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Book a free consultation with Eroll Oliver"
        style={{
          width: calendarWidth * calendarScale,
          height: calendarHeight * calendarScale,
          "--calendar-width": `${calendarWidth}px`,
          "--calendar-height": `${calendarHeight}px`,
          "--calendar-scale": calendarScale,
        }}
      >
        <span tabIndex={0} onFocus={() => closeRef.current?.focus()} />
        <button
          ref={closeRef}
          className={styles.closeButton}
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close Calendly calendar"
          title="Close calendar"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {isLoading && (
          <div className={styles.loading} role="status">
            <span className={styles.spinner} aria-hidden="true" />
            <p>Loading your booking calendar…</p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Open Calendly in a new tab ↗
            </a>
          </div>
        )}

        <div
          ref={embedRef}
          className={styles.calendarFrame}
        />
        <span tabIndex={0} onFocus={() => closeRef.current?.focus()} />
      </div>
    </div>
  );

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onReady={() => setWidgetReady(true)}
      />
      {/* Always-visible floating video: no dismiss button. */}
      <div className={styles.floating}>
        <button
          ref={triggerRef}
          type="button"
          className={styles.previewButton}
          onClick={() => {
            setIsLoading(true);
            setCalendarHeight(window.innerWidth <= 700 ? 1100 : 760);
            setIsOpen(true);
          }}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label="Open appointment calendar with Eroll Oliver"
          title="Book a free 30-minute call"
        >
          <video
            className={styles.previewVideo}
            src={VIDEO_URL}
            poster={POSTER_URL}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            controls={false}
            controlsList="nodownload noremoteplayback nofullscreen"
            draggable={false}
            onContextMenu={event => event.preventDefault()}
            onDragStart={event => event.preventDefault()}
            aria-hidden="true"
            tabIndex={-1}
          />
          <span className={styles.previewShade} aria-hidden="true" />
          <span className={styles.onlineDot} aria-hidden="true" />
          <span className={styles.previewLabel} aria-hidden="true">
            LET'S TALK <span className={styles.arrow}>↗</span>
          </span>
        </button>
      </div>

      {/* Portal avoids stacking/overflow problems with the Hero and navbar. */}
      {isMounted && isOpen && createPortal(calendarModal, document.body)}
    </>
  );
}
