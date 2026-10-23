import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - AI AGENTS SALES ASSISTANT BLOG POST
   Route: /blog/ai-agents-sales-assistant

   Uses the shared Header and Footer from app/layout.js.
   The featured illustration is built with SVG, so there
   are no additional image files or dependencies.
======================================================== */

export const metadata = {
  title: "AI Agents: Your 24/7 Sales Assistant That Never Sleeps | Eroll Oliver",
  description:
    "Learn how AI sales agents can answer common customer questions, qualify leads, assist with bookings, and work alongside your team through CRM automation.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title:
      "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Explore how CRM workflows bring inquiries, appointments, and follow-up together.",
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
      "Simple ways to help people in your area find your services when they search.",
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
      "The parts of a focused landing page that turn interest into action.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
];

/* ========================================================
   RELATED ARTICLE ICONS
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
   RELATED ARTICLE CARD
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
          <span className={styles.miniAvatar} aria-hidden="true">
            EO
          </span>
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

export default function AIAgentsSalesAssistantPage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* BACK TO BLOG */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        {/* TITLE, AUTHOR, DATE, TOPICS */}
        <header className={styles.header}>
          <h1>AI Agents: Your 24/7 Sales Assistant That Never Sleeps</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">
                EO
              </span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-04-10">APR 10, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>7 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>AI Agents</span>
            <span>Automation</span>
            <span>Lead Generation</span>
            <span>Sales Assistant</span>
          </div>
        </header>

        {/* FEATURED GRAPHIC - NO EXTERNAL IMAGE REQUIRED */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="AI Agents illustration showing a conversational robot on a subtle dark grid background"
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
              <path d="M50 13v13" />
              <circle cx="50" cy="10" r="4" />
              <rect x="17" y="27" width="66" height="51" rx="12" />
              <path d="M17 47H9v13h8M83 47h8v13h-8" />
              <circle cx="37" cy="49" r="5" fill="currentColor" stroke="none" />
              <circle cx="63" cy="49" r="5" fill="currentColor" stroke="none" />
              <path d="M37 64c7 6 19 6 26 0" />
              <path d="M33 79v7M67 79v7" />
            </svg>
            <span className={styles.featureLabel}>AI AGENTS</span>
          </div>
        </figure>

        {/* BLOG CONTENT */}
        <div className={styles.prose}>
          <p>
            Potential customers do not always visit your website during office
            hours. Some ask about pricing late at night. Others want to know
            whether you serve their area, or whether they can book an
            appointment tomorrow. If no one responds, they may move on before
            your team has the chance to speak with them. An AI sales assistant
            can help make that first interaction easier.
          </p>

          <h2>What an AI sales assistant actually does</h2>
          <p>
            Think of an AI agent as a first point of contact for routine
            conversations. With a well-organized knowledge base, it can answer
            common questions about your services, business hours, locations,
            and booking process. It can ask follow-up questions, collect an
            inquiry, and give visitors a clear next step instead of leaving
            them searching through different pages.
          </p>
          <p>
            Unlike a simple scripted chatbot that follows a fixed decision
            tree, an AI agent can handle variations in how customers phrase
            their questions. Its reliability still depends on the information
            you provide, the boundaries you set, and how carefully you test it.
          </p>

          <h2>Be available when your team is offline</h2>
          <p>
            A customer might send a message at 9 p.m. asking for an estimate.
            An AI assistant can acknowledge the inquiry, explain what details
            your team needs, and collect a preferred contact method. When the
            team starts work, the conversation is already organized. This is
            especially helpful for service businesses that receive inquiries
            through websites, chat widgets, and messaging channels.
          </p>
          <p>
            Around-the-clock responses do not mean every question should be
            answered automatically. Complex estimates, urgent problems, and
            unusual requests should have a clear path to a real person.
          </p>

          <h2>Qualify leads before a sales call</h2>
          <p>
            Not every inquiry needs the same response. A roofing company may
            need the property location and service type; a marketing agency
            may need the business website and project goals. An AI agent can
            ask a short set of relevant questions and organize the answers
            so the right team member knows what the customer needs.
          </p>
          <p>
            Keep those questions brief and purposeful. Ask only for the
            information needed to help the visitor, explain how their details
            will be used, and avoid collecting sensitive information without
            a valid reason.
          </p>

          <h2>Connect the conversation to bookings and follow-up</h2>
          <p>
            The biggest value comes when the chat does not end as an isolated
            message. When connected correctly to a CRM such as GoHighLevel,
            an AI assistant can create or update a contact, route an inquiry
            to a pipeline, offer available appointment slots, and trigger
            appropriate reminders or next steps. Your team can see the
            conversation history instead of asking the customer to repeat it.
          </p>
          <p>
            Email and SMS automation should respect customer preferences and
            applicable consent requirements. Confirmations and reminders are
            useful only when they are accurate, relevant, and wanted.
          </p>

          <h2>Know when a human should take over</h2>
          <p>
            A good AI agent is honest about being automated. It should not
            invent prices, promise unavailable appointments, or pretend to
            understand situations that need professional judgment. Build in
            a clear handoff whenever the visitor requests a person, the agent
            is uncertain, or the issue is outside its scope.
          </p>
          <p>
            This is how AI and human support work best together: the agent
            handles repetitive first-contact tasks, while your team focuses
            on the conversations that require experience and personal care.
          </p>

          <h2>Start with one useful workflow</h2>
          <p>
            You do not need to automate everything on day one. Begin with a
            focused goal, such as answering frequently asked questions,
            capturing after-hours inquiries, or helping visitors book a demo.
            Test real conversation examples, check the CRM records, and review
            where visitors get stuck. Improve the workflow gradually as you
            learn what customers actually ask.
          </p>
          <p>
            The best AI assistant is not the one with the longest feature
            list. It is the one that helps customers get the right answer and
            makes it easier for your business to respond consistently.
          </p>
        </div>

        {/* CONTACT CTA */}
        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build websites, GoHighLevel workflows, and AI-powered systems
            designed around the way your business handles leads.
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
          aria-labelledby="ai-agents-related-heading"
        >
          <h2 id="ai-agents-related-heading">MORE ARTICLES</h2>
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
