"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerChildrenFast, scaleIn, fadeUp } from "@/lib/animations";
import { RASAS } from "@/lib/constants";

// Dancer silhouettes per rasa — simplified SVG glyphs
const RASA_ICONS: Record<string, React.ReactNode> = {
  shringar: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v12h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 51c0 8 6 20 14 28 8-8 14-20 14-28H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M22 38l-8 10M58 38l8 10" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="33" cy="12" r="2" fill="white" fillOpacity="0.6"/>
      <circle cx="47" cy="12" r="2" fill="white" fillOpacity="0.6"/>
    </svg>
  ),
  hasya: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v10h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M30 49l-10 20h40L50 49H30Z" fill="white" fillOpacity="0.7"/>
      <path d="M26 38l-8 6 8 4M54 38l8 6-8 4" stroke="white" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  karuna: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v12h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 51l-4 28h36l-4-28H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M22 46l-6 8M58 46l6 8" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
      <path d="M34 10 Q40 6 46 10" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  raudra: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v8h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 47l-8 28h44l-8-28H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M20 36l-8-8M60 36l8-8" stroke="white" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M24 32l-4-12M56 32l4-12" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  vira: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="14" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 24c-8 0-14 6-14 14v10h28V38c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 48l-6 30h40l-6-30H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M20 32l-10-14M60 32l10-14" stroke="white" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  bhayanaka: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v12h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 51l-2 28h32l-2-28H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M20 40l-8 12M60 40l8 12" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
      <path d="M36 10 v-6 M44 10 v-6" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  bibhatsa: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v12h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 51L18 79h44l-8-28H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M26 38l-10 4M54 38l10 4" stroke="white" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  adbhuta: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v8h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 47l-6 32h40l-6-32H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M22 34l-10-12M58 34l10-12" stroke="white" strokeOpacity="0.9" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="40" cy="5" r="3" fill="white" fillOpacity="0.5"/>
      <path d="M37 3 L33 -2M43 3 L47 -2" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  shanta: (
    <svg viewBox="0 0 80 100" fill="none" aria-hidden="true">
      <circle cx="40" cy="15" r="8" fill="white" fillOpacity="0.9"/>
      <path d="M40 25c-8 0-14 6-14 14v14h28V39c0-8-6-14-14-14Z" fill="white" fillOpacity="0.9"/>
      <path d="M26 53l-2 26h32l-2-26H26Z" fill="white" fillOpacity="0.7"/>
      <path d="M22 44l-4 8M58 44l4 8" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round"/>
      <path d="M30 48 Q40 52 50 48" stroke="white" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};

export default function RasaSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeRasa = RASAS.find((r) => r.id === activeId) ?? null;

  return (
    <section id="navras" className="rasa-band" aria-label="The Nine Rasas — Nine Emotions">
      {/* Decorative background rings */}
      <div className="rasa__bg-ring rasa__bg-ring--1" aria-hidden="true" />
      <div className="rasa__bg-ring rasa__bg-ring--2" aria-hidden="true" />

      <div className="container rasa__container">
        {/* Section header */}
        <div className="rasa__header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="rasa__label">The Foundation of Navras</p>
            <h2 className="rasa__heading">The Nine<br />Emotions</h2>
          </motion.div>

          <motion.p
            className="rasa__intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Navras takes inspiration from the nine rasas — the nine fundamental
            aesthetic emotions of Indian artistic tradition. Every beat, step,
            and interaction at this celebration becomes a form of expression.
          </motion.p>
        </div>

        {/* Cards — horizontal scroll on mobile, wrap on desktop */}
        <motion.div
          className="rasa__cards"
          role="list"
          aria-label="Nine Rasa cards — tap to explore"
          variants={staggerChildrenFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {RASAS.map((rasa) => {
            const isActive = activeId === rasa.id;
            return (
              <motion.button
                key={rasa.id}
                role="listitem"
                aria-label={`${rasa.name} — ${rasa.meaning}`}
                aria-pressed={isActive}
                className={`rasa-card ${isActive ? "rasa-card--active" : ""}`}
                style={{
                  "--card-color": rasa.color,
                } as React.CSSProperties}
                variants={scaleIn}
                onClick={() => setActiveId(isActive ? null : rasa.id)}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon */}
                <div className="rasa-card__icon">
                  {RASA_ICONS[rasa.id]}
                </div>

                {/* Text */}
                <p className="rasa-card__name">{rasa.name.toUpperCase()}</p>
                <p className="rasa-card__devanagari devanagari">{rasa.devanagari}</p>
                <p className="rasa-card__meaning">{rasa.meaning}</p>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Expanded description panel */}
        <AnimatePresence>
          {activeRasa && (
            <motion.div
              key={activeRasa.id}
              className="rasa__description"
              initial={{ opacity: 0, y: 16, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 8, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              role="region"
              aria-live="polite"
              aria-label={`Description of ${activeRasa.name}`}
            >
              <div
                className="rasa__description-inner"
                style={{ borderColor: activeRasa.color }}
              >
                <span
                  className="rasa__desc-dot"
                  style={{ background: activeRasa.color }}
                />
                <div>
                  <p className="rasa__desc-name">
                    {activeRasa.name}
                    <span className="rasa__desc-devanagari devanagari">
                      {" "}({activeRasa.devanagari})
                    </span>
                    {" "}— <em>{activeRasa.meaning}</em>
                  </p>
                  <p className="rasa__desc-body">{activeRasa.description}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tap hint — mobile */}
        <p className="rasa__hint" aria-hidden="true">
          Tap any emotion to explore ✦
        </p>
      </div>

      <style jsx>{`
        .rasa-band {
          background-color: var(--maroon-deep);
          padding: 3.5rem 0 2.5rem;
          position: relative;
          overflow: hidden;
        }

        /* ─── BG RINGS ─── */
        .rasa__bg-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(214, 165, 46, 0.1);
          pointer-events: none;
        }

        .rasa__bg-ring--1 {
          width: 600px; height: 600px;
          top: -200px; left: -100px;
        }

        .rasa__bg-ring--2 {
          width: 400px; height: 400px;
          bottom: -100px; right: -50px;
        }

        /* ─── CONTAINER ─── */
        .rasa__container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        /* ─── HEADER ─── */
        .rasa__header {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .rasa__label {
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.4rem;
        }

        .rasa__heading {
          font-family: var(--font-display);
          font-size: clamp(2rem, 7vw, 3.5rem);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.01em;
        }

        .rasa__intro {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(255, 248, 231, 0.75);
          max-width: 55ch;
        }

        /* ─── CARDS WRAPPER ─── */
        .rasa__cards {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          overflow-y: visible;
          padding-bottom: 1rem;
          /* Snap scroll on mobile */
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          /* Hide scrollbar but keep scroll */
          scrollbar-width: none;
        }

        .rasa__cards::-webkit-scrollbar { display: none; }

        /* ─── RASA CARD ─── */
        .rasa-card {
          flex: 0 0 auto;
          width: 88px;
          height: 140px;
          border-radius: 50% 50% 10px 10px / 40% 40% 10px 10px;
          background-color: var(--card-color, var(--red));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding: 0 0.5rem 0.75rem;
          gap: 0.2rem;
          scroll-snap-align: start;
          border: 2px solid transparent;
          transition: border-color 0.25s;
          position: relative;
          overflow: hidden;
        }

        .rasa-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.35) 100%);
          border-radius: inherit;
        }

        .rasa-card--active {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(214, 165, 46, 0.25);
        }

        .rasa-card__icon {
          position: absolute;
          top: 12px;
          left: 50%;
          transform: translateX(-50%);
          width: 56px;
          height: 72px;
          pointer-events: none;
        }

        .rasa-card__name {
          position: relative;
          z-index: 1;
          font-family: var(--font-body);
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #fff;
          text-align: center;
          line-height: 1.2;
        }

        .rasa-card__devanagari {
          position: relative;
          z-index: 1;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.85);
          text-align: center;
        }

        .rasa-card__meaning {
          position: relative;
          z-index: 1;
          font-size: 0.55rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          line-height: 1.3;
        }

        /* ─── DESCRIPTION PANEL ─── */
        .rasa__description {
          overflow: hidden;
        }

        .rasa__description-inner {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid;
          border-radius: 10px;
          padding: 1rem 1.25rem;
          backdrop-filter: blur(4px);
        }

        .rasa__desc-dot {
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.35rem;
        }

        .rasa__desc-name {
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.35rem;
          line-height: 1.4;
        }

        .rasa__desc-devanagari {
          font-size: 0.95em;
          opacity: 0.8;
        }

        .rasa__desc-body {
          font-size: 0.875rem;
          line-height: 1.65;
          color: rgba(255, 248, 231, 0.75);
        }

        /* ─── HINT ─── */
        .rasa__hint {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.35);
          text-align: center;
          letter-spacing: 0.06em;
        }

        /* ─── TABLET / DESKTOP ─── */
        @media (min-width: 768px) {
          .rasa-band { padding: 5rem 0 3.5rem; }

          .rasa__header {
            flex-direction: row;
            align-items: flex-start;
            gap: 3rem;
          }

          .rasa__header > * { flex: 1; }

          .rasa__cards {
            flex-wrap: wrap;
            overflow-x: visible;
            justify-content: center;
            scroll-snap-type: none;
          }

          .rasa-card {
            width: 100px;
            height: 160px;
          }

          .rasa-card__name    { font-size: 0.6rem; }
          .rasa-card__meaning { font-size: 0.6rem; }

          .rasa__hint { display: none; }
        }

        @media (min-width: 1024px) {
          .rasa-card {
            width: 110px;
            height: 176px;
          }

          .rasa-card__icon { width: 64px; height: 82px; }
        }
      `}</style>
    </section>
  );
}
