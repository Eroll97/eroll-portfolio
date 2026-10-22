import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - PLATFORM CHOICE BLOG POST
   Route: /blog/wordpress-shopify-gohighlevel
   Header and Footer come from your existing app/layout.js.
======================================================== */

export const metadata = {
  title: "WordPress vs Shopify vs GoHighLevel: Which Platform Is Right for You? | Eroll Oliver",
  description:
    "Compare WordPress, Shopify, and GoHighLevel to choose the right platform for your website, online store, sales funnels, or lead generation system.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Learn the difference between a contact database and a connected CRM, calendar, and follow-up system.",
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
      "Practical ways to help nearby customers discover your business through local search.",
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
      "Seven essential elements that help turn a landing-page visit into a meaningful action.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
];

/* ========================================================
   SIMPLE WHITE ICONS FOR RELATED ARTICLES
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

export default function WordPressShopifyGoHighLevelArticle() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        <header className={styles.header}>
          <h1>
            WordPress vs Shopify vs GoHighLevel: Which Platform Is Right for
            You?
          </h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-06-24">JUNE 24, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>6 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>WordPress</span>
            <span>Shopify</span>
            <span>GoHighLevel</span>
            <span>Strategy</span>
          </div>
        </header>

        {/* Featured artwork is drawn with HTML/CSS/SVG; no external image needed. */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="Platform choice illustration: a geometric cube on a dark grid"
        >
          <span className={styles.featureBorder} aria-hidden="true" />
          <span className={styles.featureCircleTop} aria-hidden="true" />
          <span className={styles.featureCircleBottom} aria-hidden="true" />

          <div className={styles.featureCenter} aria-hidden="true">
            <svg
              className={styles.featureIcon}
              viewBox="0 0 80 80"
              fill="none"
              aria-hidden="true"
            >
              <path d="M40 7 68 23v34L40 73 12 57V23L40 7Z" />
              <path d="M40 7v66M12 23l28 18 28-18M12 57l28-16 28 16" />
            </svg>
            <span className={styles.featureLabel}>PLATFORM CHOICE</span>
          </div>
        </figure>

        <div className={styles.prose}>
          <p>
            One of the first questions clients ask is simple: what should my
            website be built on? It matters, because moving to a different
            platform later can cost time and money. The honest answer is that
            there is no single best platform for every business. There is only
            the best fit for your goals, your customers, and the way you work.
          </p>
          <p>
            Here is how I compare three platforms I regularly work with:
            WordPress, Shopify, and GoHighLevel.
          </p>

          <h2>Choose WordPress for content and flexibility</h2>
          <p>
            WordPress is a flexible choice for service websites, blogs,
            portfolios, and content-heavy businesses. You can shape the design,
            add pages, publish articles, and build a website that grows with
            your needs. It also gives you control over many important SEO
            elements. The trade-off is that themes, plugins, security, backups,
            and performance need ongoing attention. For businesses focused on
            publishing useful content and being found through search, WordPress
            is often an excellent fit.
          </p>

          <h2>Choose Shopify to sell products</h2>
          <p>
            If your main goal is selling physical or digital products, Shopify
            gives you a store-focused foundation. Products, variants, inventory,
            payments, checkout, discounts, and orders are part of the core
            experience. You can spend more time improving your catalog and the
            customer journey instead of building an e-commerce system from
            scratch. Check transaction fees, app costs, regional payment
            options, and shipping needs before committing, especially if your
            operations are complex.
          </p>

          <h2>Choose GoHighLevel to capture and convert leads</h2>
          <p>
            GoHighLevel is useful when your business relies on inquiries,
            consultations, bookings, and consistent follow-up. It brings
            together landing pages, forms, pipelines, calendars, and email or
            SMS automation. For agencies, coaches, and many service businesses,
            this can reduce the number of separate tools needed to manage
            leads. It works best when the workflows are carefully designed,
            tested, and maintained. Messaging and other usage-based services
            may have additional charges.
          </p>

          <h2>Often the answer is a combination</h2>
          <p>
            You do not always have to choose just one. A WordPress website can
            be your main content and SEO platform while GoHighLevel manages
            forms, bookings, and lead follow-up. A Shopify store can handle
            product purchases while a connected system manages inquiries and
            customer communication. What matters is having a clear reason for
            every tool and avoiding unnecessary complexity.
          </p>
          <p>
            Start with what you need your website to accomplish. Do you want
            to attract local search traffic, sell a product, or turn incoming
            inquiries into appointments? Once that goal is clear, choosing the
            right platform becomes much easier.
          </p>
        </div>

        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build websites, stores, funnels, and connected systems around
            your business goals.
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

        <section
          className={styles.moreArticles}
          aria-labelledby="platform-choice-more-articles"
        >
          <h2 id="platform-choice-more-articles">MORE ARTICLES</h2>
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
