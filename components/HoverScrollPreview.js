'use client';

import { useRef } from 'react';

export default function HoverScrollPreview({
  src,
  alt = '',
  className = '',
  children,
}) {
  const viewportRef = useRef(null);
  const imageRef = useRef(null);

  const startScroll = () => {
    const viewport = viewportRef.current;
    const image = imageRef.current;

    if (!viewport || !image) {
      return;
    }

    /*
     * Calculate exactly how much of the screenshot
     * exists below the visible browser window.
     */
    const imageHeight = image.getBoundingClientRect().height;
    const viewportHeight = viewport.clientHeight;

    const distance = Math.max(
      0,
      imageHeight - viewportHeight
    );

    /*
     * Calculate speed based on screenshot length.
     * This keeps long screenshots smooth instead of
     * moving extremely fast.
     */
    const duration = Math.max(
      3.5,
      Math.min(9, distance / 110)
    );

    image.style.transitionDuration = `${duration}s`;

    image.style.transform =
      `translate3d(0, -${distance}px, 0)`;
  };


  const resetScroll = () => {
    const image = imageRef.current;

    if (!image) {
      return;
    }

    /*
     * Return to the top slightly faster.
     */
    image.style.transitionDuration = '2.5s';

    image.style.transform =
      'translate3d(0, 0, 0)';
  };


  return (
    <div
      className={`launch-scroll-browser ${className}`}
      onMouseEnter={startScroll}
      onMouseLeave={resetScroll}
    >

      {/* Fake browser header */}
      {children}

      {/* Screenshot viewport */}
      <div
        ref={viewportRef}
        className="launch-scroll-window"
      >
        <img
          ref={imageRef}
          className="launch-scroll-image"
          src={src}
          alt={alt}
          draggable="false"
        />
      </div>

    </div>
  );
}