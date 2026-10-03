"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { REGISTRATION_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "EVENT", href: "#highlights" },
  { label: "REGISTRATION", href: "#details" },
  { label: "FAQ", href: "#details" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        role="banner"
      >
        <div className="navbar__inner container">
          {/* LEFT: Logos */}
          <div className="navbar__logos">
            <Link href="/" aria-label="Dhvani — Home">
              <Image
                src="/assets/logos/dhvani_logo.svg"
                alt="Dhvani — The Music Community"
                width={85}
                height={38}
                className="navbar__logo"
                priority
              />
            </Link>
            <div className="navbar__logo-sep" aria-hidden="true" />
            <Image
              src="/assets/logos/wpu_logo.svg"
              alt="MIT-WPU"
              width={65}
              height={38}
              className="navbar__logo"
              priority
            />
          </div>

          {/* CENTER: Desktop nav links */}
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="navbar__nav-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: CTA + Mobile Hamburger */}
          <div className="navbar__actions">
            <a
              href={REGISTRATION_URL}
              className="navbar__cta-btn"
              id="navbar-ticket-cta"
              aria-label="Register Now for Navras 2026"
            >
              REGISTER NOW →
            </a>

            <button
              className={`navbar__hamburger ${
                menuOpen ? "navbar__hamburger--open" : ""
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu__bg" aria-hidden="true" />

        <nav aria-label="Mobile navigation">
          <ul className="mobile-menu__list">
            {NAV_LINKS.map((link, i) => (
              <li key={link.label} style={{ transitionDelay: `${i * 50}ms` }}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="mobile-menu__link"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={REGISTRATION_URL}
          className="hero-mobile-btn mobile-menu__cta"
          onClick={() => setMenuOpen(false)}
        >
          REGISTER NOW →
        </a>

        <p className="mobile-menu__tagline">
          Nine emotions, countless rhythm, one celebration.
        </p>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="mobile-menu__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <style jsx>{`
        /* ─── NAVBAR BASE (Solid cream, continuous with hero) ─── */
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 0.9rem 0 0.6rem;
          background-color: #fbf5e6;
          box-shadow: none;
          border-bottom: none;
          transition: box-shadow 0.25s ease, padding 0.25s ease;
        }

        .navbar--scrolled {
          box-shadow: 0 4px 20px rgba(126, 29, 27, 0.1);
          padding: 0.65rem 0;
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }

        /* ─── LOGOS ─── */
        .navbar__logos {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          flex-shrink: 0;
        }

        .navbar__logo {
          height: 38px;
          width: auto;
          object-fit: contain;
        }

        .navbar__logo-sep {
          width: 1.5px;
          height: 28px;
          background: rgba(126, 29, 27, 0.25);
        }

        /* ─── DESKTOP NAV ─── */
        .navbar__nav {
          display: none;
        }

        .navbar__nav ul {
          display: flex;
          list-style: none;
          gap: 0.5rem;
          margin: 0;
          padding: 0;
        }

        .navbar__nav-link {
          font-family: var(--font-body), sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #3b0d11;
          letter-spacing: 0.05em;
          padding: 0.45rem 0.75rem;
          border-radius: 6px;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.2s ease, background-color 0.2s ease;
        }

        .navbar__nav-link:hover {
          color: #c42614;
          background-color: rgba(224, 62, 38, 0.08);
        }

        /* ─── ACTIONS ─── */
        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 0;
        }

        .navbar__cta-btn {
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #a72314 0%, #85170b 100%);
          color: #ffffff !important;
          font-family: var(--font-body), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 0.55rem 1.25rem;
          border-radius: 6px;
          text-decoration: none;
          box-shadow: 0 2px 10px rgba(133, 23, 11, 0.35);
          transition: all 0.2s ease;
        }

        .navbar__cta-btn:hover {
          background: linear-gradient(135deg, #bd2c1a 0%, #991c0e 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 14px rgba(133, 23, 11, 0.45);
        }

        /* ─── HAMBURGER ─── */
        .navbar__hamburger {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          padding: 8px;
          border-radius: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .navbar__hamburger span {
          display: block;
          height: 2px;
          background: #7e1d1b;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }

        .navbar__hamburger--open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar__hamburger--open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar__hamburger--open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* ─── MOBILE MENU ─── */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 86vw);
          z-index: 200;
          background-color: #fbf5e6;
          padding: 5rem 1.75rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
          overflow-y: auto;
          box-shadow: -8px 0 30px rgba(0, 0, 0, 0.15);
          border-left: 2px solid rgba(214, 165, 46, 0.3);
        }

        .mobile-menu--open {
          transform: translateX(0);
        }

        .mobile-menu__bg {
          position: absolute;
          top: -40px;
          right: -40px;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(214, 165, 46, 0.18) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .mobile-menu__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          padding: 0;
          margin: 0;
        }

        .mobile-menu__link {
          display: block;
          width: 100%;
          text-align: left;
          font-family: var(--font-body), sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #7e1d1b;
          padding: 0.65rem 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(126, 29, 27, 0.1);
          cursor: pointer;
          letter-spacing: 0.04em;
        }

        .mobile-menu__link:hover {
          color: #c42614;
          padding-left: 0.5rem;
        }

        .mobile-menu__cta {
          width: 100%;
          justify-content: center;
          font-size: 0.95rem;
          padding: 0.85rem 1.5rem;
          text-align: center;
        }

        .mobile-menu__tagline {
          font-family: var(--font-display), serif;
          font-style: italic;
          font-size: 0.85rem;
          color: #6d4c41;
          text-align: center;
          margin-top: auto;
          line-height: 1.4;
        }

        /* ─── BACKDROP ─── */
        .mobile-menu__backdrop {
          position: fixed;
          inset: 0;
          z-index: 150;
          background: rgba(30, 10, 10, 0.45);
          backdrop-filter: blur(3px);
        }

        /* ─── RESPONSIVE ─── */
        @media (min-width: 900px) {
          .navbar__cta-btn {
            display: inline-flex;
          }
          .navbar__nav {
            display: block;
          }
          .navbar__hamburger {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
