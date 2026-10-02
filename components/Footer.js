import Link from 'next/link';
import styles from './Footer.module.css';

const navigationLeft = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Pricing', '/pricing'],
  ['Contact', '/contact'],
];

const navigationRight = [
  ['About', '/about'],
  ['Portfolio', '/portfolio'],
  ['Blog', '/blog'],
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* =====================================================
            TOP FOOTER
        ===================================================== */}

        <div className={styles.footerGrid}>
          {/* LEFT — BRAND */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.brand}>
              EROLL<span>.</span>
            </Link>

            <p className={styles.description}>
              AI Automation Engineer &amp; GoHighLevel Specialist building
              websites, funnels, AI agents, CRM systems, and intelligent
              automation workflows.
            </p>

            <div className={styles.socials}>
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/eroll-oliver-20009b290/"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={styles.socialButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/eroll_onnn/"
                aria-label="Instagram"
                title="Instagram"
                className={styles.socialButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/eroll.oliver.98"
                aria-label="Facebook"
                title="Facebook"
                className={styles.socialButton}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* CENTER — NAVIGATE */}
          <div className={styles.navigationColumn}>
            <p className={styles.label}>
              Navigate
            </p>

            <div className={styles.navigationGrid}>
              <ul>
                {navigationLeft.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul>
                {navigationRight.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — CONTACT */}
          <div className={styles.contactColumn}>
            <p className={styles.label}>
              Get in touch
            </p>

            <ul className={styles.contactList}>
              <li>
                <a href="mailto:erolloliver97@gmail.com">
                  erolloliver97@gmail.com
                </a>
              </li>

              <li>
                <a href="tel:+639277937650">
                  +63 927 793 7650
                </a>
              </li>

              <li>
  <a
    href="https://www.linkedin.com/in/eroll-oliver-20009b290/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>
</li>

              <li>
                <a
                  href="https://wa.me/639277937650"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.underlinedLink}
                >
                  WhatsApp me
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================================================
            BOTTOM FOOTER
        ===================================================== */}

        <div className={styles.footerBottom}>
          <p>
            © 2026 Eroll Oliver. All rights reserved.
          </p>

          <p>
            WordPress · GHL · Funnels · AI Automation
          </p>
        </div>
      </div>
    </footer>
  );
}