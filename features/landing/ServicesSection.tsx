"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Mobile & Web Apps",
    description:
      "Production-ready apps from scratch — iOS, Android, and web. Clean code, great UX, shipped in weeks not months.",
    tags: ["React Native", "Next.js", "iOS", "Android"],
    gradient: "from-emerald-400 to-teal-500",
    iconBg: "border-emerald-400/25 bg-emerald-400/10",
    iconColor: "text-emerald-400",
    glow: "rgba(16,185,129,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path strokeLinecap="round" d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: "AI Workflows",
    description:
      "Replace repetitive processes with intelligent automation. Connect your tools, data, and AI models into one seamless flow.",
    tags: ["OpenAI", "LangChain", "n8n", "Zapier"],
    gradient: "from-violet-400 to-purple-500",
    iconBg: "border-violet-400/25 bg-violet-400/10",
    iconColor: "text-violet-400",
    glow: "rgba(139,92,246,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "AI Chatbots",
    description:
      "Custom chatbots trained on your product. Handle support, qualify leads, and onboard users — 24/7, no team needed.",
    tags: ["GPT-4o", "RAG", "Embeddings", "Web / Slack"],
    gradient: "from-sky-400 to-blue-500",
    iconBg: "border-sky-400/25 bg-sky-400/10",
    iconColor: "text-sky-400",
    glow: "rgba(56,189,248,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Voice Agents",
    description:
      "Conversational voice AI that handles calls, bookings, and queries in real-time. Scale without hiring — always on.",
    tags: ["ElevenLabs", "Whisper", "VAPI", "Twilio"],
    gradient: "from-amber-400 to-orange-500",
    iconBg: "border-amber-400/25 bg-amber-400/10",
    iconColor: "text-amber-400",
    glow: "rgba(251,146,60,0.35)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path strokeLinecap="round" d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line strokeLinecap="round" x1="12" y1="19" x2="12" y2="23" />
        <line strokeLinecap="round" x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-6 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-10 h-[480px] w-[480px] rounded-full bg-violet-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[480px] w-[480px] rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
            What we build
          </p>
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span
              className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
            >
              Four ways we ignite
            </span>
            <span
              className="block bg-gradient-to-r from-white via-slate-300 to-slate-400 bg-clip-text text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.18)" }}
            >
              your business.
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Apps, AI workflows, chatbots, and voice agents — the digital
            infrastructure that lets founders grow without scaling headcount.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              style={{ boxShadow: `0 35px 80px -45px ${service.glow}` }}
            >
              {/* Hover accent bar */}
              <div
                className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Icon */}
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${service.iconBg} ${service.iconColor} transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                {service.description}
              </p>

              {/* Tech tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
