"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/animations";
import { EVENT } from "@/lib/constants";

export default function EventDetails() {
  return (
    <section id="details" className="event-details-section" aria-label="Event Details">
      <div className="container event-details-container">
        {/* Ornate Header: EVENT DETAILS with festive flourishes */}
        <motion.div
          className="event-details-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left flourish */}
          <div className="event-details-flourish" aria-hidden="true">
            <svg width="48" height="18" viewBox="0 0 48 18" fill="none" stroke="#D84315" strokeWidth="1.6">
              <path d="M48 9 C36 9, 32 3, 24 3 C16 3, 12 15, 6 15 C2 15, 0 12, 0 9 C0 6, 2 3, 6 3 C10 3, 14 11, 20 11" strokeLinecap="round" />
              <circle cx="24" cy="3" r="2" fill="#D84315" />
            </svg>
          </div>

          <h2 className="event-details-title">EVENT DETAILS</h2>

          {/* Right flourish */}
          <div className="event-details-flourish" aria-hidden="true" style={{ transform: "scaleX(-1)" }}>
            <svg width="48" height="18" viewBox="0 0 48 18" fill="none" stroke="#D84315" strokeWidth="1.6">
              <path d="M48 9 C36 9, 32 3, 24 3 C16 3, 12 15, 6 15 C2 15, 0 12, 0 9 C0 6, 2 3, 6 3 C10 3, 14 11, 20 11" strokeLinecap="round" />
              <circle cx="24" cy="3" r="2" fill="#D84315" />
            </svg>
          </div>
        </motion.div>

        {/* 4 Horizontal Items in a Single Row */}
        <motion.div
          className="event-details-row"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* 1. DATE */}
          <motion.div className="event-details-item" variants={fadeUp}>
            <div className="event-details-icon" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#C42614" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
                <line x1="7" y1="14" x2="7.01" y2="14" strokeWidth="2.5" />
                <line x1="12" y1="14" x2="12.01" y2="14" strokeWidth="2.5" />
                <line x1="17" y1="14" x2="17.01" y2="14" strokeWidth="2.5" />
                <line x1="7" y1="18" x2="7.01" y2="18" strokeWidth="2.5" />
                <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
              </svg>
            </div>
            <div className="event-details-text">
              <span className="event-details-val-primary">16<sup>TH</sup> OCT 26&apos;</span>
              <span className="event-details-val-sub">({EVENT.dayOfWeek})</span>
            </div>
          </motion.div>

          <div className="event-details-sep" aria-hidden="true" />

          {/* 2. VENUE */}
          <motion.div className="event-details-item" variants={fadeUp}>
            <div className="event-details-icon" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#C42614">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div className="event-details-text">
              <span className="event-details-val-primary">VYAS TERRACE</span>
              <span className="event-details-val-sub">({EVENT.floor.toUpperCase()})</span>
            </div>
          </motion.div>

          <div className="event-details-sep" aria-hidden="true" />

          {/* 3. TIME */}
          <motion.div className="event-details-item" variants={fadeUp}>
            <div className="event-details-icon" aria-hidden="true">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#C42614" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9.5" />
                <polyline points="12 6 12 12 15.5 14" />
              </svg>
            </div>
            <div className="event-details-text">
              <span className="event-details-val-primary">{EVENT.time}</span>
            </div>
          </motion.div>

          <div className="event-details-sep" aria-hidden="true" />

          {/* 4. ELIGIBILITY */}
          <motion.div className="event-details-item" variants={fadeUp}>
            <div className="event-details-icon" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#C42614">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
              </svg>
            </div>
            <div className="event-details-text">
              <span className="event-details-val-primary">{EVENT.eligibility}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
