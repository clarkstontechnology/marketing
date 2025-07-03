import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Clarkston Technology - Fractional CTO & Engineering Leadership",
    template: "%s | Clarkston Technology",
  },
  description: "Expert fractional CTO services, engineering team leadership, and software development consulting to accelerate your technology initiatives.",
  keywords: [
    "fractional CTO",
    "engineering leadership",
    "software development",
    "technology consulting",
    "team management",
    "startup advisor",
  ],
  authors: [{ name: "John Lee" }],
  creator: "Clarkston Technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.clarkstontechnology.com",
    title: "Clarkston Technology - Fractional CTO & Engineering Leadership",
    description: "Expert fractional CTO services, engineering team leadership, and software development consulting.",
    siteName: "Clarkston Technology",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarkston Technology - Fractional CTO & Engineering Leadership",
    description: "Expert fractional CTO services, engineering team leadership, and software development consulting.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
