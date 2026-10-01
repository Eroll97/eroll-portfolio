import PortfolioClient from '../../components/PortfolioClient';
import { projects } from '../../lib/data';
import styles from './portfolio.module.css';

export const metadata = {
  title: 'Portfolio — Eroll Oliver',
};

export default function Portfolio() {
  return (
    <main className={`${styles.portfolioPage} page-wrap shell`}>
      <div className={styles.pageHeading}>
        <p className="eyebrow">
          <span />
          Portfolio
        </p>

        <h1>Websites I&apos;ve built &amp; launched</h1>

        <p>
          Every project below is a real, live website from the reference data.
          Hover any card to scroll through the full page — click to visit the
          live site.
        </p>
      </div>

      <PortfolioClient projects={projects} />
    </main>
  );
}