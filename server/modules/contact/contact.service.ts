import "server-only";
import type { ContactInput } from "@/lib/schemas/contact";
import { serverConfig } from "@/server/config";
import { sendEmail } from "@/server/email/resend";
import { buildConfirmationEmail, buildNotificationEmail } from "./contact.email";
import { markEmailStatus, saveSubmission } from "./contact.repository";

/**
 * Handles an enquiry. A lead counts as received if it was either stored or
 * delivered to the team; only when both fail do we report an error. The visitor
 * auto-reply is best effort and never fails the request.
 */
export async function submitContact(data: ContactInput, ip: string): Promise<void> {
  let submissionId: string | null = null;
  let stored = false;
  try {
    submissionId = await saveSubmission(data, ip);
    stored = submissionId !== null;
  } catch (err) {
    console.error("[contact] failed to store submission", err);
  }

  let notified = false;
  try {
    const { subject, html, text } = buildNotificationEmail(data);
    await sendEmail({
      from: serverConfig.contactFromEmail,
      to: serverConfig.contactToEmail,
      replyTo: data.email,
      subject,
      html,
      text,
    });
    notified = true;
  } catch (err) {
    console.error("[contact] failed to send notification", err);
  }

  if (!stored && !notified) throw new Error("Submission was neither stored nor delivered");

  let confirmed = false;
  if (notified) {
    try {
      const { subject, html, text } = buildConfirmationEmail(data);
      await sendEmail({
        from: serverConfig.contactFromEmail,
        to: data.email,
        replyTo: serverConfig.contactToEmail,
        subject,
        html,
        text,
      });
      confirmed = true;
    } catch (err) {
      console.error("[contact] failed to send confirmation", err);
    }
  }

  if (submissionId) {
    await markEmailStatus(submissionId, { notificationSent: notified, confirmationSent: confirmed }).catch(
      (err) => console.error("[contact] failed to update email status", err),
    );
  }
}
