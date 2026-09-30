'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>Your name *<input required placeholder="John Doe" /></label>
      <label>Your email *<input required type="email" placeholder="john@company.com" /></label>
      <label className="full-field">What do you need?
        <select defaultValue="Website Development">
          <option>Website Development</option>
          <option>GoHighLevel Setup</option>
          <option>Funnel Build</option>
          <option>Shopify Store</option>
          <option>AI / Automation</option>
          <option>Something Else</option>
        </select>
      </label>
      <label className="full-field">Project details *
        <textarea required rows="8" placeholder="Tell me what you’re building, what platform you’re using and what you want improved." />
      </label>
      <div className="form-actions full-field">
        <button className="btn btn-dark" type="submit">Send Message <span>↗</span></button>
        <a className="text-link" href="#">WhatsApp instead <span>→</span></a>
      </div>
      <p className="form-note full-field">Your message goes straight to you after the form is connected to your chosen backend.</p>
      {sent && <p className="success-note full-field">Demo submitted. Connect the form to GHL, Formspree, Brevo or another backend before launch.</p>}
    </form>
  );
}
