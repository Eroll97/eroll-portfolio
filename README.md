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

## Project assistant and inquiry emails

The assistant uses the server-side `GEMINI_API_KEY` and `GEMINI_MODEL` settings.
Configure these in the hosting environment as well as `.env.local`. The default
primary model is `gemini-3.6-flash`; `GEMINI_FALLBACK_MODEL` defaults to
`gemini-3.5-flash-lite`. The primary has a 26-second deadline and the backup an
18-second deadline, within a 44-second total budget. Timeouts, quota/overload errors, and empty or exhausted
responses try the backup once. Authentication failures stop immediately.
If both models are unavailable, the visitor receives guided answers and a
Retry AI answer button, and can still use the inquiry form.

Chat context keeps the opening brief and recent turns (up to 36 messages within
a 60,000-character budget). Explicit corrections take priority over earlier
details. Published package facts are shared with `/pricing` in
`lib/pricingData.js`; custom quotes and availability require Eroll's confirmation.

Visitors choose **Send project inquiry**, review their requirements, provide a
name and email, and consent to sharing the conversation. `/api/inquiries`
validates the submission and sends it through the same Formspree form used by
the Contact page. The email includes the requirements/concerns, optional budget
and timeline, transcript, UTC timestamp, and a unique reference. Success is shown
only after Formspree acknowledges the submission. Chats are retained in the
current browser tab's session; closing the chat widget does not email them.

The shared notification endpoint is in `lib/inquiryConfig.js`. Manage recipient
settings and email delivery in the existing Formspree account. Provider limits
still apply. The built-in rate limiter is per process; use a shared limiter if
the site is scaled across multiple instances.

Run `npm.cmd test` for validation, delivery acknowledgment, fallback, origin, and
request-limit checks. Tests mock external services and do not send email.

## Video playback and content deterrents

`TapVideo` hides native media controls. Click/tap, Enter, or Space toggles
playback. The intro and GHL demo use the same player. Site-wide context-menu
and common inspection/source/save shortcuts are cancelled by `ContentDeterrents`.
Normal copy, paste, form input, navigation, and Escape remain available.

These are convenience deterrents, not access control or DRM. Public media URLs
remain retrievable, browser menus can still open developer tools, and a webpage
cannot prevent OS-level screen recording. Do not rely on these features to hide
secrets or guarantee that videos cannot be copied.
