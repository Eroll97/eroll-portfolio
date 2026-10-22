import Link from "next/link";
import styles from "./article.module.css";

/* =========================================================
   EROLL OLIVER - LOCAL SEO BLOG ARTICLE
   URL: /blog/local-seo-service-business
   Uses the same editorial style as the GoHighLevel article.
   Shared Header and Footer come from app/layout.js.
========================================================= */

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "See how connected CRM tools and follow-up workflows can help service businesses respond faster.",
    date: "JUL 21, 2026",
    read: "7 MIN READ",
    category: "GOHIGHLEVEL",
    label: "GHL VS CRM",
    icon: "ghl",
  },
  {
    slug: "high-converting-landing-page",
    title: "7 Elements Every High-Converting Landing Page Needs",
    description:
      "A focused landing page gives visitors one clear next step. Here are the essentials.",
    date: "JUL 15, 2026",
    read: "7 MIN READ",
    category: "FUNNELS",
    label: "LANDING PAGES",
    icon: "page",
  },
  {
    slug: "website-visitors-into-leads",
    title: "How to Turn Website Visitors Into Leads (Even the Ones Not Ready to Buy)",
    description:
      "Make it easier to capture interest and follow up with people who are not ready yet.",
    date: "JUL 11, 2026",
    read: "6 MIN READ",
    category: "LEAD GENERATION",
    label: "CAPTURE LEADS",
    icon: "mail",
  },
];

export const metadata = {
  title: "Local SEO: How to Show Up When Nearby Customers Search | Eroll Oliver",
  description:
    "A practical local SEO guide for service businesses, covering Google Business Profile, service areas, mobile performance, local search visibility, and reviews.",
};

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
          <span className={styles.metaDash} />
          <span>{post.read}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <div className={styles.relatedFooter}>
          <span className={styles.miniAvatar}>EO</span>
          <span>Eroll Oliver</span>
          <span className={styles.readArrow}>Read <span aria-hidden="true">→</span></span>
        </div>
      </div>
    </Link>
  );
}

export default function LocalSEOArticlePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />

      <article className={styles.article}>
        {/* BACK LINK */}
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">←</span> BACK TO BLOG
        </Link>

        {/* ARTICLE HEADER */}
        <header className={styles.header}>
          <h1>Local SEO: How to Show Up When Nearby Customers Search</h1>

          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-07-18">JULY 18, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>8 MIN READ</span>
          </div>

          <div className={styles.tags} aria-label="Article topics">
            <span>SEO</span>
            <span>Local SEO</span>
            <span>WordPress</span>
            <span>Lead Generation</span>
          </div>
        </header>

        {/* FEATURED ARTWORK - REUSES YOUR EXISTING ASSET */}
        <figure className={styles.featuredImage}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/blog/local-seo.svg"
            alt="Local SEO article cover with a location and search theme"
            width={1200}
            height={620}
            loading="eager"
          />
        </figure>

        {/* ARTICLE BODY */}
        <div className={styles.prose}>
          <p>
            When someone searches for a plumber, dentist, cleaning service, or
            another business near them, search results often highlight local
            businesses on a map. That makes local SEO different from trying to
            rank for a broad national keyword: the goal is to help people in
            your actual service area discover and trust your business.
          </p>
          <p>
            You do not need to reach everyone on the internet. You need to
            appear for the right searches, in the places you serve, with
            information that makes it easy to call, book, or request a quote.
            Here are the fundamentals I would prioritize.
          </p>

          <h2>Start with your Google Business Profile</h2>
          <p>
            Your Google Business Profile is one of the most visible parts of
            your local search presence. Check that your business name, primary
            category, phone number, website, service areas, and opening hours
            are accurate. Choose categories that describe what you actually
            do, not every service you might offer in the future.
          </p>
          <p>
            Add useful photos, keep your hours current, and respond to genuine
            customer reviews. If you serve customers at their location rather
            than at a storefront, configure your service-area information
            accordingly. Consistent, honest details help customers know what
            to expect before they contact you.
          </p>

          <h2>Make your website say where you work</h2>
          <p>
            Search engines and customers both need to understand your service
            area. Mention your city and relevant nearby locations naturally in
            page titles, headings, service descriptions, and contact details.
            Your main service pages should explain the work you do, who it is
            for, and where you can provide it.
          </p>
          <p>
            For businesses covering several locations, a useful local landing
            page can explain the services, availability, and details specific
            to each area. Avoid creating dozens of nearly identical pages with
            only the city name changed. Original, helpful information gives
            each page a real reason to exist.
          </p>

          <h2>Technical basics that quietly matter</h2>
          <p>
            A local visitor is often searching on a phone and wants an answer
            quickly. Your website should load reliably, work on small screens,
            and make its main contact action easy to find. Large images,
            complicated menus, and broken forms can cost inquiries before
            the visitor even reaches your services.
          </p>
          <p>
            Check that the site uses HTTPS, has readable page titles,
            and allows important pages to be indexed. Keep your business name,
            address where appropriate, and phone information consistent across
            the places you manage. Structured data may help search engines
            interpret your business details, but it cannot replace clear
            content and accurate information.
          </p>

          <h2>Reviews and content are the long game</h2>
          <p>
            Trust is built over time. Invite real customers to leave honest
            feedback and reply professionally to reviews, including the
            difficult ones. Helpful articles can also answer the questions
            customers ask before booking: costs, timelines, preparation,
            service differences, and what happens next.
          </p>
          <p>
            Consistency matters more than publishing for the sake of it.
            Keep your key pages updated, measure calls and form inquiries,
            and look at which local searches are bringing qualified visitors.
            The best local SEO strategy connects visibility with a website
            that makes the next step easy.
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

        {/* RELATED POSTS */}
        <section className={styles.moreArticles} aria-labelledby="local-seo-more-articles">
          <h2 id="local-seo-more-articles">MORE ARTICLES</h2>
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
