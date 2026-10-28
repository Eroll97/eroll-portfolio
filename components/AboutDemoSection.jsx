'use client';

import { useState } from 'react';
import styles from './AboutDemoSection.module.css';
import TapVideo from './TapVideo';

export default function AboutDemoSection() {
  const [muted, setMuted] = useState(true);
  return (
    <section id="about-intro-video" className={styles.section} aria-label="Eroll Oliver introduction video">
      <div className={styles.container}>
        <TapVideo
          className={styles.video}
          autoPlay
          muted={muted}
          preload="auto"
          label="Eroll Oliver introduction and demonstration"
        >
          <source src="/videos/eroll-oliver-intro-demo.mp4" type="video/mp4" />
          Your browser does not support MP4 video playback.
        </TapVideo>
        <button type="button" className={styles.soundToggle} onClick={() => setMuted(value => !value)} aria-label={muted ? 'Turn video sound on' : 'Mute video sound'} aria-pressed={!muted}>
          {muted ? 'Turn sound on' : 'Mute sound'}
        </button>
      </div>
    </section>
  );
}
