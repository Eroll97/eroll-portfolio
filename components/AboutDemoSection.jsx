import styles from './AboutDemoSection.module.css';
import TapVideo from './TapVideo';

export default function AboutDemoSection() {
  return (
    <section id="about-intro-video" className={styles.section} aria-label="Eroll Oliver introduction video">
      <div className={styles.container}>
        <TapVideo
          className={styles.video}
          preload="metadata"
          label="Eroll Oliver introduction and demonstration"
        >
          <source src="/videos/eroll-oliver-intro-demo.mp4" type="video/mp4" />
          Your browser does not support MP4 video playback.
        </TapVideo>
      </div>
    </section>
  );
}
