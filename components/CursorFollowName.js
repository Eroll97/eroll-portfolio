'use client';

import { useRef } from 'react';

export default function CursorFollowName() {
  const titleRef = useRef(null);
  const frameRef = useRef(null);

  const handlePointerMove = (event) => {
    const title = titleRef.current;

    if (!title) return;

    const rect = title.getBoundingClientRect();

    // Cursor position from -1 to +1
    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    cancelAnimationFrame(frameRef.current);

    frameRef.current = requestAnimationFrame(() => {
      /*
       * EROLL follows the cursor.
       */
      title.style.setProperty(
        '--eroll-x',
        `${x * 34}px`
      );

      title.style.setProperty(
        '--eroll-y',
        `${y * 22}px`
      );

      /*
       * OLIVER follows slightly more strongly,
       * creating depth.
       */
      title.style.setProperty(
        '--oliver-x',
        `${x * 48}px`
      );

      title.style.setProperty(
        '--oliver-y',
        `${y * 30}px`
      );

      /*
       * Very subtle rotation based on cursor.
       */
      title.style.setProperty(
        '--name-rotate',
        `${x * 1.5}deg`
      );
    });
  };

  const handlePointerLeave = () => {
    const title = titleRef.current;

    if (!title) return;

    cancelAnimationFrame(frameRef.current);

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
      onPointerLeave={handlePointerLeave}
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