"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { RASAS } from "@/lib/constants";

// 4 repetitions for seamless infinite looping during page-scroll and manual navigation:
// Set 0 (initial view), Set 1 (middle loop), Set 2 (second loop), Set 3 (extended buffer)
const LOOPED_RASAS = [
  ...RASAS.map((r, i) => ({ ...r, uniqueKey: `set0-${r.id}`, loopIndex: i })),
  ...RASAS.map((r, i) => ({ ...r, uniqueKey: `set1-${r.id}`, loopIndex: i })),
  ...RASAS.map((r, i) => ({ ...r, uniqueKey: `set2-${r.id}`, loopIndex: i })),
  ...RASAS.map((r, i) => ({ ...r, uniqueKey: `set3-${r.id}`, loopIndex: i })),
];

export default function RasaSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeRasa = RASAS.find((r) => r.id === activeId) ?? null;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure dynamic set distance for responsive screen widths
  const [setDistance, setSetDistance] = useState(1548);

  useEffect(() => {
    const calcDistance = () => {
      if (typeof window !== "undefined") {
        const isMobile = window.innerWidth < 860;
        // Desktop: 9 * (152px card + 20px gap) = 1548px
        // Mobile: 9 * (134px card + 20px gap) = 1386px
        setSetDistance(isMobile ? 1386 : 1548);
      }
    };
    calcDistance();
    window.addEventListener("resize", calcDistance);
    return () => window.removeEventListener("resize", calcDistance);
  }, []);

  // 1. Page-Scroll Linked Progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.6,
  });

  // When scrolling the page, cards smoothly slide horizontally across the screen.
  // After Card 9 (Shanta), Card 1 (Shringar) seamlessly slides in next in the loop!
  const pageScrollX = useTransform(
    smoothProgress,
    [0, 0.18, 0.82, 1],
    [50, 0, -setDistance, -(setDistance + 220)]
  );

  // 2. Manual Nudge Offset (for Arrow buttons & Dragging)
  const manualX = useMotionValue(0);
  const springManualX = useSpring(manualX, {
    stiffness: 95,
    damping: 24,
    mass: 0.5,
  });

  // Combine page-scroll slide + manual nudge seamlessly
  const combinedX = useTransform(
    [pageScrollX, springManualX],
    ([ps, mx]) => (ps as number) + (mx as number)
  );

  // 3D elevation and subtle scale for cards during scroll progress
  const endCardScale = useTransform(smoothProgress, [0.45, 0.75, 0.95], [1, 1.06, 1.12]);
  const endCardZ = useTransform(smoothProgress, [0.45, 0.75, 0.95], [0, 24, 60]);

  // Arrow controls for manual carousel nudging (cycles infinitely across cards)
  const scrollTrack = (direction: "left" | "right") => {
    const cardStep = setDistance / 9; // width of 1 card + gap
    const nudgeAmount = cardStep * 1.5;
    const current = manualX.get();
    const next = direction === "left" ? current + nudgeAmount : current - nudgeAmount;

    // Infinite wrap for manual offsets
    if (next < -setDistance * 1.5) {
      manualX.set(next + setDistance);
    } else if (next > setDistance * 0.5) {
      manualX.set(next - setDistance);
    } else {
      manualX.set(next);
    }
  };

  // Pointer drag handling for both desktop mouse and mobile touch
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startManualXRef = useRef(0);
  const hasDraggedRef = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    startManualXRef.current = manualX.get();
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }
    manualX.set(startManualXRef.current + deltaX * 1.15);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      try {
        (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {}

      // Wrap if user dragged past a full set
      const current = manualX.get();
      if (current < -setDistance * 1.5) {
        manualX.set(current + setDistance);
      } else if (current > setDistance * 0.5) {
        manualX.set(current - setDistance);
      }
    }
  };

  // Card click: toggle narrative panel (prevented if user was dragging)
  const handleCardClick = (rasaId: string) => {
    if (hasDraggedRef.current) return;
    setActiveId((prev) => (prev === rasaId ? null : rasaId));
  };

  return (
    <section
      id="navras"
      ref={sectionRef}
      className="rasa-band"
      aria-label="The Nine Rasas — Nine Emotions"
    >
      {/* Decorative background rings */}
      <div className="rasa__bg-ring rasa__bg-ring--1" aria-hidden="true" />
      <div className="rasa__bg-ring rasa__bg-ring--2" aria-hidden="true" />

      <div className="container rasa__container">
        {/* Section Header */}
        <div className="rasa__header">
          <div className="rasa__header-left">
            <div>
              <p className="rasa__label">THE FOUNDATION OF NAVRAS</p>
              <h2 className="rasa__heading">THE NINE EMOTIONS</h2>
            </div>
            {/* Traditional golden flourish icon */}
            <svg
              className="rasa__header-flourish"
              viewBox="0 0 60 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 12 C14 4, 22 20, 30 12 C38 4, 46 20, 56 12"
                stroke="#D4AF37"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="30" cy="12" r="3.5" fill="#D4AF37" />
              <circle cx="10" cy="12" r="2" fill="#D4AF37" />
              <circle cx="50" cy="12" r="2" fill="#D4AF37" />
            </svg>
          </div>

          <div className="rasa__header-right">
            <p className="rasa__intro">
              Navras takes inspiration from the concept of the nine emotions and
              transforms them into a lively experience where every beat, step, and
              interaction becomes a form of expression.
            </p>

            {/* Carousel navigation arrow pills */}
            <div className="rasa__nav-arrows" aria-label="Carousel navigation">
              <button
                type="button"
                className="rasa__nav-btn"
                onClick={() => scrollTrack("left")}
                aria-label="Scroll left"
              >
                ‹
              </button>
              <button
                type="button"
                className="rasa__nav-btn"
                onClick={() => scrollTrack("right")}
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* 3D Perspective Infinite Carousel Container */}
        <div
          className="rasa-carousel__viewport"
          ref={trackRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <motion.div
            className="rasa-carousel__track"
            style={{ x: combinedX }}
            role="list"
            aria-label="Infinite Nine Rasa cards sequence"
          >
            {LOOPED_RASAS.map((rasa, index) => {
              const isActive = activeId === rasa.id;
              const isLastPart = (index % 9) >= 6;

              return (
                <motion.div
                  key={rasa.uniqueKey}
                  className="rasa-card-wrap"
                  style={{
                    scale: isLastPart ? endCardScale : 1,
                    z: isLastPart ? endCardZ : 0,
                  } as unknown as React.CSSProperties}
                >
                  <button
                    type="button"
                    role="listitem"
                    aria-label={`${rasa.displayName} (${rasa.devanagari}) — ${rasa.meaning}`}
                    aria-pressed={isActive}
                    className={`rasa-card ${isActive ? "rasa-card--active" : ""}`}
                    style={{
                      "--card-color": rasa.color,
                    } as React.CSSProperties}
                    onClick={() => handleCardClick(rasa.id)}
                  >
                    {/* Arched temple dome frame with poster art */}
                    <div className="rasa-card__arch-wrap">
                      <Image
                        src={rasa.image}
                        alt={`${rasa.displayName} (${rasa.devanagari})`}
                        fill
                        sizes="(max-width: 768px) 134px, 152px"
                        className="rasa-card__img"
                      />
                      <div className="rasa-card__overlay" />
                    </div>

                    {/* Card bottom banner: Title + Devanagari + Meaning */}
                    <div className="rasa-card__label-wrap">
                      <p className="rasa-card__name">{rasa.displayName}</p>
                      <p className="rasa-card__devanagari devanagari">
                        ({rasa.devanagari})
                      </p>
                      <p className="rasa-card__meaning">{rasa.meaning}</p>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Swipe / scroll guidance */}
        <p className="rasa__hint" aria-hidden="true">
          ✦ Scroll page to glide the carousel • Drag or use arrows to explore in loop ✦
        </p>

        {/* Expanded Description Panel — Rich narrative details on card selection */}
        <AnimatePresence>
          {activeRasa && (
            <motion.div
              key={activeRasa.id}
              className="rasa__description"
              initial={{ opacity: 0, y: 28, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
              role="region"
              aria-live="polite"
              aria-label={`Description of ${activeRasa.displayName}`}
            >
              <div
                className="rasa__description-inner"
                style={{
                  borderColor: activeRasa.color,
                  boxShadow: `0 20px 48px rgba(0, 0, 0, 0.7), 0 0 35px ${activeRasa.color}45`,
                }}
              >
                {/* Poster Artwork Thumbnail with arched border */}
                <div
                  className="rasa__desc-art-wrap"
                  style={{ borderColor: activeRasa.color }}
                >
                  <Image
                    src={activeRasa.image}
                    alt={activeRasa.displayName}
                    width={96}
                    height={128}
                    className="rasa__desc-art-img"
                  />
                </div>

                {/* Narrative Details */}
                <div className="rasa__desc-content">
                  <div className="rasa__desc-header">
                    <h3 className="rasa__desc-name">
                      {activeRasa.displayName}
                      <span className="rasa__desc-devanagari devanagari">
                        {" "}({activeRasa.devanagari})
                      </span>
                      {" "}— <span className="rasa__desc-meaning">{activeRasa.meaning}</span>
                    </h3>
                    <button
                      type="button"
                      className="rasa__desc-close"
                      onClick={() => setActiveId(null)}
                      aria-label="Close details"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="rasa__desc-body">{activeRasa.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
