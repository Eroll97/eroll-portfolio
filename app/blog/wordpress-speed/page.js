import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - WORDPRESS SPEED BLOG POST
   URL: /blog/wordpress-speed
   Your existing app/layout.js provides the Header and Footer.
======================================================== */

export const metadata = {
  title: "Why Website Speed Matters (And How I Make WordPress Fly) | Eroll Oliver",
  description:
    "Why a fast WordPress website matters for user experience, search visibility, and conversions, plus practical ways to improve performance.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Understand when a CRM needs to do more than store contacts and track leads.",
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
      "A practical guide to making your service business easier to find in local search.",
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
      "Seven essentials that make a landing page clear, convincing, and easy to act on.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
];

/* ========================================================
   RELATED POST ICONS
======================================================== */

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

/* ========================================================
   MAIN ARTICLE PAGE
======================================================== */

export default function WordPressSpeedArticlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* Back link */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        {/* Article header */}
        <header className={styles.header}>
          <h1>Why Website Speed Matters (And How I Make WordPress Fly)</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-06-15">JUNE 15, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>7 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>WordPress</span>
            <span>Speed</span>
            <span>Core Web Vitals</span>
            <span>SEO</span>
          </div>
        </header>

        {/* Speedometer illustration: no external image or asset needed. */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="WordPress Speed: a white speedometer symbol on a dark grid"
        >
          <span className={styles.featureBorder} aria-hidden="true" />
          <span className={styles.featureCircleTop} aria-hidden="true" />
          <span className={styles.featureCircleBottom} aria-hidden="true" />

          <div className={styles.featureCenter} aria-hidden="true">
            <svg
              className={styles.featureIcon}
              viewBox="0 0 100 100"
              fill="none"
              aria-hidden="true"
            >
              {/* Gauge arc and ticks */}
              <path d="M11 73a39 39 0 0 1 78 0" />
              <path d="M50 34v8M23 47l6 6M77 47l-6 6M12 72h8M80 72h8" />
              {/* Needle and pivot */}
              <path d="M50 73 73 44" strokeWidth="3.4" />
              <circle cx="50" cy="73" r="5.5" fill="currentColor" stroke="none" />
            </svg>
            <span className={styles.featureLabel}>WORDPRESS SPEED</span>
          </div>
        </figure>

        {/* Article body */}
        <div className={styles.prose}>
          <p>
            A website can look impressive and still lose customers if it takes
            too long to load. When a page responds slowly, visitors may leave
            before reading your offer, seeing your services, or reaching your
            contact form. For a WordPress site, improving speed is not simply
            about a better score on a testing tool. It is about making every
            visit feel easier.
          </p>

          <h2>The real cost of a slow website</h2>
          <p>
            Think about the effort it takes to bring someone to your site:
            search rankings, ads, referrals, and social media all require time
            or money. If that visitor waits through a blank screen or a
            sluggish mobile page, the opportunity may disappear before your
            message gets through. A quicker site can improve the experience
            without changing your headline, offer, or traffic budget.
          </p>

          <h2>Where WordPress sites lose their speed</h2>
          <p>
            Heavy themes, oversized images, too many plugins, third-party
            scripts, and overloaded hosting can all slow a WordPress website.
            Page builders sometimes load styling or JavaScript that a page
            barely uses. Fonts, animation libraries, trackers, and external
            embeds also add work for a visitor's browser, especially on
            slower phones and connections.
          </p>
          <p>
            The important step is to measure before deleting anything. A
            plugin is not automatically bad because it exists, and a beautiful
            design does not need to be stripped down. The goal is to find the
            resources creating the biggest delays and address them safely.
          </p>

          <h2>My optimization process</h2>
          <p>
            I start with a performance audit using tools such as PageSpeed
            Insights and browser developer tools. I look at Core Web Vitals,
            image sizes, network requests, caching, and what loads before the
            main content becomes usable. From there, I prioritize changes
            that deliver meaningful improvements without breaking the site.
          </p>
          <p>
            Common fixes include resizing and converting images to modern
            formats, lazy-loading below-the-fold media, removing unused assets,
            improving caching, optimizing fonts, and reviewing unnecessary
            plugins or scripts. Hosting and server configuration matter too.
            After each meaningful change, I test again on mobile and desktop
            instead of relying on a single score.
          </p>

          <h2>What you get from a fast site</h2>
          <p>
            Better performance supports a smoother browsing experience and
            makes it easier for visitors to find information, fill in a form,
            or book a call. Search engines also consider page experience,
            including Core Web Vitals, as part of a wider set of signals.
            Speed alone will not guarantee higher rankings or more sales, but
            it removes one avoidable obstacle between your business and its
            customers.
          </p>
        </div>

        {/* Call to action */}
        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build and improve websites, funnels, and connected systems
            to help businesses create a better customer experience.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.contactButton}>
              CONTACT ME
            </Link>
            <Link href="/portfolio" className={styles.secondaryButton}>
              VIEW MY WORK
            </Link>
          </div>
        </aside>

        {/* Related articles */}
        <section
          className={styles.moreArticles}
          aria-labelledby="wordpress-speed-more-articles"
        >
          <h2 id="wordpress-speed-more-articles">MORE ARTICLES</h2>
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
