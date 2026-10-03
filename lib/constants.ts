// ===================================================
// NAVRAS × Dhvani — Global Constants
// ===================================================

/** Registration/Ticket URL — update this ONE value when Google Form link is available */
export const REGISTRATION_URL = "#details";

// Event Details
export const EVENT = {
  name: "NAVRAS",
  date: "16 October 2026",
  dayOfWeek: "Thursday",
  time: "4:00 PM – 9:00 PM",
  venue: "Vyas Terrace",
  floor: "8th Floor",
  institution: "MIT-WPU",
  eligibility: "Open for All Students",
} as const;

// The Nine Rasas
export const RASAS = [
  {
    id: "shringar",
    name: "Śṛṅgāra",
    devanagari: "शृंगार",
    meaning: "Love & Beauty",
    color: "#C93724",
    description: "The rasa of love, beauty, and aesthetic delight — the most celebrated of all emotions.",
  },
  {
    id: "hasya",
    name: "Hāsya",
    devanagari: "हास्य",
    meaning: "Joy & Laughter",
    color: "#E87924",
    description: "The rasa of joy, humour, and laughter — light-heartedness that uplifts the spirit.",
  },
  {
    id: "karuna",
    name: "Karuṇā",
    devanagari: "करुणा",
    meaning: "Compassion",
    color: "#D6A52E",
    description: "The rasa of compassion, sorrow, and empathy — the tender ache of feeling deeply.",
  },
  {
    id: "raudra",
    name: "Raudra",
    devanagari: "रौद्र",
    meaning: "Fury",
    color: "#8B1A1A",
    description: "The rasa of fury and passion — the fierce force of righteous anger.",
  },
  {
    id: "vira",
    name: "Vīra",
    devanagari: "वीर",
    meaning: "Courage",
    color: "#087D78",
    description: "The rasa of heroism and courage — the strength that drives action and purpose.",
  },
  {
    id: "bhayanaka",
    name: "Bhayānaka",
    devanagari: "भयानक",
    meaning: "Fear",
    color: "#2D4A7A",
    description: "The rasa of fear and dread — the powerful sensation of the unknown.",
  },
  {
    id: "bibhatsa",
    name: "Bībhatsa",
    devanagari: "बीभत्स",
    meaning: "Aversion",
    color: "#4C7D52",
    description: "The rasa of disgust and aversion — the raw reaction that defines boundaries.",
  },
  {
    id: "adbhuta",
    name: "Adbhuta",
    devanagari: "अद्भुत",
    meaning: "Wonder",
    color: "#7B3FA0",
    description: "The rasa of wonder and amazement — the sublime sensation of encountering the extraordinary.",
  },
  {
    id: "shanta",
    name: "Śānta",
    devanagari: "शांत",
    meaning: "Peace",
    color: "#C97B8A",
    description: "The rasa of tranquility and peace — the still point where all emotions come to rest.",
  },
] as const;

// Event Highlights
export const HIGHLIGHTS = [
  {
    id: "live-music",
    title: "LIVE MUSIC",
    description: "2 hours of instrumental and vocal performance",
    image: "/assets/live_music.png",
  },
  {
    id: "garba",
    title: "GARBA WITH FRIENDS",
    description: "Feel the rhythm, move together",
    image: "/assets/garba_with_friends.png",
  },
  {
    id: "food",
    title: "STALLS",
    description: "Food, fun and exciting stalls",
    image: "/assets/food_stall.png",
  },
  {
    id: "cultural",
    title: "CULTURAL EXTRAVAGANZA",
    description: "A vibrant celebration of diversity",
    image: "/assets/culture.png",
  },
] as const;
