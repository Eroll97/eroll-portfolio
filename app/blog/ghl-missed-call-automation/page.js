import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - GHL MISSED-CALL AUTOMATION BLOG POST
   URL: /blog/ghl-missed-call-automation

   Header and Footer come from app/layout.js.
   No extra image downloads or packages are required.
======================================================== */

export const metadata = {
  title: "How GHL Automation Turns Missed Calls Into Booked Appointments | Eroll Oliver",
  description:
    "Learn how GoHighLevel can acknowledge missed calls, organize incoming leads, and coordinate follow-up and appointment booking.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Learn how a connected CRM supports faster lead management and more consistent follow-up.",
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
      "Make your service business easier for local customers to discover online.",
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
      "Explore the key elements that turn a focused landing page into a clear next step.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
];

/* ========================================================
   SMALL ICONS FOR RELATED ARTICLES
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
   RELATED ARTICLE CARDS
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

export default function GHLMissedCallAutomationArticlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        <header className={styles.header}>
          <h1>How GHL Automation Turns Missed Calls Into Booked Appointments</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-05-20">MAY 20, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>8 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>GoHighLevel</span>
            <span>Automation</span>
            <span>CRM</span>
            <span>Speed-to-Lead</span>
          </div>
        </header>

        {/* FEATURED GRAPHIC: CONNECTED WORKFLOW NODES */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="GHL Automation: three connected workflow nodes on a dark grid background"
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
              <rect x="5" y="15" width="36" height="25" rx="6" />
              <rect x="59" y="15" width="36" height="25" rx="6" />
              <rect x="32" y="62" width="36" height="25" rx="6" />
              <path d="M41 27.5h12v47M59 27.5H53M53 74.5H68v-15" />
              <path d="M23 40v34.5h9" />
              <circle cx="23" cy="27.5" r="2" fill="currentColor" stroke="none" />
              <circle cx="77" cy="27.5" r="2" fill="currentColor" stroke="none" />
              <circle cx="50" cy="74.5" r="2" fill="currentColor" stroke="none" />
            </svg>
            <span className={styles.featureLabel}>GHL AUTOMATION</span>
          </div>
        </figure>

        {/* ARTICLE CONTENT */}
        <div className={styles.prose}>
          <p>
            A potential customer calls while your team is busy. Nobody answers,
            and by the time someone checks the missed-call notification, that
            customer may have contacted another business. This is one of the
            simplest gaps to address with a well-designed GoHighLevel workflow:
            acknowledge an inquiry promptly, keep the lead organized, and make
            it easy to book the next conversation.
          </p>

          <h2>What speed-to-lead actually looks like</h2>
          <p>
            Speed-to-lead is the time between someone showing interest and a
            useful response from your business. In GoHighLevel, a new form
            submission, inbound message, or missed-call event can trigger an
            internal notification, create or update a contact, and start the
            next appropriate step. The aim is not to replace personal service;
            it is to make sure an inquiry is not forgotten while the team is
            working.
          </p>

          <h2>The missed-call text-back</h2>
          <p>
            A missed-call text-back is a simple idea: when a customer calls
            and nobody answers, the system can send a polite acknowledgment
            and invite them to explain what they need. An example might be,
            &ldquo;Sorry we missed your call. How can we help?&rdquo; A good
            message sounds human, identifies the business, and offers a clear
            next step rather than pushing a hard sale.
          </p>
          <p>
            This should only run where messaging permission and local rules
            allow it. The workflow also needs safeguards for repeat callers,
            existing conversations, and customers who have opted out. For
            suitable leads, the next message can include a booking link or a
            request for the details your team needs to prepare.
          </p>

          <h2>Follow-up sequences that never forget</h2>
          <p>
            One helpful message is a start, but many service inquiries need
            another touchpoint. A follow-up sequence might confirm that a quote
            request was received, send an appointment reminder, or check back
            after a missed connection. In GoHighLevel, each step can depend on
            what happened previously, so people who reply or book do not keep
            receiving the same generic reminders.
          </p>
          <p>
            I prefer short, relevant sequences over aggressive messaging.
            The most useful automation respects timing, routes meaningful
            replies to a real team member, and stops when the customer has
            booked, opted out, or no longer needs follow-up.
          </p>

          <h2>The pipeline side matters just as much</h2>
          <p>
            Automated messages become much more valuable when the activity is
            reflected in your CRM. A new inquiry can enter a pipeline, a booked
            consultation can move to its next stage, and the team can see who
            needs attention. That means fewer handoffs through scattered inboxes,
            spreadsheets, or missed notifications.
          </p>
          <p>
            For a service business, the goal is a straightforward process:
            someone reaches out, receives a timely response, knows what to do
            next, and can book an appointment without unnecessary back-and-forth.
            GoHighLevel can help connect those steps when the workflows are
            built, tested, and monitored carefully.
          </p>
        </div>

        {/* CTA */}
        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build websites, funnels, and GoHighLevel workflows designed
            around your business and your customers.
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
        <section
          className={styles.moreArticles}
          aria-labelledby="ghl-missed-call-related-heading"
        >
          <h2 id="ghl-missed-call-related-heading">MORE ARTICLES</h2>
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
