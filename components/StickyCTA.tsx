"use client";

import { useState, useEffect } from "react";
import { REGISTRATION_URL } from "@/lib/constants";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 120px, hide near top
      if (!dismissed) {
        setVisible(window.scrollY > 120);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <>
      <div
        className={`sticky-cta ${visible ? "sticky-cta--visible" : ""}`}
        role="complementary"
        aria-label="Ticket registration"
      >
        <p className="sticky-cta__text">
          📅 16 Oct · Vyas Terrace
        </p>
        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary sticky-cta__btn"
          id="sticky-ticket-cta"
          aria-label="Grab your ticket for Navras 2026"
        >
          Grab Ticket →
        </a>
        <button
          className="sticky-cta__close"
          onClick={() => { setDismissed(true); setVisible(false); }}
          aria-label="Close sticky ticket bar"
        >
          ×
        </button>
      </div>

      <style jsx>{`
        .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 80;
          background: var(--maroon-deep);
          border-top: 2px solid var(--gold);
          padding: 0.65rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          transform: translateY(100%);
          transition: transform 0.4s var(--ease-festival);
          /* Only show on mobile */
        }

        .sticky-cta--visible {
          transform: translateY(0);
        }

        .sticky-cta__text {
          color: rgba(255, 248, 231, 0.85);
          font-size: 0.8rem;
          font-weight: 500;
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .sticky-cta__btn {
          flex-shrink: 0;
          font-size: 0.78rem;
          padding: 0.55rem 1rem;
          min-height: 40px;
        }

        .sticky-cta__close {
          color: rgba(255, 248, 231, 0.5);
          font-size: 1.2rem;
          line-height: 1;
          padding: 0.25rem 0.25rem;
          flex-shrink: 0;
          border-radius: 4px;
          transition: color 0.2s;
        }

        .sticky-cta__close:hover { color: rgba(255, 248, 231, 0.9); }

        /* ─── HIDE ON DESKTOP ─── */
        @media (min-width: 768px) {
          .sticky-cta {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
