import Link from 'next/link';
import styles from './blog.module.css';

export const metadata = {
  title: 'Blog — Eroll Oliver',
  description:
    'Thoughts from Eroll Oliver on websites, GoHighLevel, funnels, CRM automation, AI agents, lead generation and digital systems.',
};

const posts = [
  {
    slug: 'gohighlevel-vs-traditional-crm',
    category: 'GOHIGHLEVEL',
    label: 'GHL VS CRM',
    icon: 'ghl',
    date: 'JUL 21, 2026',
    read: '7 MIN READ',
    title:
      'GoHighLevel vs a Traditional CRM: Why Service Businesses Are Switching',
    excerpt:
      'A traditional CRM stores contacts. GoHighLevel runs the whole growth engine. Here is the difference — and when it actually matters for your business.',
  },

  {
    slug: 'local-seo-service-business',
    category: 'SEO',
    label: 'LOCAL SEO',
    icon: 'location',
    date: 'JUL 18, 2026',
    read: '8 MIN READ',
    title:
      'Local SEO: How to Show Up When Nearby Customers Search',
    excerpt:
      'Ranking in your city is a different game than ranking nationally. Here is the practical local SEO playbook I use to help service businesses get found.',
  },

  {
    slug: 'high-converting-landing-page',
    category: 'FUNNELS',
    label: 'LANDING PAGES',
    icon: 'landing',
    date: 'JUL 15, 2026',
    read: '7 MIN READ',
    title:
      '7 Elements Every High-Converting Landing Page Needs',
    excerpt:
      'A landing page has one job: get the visitor to take one action. Here are seven elements I include on every page that consistently converts.',
  },

  {
    slug: 'website-visitors-into-leads',
    category: 'LEAD GENERATION',
    label: 'CAPTURE LEADS',
    icon: 'mail',
    date: 'JUL 11, 2026',
    read: '6 MIN READ',
    title:
      'How to Turn Website Visitors Into Leads (Even the Ones Not Ready to Buy)',
    excerpt:
      'Most of your visitors leave and never come back. Here is how to capture them, nurture the not-yet-ready ones, and turn traffic into a pipeline.',
  },

  {
    slug: 'whatsapp-automation',
    category: 'AUTOMATION',
    label: 'WHATSAPP',
    icon: 'chat',
    date: 'JUL 9, 2026',
    read: '6 MIN READ',
    title:
      'WhatsApp Automation for Business: Never Miss Another Lead',
    excerpt:
      'Your customers already live on WhatsApp. Here is how to automate replies, capture leads and book appointments directly inside the app they check most.',
  },

  {
    slug: 'website-conversion-audit',
    category: 'CONVERSION',
    label: 'CONVERSION AUDIT',
    icon: 'audit',
    date: 'JUL 6, 2026',
    read: '8 MIN READ',
    title:
      'Website Conversion Audit: 10 Quick Wins to Get More Leads This Month',
    excerpt:
      'You do not always need more traffic — often you need your current traffic to convert better. Here are 10 fixes that move the needle fast.',
  },

  {
    slug: 'shopify-launch-checklist',
    category: 'SHOPIFY',
    label: 'SHOPIFY LAUNCH',
    icon: 'shop',
    date: 'JUL 2, 2026',
    read: '8 MIN READ',
    title:
      'The Shopify Launch Checklist I Use on Every Store',
    excerpt:
      'From payments to product pages — the exact pre-launch checklist I run on every Shopify store so it is ready to sell from day one.',
  },

  {
    slug: 'wordpress-shopify-gohighlevel',
    category: 'WORDPRESS',
    label: 'PLATFORM CHOICE',
    icon: 'cube',
    date: 'JUN 24, 2026',
    read: '6 MIN READ',
    title:
      'WordPress vs Shopify vs GoHighLevel: Which Platform Is Right for You?',
    excerpt:
      'Picking the wrong platform means rebuilding later. Here is a plain-English guide to which one fits your business goal.',
  },

  {
    slug: 'wordpress-speed',
    category: 'WORDPRESS',
    label: 'WORDPRESS SPEED',
    icon: 'speed',
    date: 'JUN 15, 2026',
    read: '7 MIN READ',
    title:
      'Why Website Speed Matters (And How I Make WordPress Fly)',
    excerpt:
      'A slow website silently kills your conversions. Here is the exact process I use to make WordPress sites load in under 2 seconds.',
  },

  {
    slug: 'email-sms-follow-up',
    category: 'AUTOMATION',
    label: 'FOLLOW-UP',
    icon: 'flow',
    date: 'JUN 12, 2026',
    read: '7 MIN READ',
    title:
      'Email and SMS Follow-Up: The Money Is in the Sequence',
    excerpt:
      'Most sales happen after the fifth follow-up, but most businesses quit after one. Here is how to build sequences that follow up for you.',
  },

  {
    slug: 'ai-chatbot-vs-live-chat',
    category: 'AI AGENTS',
    label: 'AI CHAT',
    icon: 'messages',
    date: 'MAY 28, 2026',
    read: '6 MIN READ',
    title:
      'AI Chatbot vs Live Chat: Which One Should Your Business Use?',
    excerpt:
      'Both put a chat bubble on your site, but they solve different problems. Here is how to choose — and why the best answer is often both together.',
  },

  {
    slug: 'ghl-missed-call-automation',
    category: 'GOHIGHLEVEL',
    label: 'GHL AUTOMATION',
    icon: 'workflow',
    date: 'MAY 20, 2026',
    read: '6 MIN READ',
    title:
      'How GHL Automation Turns Missed Calls Into Booked Appointments',
    excerpt:
      'Speed-to-lead is everything. Here is how I build GoHighLevel automations that respond to every lead in under 60 seconds.',
  },

  {
    slug: 'cheap-website-cost',
    category: 'WORDPRESS',
    label: 'CHEAP WEBSITE',
    icon: 'browser',
    date: 'MAY 15, 2026',
    read: '7 MIN READ',
    title:
      'The Real Cost of a Cheap Website (And Why It Is Never Actually Cheap)',
    excerpt:
      'A bargain website often becomes the most expensive thing a business buys. Here is what the low price really costs — and how to invest wisely instead.',
  },

  {
    slug: 'ai-agents-sales-assistant',
    category: 'AI AGENTS',
    label: 'AI AGENTS',
    icon: 'robot',
    date: 'APR 10, 2026',
    read: '7 MIN READ',
    title:
      'AI Agents: Your 24/7 Sales Assistant That Never Sleeps',
    excerpt:
      'AI agents can qualify leads, answer questions, and book appointments while you sleep. Here is how I build them into real businesses.',
  },

  {
    slug: 'funnel-vs-website',
    category: 'FUNNELS',
    label: 'FUNNEL VS WEBSITE',
    icon: 'funnel',
    date: 'MAR 25, 2026',
    read: '6 MIN READ',
    title:
      'Funnel vs Website: Which One Does Your Business Actually Need?',
    excerpt:
      'Websites build trust, funnels drive action. Most businesses need both — here is how to know what to build first.',
  },

  {
    slug: 'wordpress-maintenance',
    category: 'WORDPRESS',
    label: 'WORDPRESS CARE',
    icon: 'shield',
    date: 'JAN 18, 2026',
    read: '6 MIN READ',
    title:
      'WordPress Maintenance: Why Sites Break (And How to Keep Yours Safe)',
    excerpt:
      'Hacked sites, white screens, broken layouts after an update — almost all of it is preventable. Here is the maintenance routine that keeps client sites safe.',
  },
];

/* =========================================================
   BLOG GRAPHICS
========================================================= */

function BlogIcon({ type }) {
  if (type === 'location') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M32 8c-11 0-20 8.8-20 19.7C12 43 32 56 32 56s20-13 20-28.3C52 16.8 43 8 32 8Z" />
        <circle cx="32" cy="28" r="10" />
        <path d="m22 28 10-8 10 8-10 15Z" />
      </svg>
    );
  }

  if (type === 'landing') {
    return (
      <svg viewBox="0 0 64 64">
        <rect x="11" y="13" width="42" height="35" rx="2" />
        <path d="M12 24h40" />
        <rect x="20" y="32" width="24" height="8" rx="4" />
      </svg>
    );
  }

  if (type === 'mail') {
    return (
      <svg viewBox="0 0 64 64">
        <rect x="11" y="17" width="42" height="30" rx="3" />
        <path d="m13 20 19 16 19-16" />
        <path d="M45 9v12M39 15h12" />
      </svg>
    );
  }

  if (type === 'chat') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M13 15h38v27H29L18 51v-9h-5Z" />
        <circle cx="24" cy="29" r="2" />
        <circle cx="32" cy="29" r="2" />
        <circle cx="40" cy="29" r="2" />
      </svg>
    );
  }

  if (type === 'audit') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M12 45V30M24 45V22M36 45V34M48 45V16" />
        <path d="M9 13h46" />
      </svg>
    );
  }

  if (type === 'shop') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M15 22h34l-3 31H18Z" />
        <path d="M23 22c0-8 3-12 9-12s9 4 9 12" />
        <path d="m24 37 6 6 12-14" />
      </svg>
    );
  }

  if (type === 'cube') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="m32 8 18 10v28L32 56 14 46V18Z" />
        <path d="m14 18 18 11 18-11M32 29v27" />
        <path d="m22 13 19 11" />
      </svg>
    );
  }

  if (type === 'speed') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M10 43a22 22 0 0 1 44 0" />
        <path d="m32 39 13-17" />
        <circle cx="32" cy="40" r="3" />
        <path d="M15 35h5M44 35h5M32 18v6" />
      </svg>
    );
  }

  if (type === 'flow') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M10 22h44M10 42h44" />
        <circle cx="18" cy="22" r="3" />
        <circle cx="32" cy="42" r="3" />
        <circle cx="47" cy="22" r="3" />
      </svg>
    );
  }

  if (type === 'messages') {
    return (
      <svg viewBox="0 0 64 64">
        <rect x="9" y="15" width="29" height="20" rx="4" />
        <path d="m17 35-7 8v-8" />
        <rect x="28" y="29" width="27" height="17" rx="4" />
        <path d="m48 46 6 7v-7" />
      </svg>
    );
  }

  if (type === 'workflow') {
    return (
      <svg viewBox="0 0 64 64">
        <rect x="8" y="10" width="21" height="14" rx="3" />
        <rect x="35" y="13" width="21" height="14" rx="3" />
        <rect x="21" y="38" width="22" height="14" rx="3" />
        <path d="M29 17h6M45 27v6H32v5M18 24v9h14" />
      </svg>
    );
  }

  if (type === 'browser') {
    return (
      <svg viewBox="0 0 64 64">
        <rect x="9" y="12" width="46" height="38" rx="3" />
        <path d="M9 21h46" />
        <path d="m23 32 18 11M41 32 23 43" />
      </svg>
    );
  }

  if (type === 'robot') {
    return (
      <svg viewBox="0 0 64 64">
        <rect x="12" y="18" width="40" height="33" rx="7" />
        <path d="M32 8v10M25 8h14M5 30h7M52 30h7" />
        <circle cx="24" cy="33" r="3" />
        <circle cx="40" cy="33" r="3" />
        <path d="M25 42h14" />
      </svg>
    );
  }

  if (type === 'funnel') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M8 12h48L39 31v15l-14 7V31Z" />
        <path d="M18 21h28" />
      </svg>
    );
  }

  if (type === 'shield') {
    return (
      <svg viewBox="0 0 64 64">
        <path d="M32 7 52 15v16c0 13-8 21-20 27C20 52 12 44 12 31V15Z" />
        <path d="M29 23a7 7 0 0 1 11 8l-11 12a7 7 0 0 1-10-9l5-6" />
        <path d="m35 36 5-6" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64">
      <circle
        cx="32"
        cy="32"
        r="21"
        strokeDasharray="3 4"
      />

      <path d="m32 17 13 25H19Z" />

      <circle
        cx="32"
        cy="32"
        r="4"
      />
    </svg>
  );
}

/* =========================================================
   SMALL BLOG CARD
========================================================= */

function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={styles.card}
    >
      <div className={styles.visual}>
        <div className={styles.gridLines} />
        <div className={styles.visualCircleTop} />
        <div className={styles.visualCircleBottom} />

        <span className={styles.category}>
          {post.category}
        </span>

        <div className={styles.icon}>
          <BlogIcon type={post.icon} />
        </div>

        <span className={styles.visualLabel}>
          {post.label}
        </span>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <span>{post.date}</span>
          <i />
          <span>{post.read}</span>
        </div>

        <h2>{post.title}</h2>

        <p>{post.excerpt}</p>

        <div className={styles.cardBottom}>
          <div className={styles.author}>
            <span className={styles.avatar}>
              EO
            </span>

            <small>Eroll Oliver</small>
          </div>

          <span className={styles.readLink}>
            Read <b>→</b>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        {/* =====================================================
            INTRO
        ===================================================== */}

        <section className={styles.intro}>
          <p className={styles.eyebrow}>
            <span />
            BLOG
          </p>

          <h1>
            Thoughts on websites, automation &amp; AI
          </h1>

          <p className={styles.subtitle}>
            What I&apos;ve learned building websites and automation
            systems for businesses — written simply, no jargon.
          </p>
        </section>

        {/* =====================================================
            FEATURED BLOG
        ===================================================== */}

        <section className={styles.featuredSection}>
          <Link
            href={`/blog/${featured.slug}`}
            className={styles.featured}
          >
            <div className={styles.featuredVisual}>
              <div className={styles.gridLines} />
              <div className={styles.featureCircleTop} />
              <div className={styles.featureCircleBottom} />

              <span className={styles.category}>
                {featured.category}
              </span>

              <div className={styles.featureIcon}>
                <BlogIcon type={featured.icon} />
              </div>

              <span className={styles.featureLabel}>
                {featured.label}
              </span>
            </div>

            <div className={styles.featureContent}>
              <div className={styles.meta}>
                <span>{featured.date}</span>
                <i />
                <span>{featured.read}</span>
              </div>

              <h2>{featured.title}</h2>

              <p>{featured.excerpt}</p>

              <div className={styles.featureBottom}>
                <div className={styles.author}>
                  <span className={styles.avatar}>
                    EO
                  </span>

                  <small>
                    Eroll Oliver
                  </small>
                </div>

                <span className={styles.readLink}>
                  Read <b>→</b>
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* =====================================================
            BLOG GRID
        ===================================================== */}

        <section className={styles.grid}>
          {rest.map((post) => (
            <BlogCard
              post={post}
              key={post.slug}
            />
          ))}
        </section>
      </div>
    </main>
  );
}