import { z } from "zod";
import { pricingPlans } from "@/content/pricing";

export const CONTACT_LIMITS = { name: 100, email: 254, message: 1000 } as const;

const planNames = pricingPlans.map((p) => p.name);

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(CONTACT_LIMITS.name, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .max(CONTACT_LIMITS.email, "Email is too long")
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(CONTACT_LIMITS.message, "Message is too long"),
  // Unknown or empty plans are dropped rather than rejected.
  plan: z
    .string()
    .optional()
    .transform((p) => (p && planNames.includes(p) ? p : undefined)),
  // Honeypot: real users never see or fill this field.
  website: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = "name" | "email" | "message";

/** Returns per-field error messages, or null when the data is valid. */
export function getContactFieldErrors(data: unknown): Partial<Record<ContactField, string>> | null {
  const result = contactSchema.safeParse(data);
  if (result.success) return null;
  const errors: Partial<Record<ContactField, string>> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as ContactField;
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}
