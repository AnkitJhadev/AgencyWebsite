"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const trustSignals = [
  { value: "< 24 h", label: "First response" },
  { value: "Free", label: "Initial call" },
  { value: "No fluff", label: "Direct advice" },
];

type FormState = "idle" | "submitting" | "sent";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", idea: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.idea.trim()) e.idea = "Tell us about your idea";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) {
      setErrors(e2);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nIdea:\n${form.idea}`
    );
    const subject = encodeURIComponent(`Intro from ${form.name}`);
    window.location.href = `mailto:hello@companyapp.com?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-28 text-white"
    >
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
                {trustSignals.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center"
                  >
                    <p className="text-xl font-bold text-white">{s.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-widest text-slate-500">
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
                  className="mt-2 block text-lg font-semibold text-white transition hover:text-green-300"
                >
                  hello@companyapp.com
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex h-full min-h-[360px] flex-col items-center justify-center text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10">
                      <svg
                        className="h-7 w-7 text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-white">
                      You&apos;re in the queue
                    </h3>
                    <p className="mt-3 max-w-xs text-slate-400">
                      Your email client should have opened with your message
                      pre-filled. Expect a reply within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", idea: "" });
                      }}
                      className="mt-8 text-sm text-slate-500 underline underline-offset-4 hover:text-slate-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    <h3 className="text-xl font-semibold text-white">
                      Start the conversation
                    </h3>

                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-widest text-slate-400"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, name: e.target.value }));
                          if (errors.name)
                            setErrors((er) => ({ ...er, name: undefined }));
                        }}
                        className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:ring-2 focus:ring-green-400/50 ${
                          errors.name
                            ? "border-red-400/60"
                            : "border-white/10 focus:border-green-400/40"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-widest text-slate-400"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="jane@startup.com"
                        value={form.email}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, email: e.target.value }));
                          if (errors.email)
                            setErrors((er) => ({ ...er, email: undefined }));
                        }}
                        className={`rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:ring-2 focus:ring-green-400/50 ${
                          errors.email
                            ? "border-red-400/60"
                            : "border-white/10 focus:border-green-400/40"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Idea */}
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="idea"
                          className="text-xs font-semibold uppercase tracking-widest text-slate-400"
                        >
                          Your idea
                        </label>
                        <span className="text-xs text-slate-600">
                          {form.idea.length}/500
                        </span>
                      </div>
                      <textarea
                        id="idea"
                        rows={5}
                        maxLength={500}
                        placeholder="Describe your idea, the problem it solves, and where you are right now..."
                        value={form.idea}
                        onChange={(e) => {
                          setForm((f) => ({ ...f, idea: e.target.value }));
                          if (errors.idea)
                            setErrors((er) => ({ ...er, idea: undefined }));
                        }}
                        className={`resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition focus:ring-2 focus:ring-green-400/50 ${
                          errors.idea
                            ? "border-red-400/60"
                            : "border-white/10 focus:border-green-400/40"
                        }`}
                      />
                      {errors.idea && (
                        <p className="text-xs text-red-400">{errors.idea}</p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ y: -2, scale: 1.015 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-40px_rgba(16,185,129,0.9)] transition disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            />
                          </svg>
                          Opening email client…
                        </>
                      ) : (
                        "Send message"
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-600">
                      This opens your email client with your message pre-filled.
                      No spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
