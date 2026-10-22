import Link from "next/link";
import styles from "./article.module.css";

/* =========================================================
   EROLL OLIVER - WEBSITE VISITORS INTO LEADS
   URL: /blog/website-visitors-into-leads

   Same dark editorial style as the other blog articles.
   Header and Footer come from app/layout.js.
========================================================= */

export const metadata = {
  title: "How to Turn Website Visitors Into Leads | Eroll Oliver",
  description:
    "A practical guide to capturing website inquiries, simplifying forms, automating follow-up, and bringing interested visitors back.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title:
      "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Explore how connected CRM tools can organize inquiries, appointments, and follow-up.",
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
      "Help nearby customers find your business when they are searching for your services.",
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
      "Create a clear and focused landing page that makes the next step easy to take.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
];

/* =========================================================
   RELATED ARTICLE ICONS
========================================================= */

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

/* =========================================================
   RELATED ARTICLE CARD
========================================================= */

function RelatedCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.relatedCard}>
      <div className={styles.relatedVisual}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.visualRingOne} aria-hidden="true" />
        <span className={styles.visualRingTwo} aria-hidden="true" />

        <div className={styles.iconWrap}>
          <TopicIcon type={post.icon} />
        </div>

        <span className={styles.visualLabel}>{post.label}</span>
      </div>

      <div className={styles.relatedBody}>
        <div className={styles.relatedMeta}>
          <span>{post.date}</span>
          <span className={styles.metaDash} />
          <span>{post.read}</span>
        </div>

        <h3>{post.title}</h3>
        <p>{post.description}</p>

        <div className={styles.relatedFooter}>
          <span className={styles.miniAvatar} aria-hidden="true">EO</span>
          <span>Eroll Oliver</span>
          <span className={styles.readArrow}>
            Read <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   MAIN BLOG ARTICLE PAGE
========================================================= */

export default function WebsiteVisitorsIntoLeadsArticle() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* BACK TO BLOG */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">←</span> BACK TO BLOG
        </Link>

        {/* ARTICLE HEADING */}
        <header className={styles.header}>
          <h1>
            How to Turn Website Visitors Into Leads (Even the Ones Not Ready to Buy)
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
            <time dateTime="2026-07-11">JULY 11, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>6 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>Lead Generation</span>
            <span>Conversion</span>
            <span>Email</span>
            <span>Strategy</span>
          </div>
        </header>

        {/* FEATURED ARTWORK: NO EXTERNAL IMAGE NEEDED */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="Capture Leads: email envelope illustration on a subtle dark grid"
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
              <rect x="9" y="25" width="62" height="42" rx="4" />
              <path d="m11 28 29 23 29-23" />
              <circle cx="63" cy="18" r="7" fill="currentColor" stroke="none" />
            </svg>
            <span className={styles.featureLabel}>CAPTURE LEADS</span>
          </div>
        </figure>

        {/* ARTICLE BODY */}
        <div className={styles.prose}>
          <p>
            Not everyone who visits your website is ready to call, book, or buy.
            Some people are comparing options, checking prices, or trying to
            understand whether your service is right for them. If the only
            choice you offer is "Contact us now," many interested visitors
            will leave without giving you a way to stay in touch.
          </p>

          <p>
            A lead-generation website gives people a useful next step at
            different stages of their decision. Here is how to turn more of
            that interest into conversations without making the experience
            feel pushy.
          </p>

          <h2>Give them a reason to raise their hand</h2>
          <p>
            Offer something that solves a small but real problem: a pricing
            guide, project checklist, quick assessment, downloadable resource,
            or a clear estimate request. The goal is not to collect email
            addresses for their own sake. It is to give visitors enough value
            that sharing their contact details feels worthwhile. Make the
            offer specific to the service they were already exploring.
          </p>

          <h2>Make capturing details effortless</h2>
          <p>
            A long form can be a barrier when someone only wants a simple
            answer. Ask for the information you truly need at this stage,
            then collect more details later if necessary. Use clear button
            labels, make forms comfortable on mobile devices, and confirm
            what happens after submission. For visitors who prefer to talk,
            an accessible chat or messaging option can provide another route
            to get in touch.
          </p>

          <h2>Follow up automatically — this is where the opportunity grows</h2>
          <p>
            Capturing an inquiry is only the beginning. A simple email or
            SMS workflow can acknowledge the request, share the promised
            resource, and provide an easy way to book a call. Later messages
            can answer common questions or explain your process. Keep the
            timing reasonable, make the content genuinely helpful, and obtain
            appropriate consent before sending marketing messages. The
            objective is a useful conversation, not an endless sequence of
            reminders.
          </p>

          <h2>Bring visitors back</h2>
          <p>
            Some people need days or weeks before they are ready to take
            the next step. An occasional helpful newsletter, follow-up to a
            requested quote, or a relevant new case study can bring your
            business back to mind. Measure which pages, forms, and messages
            lead to real appointments. Then refine the experience so each
            visit has a clearer path from interest to action.
          </p>

          <p>
            You do not need to pressure every visitor into buying today.
            You need a reliable way to help interested people move forward
            when the timing is right for them.
          </p>
        </div>

        {/* CONTACT CTA */}
        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>I build websites and connected systems designed around your business.</p>

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
        <section
          className={styles.moreArticles}
          aria-labelledby="website-leads-more-articles"
        >
          <h2 id="website-leads-more-articles">MORE ARTICLES</h2>

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
