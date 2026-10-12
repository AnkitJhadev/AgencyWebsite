import { faqs } from "@/content/faqs";
import { socialProof } from "@/content/testimonials";
import { siteConfig } from "@/lib/config/site";

const siteUrl = siteConfig.url;

// ─── JSON-LD: Organisation / ProfessionalService ───────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "Ignitly",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  image: `${siteUrl}/opengraph-image`,
  description:
    "Ignitly builds mobile apps, AI workflows, chatbots, and voice agents for founders. We validate ideas, design products, ship MVPs, and drive growth.",
  email: siteConfig.email,
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
    siteConfig.social.twitter,
    siteConfig.social.linkedin,
  ],
};

// ─── JSON-LD: WebSite (enables sitelinks search box) ──────────────────────────
export const webSiteSchema = {
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
export const servicesSchema = {
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
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

