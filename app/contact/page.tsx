"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";

type FormState = "idle" | "submitting" | "sent";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    label: "hello@companyapp.com",
    href: "mailto:hello@companyapp.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.39 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    label: "+1 (555) 000-0000",
    href: "tel:+15550000000",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [status, setStatus] = useState<FormState>("idle");

  function validate() {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name as keyof typeof form])
      setErrors((er) => ({ ...er, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("submitting");

    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hello@companyapp.com?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 800);
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <main className="flex flex-1 flex-col px-6 py-16 md:py-24 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl flex-1">

          {/* Page heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl xl:text-[7rem]"
          >
            Contact us
          </motion.h1>

          <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">

            {/* ── Left column ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-10"
            >
              {/* Company info */}
              <div>
                <p className="text-base font-semibold text-white">CompanyApp</p>
                <p className="text-base text-slate-400">
                  Product Design &amp; Development
                </p>
              </div>

              <div className="text-sm leading-7 text-slate-400">
                <p>Helping founders turn ideas into real products.</p>
                <p>120+ shipped products. Remote-first, worldwide.</p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 text-base font-semibold text-white transition hover:text-green-400"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition group-hover:border-green-400/40 group-hover:bg-green-400/10 group-hover:text-green-400">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Back link */}
              <Link
                href="/"
                className="mt-auto inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to home
              </Link>
            </motion.div>

            {/* ── Right column — form ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
            >
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="flex min-h-[480px] flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-green-400/30 bg-green-400/10">
                      <svg className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold text-white">Message sent</h2>
                      <p className="mt-3 max-w-xs text-slate-400">
                        Your email client should have opened with your message
                        pre-filled. We typically reply within 24 hours.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setStatus("idle");
                        setForm({ name: "", email: "", message: "" });
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
                    className="flex flex-col gap-6"
                  >
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-white">
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        className={`rounded-lg border bg-transparent px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition focus:ring-2 focus:ring-green-400/40 ${
                          errors.name
                            ? "border-red-400/60"
                            : "border-white/20 hover:border-white/30 focus:border-green-400/60"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-white">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@company.com"
                        value={form.email}
                        onChange={handleChange}
                        className={`rounded-lg border bg-transparent px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition focus:ring-2 focus:ring-green-400/40 ${
                          errors.email
                            ? "border-red-400/60"
                            : "border-white/20 hover:border-white/30 focus:border-green-400/60"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="message" className="text-sm font-medium text-white">
                          Message
                        </label>
                        <span className="text-xs text-slate-600">
                          {form.message.length}/1000
                        </span>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        rows={7}
                        maxLength={1000}
                        placeholder="Type your message..."
                        value={form.message}
                        onChange={handleChange}
                        className={`resize-none rounded-lg border bg-transparent px-5 py-4 text-sm text-white placeholder-slate-600 outline-none transition focus:ring-2 focus:ring-green-400/40 ${
                          errors.message
                            ? "border-red-400/60"
                            : "border-white/20 hover:border-white/30 focus:border-green-400/60"
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === "submitting"}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-400 py-4 text-sm font-bold uppercase tracking-widest text-black transition hover:bg-green-300 disabled:opacity-60"
                    >
                      {status === "submitting" ? (
                        <>
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Opening email client…
                        </>
                      ) : (
                        "Submit"
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-600">
                      Opens your email client with your message pre-filled.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
