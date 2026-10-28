import styles from "./ExpertiseNetwork.module.css";

const websites = [
  "WordPress Development", "Shopify & eCommerce", "GoHighLevel Funnels",
  "Landing Pages", "Responsive Web Design", "Speed Optimization", "SEO Foundations", "Website Maintenance",
];
const systems = [
  "CRM & Pipeline Setup", "Workflow Automation", "AI Chat Agents", "AI Voice Agents",
  "Email & SMS Follow-ups", "Appointment Booking", "Lead Capture & Nurture", "Platform Integrations",
];

function Connections({ side }) {
  return (
    <svg className={`${styles.connections} ${styles[side]}`} viewBox="0 0 200 400" preserveAspectRatio="none" aria-hidden="true">
      {websites.map((_, index) => {
        const y = 25 + index * 50;
        return <g key={y}>
          <path id={`network-${side}-${index}`} d={`M 0 ${y} C 105 ${y}, 95 200, 200 200`} />
          <circle cx="0" cy={y} r="3" />
          <circle className={styles.particle} r="2.5">
            <animateMotion dur={`${3 + index * .3}s`} begin={`${index * -.7}s`} repeatCount="indefinite" path={`M 0 ${y} C 105 ${y}, 95 200, 200 200`} />
          </circle>
        </g>;
      })}
      <circle cx="198" cy="200" r="4" />
    </svg>
  );
}

export default function ExpertiseNetwork() {
  return (
    <section className={styles.section} aria-labelledby="expertise-network-title">
      <div className="shell">
        <header className={styles.heading}>
          <p className={styles.eyebrow}><span /> THE FULL PICTURE</p>
          <h2 id="expertise-network-title">Your website. Your systems.<br /><span>Connected by one expert.</span></h2>
          <p>I bring design, development, and intelligent automation together to help your business work smarter.</p>
        </header>

        <div className={styles.network}>
          <div className={`${styles.branch} ${styles.websites}`}>
            <h3>WEBSITES &amp; DIGITAL EXPERIENCES</h3>
            <ul>{websites.map(item => <li key={item}><span>{item}</span><i /></li>)}</ul>
          </div>
          <Connections side="left" />
          <figure className={styles.identity}>
            <div className={styles.orbit} aria-hidden="true"><span /></div>
            <div className={styles.portrait}>
              <img src="/images/eroll-brain.png" alt="Eroll Oliver with a cybernetic face surrounded by digital rings" width="1254" height="1254" />
            </div>
            <figcaption><strong>Eroll Oliver</strong><span>DEVELOPER · AUTOMATION SPECIALIST</span></figcaption>
          </figure>
          <Connections side="right" />
          <div className={`${styles.branch} ${styles.systems}`}>
            <h3>AUTOMATION &amp; AI SYSTEMS</h3>
            <ul>{systems.map(item => <li key={item}><i /><span>{item}</span></li>)}</ul>
          </div>
        </div>

        <div className={styles.outcomes}>
          <svg viewBox="0 0 520 90" preserveAspectRatio="none" aria-hidden="true"><path d="M260 0 C260 48 130 35 130 90 M260 0 C260 48 390 35 390 90" /><circle cx="260" cy="1" r="3" /></svg>
          <div className={styles.outcome}><span>01 / STRATEGY</span><h3>Built with purpose.</h3><p>A clear plan around your business, your audience, and your goals.</p></div>
          <div className={styles.outcome}><span>02 / EXECUTION</span><h3>Connected to perform.</h3><p>Websites that convert. Automations that keep your business moving.</p></div>
        </div>
      </div>
    </section>
  );
}
