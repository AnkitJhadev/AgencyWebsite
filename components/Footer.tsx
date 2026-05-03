import { navLinks } from "./site-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black px-6 py-10 text-white">
      <div className="pointer-events-none absolute -left-20 top-0 h-56 w-56 rounded-full bg-[#16a34a]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <a href="#" className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white shadow-[0_8px_30px_-15px_rgba(16,185,129,0.8)]">
              C
            </span>
            <span className="text-lg font-semibold tracking-tight">CompanyApp</span>
          </a>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Product partners for founders who need validation, build momentum,
            launch clarity, and a real path to traction.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-green-400 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:hello@companyapp.com"
            className="text-sm font-semibold text-green-300 transition hover:text-green-200"
          >
            hello@companyapp.com
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>CompanyApp. Built for founder speed.</p>
        <p>Validate. Build. Launch. Grow.</p>
      </div>
    </footer>
  );
}
