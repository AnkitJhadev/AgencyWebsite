import "server-only";
import { siteConfig } from "@/lib/config/site";
import type { ContactInput } from "@/lib/schemas/contact";
import { escapeHtml, singleLine } from "@/server/email/html";

interface BuiltEmail {
  subject: string;
  html: string;
  text: string;
}

/** Internal email: tells the team about a new enquiry. */
export function buildNotificationEmail({ name, email, message, plan }: ContactInput): BuiltEmail {
  const subject = `New message from ${singleLine(name)}${plan ? ` — interested in ${plan} plan` : ""}`;

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    ${plan ? `<p><strong>Plan of interest:</strong> ${escapeHtml(plan)}</p>` : ""}
    <hr/>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    plan ? `Plan of interest: ${plan}` : null,
    "",
    message,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject, html, text };
}

/** Auto-reply: confirms receipt to the visitor. */
export function buildConfirmationEmail({ name, message }: ContactInput): BuiltEmail {
  const firstName = singleLine(name).split(" ")[0];
  const { bookingUrl } = siteConfig;

  const html = `
    <p>Hi ${escapeHtml(firstName)},</p>
    <p>Thanks for reaching out to ${siteConfig.name}. We've received your message and will reply within 24 hours.</p>
    ${
      bookingUrl
        ? `<p>If you'd rather talk it through, <a href="${escapeHtml(bookingUrl)}">book a free call</a>.</p>`
        : ""
    }
    <p style="color:#666">Your message:</p>
    <blockquote style="margin:0;padding-left:12px;border-left:3px solid #ddd;color:#444">
      ${escapeHtml(message).replace(/\n/g, "<br/>")}
    </blockquote>
    <p>— The ${siteConfig.name} team</p>
  `;

  const text = [
    `Hi ${firstName},`,
    "",
    `Thanks for reaching out to ${siteConfig.name}. We've received your message and will reply within 24 hours.`,
    bookingUrl ? `\nPrefer a call? Book one here: ${bookingUrl}` : null,
    "",
    "Your message:",
    message,
    "",
    `— The ${siteConfig.name} team`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  return { subject: `We got your message — ${siteConfig.name}`, html, text };
}
