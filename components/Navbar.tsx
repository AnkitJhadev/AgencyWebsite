"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks } from "./site-data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(navLinks[0]?.href || "#");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <motion.a
          href="#"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white shadow-[0_8px_30px_-15px_rgba(16,185,129,0.8)]">
            C
          </span>
          <span className="text-white">CompanyApp</span>
        </motion.a>

        <div className="hidden items-center gap-3 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <motion.div key={link.href} className="relative">
              <motion.a
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                whileHover={{ y: -2 }}
                className={`relative inline-flex cursor-pointer items-center rounded-full border-2 border-transparent px-4 py-2 text-sm transition-all duration-200 ${
                  active === link.href
                    ? "border-green-400 text-white bg-white/5"
                    : "hover:border-green-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </motion.a>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href="#contact"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-[0_18px_60px_-40px_rgba(255,255,255,0.8)] transition-colors duration-200 hover:bg-green-400 hover:text-white md:inline-flex"
          >
            Get Started
          </motion.a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((current) => !current)}
            className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-green-400 hover:bg-white/10 md:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 45 : 0, y: open ? 1 : 0 }}
              className="relative inline-flex h-5 w-5 origin-center"
            >
              <span className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-current" />
              <span className="absolute left-0 top-full block h-0.5 w-5 -translate-y-1/2 bg-current" />
            </motion.span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="absolute inset-x-0 top-full z-40 bg-black/95 pb-10 pt-6 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-400">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-green-400 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    whileHover={{ x: 6 }}
                    className="block rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-lg font-semibold text-white transition hover:border-green-400 hover:bg-white/10"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center justify-center rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-300"
              >
                Get Started
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
