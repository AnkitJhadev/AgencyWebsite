import "server-only";
import type { NextRequest } from "next/server";
import { contactSchema, getContactFieldErrors } from "@/lib/schemas/contact";
import { isRateLimited } from "@/server/http/rate-limit";
import { fail, ok } from "@/server/http/responses";
import { submitContact } from "./contact.service";

const MAX_BODY_BYTES = 10_000;

/** HTTP layer for POST /api/contact: guards, parsing, validation, response mapping. */
export async function handleContactSubmission(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return fail(429, "Too many requests. Please try again in a few minutes.");
  }

  let body: unknown;
  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) return fail(413, "Request too large.");
    body = JSON.parse(raw);
  } catch {
    return fail(400, "Invalid request body.");
  }

  const fieldErrors = getContactFieldErrors(body);
  if (fieldErrors) return fail(400, "Please check the form and try again.", fieldErrors);

  const data = contactSchema.parse(body);

  // Honeypot filled in: pretend success so bots learn nothing.
  if (data.website) return ok();

  try {
    await submitContact(data, ip);
    return ok();
  } catch (err) {
    console.error("[contact] failed to send", { name: data.name, email: data.email }, err);
    return fail(500, "Failed to send message. Please try again.");
  }
}
