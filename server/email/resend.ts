import "server-only";
import { Resend } from "resend";
import { serverConfig } from "@/server/config";

export interface EmailMessage {
  to: string;
  from: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
}

export class EmailConfigError extends Error {}

/** The only module that knows about the email provider. */
export async function sendEmail(message: EmailMessage): Promise<void> {
  const apiKey = serverConfig.resendApiKey;

  if (!apiKey) {
    if (serverConfig.isProduction) throw new EmailConfigError("RESEND_API_KEY is not set");
    console.log("[email — dev mode, no RESEND_API_KEY]", message.subject, "\n", message.text);
    return;
  }

  const { error } = await new Resend(apiKey).emails.send(message);
  if (error) throw new Error(`Resend error: ${error.name} — ${error.message}`);
}
