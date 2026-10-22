import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - AI CHATBOT VS LIVE CHAT
   Route: /blog/ai-chatbot-vs-live-chat
   Header and Footer are provided by app/layout.js.
======================================================== */

export const metadata = {
  title: "AI Chatbot vs Live Chat: Which One Should Your Business Use? | Eroll Oliver",
  description:
    "Learn when to use AI chatbots, when human live chat is better, and how a combined approach can help service businesses answer questions and capture leads.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "How connected CRM tools and automated follow-up help service teams manage inquiries.",
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
      "Practical ways to make your business easier to find in local searches.",
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
      "Seven essentials that help visitors understand your offer and take the next step.",
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

export default function AIChatbotVsLiveChatArticlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        <header className={styles.header}>
          <h1>AI Chatbot vs Live Chat: Which One Should Your Business Use?</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-05-28">MAY 28, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>6 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>AI Agents</span>
            <span>Chatbots</span>
            <span>Customer Support</span>
            <span>Automation</span>
          </div>
        </header>

        {/* Dark editorial image with two overlapping chat bubbles. */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="AI Chat illustration with two overlapping white conversation bubbles on a dark grid"
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
              {/* Human live-chat bubble behind the AI bubble */}
              <path d="M15 21h38a8 8 0 0 1 8 8v23a8 8 0 0 1-8 8H36L23 72V60h-8a8 8 0 0 1-8-8V29a8 8 0 0 1 8-8Z" />
              {/* AI reply bubble */}
              <rect x="40" y="44" width="49" height="36" rx="8" fill="#0a0a0a" />
              <circle cx="55" cy="62" r="3" fill="currentColor" stroke="none" />
              <circle cx="73" cy="62" r="3" fill="currentColor" stroke="none" />
            </svg>
            <span className={styles.featureLabel}>AI CHAT</span>
          </div>
        </figure>

        <div className={styles.prose}>
          <p>
            You have probably seen the little chat bubble on a business website.
            Sometimes a human support agent answers it; other times it is an AI
            chatbot. Those experiences can look similar to visitors, but they
            solve different problems. Choosing the right one, or combining them
            well, can make the difference between capturing a late-night inquiry
            and leaving a potential customer waiting.
          </p>

          <h2>Where live chat wins</h2>
          <p>
            Live chat puts a real person into the conversation. That matters
            when a customer has a complicated question, a sensitive situation,
            or a problem that calls for judgment and empathy. A knowledgeable
            human can ask follow-up questions, understand unusual circumstances,
            and work through an issue that does not fit a standard script.
          </p>
          <p>
            The challenge is availability. If nobody is online, or a team is
            handling several conversations at once, visitors may wait longer
            than they want to. Live chat is most useful when your staff have
            enough time and context to respond well.
          </p>

          <h2>Where an AI chatbot wins</h2>
          <p>
            An AI chatbot can respond immediately, including outside business
            hours. It can answer common questions about services, opening hours,
            locations, and the next steps for booking. With the right setup,
            it can also collect inquiry details, qualify leads, and pass useful
            information to a CRM before someone from your team follows up.
          </p>
          <p>
            This works especially well for predictable, repetitive questions.
            Instead of making every visitor wait for a person, the chatbot
            provides a helpful first response and keeps the conversation moving.
          </p>

          <h2>The trade-off to be honest about</h2>
          <p>
            A chatbot is only as useful as its instructions, information, and
            safeguards. Without good setup, it may misunderstand a request or
            give an answer your business cannot support. It should not invent
            pricing, promise outcomes, or pretend to have completed an action
            that never happened. Customers should also be able to tell when
            they are chatting with AI and how to reach a person.
          </p>
          <p>
            A live agent can make mistakes too, but has more flexibility when
            conversations become emotional, complex, or unexpected. That is
            why an easy handoff matters just as much as a fast automated reply.
          </p>

          <h2>The best answer: both, working together</h2>
          <p>
            For many service businesses, the strongest approach is an AI
            assistant that handles the first interaction, answers routine
            questions, and gathers relevant details. When a visitor asks for
            personal advice, needs a special exception, or wants to speak to a
            human, the conversation should move smoothly to your team.
          </p>
          <p>
            Connected to the right CRM and booking workflows, that combination
            can offer quick replies without losing the personal attention that
            builds trust. The goal is not to replace every human conversation;
            it is to make sure the important ones happen.
          </p>
        </div>

        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build websites, AI-assisted workflows, and lead capture systems
            that support real customer conversations.
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
          aria-labelledby="ai-chat-related-articles"
        >
          <h2 id="ai-chat-related-articles">MORE ARTICLES</h2>
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
