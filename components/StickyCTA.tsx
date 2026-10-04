"use client";

import { useState, useEffect } from "react";
import { REGISTRATION_URL } from "@/lib/constants";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      const hero = document.getElementById("hero");
      if (hero) {
        const bottom = hero.getBoundingClientRect().bottom;
        setVisible(bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      className={`sticky-cta ${visible ? "sticky-cta--visible" : ""}`}
      role="complementary"
      aria-label="Quick Registration"
      aria-hidden={!visible}
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
  );
}
