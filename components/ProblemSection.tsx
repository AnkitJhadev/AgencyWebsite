"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { founderProblems } from "./site-data";

/** Diagram positions for the 4 orbiting cards */
const DIAGRAM_POSITIONS = [
  "left-6 top-8",
  "right-6 top-16",
  "bottom-14 left-8",
  "bottom-8 right-8",
];

export function ProblemSection() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(diagramRef, { once: false, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#16a34a]/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-48 h-[28rem] w-[28rem] rounded-full bg-[#0f766e]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
          >
            Founder problems
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl font-semibold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
          >
            <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}>
              The real founder problem
            </span>
            <span className="relative block">
              <span aria-hidden="true" className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}>
                is not the idea.
              </span>
              <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                is not the idea.
              </span>
            </span>
          </motion.h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            It is the pileup between validation, scope, execution, and traction.
            We make those blockers impossible to miss before they burn months of
            time and budget.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

          {/* Visual diagram — hidden on mobile to prevent overlapping cards */}
          <motion.div
            ref={diagramRef}
            initial={{ opacity: 0, rotateX: 12, y: 28 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="relative hidden min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_50px_120px_-50px_rgba(16,185,129,0.55)] backdrop-blur-xl lg:block"
            style={{ perspective: 1200 }}
            aria-hidden="true"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.16),_transparent_42%)]" />

            {/* Rotating rings — only animate when in viewport */}
            <motion.div
              animate={isInView ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-400/15"
            />
            <motion.div
              animate={isInView ? { rotate: -360 } : { rotate: 0 }}
              transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
            />

            {/* Center badge */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.5rem] border border-green-400/30 bg-green-400/10 text-center shadow-[0_30px_80px_-35px_rgba(16,185,129,0.8)]">
              <motion.div
                animate={isInView ? { y: [0, -8, 0] } : {}}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-green-300">Founder</p>
                <p className="mt-2 text-lg font-semibold text-white">stuck in the middle</p>
              </motion.div>
            </div>

            {/* Orbiting problem cards */}
            {founderProblems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.86, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                animate={isInView ? { y: [0, index % 2 === 0 ? -8 : 8, 0] } : {}}
                transition={{
                  opacity: { delay: index * 0.08, duration: 0.5 },
                  scale: { delay: index * 0.08, duration: 0.5 },
                  y: { duration: 3.4, repeat: Infinity, delay: index * 0.25, ease: "easeInOut" },
                }}
                className={`absolute ${DIAGRAM_POSITIONS[index]} max-w-[190px] rounded-lg border border-white/10 bg-black/50 p-4 shadow-[0_24px_70px_-38px_rgba(16,185,129,0.7)] backdrop-blur-xl`}
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-green-300">
                  {item.tag}
                </span>
                <p className="mt-2 text-base font-semibold text-white">{item.title}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Problem cards — always shown (replaces diagram on mobile) */}
          <div className="grid gap-4">
            {founderProblems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-5 shadow-[0_25px_70px_-48px_rgba(16,185,129,0.65)] transition hover:-translate-y-1 hover:border-green-400/40 hover:bg-white/[0.07]"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-green-300 to-emerald-600" />
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-green-300">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-slate-300">{item.detail}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
