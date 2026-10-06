// ===================================================
// NAVRAS × Dhvani — Global Constants
// ===================================================

/** Registration/Ticket URL — official Google Form link */
export const REGISTRATION_URL = "https://forms.gle/Wh94RVU34AG4h5ii6";

/** Dhvani Instagram URL */
export const INSTAGRAM_URL = "https://www.instagram.com/dhvani.mitwpu";

// Event Contacts / Queries
export const CONTACTS = [
  {
    name: "Soham More",
    role: "HOD Events, Dhvani",
    phone: "7506063433",
    displayPhone: "7506063433",
  },
  {
    name: "Parth Singhal",
    role: "HOD Operations and Logistics, Dhvani",
    phone: "8830030113",
    displayPhone: "8830030113",
  },
] as const;

// Event Details
export const EVENT = {
  name: "NAVRAS",
  date: "16 October 2026",
  dayOfWeek: "Thursday",
  time: "Starts at 3p.m.",
  venue: "Vyas Terrace",
  floor: "8th Floor",
  institution: "MIT-WPU",
  eligibility: "Open for All Students",
} as const;

// The Nine Rasas
export const RASAS = [
  {
    id: "shringar",
    name: "Shringar",
    displayName: "SHRINGAR",
    devanagari: "शृंगार",
    meaning: "Love & Beauty",
    color: "#E29328",
    description: "The rasa of love, beauty, and aesthetic delight — the tender feeling of affection and universal devotion.",
    image: "/assets/rasa/sringaar.png",
  },
  {
    id: "hasya",
    name: "Hasya",
    displayName: "HASYA",
    devanagari: "हास्य",
    meaning: "Joy & Laughter",
    color: "#803522",
    description: "The rasa of joy, humour, and laughter — vibrant shared amusement that uplifts the human spirit.",
    image: "/assets/rasa/Hasya.png",
  },
  {
    id: "karuna",
    name: "Karuna",
    displayName: "KARUNA",
    devanagari: "करुणा",
    meaning: "Compassion",
    color: "#3762A2",
    description: "The rasa of compassion, empathy, and tender grief — the sacred ability to feel deeply for another.",
    image: "/assets/rasa/karuna.png",
  },
  {
    id: "raudra",
    name: "Raudra",
    displayName: "RAUDRA",
    devanagari: "रौद्र",
    meaning: "Fury",
    color: "#7D1518",
    description: "The rasa of righteous fury and fiery passion — the fierce energy of truth dismantling deceit.",
    image: "/assets/rasa/rudra.png",
  },
  {
    id: "vira",
    name: "Veer",
    displayName: "VEER",
    devanagari: "वीर",
    meaning: "Courage",
    color: "#9C4791",
    description: "The rasa of heroism, chivalry, and valor — the steadfast resolve to step forward without hesitation.",
    image: "/assets/rasa/veer.png",
  },
  {
    id: "bhayanaka",
    name: "Bhayanak",
    displayName: "BHAYANAK",
    devanagari: "भयानक",
    meaning: "Fear",
    color: "#4C1F57",
    description: "The rasa of awe, suspense, and trembling apprehension — feeling the vastness of the mysterious unknown.",
    image: "/assets/rasa/bhayankar.png",
  },
  {
    id: "bibhatsa",
    name: "Bibhatsa",
    displayName: "BIBHATS",
    devanagari: "बीभत्स",
    meaning: "Aversion",
    color: "#5B853F",
    description: "The rasa of disgust and moral aversion — the vital instinct that turns away from decay toward purity.",
    image: "/assets/rasa/vibhatsa.png",
  },
  {
    id: "adbhuta",
    name: "Adbhut",
    displayName: "ADBHUT",
    devanagari: "अद्भुत",
    meaning: "Wonder",
    color: "#275878",
    description: "The rasa of wonder, curiosity, and astonishment — the breathless sensation of beholding the extraordinary.",
    image: "/assets/rasa/Adbhut.png",
  },
  {
    id: "shanta",
    name: "Shanta",
    displayName: "SHANTA",
    devanagari: "शांत",
    meaning: "Peace",
    color: "#BC6825",
    description: "The rasa of tranquility, stillness, and supreme serenity — the eternal calm where all emotions harmoniously unite.",
    image: "/assets/rasa/shaant.png",
  },
] as const;

// Event Highlights
export const HIGHLIGHTS = [
  {
    id: "live-music",
    title: "LIVE MUSIC",
    description: "2 hours of live vocal & instrumental music by fellow students",
    image: "/assets/live_music.png",
  },
  {
    id: "garba",
    title: "GARBA NIGHT",
    description: "Garba nights that go on all evening",
    image: "/assets/garba_with_friends.png",
  },
  {
    id: "food",
    title: "FOOD & STALLS",
    description: "Food & Student Entrepreneurship stalls to fuel celebration",
    image: "/assets/food_stall.png",
  },
  {
    id: "cultural",
    title: "CULTURAL EXPO",
    description: "A cultural expo showcasing the many colours of Bharat",
    image: "/assets/culture.png",
  },
] as const;
