'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const nav = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Portfolio', '/portfolio'],
  ['Pricing', '/pricing'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname() || '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on client-side navigation (including Back/Forward).
  useEffect(() => {
    setOpen(false);
  }, [path]);

  // Allow Escape to close the menu; return to desktop layout when resized.
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  const isActive = (href) =>
    href === '/'
      ? path === '/'
      : path === href || path.startsWith(`${href}/`);

  return (
    <header
      className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}
    >
      <nav className="nav-shell" aria-label="Main navigation">
        <Link
          className="brand"
          href="/"
          onClick={() => setOpen(false)}
        >
          EROLL<span>.</span>
        </Link>

        <ul className="desktop-nav">
          {nav.map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className={isActive(href) ? 'active' : ''}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          className="hire-btn"
          href="/Eroll-Oliver-CV.pdf"
          download="Eroll-Oliver-CV.pdf"
          aria-label="Download Eroll Oliver CV"
        >
          Hire Me
        </a>

        <button
          type="button"
          className={`menu-btn ${open ? 'open' : ''}`}
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="portfolio-mobile-menu"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>

      <nav
        id="portfolio-mobile-menu"
        className={`mobile-menu ${open ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        {nav.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className={isActive(href) ? 'active' : ''}
            aria-current={isActive(href) ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}

        <a
          className="mobile-hire-btn"
          href="/Eroll-Oliver-CV.pdf"
          download="Eroll-Oliver-CV.pdf"
          aria-label="Download Eroll Oliver CV"
          onClick={() => setOpen(false)}
        >
          Hire Me — Download CV
        </a>
      </nav>
    </header>
  );
}
