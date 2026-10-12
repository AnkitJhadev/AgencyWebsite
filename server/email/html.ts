import "server-only";

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Collapse whitespace so user input can never break out of an email header. */
export const singleLine = (value: string) => value.replace(/\s+/g, " ").trim();
