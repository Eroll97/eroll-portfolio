
import Link from "next/link";
import { posts } from "../../../lib/data";
import styles from "./article.module.css";

/* ==========================================
   EROLL OLIVER - BLOG ARTICLE
========================================== */

const article = posts.find(
  (post) => post.slug === "gohighlevel-vs-traditional-crm"
) ?? {
  title:
    "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
  image: "/blog/ghl-vs-crm.svg",
};

const relatedPosts = [
  {
    slug: "local-seo-service-business",
    title: "Local SEO: How to Show Up When Nearby Customers Search",
    description:
      "How to make your services easier to find when local customers are ready to buy.",
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
      "The essential parts of a landing page that turns interest into action.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
  {
    slug: "website-visitors-into-leads",
    title:
      "How to Turn Website Visitors Into Leads (Even the Ones Not Ready to Buy)",
    description:
      "Capture more inquiries and create helpful follow-ups for people who need more time.",
    date: "JUL 11, 2026",
    read: "6 MIN READ",
    category: "LEAD GENERATION",
    label: "CAPTURE LEADS",
    icon: "mail",
  },
];

export const metadata = {
  title: "GoHighLevel vs a Traditional CRM | Eroll Oliver",
  description:
    "Explore the practical differences between GoHighLevel and traditional CRM platforms, from lead management to automated follow-up.",
};

/* ==========================================
   RELATED ARTICLE ICONS
========================================== */

function TopicIcon({ type }) {
  if (type === "location") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M24 40s12-12 12-22a12 12 0 0 0-24 0c0 10 12 22 12 22Z" />
        <circle cx="24" cy="18" r="4.5" />
      </svg>
    );
  }

  if (type === "page") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="7" y="9" width="34" height="30" rx="4" />
        <path d="M7 18h34M14 14h1M20 14h1M15 26h18M15 32h12" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="7" y="12" width="34" height="25" rx="4" />
      <path d="m8 15 16 13 16-13M24 7v5M20 8l4-4 4 4" />
    </svg>
  );
}

/* ==========================================
   RELATED ARTICLE CARD
========================================== */

function RelatedCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={styles.relatedCard}
    >
      <div className={styles.relatedVisual}>
        <span className={styles.category}>
          {post.category}
        </span>

        <div
          className={styles.visualRingOne}
          aria-hidden="true"
        />

        <div
          className={styles.visualRingTwo}
          aria-hidden="true"
        />

        <div className={styles.iconWrap}>
          <TopicIcon type={post.icon} />
        </div>

        <span className={styles.visualLabel}>
          {post.label}
        </span>
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
          <span className={styles.miniAvatar}>
            EO
          </span>

          <span>Eroll Oliver</span>

          <span className={styles.readArrow}>
            Read <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ==========================================
   MAIN ARTICLE PAGE
========================================== */

export default function GoHighLevelVsTraditionalCRMPage() {
  return (
    <div className={styles.page}>
      <div
        className={styles.pageGlow}
        aria-hidden="true"
      />

      <article className={styles.article}>

        {/* BACK TO BLOG */}

        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          BACK TO BLOG
        </Link>

        {/* ARTICLE HEADER */}

        <header className={styles.header}>
          <h1>{article.title}</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span
                className={styles.authorAvatar}
                aria-hidden="true"
              >
                EO
              </span>

              <div>
                <strong>Eroll Oliver</strong>
                <small>
                  WordPress Developer &amp; GHL Expert
                </small>
              </div>
            </div>

            <span
              className={styles.authorDivider}
              aria-hidden="true"
            />

            <time dateTime="2026-07-21">
              JULY 21, 2026
            </time>

            <span
              className={styles.authorDividerShort}
              aria-hidden="true"
            />

            <span>7 MIN READ</span>
          </div>

          <div
            className={styles.tags}
            aria-label="Article topics"
          >
            <span>GoHighLevel</span>
            <span>CRM</span>
            <span>Automation</span>
            <span>Small Business</span>
          </div>
        </header>

        {/* FEATURED IMAGE */}

        <figure className={styles.featuredImage}>
          <img
            src={
              article.image ||
              "/blog/ghl-vs-crm.svg"
            }
            alt="GoHighLevel versus traditional CRM article illustration"
            width={1200}
            height={620}
            loading="eager"
          />
        </figure>

        {/* ARTICLE CONTENT */}

        <div className={styles.prose}>
          <p>
            Most service businesses do not lose opportunities
            because their contact lists are too small.
            They lose them between the first inquiry and
            the next conversation. A visitor sends a message,
            a lead requests a quote, or a customer calls
            after business hours—and nobody follows up
            at the right moment.
          </p>

          <p>
            A good CRM makes customer information easier
            to organize. A connected marketing and
            operations system can also help your team
            act on that information. That difference
            is worth understanding before choosing
            your next platform.
          </p>

          <h2>What a traditional CRM does well</h2>

          <p>
            Traditional CRM platforms are often excellent
            at managing complex sales relationships.
            They can organize contacts, deal stages,
            reporting, permissions, and the activities
            of larger sales teams. Many also provide
            powerful automation features, particularly
            when they are configured and integrated
            properly.
          </p>

          <p>
            The trade-off for a smaller service business
            can be complexity. Booking calendars, landing
            pages, email campaigns, text messaging,
            and review requests might require additional
            tools or separate subscriptions. Each
            connection adds another system to maintain.
          </p>

          <h2>What GoHighLevel does differently</h2>

          <p>
            GoHighLevel brings several customer-facing
            tools into one platform: CRM pipelines,
            forms, landing pages, calendars, email
            and SMS workflows, and reputation management.
            When those pieces are connected, an inquiry
            can create a contact, enter a pipeline,
            trigger an acknowledgment, and offer a
            booking link without someone copying
            information between systems.
          </p>

          <p>
            It still requires thoughtful setup.
            Automations need accurate triggers, clear
            messaging, and ongoing testing. Phone
            and messaging usage may also have additional
            costs, depending on the services enabled.
          </p>

          <h2>The speed-to-lead advantage</h2>

          <p>
            Think about what happens after a potential
            customer submits a request at 8:30 p.m.
            A manual process may wait until the next
            morning. An automated one can confirm
            that the inquiry arrived, ask a qualifying
            question, and provide the next step
            immediately.
          </p>

          <p>
            Automation does not replace a helpful
            conversation. It makes it easier for a
            real person to continue that conversation
            while the customer is still interested—and
            gives your team a record of what happened
            along the way.
          </p>

          <h2>So which should you choose?</h2>

          <p>
            If you manage enterprise sales, complicated
            account structures, or specialized reporting,
            an established CRM may still be the best fit.
            If you run a service business and want leads,
            appointments, reminders, and follow-up
            managed together, GoHighLevel is worth
            evaluating.
          </p>

          <p>
            Start with your actual workflow: where do
            leads come from, who answers them, how do
            customers book, and which follow-ups are easy
            to miss? The right platform is the one that
            solves those problems without creating more
            work for your team.
          </p>
        </div>

        {/* CONTACT CTA */}

        <aside
          className={styles.cta}
          aria-label="Work with Eroll Oliver"
        >
          <h2>
            Need help with your website or automation?
          </h2>

          <p>
            I build websites and connected systems
            designed around your business.
          </p>

          <div className={styles.ctaActions}>
            <Link
              href="/contact"
              className={styles.contactButton}
            >
              CONTACT ME
            </Link>

            <Link
              href="/portfolio"
              className={styles.secondaryButton}
            >
              VIEW MY WORK
            </Link>
          </div>
        </aside>

        {/* MORE ARTICLES */}

        <section
          className={styles.moreArticles}
          aria-labelledby="more-articles-title"
        >
          <h2 id="more-articles-title">
            MORE ARTICLES
          </h2>

          <div className={styles.relatedGrid}>
            {relatedPosts.map((post) => (
              <RelatedCard
                key={post.slug}
                post={post}
              />
            ))}
          </div>
        </section>

      </article>
    </div>
  );
}
