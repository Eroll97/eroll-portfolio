"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ExpertiseNetwork.module.css";

const websites = [
  "WordPress Development", "Shopify & eCommerce", "GoHighLevel Funnels",
  "Landing Pages", "Responsive Web Design", "Speed Optimization", "SEO Foundations", "Website Maintenance",
];
const systems = [
  "CRM & Pipeline Setup", "Workflow Automation", "AI Chat Agents", "AI Voice Agents",
  "Email & SMS Follow-ups", "Appointment Booking", "Lead Capture & Nurture", "Platform Integrations",
];

function Connections({ diagramRef }) {
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    const diagram = diagramRef.current;
    if (!diagram) return;
    let disposed = false;
    let frame;
    const measure = () => {
      if (disposed || !diagram.isConnected) return;
      const bounds = diagram.getBoundingClientRect();
      const portrait = diagram.querySelector('[data-portrait]').getBoundingClientRect();
      const caption = diagram.querySelector('figcaption').getBoundingClientRect();
      const centerX = portrait.left + portrait.width / 2 - bounds.left;
      const centerY = portrait.top + portrait.height / 2 - bounds.top;
      const sourceY = portrait.bottom - bounds.top;
      const forkY = caption.bottom - bounds.top + 18;
      const next = [];

      diagram.querySelectorAll('[data-branch]').forEach(branch => {
        const side = branch.dataset.branch;
        const targetX = (side === 'left' ? portrait.left : portrait.right) - bounds.left;
        branch.querySelectorAll('li i').forEach((dot, index) => {
          const rect = dot.getBoundingClientRect();
          const x = rect.left + rect.width / 2 - bounds.left;
          const y = rect.top + rect.height / 2 - bounds.top;
          const bend = (x + targetX) / 2;
          next.push({ key: `${side}-${index}`, side: true, index,
            d: `M ${x} ${y} C ${bend} ${y}, ${bend} ${centerY}, ${targetX} ${centerY}` });
        });
      });
      diagram.querySelectorAll('[data-outcome]').forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - bounds.left;
        const y = rect.top - bounds.top;
        next.push({ key: `outcome-${index}`, index, side: false,
          d: `M ${centerX} ${sourceY} L ${centerX} ${forkY} C ${centerX} ${forkY + 28}, ${x} ${y - 38}, ${x} ${y}` });
      });
      setPaths(next);
    };
    const schedule = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(diagram);
    diagram.querySelectorAll('[data-portrait], [data-branch], [data-outcome], figcaption').forEach(node => observer.observe(node));
    document.fonts?.ready.then(schedule);
    schedule();
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [diagramRef]);

  return (
    <svg className={styles.connections} aria-hidden="true">
      {paths.map(({ key, d, index, side }) => (
        <g key={key} className={side ? styles.serviceConnection : styles.outcomeConnection}>
          <path d={d} />
          {[0, 1].map(pulse => (
            <g key={pulse} className={styles.particle}>
              <animateMotion dur={side ? '4.8s' : '3.6s'} begin={`${-index * .38 - pulse * (side ? 2.4 : 1.8)}s`} repeatCount="indefinite" path={d} calcMode="paced" />
              <circle className={styles.particleHalo} r={side ? 4 : 7} />
              <circle r={side ? 1.6 : 2.4} />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.08;.88;1" dur={side ? '4.8s' : '3.6s'} begin={`${-index * .38 - pulse * (side ? 2.4 : 1.8)}s`} repeatCount="indefinite" />
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function ExpertiseNetwork() {
  const diagramRef = useRef(null);
  return (
    <section className={styles.section} aria-labelledby="expertise-network-title">
      <div className="shell">
        <header className={styles.heading}>
          <p className={styles.eyebrow}><span /> THE FULL PICTURE</p>
          <h2 id="expertise-network-title">Your website. Your systems.<br /><span>Connected by one expert.</span></h2>
          <p>I bring design, development, and intelligent automation together to help your business work smarter.</p>
        </header>

        <div className={styles.diagram} ref={diagramRef}>
        <Connections diagramRef={diagramRef} />
        <div className={styles.network}>
          <div className={`${styles.branch} ${styles.websites}`} data-branch="left">
            <h3>WEBSITES &amp; DIGITAL EXPERIENCES</h3>
            <ul>{websites.map(item => <li key={item}><span>{item}</span><i /></li>)}</ul>
          </div>
          <figure className={styles.identity}>
            <div className={styles.orbit} aria-hidden="true"><span /></div>
            <div className={styles.portrait} data-portrait>
              <img src="/images/eroll-brain.png" alt="Eroll Oliver with a cybernetic face surrounded by digital rings" width="1254" height="1254" />
            </div>
            <figcaption><strong>Eroll Oliver</strong><span>DEVELOPER · AUTOMATION SPECIALIST</span></figcaption>
          </figure>
          <div className={`${styles.branch} ${styles.systems}`} data-branch="right">
            <h3>AUTOMATION &amp; AI SYSTEMS</h3>
            <ul>{systems.map(item => <li key={item}><i /><span>{item}</span></li>)}</ul>
          </div>
        </div>

        <div className={styles.outcomes}>
          <div className={styles.outcome} data-outcome><i className={styles.cardPort} aria-hidden="true" /><span>01 / STRATEGY</span><h3>Built with purpose.</h3><p>A clear plan around your business, your audience, and your goals.</p></div>
          <div className={styles.outcome} data-outcome><i className={styles.cardPort} aria-hidden="true" /><span>02 / EXECUTION</span><h3>Connected to perform.</h3><p>Websites that convert. Automations that keep your business moving.</p></div>
        </div>
        </div>
      </div>
    </section>
  );
}
