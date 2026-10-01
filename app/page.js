import Link from 'next/link';
import {
  services,
  projects,
  tools,
  experience,
  testimonialsTop,
  testimonialsBottom,
  posts,
} from '../lib/data';

import SectionHeading from '../components/SectionHeading';
import Marquee from '../components/Marquee';
import HeroCanvas from '../components/HeroCanvas';
import Typewriter from '../components/Typewriter';
import ServiceCard from '../components/ServiceCard';
import FeaturedCarousel from '../components/FeaturedCarousel';
import CursorParallax from '../components/CursorParallax';

export default function Home() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="hero-section">
        <div className="hero-grid-bg" />

        <div className="hero-orb">
          <HeroCanvas />
        </div>

        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />

        <div className="hero-ring ring-a">
          <span />
        </div>

        <div className="hero-ring ring-b" />

        <div className="hero-dot dot-a" />
        <div className="hero-dot dot-b" />

        <div className="shell hero-inner">
          <p className="availability">
            <span />
            Available for new projects
          </p>

          <h1 className="hero-title">
            <span>EROLL</span>
            <span className="outline">OLIVER</span>
          </h1>

          <div className="hero-bottom">
            <div className="hero-copy">
              <p className="typewriter">
                <Typewriter />
              </p>

              <p className="hero-desc">
                I build fast, responsive websites and intelligent automation
                workflows — including AI agent-powered systems — that help
                businesses convert more leads and save time.
              </p>

              <div className="hero-actions">
                <Link href="/portfolio" className="btn-solid">
                  View my work
                </Link>

                <Link href="/contact" className="btn-outline">
                  Contact me
                </Link>
              </div>
            </div>

            <div className="hero-stats">
              <div>
                <strong>6+</strong>
                <span>Years experience</span>
              </div>

              <div>
                <strong>40+</strong>
                <span>Websites launched</span>
              </div>

              <div>
                <strong>4</strong>
                <span>Companies worked with</span>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-cue">
          <div>
            <span />
          </div>
        </div>
      </section>

      {/* =========================================================
          TOP MARQUEE
      ========================================================= */}
      <Marquee
        items={[
          'WordPress',
          'Go HighLevel',
          'Funnel Building',
          'AI Agents',
          'CRM Automation',
          'Shopify',
          'Lead Generation',
          'Speed Optimization',
        ]}
      />

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="section shell">
        <SectionHeading
          eyebrow="What I do"
          title="Services that grow businesses"
          copy="From pixel-perfect websites to CRM systems that follow up with every lead automatically — I build the full machine."
        />

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </section>

      {/* =========================================================
          FEATURED WORK
      ========================================================= */}
      <section className="section section-soft featured-section">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured work"
            title="Real websites. Real businesses."
            copy="A selection of the sites I've designed, built and launched for clients around the world. Hover a card to scroll through the page."
            action={
              <Link className="pill-link" href="/portfolio">
                View all 40 projects
              </Link>
            }
          />
        </div>

        <FeaturedCarousel projects={projects} />
      </section>

      {/* =========================================================
          CROSSED MARQUEES
      ========================================================= */}
      <div className="crossed-marquees">
        <div className="cross white">
          <Marquee
            items={[
              'PASSIONATE',
              'INNOVATIVE',
              'CREATIVE',
              'DEDICATED',
              'RELIABLE',
            ]}
          />
        </div>

        <div className="cross black">
          <Marquee
            items={[
              'PASSIONATE',
              'INNOVATIVE',
              'CREATIVE',
              'DEDICATED',
              'RELIABLE',
            ]}
            dark
            reverse
          />
        </div>
      </div>

      {/* =========================================================
          SKILLS
      ========================================================= */}
      <section className="section shell">
        <SectionHeading
          eyebrow="Skills & Tools"
          title="Technologies I work with"
          copy="The stack I use every day to design, build and automate — from WordPress and Shopify to GoHighLevel and AI agents."
        />

        <div className="tools-grid">
          {tools.map(([name, img]) => (
            <div className="tool-card" key={name}>
              <span />

              <div>
                <img
                  src={img}
                  alt={`${name} logo`}
                  loading="lazy"
                />
              </div>

              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}
      <section className="section shell experience-section">
        <SectionHeading
          eyebrow="Experience"
          title="6+ years, four companies, dozens of launches"
        />

        <div className="experience-list">
          {experience.map((item) => (
            <div className="experience-row" key={item.company}>
              <div>
                <img src={item.logo} alt="" />
                <h3>{item.company}</h3>
              </div>

              <p>{item.title}</p>

              <span>{item.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          LAUNCH WEBSITE / CURSOR PARALLAX
      ========================================================= */}
      <section className="launch-section shell">
        <div className="launch-card">

          {/* LEFT SIDE */}
          <div>
            <p className="eyebrow">
              <span />
              Start your website
            </p>

            <h2>
              Launch your website or online business with confidence
            </h2>

            <p>
              Have an idea? Looking to sell services or products? Whether
              it's a portfolio, business site, funnel or eCommerce store —
              I help turn your vision into a fully functional website with
              automation behind it.
            </p>

            <Link href="/contact" className="btn-solid">
              Launch now →
            </Link>
          </div>

          {/* =====================================================
              RIGHT SIDE INTERACTIVE VISUAL
          ===================================================== */}
          <CursorParallax className="launch-visual">

            {/* Static background */}
            <div className="launch-grid" />
            <div className="launch-glow" />

            {/* Back website */}
            <div className="browser browser-one parallax-main">
              <div className="browser-top">
                <i />
                <i />
                <i />
                <span>yourbusiness.com</span>
              </div>

              <img
                src={projects[0].image}
                alt="Business website preview"
              />
            </div>

            {/* Front website */}
            <div className="browser browser-two parallax-front">
              <div className="browser-top">
                <i />
                <i />
                <i />
                <span>yourstore.com</span>
              </div>

              <img
                src={projects[15].image}
                alt="Online store preview"
              />
            </div>

            {/* WordPress badge */}
            <span className="float-badge fb1 parallax-badge">
              <img
                src={tools[0][1]}
                alt="WordPress"
              />
              WordPress
            </span>

            {/* GoHighLevel badge */}
            <span className="float-badge fb2 parallax-badge">
              <img
                src={tools[1][1]}
                alt="GoHighLevel"
              />
              GoHighLevel
            </span>

            {/* Shopify badge */}
            <span className="float-badge fb3 parallax-badge">
              <img
                src={tools[4][1]}
                alt="Shopify"
              />
              Shopify
            </span>

            {/* Speed badge */}
            <span className="float-badge fb4 parallax-badge">
              ⚡ Loads in &lt;2s
            </span>

            {/* Sites launched */}
            <div className="sites-stat parallax-stat">
              <strong>40+</strong>
              <small>Sites launched</small>
            </div>

          </CursorParallax>
        </div>
      </section>

      {/* =========================================================
          TESTIMONIALS
      ========================================================= */}
      <section className="section section-soft testimonials">
        <div className="shell">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say about working with me"
            copy="The same two-row moving testimonial system as the reference. Replace these placeholders with feedback you are authorized to publish."
          />
        </div>

        <div className="testimonial-rows">
          <div className="testimonial-track forward">
            {[...testimonialsTop, ...testimonialsTop].map((testimonial, index) => (
              <Testimonial
                t={testimonial}
                key={`top-${index}`}
              />
            ))}
          </div>

          <div className="testimonial-track backward">
            {[...testimonialsBottom, ...testimonialsBottom].map(
              (testimonial, index) => (
                <Testimonial
                  t={testimonial}
                  key={`bottom-${index}`}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          BLOG
      ========================================================= */}
      <section className="section shell">
        <SectionHeading
          eyebrow="From the blog"
          title="Latest articles & insights"
          copy="What I've learned building websites and automation systems — written simply, no jargon."
          action={
            <Link className="pill-link" href="/blog">
              View all articles
            </Link>
          }
        />

        <div className="blog-grid">
          {posts.map((post) => (
            <Link
              className="blog-card"
              href={`/blog/${post.slug}`}
              key={post.slug}
            >
              <div className="blog-image">
                <img
                  src={post.image}
                  alt=""
                />

                <span>{post.category}</span>
              </div>

              <div className="blog-body">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <i />
                  <span>{post.read}</span>
                </div>

                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <div className="blog-author">
                  <span>EO</span>

                  <small>Eroll Oliver</small>

                  <b>Read →</b>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="final-cta">
        <div className="shell">
          <p>Have a project in mind?</p>

          <h2>
            Let's build something that{' '}
            <span className="outline">
              converts
            </span>
            .
          </h2>

          <div>
            <Link
              href="/contact"
              className="btn-solid"
            >
              Start a project
            </Link>

            <Link
              href="/contact"
              className="btn-outline"
            >
              WhatsApp me
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* =========================================================
   TESTIMONIAL CARD
========================================================= */
function Testimonial({ t }) {
  return (
    <div className="testimonial-card">
      <div className="stars">
        ★★★★★
      </div>

      <p>
        “{t[0]}”
      </p>

      <div className="testimonial-author">
        <span>
          {t[1]}
        </span>

        <div>
          <strong>
            {t[2]}
          </strong>

          <small>
            {t[3]}
          </small>
        </div>
      </div>
    </div>
  );
}