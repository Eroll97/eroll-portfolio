'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './PortfolioChatbot.module.css';

const STARTERS = [
  'What services do you offer?',
  'Can you build a GoHighLevel funnel?',
  'Show me your projects',
  'How do I get a quote?',
];
const INTRO = {
  role: 'assistant',
  intro: true,
  text: "Hi! I'm Eroll's AI assistant. I can help with website development, Shopify, WordPress, GoHighLevel, automation, and project inquiries. What are you looking to build?",
};

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H6l-3 2v-6.5A7.5 7.5 0 1 1 20 11.5Z" />
      <path d="M8 11.5h8M8 14.5h5" />
    </svg>
  );
}

export default function PortfolioChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([INTRO]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const inFlight = useRef(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    if (open && messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, open, loading]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => () => controllerRef.current?.abort(), []);

  async function sendMessage(value = input) {
    const question = value.trim().slice(0, 600);
    if (!question || inFlight.current) return;
    inFlight.current = true;
    setLoading(true);
    setError('');
    setInput('');

    // The greeting is never sent to the AI, only actual conversation turns.
    const history = messages
      .filter((m) => !m.intro && !m.isError)
      .slice(-10)
      .map((m) => ({ role: m.role, content: m.text }));
    const turns = [...history, { role: 'user', content: question }].slice(-12);
    setMessages((prev) => [...prev, { role: 'user', text: question }]);
    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin',
        cache: 'no-store',
        body: JSON.stringify({ messages: turns }),
        signal: controller.signal,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.error || 'The assistant is unavailable right now.');
      }
      if (!result.reply || typeof result.reply !== 'string') {
        throw new Error('The assistant returned an empty reply.');
      }
      setMessages((prev) => [...prev, { role: 'assistant', text: result.reply }]);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message || 'Connection failed. Please try again.');
      }
    } finally {
      inFlight.current = false;
      setLoading(false);
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
              <strong>Eroll's AI Assistant</strong>
              <span>Ask about websites, funnels & automation</span>
            </div>
            <button className={styles.close} type="button" aria-label="Close chatbot" onClick={() => setOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg>
            </button>
          </div>

          <div className={styles.messages} ref={messagesRef} aria-live="polite" aria-relevant="additions text">
            {messages.map((message, index) => (
              <div key={index} className={`${styles.message} ${message.role === 'user' ? styles.user : styles.assistant}`}>
                <span>{message.text}</span>
              </div>
            ))}
            {loading && <div className={`${styles.message} ${styles.assistant} ${styles.typing}`} role="status">Thinking<span className={styles.dots}>...</span></div>}
            {error && <div className={styles.error} role="alert">{error}<button type="button" onClick={() => { setError(''); setInput(messages.filter((m) => m.role === 'user').at(-1)?.text || ''); inputRef.current?.focus(); }}>Edit & retry</button></div>}
          </div>

          <div className={styles.starters} aria-label="Suggested questions">
            {STARTERS.map((label) => (
              <button disabled={loading} type="button" key={label} onClick={() => sendMessage(label)}>{label}</button>
            ))}
          </div>

          <form className={styles.composer} onSubmit={(event) => { event.preventDefault(); sendMessage(); }}>
            <input
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              maxLength={600}
              aria-label="Your message"
              placeholder="Ask me about a project..."
              disabled={loading}
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send message">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m4 12 16-8-4 16-4-7-8-1Z" /><path d="m12 13 8-9" /></svg>
            </button>
          </form>
          <p className={styles.disclaimer}>AI answers may be imperfect. Please avoid sensitive information. <Link href="/contact" onClick={() => setOpen(false)}>Contact Eroll ↗</Link></p>
        </section>
      )}

      <button
        className={`${styles.launcher} ${open ? styles.isOpen : ''}`}
        type="button"
        aria-label={open ? 'Close portfolio AI assistant' : 'Open portfolio AI assistant'}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg>
        ) : <ChatIcon />}
      </button>
    </div>
  );
}
