"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideRight, staggerChildren } from "@/lib/animations";
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
                target="_blank"
                rel="noopener noreferrer"
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
    </section>
  );
}
