"use client";

import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useLayoutEffect, useMemo, useRef, useState } from "react";
import { featuredWork } from "./site-data";

const CARD_SPEED = 180; // px per second
const ACCENTS = [
  "from-emerald-400 to-teal-400",
  "from-sky-400 to-indigo-400",
  "from-fuchsia-400 to-pink-400",
  "from-amber-400 to-orange-400",
  "from-violet-400 to-purple-400",
];

export function WorkShowcase() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const [halfWidth, setHalfWidth] = useState(0);

  // Derive cards from featuredWork — include featuredWork in deps so it stays in sync
  const cards = useMemo(
    () =>
      featuredWork.map((item, index) => ({
        title: item.title,
        description: item.description,
        label: item.category,
        impact: item.impact,
        accent: ACCENTS[index % ACCENTS.length],
      })),
    [] // featuredWork is a module-level constant so [] is safe; useMemo just avoids recreating the array on every render
  );

  const loopItems = useMemo(() => [...cards, ...cards], [cards]);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) setHalfWidth(trackRef.current.scrollWidth / 2);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || !halfWidth) return;
    let next = x.get() - (delta / 1000) * CARD_SPEED;
    if (next <= -halfWidth) next += halfWidth;
    if (next > 0) next -= halfWidth;
    x.set(next);
  });

  return (
    <section className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.18),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(165,243,252,0.1),_transparent_20%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent sm:w-40" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent sm:w-40" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-5 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
          >
            Our Work
          </motion.p>
          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}>
              Premium product stories
            </span>
            <span className="relative block">
              <span aria-hidden="true" className="absolute inset-0 -z-10 translate-x-2 translate-y-2 text-white/10" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}>
                that move fast.
              </span>
              <span className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                that move fast.
              </span>
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            Drag or hover to explore our recent work.
          </p>
        </div>

        <div
          className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_40px_90px_-45px_rgba(16,185,129,0.4)] backdrop-blur-xl"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />

          {/* Drag hint */}
          <div className="pointer-events-none absolute right-6 top-6 hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-emerald-200/70 backdrop-blur md:block">
            Drag to explore
          </div>

          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragElastic={0.12}
            dragMomentum={false}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => setIsPaused(false)}
            className="flex cursor-grab gap-6 py-8 active:cursor-grabbing"
          >
            {loopItems.map((card, index) => (
              <motion.div
                key={`${card.title}-${index}`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="relative min-w-[280px] max-w-[320px] flex-shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-[0_25px_60px_-35px_rgba(0,0,0,0.7)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${card.accent} opacity-80`} />
                <div className="absolute right-4 top-4 h-14 w-14 rounded-full bg-white/5 blur-2xl" />
                <div className="absolute bottom-6 left-4 h-20 w-20 rounded-full bg-emerald-400/8 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                  <div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-300">
                      {card.label}
                    </span>
                    <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">{card.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-400">{card.description}</p>
                  </div>

                  <div className="rounded-[1.5rem] bg-white/5 p-4 text-sm text-slate-300 shadow-[0_20px_40px_-24px_rgba(255,255,255,0.12)] backdrop-blur-sm">
                    <div className="mb-2 text-[10px] uppercase tracking-[0.32em] text-slate-500">Impact</div>
                    <div className="text-base font-semibold text-white">{card.impact}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
