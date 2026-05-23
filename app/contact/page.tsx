import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Start a conversation with Ignitly. Tell us about your idea and we'll map the fastest path from concept to launched product.",
};

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
    label: "hello@ignitly.com",
    href: "mailto:hello@ignitly.com",
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
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <main className="flex flex-1 flex-col px-6 py-16 md:py-24 lg:px-16 xl:px-24">
        <div className="mx-auto w-full max-w-7xl flex-1">

          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl lg:text-8xl xl:text-[7rem]">
            Contact us
          </h1>

          <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">

            {/* Left column */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-base font-semibold text-white">Ignitly</p>
                <p className="text-base text-slate-400">Apps · AI Workflows · Chatbots · Voice Agents</p>
              </div>

              <div className="text-sm leading-7 text-slate-400">
                <p>Helping founders turn ideas into real products.</p>
                <p>120+ shipped products. Remote-first, worldwide.</p>
              </div>

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

              <Link
                href="/"
                className="mt-auto inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-slate-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                Back to home
              </Link>
            </div>

            {/* Right column — shared form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
