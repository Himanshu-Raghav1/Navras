"use client";

import Image from "next/image";
import { REGISTRATION_URL, EVENT } from "@/lib/constants";

// ── Shared SVG icons ────────────────────────────────────────────────────────
const CalendarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D84315" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <circle cx="8" cy="15" r="1.2" fill="#D84315" />
    <circle cx="12" cy="15" r="1.2" fill="#D84315" />
    <circle cx="16" cy="15" r="1.2" fill="#D84315" />
  </svg>
);

const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#D84315" aria-hidden="true">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D84315" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9.5" />
    <polyline points="12 6 12 12 15.5 14" />
  </svg>
);

const ChevronDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7E1D1B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="hero-chevron-anim" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function Hero() {
  const handleScrollDown = () => {
    const nextSection =
      document.getElementById("highlights") ||
      document.getElementById("experience") ||
      document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-banner-section" aria-label="Navras 2026 Hero">
      <div className="hero-banner-wrapper">

        {/* ── DESKTOP HERO (hidden on mobile) ── */}
        <div className="hero-banner-art hero-desktop-art">
          <Image
            src="/assets/hero/hero_navras.png"
            alt="NAVRAS 2026 — A Celebration of Music, Movement and Togetherness"
            width={2174}
            height={986}
            priority
            fetchPriority="high"
            style={{ width: "100%", height: "auto", display: "block" }}
            className="hero-art-img"
          />

          {/* Desktop overlay: date · venue · time + CTA */}
          <div className="hero-overlay-details">
            <div className="hero-overlay-meta-row">
              <div className="hero-overlay-meta-item" title="Event Date">
                <span className="hero-meta-icon"><CalendarIcon /></span>
                <span className="hero-meta-val">16<sup>TH</sup> OCT 26&apos;</span>
              </div>
              <div className="hero-overlay-meta-item" title="Event Venue">
                <span className="hero-meta-icon"><PinIcon /></span>
                <div className="hero-meta-text-col">
                  <span className="hero-meta-val hero-meta-val--primary">VYAS TERRACE</span>
                  <span className="hero-meta-val hero-meta-val--sub">({EVENT.floor.toUpperCase()})</span>
                </div>
              </div>
              <div className="hero-overlay-meta-item" title="Event Time">
                <span className="hero-meta-icon"><ClockIcon /></span>
                <span className="hero-meta-val">{EVENT.time}</span>
              </div>
            </div>

            <div className="hero-overlay-action-col">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-overlay-btn"
                id="hero-register-cta"
                aria-label="Register Now for Navras 2026"
              >
                REGISTER NOW →
              </a>
              <button type="button" onClick={handleScrollDown} className="hero-overlay-scroll-circle" aria-label="Scroll down to highlights">
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>

        {/* ── MOBILE HERO (hidden on desktop) ── */}
        <div className="hero-banner-art hero-mobile-art">
          <Image
            src="/assets/hero/hero_navras_mobile.png"
            alt="NAVRAS 2026 — A Celebration of Music, Movement and Togetherness"
            width={830}
            height={1792}
            priority
            fetchPriority="high"
            style={{ width: "100%", height: "auto", display: "block" }}
            className="hero-art-img"
          />

          {/* Mobile overlay: positioned in the empty center zone of the portrait art */}
          <div className="hero-mobile-overlay" role="region" aria-label="Event details">

            {/* Tagline */}
            <p className="hero-mobile-tagline">
              Nine Emotions · One Celebration
            </p>

            {/* Event detail chips */}
            <div className="hero-mobile-chips">
              <div className="hero-mobile-chip">
                <CalendarIcon />
                <div className="hero-chip-text">
                  <span className="hero-chip-label">Date</span>
                  <span className="hero-chip-value">16<sup>th</sup> Oct &apos;26</span>
                </div>
              </div>

              <div className="hero-mobile-chip">
                <PinIcon />
                <div className="hero-chip-text">
                  <span className="hero-chip-label">Venue</span>
                  <span className="hero-chip-value">Vyas Terrace<br /><small>{EVENT.floor} · MIT-WPU</small></span>
                </div>
              </div>

              <div className="hero-mobile-chip">
                <ClockIcon />
                <div className="hero-chip-text">
                  <span className="hero-chip-label">Time</span>
                  <span className="hero-chip-value">{EVENT.time}</span>
                </div>
              </div>
            </div>

            {/* Register CTA */}
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-mobile-cta"
              id="hero-register-cta-mobile"
              aria-label="Register Now for Navras 2026"
            >
              <span>REGISTER NOW</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            {/* Scroll hint */}
            <button
              type="button"
              onClick={handleScrollDown}
              className="hero-mobile-scroll-hint"
              aria-label="Scroll down to see highlights"
            >
              <ChevronDown />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
