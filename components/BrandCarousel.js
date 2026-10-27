import { experience } from "../lib/data";
import styles from "./BrandCarousel.module.css";

// Retain the four company logos from the experience section.
const COMPANY_NAMES = ["D1TechCreative", "Hamsol", "Leadflex", "ZG Tech Solutions"];
const companyLogos = COMPANY_NAMES.map((name) => {
  const company = experience.find(
    (item) => item.company.trim().toLowerCase() === name.toLowerCase()
  );
  return company?.logo ? { name, src: company.logo } : null;
}).filter(Boolean);

const CLIENT_LOGOS = [
  { name: "Vanity Van Lines", src: "/brands/vanity-van-lines.jpeg" },
  { name: "Liv Funding", src: "/brands/liv-funding.jpeg" },
  { name: "Foreclosure Solutions USA", src: "/brands/foreclosure-solutions-usa.jpeg" },
  { name: "VitaHub", src: "/brands/vitahub.jpeg" },
  { name: "Mary Angels Home Care", src: "/brands/mary-angels-home-care.jpeg" },
  { name: "Morse Hauling & Junk Removal", src: "/brands/morse.jpeg" },
  { name: "Qulfi Wala", src: "/brands/qulfi-wala.jpeg" },
  { name: "The Paper Roll", src: "/brands/the-paper-roll.jpeg" },
  { name: "A Plus Moving & Storage", src: "/brands/a-plus-moving-storage.jpeg" },
  { name: "GuaraBoost", src: "/brands/guaraboost.jpeg" },
  { name: "The Clean Power Experts", src: "/brands/clean-power-experts.jpeg" },
  { name: "4RT Cars", src: "/brands/4rt-cars.jpeg" },
  { name: "Moskowitz Legal Group", src: "/brands/moskowitz-legal-group.jpeg" },
  { name: "Baystone Marketing", src: "/brands/baystone-marketing.jpeg" },
];

// Nine brands per row; each row is duplicated below for a seamless loop.
const LOGO_ROWS = [
  [...companyLogos.slice(0, 2), ...CLIENT_LOGOS.slice(0, 7)],
  [...companyLogos.slice(2, 4), ...CLIENT_LOGOS.slice(7)],
];
export default function BrandCarousel() {
  return (
    <section
      className={styles.section}
      aria-labelledby="brand-carousel-heading"
    >
      <div className={styles.shell}>
        <div className={styles.panel}>

          {/* ==================================
              SECTION HEADING
          ================================== */}

          <div className={styles.heading}>

            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              COLLABORATIONS
            </div>

            <h2
              id="brand-carousel-heading"
              className={styles.title}
            >
              Trusted by Industry Leaders
            </h2>

            <p className={styles.description}>
              I&apos;ve had the privilege of working
              with amazing brands and entrepreneurs.
            </p>

          </div>

          {/* ==================================
              CONTINUOUS BRAND CAROUSEL
          ================================== */}

          <div className={styles.rows}>

            {LOGO_ROWS.map((logos, rowIndex) => (

              <div
                key={rowIndex}
                className={styles.viewport}
                role="group"
                aria-label={`Brand logos row ${rowIndex + 1}`}
              >

                <div
                  className={`${styles.track} ${
                    rowIndex === 1
                      ? styles.reverse
                      : ""
                  }`}
                >

                  {/* ==================================
                      DUPLICATE LOGOS FOR SEAMLESS LOOP
                  ================================== */}

                  {[0, 1].map((copy) => (

                    <div
                      key={copy}
                      className={styles.logoSet}
                      aria-hidden={copy === 1}
                    >

                      {logos.map((logo, index) => (

                        <div
                          key={`${copy}-${index}`}
                          className={styles.logoCard}
                          title={logo.name}
                        >

                          <img
                            src={logo.src}
                            alt={
                              copy === 0
                                ? `${logo.name} logo`
                                : ""
                            }
                            width={140}
                            height={80}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                            className={styles.logo}
                          />

                        </div>

                      ))}

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
