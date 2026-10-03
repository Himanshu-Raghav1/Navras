"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { REGISTRATION_URL } from "@/lib/constants";

export default function RegistrationCTA() {
  return (
    <section
      id="register"
      className="reg-cta"
      aria-label="Final Registration Call to Action"
    >
      {/* Background decorations */}
      <div className="reg-cta__bg-left" aria-hidden="true">
        <Image
          src="/assets/decorations/flower_pattern.png"
          alt=""
          width={280}
          height={280}
          className="animate-slow-rotate"
          style={{ opacity: 0.1, mixBlendMode: "multiply" }}
        />
      </div>
      <div className="reg-cta__bg-right" aria-hidden="true">
        <Image
          src="/assets/decorations/flower_pattern.png"
          alt=""
          width={200}
          height={200}
          className="animate-slow-rotate"
          style={{
            opacity: 0.08,
            mixBlendMode: "multiply",
            animationDirection: "reverse",
          }}
        />
      </div>

      <div className="container reg-cta__inner">
        {/* Left: Dandiya pair */}
        <motion.div
          className="reg-cta__visual-left"
          initial={{ opacity: 0, x: -30, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <Image
            src="/assets/hero/dandiya.png"
            alt=""
            width={80}
            height={240}
            className="animate-float"
          />
        </motion.div>

        {/* CENTER: Main copy + CTA */}
        <motion.div
          className="reg-cta__content"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="reg-cta__small subheading">Don&apos;t miss out</p>
          <h2 className="reg-cta__heading">
            <span className="reg-cta__be-part">Be a Part of</span>
            <span className="reg-cta__navras-big">NAVRAS</span>
          </h2>

          <p className="reg-cta__sub">
            <em>Be part of the rhythm. Be part of the celebration.</em>
          </p>

          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary reg-cta__btn"
            id="final-ticket-cta"
            aria-label="Grab your ticket for Navras 2026"
          >
            Grab Your Ticket →
          </a>

          <p className="reg-cta__footnote">
            Fill the Google Form to Register Your Interest
          </p>

          {/* Handwritten-style callout */}
          <div className="reg-cta__callout" aria-hidden="true">
            <p>Let&apos;s</p>
            <p>Dance.</p>
            <p>Celebrate.</p>
            <p>Connect.</p>
          </div>
        </motion.div>

        {/* Right: Dancer */}
        <motion.div
          className="reg-cta__visual-right"
          initial={{ opacity: 0, x: 30, rotate: 10 }}
          whileInView={{ opacity: 1, x: 0, rotate: 15 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          aria-hidden="true"
        >
          <Image
            src="/assets/hero/dandiya.png"
            alt=""
            width={80}
            height={240}
            className="animate-float-rev"
            style={{ animationDelay: "1s" }}
          />
        </motion.div>
      </div>

      <style jsx>{`
        .reg-cta {
          position: relative;
          background: var(--paper);
          overflow: hidden;
          padding: 4rem 0;
          border-top: 4px solid transparent;
          border-image: repeating-linear-gradient(
            90deg,
            var(--maroon) 0, var(--maroon) 10px,
            var(--gold) 10px, var(--gold) 20px,
            var(--saffron) 20px, var(--saffron) 30px,
            var(--teal) 30px, var(--teal) 40px
          ) 1;
        }

        .reg-cta__bg-left  { position: absolute; left: -80px; top: -60px; pointer-events: none; z-index: 0; }
        .reg-cta__bg-right { position: absolute; right: -50px; bottom: -40px; pointer-events: none; z-index: 0; }

        .reg-cta__inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .reg-cta__visual-left,
        .reg-cta__visual-right {
          display: none;
          flex-shrink: 0;
        }

        /* ─── CONTENT ─── */
        .reg-cta__content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 1rem;
          max-width: 500px;
        }

        .reg-cta__small {
          font-size: 0.75rem;
        }

        .reg-cta__heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.1rem;
          line-height: 1;
        }

        .reg-cta__be-part {
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 5vw, 2.2rem);
          font-style: italic;
          color: var(--ink);
          font-weight: 400;
        }

        .reg-cta__navras-big {
          font-family: var(--font-display);
          font-size: clamp(3rem, 14vw, 6rem);
          font-weight: 900;
          background: linear-gradient(135deg, var(--maroon-deep), var(--red), var(--maroon));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
          filter: drop-shadow(0 3px 8px rgba(126, 29, 27, 0.2));
        }

        .reg-cta__sub {
          font-family: var(--font-display);
          font-size: clamp(0.9rem, 2.5vw, 1.1rem);
          color: var(--ink-soft);
          font-style: italic;
        }

        .reg-cta__btn {
          font-size: 0.9rem;
          padding: 1rem 2.5rem;
          margin-top: 0.5rem;
        }

        .reg-cta__footnote {
          font-size: 0.78rem;
          color: var(--ink-soft);
          opacity: 0.7;
        }

        .reg-cta__callout {
          margin-top: 0.5rem;
          opacity: 0.4;
        }

        .reg-cta__callout p {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-style: italic;
          color: var(--maroon);
          line-height: 1.5;
        }

        /* ─── TABLET+ ─── */
        @media (min-width: 768px) {
          .reg-cta__visual-left,
          .reg-cta__visual-right {
            display: block;
          }

          .reg-cta { padding: 5rem 0; }
        }
      `}</style>
    </section>
  );
}
