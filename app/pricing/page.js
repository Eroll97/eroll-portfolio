
"use client";

import Link from "next/link";
import { useState } from "react";
import { pricingData } from "../../lib/pricingData";

/* ==========================================
   PORTFOLIO SETTINGS
========================================== */

const BRAND_NAME = "EROLL.";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "PRICING", href: "/pricing" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function PricingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="pricing-page">

      <main>

        {/* ======================================
            PRICING INTRO
        ====================================== */}

        <section className="pricing-intro pricing-container">

          <div className="eyebrow">
            <span className="eyebrow-line" />
            PRICING
          </div>

          <h1>Simple, transparent pricing</h1>

          <p>
            Every platform is priced separately — pick what
            your business needs. All prices are in USD,
            one-time project fees with no hidden costs.
            Need something custom? Get in touch for a
            tailored quote.
          </p>

        </section>

        {/* ======================================
            PLATFORM PRICING SECTIONS
        ====================================== */}

        <div className="pricing-container pricing-sections">

          {pricingData.map((platform) => (

            <section
              className="platform-section"
              id={platform.id}
              key={platform.id}
            >

              {/* PLATFORM HEADING */}

              <div className="platform-heading">

                <div
                  className={`platform-icon platform-icon-${platform.id}`}
                  aria-hidden="true"
                >
                  {platform.icon}
                </div>

                <div>
                  <h2>{platform.name}</h2>
                  <p>{platform.subtitle}</p>
                </div>

              </div>

              {/* PRICING CARDS */}

              <div className="pricing-grid">

                {platform.plans.map((plan) => {

                  const contactUrl =
                    `/contact?service=${encodeURIComponent(platform.name)}` +
                    `&package=${encodeURIComponent(plan.name)}`;

                  return (

                    <article
                      key={plan.name}
                      className={`pricing-card ${
                        plan.popular ? "popular-card" : ""
                      }`}
                    >

                      {/* MOST POPULAR LABEL */}

                      {plan.popular && (
                        <div className="popular-label">
                          MOST POPULAR
                        </div>
                      )}

                      {/* CARD TOP */}

                      <div className="card-top">

                        <h3>{plan.name}</h3>

                        <p className="card-description">
                          {plan.description}
                        </p>

                        <div className="card-price">

                          <span className="price-number">
                            {plan.price}
                          </span>

                          <span className="price-type">
                            {plan.priceType}
                          </span>

                        </div>

                        <div className="plan-tag">
                          {plan.tag}
                        </div>

                      </div>

                      {/* FEATURES */}

                      <ul className="feature-list">

                        {plan.features.map((feature) => (

                          <li key={feature}>

                            <span className="feature-dot" />

                            <span>{feature}</span>

                          </li>

                        ))}

                      </ul>

                      {/* CARD BOTTOM */}

                      <div className="card-bottom">

                        <div className="delivery">
                          {plan.delivery}
                        </div>

                        <Link
                          href={contactUrl}
                          className={`card-button ${
                            plan.popular
                              ? "card-button-primary"
                              : "card-button-outline"
                          }`}
                        >
                          GET STARTED <span>↗</span>
                        </Link>

                      </div>

                    </article>

                  );

                })}

              </div>

            </section>

          ))}

        </div>

        {/* ======================================
            CUSTOM QUOTE SECTION
        ====================================== */}

        <section className="pricing-container custom-quote-wrap">

          <div className="custom-quote">

            <span className="quote-small-label">
              HAVE SOMETHING IN MIND?
            </span>

            <h2>Not sure which package fits?</h2>

            <p>
              Every business is different. Tell me what
              you&apos;re building — I&apos;ll recommend
              the right platform and send you a custom quote
              within 24 hours. Monthly maintenance &amp;
              support plans are also available.
            </p>

            <Link
              href="/contact?request=custom-quote"
              className="quote-button"
            >
              GET A CUSTOM QUOTE <span>↗</span>
            </Link>

          </div>

        </section>

      </main>

      {/* ======================================
          FOOTER
      ====================================== */}

      <footer className="pricing-footer">

        <div className="pricing-container">

          <div className="footer-main">

            {/* FOOTER BRAND */}

            <div className="footer-brand">

              <Link href="/" className="footer-logo">
                {BRAND_NAME}
              </Link>

              <p>
                WordPress Developer &amp; GHL Expert
                building fast websites and intelligent
                automation systems that convert.
              </p>

              <Link
                href="/contact"
                className="footer-outline-link"
              >
                LET&apos;S WORK TOGETHER ↗
              </Link>

            </div>

            {/* FOOTER NAVIGATION */}

            <div className="footer-links">

              <h4>NAVIGATE</h4>

              <div className="footer-nav-grid">

                {NAV_LINKS.map((item) => (

                  <Link
                    href={item.href}
                    key={item.label}
                  >
                    {item.label.charAt(0) +
                      item.label.slice(1).toLowerCase()}
                  </Link>

                ))}

              </div>

            </div>

            {/* FOOTER CONTACT */}

            <div className="footer-contact">

              <h4>GET IN TOUCH</h4>

              <Link href="/contact">
                Send me a message ↗
              </Link>

              <p>
                Available for remote projects worldwide
              </p>

              <Link
                href="/portfolio"
                className="portfolio-link"
              >
                View my work ↗
              </Link>

            </div>

          </div>

          {/* FOOTER COPYRIGHT */}

          <div className="footer-bottom">

            <span>
              © {new Date().getFullYear()} {BRAND_NAME}
              All rights reserved.
            </span>

            <span>
              WordPress · Shopify · GHL · AI Automation
            </span>

          </div>

        </div>

      </footer>

      {/* ======================================
          COMPLETE PAGE CSS
      ====================================== */}

      <style jsx>{`

        /* =====================================
           BASE
        ===================================== */

        .pricing-page {
          --bg: #090909;
          --surface: #141414;
          --surface-hover: #191919;
          --border: #282828;
          --text: #f4f4f4;
          --muted: #969696;
          --faint: #626262;

          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .pricing-page * {
          box-sizing: border-box;
        }

        .pricing-page a {
          text-decoration: none;
        }

        .pricing-container {
          width: min(100% - 64px, 1140px);
          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================
           HEADER
        ===================================== */

        .pricing-header {
          width: 100%;
          height: 78px;
          position: relative;
          z-index: 20;
          border-bottom: 1px solid #151515;
          background: rgba(9, 9, 9, 0.97);
        }

        .header-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .brand {
          color: #ffffff;
          font-size: 19px;
          font-weight: 900;
          letter-spacing: -1.1px;
          white-space: nowrap;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 27px;
        }

        .desktop-nav a {
          position: relative;
          font-size: 10px;
          color: #888888;
          letter-spacing: 1.1px;
          font-weight: 700;
          transition: color 0.25s ease;
          white-space: nowrap;
        }

        .desktop-nav a:hover,
        .desktop-nav a.nav-active {
          color: #ffffff;
        }

        .desktop-nav a.nav-active::after {
          content: "";
          position: absolute;
          bottom: -9px;
          left: 0;
          width: 100%;
          height: 1px;
          background: #eeeeee;
        }

        .hire-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          padding: 10px 18px;
          border: 1px solid #3a3a3a;
          border-radius: 30px;
          color: #ffffff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
          transition: 0.25s ease;
        }

        .hire-button:hover {
          background: #ffffff;
          color: #111111;
          border-color: #ffffff;
        }

        .hire-button span {
          font-size: 14px;
        }

        .menu-toggle,
        .mobile-nav {
          display: none;
        }

        /* =====================================
           INTRO SECTION
        ===================================== */

        .pricing-intro {
          padding-top: 94px;
          padding-bottom: 78px;
          position: relative;
        }

        .pricing-intro::before {
          content: "";
          position: absolute;
          width: 440px;
          height: 360px;
          left: -220px;
          top: 0;
          pointer-events: none;
          background: radial-gradient(
            circle,
            rgba(80, 80, 80, 0.11),
            transparent 70%
          );
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #777777;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 20px;
        }

        .eyebrow-line {
          height: 1px;
          width: 31px;
          background: #747474;
        }

        .pricing-intro h1 {
          margin: 0 0 19px;
          font-size: clamp(33px, 4.5vw, 48px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -1.9px;
          color: #f8f8f8;
        }

        .pricing-intro p {
          margin: 0;
          max-width: 590px;
          color: #a3a3a3;
          font-size: 14px;
          line-height: 1.85;
        }

        /* =====================================
           PLATFORM SECTIONS
        ===================================== */

        .pricing-sections {
          display: flex;
          flex-direction: column;
          gap: 95px;
        }

        .platform-section {
          scroll-margin-top: 100px;
        }

        .platform-heading {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 30px;
        }

        .platform-icon {
          width: 38px;
          height: 38px;
          min-width: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          font-size: 21px;
          font-weight: 900;
          border: 1px solid #272727;
          background: #181818;
          letter-spacing: -1px;
        }

        .platform-icon-wordpress {
          color: #28a6c6;
          font-family: Georgia, serif;
          border-radius: 10px;
        }

        .platform-icon-shopify {
          color: #80c547;
          font-style: italic;
        }

        .platform-icon-gohighlevel {
          color: #1395cf;
          font-size: 19px;
        }

        .platform-heading h2 {
          margin: 0 0 5px;
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .platform-heading p {
          margin: 0;
          color: #777777;
          font-size: 11.5px;
          line-height: 1.6;
        }

        /* =====================================
           PRICING GRID
        ===================================== */

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          align-items: stretch;
        }

        .pricing-card {
          display: flex;
          flex-direction: column;
          position: relative;
          min-width: 0;
          min-height: 486px;
          padding: 27px 25px 24px;
          border: 1px solid #262626;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            #171717 0%,
            #121212 100%
          );
          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          border-color: #575757;
          background: #1a1a1a;
        }

        .popular-card {
          border-color: #666666;
          background: #1c1c1c;
        }

        .popular-card:hover {
          border-color: #eeeeee;
        }

        .popular-label {
          position: absolute;
          top: -12px;
          left: 25px;
          padding: 5px 12px;
          border-radius: 20px;
          color: #101010;
          background: #ffffff;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.5px;
          box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
        }

        /* =====================================
           CARD TEXT
        ===================================== */

        .card-top h3 {
          margin: 0 0 10px;
          color: #f4f4f4;
          font-size: 17px;
          font-weight: 800;
          letter-spacing: -0.35px;
          line-height: 1.35;
        }

        .card-description {
          margin: 0;
          min-height: 54px;
          color: #969696;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =====================================
           PRICE
        ===================================== */

        .card-price {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 25px;
          margin-bottom: 9px;
        }

        .price-number {
          color: #f5f5f5;
          font-size: clamp(32px, 3vw, 39px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1;
        }

        .price-type {
          color: #777777;
          font-size: 9px;
          letter-spacing: 1.1px;
          font-weight: 800;
        }

        .plan-tag {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          width: fit-content;
          padding: 5px 10px;
          border: 1px solid #353535;
          border-radius: 20px;
          color: #a3a3a3;
          font-size: 10px;
          line-height: 1.2;
          margin-bottom: 24px;
        }

        /* =====================================
           FEATURES
        ===================================== */

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 13px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .feature-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #cccccc;
          font-size: 11.5px;
          line-height: 1.5;
        }

        .feature-dot {
          display: block;
          width: 5px;
          height: 5px;
          min-width: 5px;
          margin-top: 6px;
          background: #eeeeee;
          border-radius: 50%;
        }

        /* =====================================
           CARD BUTTONS
        ===================================== */

        .card-bottom {
          margin-top: auto;
          padding-top: 34px;
        }

        .delivery {
          color: #737373;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1.1px;
          margin-bottom: 17px;
        }

        .card-button {
          width: 100%;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
          transition: all 0.25s ease;
        }

        .card-button span {
          font-size: 13px;
          transition: transform 0.2s ease;
        }

        .card-button:hover span {
          transform: translate(2px, -2px);
        }

        .card-button-outline {
          color: #f2f2f2;
          border: 1px solid #424242;
          background: transparent;
        }

        .card-button-outline:hover {
          color: #101010;
          border-color: #ffffff;
          background: #ffffff;
        }

        .card-button-primary {
          color: #101010;
          background: #ffffff;
          border: 1px solid #ffffff;
        }

        .card-button-primary:hover {
          background: #d7d7d7;
          border-color: #d7d7d7;
        }

        /* =====================================
           CUSTOM QUOTE
        ===================================== */

        .custom-quote-wrap {
          margin-top: 126px;
          margin-bottom: 95px;
        }

        .custom-quote {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 55px 28px;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            #141414 0%,
            #111111 55%,
            #161616 100%
          );
          border: 1px solid #202020;
        }

        .custom-quote::before {
          content: "";
          position: absolute;
          top: -180px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.045),
            transparent 70%
          );
          pointer-events: none;
        }

        .quote-small-label {
          color: #787878;
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 900;
          margin-bottom: 17px;
        }

        .custom-quote h2 {
          position: relative;
          margin: 0 0 16px;
          color: #ededed;
          font-size: clamp(25px, 3vw, 33px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .custom-quote p {
          position: relative;
          max-width: 525px;
          margin: 0 0 27px;
          color: #949494;
          font-size: 13px;
          line-height: 1.85;
        }

        .quote-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 15px 28px;
          border-radius: 30px;
          background: #f0f0f0;
          color: #121212;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.2px;
          transition: all 0.25s ease;
        }

        .quote-button:hover {
          background: #bdbdbd;
          transform: translateY(-2px);
        }

        .quote-button span {
          font-size: 14px;
        }

        /* =====================================
           FOOTER
        ===================================== */

        .pricing-footer {
          border-top: 1px solid #242424;
          background: #0b0b0b;
          padding: 62px 0 28px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          gap: 90px;
          padding-bottom: 67px;
        }

        .footer-logo {
          color: #ffffff;
          font-size: 23px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .footer-brand p {
          color: #888888;
          max-width: 290px;
          font-size: 12px;
          line-height: 1.85;
          margin: 16px 0 24px;
        }

        .footer-outline-link {
          display: inline-flex;
          color: #eeeeee;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1px;
          padding-bottom: 7px;
          border-bottom: 1px solid #555555;
          transition: color 0.2s ease;
        }

        .footer-outline-link:hover {
          color: #999999;
        }

        .footer-links h4,
        .footer-contact h4 {
          margin: 4px 0 23px;
          color: #777777;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px 24px;
        }

        .footer-nav-grid a {
          color: #a3a3a3;
          font-size: 12px;
          transition: color 0.2s ease;
        }

        .footer-nav-grid a:hover {
          color: #ffffff;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 13px;
        }

        .footer-contact h4 {
          margin-bottom: 10px;
        }

        .footer-contact a,
        .footer-contact p {
          margin: 0;
          color: #a3a3a3;
          font-size: 12px;
          line-height: 1.6;
        }

        .footer-contact a:hover {
          color: #ffffff;
        }

        .footer-contact .portfolio-link {
          color: #ffffff;
          border-bottom: 1px solid #777777;
          padding-bottom: 4px;
        }

        .footer-bottom {
          border-top: 1px solid #222222;
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footer-bottom span {
          color: #666666;
          font-size: 10px;
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 1050px) {

          .desktop-nav {
            gap: 15px;
          }

          .desktop-nav a {
            font-size: 9px;
          }

          .pricing-card {
            padding: 24px 19px 22px;
          }

          .footer-main {
            gap: 40px;
          }

          .feature-list li {
            font-size: 11px;
          }

        }

        @media (max-width: 900px) {

          .desktop-nav {
            display: none;
          }

          .header-inner {
            gap: 16px;
          }

          .hire-button {
            margin-left: auto;
          }

          .menu-toggle {
            width: 30px;
            height: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            border: 0;
            padding: 3px;
            cursor: pointer;
            background: transparent;
          }

          .menu-toggle span {
            width: 21px;
            height: 2px;
            display: block;
            background: #ffffff;
            border-radius: 2px;
          }

          .mobile-nav {
            display: none;
            position: absolute;
            top: 78px;
            left: 0;
            width: 100%;
            background: #111111;
            border-bottom: 1px solid #333333;
            padding: 20px 32px 28px;
            flex-direction: column;
            gap: 0;
          }

          .mobile-nav-open {
            display: flex;
          }

          .mobile-nav a {
            padding: 13px 0;
            color: #aaaaaa;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 1px;
            border-bottom: 1px solid #222222;
          }

          .mobile-nav a.mobile-active {
            color: #ffffff;
          }

          .pricing-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .pricing-card:last-child {
            grid-column: span 2;
          }

          .pricing-card {
            min-height: 455px;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
          }

          .footer-brand {
            grid-column: span 2;
          }

        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 650px) {

          .pricing-container {
            width: calc(100% - 36px);
          }

          .pricing-header {
            height: 68px;
          }

          .mobile-nav {
            top: 68px;
          }

          .brand {
            font-size: 19px;
          }

          .hire-button {
            font-size: 9px;
            padding: 9px 13px;
          }

          .pricing-intro {
            padding-top: 70px;
            padding-bottom: 65px;
          }

          .pricing-intro h1 {
            font-size: 35px;
            letter-spacing: -1.6px;
            line-height: 1.17;
          }

          .pricing-intro p {
            font-size: 13px;
            line-height: 1.8;
          }

          .pricing-sections {
            gap: 76px;
          }

          .platform-heading {
            gap: 12px;
            margin-bottom: 29px;
            align-items: flex-start;
          }

          .platform-icon {
            width: 36px;
            height: 36px;
            min-width: 36px;
          }

          .platform-heading h2 {
            font-size: 21px;
          }

          .platform-heading p {
            font-size: 11px;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 27px;
          }

          .pricing-card,
          .pricing-card:last-child {
            grid-column: auto;
            min-height: auto;
          }

          .pricing-card {
            padding: 26px 23px 23px;
            border-radius: 11px;
          }

          .card-top h3 {
            font-size: 18px;
          }

          .card-description {
            min-height: auto;
            font-size: 12px;
          }

          .card-price {
            margin-top: 26px;
          }

          .price-number {
            font-size: 39px;
          }

          .plan-tag {
            margin-bottom: 25px;
          }

          .feature-list {
            gap: 14px;
          }

          .feature-list li {
            font-size: 12px;
          }

          .card-bottom {
            padding-top: 40px;
          }

          .card-button {
            height: 44px;
          }

          .custom-quote-wrap {
            margin-top: 85px;
            margin-bottom: 75px;
          }

          .custom-quote {
            padding: 45px 20px;
          }

          .custom-quote h2 {
            font-size: 26px;
            line-height: 1.3;
          }

          .custom-quote p {
            font-size: 12px;
          }

          .pricing-footer {
            padding-top: 50px;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 43px;
            padding-bottom: 48px;
          }

          .footer-brand {
            grid-column: auto;
          }

          .footer-brand p {
            max-width: 340px;
          }

          .footer-nav-grid {
            max-width: 260px;
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

        }

        /* =====================================
           SMALL MOBILE
        ===================================== */

        @media (max-width: 380px) {

          .pricing-intro h1 {
            font-size: 30px;
          }

          .pricing-card {
            padding: 24px 19px;
          }

          .hire-button {
            padding: 8px 10px;
          }

          .card-price {
            gap: 7px;
          }

          .price-number {
            font-size: 35px;
          }

        }

        /* =====================================
           ACCESSIBILITY
        ===================================== */

        @media (prefers-reduced-motion: reduce) {

          .pricing-page *,
          .pricing-page *::before,
          .pricing-page *::after {
            transition: none !important;
          }

        }

      `}</style>

    </div>
  );
}
