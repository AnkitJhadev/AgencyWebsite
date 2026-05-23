"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "./site-data";

const SCROLL_THRESHOLD = 12; // px before backdrop kicks in

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navLinks[0]?.href || "#");
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Throttle scroll via requestAnimationFrame — fires at most once per frame
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > SCROLL_THRESHOLD);
        rafRef.current = null;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const updateActive = () => setActive(window.location.hash || navLinks[0]?.href || "#");
    updateActive();
    window.addEventListener("hashchange", updateActive);
    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  const handleLinkClick = (href: string) => {
    setActive(href);
    setOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur-xl shadow-[0_18px_60px_-40px_rgba(0,0,0,0.55)]"
          : "bg-black/20 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
          aria-label="Ignitly home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white shadow-[0_8px_30px_-15px_rgba(16,185,129,0.8)]">
            I
          </span>
          <span>Ignitly</span>
        </motion.a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`relative inline-flex cursor-pointer items-center rounded-full border-2 px-4 py-2 text-sm transition-all duration-200 ${
                active === link.href
                  ? "border-green-400 bg-white/5 text-white"
                  : "border-transparent text-slate-300 hover:border-green-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_18px_60px_-40px_rgba(255,255,255,0.8)] transition-colors duration-200 hover:bg-green-400 hover:text-white md:inline-flex"
          >
            Get Started
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((c) => !c)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-green-400 hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">{open ? "Close" : "Open"} navigation</span>
            <span className="flex h-5 w-5 flex-col items-center justify-center gap-1.5" aria-hidden="true">
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                className="block h-0.5 w-5 origin-center bg-current"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                className="block h-0.5 w-5 origin-center bg-current"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                className="block h-0.5 w-5 origin-center bg-current"
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-40 bg-black/95 pb-10 pt-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-400">Menu</span>

              <div className="space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-lg font-semibold text-white transition hover:border-green-400 hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
