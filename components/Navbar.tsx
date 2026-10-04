"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { REGISTRATION_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#highlights" },
  { label: "NAVRAS", href: "#navras" },
  { label: "EVENT DETAILS", href: "#details" },
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
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta-btn"
              id="navbar-ticket-cta"
              aria-label="Grab your ticket for Navras 2026"
            >
              GRAB YOUR TICKET →
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
          target="_blank"
          rel="noopener noreferrer"
          className="hero-mobile-btn mobile-menu__cta"
          onClick={() => setMenuOpen(false)}
        >
          GRAB YOUR TICKET →
        </a>

        <p className="mobile-menu__tagline">
          Nine emotions, countless rhythms, one celebration.
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
    </>
  );
}
