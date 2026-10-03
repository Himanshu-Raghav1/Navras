"use client";

import Image from "next/image";
import { REGISTRATION_URL, EVENT } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      {/* Top stripe */}
      <div className="footer__stripe" aria-hidden="true" />

      <div className="container footer__inner">
        {/* Logos */}
        <div className="footer__logos">
          <Image
            src="/assets/logos/dhvani_logo.svg"
            alt="Dhvani — The Music Community, MIT-WPU"
            width={90}
            height={44}
            className="footer__logo"
          />
          <div className="footer__logo-sep" aria-hidden="true" />
          <Image
            src="/assets/logos/wpu_logo.svg"
            alt="MIT-WPU"
            width={66}
            height={44}
            className="footer__logo"
          />
        </div>

        {/* Quick links */}
        <nav className="footer__links" aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#navras">Navras</a>
          <a href="#experience">Experience</a>
          <a href="#details">Details</a>
        </nav>

        {/* Event summary */}
        <div className="footer__event">
          <p className="footer__event-name">{EVENT.name} &apos;26</p>
          <p className="footer__event-detail">{EVENT.date} · {EVENT.time}</p>
          <p className="footer__event-detail">{EVENT.venue}, {EVENT.floor} · {EVENT.institution}</p>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary footer__cta"
            id="footer-ticket-cta"
          >
            Grab Your Ticket →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            &copy; {year} Dhvani, The Music Community · MIT-WPU · All rights reserved.
          </p>
          <p className="footer__tagline">
            <em>Nine emotions. Countless rhythms. One celebration.</em>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--maroon-deep);
          color: rgba(255, 248, 231, 0.8);
        }

        .footer__stripe {
          height: 4px;
          background: repeating-linear-gradient(
            90deg,
            var(--gold) 0, var(--gold) 10px,
            var(--saffron) 10px, var(--saffron) 20px,
            var(--maroon) 20px, var(--maroon) 30px,
            var(--teal) 30px, var(--teal) 40px
          );
        }

        .footer__inner {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          padding-top: 2.5rem;
          padding-bottom: 2.5rem;
        }

        /* ─── LOGOS ─── */
        .footer__logos {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer__logo { height: 40px; width: auto; object-fit: contain; filter: brightness(0) invert(1); opacity: 0.85; }
        .footer__logo-sep { width: 1px; height: 28px; background: rgba(255,255,255,0.2); }

        /* ─── LINKS ─── */
        .footer__links {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem 1.5rem;
        }

        .footer__links a {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255, 248, 231, 0.7);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: color 0.2s;
        }

        .footer__links a:hover { color: var(--gold-light); }

        /* ─── EVENT ─── */
        .footer__event {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .footer__event-name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
        }

        .footer__event-detail {
          font-size: 0.85rem;
          color: rgba(255, 248, 231, 0.6);
        }

        .footer__cta {
          margin-top: 0.75rem;
          width: fit-content;
          font-size: 0.8rem;
          padding: 0.65rem 1.5rem;
        }

        /* ─── BOTTOM ─── */
        .footer__bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer__bottom-inner {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
        }

        .footer__copy {
          font-size: 0.75rem;
          color: rgba(255, 248, 231, 0.4);
        }

        .footer__tagline {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 0.875rem;
          color: rgba(255, 248, 231, 0.5);
        }

        /* ─── DESKTOP ─── */
        @media (min-width: 768px) {
          .footer__inner {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
          }

          .footer__bottom-inner {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
