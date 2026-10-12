import "server-only";
import { eq } from "drizzle-orm";
import { getDb } from "@/server/db/client";
import { contactSubmissions } from "@/server/db/schema";
import type { ContactInput } from "@/lib/schemas/contact";

/** Stores a submission. Returns its id, or null when no database is configured. */
export async function saveSubmission(data: ContactInput, ip: string): Promise<string | null> {
  const db = getDb();
  if (!db) return null;

  const [row] = await db
    .insert(contactSubmissions)
    .values({ name: data.name, email: data.email, message: data.message, plan: data.plan, ip })
    .returning({ id: contactSubmissions.id });
  return row.id;
}

export async function markEmailStatus(
  id: string,
  status: { notificationSent?: boolean; confirmationSent?: boolean },
): Promise<void> {
  const db = getDb();
  if (!db) return;
  await db.update(contactSubmissions).set(status).where(eq(contactSubmissions.id, id));
}
