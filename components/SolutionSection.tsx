"use client";

import { motion } from "framer-motion";

const solutionSteps = [
  {
    title: "Validate",
    detail: "Test the market, sharpen the audience, and prove the offer before heavy build cost.",
  },
  {
    title: "Shape",
    detail: "Turn the idea into a focused launch scope, product story, and user journey.",
  },
  {
    title: "Build",
    detail: "Design and develop the product with one aligned system across brand, UX, and code.",
  },
  {
    title: "Grow",
    detail: "Connect launch, analytics, feedback, and acquisition into a repeatable growth loop.",
  },
];

export function SolutionSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#16a34a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-16 left-0 h-[26rem] w-[26rem] rounded-full bg-[#0f766e]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
          >
            How we solve it
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-3xl text-4xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            <span
              className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
            >
              We turn founder chaos
            </span>
            <span className="relative block">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
              >
                into a launch system.
              </span>
              <span
                className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
              >
                into a launch system.
              </span>
            </span>
          </motion.h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We bring validation, product design, development, launch, and growth
            into one clear operating rhythm so founders can move with evidence
            instead of guesswork.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, rotateX: 12, y: 34 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_55px_130px_-55px_rgba(16,185,129,0.55)] backdrop-blur-xl"
          style={{ perspective: 1200 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.18),_transparent_42%)]" />
          <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-green-300/50 to-transparent" />

          <div className="relative grid gap-5 sm:grid-cols-2">
            {solutionSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 26, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
                className="relative min-h-[230px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_28px_80px_-44px_rgba(16,185,129,0.8)] backdrop-blur"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300" />
                <motion.div
                  animate={{ x: ["-40%", "120%"] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.42,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent"
                />

                <div className="relative flex h-full flex-col justify-between">
                  <div>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10 text-sm font-bold text-green-300 shadow-[0_18px_45px_-22px_rgba(74,222,128,0.9)]">
                      0{index + 1}
                    </span>
                    <h3
                      className="mt-5 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-3xl font-semibold text-transparent"
                      style={{ WebkitTextStroke: "1px rgba(255,255,255,0.12)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-5 leading-7 text-slate-300">{step.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="relative mt-6 rounded-[1.25rem] border border-green-400/20 bg-green-400/10 p-5">
            <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-center">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-green-300">
                Outcome
              </div>
              <p className="leading-7 text-slate-200">
                A founder knows what to build, why it matters, how it launches,
                and what has to improve next.
              </p>
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="h-12 w-12 rounded-full bg-green-400 shadow-[0_0_45px_rgba(74,222,128,0.75)]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
