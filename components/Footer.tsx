const serviceLinks = [
  { label: "Mobile & Web Apps", href: "#services" },
  { label: "AI Workflows", href: "#services" },
  { label: "AI Chatbots", href: "#services" },
  { label: "Voice Agents", href: "#services" },
];

const companyLinks = [
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-16 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#16a34a]/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Main grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <a
              href="/"
              className="inline-flex items-center gap-3 transition hover:opacity-80"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white shadow-[0_8px_30px_-15px_rgba(16,185,129,0.8)]">
                I
              </span>
              <span className="text-lg font-semibold tracking-tight">Ignitly</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Apps, AI workflows, chatbots &amp; voice agents — built for founders
              who need to move fast and win.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://twitter.com/ignitly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-green-400/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/ignitly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition hover:border-green-400/40 hover:text-white"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
              Get in touch
            </h3>
            <a
              href="mailto:hello@ignitly.com"
              className="block text-sm font-semibold text-green-300 transition hover:text-green-200"
            >
              hello@ignitly.com
            </a>
            <a
              href="#contact"
              className="mt-3 block text-sm text-slate-400 transition hover:text-white"
            >
              Start a project →
            </a>
            <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-green-400/20 bg-green-400/5 px-3 py-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-medium text-green-300">
                Accepting new founders
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ignitly. All rights reserved.</p>
          <p>Validate · Build · Launch · Grow</p>
        </div>
      </div>
    </footer>
  );
}
