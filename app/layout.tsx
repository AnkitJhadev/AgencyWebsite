import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { faqs } from "@/components/site-data";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const siteUrl = "https://companyapp.dev";

export const metadata: Metadata = {
  title: {
    default: "CompanyApp — We Build Products Founders Love",
    template: "%s | CompanyApp",
  },
  description:
    "CompanyApp partners with founders to validate ideas, design intuitive products, and ship fast. 120+ products launched. Let's build yours.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "CompanyApp",
    title: "CompanyApp — We Build Products Founders Love",
    description:
      "CompanyApp partners with founders to validate ideas, design intuitive products, and ship fast. 120+ products launched.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CompanyApp — Product Design & Development for Founders",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CompanyApp — We Build Products Founders Love",
    description:
      "CompanyApp partners with founders to validate ideas, design intuitive products, and ship fast.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CompanyApp",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  description:
    "Product design and development partner for founders. We validate ideas, design products, ship MVPs, and drive growth.",
  email: "hello@companyapp.com",
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
