"use client";

import Image from "next/image";
import { CONTACTS, INSTAGRAM_URL } from "@/lib/constants";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Top festive stripe */}
      <div className="footer__stripe" aria-hidden="true" />

      <div className="container footer__container">
        {/* ── MAIN THREE-COLUMN GRID ── */}
        <div className="footer__main-grid">
          {/* Column 1: Brand & About */}
          <div className="footer__col footer__col--brand">
            <div className="footer__logos">
              <Image
                src="/assets/logos/dhvani_logo.svg"
                alt="Dhvani — The Music Community, MIT-WPU"
                width={100}
                height={46}
                className="footer__logo"
              />
              <div className="footer__logo-sep" aria-hidden="true" />
              <Image
                src="/assets/logos/wpu_logo.svg"
                alt="MIT-WPU"
                width={70}
                height={46}
                className="footer__logo"
              />
            </div>

            <p className="footer__brand-desc">
              Dhvani is the official Music Community of MIT-WPU, uniting campus life through rhythm, melody, and soul-stirring celebrations.
            </p>

            <nav className="footer__quick-links" aria-label="Footer quick navigation">
              <a href="#about">About</a>
              <a href="#navras">Navras</a>
              <a href="#highlights">Highlights</a>
              <a href="#details">Details</a>
            </nav>
          </div>

          {/* Column 2: Instagram & Social Community */}
          <div className="footer__col footer__col--social">
            <h4 className="footer__col-heading">CONNECT WITH DHVANI</h4>
            
            <div className="footer__insta-card">
              <div className="footer__insta-header">
                <div className="footer__insta-avatar" aria-hidden="true">
                  <InstagramIcon size={22} />
                </div>
                <div className="footer__insta-meta">
                  <span className="footer__insta-handle">@dhvani.mitwpu</span>
                  <span className="footer__insta-sub">Official Instagram</span>
                </div>
              </div>

              <p className="footer__insta-text">
                Catch behind-the-scenes, student artist line-ups, rehearsal glimpses, and latest announcements!
              </p>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__insta-btn"
                id="footer-instagram-link"
                aria-label="Follow Dhvani MIT-WPU on Instagram"
              >
                <InstagramIcon size={16} />
                <span>Follow @dhvani.mitwpu</span>
                <span className="footer__insta-arrow">↗</span>
              </a>
            </div>
          </div>

          {/* Column 3: Contact for Queries */}
          <div className="footer__col footer__col--queries">
            <h4 className="footer__col-heading">FOR QUERIES, CONTACT</h4>
            <div className="footer__contacts-list">
              {CONTACTS.map((person) => (
                <div key={person.phone} className="footer__contact-card">
                  <div className="footer__contact-info">
                    <p className="footer__contact-name">{person.name}</p>
                    <p className="footer__contact-role">{person.role}</p>
                  </div>
                  <a
                    href={`tel:${person.phone}`}
                    className="footer__contact-phone"
                    aria-label={`Call ${person.name} at ${person.phone}`}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{person.displayPhone}</span>
                  </a>
                </div>
              ))}
            </div>

            <p className="footer__queries-note">
              Have questions about entry, stalls, or performances? Reach out directly to the heads above!
            </p>
          </div>
        </div>

        {/* ── HEARTFELT SIGN-OFF ── */}
        <div className="footer__signoff-banner">
          <div className="footer__signoff-divider" aria-hidden="true" />
          <p className="footer__signoff-salutation">With love,</p>
          <p className="footer__signoff-team">
            Team Dhvani – The Music Community, MIT-WPU 🎵
          </p>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} Dhvani, The Music Community · MIT-WPU · All rights reserved · Crafted with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/himanshu-raghav7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__credit-link"
            >
              Himanshu Raghav
            </a>
          </p>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__bottom-insta"
            aria-label="Dhvani MIT-WPU on Instagram"
          >
            <InstagramIcon size={14} />
            <span>instagram.com/dhvani.mitwpu</span>
          </a>

          <p className="footer__tagline">
            <em>Nine emotions. Countless rhythms. One celebration.</em>
          </p>
        </div>
      </div>
    </footer>
  );
}
