import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - WEBSITE CONVERSION AUDIT ARTICLE
   URL: /blog/website-conversion-audit

   Header and Footer come from the existing app/layout.js.
   This is a route-specific, responsive blog article.
======================================================== */

export const metadata = {
  title: "Website Conversion Audit: 10 Quick Wins | Eroll Oliver",
  description:
    "Ten practical website conversion improvements that help service businesses turn more existing visitors into leads, without relying on more ad spend.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Explore how a connected CRM can organize inquiries, appointments, and follow-up.",
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
      "Make your business easier to find when nearby customers search for services.",
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
      "The essential parts of a landing page that encourages visitors to take action.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "landing",
  },
];

function TopicIcon({ type }) {
  if (type === "ghl") {
    return (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="19" strokeDasharray="2.5 4" />
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

export default function WebsiteConversionAuditArticle() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">←</span> BACK TO BLOG
        </Link>

        <header className={styles.header}>
          <h1>Website Conversion Audit: 10 Quick Wins to Get More Leads This Month</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-07-06">JULY 6, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>8 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>Conversion</span>
            <span>Website</span>
            <span>Optimization</span>
            <span>Checklist</span>
          </div>
        </header>

        {/* Illustration built with SVG, so no image asset is required. */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="Conversion audit: rising performance bars on a dark grid background"
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
              <path d="M11 18h58" />
              <path d="M17 58V42M32 58V31M47 58V39M63 58V21" />
              <circle cx="63" cy="18" r="4.5" fill="currentColor" stroke="none" />
            </svg>
            <span className={styles.featureLabel}>CONVERSION AUDIT</span>
          </div>
        </figure>

        <div className={styles.prose}>
          <p>
            Before spending more on advertising, look at what your current visitors
            experience. Is the next step obvious? Can someone contact you quickly?
            Does the page give them a reason to trust your business? A few focused
            improvements can make existing traffic more valuable.
          </p>
          <p>
            This practical website conversion checklist covers ten changes worth
            checking before you increase your marketing budget. Start with the
            pages that already receive the most visitors.
          </p>

          <h2>1. Make your call to action obvious</h2>
          <p>
            Give each page one clear primary action: request a quote, book a
            consultation, or call the business. Put that action near the top and
            repeat it after important information. Make the button label specific
            so visitors know what will happen when they click.
          </p>

          <h2>2. Put contact information where thumbs are</h2>
          <p>
            On mobile, visitors should not have to search for your phone number
            or contact form. Use a clear tap-to-call link, an easy-to-reach
            contact button, and a form that works comfortably on a small screen.
            Reducing effort can turn an interested visitor into an inquiry.
          </p>

          <h2>3. Fix your load speed</h2>
          <p>
            Heavy images, unnecessary scripts, and slow hosting can delay the
            moment a customer sees your offer. Compress images, load nonessential
            media later, remove unused tools, and test your Core Web Vitals.
            Prioritize changes that improve the real mobile experience.
          </p>

          <h2>4. Lead with the outcome, not your logo</h2>
          <p>
            Your first headline should tell people what you do and how it helps
            them. A vague welcome message asks the visitor to work too hard.
            A direct promise, supported by a short explanation, makes it easier
            to decide whether your service is relevant.
          </p>

          <h2>5. Add real proof</h2>
          <p>
            Use genuine reviews, project examples, recognizable client brands
            you have permission to feature, and specific results you can support.
            Place proof close to the moment someone must make a decision.
            Credibility works best when it is relevant and easy to verify.
          </p>

          <h2>6. Shorten your forms</h2>
          <p>
            Ask only for the information needed to start the conversation.
            A name, a reliable contact method, and one useful service question
            may be enough for an initial inquiry. You can gather additional
            details after the person has engaged with your team.
          </p>

          <h2>7. Answer the top objection</h2>
          <p>
            Think about the question that most often stops a customer from
            reaching out. It may be pricing, service availability, timing, or
            what happens after they submit a form. Address that concern with
            clear copy, an FAQ, or an accurate reassurance near your call to
            action.
          </p>

          <h2>8. Guide the eye down one path</h2>
          <p>
            Organize the page in a logical sequence: value proposition,
            services or benefits, relevant proof, common questions, and the
            next step. Reduce competing buttons and distracting visual effects.
            A visitor should be able to scan the page without losing the thread.
          </p>

          <h2>9. Make it flawless on mobile</h2>
          <p>
            Test your most important pages on real phones. Check font sizes,
            button targets, page speed, forms, and fixed elements that may cover
            content. The experience should feel effortless whether someone is
            browsing from a large monitor or a small screen.
          </p>

          <h2>10. Track what is happening</h2>
          <p>
            Measure meaningful actions such as form submissions, qualified
            calls, booked appointments, and completed purchases. Analytics and
            event tracking can show where visitors stop taking the next step.
            Test one improvement at a time and use the results to guide your
            next update.
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
          aria-labelledby="conversion-audit-more-articles"
        >
          <h2 id="conversion-audit-more-articles">MORE ARTICLES</h2>
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
