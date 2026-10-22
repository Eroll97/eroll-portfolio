
"use client";

export default function AboutDemoSection() {
  return (
    <section className="about-demo">
      <div className="about-demo-container">

        {/* LEFT SIDE - VIDEO */}
        <div className="about-demo-video">
          <video
            controls
            playsInline
            preload="metadata"
            src="/eroll-portfolio-demo.mp4"
          >
            Your browser does not support video playback.
          </video>
        </div>

        {/* RIGHT SIDE - DESCRIPTION */}
        <div className="about-demo-content">
          <span className="about-demo-label">
            MY WORK IN ACTION
          </span>

          <h2>
            Building Digital Experiences
            <br />
            That Work.
          </h2>

          <p>
            Hi, I'm Eroll. I specialize in building
            professional websites, CRM systems, and
            smart automations that help businesses
            grow and operate more efficiently.
          </p>

          <p>
            In this video, I walk you through my
            development process, showcasing how
            I turn ideas into functional websites
            and connected digital solutions.
          </p>

          <div className="about-demo-tags">
            <span>Website Development</span>
            <span>CRM & Automation</span>
            <span>Digital Solutions</span>
          </div>
        </div>

      </div>

      <style jsx>{`
        .about-demo {
          width: 100%;
          background: #080808;
          color: #ffffff;
          padding: 75px 24px;
        }

        .about-demo-container {
          max-width: 1240px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 55px;
        }

        .about-demo-video {
          width: 100%;
          border: 1px solid #2a2a2a;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
        }

        .about-demo-video video {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          object-fit: contain;
          background: #000;
        }

        .about-demo-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .about-demo-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          color: #a3a3a3;
          margin-bottom: 20px;
        }

        .about-demo-content h2 {
          margin: 0 0 22px;
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .about-demo-content p {
          color: #a3a3a3;
          font-size: 15px;
          line-height: 1.85;
          margin: 0 0 16px;
        }

        .about-demo-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
        }

        .about-demo-tags span {
          padding: 9px 13px;
          border: 1px solid #333;
          border-radius: 30px;
          font-size: 12px;
          color: #d4d4d4;
        }

        @media (max-width: 768px) {
          .about-demo {
            padding: 50px 20px;
          }

          .about-demo-container {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .about-demo-content h2 {
            font-size: 29px;
          }

          .about-demo-content p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
