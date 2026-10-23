import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - CHEAP WEBSITE COST BLOG POST
   URL: /blog/cheap-website-cost

   This is an App Router page. The shared Header and Footer
   already come from app/layout.js, not from this component.
   The featured graphic is a self-contained SVG.
======================================================== */

export const metadata = {
  title: "The Real Cost of a Cheap Website | Eroll Oliver",
  description:
    "A cheap website can cost more through missed leads, rebuilds, slow loading, and weak security. Learn what matters when investing in a business website.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "See how a connected CRM can simplify customer inquiries and follow-up.",
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
      "Practical ways to help nearby customers find your business online.",
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
      "Explore the key ingredients of a focused, conversion-friendly landing page.",
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

/* ========================================================
   RELATED POST CARDS
======================================================== */

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

export default function CheapWebsiteCostArticlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* BACK TO BLOG */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        {/* ARTICLE TITLE, AUTHOR, AND TOPIC TAGS */}
        <header className={styles.header}>
          <h1>The Real Cost of a Cheap Website (And Why It Is Never Actually Cheap)</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>

            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-05-15">MAY 15, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>6 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>WordPress</span>
            <span>Business</span>
            <span>Web Design</span>
            <span>Strategy</span>
          </div>
        </header>

        {/* SELF-CONTAINED FEATURED GRAPHIC */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="Cheap Website: browser window with an X symbol on a dark grid background"
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
              <rect x="12" y="20" width="76" height="60" rx="6" />
              <path d="M12 37h76" />
              <path d="M41 49l18 19M59 49 41 68" />
            </svg>
            <span className={styles.featureLabel}>CHEAP WEBSITE</span>
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <div className={styles.prose}>
          <p>
            A low website quote can be tempting, especially when you are
            launching a business and watching every expense. But the price on
            the proposal is only one part of the cost. If a site is hard to use,
            slow to load, or difficult to update, the savings can disappear
            through missed inquiries, extra maintenance, and a rebuild sooner
            than expected. Here is what to look at beyond the initial price.
          </p>

          <h2>The cost of lost leads</h2>
          <p>
            The most expensive problem with a weak website is often invisible:
            the people who leave before calling, booking, or completing your
            contact form. Confusing navigation, unclear messaging, broken
            mobile layouts, and missing trust signals all make it harder for
            visitors to take the next step. A good website should help someone
            understand what you offer and how to contact you within seconds.
          </p>

          <h2>The cost of doing it twice</h2>
          <p>
            A quick template can be useful for a simple launch, but it becomes
            costly when it cannot grow with your business. If every new service,
            location, or integration requires a workaround, you may eventually
            pay to rebuild the website rather than improve it. A sensible
            foundation, clean structure, and easy-to-manage content can reduce
            that risk from the beginning.
          </p>

          <h2>The hidden costs: speed, SEO, and security</h2>
          <p>
            These essentials are easy to overlook because visitors do not see
            them directly. Heavy images and unnecessary scripts slow a page
            down. Missing page structure and weak local SEO make it harder for
            search engines to understand the business. Outdated plugins and
            poor maintenance increase the chances of errors or security issues.
            The cost of preventing these problems is often smaller than the
            disruption of fixing them later.
          </p>

          <h2>Invest, do not just spend</h2>
          <p>
            An effective website does not have to be the most expensive option.
            It needs to match the business, explain the offer clearly, work on
            phones, and make the next step easy. When comparing proposals,
            ask what is included in design, performance, SEO basics, security,
            content updates, and ongoing support. Choose the solution that
            makes sense for your goals and budget, not just the lowest number
            on the first invoice.
          </p>
        </div>

        {/* CONTACT CTA */}
        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I design websites and connected systems that help your business
            turn more visits into meaningful conversations.
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

        {/* RELATED ARTICLES */}
        <section
          className={styles.moreArticles}
          aria-labelledby="cheap-website-related-heading"
        >
          <h2 id="cheap-website-related-heading">MORE ARTICLES</h2>
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
