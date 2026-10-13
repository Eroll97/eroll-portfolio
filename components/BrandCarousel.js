
"use client";

// ==========================================
// BRAND LOGOS
// Replace logos you are not authorized
// to showcase in your portfolio.
// ==========================================

const LOGO_ROWS = [
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

// ==========================================
// MAIN CAROUSEL COMPONENT
// ==========================================

export default function BrandCarousel() {
  return (
    <section
      className="eo-brands"
      aria-labelledby="eo-brands-heading"
    >
      <div className="eo-brands-shell">
        <div className="eo-brands-panel">

          {/* SECTION HEADING */}

          <div className="eo-brands-heading">
            <p className="eo-brands-eyebrow">
              <span className="eo-brands-line" />
              COLLABORATIONS
            </p>

            <h2 id="eo-brands-heading">
              Trusted by <span>Industry Leaders</span>
            </h2>

            <p className="eo-brands-intro">
              I&apos;ve had the privilege of working
              with amazing brands and entrepreneurs.
            </p>
          </div>

          {/* TWO INFINITE SCROLLING ROWS */}

          <div className="eo-brands-rows">
            {LOGO_ROWS.map((logos, rowIndex) => (
              <div
                key={rowIndex}
                className="eo-brands-viewport"
                role="group"
                aria-label={`Logo carousel row ${rowIndex + 1}`}
              >
                <div
                  className={`eo-brands-track ${
                    rowIndex === 1
                      ? "eo-brands-reverse"
                      : ""
                  }`}
                >
                  {/* Duplicate once for seamless scrolling */}

                  {[0, 1].map((duplicate) => (
                    <div
                      key={duplicate}
                      className="eo-brands-set"
                      aria-hidden={duplicate === 1}
                    >
                      {logos.map((src, logoIndex) => (
                        <div
                          className="eo-brands-logo-card"
                          key={`${duplicate}-${logoIndex}`}
                        >
                          <img
                            src={src}
                            alt={
                              duplicate === 0
                                ? `Featured brand logo ${
                                    logoIndex + 1
                                  }`
                                : ""
                            }
                            loading="lazy"
                            decoding="async"
                            draggable={false}
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

      {/* ======================================
          COMPLETE STYLING
      ====================================== */}

      <style jsx>{`
        /* MAIN SECTION */

        .eo-brands {
          width: 100%;
          background: #070707;
          padding: 72px 0 90px;
          color: #f6f6f6;
          overflow: hidden;
        }

        .eo-brands-shell {
          width: min(100% - 48px, 1240px);
          margin: 0 auto;
        }

        /* DARK CONTAINER */

        .eo-brands-panel {
          overflow: hidden;
          border: 1px solid #292929;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            #151515 0%,
            #101010 58%,
            #0d0d0d 100%
          );
          padding: 52px 0 49px;
        }

        /* HEADING */

        .eo-brands-heading {
          text-align: center;
          padding: 0 24px;
          margin: 0 auto 40px;
          max-width: 900px;
        }

        .eo-brands-eyebrow {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 0 0 19px;
          color: #818181;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.27em;
        }

        .eo-brands-line {
          width: 32px;
          height: 1px;
          background: #777777;
        }

        .eo-brands-heading h2 {
          color: #f6f6f6;
          font-size: clamp(30px, 4.7vw, 55px);
          font-weight: 800;
          line-height: 1.12;
          letter-spacing: -0.045em;
          margin: 0 0 15px;
        }

        .eo-brands-heading h2 span {
          color: #aaaaaa;
        }

        .eo-brands-intro {
          color: #999999;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        /* CAROUSEL ROWS */

        .eo-brands-rows {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        /* EDGE FADE */

        .eo-brands-viewport {
          width: 100%;
          overflow: hidden;

          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 6%,
            black 94%,
            transparent 100%
          );
        }

        /* INFINITE ANIMATION */

        .eo-brands-track {
          display: flex;
          width: max-content;
          animation: eo-brands-scroll 38s linear infinite;
          will-change: transform;
        }

        .eo-brands-track.eo-brands-reverse {
          animation-direction: reverse;
          animation-duration: 33s;
        }

        /* PAUSE ON HOVER */

        .eo-brands-viewport:hover .eo-brands-track {
          animation-play-state: paused;
        }

        .eo-brands-set {
          display: flex;
          flex-shrink: 0;
          gap: 18px;
          padding-right: 18px;
        }

        /* LOGO CARDS */

        .eo-brands-logo-card {
          display: flex;
          align-items: center;
          justify-content: center;

          flex: 0 0 182px;
          width: 182px;
          height: 116px;
          padding: 18px;

          overflow: hidden;
          border-radius: 15px;
          border: 1px solid #d6d6d6;
          background: #ededed;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }

        .eo-brands-logo-card img {
          display: block;
          width: 100%;
          max-width: 150px;
          max-height: 82px;
          height: auto;
          object-fit: contain;

          filter: grayscale(1);

          transition:
            filter 0.25s ease,
            transform 0.25s ease;
        }

        .eo-brands-logo-card:hover {
          background: #ffffff;
          transform: translateY(-2px);
        }

        .eo-brands-logo-card:hover img {
          filter: grayscale(0);
          transform: scale(1.03);
        }

        /* SEAMLESS LOOP */

        @keyframes eo-brands-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        /* TABLET + MOBILE */

        @media (max-width: 768px) {
          .eo-brands {
            padding: 55px 0 65px;
          }

          .eo-brands-shell {
            width: calc(100% - 28px);
          }

          .eo-brands-panel {
            border-radius: 18px;
            padding: 39px 0 40px;
          }

          .eo-brands-heading {
            margin-bottom: 30px;
            padding: 0 20px;
          }

          .eo-brands-heading h2 {
            font-size: clamp(28px, 7vw, 38px);
          }

          .eo-brands-intro {
            font-size: 12px;
          }

          .eo-brands-rows {
            gap: 13px;
          }

          .eo-brands-set {
            gap: 13px;
            padding-right: 13px;
          }

          .eo-brands-logo-card {
            flex-basis: 145px;
            width: 145px;
            height: 92px;
            padding: 13px;
            border-radius: 12px;
          }

          .eo-brands-logo-card img {
            max-width: 118px;
            max-height: 66px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .eo-brands-track {
            animation: none !important;
            transform: none !important;
          }

          .eo-brands-viewport {
            overflow-x: auto;
            -webkit-mask-image: none;
            mask-image: none;
          }
        }
      `}</style>
    </section>
  );
}
