import Link from "next/link";
import styles from "./article.module.css";

/* ==========================================================
   EROLL OLIVER - WORDPRESS MAINTENANCE ARTICLE
   Route: /blog/wordpress-maintenance

   This page uses the existing app/layout.js Header and Footer.
   All styling is scoped to article.module.css.
========================================================== */

export const metadata = {
  title: "WordPress Maintenance: Why Sites Break (And How to Keep Yours Safe) | Eroll Oliver",
  description:
    "Learn why WordPress sites break and how updates, backups, security checks, staging, and monitoring can help protect your website.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "How a connected CRM can simplify the way service businesses manage and follow up with new leads.",
    date: "JUL 21, 2026",
    read: "7 MIN READ",
    category: "GOHIGHLEVEL",
    label: "GHL VS CRM",
    icon: "ghl",
  },
  {
    slug: "local-seo-service-business",
    title: "Local SEO: How to Show Up When Nearby Customers Search",
    description:
      "Simple ways to make your website easier for nearby customers to find in local search.",
    date: "JUL 18, 2026",
    read: "8 MIN READ",
    category: "SEO",
    label: "LOCAL SEO",
    icon: "location",
  },
  {
    slug: "high-converting-landing-page",
    title: "7 Elements Every High-Converting Landing Page Needs",
    description:
      "What to include in a focused landing page that makes it easier for visitors to take action.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
];

function TopicIcon({ type }) {
  if (type === "ghl") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="20" strokeDasharray="2.5 4" />
        <path d="m24 12 13 23H11L24 12Z" />
        <circle cx="24" cy="26" r="4.5" />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 41S12 29 12 20a12 12 0 0 1 24 0c0 9-12 21-12 21Z" />
        <circle cx="24" cy="20" r="5" />
        <path d="M17 32c2-3 4-5 7-5s5 2 7 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="7" y="9" width="34" height="30" rx="4" />
      <path d="M7 18h34M14 14h1M20 14h1M15 26h18M15 32h12" />
    </svg>
  );
}

function RelatedCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.relatedCard}>
      <div className={styles.relatedVisual}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.visualRingOne} aria-hidden="true" />
        <span className={styles.visualRingTwo} aria-hidden="true" />
        <span className={styles.iconWrap} aria-hidden="true">
          <TopicIcon type={post.icon} />
        </span>
        <span className={styles.visualLabel}>{post.label}</span>
      </div>

      <div className={styles.relatedBody}>
        <div className={styles.relatedMeta}>
          <span>{post.date}</span>
          <span className={styles.metaDash} aria-hidden="true" />
          <span>{post.read}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className={styles.relatedFooter}>
          <span className={styles.miniAvatar} aria-hidden="true">EO</span>
          <span>Eroll Oliver</span>
          <span className={styles.readArrow}>
            Read <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function WordPressMaintenancePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* BACK TO BLOG */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        {/* ARTICLE TITLE AND META */}
        <header className={styles.header}>
          <h1>WordPress Maintenance: Why Sites Break (And How to Keep Yours Safe)</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>

            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-01-18">JANUARY 18, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>6 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>WordPress</span>
            <span>Security</span>
            <span>Maintenance</span>
            <span>Backups</span>
          </div>
        </header>

        {/* WORDPRESS CARE FEATURED GRAPHIC */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="WordPress Care illustration: white shield with a wrench on a subtle black grid"
        >
          <span className={styles.featureBorder} aria-hidden="true" />
          <span className={styles.featureCircleTop} aria-hidden="true" />
          <span className={styles.featureCircleBottom} aria-hidden="true" />

          <div className={styles.featureCenter} aria-hidden="true">
            <svg
              className={styles.featureIcon}
              viewBox="0 0 110 120"
              fill="none"
              aria-hidden="true"
            >
              {/* Protection shield */}
              <path d="M55 9 95 25v34c0 26-15 42-40 55C30 101 15 85 15 59V25L55 9Z" />
              {/* Maintenance wrench */}
              <path d="M71 39a13 13 0 0 0-16 16L37 74a5 5 0 0 0 7 7l19-18a13 13 0 0 0 16-16l-8 8-9-7 9-9Z" />
            </svg>
            <span className={styles.featureLabel}>WORDPRESS CARE</span>
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <div className={styles.prose}>
          <p>
            A WordPress problem rarely arrives at a convenient time. A site
            suddenly shows an error, a form stops sending inquiries, or an
            update changes the layout. Often, the issue has been building
            quietly for weeks: outdated plugins, weak security settings,
            missing backups, or changes that were never tested.
          </p>

          <h2>Why WordPress sites actually get hacked</h2>
          <p>
            One common risk is software that has not been kept up to date.
            Vulnerabilities can exist in themes, plugins, or WordPress itself,
            and known issues become especially risky when patches are
            available but never installed. Weak passwords, unused administrator
            accounts, and poorly secured hosting can create additional ways
            into a site.
          </p>
          <p>
            Good security is not one magic plugin. It is a combination of
            timely updates, limited access, strong authentication, reliable
            backups, and regular checks that help you spot trouble early.
          </p>

          <h2>The maintenance routine that prevents it</h2>
          <p>
            Start with a dependable backup schedule and verify that backups
            can actually be restored. Review WordPress core, theme, and plugin
            updates regularly, remove software you no longer need, and protect
            logins with strong passwords and two-factor authentication where
            available. Check forms, key pages, uptime, and website performance
            so small problems do not go unnoticed.
          </p>
          <p>
            For a business website, maintenance should be a repeatable
            process—not something you remember only after a customer reports
            that the site is down.
          </p>

          <h2>Updates without breakage</h2>
          <p>
            Updates are important, but installing everything at once without
            testing can create avoidable issues. Take a backup first, apply
            changes in manageable batches, and check your homepage, contact
            forms, booking links, and mobile layout afterward. For significant
            changes, use a staging copy so you can test before going live.
          </p>
          <p>
            If something does go wrong, a recent, tested backup and a clear
            rollback process make recovery much easier.
          </p>

          <h2>What a white screen really costs</h2>
          <p>
            Downtime is not just a technical inconvenience. A broken contact
            form can mean missed leads, a slow site can frustrate visitors,
            and a compromised site can damage customer confidence. Emergency
            repairs also take time away from running your business.
          </p>
          <p>
            Preventive maintenance helps reduce those risks. A healthy
            WordPress website should stay updated, have recoverable backups,
            and be checked routinely—so it can keep doing its real job:
            helping people find and contact your business.
          </p>
        </div>

        {/* CONTACT CTA */}
        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>I build and maintain reliable websites and connected digital systems.</p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.contactButton}>
              CONTACT ME
            </Link>
            <Link href="/portfolio" className={styles.secondaryButton}>
              VIEW MY WORK
            </Link>
          </div>
        </aside>

        {/* RELATED ARTICLES */}
        <section
          className={styles.moreArticles}
          aria-labelledby="more-wordpress-articles"
        >
          <h2 id="more-wordpress-articles">MORE ARTICLES</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((post) => (
              <RelatedCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}
