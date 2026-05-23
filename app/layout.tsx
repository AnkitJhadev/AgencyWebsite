import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { faqs } from "@/components/site-data";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const siteUrl = "https://ignitly.com";

export const metadata: Metadata = {
  title: {
    default: "Ignitly — We Ignite Products Founders Love",
    template: "%s | Ignitly",
  },
  description:
    "Ignitly partners with founders to validate ideas, design intuitive products, and ship fast. Apps, AI workflows, chatbots & voice agents. 120+ products launched.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Ignitly",
    title: "Ignitly — We Ignite Products Founders Love",
    description:
      "Ignitly partners with founders to validate ideas, design intuitive products, and ship fast. 120+ products launched.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ignitly — Product Design & Development for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ignitly — We Ignite Products Founders Love",
    description:
      "Ignitly partners with founders to validate ideas, design intuitive products, and ship fast.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Ignitly",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    "Product design and development partner for founders. We ignite ideas into apps, AI workflows, chatbots, and voice agents.",
  email: "hello@ignitly.com",
  sameAs: [],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full antialiased ${geist.className}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
