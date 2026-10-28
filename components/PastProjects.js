
"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./PastProjects.module.css";

/* ==========================================
   EROLL OLIVER - PAST PROJECTS
   PROJECT IMAGE SOURCES
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

    preview:
      "/images/projects-automation.svg",

    tags: [
      "n8n",
      "Make",
      "Zapier",
      "GoHighLevel",
    ],

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

  /* ========================================
     CHAT AGENTS
  ======================================== */

  {
    id: "chat",
    number: "02",
    name: "Chat Agents",

    description:
      "Intelligent conversational AI agents that handle customer inquiries and automate support.",

    details:
      "Intelligent conversational AI agents that handle customer inquiries and automate support. From simple FAQ bots to complex multi-turn conversation systems.",

    preview:
      "/images/projects-chat.svg",

    tags: [
      "AI Chatbots",
      "NLP",
      "Support",
    ],

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

  /* ========================================
     VOICE AGENTS
  ======================================== */

  {
    id: "voice",
    number: "03",
    name: "Voice Agents",

    description:
      "AI-powered voice assistants for phone automation, bookings, and customer interactions.",

    details:
      "AI-powered voice assistants for phone automation, bookings, and customer interactions. Natural conversations that handle real business calls.",

    preview:
      "/images/projects-voice.svg",

    tags: [
      "Retell AI",
      "VAPI",
      "Telephony",
    ],

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

  /* ========================================
     GOHIGHLEVEL WEBSITES / FUNNELS
  ======================================== */

  {
    id: "ghl",
    number: "04",
    name: "GoHighLevel Websites / Funnels",

    description:
      "Custom websites and sales funnels built on the GoHighLevel platform for lead generation.",

    details:
      "Custom-built websites and high-converting funnels designed to scale your business using GoHighLevel.",

    preview:
      "/images/projects-funnels.svg",

    tags: [
      "GoHighLevel",
      "Funnels",
      "Landing Pages",
    ],

    items: [
      {
        title: "Moskowitz Legal Group",
        image: "/shots/moskowitz-legal-group.png",
        website: "https://www.moskowitzlegalgroup.com/",
      },
      {
        title: "4RT Cars",
        image: "/shots/4rt-cars.png",
        website: "https://4rtcars.com/",
      },
      {
        title: "Swanson Reserve Capital",
        image:
          CDN + "69d4198662c742820992012e.png",
        website:
          "https://swansonreservecapital.com/",
      },
      {
        title: "The Flooring Market",
        image:
          CDN + "69d41a494ba93ac572be4d00.png",
        website:
          "https://theflooringmarket.net/",
      },
      {
        title: "The Xtreme Coatings",
        image:
          CDN + "69d41a9aeacb9473a436fad1.png",
        website:
          "https://xtreme-coatings.com/",
      },
      {
        title: "Stone Systems",
        image:
          CDN + "69d41b27a7dcb4cff0ee6611.png",
        website:
          "https://xtreme-coatings.com/",
      },
    ],
  },
];

/* ==========================================
   IMAGE COMPONENT
   FIXED DIMENSIONS PREVENT LAYOUT JUMPS
========================================== */

function ProjectImage({ src, alt, variant = "preview", eager = false }) {
  const [failed, setFailed] = useState(false);
  const imageClass = variant === "preview" ? styles.previewMedia : styles.galleryMedia;

  if (!src || failed) {
    return <div className={`${imageClass} ${styles.imageFallback}`} role="img" aria-label={`${alt} image unavailable`}>PREVIEW UNAVAILABLE</div>;
  }

  return <img src={src} alt={alt} width={variant === "preview" ? 900 : 1200} height={variant === "preview" ? 520 : 800} className={imageClass} loading={eager ? "eager" : "lazy"} decoding="async" onError={() => setFailed(true)} />;
}

/* ==========================================
   MAIN PAST PROJECTS COMPONENT
========================================== */

export default function PastProjects() {
  const [activeId, setActiveId] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);

  const lastCategoryButton = useRef(null);
  const lastImageButton = useRef(null);

  const closeDialogButton = useRef(null);
  const closeLightboxButton = useRef(null);

  const dialogElement = useRef(null);
  const lightboxElement = useRef(null);

  const activeProject = PROJECTS.find(
    (project) => project.id === activeId
  );

  /* ========================================
     OPEN CATEGORY
  ======================================== */

  const openCategory = (id, event) => {
    lastCategoryButton.current =
      event.currentTarget;

    setActiveId(id);
  };

  /* ========================================
     CLOSE CATEGORY
  ======================================== */

  const closeCategory = () => {
    setZoomImage(null);
    setActiveId(null);
  };

  /* ========================================
     OPEN IMAGE LIGHTBOX
  ======================================== */

  const openImage = (item, event) => {
    lastImageButton.current =
      event.currentTarget;

    setZoomImage(item);
  };

  const closeImage = () => {
    setZoomImage(null);

    requestAnimationFrame(() => {
      lastImageButton.current?.focus();
    });
  };

  /* ========================================
     LOCK BACKGROUND SCROLL
  ======================================== */

  useEffect(() => {
    if (!activeId) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeDialogButton.current?.focus();

    return () => {
      document.body.style.overflow =
        oldOverflow;

      lastCategoryButton.current?.focus();
    };
  }, [activeId]);

  /* ========================================
     LIGHTBOX FOCUS
  ======================================== */

  useEffect(() => {
    if (zoomImage) {
      closeLightboxButton.current?.focus();
    }
  }, [zoomImage]);

  /* ========================================
     KEYBOARD ACCESSIBILITY
  ======================================== */

  useEffect(() => {
    if (!activeId) return;

    function onKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();

        if (zoomImage) {
          closeImage();
        } else {
          closeCategory();
        }

        return;
      }

      if (event.key !== "Tab") return;

      const root = zoomImage
        ? lightboxElement.current
        : dialogElement.current;

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

    document.addEventListener(
      "keydown",
      onKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        onKeyDown
      );
    };
  }, [activeId, zoomImage]);

  /* ========================================
     RENDER
  ======================================== */

  return (
    <section
      className={styles.section}
      id="automation-projects"
      aria-labelledby="past-projects-title"
    >

      <div className={styles.shell}>

        {/* SECTION HEADING */}

        <div className={styles.heading}>

          <div className={styles.kicker}>
            <span className={styles.kickerLine} />
            04 / PROJECT SHOWCASE
          </div>

          <div className={styles.headingRow}>

            <h2
              id="past-projects-title"
              className={styles.title}
            >
              Past Projects.
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

        <div className={styles.grid}>

          {PROJECTS.map((project) => (

            <button
              key={project.id}
              type="button"
              className={styles.card}
              onClick={(event) => openCategory(project.id, event)}
              aria-label={`Explore ${project.name} gallery`}
            >

              <div className={styles.cardImage}>
                <ProjectImage src={project.preview} alt={project.name} eager />
                <span className={styles.count}>{project.items.length} EXAMPLES</span>
              </div>

              <div className={styles.cardBody}>

                <span className={styles.index}>
                  {project.number} / 04
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className={styles.tags}>

                  {project.tags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

                <span className={styles.explore}>
                  EXPLORE PROJECTS
                  <b aria-hidden="true">↗</b>
                </span>

              </div>

            </button>

          ))}

        </div>

      </div>

      {/* ======================================
          PROJECT GALLERY MODAL
      ====================================== */}

      {activeProject &&
        typeof document !== "undefined" &&
        createPortal(

          <>

            <div
              className={styles.overlay}
              onMouseDown={(event) => {
                if (
                  event.target ===
                  event.currentTarget
                ) {
                  closeCategory();
                }
              }}
            >

              <div
                className={styles.dialog}
                ref={dialogElement}
                role="dialog"
                aria-modal="true"
                aria-labelledby="past-projects-dialog-title"
                aria-describedby="past-projects-dialog-description"
              >

                {/* MODAL TOOLBAR */}

                <div className={styles.toolbar}>

                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={closeCategory}
                  >
                    ← Back to projects
                  </button>

                  <button
                    type="button"
                    className={styles.closeButton}
                    ref={closeDialogButton}
                    onClick={closeCategory}
                    aria-label="Close project gallery"
                  >
                    ×
                  </button>

                </div>

                {/* MODAL HEADING */}

                <div className={styles.dialogHeader}>

                  <p className={styles.dialogLabel}>
                    04.{activeProject.number} /
                    PROJECT GALLERY
                  </p>

                  <h2 id="past-projects-dialog-title">
                    {activeProject.name}
                    <span>.</span>
                  </h2>

                  <p id="past-projects-dialog-description">
                    {activeProject.details}
                  </p>

                </div>

                {/* GALLERY GRID */}

                <div className={styles.gallery}>

                  {activeProject.items.map(
                    (item, index) => (

                      <article
                        className={styles.galleryItem}
                        key={`${activeProject.id}-${index}`}
                      >

                        <button
                          type="button"
                          className={styles.galleryImageButton}
                          onClick={(event) =>
                            openImage(item, event)
                          }
                          aria-label={`Enlarge ${item.title} image`}
                        >

                          <ProjectImage src={item.image} alt={item.title} variant="gallery" />

                          <span className={styles.zoomHint}>
                            VIEW IMAGE ↗
                          </span>

                        </button>

                        <div className={styles.galleryItemBottom}>

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

                    )
                  )}

                </div>

              </div>

            </div>


            {/* ======================================
                FULLSCREEN IMAGE LIGHTBOX
            ====================================== */}

            {zoomImage && (

              <div
                className={styles.lightbox}
                role="dialog"
                aria-modal="true"
                aria-label={`${zoomImage.title} enlarged image`}
                ref={lightboxElement}
                onMouseDown={(event) => {
                  if (
                    event.target ===
                    event.currentTarget
                  ) {
                    closeImage();
                  }
                }}
              >

                <button
                  type="button"
                  className={styles.lightboxClose}
                  ref={closeLightboxButton}
                  onClick={closeImage}
                  aria-label="Close enlarged image"
                >
                  ×
                </button>

                <div className={styles.lightboxBody}>

                  <ProjectImage src={zoomImage.image} alt={zoomImage.title} variant="gallery" eager />

                  <p>{zoomImage.title}</p>

                </div>

              </div>

            )}

          </>,
          document.body
        )}

    </section>
  );
}
