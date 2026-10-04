import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Tiro_Devanagari_Sanskrit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const tiroDevanagari = Tiro_Devanagari_Sanskrit({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAVRAS 2026 — Nine Emotions, Countless Rhythms | Dhvani × MIT-WPU",
  description:
    "Join Navras — a Navratri cultural celebration by Dhvani, The Music Community at MIT-WPU. Live music, Garba, food stalls and more. 16 October 2026, Vyas Terrace, 8th Floor.",
  keywords: [
    "Navras", "Dhvani", "MIT-WPU", "Navratri", "Garba", "Cultural Festival",
    "Nine Rasas", "Music Event", "Pune", "Student Event 2026"
  ],
  openGraph: {
    title: "NAVRAS 2026 — Nine Emotions, Countless Rhythms",
    description:
      "A Navratri cultural celebration by Dhvani, The Music Community at MIT-WPU. 16 October 2026.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#7E1D1B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${tiroDevanagari.variable}`}
    >
      <head>
        {/* Preload only the appropriate responsive hero image based on viewport */}
        <link
          rel="preload"
          as="image"
          href="/assets/hero/hero_navras_mobile.webp"
          type="image/webp"
          media="(max-width: 819px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/assets/hero/hero_navras.webp"
          type="image/webp"
          media="(min-width: 820px)"
          fetchPriority="high"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
