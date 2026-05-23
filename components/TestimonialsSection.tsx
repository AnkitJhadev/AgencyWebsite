"use client";

import { motion } from "framer-motion";
import { socialProof } from "./site-data";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-green-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
            Testimonials
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Founders who&apos;ve shipped with us
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {socialProof.map((item, i) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-green-400/30 hover:bg-white/[0.07]"
            >
              {/* Quote mark */}
              <span
                aria-hidden="true"
                className="mb-4 block text-5xl font-serif leading-none text-green-400/30 group-hover:text-green-400/50 transition-colors duration-300"
              >
                &ldquo;
              </span>

              <p className="flex-1 text-sm leading-7 text-slate-300">
                {item.quote}
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                {/* Avatar initials */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green-400/30 to-emerald-500/20 text-xs font-bold text-green-300">
                  {item.author
                    .split(",")[0]
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.author.split(",")[0]}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
