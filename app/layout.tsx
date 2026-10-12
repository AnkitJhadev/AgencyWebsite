import { Geist } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, organizationSchema, servicesSchema, webSiteSchema } from "@/lib/seo/json-ld";
import "./globals.css";

import { siteMetadata } from "@/lib/seo/metadata";


export const metadata = siteMetadata;

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full antialiased ${geist.className}`}>
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={webSiteSchema} />
        <JsonLd data={servicesSchema} />
        <JsonLd data={faqSchema} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
