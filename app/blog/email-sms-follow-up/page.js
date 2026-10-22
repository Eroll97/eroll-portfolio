import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - EMAIL AND SMS FOLLOW-UP BLOG POST
   Route: /blog/email-sms-follow-up
   The shared app/layout.js handles Header and Footer.
======================================================== */

export const metadata = {
  title: "Email and SMS Follow-Up: The Money Is in the Sequence | Eroll Oliver",
  description:
    "A practical guide to email and SMS follow-up sequences: useful messages, behavior-based automation, clear next steps, and knowing when to stop.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title:
      "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Compare CRM organization with connected lead management and automated follow-up.",
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
      "The foundations of helping local customers discover your business online.",
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
      "Build a landing page that gives visitors one clear and useful next step.",
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

export default function EmailSMSFollowUpArticlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        <header className={styles.header}>
          <h1>Email and SMS Follow-Up: The Money Is in the Sequence</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-06-12">JUNE 12, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>7 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>Automation</span>
            <span>Email</span>
            <span>SMS</span>
            <span>GoHighLevel</span>
          </div>
        </header>

        {/* Follow-up timeline illustration - no image asset required. */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="Follow-up sequence with a white connecting line and four message checkpoints on a dark grid"
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
              <path d="M16 33h64v24" />
              <path d="M16 58h64" />
              <circle cx="17" cy="58" r="5.5" fill="currentColor" stroke="none" />
              <circle cx="45" cy="58" r="5.5" fill="currentColor" stroke="none" />
              <circle cx="73" cy="58" r="5.5" fill="currentColor" stroke="none" />
              <circle cx="84" cy="58" r="6" fill="#0a0a0a" />
              <path d="m75 48 9 10-9 10" />
            </svg>
            <span className={styles.featureLabel}>FOLLOW-UP</span>
          </div>
        </figure>

        <div className={styles.prose}>
          <p>
            Many customers need time between their first inquiry and a decision.
            They may be comparing options, waiting for the right date, or simply
            busy. When a business replies once and never follows up, an interested
            lead can easily get forgotten. A well-planned email and SMS sequence
            keeps the conversation moving without asking your team to remember
            every message manually.
          </p>

          <h2>Why the sequence beats the single message</h2>
          <p>
            One message only reaches someone at one moment. A thoughtful sequence
            gives a person several useful opportunities to respond: a quick
            acknowledgment, a helpful answer, a reminder, or a simple invitation
            to book. The goal is not to send as many messages as possible. It is
            to be helpful and available when the customer is ready to continue.
          </p>

          <h2>What a good sequence looks like</h2>
          <p>
            Start by confirming the inquiry and explaining what happens next.
            Follow with information that answers a common question or helps the
            person make a decision. Later, offer one clear next step, such as
            replying with a question, requesting a quote, or choosing a booking
            time. Each message should add value rather than repeat the same
            sales pitch. Email works well for detailed information; SMS can be
            useful for timely, concise updates when the customer has opted in.
          </p>

          <h2>Let behavior trigger the messages</h2>
          <p>
            The most useful automations adapt to what a person actually does.
            If a lead books an appointment, stop asking them to book and move
            them to reminders or preparation instructions. If someone replies,
            route the conversation to the right person. If they request more
            information, send relevant details instead of the generic next
            message. With a CRM such as GoHighLevel, forms, pipeline stages,
            calendars, and workflows can work together to support these paths.
          </p>

          <h2>Know when to stop</h2>
          <p>
            Good follow-up respects the customer. Stop promotional messages
            when someone opts out, and avoid restarting the sequence when a
            contact has already declined or completed the intended action.
            Send SMS only where you have appropriate consent and follow the
            applicable messaging rules. Watch replies, unsubscribes, and
            appointments so you can improve the sequence over time. Effective
            automation is not endless messaging; it is a more consistent way
            to provide the right information at the right time.
          </p>
        </div>

        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build websites, funnels, and follow-up workflows that connect
            customer inquiries with clear next steps.
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
          aria-labelledby="email-sms-related-articles"
        >
          <h2 id="email-sms-related-articles">MORE ARTICLES</h2>
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
