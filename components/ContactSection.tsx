"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ContactForm } from "./ContactForm";
import { contactTrustSignals } from "./site-data";

export function ContactSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();

  useEffect(() => {
    // Pick up plan chosen on the pricing section
    const plan = sessionStorage.getItem("selectedPlan");
    if (plan) { setSelectedPlan(plan); sessionStorage.removeItem("selectedPlan"); }
  }, []);
  return (
    <section id="contact" className="relative overflow-hidden bg-black px-6 py-28 text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-[#16a34a]/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-[#0f766e]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, rotateX: 10, y: 32 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 shadow-[0_60px_150px_-60px_rgba(16,185,129,0.5)] backdrop-blur-xl"
          style={{ perspective: 1200 }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_36%)]" />
          <motion.div
            animate={{ x: ["-30%", "115%"] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/6 to-transparent"
          />

          <div className="relative grid lg:grid-cols-[1fr_1fr]">
            {/* Left — pitch */}
            <div className="border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mb-6 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-green-300"
              >
                Let&apos;s talk
              </motion.p>

              <h2 className="text-4xl font-semibold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
                <span
                  className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.22)" }}
                >
                  Turn your idea
                </span>
                <span
                  className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
                >
                  into a product.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                Tell us where you are and what you&apos;re building. We&apos;ll
                pressure-test the opportunity, map the fastest launch path, and
                show you exactly how we&apos;d move from idea to traction.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {contactTrustSignals.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center"
                  >
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-green-400/20 bg-green-400/10 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-green-400">
                  Or email us directly
                </p>
                <a
                  href="mailto:hello@companyapp.com"
                  className="mt-2 block text-lg font-semibold text-white transition hover:text-green-300 focus-visible:text-green-300"
                >
                  hello@companyapp.com
                </a>
              </div>
            </div>

            {/* Right — shared form */}
            <div className="p-8 md:p-12">
              <ContactForm compact defaultPlan={selectedPlan} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
