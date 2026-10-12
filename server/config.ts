import "server-only";
import { siteConfig } from "@/lib/config/site";

/** Server-only configuration: environment variables and secrets. */
export const serverConfig = {
  isProduction: process.env.NODE_ENV === "production",
  databaseUrl: process.env.DATABASE_URL,
  resendApiKey: process.env.RESEND_API_KEY,
  contactToEmail: process.env.CONTACT_TO_EMAIL ?? siteConfig.email,
  contactFromEmail: process.env.CONTACT_FROM_EMAIL ?? `${siteConfig.name} <noreply@ignitly.com>`,
} as const;
