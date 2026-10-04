"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { RASAS } from "@/lib/constants";

export default function RasaSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeRasa = RASAS.find((r) => r.id === activeId) ?? null;
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll-linked progress driving the unified product carousel
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 26,
    mass: 0.6,
  });

  // Entire sequence slides together all at once like a product carousel:
  // 1. Start: 0px (Card 1 Shringar fully visible at left)
  // 2. Initial scroll: slides from left to right (0px to +55px)
  // 3. Mid scroll: smoothly glides right to left (+55px to -390px), showcasing all 9 emotions in order
  // 4. Late scroll: finishes glide (-450px)
  const trackX = useTransform(
    smoothProgress,
    [0, 0.22, 0.78, 1],
    [0, 55, -390, -450]
  );

  // "Last part goes forward": 3D elevation and scale for latter cards as you scroll through
  const endCardScale = useTransform(smoothProgress, [0.45, 0.75, 0.95], [1, 1.08, 1.16]);
  const endCardZ = useTransform(smoothProgress, [0.45, 0.75, 0.95], [0, 30, 70]);

  // Arrow controls for manual carousel nudging
  const scrollTrack = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
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

        {/* 3D Perspective Carousel Container */}
        <div className="rasa-carousel__viewport" ref={trackRef}>
          <motion.div
            className="rasa-carousel__track"
            style={{ x: trackX }}
            role="list"
            aria-label="Nine Rasa cards sequence"
          >
            {RASAS.map((rasa, index) => {
              const isActive = activeId === rasa.id;
              // 7th (Bibhats), 8th (Adbhut), 9th (Shanta) - the "last part" that steps forward in 3D
              const isLastPart = index >= 6;

              return (
                <motion.div
                  key={rasa.id}
                  className="rasa-card-wrap"
                  style={{
                    scale: isLastPart ? endCardScale : 1,
                    z: isLastPart ? endCardZ : 0,
                  } as unknown as React.CSSProperties}
                >
                  <button
                    type="button"
                    role="listitem"
                    aria-label={`${index + 1}. ${rasa.displayName} (${rasa.devanagari}) — ${rasa.meaning}`}
                    aria-pressed={isActive}
                    className={`rasa-card ${isActive ? "rasa-card--active" : ""}`}
                    style={{
                      "--card-color": rasa.color,
                    } as React.CSSProperties}
                    onClick={() => setActiveId(isActive ? null : rasa.id)}
                  >
                    {/* Arched temple dome frame with poster art */}
                    <div className="rasa-card__arch-wrap">
                      <Image
                        src={rasa.image}
                        alt={`${rasa.displayName} (${rasa.devanagari})`}
                        fill
                        sizes="(max-width: 768px) 130px, 160px"
                        className="rasa-card__img"
                        priority={index < 4}
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
          ✦ Scroll page to glide the carousel • Swipe or tap any emotion to explore ✦
        </p>

        {/* Expanded Description Panel — Last part comes forward with rich narrative */}
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
