import Link from "next/link";
import styles from "./article.module.css";

/* ==========================================================
   EROLL OLIVER - FUNNEL VS WEBSITE BLOG ARTICLE
   URL: /blog/funnel-vs-website

   App Router page with its own route-scoped CSS Module.
   Header and Footer are supplied by app/layout.js.
   The cover artwork uses inline SVG (no extra assets needed).
========================================================== */

export const metadata = {
  title: "Funnel vs Website: Which One Does Your Business Actually Need? | Eroll Oliver",
  description:
    "Learn when to build a website, when to launch a sales funnel, and how the two can work together to attract visitors and convert leads.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "See how a connected CRM can make lead management and follow-up easier.",
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
      "Practical ways to help nearby customers find your services online.",
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
      "The key elements of a focused page that helps visitors take action.",
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

export default function FunnelVsWebsitePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* BACK TO BLOG */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        {/* ARTICLE HEADER */}
        <header className={styles.header}>
          <h1>Funnel vs Website: Which One Does Your Business Actually Need?</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>

            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-03-25">MAR 25, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>6 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>Funnels</span>
            <span>Websites</span>
            <span>Conversion</span>
            <span>Strategy</span>
          </div>
        </header>

        {/* FEATURED ARTWORK */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="Funnel vs Website illustration, featuring a white conversion funnel on a subtle dark grid"
        >
          <span className={styles.featureBorder} aria-hidden="true" />
          <span className={styles.featureCircleTop} aria-hidden="true" />
          <span className={styles.featureCircleBottom} aria-hidden="true" />

          <div className={styles.featureCenter} aria-hidden="true">
            <svg
              className={styles.featureIcon}
              viewBox="0 0 110 110"
              fill="none"
              aria-hidden="true"
            >
              <path d="M9 19H101L69 61V87L41 100V61L9 19Z" />
              <path d="M25 33H85" />
              <path d="M35 45H75" />
            </svg>
            <span className={styles.featureLabel}>FUNNEL VS WEBSITE</span>
          </div>
        </figure>

        {/* ARTICLE */}
        <div className={styles.prose}>
          <p>
            A website is your business&apos;s digital home. It introduces your
            services, builds credibility, answers questions, and helps people
            discover you through search. A funnel has a narrower purpose: it
            guides someone toward one specific action, such as requesting a
            quote, booking a call, or buying a product. Both are useful, but
            they solve different problems.
          </p>

          <h2>The mistake I see most often</h2>
          <p>
            A business launches an advertisement for one offer but sends every
            visitor to its general homepage. There, people can explore the
            About page, browse multiple services, read articles, or leave
            without taking the intended next step. A homepage is designed for
            exploration; a campaign landing page should keep attention on a
            clear offer and call to action.
          </p>

          <h2>When you need a funnel</h2>
          <p>
            Choose a funnel when you are running ads, promoting a limited
            offer, registering people for an event, or qualifying leads for a
            specific service. A focused landing page can explain the offer,
            answer common objections, collect the right details, and lead
            visitors to a booking or checkout step. Connect the page to your
            CRM so new inquiries receive the appropriate follow-up.
          </p>

          <h2>When you need a website</h2>
          <p>
            Choose a website when you need a lasting online presence. It gives
            people a place to learn about your business, compare services,
            review your work, and find you through Google. A well-organized
            website can include service pages, location pages, testimonials,
            case studies, and helpful content that establish trust over time.
            It is especially valuable when customers research several options
            before contacting a provider.
          </p>

          <h2>The answer for most businesses: both</h2>
          <p>
            A website and a funnel work best when they support the same goal.
            The website builds awareness and trust, while targeted funnels
            turn campaign traffic into inquiries or bookings. When both feed
            into one CRM, you can keep the customer journey connected from
            the first visit through follow-up.
          </p>
          <p>
            If your next priority is launching an offer, start with a focused
            funnel. If you need stronger visibility and credibility, start
            with the website. Build the next piece as your business grows,
            rather than paying for features you do not yet need.
          </p>
        </div>

        {/* CONTACT CTA */}
        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build conversion-focused websites, landing pages, and connected
            automation systems for growing businesses.
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

        {/* MORE ARTICLES */}
        <section className={styles.moreArticles} aria-labelledby="more-articles-heading">
          <h2 id="more-articles-heading">MORE ARTICLES</h2>
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
