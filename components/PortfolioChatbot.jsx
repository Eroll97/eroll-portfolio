'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { BOOKING_URL, CONTACT_EMAIL, inferService, INQUIRY_SERVICES } from '../lib/inquiryConfig';
import { prepareChatHistory } from '../lib/chatContext';
import styles from './PortfolioChatbot.module.css';

const STARTERS = ['Explore services', 'I need a website', 'Help with GoHighLevel', 'Get a project quote'];
const INTRO = {
  role: 'assistant', intro: true,
  text: "Welcome! I'm Eroll's AI assistant. Ask a question, describe a problem, or tell me about your project in English, Bisaya, or Tagalog. I can explain your options and help share an inquiry with Eroll. How can I help?",
};
const EMPTY_INQUIRY = { name: '', email: '', service: 'Website development', details: '', budget: '', timeline: '', consent: false, website: '' };
const SESSION_KEY = 'eroll-project-chat-v2';

function ChatIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8 11.5h8M8 14.5h5" /></svg>;
}

function MessageText({ text }) {
  return text.split(/(\/(?:services|portfolio|pricing|contact)\b)/g).map((part, i) =>
    /^\/(services|portfolio|pricing|contact)$/.test(part)
      ? <Link key={i} href={part}>{part}</Link> : part
  );
}

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([INTRO]);
  const [hydrated, setHydrated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [mode, setMode] = useState('ai');
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiry, setInquiry] = useState(EMPTY_INQUIRY);
  const [inquirySending, setInquirySending] = useState(false);
  const [inquiryError, setInquiryError] = useState('');
  const [receipt, setReceipt] = useState('');
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const inFlight = useRef(false);
  const inquiryInFlight = useRef(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(SESSION_KEY) || 'null');
      if (Array.isArray(saved) && saved.length <= 60 && saved.every(m =>
        m && ['user', 'assistant'].includes(m.role) && typeof m.text === 'string' && m.text.length <= 3000)) {
        setMessages([INTRO, ...saved.filter(m => !m.intro)]);
      }
    } catch { /* A fresh chat still works without browser storage. */ }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const conversation = messages.filter(message => !message.intro);
      const saved = conversation.length > 60 ? [...conversation.slice(0, 6), ...conversation.slice(-54)] : conversation;
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(saved));
    } catch { /* Storage may be disabled. */ }
  }, [messages, hydrated]);

  useEffect(() => {
    if (open && messagesRef.current && !inquiryOpen) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messages, open, loading, inquiryOpen, receipt]);

  useEffect(() => {
    if (!open) return;
    if (!inquiryOpen) inputRef.current?.focus({ preventScroll: true });
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus({ preventScroll: true });
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, inquiryOpen]);

  useEffect(() => () => controllerRef.current?.abort(), []);

  async function sendMessage(value = input) {
    const question = value.trim().slice(0, 1200);
    if (!question || inFlight.current) return;
    inFlight.current = true;
    setLoading(true);
    setError('');
    setInput('');
    const retryGuided = messages.at(-1)?.guided && messages.at(-2)?.role === 'user' && messages.at(-2)?.text === question;
    const retrying = messages.at(-1)?.role === 'user' && messages.at(-1)?.text === question;
    const beforeQuestion = retryGuided ? messages.slice(0, -2) : retrying ? messages.slice(0, -1) : messages;
    const nextMessages = [...beforeQuestion, { role: 'user', text: question }];
    const conversation = prepareChatHistory(nextMessages);
    setMessages(nextMessages);
    const controller = new AbortController();
    controllerRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 52000);
    try {
      const response = await fetch('/api/chat', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin', cache: 'no-store',
        body: JSON.stringify({ messages: conversation }),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || typeof result.reply !== 'string' || !result.reply.trim()) {
        throw new Error(result.error || 'I could not answer just now. Please try again or send a project inquiry.');
      }
      setMode(result.mode || 'ai');
      setMessages(prev => [...prev, { role: 'assistant', text: result.reply, guided: result.mode === 'guided' }]);
    } catch (err) {
      setError(err.name === 'AbortError'
        ? 'That took longer than expected. Please retry or use Send project inquiry.'
        : err.message || 'Please check your connection and try again.');
    } finally {
      clearTimeout(timeout);
      inFlight.current = false;
      setLoading(false);
      controllerRef.current = null;
    }
  }

  function showInquiry() {
    const visitorMessages = messages.filter(m => m.role === 'user' && !STARTERS.includes(m.text));
    const context = visitorMessages.map(m => m.text).join('\n\n');
    setInquiry(prev => ({
      ...prev,
      service: prev.details ? prev.service : inferService(context),
      details: prev.details || context.slice(-3000),
    }));
    setInquiryError('');
    setInquiryOpen(true);
  }

  function changeInquiry(event) {
    const { name, type, value, checked } = event.target;
    setInquiry(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  async function submitInquiry(event) {
    event.preventDefault();
    if (inquiryInFlight.current) return;
    inquiryInFlight.current = true;
    setInquirySending(true);
    setInquiryError('');
    const transcript = messages.filter(m => !m.intro).slice(-24)
      .map(m => ({ role: m.role, content: m.text }));
    while (JSON.stringify(transcript).length > 17500) transcript.shift();
    const controller = new AbortController();
    controllerRef.current = controller;
    const timeout = setTimeout(() => controller.abort(), 28000);
    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin', cache: 'no-store',
        body: JSON.stringify({ ...inquiry, messages: transcript }), signal: controller.signal,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok || !result.reference) {
        throw new Error(result.error || 'Your inquiry could not be sent yet. Please try again.');
      }
      setReceipt(result.reference);
      setMessages(prev => [...prev, { role: 'assistant', text: `Thank you, ${inquiry.name.trim()}. Your inquiry was submitted for Eroll to review, including your project details and this conversation. He can follow up at ${inquiry.email.trim()}.` }]);
      setInquiryOpen(false);
      setInquiry(EMPTY_INQUIRY);
    } catch (err) {
      setInquiryError(err.name === 'AbortError'
        ? 'Delivery could not be confirmed. Please check your email or contact Eroll directly before retrying.'
        : err.message || 'Your inquiry could not be sent. Please try again.');
    } finally {
      clearTimeout(timeout);
      inquiryInFlight.current = false;
      setInquirySending(false);
      controllerRef.current = null;
    }
  }

  return (
    <div className={styles.widget}>
      {open && (
        <section className={styles.panel} role="dialog" aria-modal="false" aria-label="Eroll portfolio AI assistant">
          <div className={styles.header}>
            <div className={styles.avatar} aria-hidden="true">EO</div>
            <div className={styles.headerText}>
              <strong>Eroll's Project Assistant</strong>
              <span>{mode === 'guided' ? 'Guided help & project inquiries' : 'AI assistance for your next project'}</span>
            </div>
            <button className={styles.close} type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg>
            </button>
          </div>

          {inquiryOpen ? (
            <div className={styles.inquiryScroll}>
              <button className={styles.backButton} type="button" disabled={inquirySending} onClick={() => setInquiryOpen(false)}>← Back to conversation</button>
              <h3 className={styles.formTitle}>Let's discuss your project</h3>
              <p className={styles.formIntro}>Share your requirements or concern. Eroll can follow up by email.</p>
              <form className={styles.inquiryForm} onSubmit={submitInquiry}>
                <fieldset disabled={inquirySending}>
                  <label htmlFor="chat-name">Your name *<input id="chat-name" name="name" value={inquiry.name} onChange={changeInquiry} required maxLength={100} autoComplete="name" placeholder="Your full name" /></label>
                  <label htmlFor="chat-email">Email address *<input id="chat-email" name="email" type="email" value={inquiry.email} onChange={changeInquiry} required maxLength={254} autoComplete="email" placeholder="you@company.com" /></label>
                  <label htmlFor="chat-service">What do you need? *<select id="chat-service" name="service" value={inquiry.service} onChange={changeInquiry}>{INQUIRY_SERVICES.map(service => <option key={service}>{service}</option>)}</select></label>
                  <label htmlFor="chat-details">Project needs or concern *<textarea id="chat-details" name="details" value={inquiry.details} onChange={changeInquiry} required minLength={10} maxLength={3000} rows={4} placeholder="Your goals, current setup, or the problem you need help with." /></label>
                  <div className={styles.formRow}>
                    <label htmlFor="chat-budget">Budget (optional)<input id="chat-budget" name="budget" value={inquiry.budget} onChange={changeInquiry} maxLength={100} placeholder="e.g. USD 500–1,000" /></label>
                    <label htmlFor="chat-timeline">Timeline (optional)<input id="chat-timeline" name="timeline" value={inquiry.timeline} onChange={changeInquiry} maxLength={100} placeholder="e.g. Next month" /></label>
                  </div>
                  <div className={styles.honeypot} aria-hidden="true"><label>Leave empty<input name="website" value={inquiry.website} onChange={changeInquiry} tabIndex={-1} autoComplete="off" /></label></div>
                  <label className={styles.consent}><input type="checkbox" name="consent" checked={inquiry.consent} onChange={changeInquiry} required /><span>I agree to email these details and this conversation to Eroll for follow-up. I have not included passwords or sensitive information.</span></label>
                  {inquiryError && <div className={styles.error} role="alert">{inquiryError} <a href={`mailto:${CONTACT_EMAIL}`}>Email Eroll directly ↗</a></div>}
                  <button className={styles.submitInquiry} type="submit">{inquirySending ? 'Sending your inquiry…' : 'Send inquiry to Eroll ↗'}</button>
                </fieldset>
              </form>
            </div>
          ) : (
            <>
              <div className={styles.messages} ref={messagesRef} role="log" aria-live="polite" aria-relevant="additions text">
                {receipt && <div className={styles.success} role="status">Inquiry submitted · Ref {receipt.slice(0, 8)}</div>}
                {messages.map((message, index) => (
                  <div key={index} className={`${styles.message} ${message.role === 'user' ? styles.user : styles.assistant}`}><span><MessageText text={message.text} /></span></div>
                ))}
                {loading && <div className={`${styles.message} ${styles.assistant} ${styles.typing}`} role="status">Thinking<span className={styles.dots}>…</span></div>}
                {!loading && !error && messages.at(-1)?.guided && <div className={styles.error} role="status">AI is temporarily unavailable. You can retry your question.<button type="button" onClick={() => sendMessage(messages.filter(m => m.role === 'user').at(-1)?.text || '')}>Retry AI answer</button></div>}
                {error && <div className={styles.error} role="alert">{error}<button type="button" onClick={() => sendMessage(messages.filter(m => m.role === 'user').at(-1)?.text || '')}>Retry message</button></div>}
              </div>
              {messages.length === 1 && <div className={styles.starters} aria-label="Suggested questions">{STARTERS.map(label => <button disabled={loading} type="button" key={label} onClick={() => sendMessage(label)}>{label}</button>)}</div>}
              <div className={styles.inquiryActions}>
                <button type="button" onClick={showInquiry} disabled={loading}>Send project inquiry ↗</button>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book a call ↗</a>
              </div>
              <form className={styles.composer} onSubmit={event => { event.preventDefault(); sendMessage(); }}>
                <input ref={inputRef} value={input} onChange={event => setInput(event.target.value)} maxLength={1200} aria-label="Your message" placeholder="Ask a question or describe what you need…" disabled={loading} />
                <button type="submit" disabled={loading || !input.trim()} aria-label="Send message"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 12 16-8-4 16-4-7-8-1Z" /><path d="m12 13 8-9" /></svg></button>
              </form>
              <p className={styles.disclaimer}>AI assistance · Please don't share passwords. <Link href="/contact" onClick={() => setOpen(false)}>Contact Eroll ↗</Link></p>
            </>
          )}
        </section>
      )}
      <button ref={launcherRef} className={`${styles.launcher} ${open ? styles.isOpen : ''}`} type="button" aria-label={open ? 'Close portfolio AI assistant' : 'Open portfolio AI assistant'} aria-expanded={open} onClick={() => setOpen(current => !current)}>
        {open ? <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg> : <ChatIcon />}
      </button>
    </div>
  );
}
