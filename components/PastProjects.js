
"use client";

import { useEffect, useRef, useState } from "react";

/* ==========================================
   IMAGE HOSTS
========================================== */

const BLOB =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/";

const CDN =
  "https://assets.cdn.filesafe.space/GyrIBT0jZYs6WUxSTMfo/media/";

/* ==========================================
   PROJECT DATA
========================================== */

const PROJECTS = [
  {
    id: "automation",
    number: "01",
    name: "Automation Projects",
    description:
      "End-to-end workflow automation systems that eliminate manual tasks and streamline operations.",
    details:
      "End-to-end workflow automation systems that eliminate manual tasks and streamline operations. Built with n8n, Make, and Zapier.",
    preview: CDN + "69d405b2d768ca60777e451d.png",
    tags: ["n8n", "Make", "Zapier", "GoHighLevel"],
    items: [
      {
        title: "Daily Posting Automation",
        image:
          BLOB +
          "daily-posting-automation-B2zVPm3y-iaFBa60v9XePKebaWDl2tPuJwrFE4K.png",
      },
      {
        title: "Coaches & Course Creators Workflow",
        image:
          BLOB +
          "coaches-workflow-Dt-wxP9X-iGXpipDg6tkCDGsgCC6Wfdqh9BKqC9.png",
      },
      {
        title: "Content Strategy Automation",
        image:
          BLOB +
          "coaches-workflow-2-B5hfN8vJ-DUNCQkpKyf3njYH11si5PrELdzytd6.png",
      },
      {
        title: "Lead Scoring Pipeline",
        image:
          BLOB +
          "lead-scoring-pipeline-MbeaMizK-8imUZUAZAHuuzI5orfcGbAycNCRNUA.png",
      },
      {
        title: "AI Agent Response System",
        image:
          BLOB +
          "ai-agent-response-CNn4xM-I-hfBR8WBoG0qsePRkujBKoRw6WAGYZP.png",
      },
      {
        title: "Outbound Call Automation",
        image:
          BLOB +
          "outbound-call-LylGMIvh-WeLyeRp4FIPlmW3J5UeKatayZqHN2L.png",
      },
      {
        title: "Form Submission Lead Flow",
        image:
          BLOB +
          "form-submission-lead-CIMu3UQV-n9tHPF8YciwavdVM6mP4ewVIvi4ix9.png",
      },
      {
        title: "Form/Survey Nurture Sequence",
        image:
          BLOB +
          "form-survey-neuro-C9YNPac9-FXIY2cjWYtY5iOBSwjAcLD0hMhpR6J.png",
      },
      {
        title: "Article Publishing Automation",
        image:
          BLOB +
          "article-automation-BwazoxqE-XgUd8oAT6YoGRYtIGBqRORsEX1XIBD.png",
      },
      {
        title: "Onboarding Agent",
        image:
          BLOB +
          "onboarding-agent-DZmzuIQu-fRMZHwTDzaGylOQRwMPkuuyEYgDMpE.png",
      },
      {
        title: "Proposal Agent",
        image:
          BLOB +
          "proposal-agent-BVTOvPfl-y88xGT1zCJkJTaSb9LLLdPXH38BLjk.png",
      },
      {
        title: "Day 30/60/90 Review Workflow",
        image:
          BLOB +
          "review-workflow-BY-l2O4T-z3qqAUrL8DQiSptInUmSFPmeM3rF7t.png",
      },
      {
        title: "ClickUp to Social Media Zap",
        image:
          BLOB +
          "zap-automation-8mPYR8RC-ry69GcWjohi1I6TbSJv1cit2Mn6fYq.png",
      },
      {
        title:
          "Appointment Confirmation + Reminder + Survey + Review",
        image:
          BLOB +
          "appointment-confirmation-workflow-2sKKFiIe-KkAbk5NQDP3cYVwFTbU3IevcwemgUw.png",
      },
      {
        title: "Deal Log Auto Update Spreadsheet",
        image:
          BLOB +
          "deal-log-auto-update-D0BrUDP8-mNT4t9Qk6Zpdx7l7JYTz1JPIdMNfHv.png",
      },
    ],
  },

  {
    id: "chat",
    number: "02",
    name: "Chat Agents",
    description:
      "Intelligent conversational AI agents that handle customer inquiries and automate support.",
    details:
      "Intelligent conversational AI agents that handle customer inquiries and automate support. From simple FAQ bots to complex multi-turn conversation systems.",
    preview: CDN + "69d405b2d768ca60777e451c.jpg",
    tags: ["AI Chatbots", "NLP", "Support"],
    items: [
      {
        title: "Agent Persona Setup",
        image:
          BLOB +
          "agent-persona-DFPcX48Q-SlV4YaB8exLyOXRtwJWMGqVbLG1aR8.png",
      },
      {
        title: "BODC Inbound Bot",
        image:
          BLOB +
          "bodc-inbound-bot-DyDMaLXx-vB5JCxysYZUOaln6JHLPV6XT4TDTEk.png",
      },
      {
        title: "Post Voice AI Demo Follow-up",
        image:
          BLOB +
          "post-voice-ai-demo-BTOVndBh-YBmVCLsuAcQ9FPyoboovFtYqMdxNsx.png",
      },
      {
        title: "Self Selling Intro Flow",
        image:
          BLOB +
          "self-selling-intro-Blwz0Ydf-oKngFpoQJvFOipn32vS4VLHN6gYq1H.png",
      },
      {
        title: "Calendar Inspector Booking",
        image:
          BLOB +
          "calendar-booking-BMcHHV9J-0aMPfRXP4GNj95sUyMaNo0fJbz9t9A.png",
      },
      {
        title: "Multi-Path DM Qualifier",
        image:
          BLOB +
          "multi-path-dm-qualifier-DGnxPC9q-cow1KFLLJWiBQ6PA15ZXBpq4nZdrXn.png",
      },
    ],
  },

  {
    id: "voice",
    number: "03",
    name: "Voice Agents",
    description:
      "AI-powered voice assistants for phone automation, bookings, and customer interactions.",
    details:
      "AI-powered voice assistants for phone automation, bookings, and customer interactions. Natural conversations that handle real business calls.",
    preview: CDN + "69d405b23d829c73b27be210.png",
    tags: ["Retell AI", "VAPI", "Telephony"],
    items: [
      {
        title: "VAPI AI Caller",
        image:
          BLOB +
          "vapi-ai-caller-CgoK6dZI-miVY8in77QfLuzblImYCRvFqQuvbL1.png",
      },
      {
        title: "Appointment Setter - VAPI + GHL + n8n",
        image:
          CDN + "69ef71aa7a52d611f4778742.jpg",
      },
      {
        title: "n8n Booking Workflow",
        image:
          BLOB +
          "n8n-booking-workflow-AsIpUHgc-kyIIRv0xCbgiSNVoh6d5dIzGQsmW6Z.png",
      },
      {
        title: "Inbound/Outbound Voice Flow",
        image:
          BLOB +
          "inbound-outbound-flow-D5tsMONA-svnMFC7Dsecr7NMAOEHYf2uOGpYzHZ.png",
      },
      {
        title: "Booking Conversation Flow",
        image:
          BLOB +
          "booking-conversation-flow-5Gb6cIL9-05xCVVZ3ceZuHMpVXpZhJbqehJbT3K.png",
      },
      {
        title: "Lead Qualifier - Retell AI",
        image:
          BLOB +
          "lead-qualifier-retell-CgV5D22s-lMOfxvVqkaX8wsIFTZjok2dO0TkIhf.png",
      },
    ],
  },

  {
    id: "ghl",
    number: "04",
    name: "GoHighLevel Websites / Funnels",
    description:
      "Custom websites and sales funnels built on the GoHighLevel platform for lead generation.",
    details:
      "Custom-built websites and high-converting funnels designed to scale your business using GoHighLevel.",
    preview: CDN + "69d405b2bec7abdef117d030.jpg",
    tags: ["GoHighLevel", "Funnels", "Landing Pages"],
    items: [
      {
        title: "7 Figure Builder",
        image: CDN + "69d41777daf6c22526e5a716.png",
        website: "https://7figurebuilder.com/",
      },
      {
        title: "RJ Pierce Law Group",
        image: CDN + "69d417cea7dcb4cff0edfbfd.png",
        website: "https://multiplythemark.com/",
      },
      {
        title: "Power Suite",
        image: CDN + "69d41844fa2dde97428b06c4.png",
        website: "https://yourpowersuite.com/",
      },
      {
        title: "Row House",
        image: CDN + "69d41899c7e70ac57d9e5aad.png",
        website: "https://www.therowhouse.com/",
      },
      {
        title: "Beauty Biz Pro",
        image: CDN + "69d418e53b2aa54fd7c791ce.png",
        website: "https://beautybizpro.com/",
      },
      {
        title: "The Data Driven Practice",
        image: CDN + "69d41943c237db08773767b2.png",
        website: "https://datadrivendoc.com/home",
      },
      {
        title: "Swanson Reserve Capital",
        image: CDN + "69d4198662c742820992012e.png",
        website: "https://swansonreservecapital.com/",
      },
      {
        title: "The Flooring Market",
        image: CDN + "69d41a494ba93ac572be4d00.png",
        website: "https://theflooringmarket.net/",
      },
      {
        title: "The Xtreme Coatings",
        image: CDN + "69d41a9aeacb9473a436fad1.png",
        website: "https://xtreme-coatings.com/",
      },
      {
        title: "Stone Systems",
        image: CDN + "69d41b27a7dcb4cff0ee6611.png",
        website: "https://xtreme-coatings.com/",
      },
    ],
  },
];

/* ==========================================
   IMAGE WITH FALLBACK
========================================== */

function ProjectImage({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`${className} eoPP-imageFallback`}
        role="img"
        aria-label={`${alt} preview unavailable`}
      >
        PREVIEW UNAVAILABLE
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function PastProjects() {
  const [activeId, setActiveId] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  const closeModalRef = useRef(null);
  const dialogRef = useRef(null);
  const lightboxRef = useRef(null);
  const closeZoomRef = useRef(null);
  const lastTriggerRef = useRef(null);
  const lastImageRef = useRef(null);

  const active = PROJECTS.find(
    (project) => project.id === activeId
  );

  const openCategory = (id, event) => {
    lastTriggerRef.current = event.currentTarget;
    setActiveId(id);
  };

  const closeCategory = () => {
    setZoomImage(null);
    setActiveId(null);
  };

  const openImage = (item, event) => {
    lastImageRef.current = event.currentTarget;
    setZoomImage(item);
  };

  const closeImage = () => {
    setZoomImage(null);
    requestAnimationFrame(() =>
      lastImageRef.current?.focus()
    );
  };

  /* BODY SCROLL LOCK */

  useEffect(() => {
    if (!activeId) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeModalRef.current?.focus();

    return () => {
      document.body.style.overflow =
        previousOverflow;
      lastTriggerRef.current?.focus();
    };
  }, [activeId]);

  /* LIGHTBOX FOCUS */

  useEffect(() => {
    if (zoomImage) {
      closeZoomRef.current?.focus();
    }
  }, [zoomImage]);

  /* KEYBOARD SUPPORT */

  useEffect(() => {
    if (!activeId) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();

        if (zoomImage) {
          closeImage();
        } else {
          closeCategory();
        }
      }

      if (event.key === "Tab") {
        const root = zoomImage
          ? lightboxRef.current
          : dialogRef.current;

        if (!root) return;

        const focusable = Array.from(
          root.querySelectorAll(
            'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
          )
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [activeId, zoomImage]);

  return (
    <section
      className="eoPP"
      id="automation-projects"
      aria-labelledby="eoPP-title"
    >
      <div className="eoPP-shell">

        {/* SECTION HEADING */}

        <div className="eoPP-heading">
          <div className="eoPP-kicker">
            <span />
            04 / PROJECT SHOWCASE
          </div>

          <div className="eoPP-headingRow">
            <h2 id="eoPP-title">
              Past <span>Projects.</span>
            </h2>

            <p>
              A selection of automation systems,
              AI agents, and GoHighLevel builds
              from projects across different
              industries.
            </p>
          </div>
        </div>

        {/* PROJECT CATEGORY CARDS */}

        <div className="eoPP-grid">
          {PROJECTS.map((project) => (
            <button
              type="button"
              className="eoPP-card"
              key={project.id}
              onClick={(event) =>
                openCategory(project.id, event)
              }
              aria-label={`Explore ${project.name} gallery`}
            >
              <div className="eoPP-cardImage">
                <ProjectImage
                  src={project.preview}
                  alt={project.name}
                />

                <span className="eoPP-count">
                  {project.items.length} EXAMPLES
                </span>
              </div>

              <div className="eoPP-cardBody">
                <span className="eoPP-index">
                  {project.number} / 04
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="eoPP-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="eoPP-explore">
                  EXPLORE PROJECTS
                  <b aria-hidden="true">↗</b>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* PROJECT CATEGORY MODAL */}

      {active && (
        <div
          className="eoPP-overlay"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeCategory();
            }
          }}
        >
          <div
            className="eoPP-dialog"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="eoPP-dialog-title"
            aria-describedby="eoPP-dialog-desc"
          >
            <div className="eoPP-dialogToolbar">
              <button
                type="button"
                className="eoPP-back"
                onClick={closeCategory}
              >
                ← Back to projects
              </button>

              <button
                type="button"
                className="eoPP-close"
                ref={closeModalRef}
                onClick={closeCategory}
                aria-label="Close project gallery"
              >
                ×
              </button>
            </div>

            <div className="eoPP-dialogHeader">
              <p className="eoPP-dialogLabel">
                04.{active.number} / PROJECT GALLERY
              </p>

              <h2 id="eoPP-dialog-title">
                {active.name}
                <span>.</span>
              </h2>

              <p id="eoPP-dialog-desc">
                {active.details}
              </p>
            </div>

            {/* GALLERY ITEMS */}

            <div className="eoPP-gallery">
              {active.items.map((item, index) => (
                <article
                  className="eoPP-item"
                  key={`${active.id}-${index}`}
                >
                  <button
                    type="button"
                    className="eoPP-itemImage"
                    onClick={(event) =>
                      openImage(item, event)
                    }
                    aria-label={`Enlarge ${item.title} image`}
                  >
                    <ProjectImage
                      src={item.image}
                      alt={item.title}
                    />

                    <span className="eoPP-zoomHint">
                      VIEW IMAGE ↗
                    </span>
                  </button>

                  <div className="eoPP-itemBottom">
                    <h3>{item.title}</h3>

                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${item.title} website`}
                      >
                        VISIT SITE ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FULL SCREEN IMAGE VIEWER */}

      {active && zoomImage && (
        <div
          className="eoPP-lightbox"
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomImage.title} enlarged image`}
          onMouseDown={(event) => {
            if (
              event.target === event.currentTarget
            ) {
              closeImage();
            }
          }}
        >
          <button
            type="button"
            className="eoPP-lightboxClose"
            aria-label="Close enlarged image"
            onClick={closeImage}
            ref={closeZoomRef}
          >
            ×
          </button>

          <div className="eoPP-lightboxBody">
            <ProjectImage
              src={zoomImage.image}
              alt={zoomImage.title}
            />

            <p>{zoomImage.title}</p>
          </div>
        </div>
      )}

      {/* ======================================
          COMPLETE CSS
      ====================================== */}

      <style jsx global>{`

        .eoPP {
          background: #080808;
          color: #f4f4f4;
          padding: 82px 0 108px;
        }

        .eoPP *,
        .eoPP-overlay *,
        .eoPP-lightbox * {
          box-sizing: border-box;
        }

        .eoPP-shell {
          width: min(100% - 48px, 1240px);
          margin: 0 auto;
        }

        /* SECTION HEADING */

        .eoPP-heading {
          margin: 0 0 37px;
        }

        .eoPP-kicker {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #818181;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .21em;
          margin-bottom: 19px;
        }

        .eoPP-kicker span {
          display: block;
          width: 29px;
          height: 1px;
          background: #777;
        }

        .eoPP-headingRow {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }

        .eoPP-heading h2 {
          margin: 0;
          color: #fff;
          font-size: clamp(38px, 6vw, 67px);
          line-height: 1.06;
          letter-spacing: -.055em;
          font-weight: 800;
        }

        .eoPP-heading h2 span {
          color: #a6a6a6;
        }

        .eoPP-headingRow > p {
          max-width: 390px;
          color: #939393;
          font-size: 14px;
          line-height: 1.8;
          margin: 0 0 3px;
        }

        /* PROJECT GRID */

        .eoPP-grid {
          display: grid;
          grid-template-columns:
            repeat(4, minmax(0, 1fr));
          gap: 16px;
          align-items: stretch;
        }

        .eoPP-card {
          min-width: 0;
          height: 100%;
          border: 1px solid #303030;
          border-radius: 16px;
          background: linear-gradient(
            145deg,
            #181818,
            #101010
          );
          color: inherit;
          text-align: left;
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          cursor: pointer;
          font: inherit;
          transition:
            transform .24s,
            border-color .24s,
            box-shadow .24s;
        }

        .eoPP-card:hover {
          transform: translateY(-6px);
          border-color: #858585;
          box-shadow:
            0 14px 35px rgba(0,0,0,.35);
        }

        .eoPP-card:focus-visible,
        .eoPP-itemImage:focus-visible,
        .eoPP button:focus-visible,
        .eoPP-overlay button:focus-visible,
        .eoPP-lightbox button:focus-visible,
        .eoPP-overlay a:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }

        /* CARD IMAGE */

        .eoPP-cardImage {
          height: 177px;
          position: relative;
          background: #181818;
          border-bottom: 1px solid #2d2d2d;
          overflow: hidden;
        }

        .eoPP-cardImage > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(1) brightness(.83);
          transition:
            filter .28s,
            transform .35s;
        }

        .eoPP-card:hover .eoPP-cardImage > img {
          filter: grayscale(.25) brightness(1);
          transform: scale(1.05);
        }

        .eoPP-count {
          position: absolute;
          bottom: 12px;
          left: 12px;
          padding: 7px 10px;
          background: rgba(10,10,10,.85);
          border: 1px solid #5d5d5d;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .11em;
        }

        /* CARD CONTENT */

        .eoPP-cardBody {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 20px 18px 19px;
        }

        .eoPP-index {
          font-size: 10px;
          letter-spacing: .16em;
          color: #777;
          font-weight: 750;
          margin-bottom: 13px;
        }

        .eoPP-cardBody h3 {
          font-size: 18px;
          font-weight: 800;
          line-height: 1.3;
          margin: 0 0 10px;
          letter-spacing: -.02em;
          color: #f5f5f5;
        }

        .eoPP-cardBody > p {
          margin: 0 0 19px;
          color: #999;
          line-height: 1.65;
          font-size: 12px;
        }

        .eoPP-tags {
          display: flex;
          gap: 7px;
          flex-wrap: wrap;
          margin-top: auto;
          margin-bottom: 24px;
        }

        .eoPP-tags span {
          border: 1px solid #393939;
          color: #b8b8b8;
          background: #202020;
          border-radius: 20px;
          font-size: 10px;
          padding: 5px 9px;
        }

        .eoPP-explore {
          width: 100%;
          padding-top: 13px;
          border-top: 1px solid #323232;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #efefef;
          font-size: 10px;
          letter-spacing: .1em;
          font-weight: 800;
        }

        .eoPP-explore b {
          font-size: 19px;
          font-weight: 400;
          transition: transform .2s;
        }

        .eoPP-card:hover .eoPP-explore b {
          transform: translate(3px, -3px);
        }

        /* IMAGE FALLBACK */

        .eoPP-imageFallback {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 125px;
          width: 100%;
          height: 100%;
          background: repeating-linear-gradient(
            45deg,
            #141414,
            #141414 9px,
            #1d1d1d 10px
          );
          color: #888;
          text-align: center;
          padding: 15px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .12em;
        }

        /* MODAL BACKGROUND */

        .eoPP-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background: rgba(0,0,0,.93);
          overflow-y: auto;
          overscroll-behavior: contain;
          padding: 38px 24px;
        }

        /* MODAL CONTAINER */

        .eoPP-dialog {
          width: min(100%, 1200px);
          background: #101010;
          border: 1px solid #323232;
          border-radius: 20px;
          padding: 22px 30px 36px;
          box-shadow: 0 30px 110px #000;
          color: #f5f5f5;
        }

        .eoPP-dialogToolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 22px;
        }

        .eoPP-back {
          background: transparent;
          border: 0;
          color: #aaa;
          cursor: pointer;
          font-size: 13px;
          font-weight: 650;
          padding: 10px 0;
        }

        .eoPP-back:hover {
          color: #fff;
        }

        .eoPP-close,
        .eoPP-lightboxClose {
          cursor: pointer;
          width: 43px;
          height: 43px;
          display: grid;
          place-items: center;
          background: #222;
          border: 1px solid #454545;
          border-radius: 50%;
          color: #fff;
          font-size: 27px;
          line-height: 1;
          transition: background .2s;
        }

        .eoPP-close:hover,
        .eoPP-lightboxClose:hover {
          background: #444;
        }

        /* MODAL HEADING */

        .eoPP-dialogHeader {
          margin-bottom: 32px;
        }

        .eoPP-dialogLabel {
          color: #919191;
          font-size: 10px;
          letter-spacing: .18em;
          font-weight: 800;
          margin: 0 0 12px;
        }

        .eoPP-dialogHeader h2 {
          margin: 0 0 12px;
          color: #fff;
          max-width: 970px;
          font-weight: 850;
          font-size: clamp(29px, 4.4vw, 52px);
          letter-spacing: -.045em;
          line-height: 1.08;
        }

        .eoPP-dialogHeader h2 span {
          color: #929292;
        }

        .eoPP-dialogHeader > p:last-child {
          color: #a4a4a4;
          font-size: 14px;
          max-width: 720px;
          line-height: 1.75;
          margin: 0;
        }

        /* GALLERY GRID */

        .eoPP-gallery {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .eoPP-item {
          min-width: 0;
          border-radius: 13px;
          border: 1px solid #343434;
          background: #1a1a1a;
          overflow: hidden;
        }

        .eoPP-itemImage {
          width: 100%;
          height: 185px;
          position: relative;
          display: block;
          background: #0c0c0c;
          cursor: zoom-in;
          border: 0;
          padding: 0;
          overflow: hidden;
        }

        .eoPP-itemImage > img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform .24s;
        }

        .eoPP-itemImage:hover > img {
          transform: scale(1.04);
        }

        .eoPP-zoomHint {
          position: absolute;
          bottom: 10px;
          right: 10px;
          display: inline-block;
          border-radius: 18px;
          background: rgba(0,0,0,.8);
          padding: 7px 10px;
          color: #fff;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .08em;
        }

        .eoPP-itemBottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 15px;
          min-height: 66px;
        }

        .eoPP-itemBottom h3 {
          color: #f0f0f0;
          font-size: 12px;
          line-height: 1.45;
          font-weight: 750;
          margin: 0;
        }

        .eoPP-itemBottom a {
          flex-shrink: 0;
          color: #fff;
          border-bottom: 1px solid #757575;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .08em;
          text-decoration: none;
          padding-bottom: 3px;
        }

        .eoPP-itemBottom a:hover {
          color: #aaa;
        }

        /* FULLSCREEN LIGHTBOX */

        .eoPP-lightbox {
          position: fixed;
          inset: 0;
          z-index: 11000;
          display: grid;
          place-items: center;
          padding: 75px 24px 36px;
          background: rgba(0,0,0,.97);
          color: white;
        }

        .eoPP-lightboxClose {
          position: fixed;
          top: 22px;
          right: 26px;
          z-index: 2;
        }

        .eoPP-lightboxBody {
          max-width: 1250px;
          width: 100%;
          max-height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 17px;
        }

        .eoPP-lightboxBody > img {
          max-width: 100%;
          max-height: calc(100vh - 160px);
          object-fit: contain;
          border: 1px solid #333;
          border-radius: 9px;
        }

        .eoPP-lightboxBody > p {
          font-size: 13px;
          color: #c1c1c1;
          text-align: center;
          margin: 0;
        }

        /* TABLET */

        @media (max-width: 1040px) {
          .eoPP-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .eoPP-gallery {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .eoPP-headingRow {
            align-items: flex-start;
          }
        }

        /* MOBILE */

        @media (max-width: 650px) {
          .eoPP {
            padding: 64px 0 76px;
          }

          .eoPP-shell {
            width: calc(100% - 32px);
          }

          .eoPP-headingRow {
            flex-direction: column;
            gap: 15px;
          }

          .eoPP-heading h2 {
            font-size: 39px;
          }

          .eoPP-headingRow > p {
            font-size: 13px;
          }

          .eoPP-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .eoPP-cardImage {
            height: 205px;
          }

          .eoPP-cardBody {
            padding: 21px;
          }

          .eoPP-overlay {
            padding: 12px;
          }

          .eoPP-dialog {
            padding: 15px 14px 25px;
            border-radius: 13px;
          }

          .eoPP-gallery {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .eoPP-itemImage {
            height: 205px;
          }

          .eoPP-dialogHeader h2 {
            font-size: 32px;
          }

          .eoPP-lightbox {
            padding: 70px 12px 28px;
          }

          .eoPP-lightboxClose {
            top: 13px;
            right: 13px;
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .eoPP *,
          .eoPP-overlay *,
          .eoPP-lightbox * {
            transition: none !important;
            animation: none !important;
          }
        }

      `}</style>
    </section>
  );
}
