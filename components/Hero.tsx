"use client";

import Image from "next/image";
import { REGISTRATION_URL, EVENT } from "@/lib/constants";

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
        {/* Main Artwork */}
        <div className="hero-banner-art">
          <Image
            src="/assets/hero/hero_navras.png"
            alt="NAVRAS — Nine emotions, countless rhythm, one celebration. A Celebration of Music, Movement and Togetherness"
            width={2174}
            height={986}
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
            className="hero-art-img"
          />

          {/* Unified Details Overlay (Desktop & Mobile: Same order, same place, same style) */}
          <div className="hero-overlay-details">
            {/* 1. Meta Items Row: Date, Venue, Time */}
            <div className="hero-overlay-meta-row">
              {/* Date */}
              <div className="hero-overlay-meta-item" title="Event Date">
                <span className="hero-meta-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D84315"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="8" cy="15" r="1.2" fill="#D84315" />
                    <circle cx="12" cy="15" r="1.2" fill="#D84315" />
                    <circle cx="16" cy="15" r="1.2" fill="#D84315" />
                  </svg>
                </span>
                <span className="hero-meta-val">16<sup>TH</sup> OCT 26&apos;</span>
              </div>

              {/* Venue */}
              <div className="hero-overlay-meta-item" title="Event Venue">
                <span className="hero-meta-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#D84315">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <div className="hero-meta-text-col">
                  <span className="hero-meta-val hero-meta-val--primary">
                    VYAS TERRACE
                  </span>
                  <span className="hero-meta-val hero-meta-val--sub">
                    ({EVENT.floor.toUpperCase()})
                  </span>
                </div>
              </div>

              {/* Time */}
              <div className="hero-overlay-meta-item" title="Event Time">
                <span className="hero-meta-icon" aria-hidden="true">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D84315"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9.5" />
                    <polyline points="12 6 12 12 15.5 14" />
                  </svg>
                </span>
                <span className="hero-meta-val">{EVENT.time}</span>
              </div>
            </div>

            {/* 2. Action Column: Button + Down Arrow centered under it */}
            <div className="hero-overlay-action-col">
              <a
                href={REGISTRATION_URL}
                className="hero-overlay-btn"
                id="hero-register-cta"
                aria-label="Register Now for Navras 2026"
              >
                REGISTER NOW →
              </a>

              <button
                type="button"
                onClick={handleScrollDown}
                className="hero-overlay-scroll-circle"
                aria-label="Scroll down to highlights"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7E1D1B"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hero-chevron-anim"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
