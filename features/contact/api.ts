import type { ContactInput } from "@/lib/schemas/contact";

export class ContactRequestError extends Error {}

export async function sendContactForm(data: Partial<ContactInput>): Promise<void> {
  let res: Response;
  try {
    res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    throw new ContactRequestError("Network error. Check your connection and try again.");
  }

  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { error?: string } | null;
    throw new ContactRequestError(body?.error ?? "Something went wrong. Please try again.");
  }
}
