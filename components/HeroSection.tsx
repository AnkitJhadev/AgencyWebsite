"use client";

import { motion } from "framer-motion";

const mockMetrics = [
  { label: "Total Users", value: "2,847", change: "+18%" },
  { label: "MRR", value: "$12.4k", change: "+34%" },
  { label: "Activation", value: "68%", change: "+12%" },
  { label: "Launch time", value: "6 wks", change: "On schedule" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      {/* Vignette to fade grid at edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,_transparent_30%,_black_80%)]" />

      {/* Colour blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#16a34a]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-32 h-[28rem] w-[28rem] rounded-full bg-[#0f766e]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300">
              Product partner for founders
            </p>
            <h1 className="mt-8 text-5xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-[5rem]">
              <span
                className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
              >
                We help founders
              </span>
              <span className="relative block">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
                >
                  turn ideas into real products.
                </span>
                <span
                  className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                >
                  turn ideas into real products.
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
              From early validation to launch-ready design and growth motion, we
              build product experiences that move markets.
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
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-green-400"
              >
                See what we build
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: floating product card (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            {/* Main metrics card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-6 shadow-[0_40px_100px_-50px_rgba(16,185,129,0.45)] backdrop-blur-xl"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.1),_transparent_55%)]" />

              {/* Card header */}
              <div className="relative mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                  <span className="font-mono text-xs font-semibold text-green-300">
                    Product live · updated now
                  </span>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-400">
                  Ignitly Dashboard
                </span>
              </div>

              {/* Metrics grid */}
              <div className="relative grid grid-cols-2 gap-3">
                {mockMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/10 bg-white/[0.05] p-4"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      {m.label}
                    </p>
                    <p className="mt-2 text-xl font-bold text-white">{m.value}</p>
                    <p className="mt-1 text-xs font-semibold text-green-400">
                      {m.change}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating launch-time badge (bottom-left) */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute -bottom-5 -left-6 overflow-hidden rounded-xl border border-white/10 bg-slate-950/95 p-4 shadow-xl backdrop-blur-xl"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                Avg. launch time
              </p>
              <p className="mt-1 text-2xl font-bold text-white">6 weeks</p>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-green-400 to-emerald-500"
                />
              </div>
            </motion.div>

            {/* Floating "just launched" badge (top-right) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.2,
              }}
              className="absolute -right-6 -top-4 flex items-center gap-2.5 overflow-hidden rounded-xl border border-green-400/20 bg-slate-950/90 px-4 py-3 backdrop-blur-xl"
            >
              <span className="text-xl">🚀</span>
              <div>
                <p className="text-xs font-bold text-white">Just launched</p>
                <p className="text-[10px] text-slate-400">
                  Gym Buds · 5K+ downloads
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
