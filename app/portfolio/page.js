import PortfolioClient from '../../components/PortfolioClient';
import { projects } from '../../lib/data';
import styles from './portfolio.module.css';

export const metadata = {
  title: 'Portfolio — Eroll Oliver',
};

export default function Portfolio() {
  return (
    <main className={styles.portfolioPage}>
      <div className={styles.container}>
        <div className={styles.pageHeading}>
          <p className={styles.eyebrow}>
            <span />
            Portfolio
          </p>

          <h1>
            Websites I&apos;ve built &amp; launched
          </h1>

          <p>
            Every project below is a real, live website I&apos;ve worked on.
            Hover any card to scroll through the page — click to visit the
            live website.
          </p>
        </div>

        <PortfolioClient projects={projects} />
      </div>
    </main>
  );
}