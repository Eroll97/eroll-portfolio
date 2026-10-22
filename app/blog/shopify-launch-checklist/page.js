import Link from "next/link";
import styles from "./article.module.css";

/* ========================================================
   EROLL OLIVER - SHOPIFY LAUNCH CHECKLIST BLOG POST
   Route: /blog/shopify-launch-checklist
   Header and Footer already come from app/layout.js.
======================================================== */

export const metadata = {
  title: "The Shopify Launch Checklist I Use on Every Store | Eroll Oliver",
  description:
    "A practical Shopify launch checklist covering store design, product pages, payments, shipping, tracking, and final pre-launch checks.",
};

const relatedPosts = [
  {
    slug: "gohighlevel-vs-traditional-crm",
    title: "GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching",
    description:
      "A traditional CRM organizes contacts. Explore what changes when follow-ups, bookings, and marketing work together.",
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
      "Learn how a local business can show up when nearby customers search for its services.",
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
      "Seven practical design and messaging elements that make it easier for visitors to take action.",
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
            Read <span aria-hidden="true">-&gt;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ShopifyLaunchChecklistArticle() {
  return (
    <div className={styles.page}>
      <div className={styles.pageGlow} aria-hidden="true" />
      <article className={styles.article}>
        <Link href="/blog" className={styles.backLink}>
          <span aria-hidden="true">&larr;</span> BACK TO BLOG
        </Link>

        <header className={styles.header}>
          <h1>The Shopify Launch Checklist I Use on Every Store</h1>
          <div className={styles.authorLine}>
            <div className={styles.authorBlock}>
              <span className={styles.authorAvatar} aria-hidden="true">EO</span>
              <div>
                <strong>Eroll Oliver</strong>
                <small>WordPress Developer &amp; GHL Expert</small>
              </div>
            </div>
            <span className={styles.authorDivider} aria-hidden="true" />
            <time dateTime="2026-07-02">JULY 2, 2026</time>
            <span className={styles.authorDividerShort} aria-hidden="true" />
            <span>8 MIN READ</span>
          </div>
          <div className={styles.tags} aria-label="Article topics">
            <span>Shopify</span>
            <span>E-commerce</span>
            <span>Checklist</span>
            <span>Conversion</span>
          </div>
        </header>

        {/* Graphic is drawn directly in JSX, so no image upload is required. */}
        <figure
          className={styles.featuredImage}
          role="img"
          aria-label="Shopify launch checklist illustration: shopping bag with check mark on a dark grid"
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
              <path d="M11 26h58l-5 45H16l-5-45Z" />
              <path d="M26 26v-5a14 14 0 0 1 28 0v5" />
              <path d="m27 48 9 9 19-20" />
            </svg>
            <span className={styles.featureLabel}>SHOPIFY LAUNCH</span>
          </div>
        </figure>

        <div className={styles.prose}>
          <p>
            A Shopify store needs more than attractive product photos to be ready
            for customers. Broken shipping rates, missing policies, unclear
            product information, and unexpected checkout fees can all turn an
            interested shopper away. Before launching a new store, it helps to
            check the entire customer journey instead of only the homepage.
          </p>
          <p>
            This is the practical checklist I use to review a Shopify launch,
            from the first impression to the order confirmation email.
          </p>

          <h2>1. Foundation: theme, navigation, branding</h2>
          <p>
            Start with a fast, responsive theme that supports your products
            rather than distracting from them. Use a consistent logo, color
            palette, typography, and spacing. Make the menu easy to scan, with
            clear collections, search, cart, and contact links. Check the footer
            for customer support information, FAQs, and essential policies.
            Visitors should understand what you sell and where to go within a
            few seconds of landing on the store.
          </p>

          <h2>2. Product pages that actually sell</h2>
          <p>
            Give every product clear images, useful descriptions, accurate
            pricing, and straightforward options. Describe what the product
            does for the buyer, not just its specifications. Show variants,
            sizing or dimensions, availability, shipping expectations, and
            return information close to the Add to Cart button. If you display
            ratings or testimonials, use genuine customer feedback rather than
            made-up proof.
          </p>

          <h2>3. Payments, shipping and taxes</h2>
          <p>
            Place several test orders before going live. Check the payment
            methods you plan to accept, including any local options relevant
            to your market. Verify shipping zones, delivery estimates, free
            shipping thresholds, and pickup settings. Review tax configuration
            for the regions where you sell. Finally, test refunds, order
            confirmation emails, and the whole checkout experience on both
            desktop and mobile devices.
          </p>

          <h2>4. The apps that earn their keep</h2>
          <p>
            It is tempting to add an app for every feature, but unnecessary
            apps can complicate maintenance and affect performance. Begin with
            tools that solve a clear customer or business problem, such as
            reviews, email capture, abandoned-cart recovery, or customer support.
            Check permissions, subscription costs, and storefront scripts.
            Remove overlapping apps and test the storefront after installing
            anything new.
          </p>

          <h2>5. Analytics and tracking</h2>
          <p>
            Set up the analytics and ad-platform tracking you actually need,
            then check whether purchases, add-to-cart events, and key funnel
            steps are recorded correctly. Confirm that your privacy notices
            and consent settings match the tracking technologies in use and the
            markets you serve. Tracking only becomes useful when the data is
            accurate enough to guide decisions after launch.
          </p>

          <h2>6. Launch-day checks</h2>
          <p>
            Open your store on a real phone and click through every major
            page. Check loading speed, images, menus, buttons, and form fields.
            Remove test content, verify contact details, and check every policy
            link. Place one final test order, review the customer emails, and
            verify that orders appear correctly in your admin dashboard. After
            launch, monitor the first real customer journeys for issues that
            may not have appeared during testing.
          </p>

          <p>
            A thoughtful launch checklist cannot guarantee sales, but it does
            give customers a clearer and more reliable shopping experience.
            Fixing these details before launch is usually easier than dealing
            with confused customers and abandoned checkouts afterward.
          </p>
        </div>

        <aside className={styles.cta} aria-label="Work with Eroll Oliver">
          <h2>Need help with your website or automation?</h2>
          <p>
            I build online stores, websites, and connected systems designed
            around your business.
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
          aria-labelledby="shopify-more-articles"
        >
          <h2 id="shopify-more-articles">MORE ARTICLES</h2>
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
