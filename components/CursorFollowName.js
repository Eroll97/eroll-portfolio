'use client';

import { useEffect, useRef } from 'react';

export default function CursorFollowName() {
  const titleRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handlePointerMove = (event) => {
    const title = titleRef.current;

    if (!title) return;

    const rect = title.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      title.style.setProperty(
        '--eroll-x',
        `${x * 28}px`
      );

      title.style.setProperty(
        '--eroll-y',
        `${y * 16}px`
      );

      title.style.setProperty(
        '--oliver-x',
        `${x * 42}px`
      );

      title.style.setProperty(
        '--oliver-y',
        `${y * 24}px`
      );

      title.style.setProperty(
        '--name-rotate',
        `${x * 1.2}deg`
      );
    });
  };

  const resetPosition = () => {
    const title = titleRef.current;

    if (!title) return;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    title.style.setProperty('--eroll-x', '0px');
    title.style.setProperty('--eroll-y', '0px');

    title.style.setProperty('--oliver-x', '0px');
    title.style.setProperty('--oliver-y', '0px');

    title.style.setProperty('--name-rotate', '0deg');
  };

  return (
    <h1
      ref={titleRef}
      className="hero-title cursor-follow-name"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
    >
      <span className="cursor-name-eroll">
        EROLL
      </span>

      <span className="outline cursor-name-oliver">
        OLIVER
      </span>
    </h1>
  );
}