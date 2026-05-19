"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    tagline: "Validate before you build",
    monthlyPrice: 1200,
    onetimePrice: 2500,
    accent: "from-slate-400 to-slate-600",
    glowColor: "rgba(148,163,184,0.25)",
    features: [
      "2-week validation sprint",
      "Market & competitor research",
      "Audience definition workshop",
      "Landing page with CTA",
      "User interview framework",
      "Go / no-go decision report",
    ],
    cta: "Start validating",
  },
  {
    name: "Launch",
    tagline: "Idea to shipped product",
    monthlyPrice: 3800,
    onetimePrice: 8500,
    popular: true,
    accent: "from-green-400 to-emerald-500",
    glowColor: "rgba(16,185,129,0.55)",
    features: [
      "Everything in Starter",
      "Full product UX & UI design",
      "MVP development (6 weeks)",
      "Brand system & style guide",
      "Analytics & event tracking",
      "Launch strategy & checklist",
      "30-day post-launch support",
    ],
    cta: "Launch your product",
  },
  {
    name: "Scale",
    tagline: "Growth after launch",
    monthlyPrice: 6500,
    onetimePrice: 15000,
    accent: "from-teal-400 to-cyan-500",
    glowColor: "rgba(20,184,166,0.3)",
    features: [
      "Everything in Launch",
      "Growth loop design",
      "Ongoing iteration sprints",
      "A/B testing & optimisation",
      "Monthly strategy sessions",
      "Dedicated Slack channel",
      "Priority 24/7 support",
    ],
    cta: "Start scaling",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 shrink-0 text-green-400"
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity={0.25} strokeWidth={1.5} />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PricingSection() {
  const [billing, setBilling] = useState<"onetime" | "monthly">("onetime");

  return (
    <section id="pricing" className="relative overflow-hidden bg-black px-6 py-28 text-white">
      {/* background decoration */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#16a34a]/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-[28rem] w-[28rem] rounded-full bg-[#0f766e]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
          >
            Pricing
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            <span
              className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
            >
              Simple pricing,
            </span>
            <span className="relative block">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
              >
                serious outcomes.
              </span>
              <span
                className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                serious outcomes.
              </span>
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="mt-6 text-lg leading-8 text-slate-400"
          >
            No hourly billing, no scope creep surprises. Pick the engagement
            that matches where you are right now.
          </motion.p>
        </div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <span className={`text-sm font-medium transition ${billing === "onetime" ? "text-white" : "text-slate-500"}`}>
            One-time project
          </span>

          <button
            type="button"
            onClick={() => setBilling(b => b === "onetime" ? "monthly" : "onetime")}
            aria-label="Toggle billing period"
            className="relative h-7 w-14 rounded-full border border-white/10 bg-white/5 transition focus:outline-none focus:ring-2 focus:ring-green-400/50"
          >
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 500, damping: 38 }}
              className="absolute top-1 h-5 w-5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]"
              style={{ left: billing === "onetime" ? "4px" : "calc(100% - 24px)" }}
            />
          </button>

          <span className={`flex items-center gap-2 text-sm font-medium transition ${billing === "monthly" ? "text-white" : "text-slate-500"}`}>
            Monthly retainer
            <span className="rounded-full border border-green-400/25 bg-green-400/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-green-300">
              Save 20%
            </span>
          </span>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -10, rotateX: 3, rotateY: index === 0 ? -3 : index === 2 ? 3 : 0 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative flex flex-col overflow-hidden rounded-[2rem] border backdrop-blur-xl ${
                plan.popular
                  ? "border-green-400/40 bg-slate-950/90 shadow-[0_55px_130px_-55px_rgba(16,185,129,0.65)]"
                  : "border-white/10 bg-slate-950/80 shadow-[0_35px_100px_-55px_rgba(16,185,129,0.3)]"
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Top accent bar */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.accent}`} />

              {/* Shimmer sweep */}
              <motion.div
                animate={{ x: ["-40%", "140%"] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  delay: index * 0.6,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              />

              {/* Glow blob */}
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl"
                style={{ background: plan.glowColor, opacity: 0.4 }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.07),_transparent_50%)]" />

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute right-6 top-5 flex items-center gap-1.5">
                  <motion.span
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.9)]"
                  />
                  <span className="rounded-full border border-green-400/30 bg-green-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-green-300">
                    Most popular
                  </span>
                </div>
              )}

              <div className="relative flex flex-1 flex-col p-8">
                {/* Plan name & tagline */}
                <div>
                  <span className={`inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400`}>
                    {plan.name}
                  </span>
                  <p className="mt-3 text-sm text-slate-400">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mt-8">
                  <div className="flex items-end gap-2">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={billing + plan.name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="text-5xl font-bold text-white"
                      >
                        ${(billing === "onetime" ? plan.onetimePrice : plan.monthlyPrice).toLocaleString()}
                      </motion.span>
                    </AnimatePresence>
                    <span className="mb-1.5 text-sm text-slate-500">
                      {billing === "onetime" ? "/ project" : "/ month"}
                    </span>
                  </div>
                  {billing === "monthly" && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-1.5 text-xs text-slate-500"
                    >
                      Billed monthly · cancel anytime
                    </motion.p>
                  )}
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Features */}
                <ul className="flex flex-1 flex-col gap-3.5">
                  {plan.features.map((feat, fi) => (
                    <motion.li
                      key={feat}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + fi * 0.05, duration: 0.4 }}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CheckIcon />
                      {feat}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  whileHover={{ y: -2, scale: 1.015 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-10 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-green-400 to-emerald-500 text-slate-950 shadow-[0_18px_60px_-40px_rgba(16,185,129,0.9)]"
                      : "border border-white/15 bg-white/5 text-white hover:border-green-400/50 hover:bg-white/10"
                  }`}
                >
                  {plan.cta}
                  <svg viewBox="0 0 16 16" fill="none" className="ml-2 h-4 w-4" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 md:p-8"
        >
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-300">
                Not sure which plan fits?
              </p>
              <p className="mt-2 text-slate-400">
                Every engagement starts with a free 30-minute founder call. We
                scope the right level of work together — no commitment required.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:border-green-400/50 hover:bg-white/10"
            >
              Book a free call
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
