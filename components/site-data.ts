export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// ─── Founder problems (ProblemSection) ───────────────────────────────────────
export const founderProblems = [
  {
    title: "Unvalidated idea",
    detail: "Building starts before the market, user pain, or willingness to pay is clear.",
    tag: "market risk",
  },
  {
    title: "Feature overload",
    detail: "The first version becomes too big, too slow, and too expensive to learn from.",
    tag: "scope risk",
  },
  {
    title: "Scattered execution",
    detail: "Brand, product, engineering, and launch decisions move without one system.",
    tag: "delivery risk",
  },
  {
    title: "Launch with no traction",
    detail: "The product ships, but there is no repeatable path to leads, users, or revenue.",
    tag: "growth risk",
  },
];

// ─── Solution steps (SolutionSection) ────────────────────────────────────────
export const solutionSteps = [
  {
    title: "Validate",
    detail: "Test the market, sharpen the audience, and prove the offer before heavy build cost.",
  },
  {
    title: "Shape",
    detail: "Turn the idea into a focused launch scope, product story, and user journey.",
  },
  {
    title: "Build",
    detail: "Design and develop the product with one aligned system across brand, UX, and code.",
  },
  {
    title: "Grow",
    detail: "Connect launch, analytics, feedback, and acquisition into a repeatable growth loop.",
  },
];

// ─── Pricing plans (PricingSection) ──────────────────────────────────────────
export const pricingPlans = [
  {
    name: "Starter",
    tagline: "Validate before you build",
    monthlyPrice: 1200,
    onetimePrice: 2500,
    accent: "from-slate-400 to-slate-600",
    glowColor: "rgba(148,163,184,0.25)",
    features: [
      "2-week validation sprint",
      "Market & competitor research",
      "Audience definition workshop",
      "Landing page with CTA",
      "User interview framework",
      "Go / no-go decision report",
    ],
    cta: "Start validating",
  },
  {
    name: "Launch",
    tagline: "Idea to shipped product",
    monthlyPrice: 3800,
    onetimePrice: 8500,
    popular: true,
    accent: "from-green-400 to-emerald-500",
    glowColor: "rgba(16,185,129,0.55)",
    features: [
      "Everything in Starter",
      "Full product UX & UI design",
      "MVP development (6 weeks)",
      "Brand system & style guide",
      "Analytics & event tracking",
      "Launch strategy & checklist",
      "30-day post-launch support",
    ],
    cta: "Launch your product",
  },
  {
    name: "Scale",
    tagline: "Growth after launch",
    monthlyPrice: 6500,
    onetimePrice: 15000,
    accent: "from-teal-400 to-cyan-500",
    glowColor: "rgba(20,184,166,0.3)",
    features: [
      "Everything in Launch",
      "Growth loop design",
      "Ongoing iteration sprints",
      "A/B testing & optimisation",
      "Monthly strategy sessions",
      "Dedicated Slack channel",
      "Priority 24/7 support",
    ],
    cta: "Start scaling",
  },
];

// ─── FAQ items (FAQSection + JSON-LD) ────────────────────────────────────────
export const faqs = [
  {
    q: "How long does it take to ship a product?",
    a: "Most MVPs are live within 6–8 weeks. A validation sprint takes 2 weeks. Larger builds with full brand, design, and development typically run 10–12 weeks. We scope timelines honestly at the start — no surprise slippage.",
  },
  {
    q: "Do you work with early-stage founders or only funded startups?",
    a: "Both. A significant portion of our work is with pre-seed founders who need to validate fast and conserve runway. We've also worked with Series A teams who need to move faster than their in-house capacity allows.",
  },
  {
    q: "What does the engagement actually look like week to week?",
    a: "You get a dedicated Slack channel, weekly loom updates, and a shared project board. No chasing for status. We run in two-week sprints with a review and demo at the end of each one so you always know what's shipping next.",
  },
  {
    q: "Can I just hire you for design without development?",
    a: "Yes. We can hand off production-ready Figma files, a full design system, or a brand kit — whatever your team needs to build from. We're flexible on scope and will clearly define deliverables before anything starts.",
  },
  {
    q: "What if I'm not happy with the direction mid-project?",
    a: "We build in explicit review checkpoints after every sprint. If a direction isn't working, we course-correct before it becomes expensive. No work gets buried in a backlog — you see and approve each stage before we move forward.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes — the Scale plan covers ongoing iteration, growth loops, and monthly strategy. On other plans, we include 30 days of post-launch support. After that, a retainer or à-la-carte sprints are available depending on what you need.",
  },
  {
    q: "How do payments work?",
    a: "One-time projects are split 50% upfront and 50% on completion. Monthly retainers are billed at the start of each month with a 30-day cancellation policy. We accept bank transfer, Stripe, and Wise.",
  },
  {
    q: "Will my product be built on a template or from scratch?",
    a: "From scratch — designed and built specifically for your product, audience, and goals. We don't reskin templates. Every codebase is clean, documented, and fully handed over to you at the end.",
  },
];

// ─── Contact trust signals (ContactSection) ───────────────────────────────────
export const contactTrustSignals = [
  { value: "< 24 h", label: "First response" },
  { value: "Free", label: "Initial call" },
  { value: "No fluff", label: "Direct advice" },
];

export const socialProof = [
  {
    quote:
      "We had a rough Figma prototype and a tight runway. Ignitly turned it into a shippable product in 6 weeks — our first 200 users signed up before we even launched on Product Hunt.",
    author: "Sarah K., Founder of TaskFlow",
    role: "B2B SaaS",
  },
  {
    quote:
      "I'd wasted three months with a freelancer who kept re-scoping. Ignitly shipped a fully working MVP in under two months and the retention numbers have been solid since day one.",
    author: "Mike R., Indie Hacker",
    role: "Consumer App",
  },
  {
    quote:
      "They pushed back on two features I thought I needed, and they were right both times. We cut scope, launched faster, and our activation rate jumped 40% compared to our old product.",
    author: "Alex T., CEO of Roundup",
    role: "Marketplace Startup",
  },
];

export const stats = [
  { value: "120+", label: "products shipped" },
  { value: "40%", label: "avg. activation lift" },
  { value: "6 wks", label: "median time to launch" },
];

export const featuredWork = [
  {
    title: "Gym Buds — Find Workout Friends",
    description:
      "Full-stack social fitness app that matches gym-goers with compatible workout partners nearby. Designed, built, and launched on Google Play with 5K+ downloads.",
    category: "Mobile App / Social",
    impact: "5K+ downloads",
    storeUrl: "https://play.google.com/store/apps/details?id=com.gymbuds.app",
    platform: "Android",
  },
  {
    title: "Golf Islands",
    description:
      "Casual mobile golf game with island-themed levels built for a global audience. Published on Google Play with PEGI 3 rating — family-friendly and ad-supported.",
    category: "Mobile Game",
    impact: "PEGI 3 · Global release",
    storeUrl: "https://play.google.com/store/apps/details?id=com.kidga.golf",
    platform: "Android",
  },
  {
    title: "Brand system & marketing site",
    description:
      "Full visual identity and conversion-focused website for a local home-services company. Organic leads up 3× in 90 days.",
    category: "Brand / Web",
    impact: "+3× organic leads",
  },
  {
    title: "Ops dashboard for a growing agency",
    description:
      "Custom admin panel replacing five disconnected spreadsheets. Reduced weekly reporting time from 4 hours to 20 minutes.",
    category: "Product / Dashboard",
    impact: "–80% reporting time",
  },
  {
    title: "Lead capture & CRM automation",
    description:
      "End-to-end lead flow — landing page, qualification form, and automated HubSpot sync. Cost per qualified lead dropped by half.",
    category: "Growth / Automation",
    impact: "–50% cost per lead",
  },
];
