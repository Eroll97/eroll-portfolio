import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - WHATSAPP AUTOMATION ARTICLE
   URL: /blog/whatsapp-automation
   Shared site Header and Footer come from app/layout.js.
======================================================== */

export const metadata = {
  title: "WhatsApp Automation for Business: Never Miss Another Lead | Eroll Oliver",
  description:
    "Learn how WhatsApp automation can help service businesses respond to inquiries, qualify leads, book appointments, and follow up respectfully.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "See how a connected CRM can handle inquiries, appointments, and follow-ups.",
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
      "Help customers in your service area find your business when they need you.",
    date: "JUL 18, 2026",
    read: "8 MIN READ",
    category: "SEO",
    label: "LOCAL SEO",
    icon: "location",
  },
  {
    slug: "website-visitors-into-leads",
    title: "How to Turn Website Visitors Into Leads (Even the Ones Not Ready to Buy)",
    description:
      "Turn website interest into helpful conversations and timely follow-up.",
    date: "JUL 11, 2026",
    read: "6 MIN READ",
    category: "LEAD GENERATION",
    label: "CAPTURE LEADS",
    icon: "mail",
  },
];

function TopicIcon({ type }) {
  switch (type) {
    case "ghl":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="20" strokeDasharray="2.5 4" />
          <path d="m24 12 13 23H11L24 12Z" />
          <circle cx="24" cy="26" r="4.5" />
        </svg>
      );
    case "location":
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 41S12 29 12 20a12 12 0 0 1 24 0c0 9-12 21-12 21Z" />
          <circle cx="24" cy="20" r="5" />
          <path d="M17 32c2-3 4-5 7-5s5 2 7 5" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="7" y="12" width="34" height="25" rx="4" />
          <path d="m8 15 16 13 16-13M24 7v5M20 8l4-4 4 4" />
        </svg>
      );
  }
}

function RelatedCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.relatedCard}>
      <div className={styles.relatedVisual}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.visualRingOne} aria-hidden="true" />
        <span className={styles.visualRingTwo} aria-hidden="true" />

        <span className={styles.iconWrap}>
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
            Read <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function WhatsAppAutomationArticle() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">←</span> BACK TO BLOG
        </Link>

        <header className={styles.header}>
          <h1>WhatsApp Automation for Business: Never Miss Another Lead</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>

            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-07-09">JULY 9, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>6 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>WhatsApp</span>
            <span>Automation</span>
            <span>Lead Generation</span>
            <span>Customer Support</span>
          </div>
        </header>

        {/* The illustration is built in JSX: no external image required. */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="WhatsApp automation: outlined chat bubbles on a dark grid background"
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
              <path d="M13 37a27 27 0 0 1 45-20 27 27 0 0 1 5 30 27 27 0 0 1-25 16c-5 0-9-1-13-3l-15 5 5-15c-2-4-2-8-2-13Z" />
              <path d="M27 29c2-3 4-3 5 0l3 5-3 4c3 5 7 9 12 11l4-3 5 3c3 2 3 4 0 6-2 2-5 3-8 2-12-4-22-14-25-26-1-3 1-6 7-9" strokeWidth="2.4" />
            </svg>
            <span className={styles.featureLabel}>WHATSAPP AUTOMATION</span>
          </div>
        </figure>

        <div className={styles.prose}>
          <p>
            Imagine a potential customer messaging your business in the evening
            to ask about a service. They may be comparing a few providers, and
            they want to know whether you can help. If the message sits unanswered
            until the next day, that opportunity may have already moved on.
          </p>
          <p>
            WhatsApp can make business conversations convenient, but the real
            improvement comes when your team has a reliable system for responding,
            organizing inquiries, and handing off the ones that need a human.
            That is where thoughtful automation becomes useful.
          </p>

          <h2>Start with a helpful first response</h2>
          <p>
            An automated greeting can acknowledge a new message right away,
            confirm that it was received, and explain what happens next.
            Keep it short and conversational. If someone asks for a quote,
            offer a simple path to share what you need. If they are asking
            about opening hours or service areas, give the answer directly.
            A good first response creates clarity rather than making people
            work through an unnecessary menu.
          </p>

          <h2>Qualify leads without turning the chat into a form</h2>
          <p>
            Ask only the questions needed to decide what should happen next.
            For a home-service company, that might be the service required,
            location, and preferred time. For an appointment-based business,
            it could be the type of appointment and the customer's availability.
            Record useful answers in the CRM so staff do not have to request
            the same details again.
          </p>

          <h2>Connect the conversation to booking and follow-up</h2>
          <p>
            The strongest workflow does more than send replies. Once an
            inquiry is qualified, the system can direct the person to a
            booking page, notify the appropriate team member, and update
            the lead's status. After an appointment is booked, timely
            reminders can help reduce confusion. Conversations that need
            personal attention should be transferred to a real person
            with the context preserved.
          </p>

          <h2>Keep automation personal and permission-based</h2>
          <p>
            Customers should understand when they are speaking with an
            automated assistant and how to reach a human. Do not send repeated
            promotional messages without appropriate permission. For outbound
            WhatsApp messaging, follow the platform's business messaging
            requirements, including applicable template and opt-in rules.
            Make opting out straightforward and respect those requests.
          </p>

          <h2>Measure real conversations, not just message volume</h2>
          <p>
            More automated messages are not automatically better. Measure
            how many inquiries receive a useful response, how many become
            qualified leads, and how many result in booked appointments.
            Review conversations that get stuck or produce confusing answers.
            Small improvements to the opening message, question flow, and
            team handoff can make the whole experience more useful.
          </p>

          <h2>The best setup supports your team</h2>
          <p>
            WhatsApp automation works best when it removes repetitive tasks
            and helps people receive timely support. Start with a few
            frequently asked questions, a clear qualification flow, and
            one reliable handoff process. Then expand based on actual customer
            needs instead of automating every conversation at once.
          </p>
        </div>

        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build websites and connected systems designed around your business.
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
          aria-labelledby="whatsapp-automation-more-articles"
        >
          <h2 id="whatsapp-automation-more-articles">MORE ARTICLES</h2>
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
