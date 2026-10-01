import { tools, experience } from '../../lib/data';

export const metadata = {
  title: 'About — Eroll Oliver',
};

/* =========================================================
   PAGE STYLES
========================================================= */

const aboutStyles = String.raw`

/* =========================================================
   PAGE
========================================================= */

.about-page {
  width: 100%;
  min-height: 100vh;
  background: #080808;
  color: #ffffff;
  overflow: hidden;
}


/* =========================================================
   CONTAINERS
========================================================= */

.about-container,
.section-container,
.career-container,
.hobbies-container {
  width: calc(100% - 80px);
  max-width: 1390px;
  margin: 0 auto;
}


/* =========================================================
   ABOUT HERO
========================================================= */

.about-hero {
  width: 100%;
  min-height: calc(100vh - 90px);

  display: flex;
  align-items: center;

  padding: 65px 0 80px;
}


/* =========================================================
   ABOUT GRID
========================================================= */

.about-grid {
  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1.35fr)
    minmax(350px, 450px);

  gap: 75px;

  align-items: center;
}


/* =========================================================
   ABOUT CONTENT
========================================================= */

.about-content {
  width: 100%;
  max-width: 710px;

  margin: 0;
  padding: 0;
}


.about-label,
.section-label {
  margin: 0 0 20px;

  color: #747474;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.34em;

  text-transform: uppercase;
}


.about-content h1 {
  width: 100%;
  max-width: 650px;

  margin: 0 0 31px;

  color: #ffffff;

  font-size: clamp(46px, 4.1vw, 66px);
  font-weight: 700;

  line-height: 1.03;

  letter-spacing: -0.048em;
}


.about-intro {
  width: 100%;
  max-width: 690px;

  margin: 0;

  color: #b5b5b5;

  font-size: 16px;
  font-weight: 500;

  line-height: 1.62;
}


.about-description {
  width: 100%;
  max-width: 690px;

  margin: 25px 0 0;

  color: #818181;

  font-size: 14px;

  line-height: 1.68;
}


/* =========================================================
   STATS
========================================================= */

.about-stats {
  width: 100%;

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 16px;

  margin-top: 38px;
}


.stat-box {
  min-width: 0;
  height: 112px;

  padding: 15px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  text-align: center;

  background: #111111;

  border: 1px solid #313131;
  border-radius: 12px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease;
}


.stat-box:hover {
  transform: translateY(-3px);

  background: #151515;

  border-color: #555555;
}


.stat-box strong {
  margin-bottom: 9px;

  color: #ffffff;

  font-size: 26px;
  font-weight: 700;

  line-height: 1;
}


.stat-box span {
  color: #777777;

  font-size: 8px;
  font-weight: 600;

  line-height: 1.45;

  letter-spacing: 0.045em;
}


/* =========================================================
   PROFILE CARD
========================================================= */

.profile-card {
  width: 100%;

  overflow: hidden;

  background: #101010;

  border: 1px solid #323232;
  border-radius: 12px;
}


/* =========================================================
   PROFILE PHOTO
========================================================= */

.profile-photo-wrap {
  width: 100%;
  height: 520px;

  overflow: hidden;

  background: #161616;
}


.profile-photo {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;

  filter: grayscale(100%);

  transition:
    filter 0.45s ease,
    transform 0.65s cubic-bezier(0.2, 0.7, 0.2, 1);
}


.profile-photo-wrap:hover .profile-photo {
  filter: grayscale(0%);

  transform: scale(1.025);
}


/* =========================================================
   PROFILE DETAILS
========================================================= */

.profile-details {
  padding: 21px 20px 20px;
}


.profile-details h2 {
  margin: 0;

  color: #ffffff;

  font-size: 18px;
  font-weight: 700;

  line-height: 1.2;
}


.profile-role {
  margin: 6px 0 15px;

  color: #797979;

  font-size: 11px;

  line-height: 1.4;
}


.profile-item {
  display: flex;
  align-items: center;

  gap: 8px;

  margin-top: 7px;

  color: #939393;

  font-size: 11px;

  line-height: 1.4;
}


.profile-item svg {
  width: 12px;
  height: 12px;

  flex: 0 0 12px;
}


.profile-item:first-of-type svg {
  color: #a74767;
}


.profile-item a {
  color: #9b9b9b;

  text-decoration: underline;

  text-underline-offset: 3px;

  transition: color 0.25s ease;
}


.profile-item a:hover {
  color: #ffffff;
}


/* =========================================================
   SOCIAL ICONS
========================================================= */

.profile-socials {
  display: flex;
  align-items: center;

  gap: 10px;

  margin-top: 18px;
}


.profile-socials a {
  width: 33px;
  height: 33px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #9a9a9a;

  background: transparent;

  border: 1px solid #424242;
  border-radius: 50%;

  text-decoration: none;

  transition:
    color 0.25s ease,
    background-color 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}


.profile-socials a svg {
  width: 14px;
  height: 14px;
}


.profile-socials a:hover {
  color: #111111;

  background: #ffffff;

  border-color: #ffffff;

  transform: translateY(-2px);
}


/* =========================================================
   DOWNLOAD CV
========================================================= */

.download-cv {
  width: 100%;
  height: 38px;

  margin-top: 18px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #101010;

  background: #ffffff;

  border: 1px solid #ffffff;
  border-radius: 999px;

  text-decoration: none;

  text-transform: uppercase;

  font-size: 9px;
  font-weight: 700;

  letter-spacing: 0.08em;

  transition:
    color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}


.download-cv:hover {
  color: #ffffff;

  background: transparent;

  transform: translateY(-2px);
}


/* =========================================================
   TOOLS SECTION
========================================================= */

.inner-section {
  width: 100%;

  padding: 90px 0;

  background: #080808;
}


.tools-section {
  border-top: 1px solid #171717;
}


.section-container > h2 {
  margin: 0 0 40px;

  color: #ffffff;

  font-size: clamp(32px, 4vw, 48px);

  letter-spacing: -0.04em;
}


.tools-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(160px, 1fr));

  gap: 15px;
}


.tool-card {
  min-height: 130px;

  padding: 20px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  gap: 14px;

  background: #101010;

  border: 1px solid #2e2e2e;
  border-radius: 12px;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease;
}


.tool-card:hover {
  transform: translateY(-4px);

  border-color: #555555;

  background: #131313;
}


.tool-icon {
  width: 44px;
  height: 44px;

  display: flex;

  align-items: center;
  justify-content: center;
}


.tool-icon img {
  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
}


.tool-card p {
  margin: 0;

  color: #b0b0b0;

  font-size: 13px;
}


/* =========================================================
   CAREER SECTION
========================================================= */

.career-section {
  width: 100%;

  padding: 110px 0 130px;

  border-top: 1px solid #171717;

  background:
    radial-gradient(
      circle at 8% 45%,
      rgba(255, 255, 255, 0.025),
      transparent 28%
    ),
    radial-gradient(
      circle at 92% 65%,
      rgba(255, 255, 255, 0.025),
      transparent 26%
    ),
    #080808;
}


.career-container {
  position: relative;
}


/* =========================================================
   RADIO CONTROLS
========================================================= */

.career-radio {
  position: absolute;

  width: 1px;
  height: 1px;

  opacity: 0;

  pointer-events: none;
}


/* =========================================================
   CAREER TABS
========================================================= */

.career-tabs {
  width: fit-content;

  margin: 0 auto 75px;

  padding: 5px;

  display: flex;

  align-items: center;

  background: #111111;

  border: 1px solid #353535;

  border-radius: 999px;
}


.career-tabs label {
  min-width: 125px;
  height: 44px;

  padding: 0 22px;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #888888;

  border-radius: 999px;

  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  transition:
    color 0.25s ease,
    background 0.25s ease;
}


.career-tabs label:hover {
  color: #ffffff;
}


#career-experience:checked
  ~ .career-tabs
  label[for="career-experience"],

#career-education:checked
  ~ .career-tabs
  label[for="career-education"],

#career-achievements:checked
  ~ .career-tabs
  label[for="career-achievements"] {
  color: #111111;

  background: #ffffff;
}


/* =========================================================
   CAREER PANELS
========================================================= */

.career-panel {
  display: none;

  width: 100%;
}


#career-experience:checked
  ~ .career-panels
  .experience-panel {
  display: block;
}


#career-education:checked
  ~ .career-panels
  .education-panel {
  display: block;
}


#career-achievements:checked
  ~ .career-panels
  .achievements-panel {
  display: block;
}


/* =========================================================
   TIMELINE
========================================================= */

.timeline-row {
  width: 100%;

  display: grid;

  grid-template-columns:
    300px
    55px
    minmax(0, 1fr);

  min-height: 150px;
}


.timeline-left {
  padding: 0 30px 48px 0;

  display: flex;
  flex-direction: column;

  align-items: flex-end;

  text-align: right;
}


.timeline-date {
  min-height: 30px;

  margin-bottom: 14px;

  padding: 5px 17px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  color: #979797;

  border: 1px solid #3b3b3b;
  border-radius: 999px;

  font-size: 10px;
  font-weight: 600;

  letter-spacing: 0.09em;

  text-transform: uppercase;
}


.timeline-title-row {
  width: 100%;

  display: flex;

  align-items: center;
  justify-content: flex-end;

  gap: 12px;
}


.timeline-title-info {
  max-width: 225px;
}


.timeline-title-info h3 {
  margin: 0;

  color: #ffffff;

  font-size: 20px;
  font-weight: 700;

  line-height: 1.3;
}


.timeline-title-info p {
  margin: 7px 0 0;

  color: #727272;

  font-size: 14px;
  font-weight: 500;
}


/* =========================================================
   TIMELINE LOGO
========================================================= */

.timeline-logo {
  width: 38px;
  height: 38px;

  flex: 0 0 38px;

  overflow: hidden;

  display: flex;

  align-items: center;
  justify-content: center;

  color: #111111;

  background: #ffffff;

  border-radius: 7px;

  font-size: 10px;
  font-weight: 800;
}


.timeline-logo img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  padding: 4px;

  background: #ffffff;
}


.achievement-icon {
  color: #ffffff;

  background: #151515;

  border: 1px solid #444444;

  font-size: 17px;
}


/* =========================================================
   TIMELINE CENTER
========================================================= */

.timeline-center {
  position: relative;

  display: flex;

  justify-content: center;
}


.timeline-center::before {
  content: '';

  position: absolute;

  top: 12px;
  bottom: 0;

  width: 1px;

  background: #323232;
}


.timeline-row:last-child .timeline-center::before {
  bottom: 50px;
}


.timeline-dot {
  position: relative;

  z-index: 2;

  width: 13px;
  height: 13px;

  margin-top: 8px;

  background: #080808;

  border: 2px solid #ffffff;

  border-radius: 50%;
}


/* =========================================================
   TIMELINE RIGHT
========================================================= */

.timeline-right {
  padding: 4px 0 48px 5px;
}


.timeline-description {
  max-width: 930px;

  margin: 0;

  color: #8b8b8b;

  font-size: 16px;
  font-weight: 500;

  line-height: 1.65;
}


/* =========================================================
   TAGS
========================================================= */

.timeline-tags {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 17px;
}


.timeline-tags span {
  min-height: 29px;

  padding: 4px 15px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  color: #9a9a9a;

  background: #111111;

  border: 1px solid #383838;

  border-radius: 999px;

  font-size: 11px;
  font-weight: 500;
}


/* =========================================================
   HOBBIES SECTION
========================================================= */

.hobbies-section {
  width: 100%;

  padding: 90px 0 105px;

  border-top: 1px solid #171717;

  background:
    radial-gradient(
      circle at 8% 25%,
      rgba(255, 255, 255, 0.025),
      transparent 28%
    ),
    radial-gradient(
      circle at 92% 70%,
      rgba(255, 255, 255, 0.018),
      transparent 28%
    ),
    #080808;
}


/* =========================================================
   BEYOND WORK LABEL
========================================================= */

.hobbies-label {
  display: flex;

  align-items: center;

  gap: 15px;

  margin-bottom: 26px;

  color: #777777;

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 0.32em;

  text-transform: uppercase;
}


.hobbies-label-line {
  width: 50px;
  height: 1px;

  display: block;

  background: #777777;
}


/* =========================================================
   HOBBIES HEADING
========================================================= */

.hobbies-title {
  margin: 0 0 42px;

  color: #ffffff;

  font-size: clamp(42px, 4vw, 62px);
  font-weight: 700;

  line-height: 1;

  letter-spacing: -0.045em;
}


/* =========================================================
   HOBBY PILLS
========================================================= */

.hobbies-list {
  display: flex;

  flex-wrap: wrap;

  align-items: center;

  gap: 14px;
}


.hobby-pill {
  min-width: 112px;
  min-height: 52px;

  padding: 10px 27px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  color: #a4a4a4;

  background: #0d0d0d;

  border: 1px solid #363636;

  border-radius: 999px;

  font-size: 16px;
  font-weight: 500;

  cursor: default;

  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}


.hobby-pill:hover {
  color: #111111;

  background: #ffffff;

  border-color: #ffffff;

  transform: translateY(-3px);
}


/* =========================================================
   LARGE DESKTOP
========================================================= */

@media (min-width: 1500px) {

  .about-container,
  .section-container,
  .career-container,
  .hobbies-container {
    max-width: 1420px;
  }


  .about-grid {
    grid-template-columns:
      minmax(0, 1.4fr)
      450px;

    gap: 90px;
  }

}


/* =========================================================
   LAPTOP
========================================================= */

@media (max-width: 1200px) {

  .about-container,
  .section-container,
  .career-container,
  .hobbies-container {
    width: calc(100% - 60px);
  }


  .about-grid {
    grid-template-columns:
      minmax(0, 1fr)
      380px;

    gap: 45px;
  }


  .about-content h1 {
    font-size: 52px;
  }


  .profile-photo-wrap {
    height: 470px;
  }


  .timeline-row {
    grid-template-columns:
      260px
      48px
      minmax(0, 1fr);
  }


  .timeline-title-info h3 {
    font-size: 18px;
  }


  .timeline-description {
    font-size: 15px;
  }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 900px) {

  .about-container,
  .section-container,
  .career-container,
  .hobbies-container {
    width: calc(100% - 40px);
  }


  .about-hero {
    min-height: auto;

    padding: 60px 0;
  }


  .about-grid {
    grid-template-columns: 1fr;

    gap: 50px;
  }


  .about-content {
    max-width: 700px;
  }


  .profile-card {
    width: 100%;

    max-width: 480px;
  }


  .profile-photo-wrap {
    height: 580px;
  }


  .career-section {
    padding: 90px 0 110px;
  }


  .career-tabs {
    margin-bottom: 55px;
  }


  .timeline-row {
    position: relative;

    display: block;

    min-height: auto;

    padding:
      0
      0
      50px
      38px;
  }


  .timeline-left {
    padding: 0 0 18px;

    align-items: flex-start;

    text-align: left;
  }


  .timeline-title-row {
    justify-content: flex-start;
  }


  .timeline-title-info {
    max-width: 500px;
  }


  .timeline-center {
    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;

    width: 20px;
  }


  .timeline-center::before {
    top: 12px;

    bottom: 0;
  }


  .timeline-row:last-child .timeline-center::before {
    bottom: 20px;
  }


  .timeline-right {
    padding: 0;
  }


  .timeline-description {
    max-width: none;
  }


  .hobbies-section {
    padding: 80px 0 90px;
  }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 650px) {

  .about-container,
  .section-container,
  .career-container,
  .hobbies-container {
    width: calc(100% - 32px);
  }


  .about-hero {
    padding: 45px 0;
  }


  .about-content h1 {
    margin-bottom: 24px;

    font-size: 39px;
  }


  .about-intro {
    font-size: 15px;
  }


  .about-description {
    margin-top: 21px;

    font-size: 13px;
  }


  .about-stats {
    grid-template-columns: repeat(2, 1fr);

    gap: 12px;

    margin-top: 30px;
  }


  .profile-card {
    max-width: 100%;
  }


  .profile-photo-wrap {
    height: 500px;
  }


  .profile-details {
    padding: 22px;
  }


  .inner-section {
    padding: 70px 0;
  }


  .career-section {
    padding: 70px 0 90px;
  }


  .career-tabs {
    width: 100%;

    margin-bottom: 45px;

    padding: 4px;
  }


  .career-tabs label {
    flex: 1;

    min-width: 0;

    height: 42px;

    padding: 0 8px;

    font-size: 12px;
  }


  .timeline-row {
    padding-left: 30px;

    padding-bottom: 45px;
  }


  .timeline-date {
    font-size: 9px;

    padding: 5px 13px;
  }


  .timeline-title-info h3 {
    font-size: 18px;
  }


  .timeline-title-info p {
    font-size: 12px;
  }


  .timeline-logo {
    width: 35px;
    height: 35px;

    flex-basis: 35px;
  }


  .timeline-description {
    font-size: 14px;
  }


  .timeline-tags {
    gap: 7px;
  }


  .timeline-tags span {
    min-height: 27px;

    padding: 4px 11px;

    font-size: 10px;
  }


  /* HOBBIES */

  .hobbies-section {
    padding: 65px 0 75px;
  }


  .hobbies-label {
    margin-bottom: 20px;

    font-size: 9px;

    letter-spacing: 0.27em;
  }


  .hobbies-label-line {
    width: 38px;
  }


  .hobbies-title {
    margin-bottom: 30px;

    font-size: 38px;
  }


  .hobbies-list {
    gap: 10px;
  }


  .hobby-pill {
    min-width: 0;

    min-height: 46px;

    padding: 9px 20px;

    font-size: 14px;
  }

}


/* =========================================================
   SMALL MOBILE
========================================================= */

@media (max-width: 430px) {

  .about-content h1 {
    font-size: 34px;
  }


  .profile-photo-wrap {
    height: 430px;
  }


  .stat-box {
    height: 100px;
  }


  .stat-box strong {
    font-size: 23px;
  }


  .career-tabs label {
    font-size: 11px;
  }


  .timeline-title-row {
    align-items: flex-start;
  }


  .hobbies-title {
    font-size: 34px;
  }


  .hobby-pill {
    min-height: 43px;

    padding: 8px 17px;

    font-size: 13px;
  }

}

`;


/* =========================================================
   ABOUT PAGE
========================================================= */

export default function About() {
  return (
    <>
      <main className="about-page">

        {/* =====================================================
            MAIN ABOUT SECTION
        ====================================================== */}

        <section className="about-hero">

          <div className="about-container">

            <div className="about-grid">


              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <div className="about-content">

                <p className="about-label">
                  ABOUT ME
                </p>


                <h1>
                  The developer behind the sites
                </h1>


                <p className="about-intro">
                  WordPress and Go HighLevel (GHL) specialist with over 6 years
                  of experience in CRM development, sales automation, and lead
                  generation. I build responsive websites and intelligent
                  automation workflows — including AI agent–powered systems —
                  that help businesses convert more leads and save time.
                </p>


                <p className="about-description">
                  Based in Karachi, Pakistan, I've spent the last six years
                  working with agencies and businesses across the world —
                  building WordPress websites, Shopify stores, high-converting
                  funnels, and Go HighLevel CRM systems. My focus is always the
                  same: a site that loads fast, looks professional, and turns
                  visitors into leads — backed by automation that follows up
                  with every single one of them.
                </p>


                {/* =================================================
                    STATS
                ================================================== */}

                <div className="about-stats">

                  <div className="stat-box">
                    <strong>
                      6+
                    </strong>

                    <span>
                      YEARS
                      <br />
                      EXPERIENCE
                    </span>
                  </div>


                  <div className="stat-box">
                    <strong>
                      500+
                    </strong>

                    <span>
                      SITES
                      <br />
                      LAUNCHED
                    </span>
                  </div>


                  <div className="stat-box">
                    <strong>
                      4
                    </strong>

                    <span>
                      COMPANIES
                    </span>
                  </div>


                  <div className="stat-box">
                    <strong>
                      24/7
                    </strong>

                    <span>
                      AUTOMATION
                    </span>
                  </div>

                </div>

              </div>


              {/* =================================================
                  PROFILE CARD
              ================================================== */}

              <div className="profile-card">

                <div className="profile-photo-wrap">

                  <img
                    src="https://assets.cdn.filesafe.space/3vAIewI0SItcnZDvPy72/media/6abd22b77f8e19690f70629b.jpg"
                    alt="Eroll Oliver"
                    className="profile-photo"
                  />

                </div>


                <div className="profile-details">

                  <h2>
                    Eroll Oliver
                  </h2>


                  <p className="profile-role">
                    WordPress Developer &amp; GHL Expert
                  </p>


                  {/* LOCATION */}

                  <div className="profile-item">

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <circle
                        cx="12"
                        cy="9"
                        r="2.3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                    </svg>

                    <span>
                      Philippines
                    </span>

                  </div>


                  {/* EMAIL */}

                  <div className="profile-item">

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >

                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="m4 7 8 6 8-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                    </svg>


                    <a href="mailto:erolloliver97@gmail.com">
                      erolloliver97@gmail.com
                    </a>

                  </div>


                  {/* LANGUAGE */}

                  <div className="profile-item">

                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >

                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M3.5 12h17M12 3c2.2 2.5 3.4 5.5 3.4 9S14.2 18.5 12 21M12 3c-2.2 2.5-3.4 5.5-3.4 9S9.8 18.5 12 21"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                    </svg>


                    <span>
                      English · Cebuano
                    </span>

                  </div>


                  {/* =================================================
                      SOCIAL MEDIA
                  ================================================== */}

                  <div className="profile-socials">


                    {/* LINKEDIN */}

                    <a
                      href="https://www.linkedin.com/in/eroll-oliver-20009b290/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                    >

                      <svg viewBox="0 0 24 24">

                        <path
                          d="M6.5 8.4H3.4V19h3.1V8.4ZM5 3A1.8 1.8 0 1 0 5 6.6 1.8 1.8 0 0 0 5 3Zm4 5.4V19h3.1v-5.3c0-1.4.3-2.8 2.1-2.8 1.8 0 1.8 1.7 1.8 2.9V19h3.1v-5.9c0-2.9-.6-5.1-4-5.1-1.6 0-2.7.9-3.1 1.7h-.1V8.4H9Z"
                          fill="currentColor"
                        />

                      </svg>

                    </a>


                    {/* INSTAGRAM */}

                    <a
                      href="https://www.instagram.com/eroll_onnn/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                      >

                        <rect
                          x="4"
                          y="4"
                          width="16"
                          height="16"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />

                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        />

                        <circle
                          cx="17.2"
                          cy="6.8"
                          r="1"
                          fill="currentColor"
                        />

                      </svg>

                    </a>


                    {/* FACEBOOK */}

                    <a
                      href="https://www.facebook.com/eroll.oliver.98"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >

                      <svg viewBox="0 0 24 24">

                        <path
                          d="M14 8h3V4h-3c-3.2 0-5 1.9-5 5v2H6v4h3v7h4v-7h3.2l.8-4H13V9c0-.7.3-1 1-1Z"
                          fill="currentColor"
                        />

                      </svg>

                    </a>

                  </div>


                  {/* DOWNLOAD CV */}

                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="download-cv"
                  >
                    Download CV
                  </a>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNOLOGIES
        ====================================================== */}

        <section className="inner-section tools-section">

          <div className="section-container">

            <p className="section-label">
              MY TOOLS
            </p>


            <h2>
              Technologies I work with
            </h2>


            <div className="tools-grid">

              {tools.map(([name, image]) => (

                <div
                  className="tool-card"
                  key={name}
                >

                  <div className="tool-icon">

                    <img
                      src={image}
                      alt={name}
                    />

                  </div>


                  <p>
                    {name}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            EXPERIENCE / EDUCATION / ACHIEVEMENTS
        ====================================================== */}

        <section className="career-section">

          <div className="career-container">


            {/* =================================================
                RADIO CONTROLS
            ================================================== */}

            <input
              type="radio"
              name="career-tabs"
              id="career-experience"
              className="career-radio"
              defaultChecked
            />


            <input
              type="radio"
              name="career-tabs"
              id="career-education"
              className="career-radio"
            />


            <input
              type="radio"
              name="career-tabs"
              id="career-achievements"
              className="career-radio"
            />


            {/* =================================================
                TAB BUTTONS
            ================================================== */}

            <div className="career-tabs">

              <label htmlFor="career-experience">
                Experience
              </label>


              <label htmlFor="career-education">
                Education
              </label>


              <label htmlFor="career-achievements">
                Achievements
              </label>

            </div>


            {/* =================================================
                PANELS
            ================================================== */}

            <div className="career-panels">


              {/* =================================================
                  EXPERIENCE
              ================================================== */}

              <div className="career-panel experience-panel">

                {experience.map((item, index) => (

                  <div
                    className="timeline-row"
                    key={`${item.company}-${index}`}
                  >


                    {/* LEFT */}

                    <div className="timeline-left">

                      <span className="timeline-date">
                        {item.period}
                      </span>


                      <div className="timeline-title-row">

                        <div className="timeline-title-info">

                          <h3>
                            {item.title}
                          </h3>


                          <p>
                            {item.company}
                          </p>

                        </div>


                        <div className="timeline-logo">

                          {item.logo ? (

                            <img
                              src={item.logo}
                              alt={`${item.company} logo`}
                            />

                          ) : (

                            <span>
                              EO
                            </span>

                          )}

                        </div>

                      </div>

                    </div>


                    {/* CENTER */}

                    <div className="timeline-center">

                      <span className="timeline-dot" />

                    </div>


                    {/* RIGHT */}

                    <div className="timeline-right">

                      <p className="timeline-description">
                        Website development, responsive layouts, funnels,
                        CRM systems, automation workflows and digital
                        experiences focused on improving usability and lead
                        management.
                      </p>


                      <div className="timeline-tags">

                        <span>
                          WordPress
                        </span>

                        <span>
                          Elementor
                        </span>

                        <span>
                          GoHighLevel
                        </span>

                        <span>
                          Funnels
                        </span>

                        <span>
                          Automation
                        </span>

                        <span>
                          SEO
                        </span>

                      </div>

                    </div>

                  </div>

                ))}

              </div>


              {/* =================================================
                  EDUCATION
              ================================================== */}

              <div className="career-panel education-panel">


                {/* EDUCATION 1 */}

                <div className="timeline-row">

                  <div className="timeline-left">

                    <span className="timeline-date">
                      ADD YEAR
                    </span>


                    <div className="timeline-title-row">

                      <div className="timeline-title-info">

                        <h3>
                          College / University
                        </h3>


                        <p>
                          Add your school name
                        </p>

                      </div>


                      <div className="timeline-logo">
                        ED
                      </div>

                    </div>

                  </div>


                  <div className="timeline-center">
                    <span className="timeline-dot" />
                  </div>


                  <div className="timeline-right">

                    <p className="timeline-description">
                      Add your degree, course, major or other education
                      information here.
                    </p>

                  </div>

                </div>


                {/* EDUCATION 2 */}

                <div className="timeline-row">

                  <div className="timeline-left">

                    <span className="timeline-date">
                      ADD YEAR
                    </span>


                    <div className="timeline-title-row">

                      <div className="timeline-title-info">

                        <h3>
                          Certification
                        </h3>


                        <p>
                          Add institution
                        </p>

                      </div>


                      <div className="timeline-logo">
                        ED
                      </div>

                    </div>

                  </div>


                  <div className="timeline-center">
                    <span className="timeline-dot" />
                  </div>


                  <div className="timeline-right">

                    <p className="timeline-description">
                      Add your professional certification, training program
                      or technical qualification here.
                    </p>

                  </div>

                </div>


                {/* EDUCATION 3 */}

                <div className="timeline-row">

                  <div className="timeline-left">

                    <span className="timeline-date">
                      ADD YEAR
                    </span>


                    <div className="timeline-title-row">

                      <div className="timeline-title-info">

                        <h3>
                          Additional Education
                        </h3>


                        <p>
                          Add school or organization
                        </p>

                      </div>


                      <div className="timeline-logo">
                        ED
                      </div>

                    </div>

                  </div>


                  <div className="timeline-center">
                    <span className="timeline-dot" />
                  </div>


                  <div className="timeline-right">

                    <p className="timeline-description">
                      Add any other relevant education, workshops,
                      certifications or training.
                    </p>

                  </div>

                </div>

              </div>


              {/* =================================================
                  ACHIEVEMENTS
              ================================================== */}

              <div className="career-panel achievements-panel">


                {/* ACHIEVEMENT 1 */}

                <div className="timeline-row">

                  <div className="timeline-left">

                    <span className="timeline-date">
                      ONGOING
                    </span>


                    <div className="timeline-title-row">

                      <div className="timeline-title-info">

                        <h3>
                          500+ Websites Launched
                        </h3>

                      </div>


                      <div className="timeline-logo achievement-icon">
                        ★
                      </div>

                    </div>

                  </div>


                  <div className="timeline-center">
                    <span className="timeline-dot" />
                  </div>


                  <div className="timeline-right">

                    <p className="timeline-description">
                      Website projects spanning WordPress, Shopify,
                      GoHighLevel, landing pages, funnels and responsive
                      website builds.
                    </p>

                  </div>

                </div>


                {/* ACHIEVEMENT 2 */}

                <div className="timeline-row">

                  <div className="timeline-left">

                    <span className="timeline-date">
                      6+ YEARS
                    </span>


                    <div className="timeline-title-row">

                      <div className="timeline-title-info">

                        <h3>
                          Web Development Experience
                        </h3>

                      </div>


                      <div className="timeline-logo achievement-icon">
                        ★
                      </div>

                    </div>

                  </div>


                  <div className="timeline-center">
                    <span className="timeline-dot" />
                  </div>


                  <div className="timeline-right">

                    <p className="timeline-description">
                      More than six years working with websites,
                      customer-facing digital experiences and backend
                      systems.
                    </p>

                  </div>

                </div>


                {/* ACHIEVEMENT 3 */}

                <div className="timeline-row">

                  <div className="timeline-left">

                    <span className="timeline-date">
                      ONGOING
                    </span>


                    <div className="timeline-title-row">

                      <div className="timeline-title-info">

                        <h3>
                          CRM &amp; Automation Systems
                        </h3>

                      </div>


                      <div className="timeline-logo achievement-icon">
                        ★
                      </div>

                    </div>

                  </div>


                  <div className="timeline-center">
                    <span className="timeline-dot" />
                  </div>


                  <div className="timeline-right">

                    <p className="timeline-description">
                      Building funnels, pipelines, workflows, forms,
                      calendars and automated lead-management systems.
                    </p>

                  </div>

                </div>


                {/* ACHIEVEMENT 4 */}

                <div className="timeline-row">

                  <div className="timeline-left">

                    <span className="timeline-date">
                      24 / 7
                    </span>


                    <div className="timeline-title-row">

                      <div className="timeline-title-info">

                        <h3>
                          Automated Workflows
                        </h3>

                      </div>


                      <div className="timeline-logo achievement-icon">
                        ★
                      </div>

                    </div>

                  </div>


                  <div className="timeline-center">
                    <span className="timeline-dot" />
                  </div>


                  <div className="timeline-right">

                    <p className="timeline-description">
                      Automation systems designed to support lead
                      qualification, follow-up, notifications and
                      appointment workflows.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BEYOND WORK / HOBBIES
        ====================================================== */}

        <section className="hobbies-section">

          <div className="hobbies-container">


            <div className="hobbies-label">

              <span className="hobbies-label-line" />

              <span>
                BEYOND WORK
              </span>

            </div>


            <h2 className="hobbies-title">
              Hobbies &amp; interests
            </h2>


            <div className="hobbies-list">

              <span className="hobby-pill">
                Cricket
              </span>


              <span className="hobby-pill">
                Reading
              </span>


              <span className="hobby-pill">
                Learning
              </span>


              <span className="hobby-pill">
                Designing
              </span>


              <span className="hobby-pill">
                Traveling
              </span>


              <span className="hobby-pill">
                Gaming
              </span>


              <span className="hobby-pill">
                Research
              </span>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          STATIC CSS
          Keeps everything inside this one page.js file
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: aboutStyles,
        }}
      />

    </>
  );
}