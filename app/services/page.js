import Link from 'next/link';
import styles from './services.module.css';

export const metadata = {
  title: 'Services — Eroll Oliver',
};

const services = [
  {
    number: '01',
    title: 'WordPress Development',
    description:
      'I design and develop custom WordPress websites that load fast, rank well, and convert visitors into customers. From landing pages to full business sites — custom themes, plugin configuration, speed optimization, and on-page SEO are all part of the package.',
    features: [
      'Custom theme design & development',
      'Speed & Core Web Vitals optimization',
      'SEO-friendly structure',
      'Responsive on every device',
      'Elementor / page-builder expertise',
    ],
  },

  {
    number: '02',
    title: 'GHL CRM & Automation',
    description:
      'As a GoHighLevel expert, I build complete CRM systems: pipelines, calendars, SMS/email follow-up sequences, and automations that capture, nurture, and convert leads on autopilot — so your team can focus on closing.',
    features: [
      'Full GHL account setup & snapshots',
      'Sales pipelines & opportunity tracking',
      'Automated SMS / email follow-ups',
      'Appointment booking & reminders',
      'Reporting dashboards',
    ],
  },

  {
    number: '03',
    title: 'Funnel Building & Optimization',
    description:
      'I build and optimize sales funnels — landing pages, upsells, order forms, and thank-you flows — with tracking wired in, then iterate on copy and layout to increase conversion rates.',
    features: [
      'Landing page design',
      'A/B-ready funnel structures',
      'Upsell / downsell flows',
      'Conversion tracking & pixels',
      'Copy & layout optimization',
    ],
  },

  {
    number: '04',
    title: 'AI Agents & Workflows',
    description:
      'I develop intelligent automation workflows powered by AI agents — conversation bots that qualify leads, book appointments, and answer FAQs around the clock, integrated directly into your CRM.',
    features: [
      'AI conversation bots for lead qualification',
      '24/7 automated responses',
      'Appointment-booking agents',
      'CRM-integrated workflows',
      'Custom automation logic',
    ],
  },

  {
    number: '05',
    title: 'Shopify Store Setup',
    description:
      'From theme customization to product setup, payments and apps — I build Shopify stores that look professional and are optimized to sell from day one.',
    features: [
      'Theme setup & customization',
      'Product & collection setup',
      'Payments & shipping configuration',
      'App integration',
      'Conversion-focused layout',
    ],
  },

  {
    number: '06',
    title: 'Lead Generation Systems',
    description:
      'Website + funnel + CRM + automation, working together as one machine. I connect every piece so no lead falls through the cracks — capture forms, instant follow-up, nurturing sequences, and clear reporting.',
    features: [
      'Lead capture forms & pop-ups',
      'Instant speed-to-lead follow-up',
      'Nurture sequences',
      'Pipeline visibility',
      'ROI reporting',
    ],
  },
];

const process = [
  {
    step: 'Step 1',
    title: 'Discover',
    description:
      'We talk about your business, goals and what success looks like.',
  },

  {
    step: 'Step 2',
    title: 'Design & Build',
    description:
      'I design and develop your site, funnel or CRM system — fast and clean.',
  },

  {
    step: 'Step 3',
    title: 'Automate',
    description:
      'Follow-ups, booking, AI agents — everything wired to work while you sleep.',
  },

  {
    step: 'Step 4',
    title: 'Launch & Grow',
    description:
      'We launch, measure and keep optimizing for more conversions.',
  },
];

export default function ServicesPage() {
  return (
    <main className={styles.servicesPage}>
      <div className={styles.container}>
        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={styles.hero}>
          <p className={styles.eyebrow}>
            <span />
            Services
          </p>

          <h1>
            Everything your business needs to convert online
          </h1>

          <p className={styles.heroDescription}>
            Each service can stand alone — but they&apos;re built to work
            together as one lead-generating machine: website, funnel,
            CRM, and AI automation.
          </p>
        </section>

        {/* =====================================================
            SERVICES
        ===================================================== */}

        <section className={styles.servicesList}>
          {services.map((service) => (
            <article
              className={styles.serviceCard}
              key={service.number}
            >
              <div className={styles.serviceNumber}>
                {service.number}
              </div>

              <div className={styles.serviceMain}>
                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <div className={styles.serviceActions}>
                  <Link
                    href="/contact"
                    className={styles.quoteButton}
                  >
                    Get a quote
                    <span>↗</span>
                  </Link>

                  <Link
                    href="/pricing"
                    className={styles.pricingButton}
                  >
                    See pricing
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className={styles.serviceFeatures}>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>

        {/* =====================================================
            PROCESS
        ===================================================== */}

        <section className={styles.processSection}>
          <div className={styles.processHeading}>
            <p className={styles.eyebrow}>
              <span />
              How I work
            </p>

            <h2>
              A simple, transparent process
            </h2>
          </div>

          <div className={styles.processGrid}>
            {process.map((item) => (
              <article
                className={styles.processCard}
                key={item.step}
              >
                <span className={styles.processStep}>
                  {item.step}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}