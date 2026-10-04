"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import { REGISTRATION_URL } from "@/lib/constants";

export default function RegistrationCTA() {
  return (
    <section className="reg-cta" id="register" aria-label="Registration Call to Action">
      {/* Background mandala accents */}
      <div className="reg-cta__bg-left" aria-hidden="true">
        <Image
          src="/assets/decorations/flower_pattern.png"
          alt=""
          width={280}
          height={280}
          style={{ opacity: 0.08, mixBlendMode: "multiply" }}
        />
      </div>
      <div className="reg-cta__bg-right" aria-hidden="true">
        <Image
          src="/assets/decorations/flower_pattern.png"
          alt=""
          width={220}
          height={220}
          style={{ opacity: 0.07, mixBlendMode: "multiply" }}
        />
      </div>

      <div className="container reg-cta__inner">
        {/* Left: Dandiya decoration */}
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

        {/* Center: Content */}
        <motion.div
          className="reg-cta__content"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Eyebrow */}
          <p className="subheading reg-cta__small">
            16 October 2026 · Vyas Terrace · MIT-WPU
          </p>

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
    </section>
  );
}
