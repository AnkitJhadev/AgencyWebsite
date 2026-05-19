import type { Metadata } from "next";
import { Geist } from "next/font/google";
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
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${geist.className}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
