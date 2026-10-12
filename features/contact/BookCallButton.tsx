import { siteConfig } from "@/lib/config/site";

/** "Book a call" link. Renders nothing until NEXT_PUBLIC_BOOKING_URL is set. */
export function BookCallButton({ className = "" }: { className?: string }) {
  if (!siteConfig.bookingUrl) return null;

  return (
    <a
      href={siteConfig.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-green-400/40 px-6 py-3 text-sm font-semibold text-green-300 transition hover:border-green-400 hover:bg-green-400/10 focus-visible:ring-2 focus-visible:ring-green-400/50 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
      Book a free call
    </a>
  );
}
