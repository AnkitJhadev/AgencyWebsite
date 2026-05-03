"use client";

import { motion } from "framer-motion";
import { featuredWork, socialProof, stats } from "./site-data";

const workLabels = ["Brand system", "Operations dashboard", "Lead engine"];

export function WorkSection() {
  return (
    <section id="work" className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-[#16a34a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-[28rem] w-[28rem] rounded-full bg-[#0f766e]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
            >
              Featured work
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
                Work that turns ideas
              </span>
              <span className="relative block">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
                >
                  into shipped products.
                </span>
                <span
                  className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                >
                  into shipped products.
                </span>
              </span>
            </motion.h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            These are the kinds of product systems we create for founders:
            sharp positioning, practical interfaces, launch flows, and growth
            foundations that can keep improving after release.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featuredWork.map((item, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 28, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -10, rotateX: 4, rotateY: index === 1 ? 0 : index === 0 ? -4 : 4 }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
              className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_35px_100px_-55px_rgba(16,185,129,0.75)] backdrop-blur-xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/10 blur-3xl" />
              <motion.div
                animate={{ x: ["-40%", "120%"] }}
                transition={{
                  duration: 4.2,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent"
              />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-300">
                    {workLabels[index]}
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">
                    {item}
                  </h3>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-200">Launch ready</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                      Result
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-200">Better traction</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
              className="rounded-lg border border-white/10 bg-white/5 p-5 text-center"
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-green-300">
              Customer reviews
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Founders feel the difference when product and growth move together.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {socialProof.map((review, index) => (
              <motion.figure
                key={review.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8 }}
                transition={{ delay: index * 0.08, duration: 0.55, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_28px_90px_-55px_rgba(16,185,129,0.75)]"
              >
                <div className="absolute right-5 top-5 text-6xl font-black leading-none text-green-300/10">
                  &quot;
                </div>
                <blockquote className="relative leading-8 text-slate-200">
                  &quot;{review.quote}&quot;
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-5 text-sm font-semibold text-green-300">
                  {review.author}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
