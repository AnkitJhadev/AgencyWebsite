"use client";

import { motion } from "framer-motion";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-16">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-green-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 text-center shadow-[0_60px_150px_-60px_rgba(16,185,129,0.45)] md:p-16">
        {/* Glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-400/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.08),_transparent_65%)]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative"
        >
          {/* Live indicator */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-green-300">
              Now accepting new founders
            </span>
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Your idea deserves to ship.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-400">
            Most founders wait too long. Book a free 30-minute call — we&apos;ll
            map out exactly what to build, in what order, and how fast you can
            launch.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-30px_rgba(16,185,129,0.9)] transition"
            >
              Book a free call
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                />
              </svg>
            </motion.a>
            <a
              href="mailto:hello@ignitly.com"
              className="text-sm font-semibold text-slate-400 transition hover:text-white"
            >
              or email us directly →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
