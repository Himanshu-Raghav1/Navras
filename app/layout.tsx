import type { Metadata, Viewport } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
