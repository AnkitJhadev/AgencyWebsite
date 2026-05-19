"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to ship a product?",
    a: "Most MVPs are live within 6–8 weeks. A validation sprint takes 2 weeks. Larger builds with full brand, design, and development typically run 10–12 weeks. We scope timelines honestly at the start — no surprise slippage.",
  },
  {
    q: "Do you work with early-stage founders or only funded startups?",
    a: "Both. A significant portion of our work is with pre-seed founders who need to validate fast and conserve runway. We've also worked with Series A teams who need to move faster than their in-house capacity allows.",
  },
  {
    q: "What does the engagement actually look like week to week?",
    a: "You get a dedicated Slack channel, weekly loom updates, and a shared project board. No chasing for status. We run in two-week sprints with a review and demo at the end of each one so you always know what's shipping next.",
  },
  {
    q: "Can I just hire you for design without development?",
    a: "Yes. We can hand off production-ready Figma files, a full design system, or a brand kit — whatever your team needs to build from. We're flexible on scope and will clearly define deliverables before anything starts.",
  },
  {
    q: "What if I'm not happy with the direction mid-project?",
    a: "We build in explicit review checkpoints after every sprint. If a direction isn't working, we course-correct before it becomes expensive. No work gets buried in a backlog — you see and approve each stage before we move forward.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — the Scale plan covers ongoing iteration, growth loops, and monthly strategy. On other plans, we include 30 days of post-launch support. After that, a retainer or à-la-carte sprints are available depending on what you need.",
  },
  {
    q: "How do payments work?",
    a: "One-time projects are split 50% upfront and 50% on completion. Monthly retainers are billed at the start of each month with a 30-day cancellation policy. We accept bank transfer, Stripe, and Wise.",
  },
  {
    q: "Will my product be built on a template or from scratch?",
    a: "From scratch — designed and built specifically for your product, audience, and goals. We don't reskin templates. Every codebase is clean, documented, and fully handed over to you at the end.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-24 h-96 w-96 rounded-full bg-[#16a34a]/12 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-24 h-80 w-80 rounded-full bg-[#0f766e]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
            >
              FAQ
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
                Questions
              </span>
              <span className="relative block">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
                >
                  answered.
                </span>
                <span
                  className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                >
                  answered.
                </span>
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 text-lg leading-8 text-slate-400"
            >
              Everything founders usually ask before we start working together.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.18 }}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-green-400/50 hover:bg-white/10"
            >
              Still have questions? Ask us
              <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </motion.a>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="flex flex-col divide-y divide-white/8"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.q} className="group">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <motion.span
                      animate={{ color: isOpen ? "rgb(134 239 172)" : "rgb(255 255 255)" }}
                      transition={{ duration: 0.2 }}
                      className="text-base font-semibold leading-7 sm:text-lg"
                    >
                      {faq.q}
                    </motion.span>

                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.05)" }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10"
                      style={{ borderColor: isOpen ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.1)" }}
                    >
                      <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" stroke={isOpen ? "rgb(134 239 172)" : "white"} strokeWidth={2}>
                        <path strokeLinecap="round" d="M8 3v10M3 8h10" />
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-12">
                          <motion.div
                            initial={{ y: -8 }}
                            animate={{ y: 0 }}
                            exit={{ y: -8 }}
                            transition={{ duration: 0.28 }}
                            className="rounded-xl border border-white/8 bg-white/[0.04] p-5 text-sm leading-7 text-slate-300"
                          >
                            <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-green-400/60 to-emerald-600/60" />
                            {faq.a}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
