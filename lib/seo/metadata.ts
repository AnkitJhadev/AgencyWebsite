import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

const siteUrl = siteConfig.url;

// ─── Page metadata ─────────────────────────────────────────────────────────────
export const siteMetadata: Metadata = {
  title: {
    default: "Ignitly — Mobile Apps, AI Workflows, Chatbots & Voice Agents for Founders",
    template: "%s | Ignitly",
  },
  description:
    "Ignitly builds mobile apps, AI workflows, chatbots, and voice agents for founders. Validate ideas, design products, and ship fast. 120+ products launched worldwide.",
  keywords: [
    "mobile app development for startups",
    "AI workflow automation agency",
    "chatbot development for founders",
    "voice agent development",
    "MVP development agency",
    "product design for founders",
    "startup product partner",
    "AI agents for business",
    "founder product studio",
    "app development agency",
    "Next.js development agency",
    "React Native app development",
  ],
  authors: [{ name: "Ignitly", url: siteUrl }],
  creator: "Ignitly",
  publisher: "Ignitly",
  category: "Technology",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ignitly",
    locale: "en_US",
    title: "Ignitly — Mobile Apps, AI Workflows, Chatbots & Voice Agents for Founders",
    description:
      "Ignitly builds mobile apps, AI workflows, chatbots, and voice agents for founders. Validate ideas, design products, and ship fast. 120+ products launched.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Ignitly — Apps, AI Workflows, Chatbots & Voice Agents for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ignitly",
    creator: "@ignitly",
    title: "Ignitly — Mobile Apps, AI Workflows, Chatbots & Voice Agents",
    description:
      "Ignitly builds mobile apps, AI workflows, chatbots, and voice agents for founders. 120+ products launched.",
    images: ["/opengraph-image"],
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
};

