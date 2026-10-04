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
            &copy; {year} Dhvani, The Music Community · MIT-WPU · All rights reserved.
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

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #4A0E0E 0%, #2A0606 100%);
          color: rgba(255, 248, 231, 0.85);
          position: relative;
          overflow: hidden;
        }

        .footer__stripe {
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            var(--gold) 0, var(--gold) 12px,
            var(--saffron) 12px, var(--saffron) 24px,
            var(--maroon) 24px, var(--maroon) 36px,
            var(--teal) 36px, var(--teal) 48px
          );
        }

        .footer__container {
          padding-top: 3.5rem;
          padding-bottom: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* ─── MAIN 3-COL GRID ─── */
        .footer__main-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 860px) {
          .footer__main-grid {
            grid-template-columns: 1.2fr 1.1fr 1.1fr;
            gap: 2.5rem;
          }
        }

        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }

        .footer__col-heading {
          font-family: var(--font-body);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--gold-light);
          margin-bottom: 0.2rem;
          text-transform: uppercase;
        }

        /* Brand Column */
        .footer__logos {
          display: flex;
          align-items: center;
          gap: 1.15rem;
        }

        .footer__logo {
          height: 38px;
          width: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.92;
        }

        .footer__logo-sep {
          width: 1px;
          height: 30px;
          background: rgba(255, 255, 255, 0.25);
        }

        .footer__brand-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(255, 248, 231, 0.65);
        }

        .footer__quick-links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.25rem;
          margin-top: 0.35rem;
        }

        .footer__quick-links a {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255, 248, 231, 0.7);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .footer__quick-links a:hover {
          color: var(--gold-light);
        }

        /* ─── INSTAGRAM / SOCIAL COLUMN ─── */
        .footer__insta-card {
          background: radial-gradient(100% 100% at 0% 0%, rgba(225, 48, 108, 0.12) 0%, rgba(214, 165, 46, 0.08) 100%), rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(225, 48, 108, 0.3);
          border-radius: 12px;
          padding: 1.15rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .footer__insta-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .footer__insta-avatar {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 3px 10px rgba(225, 48, 108, 0.35);
          flex-shrink: 0;
        }

        .footer__insta-meta {
          display: flex;
          flex-direction: column;
        }

        .footer__insta-handle {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 0.95rem;
          color: #fff;
          letter-spacing: 0.01em;
        }

        .footer__insta-sub {
          font-size: 0.72rem;
          color: rgba(255, 248, 231, 0.6);
        }

        .footer__insta-text {
          font-size: 0.8rem;
          color: rgba(255, 248, 231, 0.75);
          line-height: 1.45;
        }

        .footer__insta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          color: #ffffff;
          border-radius: 8px;
          padding: 0.6rem 1rem;
          font-size: 0.82rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(220, 39, 67, 0.35);
          transition: all 0.2s ease;
          width: fit-content;
        }

        .footer__insta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(220, 39, 67, 0.5);
          filter: brightness(1.08);
        }

        .footer__insta-arrow {
          font-size: 0.95rem;
          line-height: 1;
        }

        /* ─── QUERIES COLUMN ─── */
        .footer__contacts-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__contact-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(214, 165, 46, 0.2);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .footer__contact-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: #FFF8E7;
        }

        .footer__contact-role {
          font-size: 0.75rem;
          color: rgba(255, 248, 231, 0.65);
          letter-spacing: 0.02em;
        }

        .footer__contact-phone {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--gold-light);
          text-decoration: none;
          width: fit-content;
          padding: 0.25rem 0.65rem;
          background: rgba(214, 165, 46, 0.1);
          border: 1px solid rgba(214, 165, 46, 0.25);
          border-radius: 6px;
          transition: all 0.2s;
        }

        .footer__contact-phone:hover {
          background: rgba(214, 165, 46, 0.2);
          color: #FFF;
          transform: translateY(-1px);
        }

        .footer__queries-note {
          font-size: 0.75rem;
          color: rgba(255, 248, 231, 0.55);
          line-height: 1.45;
        }

        /* ─── HEARTFELT SIGNOFF ─── */
        .footer__signoff-banner {
          text-align: center;
          padding: 1.5rem 1rem 0;
          position: relative;
        }

        .footer__signoff-divider {
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          margin: 0 auto 1.25rem;
        }

        .footer__signoff-salutation {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.1rem;
          color: rgba(255, 248, 231, 0.85);
          margin-bottom: 0.3rem;
        }

        .footer__signoff-team {
          font-family: var(--font-display);
          font-size: clamp(1rem, 2.5vw, 1.25rem);
          font-weight: 700;
          color: var(--gold-light);
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        /* ─── BOTTOM COPYRIGHT ─── */
        .footer__bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(15, 3, 3, 0.5);
        }

        .footer__bottom-inner {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
          text-align: center;
        }

        .footer__copy {
          font-size: 0.75rem;
          color: rgba(255, 248, 231, 0.4);
        }

        .footer__bottom-insta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          font-size: 0.78rem;
          color: rgba(255, 248, 231, 0.65);
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer__bottom-insta:hover {
          color: var(--gold-light);
        }

        .footer__tagline {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 0.85rem;
          color: rgba(255, 248, 231, 0.5);
        }

        @media (min-width: 768px) {
          .footer__bottom-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            text-align: left;
          }
        }
      `}</style>
    </footer>
  );
}
