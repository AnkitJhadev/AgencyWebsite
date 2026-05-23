"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { featuredWork, stats } from "./site-data";

/** Counts up from 0 to `to` once `trigger` becomes true. */
function useCountUp(to: number, duration = 1800, trigger: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    setVal(0);
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration, trigger]);
  return val;
}

/** Parses "120+" → { num: 120, suffix: "+" } */
function parseStat(value: string) {
  const m = value.match(/^(\d+)(.*)$/);
  return { num: m ? parseInt(m[1]) : 0, suffix: m ? m[2] : "" };
}

function AnimatedStatCard({
  stat,
  index,
  trigger,
}: {
  stat: (typeof stats)[0];
  index: number;
  trigger: boolean;
}) {
  const { num, suffix } = parseStat(stat.value);
  const count = useCountUp(num, 1800, trigger);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="rounded-lg border border-white/10 bg-white/5 p-5 text-center"
    >
      <p className="text-4xl font-semibold text-white">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-300">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden bg-black px-6 py-28 text-white">
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
              <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}>
                Work that turns ideas
              </span>
              <span className="relative block">
                <span aria-hidden="true" className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}>
                  into shipped products.
                </span>
                <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                  into shipped products.
                </span>
              </span>
            </motion.h2>
          </div>

          <p className="max-w-2xl text-lg leading-8 text-slate-300 lg:justify-self-end">
            These are the kinds of product systems we create for founders: sharp positioning, practical interfaces, launch flows, and growth foundations that keep improving after release.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredWork.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -10, rotateX: 4, rotateY: index % 3 === 0 ? -3 : index % 3 === 2 ? 3 : 0 }}
              transition={{ delay: index * 0.07, duration: 0.55, ease: "easeOut" }}
              className={`relative flex min-h-[320px] flex-col overflow-hidden rounded-[1.5rem] border backdrop-blur-xl ${"storeUrl" in item
                ? "border-green-400/25 bg-slate-950/90 shadow-[0_35px_100px_-55px_rgba(16,185,129,0.9)]"
                : "border-white/10 bg-slate-950/80 shadow-[0_35px_100px_-55px_rgba(16,185,129,0.55)]"
                }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-green-300 via-emerald-400 to-teal-300" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/10 blur-3xl" />

              {/* Shimmer — only render when section is in viewport */}
              {isInView && (
                <motion.div
                  animate={{ x: ["-40%", "120%"] }}
                  transition={{ duration: 4.2, repeat: Infinity, delay: index * 0.4, ease: "easeInOut" }}
                  className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/8 to-transparent"
                />
              )}

              <div className="relative flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-green-300">
                      {item.category}
                    </span>
                    {"platform" in item && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.18 23.76a1.05 1.05 0 0 1-.59-.18 1.1 1.1 0 0 1-.44-.9V1.32a1.1 1.1 0 0 1 .44-.9 1.05 1.05 0 0 1 1.03-.1l18.1 10.68a1.1 1.1 0 0 1 0 1.9L3.62 23.68a1.05 1.05 0 0 1-.44.08z" />
                        </svg>
                        {item.platform}
                      </span>
                    )}
                    {"storeUrl" in item && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-[11px] font-semibold text-green-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                        {"platform" in item ? "Platform" : "Type"}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-slate-200">
                        {"platform" in item ? item.platform : item.category}
                      </p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">Impact</p>
                      <p className="mt-2 text-sm font-semibold text-slate-200">{item.impact}</p>
                    </div>
                  </div>

                  {"storeUrl" in item && (
                    <motion.a
                      href={item.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 rounded-xl border border-green-400/25 bg-green-400/10 px-4 py-2.5 text-sm font-semibold text-green-300 transition hover:bg-green-400/20"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.18 23.76a1.05 1.05 0 0 1-.59-.18 1.1 1.1 0 0 1-.44-.9V1.32a1.1 1.1 0 0 1 .44-.9 1.05 1.05 0 0 1 1.03-.1l18.1 10.68a1.1 1.1 0 0 1 0 1.9L3.62 23.68a1.05 1.05 0 0 1-.44.08z" />
                      </svg>
                      View on Google Play
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Animated stats */}
        <div ref={statsRef} className="mt-16 grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={stat.label}
              stat={stat}
              index={index}
              trigger={statsInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
