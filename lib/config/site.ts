/** Public, non-secret site constants shared by the UI, SEO and API layers. */
export const siteConfig = {
  name: "Ignitly",
  url: "https://ignitly.com",
  email: "hello@ignitly.com",
  /** Scheduling link (Calendly, Cal.com, ...). The "Book a call" UI only renders when set. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || null,
  twitterHandle: "@ignitly",
  social: {
    twitter: "https://twitter.com/ignitly",
    linkedin: "https://linkedin.com/company/ignitly",
  },
} as const;
