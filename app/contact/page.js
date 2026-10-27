
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONTACT_FORM_ENDPOINT } from "../../lib/inquiryConfig";

/* ==========================================
   PORTFOLIO CONTACT SETTINGS
========================================== */

const BRAND_NAME = "EROLL.";
const EMAIL = "erolloliver97@gmail.com";
const PHONE_DISPLAY = "+63 927 793 7650";
const PHONE_LINK = "tel:+639277937650";

const FORMSPREE_ENDPOINT = CONTACT_FORM_ENDPOINT;

// Add a confirmed WhatsApp number, digits only.
const WHATSAPP_NUMBER = "";

const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : null;

/* ==========================================
   DROPDOWN OPTIONS
========================================== */

const SERVICE_OPTIONS = [
  "Wordpress Development",
  "GHL CRM and Automation",
  "Funnel Building",
  "AI Agents and Workflow",
  "Shopify Store",
  "Lead Generation System",
  "Something else",
];

/* ==========================================
   SOCIAL MEDIA LINKS
========================================== */

const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    label: "in",
    url: "https://www.linkedin.com/in/eroll-oliver-20009b290/",
  },
  {
    name: "Instagram",
    label: "ig",
    url: "https://www.instagram.com/eroll_onnn/",
  },
  {
    name: "Facebook",
    label: "f",
    url: "https://www.facebook.com/eroll.oliver.98",
  },
];

/* ==========================================
   SERVICE MAPPING FROM PRICING PAGE
========================================== */

function getServiceFromPricing(value) {
  if (!value) return "";

  const service = value.toLowerCase();

  if (service.includes("wordpress")) {
    return "Wordpress Development";
  }

  if (
    service.includes("gohighlevel") ||
    service.includes("ghl") ||
    service.includes("crm")
  ) {
    return "GHL CRM and Automation";
  }

  if (service.includes("shopify")) {
    return "Shopify Store";
  }

  if (service.includes("funnel")) {
    return "Funnel Building";
  }

  if (service.includes("ai agent")) {
    return "AI Agents and Workflow";
  }

  if (service.includes("lead generation")) {
    return "Lead Generation System";
  }

  return "Something else";
}

/* ==========================================
   CONTACT PAGE
========================================== */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    need: "Wordpress Development",
    details: "",
  });

  const [selectedPackage, setSelectedPackage] =
    useState("");

  const [requestType, setRequestType] =
    useState("");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  /* ========================================
     PREFILL FROM PRICING PAGE
  ======================================== */

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const service = params.get("service");
    const packageName = params.get("package");
    const request = params.get("request");

    if (request === "custom-quote") {
      setRequestType("Custom Quote Request");
    }

    if (service) {
      setFormData((prev) => ({
        ...prev,
        need: getServiceFromPricing(service),
      }));
    } else if (request === "custom-quote") {
      setFormData((prev) => ({
        ...prev,
        need: "Something else",
      }));
    }

    if (packageName) {
      setSelectedPackage(packageName);
    }
  }, []);

  /* ========================================
     INPUT CHANGE HANDLER
  ======================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "need") {
      setSelectedPackage("");
    }

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  /* ========================================
     FORMSPREE SUBMISSION
  ======================================== */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    setStatus({
      type: "",
      message: "",
    });

    const submissionData = new FormData(
      e.currentTarget
    );

    submissionData.set(
      "_subject",
      `New Portfolio Inquiry - ${formData.need}`
    );

    try {
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",
          body: submissionData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Your message has been sent successfully! Thank you for reaching out. I'll get back to you as soon as possible.",
        });

        setFormData((prev) => ({
          name: "",
          email: "",
          need: prev.need,
          details: "",
        }));
      } else {
        let errorMessage =
          "Something went wrong. Please try again.";

        try {
          const result = await response.json();

          if (
            Array.isArray(result.errors) &&
            result.errors.length > 0
          ) {
            errorMessage = result.errors
              .map((error) => error.message)
              .filter(Boolean)
              .join(" ") || errorMessage;
          }
        } catch {
          // Use the fallback error message.
        }

        setStatus({
          type: "error",
          message: errorMessage,
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Unable to submit your message. Please check your connection or contact me directly by email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">

      {/*
        No second header is included.
        Your shared portfolio navigation stays.
      */}

      <main>

        {/* ======================================
            CONTACT HERO
        ====================================== */}

        <section className="contact-hero contact-container">

          <div className="eyebrow">
            <span className="eyebrow-line" />
            CONTACT
          </div>

          <h1>
            Let&apos;s talk about your project
          </h1>

          <p>
            Tell me what you&apos;re building —
            I usually reply within a few hours.
            Have a question? Feel free to reach
            out directly by email.
          </p>

        </section>

        {/* ======================================
            CONTACT SECTION
        ====================================== */}

        <section className="contact-container contact-content">

          {/* LEFT COLUMN */}

          <div className="contact-info-column">

            {/* EMAIL */}

            <div className="info-card">

              <span className="info-label">
                EMAIL
              </span>

              <a
                href={`mailto:${EMAIL}`}
                className="info-value"
              >
                {EMAIL}
              </a>

            </div>

            {/* PHONE */}

            <div className="info-card">

              <span className="info-label">
                PHONE
              </span>

              <a
                href={PHONE_LINK}
                className="info-value"
              >
                {PHONE_DISPLAY}
              </a>

            </div>

            {/* WHATSAPP */}

            {WHATSAPP_URL && (
              <div className="info-card">

                <span className="info-label">
                  WHATSAPP
                </span>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-value"
                >
                  Chat instantly ↗
                </a>

              </div>
            )}

            {/* LOCATION */}

            <div className="info-card">

              <span className="info-label">
                LOCATION
              </span>

              <span className="info-value">
                Butuan City, Philippines
              </span>

            </div>

            {/* AVAILABILITY */}

            <div className="availability-card">

              <h3>Availability</h3>

              <p>
                Currently taking on new WordPress,
                GoHighLevel, funnel development,
                and AI automation projects.
              </p>

              <p>
                Response time: usually within
                a few hours.
              </p>

            </div>

            {/* SOCIAL MEDIA */}

            <div className="info-card follow-card">

              <span className="info-label">
                FOLLOW ME
              </span>

              <div className="social-links">

                {SOCIAL_LINKS.map((social) => (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    key={social.name}
                  >
                    {social.label}
                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* ======================================
              RIGHT COLUMN - FORM
          ====================================== */}

          <div className="contact-form-wrap">

            <form
              className="contact-form"
              action={FORMSPREE_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
            >

              {/* SPAM PROTECTION */}

              <div className="honeypot" aria-hidden="true">
                <label htmlFor="company-website">
                  Leave this field empty
                </label>

                <input
                  type="text"
                  id="company-website"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* PRICING PACKAGE */}

              {selectedPackage && (
                <input
                  type="hidden"
                  name="selected_package"
                  value={selectedPackage}
                />
              )}

              {requestType && (
                <input
                  type="hidden"
                  name="request_type"
                  value={requestType}
                />
              )}

              {/* NAME AND EMAIL */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    YOUR NAME *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />

                </div>

                <div className="form-group">

                  <label htmlFor="email">
                    YOUR EMAIL *
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />

                </div>

              </div>

              {/* ======================================
                  SERVICE DROPDOWN
              ====================================== */}

              <div className="form-group">

                <label htmlFor="need">
                  WHAT DO YOU NEED? *
                </label>

                <div className="select-field">

                  <select
                    id="need"
                    name="need"
                    value={formData.need}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  >

                    {SERVICE_OPTIONS.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}

                  </select>

                </div>

              </div>

              {/* PROJECT DETAILS */}

              <div className="form-group">

                <label htmlFor="details">
                  PROJECT DETAILS *
                </label>

                <textarea
                  id="details"
                  name="details"
                  placeholder="Tell me about your project, goals and timeline..."
                  value={formData.details}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />

              </div>

              {/* SUBMIT BUTTON */}

              <div className="form-actions">

                <button
                  type="submit"
                  className="send-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "SENDING..."
                    : "SEND MESSAGE"}
                </button>

                {WHATSAPP_URL && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                  >
                    WHATSAPP INSTEAD
                  </a>
                )}

              </div>

              {/* STATUS MESSAGE */}

              {status.message && (
                <div
                  className={`form-status ${status.type}`}
                  role={
                    status.type === "error"
                      ? "alert"
                      : "status"
                  }
                  aria-live="polite"
                >

                  <span className="status-icon">
                    {status.type === "success"
                      ? "✓"
                      : "!"}
                  </span>

                  <span>
                    {status.message}
                  </span>

                </div>
              )}

              {/* FORM NOTE */}

              <p className="form-note">
                Your inquiry is submitted securely
                through Formspree. I&apos;ll get
                back to you as soon as possible.
              </p>

            </form>

          </div>

        </section>

      </main>

      {/* ======================================
          COMPLETE CONTACT PAGE CSS
      ====================================== */}

      <style jsx>{`

        /* =====================================
           BASE
        ===================================== */

        .contact-page {
          --bg: #070707;
          --surface: #111111;
          --surface2: #151515;
          --border: #262626;
          --text: #f5f5f5;
          --muted: #9b9b9b;
          --light: #ececec;

          background: #060606;
          color: var(--text);
          min-height: 100vh;
          width: 100%;
          overflow-x: hidden;
          font-family:
            Inter,
            "Helvetica Neue",
            Arial,
            sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .contact-page * {
          box-sizing: border-box;
        }

        .contact-page a {
          text-decoration: none;
        }

        .contact-container {
          width: min(100% - 64px, 1140px);
          margin-left: auto;
          margin-right: auto;
        }

        /* =====================================
           HERO
        ===================================== */

        .contact-hero {
          padding-top: 92px;
          padding-bottom: 48px;
          position: relative;
        }

        .contact-hero::before {
          content: "";
          position: absolute;
          width: 480px;
          height: 380px;
          left: -220px;
          top: 0;
          pointer-events: none;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.07),
            transparent 70%
          );
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #767676;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 22px;
        }

        .eyebrow-line {
          height: 1px;
          width: 31px;
          background: #767676;
        }

        .contact-hero h1 {
          margin: 0 0 18px;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1.08;
          letter-spacing: -2px;
          font-weight: 800;
          color: #f7f7f7;
          max-width: 760px;
        }

        .contact-hero p {
          margin: 0;
          max-width: 650px;
          color: #9b9b9b;
          font-size: 14px;
          line-height: 1.9;
        }

        /* =====================================
           CONTACT CONTENT
        ===================================== */

        .contact-content {
          display: grid;
          grid-template-columns: 0.9fr 1.15fr;
          gap: 38px;
          padding-bottom: 90px;
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* =====================================
           INFORMATION CARDS
        ===================================== */

        .info-card,
        .contact-form-wrap {
          border: 1px solid #242424;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            #111111 0%,
            #0d0d0d 100%
          );
        }

        .info-card {
          padding: 22px 24px;
          min-height: 104px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition:
            border-color 0.25s ease,
            transform 0.25s ease;
        }

        .info-card:hover {
          border-color: #494949;
          transform: translateY(-2px);
        }

        .info-label {
          color: #6e6e6e;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.6px;
          margin-bottom: 14px;
        }

        .info-value {
          color: #f2f2f2;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 700;
          word-break: break-word;
          transition: color 0.2s ease;
        }

        a.info-value:hover {
          color: #bdbdbd;
        }

        /* =====================================
           AVAILABILITY
        ===================================== */

        .availability-card {
          background: #ececec;
          color: #111111;
          border-radius: 18px;
          padding: 24px;
          min-height: 130px;
        }

        .availability-card h3 {
          margin: 0 0 12px;
          font-size: 18px;
          font-weight: 800;
        }

        .availability-card p {
          margin: 0 0 6px;
          color: #666666;
          line-height: 1.75;
          font-size: 14px;
        }

        /* =====================================
           SOCIAL MEDIA
        ===================================== */

        .follow-card {
          min-height: 118px;
        }

        .social-links,
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .social-links a,
        .footer-socials a {
          width: 40px;
          height: 40px;
          border-radius: 999px;
          border: 1px solid #3a3a3a;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #dddddd;
          font-size: 14px;
          font-weight: 700;
          text-transform: lowercase;
          transition: 0.25s ease;
        }

        .social-links a:hover,
        .footer-socials a:hover {
          background: #ffffff;
          color: #111111;
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        /* =====================================
           CONTACT FORM
        ===================================== */

        .contact-form-wrap {
          padding: 30px 30px 26px;
          align-self: start;
        }

        .contact-form {
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
        }

        .form-group label {
          color: #7f7f7f;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid #2d2d2d;
          border-radius: 14px;
          background: linear-gradient(
            135deg,
            #171717 0%,
            #131313 100%
          );
          color: #ffffff;
          padding: 16px 18px;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: 0.25s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #6c6c6c;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #5d5d5d;
          box-shadow: 0 0 0 1px #5d5d5d;
        }

        .form-group input:disabled,
        .form-group select:disabled,
        .form-group textarea:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* =====================================
           SERVICE DROPDOWN
        ===================================== */

        .select-field {
          position: relative;
          width: 100%;
        }

        .select-field select {
          width: 100%;
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-right: 45px;
          cursor: pointer;
          min-height: 52px;
        }

        .select-field::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 21px;
          width: 8px;
          height: 8px;
          border-right: 1.5px solid #bcbcbc;
          border-bottom: 1.5px solid #bcbcbc;
          transform: translateY(-70%) rotate(45deg);
          pointer-events: none;
        }

        .select-field select option {
          color: #ffffff;
          background: #171717;
          font-size: 14px;
          padding: 12px;
        }

        /* =====================================
           TEXTAREA
        ===================================== */

        .form-group textarea {
          min-height: 160px;
          resize: vertical;
        }

        /* =====================================
           FORM BUTTONS
        ===================================== */

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 18px;
        }

        .send-button,
        .whatsapp-button {
          flex: 1;
          height: 54px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.3px;
          transition: 0.25s ease;
          text-align: center;
        }

        .send-button {
          border: 1px solid #ffffff;
          background: #f0f0f0;
          color: #111111;
          cursor: pointer;
        }

        .send-button:hover:not(:disabled) {
          background: #dcdcdc;
          transform: translateY(-1px);
        }

        .send-button:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .whatsapp-button {
          border: 1px solid #3a3a3a;
          background: transparent;
          color: #f2f2f2;
        }

        .whatsapp-button:hover {
          background: #ffffff;
          color: #111111;
          border-color: #ffffff;
        }

        /* =====================================
           SUCCESS AND ERROR MESSAGES
        ===================================== */

        .form-status {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px 18px;
          margin-top: 20px;
          border-radius: 12px;
          border: 1px solid #343434;
          font-size: 13px;
          line-height: 1.7;
        }

        .form-status.success {
          background: #152219;
          border-color: #355340;
          color: #c9f2d2;
        }

        .form-status.error {
          background: #291919;
          border-color: #663939;
          color: #ffcece;
        }

        .status-icon {
          width: 22px;
          height: 22px;
          min-width: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid currentColor;
          border-radius: 50%;
          font-size: 12px;
          font-weight: 900;
        }

        .form-note {
          margin: 16px 0 0;
          text-align: center;
          color: #666666;
          font-size: 12px;
          line-height: 1.7;
        }

        /* =====================================
           SPAM PROTECTION
        ===================================== */

        .honeypot {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip-path: inset(50%);
          white-space: nowrap;
        }

        /* =====================================
           FOOTER
        ===================================== */

        .contact-footer {
          border-top: 1px solid #1c1c1c;
          background: #050505;
          padding: 62px 0 28px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.25fr 1fr 1fr;
          gap: 85px;
          padding-bottom: 64px;
        }

        .footer-logo {
          color: #ffffff;
          font-size: 23px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .footer-brand p {
          color: #8a8a8a;
          max-width: 310px;
          font-size: 14px;
          line-height: 1.9;
          margin: 18px 0 24px;
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
          gap: 14px 28px;
        }

        .footer-nav-grid a {
          color: #b1b1b1;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .footer-nav-grid a:hover,
        .footer-contact a:hover {
          color: #ffffff;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .footer-contact a,
        .footer-contact p {
          margin: 0;
          color: #b1b1b1;
          font-size: 14px;
          line-height: 1.65;
        }

        .footer-bottom {
          border-top: 1px solid #171717;
          padding-top: 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }

        .footer-bottom span {
          color: #666666;
          font-size: 11px;
        }

        /* =====================================
           TABLET
        ===================================== */

        @media (max-width: 980px) {
          .contact-content {
            grid-template-columns: 1fr;
          }

          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 44px;
          }

          .footer-brand {
            grid-column: span 2;
          }
        }

        /* =====================================
           MOBILE
        ===================================== */

        @media (max-width: 650px) {
          .contact-container {
            width: calc(100% - 36px);
          }

          .contact-hero {
            padding-top: 68px;
            padding-bottom: 38px;
          }

          .contact-hero h1 {
            font-size: 38px;
            line-height: 1.12;
            letter-spacing: -1.5px;
          }

          .contact-hero p {
            font-size: 13px;
          }

          .contact-content {
            gap: 24px;
            padding-bottom: 70px;
          }

          .info-card {
            min-height: auto;
            padding: 20px;
          }

          .info-value {
            font-size: 16px;
          }

          .availability-card {
            padding: 20px;
          }

          .contact-form-wrap {
            padding: 22px 20px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 0;
          }

          .form-group input,
          .form-group select,
          .form-group textarea {
            border-radius: 12px;
            padding: 15px 16px;
          }

          .select-field select {
            padding-right: 45px;
          }

          .form-group textarea {
            min-height: 150px;
          }

          .form-actions {
            flex-direction: column;
          }

          .send-button,
          .whatsapp-button {
            width: 100%;
            height: 50px;
            flex: auto;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 42px;
            padding-bottom: 46px;
          }

          .footer-brand {
            grid-column: auto;
          }

          .footer-nav-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 380px) {
          .contact-hero h1 {
            font-size: 32px;
          }

          .contact-form-wrap {
            padding: 18px 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {
            transition: none !important;
          }
        }

      `}</style>

    </div>
  );
}
