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

  const path = usePathname();

  /* =========================================================
     SCROLL EFFECT
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  /* =========================================================
     CLOSE MOBILE MENU WHEN PAGE CHANGES
  ========================================================= */

  useEffect(() => {
    setOpen(false);
  }, [path]);


  return (
    <header
      className={`site-header ${scrolled ? 'is-scrolled' : ''}`}
    >

      <nav className="nav-shell">

        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          className="brand"
          href="/"
        >
          EROLL<span>.</span>
        </Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <ul className="desktop-nav">

          {nav.map(([label, href]) => (

            <li key={href}>

              <Link
                className={path === href ? 'active' : ''}
                href={href}
              >
                {label}
              </Link>

            </li>

          ))}

        </ul>


        {/* =====================================================
            DESKTOP HIRE ME
            DOWNLOADS YOUR CV
        ====================================================== */}

        <a
          className="hire-btn"
          href="/Eroll-Oliver-CV.pdf"
          download="Eroll-Oliver-CV.pdf"
          aria-label="Download Eroll Oliver CV"
        >
          Hire Me
        </a>


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          className={`menu-btn ${open ? 'open' : ''}`}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>

      </nav>


      {/* =======================================================
          MOBILE MENU
      ======================================================== */}

      <div
        className={`mobile-menu ${open ? 'show' : ''}`}
      >

        {nav.map(([label, href]) => (

          <Link
            key={href}
            href={href}
            className={path === href ? 'active' : ''}
          >
            {label}
          </Link>

        ))}


        {/* =====================================================
            MOBILE HIRE ME
            SAME CV AS DESKTOP
        ====================================================== */}

        <a
          className="mobile-hire-btn"
          href="/Eroll-Oliver-CV.pdf"
          download="Eroll-Oliver-CV.pdf"
          aria-label="Download Eroll Oliver CV"
        >
          Hire Me
        </a>

      </div>

    </header>
  );
} 