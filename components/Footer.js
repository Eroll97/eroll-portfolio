import Link from "next/link";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Pricing", "/pricing"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">

        <div>
          <div className="footer-brand">
            EROLL<span>.</span>
          </div>

          <p>
            AI Automation Engineer & GoHighLevel Specialist building websites,
            funnels, AI agents, CRM systems, and intelligent automation workflows.
          </p>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/eroll-oliver-20009b290/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
          </div>
        </div>

        <div>
          <div className="footer-label">Navigate</div>

          <ul>
            {nav.map(([label, href]) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="footer-label">Get in touch</div>

          <ul className="contact-list">
            <li>
              <a href="mailto:erolloliver97@gmail.com">
                erolloliver97@gmail.com
              </a>
            </li>

            <li>
              <a href="tel:+639277937650">
                +63 927 793 7650
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/eroll-oliver-20009b290/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
  href="/Eroll-CV.pdf"
  download="Eroll-Oliver-CV.pdf"
  aria-label="Download Eroll Oliver Resume"
>
  <u>Download Resume</u>
</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="shell footer-bottom">
        <p>© 2026 Eroll Oliver. All rights reserved.</p>
        <p>GoHighLevel · AI Agents · Funnels · CRM Automation</p>
      </div>
    </footer>
  );
}