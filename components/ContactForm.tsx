"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type FormState = "idle" | "submitting" | "sent" | "error";

const inputBase =
  "w-full rounded-xl border bg-transparent px-5 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition focus-visible:ring-2 focus-visible:ring-green-400/50";
const inputNormal = "border-white/20 hover:border-white/30 focus-visible:border-green-400/60";
const inputError = "border-red-400/60";

interface Props {
  /** Pre-selected plan name — passed from pricing cards */
  defaultPlan?: string;
  /** Compact variant used inside ContactSection */
  compact?: boolean;
}

export function ContactForm({ defaultPlan, compact }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    plan: defaultPlan ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [status, setStatus] = useState<FormState>("idle");
  const [serverError, setServerError] = useState("");

  // Sync plan when the prop changes (e.g. user clicks different pricing CTA)
  useEffect(() => {
    if (defaultPlan) setForm((f) => ({ ...f, plan: defaultPlan }));
  }, [defaultPlan]);

  function validate() {
    const e: Partial<Record<keyof typeof form, string>> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof form])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setErrors({});
    setServerError("");
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      setStatus("sent");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const messageLabel = compact ? "Your idea" : "Message";
  const messagePlaceholder = compact
    ? "Describe your idea, the problem it solves, and where you are right now…"
    : "Type your message…";

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="flex min-h-[380px] flex-col items-center justify-center gap-6 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10">
            <svg className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Message sent!</h3>
            <p className="mt-3 max-w-xs text-slate-400">
              We got it. Expect a reply within 24 hours.
            </p>
          </div>
          <button
            onClick={() => {
              setStatus("idle");
              setForm({ name: "", email: "", message: "", plan: defaultPlan ?? "" });
            }}
            className="text-sm text-slate-500 underline underline-offset-4 transition hover:text-slate-300"
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
          noValidate
          className="flex flex-col gap-5"
        >
          {!compact && <h3 className="text-xl font-semibold text-white">Start the conversation</h3>}

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-name" className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Your name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Smith"
              value={form.name}
              onChange={handleChange}
              className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
            />
            {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="cf-email" className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Email address
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@startup.com"
              value={form.email}
              onChange={handleChange}
              className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
            />
            {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
          </div>

          {/* Plan selector — shown if no default plan is pre-selected */}
          {!defaultPlan && (
            <div className="flex flex-col gap-1.5">
              <label htmlFor="cf-plan" className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Plan of interest{" "}
                <span className="normal-case text-slate-600">(optional)</span>
              </label>
              <select
                id="cf-plan"
                name="plan"
                value={form.plan}
                onChange={handleChange}
                className={`${inputBase} ${inputNormal} cursor-pointer`}
              >
                <option value="" className="bg-slate-900">Not sure yet</option>
                <option value="Starter" className="bg-slate-900">Starter — Validate</option>
                <option value="Launch" className="bg-slate-900">Launch — Build & Ship</option>
                <option value="Scale" className="bg-slate-900">Scale — Grow</option>
              </select>
            </div>
          )}

          {/* Pre-selected plan badge */}
          {defaultPlan && (
            <div className="flex items-center gap-2 rounded-xl border border-green-400/25 bg-green-400/10 px-4 py-3">
              <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-green-300">
                Enquiring about the <strong>{defaultPlan}</strong> plan
              </span>
              <input type="hidden" name="plan" value={defaultPlan} />
            </div>
          )}

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="cf-message" className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                {messageLabel}
              </label>
              <span className="text-xs text-slate-600">{form.message.length}/1000</span>
            </div>
            <textarea
              id="cf-message"
              name="message"
              rows={compact ? 5 : 6}
              maxLength={1000}
              placeholder={messagePlaceholder}
              value={form.message}
              onChange={handleChange}
              className={`resize-none ${inputBase} ${errors.message ? inputError : inputNormal}`}
            />
            {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
          </div>

          {/* Server error */}
          {status === "error" && serverError && (
            <p className="rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-400">
              {serverError}
            </p>
          )}

          <motion.button
            type="submit"
            disabled={status === "submitting"}
            whileHover={{ y: -2, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-40px_rgba(16,185,129,0.9)] transition disabled:opacity-60"
          >
            {status === "submitting" ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending…
              </>
            ) : (
              "Send message"
            )}
          </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
