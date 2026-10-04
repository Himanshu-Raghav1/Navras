// ===================================================
// NAVRAS × Dhvani — Animation Variants (Framer Motion)
// ===================================================

import type { Variants } from "framer-motion";

const EASE_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_CUBIC },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_CUBIC },
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_CUBIC },
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_CUBIC },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerChildrenFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

/** Reduced motion safe: disables all animations */
export const reducedMotionVariant: Variants = {
  hidden: { opacity: 1, y: 0, x: 0, scale: 1 },
  visible: { opacity: 1, y: 0, x: 0, scale: 1 },
};

/** Float animation keyframes (CSS) — applied via className */
export const floatKeyframesCSS = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-12px) rotate(2deg); }
  }
  @keyframes floatReverse {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(-2deg); }
  }
  @keyframes sway {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }
  @keyframes slowRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes dandiyaScroll {
    0% { transform: translateX(-60px) rotate(-15deg); }
    100% { transform: translateX(60px) rotate(15deg); }
  }
`;
