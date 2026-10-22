import Link from "next/link";
import styles from "./article.module.css";

/* =========================================================
   EROLL OLIVER - LANDING PAGE ARTICLE
   URL: /blog/high-converting-landing-page

   Uses the same responsive editorial design as the
   GoHighLevel and Local SEO articles.
   Header and Footer come from app/layout.js.
========================================================= */

export const metadata = {
  title: "7 Elements Every High-Converting Landing Page Needs | Eroll Oliver",
  description:
    "Learn seven essential elements of an effective landing page: a clear headline, focused offer, trust signals, calls to action, benefits, objections, and mobile speed.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title:
      "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "Understand how CRM automation helps service businesses manage inquiries and follow up with leads.",
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
      "Practical ways to make your business easier to discover when nearby customers search.",
    date: "JUL 18, 2026",
    read: "8 MIN READ",
    category: "SEO",
    label: "LOCAL SEO",
    icon: "location",
  },
  {
    slug: "website-visitors-into-leads",
    title:
      "How to Turn Website Visitors Into Leads (Even the Ones Not Ready to Buy)",
    description:
      "Make your website more effective at capturing interest and guiding visitors to the next step.",
    date: "JUL 11, 2026",
    read: "6 MIN READ",
    category: "LEAD GENERATION",
    label: "CAPTURE LEADS",
    icon: "mail",
  },
];

/* =========================================================
   RELATED-ARTICLE ICONS
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
      <rect x="7" y="12" width="34" height="25" rx="4" />
      <path d="m8 15 16 13 16-13M24 7v5M20 8l4-4 4 4" />
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
   MAIN ARTICLE PAGE
========================================================= */

export default function HighConvertingLandingPageArticle() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* BACK TO BLOG */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">←</span> BACK TO BLOG
        </Link>

        {/* ARTICLE HEADER */}
        <header className={styles.header}>
          <h1>7 Elements Every High-Converting Landing Page Needs</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-07-15">JULY 15, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>7 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>Funnels</span>
            <span>Landing Pages</span>
            <span>Conversion</span>
            <span>Copywriting</span>
          </div>
        </header>

        {/* EXISTING LANDING-PAGES ARTWORK */}
        <figure className={styles.featuredImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/blog/landing-pages.svg"
            alt="Dark landing pages graphic featuring a website card illustration"
            width={1200}
            height={620}
            loading="eager"
          />
        </figure>

        {/* ARTICLE CONTENT */}
        <div className={styles.prose}>
          <p>
            A landing page is not just another page on your website. It is a
            focused experience built around one action: booking an appointment,
            requesting a quote, signing up, or purchasing an offer. When every
            section supports that action, visitors spend less time figuring out
            what to do next and more time deciding whether you are the right fit.
          </p>
          <p>
            Here are seven elements I look for when planning or improving a
            landing page for a service business, online store, or marketing
            campaign.
          </p>

          <h2>1. A headline that speaks to one outcome</h2>
          <p>
            Your headline should quickly answer the visitor's most important
            question: "What will I get here?" Lead with a specific result or
            clear benefit rather than a generic statement about your company.
            Pair it with a short supporting line that explains who the offer is
            for and why it matters. Visitors should understand the page before
            they even begin scrolling.
          </p>

          <h2>2. One offer, zero distractions</h2>
          <p>
            A landing page works best when it gives people one primary path.
            Remove links, menus, and competing calls to action that pull
            visitors away from the offer. If the goal is to book a consultation,
            make that step obvious. You can still explain your service in depth,
            but every section should make the main decision easier rather
            than introduce another one.
          </p>

          <h2>3. Proof they can trust</h2>
          <p>
            Strong claims need support. Relevant testimonials, real client
            results, case studies, recognizable brands, reviews, and examples
            of your work help visitors judge whether you can deliver. Choose
            proof that relates directly to the offer, and only display claims
            you can verify. Authentic evidence is more persuasive than a long
            list of generic promises.
          </p>

          <h2>4. A clear, repeated call to action</h2>
          <p>
            Make the next step easy to recognize and easy to complete. Use
            straightforward button language like "Book a Call" or "Get a
            Quote" so visitors know what happens when they click. Place a
            clear call to action near the top of the page and repeat it after
            important supporting sections, especially on longer pages.
          </p>

          <h2>5. Benefits, not features</h2>
          <p>
            Features explain what a product or service includes. Benefits
            explain why someone should care. Instead of only listing "automated
            SMS follow-ups," explain that customers can receive timely replies
            even when your team is busy. Show how each feature saves time,
            reduces friction, improves clarity, or helps customers reach the
            result they want.
          </p>

          <h2>6. Handle the obvious objection</h2>
          <p>
            Before someone commits, they may wonder about pricing, timing,
            requirements, risk, or what happens next. Answer those questions
            before they become reasons to leave. A concise FAQ, transparent
            process, clear scope, and honest expectations can reduce hesitation
            without resorting to unnecessary pressure or exaggerated guarantees.
          </p>

          <h2>7. Built for mobile and speed</h2>
          <p>
            Many visitors will see your landing page on a phone. Keep text
            readable, forms manageable, buttons large enough to tap, and page
            sections easy to scan. Compress large images, avoid unnecessary
            scripts, and test loading performance on a real mobile connection.
            Even persuasive copy will struggle if the page is slow or awkward
            to use.
          </p>

          <p>
            The best landing pages combine a clear message, believable proof,
            and a low-friction next step. Start with these fundamentals, then
            improve the page using real visitor behaviour and conversion data.
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
          aria-labelledby="landing-page-more-articles"
        >
          <h2 id="landing-page-more-articles">MORE ARTICLES</h2>

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
