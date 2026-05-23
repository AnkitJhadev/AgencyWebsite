import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { faqs, socialProof } from "@/components/site-data";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const siteUrl = "https://ignitly.com";

// ─── Page metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
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

// ─── JSON-LD: Organisation / ProfessionalService ───────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Ignitly",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  image: `${siteUrl}/og-image.png`,
  description:
    "Ignitly builds mobile apps, AI workflows, chatbots, and voice agents for founders. We validate ideas, design products, ship MVPs, and drive growth.",
  email: "hello@ignitly.com",
  foundingDate: "2024",
  areaServed: "Worldwide",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ignitly Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobile & Web App Development",
          description:
            "Production-ready iOS, Android, and web apps built from scratch using React Native and Next.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Workflow Automation",
          description:
            "Custom AI-powered workflow automation connecting tools, data, and AI models into one seamless flow.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Chatbot Development",
          description:
            "Custom chatbots trained on your product knowledge for support, lead qualification, and user onboarding.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Voice Agent Development",
          description:
            "Conversational voice AI that handles calls, bookings, and customer queries in real-time.",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: String(socialProof.length),
  },
  review: socialProof.map((r) => ({
    "@type": "Review",
    reviewBody: r.quote,
    author: {
      "@type": "Person",
      name: r.author.split(",")[0].trim(),
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  })),
  sameAs: [
    "https://twitter.com/ignitly",
    "https://linkedin.com/company/ignitly",
  ],
};

// ─── JSON-LD: WebSite (enables sitelinks search box) ──────────────────────────
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ignitly",
  url: siteUrl,
  description:
    "Mobile apps, AI workflows, chatbots & voice agents for founders.",
  inLanguage: "en-US",
  copyrightYear: new Date().getFullYear(),
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── JSON-LD: Services list ────────────────────────────────────────────────────
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ignitly Services",
  description: "Digital products and AI services for founders",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Mobile & Web App Development",
        description:
          "Production-ready mobile and web apps built from scratch for iOS, Android, and web.",
        provider: { "@type": "Organization", name: "Ignitly" },
        serviceType: "Software Development",
        areaServed: "Worldwide",
        url: `${siteUrl}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI Workflow Automation",
        description:
          "Replace repetitive manual processes with intelligent automation powered by OpenAI, LangChain, and n8n.",
        provider: { "@type": "Organization", name: "Ignitly" },
        serviceType: "Artificial Intelligence",
        areaServed: "Worldwide",
        url: `${siteUrl}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "AI Chatbot Development",
        description:
          "Custom GPT-4 powered chatbots trained on your product knowledge for 24/7 support and lead qualification.",
        provider: { "@type": "Organization", name: "Ignitly" },
        serviceType: "Chatbot Development",
        areaServed: "Worldwide",
        url: `${siteUrl}/#services`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Voice Agent Development",
        description:
          "Conversational voice AI built with ElevenLabs, Whisper, and VAPI to handle calls and bookings in real-time.",
        provider: { "@type": "Organization", name: "Ignitly" },
        serviceType: "Voice AI Development",
        areaServed: "Worldwide",
        url: `${siteUrl}/#services`,
      },
    },
  ],
};

// ─── JSON-LD: FAQ ──────────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

// ─── Layout ────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full antialiased ${geist.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
