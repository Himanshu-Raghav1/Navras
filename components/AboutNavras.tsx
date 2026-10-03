"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight, staggerChildren } from "@/lib/animations";
import { REGISTRATION_URL } from "@/lib/constants";

export default function AboutNavras() {
  return (
    <section id="about" className="about section-py" aria-label="About Navras">
      {/* Background flower decoration */}
      <div className="about__bg-flower" aria-hidden="true">
        <Image
          src="/assets/decorations/flower_pattern.png"
          alt=""
          width={320}
          height={320}
          style={{ opacity: 0.06, mixBlendMode: "multiply" }}
        />
      </div>

      <div className="container">
        <div className="about__inner">

          {/* LEFT: Text content */}
          <motion.div
            className="about__text"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Section label */}
            <motion.p className="subheading" variants={fadeUp}>
              More Than a Celebration
            </motion.p>

            {/* Heading */}
            <motion.h2 className="heading-lg about__heading" variants={fadeUp}>
              About<br />Navras
            </motion.h2>

            {/* Decorative divider */}
            <motion.div className="about__divider" variants={fadeUp} aria-hidden="true">
              <svg width="120" height="16" viewBox="0 0 120 16" fill="none">
                <line x1="0" y1="8" x2="40" y2="8" stroke="var(--gold)" strokeWidth="1.5"/>
                <path d="M55 4 L60 8 L65 4 L60 12 Z" fill="var(--gold)"/>
                <line x1="80" y1="8" x2="120" y2="8" stroke="var(--gold)" strokeWidth="1.5"/>
              </svg>
            </motion.div>

            {/* Emotional punch lines */}
            <motion.div className="about__punch" variants={fadeUp}>
              <p><em>Music becomes movement.</em></p>
              <p><em>Culture becomes connection.</em></p>
              <p><em>Emotion becomes expression.</em></p>
            </motion.div>

            {/* Body text */}
            <motion.p className="body-lg about__body" variants={fadeUp}>
              Navras is a student-led cultural celebration by Dhvani, The Music
              Community at MIT-WPU. Inspired by the nine rasas of Indian artistic
              tradition, the evening creates a space where students can step away
              from routine, express themselves and celebrate together through
              music, movement and culture.
            </motion.p>

            <motion.p className="body-lg about__body" variants={fadeUp}>
              Different backgrounds. Different rhythms. One shared celebration.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <a
                href={REGISTRATION_URL}
                className="btn-primary"
                id="about-know-more-cta"
              >
                KNOW MORE →
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Illustration + handwritten quote */}
          <motion.div
            className="about__visual"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={slideRight}
          >
            <div className="about__img-wrap">
              <Image
                src="/assets/hero/garba_dance2.png"
                alt="Students celebrating Navras together through Garba"
                width={400}
                height={430}
                style={{ width: "100%", height: "auto" }}
                className="about__img"
              />
              {/* Floating flower mandala */}
              <div className="about__img-flower" aria-hidden="true">
                <Image
                  src="/assets/decorations/flower_pattern.png"
                  alt=""
                  width={100}
                  height={100}
                  className="animate-slow-rotate"
                  style={{ opacity: 0.35, mixBlendMode: "multiply" }}
                />
              </div>
            </div>

            {/* Handwritten-style quote */}
            <div className="about__quote">
              <p>Different<br />People.</p>
              <p>One Rhythm.</p>
              <p>Same Energy.</p>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .about {
          position: relative;
          background-color: var(--paper);
          overflow: hidden;
        }

        .about__bg-flower {
          position: absolute;
          bottom: -60px;
          left: -60px;
          pointer-events: none;
          z-index: 0;
        }

        .about__inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        /* ─── TEXT ─── */
        .about__text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about__heading {
          line-height: 1.1;
        }

        .about__divider {
          margin: 0.25rem 0;
        }

        .about__punch {
          border-left: 3px solid var(--gold);
          padding-left: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .about__punch p {
          font-family: var(--font-display);
          font-size: clamp(1.05rem, 3vw, 1.3rem);
          font-style: italic;
          color: var(--maroon);
          line-height: 1.4;
        }

        .about__body {
          max-width: 56ch;
        }

        /* ─── VISUAL ─── */
        .about__visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .about__img-wrap {
          position: relative;
          display: inline-block;
        }

        .about__img {
          width: min(320px, 90vw);
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 8px 32px rgba(126, 29, 27, 0.18));
        }

        .about__img-flower {
          position: absolute;
          top: -30px;
          right: -30px;
          pointer-events: none;
        }

        /* ─── HANDWRITTEN QUOTE ─── */
        .about__quote {
          text-align: center;
          color: var(--maroon);
        }

        .about__quote p {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 4vw, 1.75rem);
          font-style: italic;
          font-weight: 700;
          line-height: 1.4;
          opacity: 0.85;
        }

        .about__quote p:nth-child(2) {
          color: var(--saffron);
        }

        /* ─── DESKTOP ─── */
        @media (min-width: 900px) {
          .about__inner {
            flex-direction: row;
            align-items: center;
            gap: 4rem;
          }

          .about__text {
            flex: 1;
            max-width: 52%;
          }

          .about__visual {
            flex: 0 0 44%;
            align-items: flex-end;
          }

          .about__img {
            width: 100%;
            max-width: 400px;
          }
        }
      `}</style>
    </section>
  );
}
