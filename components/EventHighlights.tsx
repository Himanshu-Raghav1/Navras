"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerChildren, fadeUp } from "@/lib/animations";
import { HIGHLIGHTS } from "@/lib/constants";

export default function EventHighlights() {
  return (
    <section id="highlights" className="highlights-section" aria-label="Event Highlights">
      <div className="highlights-top-border" aria-hidden="true" />

      <div className="container highlights-container">
        {/* Left lotus decorative corner */}
        <div className="highlights-lotus highlights-lotus--left" aria-hidden="true">
          <Image
            src="/assets/decorations/flower_pattern.png"
            alt=""
            width={72}
            height={72}
            style={{ opacity: 0.35, mixBlendMode: "multiply" }}
          />
        </div>

        {/* 4 Horizontal Columns */}
        <motion.div
          className="highlights-grid-row"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.id}
              className={`highlight-col-item ${
                i < HIGHLIGHTS.length - 1 ? "highlight-col-item--bordered" : ""
              }`}
              variants={fadeUp}
              custom={i}
            >
              {/* Image Icon from public/assets */}
              <div className="highlight-img-wrap">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="highlight-art-img"
                />
              </div>

              {/* Title */}
              <h3 className="highlight-item-title">{item.title}</h3>

              {/* Description */}
              <p className="highlight-item-desc">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right lotus decorative corner */}
        <div className="highlights-lotus highlights-lotus--right" aria-hidden="true">
          <Image
            src="/assets/decorations/flower_pattern.png"
            alt=""
            width={72}
            height={72}
            style={{ opacity: 0.35, mixBlendMode: "multiply", transform: "scaleX(-1)" }}
          />
        </div>
      </div>

      <div className="highlights-bottom-border" aria-hidden="true" />
    </section>
  );
}
