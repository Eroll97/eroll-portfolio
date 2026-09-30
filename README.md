# Eroll Portfolio Replica

This is the revised Next.js replica based on the inspected reference HTML supplied in the conversation.

## What is replicated

- Fixed transparent/scrolled header, active nav state and mobile menu
- Dark monochrome visual system, grain overlay, drifting ambient glows
- Custom desktop cursor and top scroll progress bar
- Full-screen hero with grid, animated wireframe canvas, giant solid/outline name, typewriter role, CTAs, stats and scroll cue
- White technology marquee
- Six numbered 3D tilt service cards with hover spotlight and icon inversion
- Featured horizontal project carousel with arrows and pagination dots
- Hover-to-scroll full-page project screenshots
- Crossed black/white marquees
- Eight-card skills grid
- Four-row hover-invert experience section
- Layered browser mockup launch panel with floating technology badges
- Two continuously moving testimonial rows that pause on hover
- Blog cards and final CTA
- Three-column footer and floating assistant button
- Portfolio page with all 40 reference projects, category counts, sticky desktop sidebar, mobile chips and platform filtering
- Matching About, Services, Pricing, Blog and Contact pages

## Important before publishing

This is a replica-phase build. Some project text, external links and screenshot assets are reference data from the inspected site so the layout can be matched closely. Replace those items with your own authorized portfolio content before deploying publicly. The experience, testimonials and contact details intentionally remain placeholders.

## Run locally on Windows

From the folder containing `package.json`:

```powershell
npm.cmd install
npm.cmd run dev
```

Then open:

```text
http://localhost:3000
```

Keep the terminal running while the site is open.

## Main files to edit later

- `lib/data.js` — projects, services, skills, experience, testimonials and blog cards
- `app/page.js` — homepage section composition
- `app/portfolio/page.js` — portfolio page heading
- `app/globals.css` — visual styling and responsive behavior
- `components/Header.js` — navigation and brand
- `components/Footer.js` — footer/contact placeholders
