export type ProcessStep = {
  title: string;
  description: string;
};

export type ProcessCopy = {
  heading: string;
  subheading: string;
  proofLine: string;
  steps: ProcessStep[];
};

export const PROCESS_COPY_CHOICE_FIRST: ProcessCopy = {
  heading: "What Happens Next (Pick Your Starting Point)",
  subheading:
    "Choose a free audit or a quick call — either way, you’ll get a clear plan and fast execution.",
  proofLine: "Delivered in 1–3 weeks depending on scope. Loads under 2.5s. Built for calls & booked jobs.",
  steps: [
    {
      title: "Free Audit or Quick Call",
      description:
        "Pick what’s easiest: request a free audit (24h) or book a quick call. No pressure.",
    },
    {
      title: "Clear Plan + Scope",
      description:
        "We review your site (or your situation), identify what’s blocking calls and booked jobs, and confirm the best path forward.",
    },
    {
      title: "Build, Launch, Optimize",
      description:
        "We build and launch fast, install tracking, and optimize for more calls and booked jobs.",
    },
  ],
};

export const PROCESS_COPY_CALL_FIRST: ProcessCopy = {
  heading: "What Happens After You Book a Call",
  subheading:
    "A quick 15-minute call to confirm fit and scope — then we move fast.",
  proofLine: "Clear scope. Fast delivery. Built to convert.",
  steps: [
    {
      title: "15‑Minute Call (Fit + Scope)",
      description:
        "We confirm your goals, service area, and what you need most — calls, booked jobs, or both.",
    },
    {
      title: "Audit + Plan",
      description:
        "We review your website (or your current setup) and send a clear plan with priorities and scope.",
    },
    {
      title: "Build + Launch (Fast)",
      description:
        "We build, launch, install tracking, and optimize the site so it turns traffic into calls and booked jobs.",
    },
  ],
};

export const PROCESS_COPY_AUDIT_FIRST: ProcessCopy = {
  heading: "Here’s What You Get Next",
  subheading:
    "Request your free audit — then decide if you want help implementing.",
  proofLine: "24h audit. Clear next steps. No pressure.",
  steps: [
    {
      title: "Request Your Free Audit (24h)",
      description:
        "Submit your details and we’ll send a clear breakdown of what’s costing you calls and booked jobs.",
    },
    {
      title: "Findings + Next Best Moves",
      description:
        "You’ll get actionable priorities (speed, SEO, conversions) — even if you don’t hire us.",
    },
    {
      title: "If You Want Help, We Build + Launch",
      description:
        "If it’s a fit, we build and launch fast — with tracking and conversion-focused improvements.",
    },
  ],
};

// Backwards-compatible default used by <ProcessSection /> when no copy is provided.
export const PROCESS_COPY: ProcessCopy = PROCESS_COPY_CHOICE_FIRST;

