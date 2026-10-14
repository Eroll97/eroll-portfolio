
import { experience } from "../lib/data";
import styles from "./BrandCarousel.module.css";

/* ==========================================
   EROLL OLIVER - BRAND CAROUSEL

   Trusted by Industry Leaders

   Existing Brand Logos
   + D1TechCreative
   + Hamsol
   + Leadflex
   + ZG Tech Solutions

   Original Logo Colors
   Continuous Two-Row Scrolling
   CSS Module - No First-Load Flash
========================================== */

/* ==========================================
   EXISTING BRAND LOGOS
========================================== */

const ORIGINAL_LOGO_ROWS = [
  [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2eSdvrKOZW1M5XJSzj06tmR15Le2te.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X9HnA7wE5MY2Vl0tLJZAEEOFXjeSWi.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nSciI8m3X1Q92wt3YPdU9gRE18yjP0.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tyArjVjdTOWVNmisn3y38bXQFYFb3z.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WNfGuvpSmliPEZWZlwBVZ5gtQ98w6K.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KCQ6fhrk0ogn4qFkVc3lGxBxdrqrMO.png",
    "https://assets.cdn.filesafe.space/GyrIBT0jZYs6WUxSTMfo/media/69d53c08ebf1a60843046174.webp",
    "https://assets.cdn.filesafe.space/GyrIBT0jZYs6WUxSTMfo/media/69d53c083d829c73b2aac14a.webp",
  ],

  [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zYX9xrokZoyqpbnoDp7FgA91AVFo4O.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wqxQVyQk9tFoTX4FCqBnwgUW6KtEnt.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eiWU5tZiGh2HKgFRHAMgOT6JK3dRnt.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-V0r7GO61ghqrQg7YWHRo9rCLTXiMPN.png",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zGb4qVkcyWMRdfXOR6zoynmXbOa8pt.png",
    "https://assets.cdn.filesafe.space/GyrIBT0jZYs6WUxSTMfo/media/69d53af0cf3e84bbd0aa7dc7.png",
  ],
];

/* ==========================================
   FOUR COMPANY LOGOS

   Reuse existing logos from lib/data.js.
========================================== */

const COMPANY_NAMES = [
  "D1TechCreative",
  "Hamsol",
  "Leadflex",
  "ZG Tech Solutions",
];

const companyLogos = COMPANY_NAMES.map((name) => {
  const company = experience.find(
    (item) =>
      item.company.trim().toLowerCase() ===
      name.toLowerCase()
  );

  if (!company?.logo) {
    return null;
  }

  return {
    name,
    src: company.logo,
  };
}).filter(Boolean);

/* ==========================================
   COMBINE BRAND LOGOS

   First Row:
   Existing logos + D1TechCreative + Hamsol

   Second Row:
   Existing logos + Leadflex + ZG Tech Solutions
========================================== */

const LOGO_ROWS = [
  [
    ...ORIGINAL_LOGO_ROWS[0].map(
      (src, index) => ({
        src,
        name: `Brand ${index + 1}`,
      })
    ),

    ...companyLogos.slice(0, 2),
  ],

  [
    ...ORIGINAL_LOGO_ROWS[1].map(
      (src, index) => ({
        src,
        name: `Brand ${index + 9}`,
      })
    ),

    ...companyLogos.slice(2, 4),
  ],
];

/* ==========================================
   MAIN BRAND CAROUSEL
========================================== */

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
