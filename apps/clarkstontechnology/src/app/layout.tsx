import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.clarkstontechnology.com'),
  title: {
    default: "Clarkston Technology Group - Fractional CTO & Engineering Leadership",
    template: "%s | Clarkston Technology Group",
  },
  description: "We deliver high value software solutions for your business needs. Expert fractional CTO services, engineering team leadership, and software development consulting.",
  keywords: [
    "fractional CTO",
    "engineering leadership",
    "software development",
    "technology consulting",
    "team management",
    "startup advisor",
    "Atlanta technology consulting",
    "IT services",
  ],
  authors: [{ name: "John Lee" }],
  creator: "Clarkston Technology Group, LLC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.clarkstontechnology.com",
    title: "Clarkston Technology Group - Fractional CTO & Engineering Leadership",
    description: "We deliver high value software solutions for your business needs. Expert fractional CTO services and technology consulting.",
    siteName: "Clarkston Technology Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clarkston Technology Group - Fractional CTO & Engineering Leadership",
    description: "We deliver high value software solutions for your business needs. Expert fractional CTO services and technology consulting.",
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
