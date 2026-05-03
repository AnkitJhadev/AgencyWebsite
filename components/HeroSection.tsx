"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#16a34a]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-[28rem] w-[28rem] rounded-full bg-[#0f766e]/10 blur-3xl" />
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-5xl flex-col justify-center gap-12 px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300">
            Product partner for founders
          </p>
          <h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-[5rem]">
            <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}>
              We help founders
            </span>
            <span className="relative block">
              <span className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}>
                turn ideas into real products.
              </span>
              <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                turn ideas into real products.
              </span>
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            From early validation to launch-ready design and growth motion, we build product experiences that move markets.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-40px_rgba(16,185,129,0.75)] transition"
            >
              Start Your Product
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-green-400"
            >
              View work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
