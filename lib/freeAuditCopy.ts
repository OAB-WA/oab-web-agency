export type FreeAuditVertical = "plumbers" | "hvac" | "electricians";

export type FreeAuditCopy = {
  /** Hero headline */
  heroHeadline: string;
  /** Hero subhead */
  heroSubhead: string;
  /** Hero benefit bullets (3 items) */
  heroBenefits: [string, string, string];
  /** Form CTA label (e.g. "Get My Free Plumber Website Audit") */
  ctaLabel: string;
  /** Form subtext under title */
  formSubtext: string;
  /** Problem section title */
  problemTitle: string;
  /** Problem section subtitle */
  problemSubtitle: string;
  /** Problem cards: [title, description] x3 */
  problemCards: [[string, string], [string, string], [string, string]];
  /** Problem callout box title */
  problemCalloutTitle: string;
  /** Problem callout box body */
  problemCalloutBody: string;
  /** "What's Included" section - same structure, optional overrides later */
  whatsIncludedTitle: string;
  whatsIncludedSubtitle: string;
  /** Bottom CTA section headline */
  ctaHeadline: string;
  /** Bottom CTA section subtext */
  ctaSubtext: string;
};

export const FREE_AUDIT_COPY_PLUMBERS: FreeAuditCopy = {
  heroHeadline: "Get 2–3x More Emergency Calls & Booked Jobs From Your Plumber Website",
  heroSubhead:
    "While other plumbers get calls from Google, you're losing customers to website issues. Get a free audit for plumber websites showing exactly what's costing you leads, with clear priorities and quick wins.",
  heroBenefits: [
    "Know exactly what's costing you calls and booked jobs",
    "Speed, mobile, and local search fixes that drive more leads",
    "Delivered in 24 hours. No sales pitch.",
  ],
  ctaLabel: "Get My Free Plumber Website Audit",
  formSubtext: "See what's wrong—and what to fix first.",
  problemTitle: "Your Plumber Website Issues Are Costing You Customers Every Day",
  problemSubtitle:
    "Many plumbers lose potential customers due to website problems like slow loading, poor mobile experience, or weak local SEO. If your site isn't performing, you're likely losing jobs to competitors.",
  problemCards: [
    [
      "Slow Loading = Lost Customers",
      "If your site takes more than 3 seconds, around half of visitors leave. They contact your competitor instead.",
    ],
    [
      "Not Mobile-Friendly = Missing 60% of Searches",
      "Over 60% of \"plumber near me\" searches happen on phones. If your site isn't optimized, you're invisible.",
    ],
    [
      "Poor Local SEO = Competitors Get the Leads",
      "When customers search for a plumber, they find your competitors first. You lose the job before you even know about it.",
    ],
  ],
  problemCalloutTitle: "Every day your plumber website underperforms, you're losing jobs to competitors.",
  problemCalloutBody:
    "The average plumbing business loses $2,000–$5,000 per month in missed opportunities from website issues like slow loading, poor mobile experience, or weak local SEO.",
  whatsIncludedTitle: "What You'll Get in Your Free Audit",
  whatsIncludedSubtitle:
    "A clear breakdown of what's costing you leads, plus quick wins and a simple priority roadmap.",
  ctaHeadline: "Find Out Exactly What's Costing You Leads",
  ctaSubtext:
    "Get your free plumber website audit and see the specific issues preventing visitors from calling or booking. Delivered in 24 hours. No sales pitch.",
};

export const FREE_AUDIT_COPY_HVAC: FreeAuditCopy = {
  heroHeadline: "Get 2–3x More Phone Calls & Booked Jobs From Your HVAC Website",
  heroSubhead:
    "While other HVAC companies get calls from Google, you're losing customers to website issues. Get a free audit for HVAC websites showing exactly what's costing you leads, with clear priorities and quick wins.",
  heroBenefits: [
    "Know exactly what's costing you calls and booked jobs",
    "Speed, mobile, and local search fixes that drive more leads",
    "Delivered in 24 hours. No sales pitch.",
  ],
  ctaLabel: "Get My Free HVAC Website Audit",
  formSubtext: "See what's wrong—and what to fix first.",
  problemTitle: "Your HVAC Website Issues Are Costing You Customers Every Day",
  problemSubtitle:
    "Many HVAC companies lose potential customers due to website problems like slow loading, poor mobile experience, or weak local SEO. If your site isn't performing, you're likely losing jobs to competitors.",
  problemCards: [
    [
      "Slow Loading = Lost Customers",
      "If your site takes more than 3 seconds, around half of visitors leave. They contact your competitor instead.",
    ],
    [
      "Not Mobile-Friendly = Missing 60% of Searches",
      "Over 60% of \"HVAC company near me\" and \"furnace repair near me\" searches happen on phones. If your site isn't optimized, you're invisible.",
    ],
    [
      "Poor Local SEO = Competitors Get the Leads",
      "When customers search for heating and cooling services, they find your competitors first. You lose the job before you even know about it.",
    ],
  ],
  problemCalloutTitle: "Every day your HVAC website underperforms, you're losing jobs to competitors.",
  problemCalloutBody:
    "The average HVAC business loses $2,000–$5,000 per month in missed opportunities from website issues like slow loading, poor mobile experience, or weak local SEO.",
  whatsIncludedTitle: "What You'll Get in Your Free Audit",
  whatsIncludedSubtitle:
    "A clear breakdown of what's costing you leads, plus quick wins and a simple priority roadmap.",
  ctaHeadline: "Find Out Exactly What's Costing You Leads",
  ctaSubtext:
    "Get your free HVAC website audit and see the specific issues preventing visitors from calling or booking. Delivered in 24 hours. No sales pitch.",
};

export const FREE_AUDIT_COPY_ELECTRICIANS: FreeAuditCopy = {
  heroHeadline: "Get 2–3x More Phone Calls & Booked Jobs From Your Electrician Website",
  heroSubhead:
    "While other electricians get calls from Google, you're losing customers to website issues. Get a free audit for electrician websites showing exactly what's costing you leads, with clear priorities and quick wins.",
  heroBenefits: [
    "Know exactly what's costing you calls and booked jobs",
    "Speed, mobile, and local search fixes that drive more leads",
    "Delivered in 24 hours. No sales pitch.",
  ],
  ctaLabel: "Get My Free Electrician Website Audit",
  formSubtext: "See what's wrong—and what to fix first.",
  problemTitle: "Your Electrician Website Issues Are Costing You Customers Every Day",
  problemSubtitle:
    "Many electricians lose potential customers due to website problems like slow loading, poor mobile experience, or weak local SEO. If your site isn't performing, you're likely losing jobs to competitors.",
  problemCards: [
    [
      "Slow Loading = Lost Customers",
      "If your site takes more than 3 seconds, around half of visitors leave. They contact your competitor instead.",
    ],
    [
      "Not Mobile-Friendly = Missing 60% of Searches",
      "Over 60% of \"electrician near me\" searches happen on phones. If your site isn't optimized, you're invisible.",
    ],
    [
      "Poor Local SEO = Competitors Get the Leads",
      "When customers search for electrical work, they find your competitors first. You lose the job before you even know about it.",
    ],
  ],
  problemCalloutTitle: "Every day your electrician website underperforms, you're losing jobs to competitors.",
  problemCalloutBody:
    "The average electrical contractor loses $2,000–$5,000 per month in missed opportunities from website issues like slow loading, poor mobile experience, or weak local SEO.",
  whatsIncludedTitle: "What You'll Get in Your Free Audit",
  whatsIncludedSubtitle:
    "A clear breakdown of what's costing you leads, plus quick wins and a simple priority roadmap.",
  ctaHeadline: "Find Out Exactly What's Costing You Leads",
  ctaSubtext:
    "Get your free electrician website audit and see the specific issues preventing visitors from calling or booking. Delivered in 24 hours. No sales pitch.",
};
