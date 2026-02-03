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
  heading: "Our Process",
  subheading:
    "Request a quote or book a call. We'll review your needs and provide a clear plan with fast execution.",
  proofLine: "Delivered in 1–3 weeks depending on scope. Loads under 2.5s. Built for calls & booked jobs.",
  steps: [
    {
      title: "Request a Quote / Book a Call",
      description:
        "Fill out the form or book a quick call. We'll review your goals, service area, and what you need most: calls, booked jobs, or both.",
    },
    {
      title: "Clear Plan + Fixed Scope",
      description:
        "We review your site (or your situation), identify what's blocking calls and booked jobs, and provide a clear plan with a fixed quote and timeline.",
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
    "A quick 15-minute call to confirm fit and scope. Then we move fast.",
  proofLine: "Clear scope. Fast delivery. Built to convert.",
  steps: [
    {
      title: "15‑Minute Call (Fit + Scope)",
      description:
        "We confirm your goals, service area, and what you need most: calls, booked jobs, or both.",
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
  heading: "How It Works",
  subheading:
    "Simple process. Fast delivery. No sales pitch.",
  proofLine: "24h audit. Clear next steps. No pressure.",
  steps: [
    {
      title: "Submit Your Request",
      description:
        "Fill out the form above with your website URL. Takes less than a minute.",
    },
    {
      title: "We Review & Send Your Audit",
      description:
        "Within 24 hours, you'll receive your free audit via email with clear findings and priorities.",
    },
    {
      title: "Use Your Audit to Take Action",
      description:
        "Review the findings and use the priority roadmap to fix issues yourself or share it with a developer.",
    },
  ],
};

export const PROCESS_COPY_FREE_REDESIGN: ProcessCopy = {
  heading: "How the Free Redesign Works",
  subheading:
    "Application-based. We build a new site designed to get you more calls and booked jobs, then we replace your current one. No upfront cost.",
  proofLine: "New site built for leads. Same URL. We can roll back to your previous site if you're not happy.",
  steps: [
    {
      title: "Apply (Above)",
      description:
        "Submit the application with your business name, site URL, and a few quick questions. We review fit and select participants.",
    },
    {
      title: "We Build Your New Site",
      description:
        "We build a new website from the ground up, designed to turn visitors into calls and booked jobs, fast and mobile-first, then we replace your current site with it.",
    },
    {
      title: "Launch & Optional Testimonial",
      description:
        "We go live and track key metrics (calls, leads, booked jobs) before and after launch. If there's significant improvement within 30 days, we may ask for a short 2–3 minute video testimonial for our case studies. We only ask when the numbers support it.",
    },
  ],
};

export const PROCESS_COPY_FREE_WEBSITE: ProcessCopy = {
  heading: "How the Free Website Works",
  subheading:
    "Application-based. We build a full site designed to get you more calls and booked jobs. No upfront cost.",
  proofLine: "Full site built for leads. Delivered in 1–2 weeks. We can iterate if you're not happy.",
  steps: [
    {
      title: "Apply (Above)",
      description:
        "Submit the application with your business name, email, and a few quick questions. We review fit and select participants.",
    },
    {
      title: "We Build Your Website",
      description:
        "We build a full website from the ground up, designed to turn visitors into calls and booked jobs, fast and mobile-first. We determine scope and aim to deliver within 1–2 weeks.",
    },
    {
      title: "Launch & Video Testimonial",
      description:
        "We go live. As part of the program we ask for a short 2–3 minute video testimonial for our case studies. No upfront cost for you, a proven case study for us.",
    },
  ],
};

// Backwards-compatible default used by <ProcessSection /> when no copy is provided.
export const PROCESS_COPY: ProcessCopy = PROCESS_COPY_CHOICE_FIRST;

