"use client";

import { useEffect, useState, useRef } from "react";

export default function CurtainIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);
  const prevOverflowRef = useRef<string>("");

  useEffect(() => {
    // 1. Force scroll to top immediately on landing & disable auto-restoration
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }

    // 2. Lock body scroll so page stays fixed at top during the curtain reveal
    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // 3. Theatrical anticipation pause:
    // Allow viewer to see the closed red velvet curtains & golden braided seam,
    // then trigger the center parting animation.
    const startOpeningTimer = setTimeout(() => {
      setIsOpen(true);
    }, 700);

    // 4. Safety fallback (8s) only in case browser tab is backgrounded
    const fallbackTimer = setTimeout(() => {
      document.body.style.overflow = prevOverflowRef.current || "";
      setIsFading(true);
      setTimeout(() => setIsUnmounted(true), 600);
    }, 8000);

    return () => {
      clearTimeout(startOpeningTimer);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = prevOverflowRef.current || "";
    };
  }, []);

  // Event-driven: Only proceed when the physical CSS transform transition ends
  const handleWingTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // Ensure this event comes directly from the main wing itself, NOT child folds bubbling up
    if (e.target !== e.currentTarget) return;

    if (e.propertyName === "transform" && isOpen && !isFading) {
      // 1. Unlock page scroll now that stage is open
      document.body.style.overflow = prevOverflowRef.current || "";

      // 2. Let the curtains rest for a beat, then smoothly fade out
      setTimeout(() => {
        setIsFading(true);
      }, 400);
    }
  };

  const handleStageTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    // When the whole stage has completed its opacity fade-out, cleanly unmount
    if (e.target === e.currentTarget && e.propertyName === "opacity" && isFading) {
      setIsUnmounted(true);
    }
  };

  if (isUnmounted) return null;

  return (
    <div
      className={`curtain-stage ${isOpen ? "curtain-stage--opening" : ""} ${
        isFading ? "curtain-stage--fading" : ""
      }`}
      onTransitionEnd={handleStageTransitionEnd}
      aria-hidden="true"
      role="presentation"
    >
      {/* Center Stage Light Beam radiating outward as curtains part */}
      <div className={`curtain-center-flare ${isOpen ? "is-open" : ""}`} />

      {/* Top Royal Theatrical Valance / Pelmet */}
      <div className={`curtain-top-pelmet ${isOpen ? "is-open" : ""}`}>
        <div className="curtain-pelmet-fringe" />
      </div>

      {/* ── LEFT CURTAIN (Gathers from center toward left wing) ── */}
      <div
        className={`curtain-wing curtain-wing--left ${isOpen ? "is-open" : ""}`}
        onTransitionEnd={handleWingTransitionEnd}
      >
        <div className="curtain-gather-track">
          <div className="curtain-fold curtain-fold--1" />
          <div className="curtain-fold curtain-fold--2" />
          <div className="curtain-fold curtain-fold--3" />
          <div className="curtain-fold curtain-fold--4" />
          <div className="curtain-fold curtain-fold--5" />
          <div className="curtain-fold curtain-fold--6" />
        </div>
        {/* Golden Braided Trim on center parting seam */}
        <div className="curtain-seam-braid curtain-seam-braid--left" />
        {/* Golden Cord & Tassel Tieback */}
        <div className="curtain-tieback curtain-tieback--left" />
      </div>

      {/* ── RIGHT CURTAIN (Gathers from center toward right wing) ── */}
      <div
        className={`curtain-wing curtain-wing--right ${isOpen ? "is-open" : ""}`}
      >
        <div className="curtain-gather-track">
          <div className="curtain-fold curtain-fold--1" />
          <div className="curtain-fold curtain-fold--2" />
          <div className="curtain-fold curtain-fold--3" />
          <div className="curtain-fold curtain-fold--4" />
          <div className="curtain-fold curtain-fold--5" />
          <div className="curtain-fold curtain-fold--6" />
        </div>
        {/* Golden Braided Trim on center parting seam */}
        <div className="curtain-seam-braid curtain-seam-braid--right" />
        {/* Golden Cord & Tassel Tieback */}
        <div className="curtain-tieback curtain-tieback--right" />
      </div>
    </div>
  );
}
