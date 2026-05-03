"use client";

import { motion } from "framer-motion";

const contactSteps = [
  "Share the idea, market, and stage you are at.",
  "We map the riskiest assumptions and fastest validation path.",
  "You leave with a clear product, launch, and growth direction.",
];

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#16a34a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#0f766e]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, rotateX: 12, y: 34 }}
        whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_60px_150px_-60px_rgba(16,185,129,0.55)] backdrop-blur-xl md:p-10 lg:grid-cols-[1fr_0.75fr] lg:p-12"
        style={{ perspective: 1200 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.16),_transparent_34%)]" />
        <motion.div
          animate={{ x: ["-30%", "115%"] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/8 to-transparent"
        />

        <div className="relative">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
          >
            Ready?
          </motion.p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            <span
              className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
            >
              Let&apos;s turn your idea
            </span>
            <span className="relative block">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
              >
                into a product.
              </span>
              <span
                className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                into a product.
              </span>
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Book a founder-level consultation. We will pressure-test the
            opportunity, identify the cleanest launch path, and show exactly how
            we would move from idea to traction.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="mailto:hello@companyapp.com"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-40px_rgba(16,185,129,0.75)] transition"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ y: -2 }}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-green-400"
            >
              View work
            </motion.a>
          </div>
        </div>

        <div className="relative grid content-center gap-4">
          {contactSteps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6, rotateX: 3 }}
              transition={{ delay: index * 0.1, duration: 0.55, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_28px_90px_-55px_rgba(16,185,129,0.75)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-green-300 to-emerald-600" />
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 text-sm font-bold text-green-300">
                  0{index + 1}
                </span>
                <p className="leading-7 text-slate-200">{step}</p>
              </div>
            </motion.div>
          ))}

          <div className="rounded-[1.25rem] border border-green-400/20 bg-green-400/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-300">
              Response
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">hello@companyapp.com</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
