'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export default function HoverScrollPreview({
  children,
  className = '',
  src,
  alt = '',
}) {
  const viewportRef = useRef(null);
  const imageRef = useRef(null);

  const [scrollDistance, setScrollDistance] =
    useState(0);

  const measureScroll = useCallback(() => {
    const viewport = viewportRef.current;
    const image = imageRef.current;

    if (!viewport || !image) {
      return;
    }

    const viewportHeight =
      viewport.clientHeight;

    const imageHeight =
      image.scrollHeight;

    setScrollDistance(
      Math.max(
        0,
        imageHeight - viewportHeight
      )
    );
  }, []);

  useEffect(() => {
    measureScroll();

    window.addEventListener(
      'resize',
      measureScroll
    );

    return () => {
      window.removeEventListener(
        'resize',
        measureScroll
      );
    };
  }, [measureScroll]);

  return (
    <div className={className}>

      {children}

      <div
        ref={viewportRef}
        className="launch-browser-viewport"
      >

        {src && (
          <img
            ref={imageRef}
            className="launch-browser-image"
            src={src}
            alt={alt}
            loading="lazy"
            onLoad={measureScroll}
            style={{
              '--preview-scroll':
                `${scrollDistance}px`,
            }}
          />
        )}

      </div>

    </div>
  );
}