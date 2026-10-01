import styles from './pricing.module.css';

export const metadata = {
  title: 'Pricing — Eroll Oliver',
};

const plans = [
  {
    label: 'Package',
    name: 'Starter',
    price: '$150',
    description: 'Simple website or funnel foundation',
  },
  {
    label: 'Popular',
    name: 'Business',
    price: '$450',
    description: 'Expanded build with conversion and automation',
    featured: true,
  },
  {
    label: 'Package',
    name: 'Complete',
    price: '$900',
    description: 'Website, funnels, CRM and advanced workflows',
  },
];

export default function Pricing() {
  return (
    <main className={`${styles.pricingPage} page-wrap shell`}>
      <div className={styles.pageHeading}>
        <p className="eyebrow">
          <span />
          Pricing
        </p>

        <h1>Simple packages. Clear starting points.</h1>

        <p>
          Placeholder pricing retained only for the replica phase. Replace
          scope, currency and deliverables before publishing.
        </p>
      </div>

      <div className={styles.pricingGrid}>
        {plans.map((plan) => (
          <article
            className={`${styles.priceCard} ${
              plan.featured ? styles.featured : ''
            }`}
            key={plan.name}
          >
            <span className={styles.packageLabel}>{plan.label}</span>

            <h2>{plan.name}</h2>

            <strong>{plan.price}</strong>

            <p>{plan.description}</p>

            <ul>
              <li>Responsive design</li>
              <li>Lead capture setup</li>
              <li>Performance QA</li>
              <li>Launch support</li>
            </ul>

            <a href="/contact" className="btn-solid">
              Get started
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}