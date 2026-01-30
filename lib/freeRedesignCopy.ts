export type FreeRedesignVertical = "plumbers" | "hvac" | "electricians";

export type FreeRedesignCopy = {
  heroHeadline: string;
  heroSubhead: string;
  heroBullets: [string, string, string];
  formCtaLabel: string;
  qualificationSubtitle: string;
  qualificationWhoFor: string;
  caseStudiesTitle: string;
  caseStudiesSubtitle: string;
  strongCtaTitle: string;
  strongCtaSubtitle: string;
  finalCtaTitle: string;
  finalCtaSubtitle: string;
};

const DEFAULT_BULLETS: [string, string, string] = [
  "Designed to turn visitors into calls and booked jobs, not just a pretty refresh.",
  "New site built from the ground up, then we replace your current one.",
  "Not everyone qualifies. We select participants that fit.",
];

export const FREE_REDESIGN_COPY_DEFAULT: FreeRedesignCopy = {
  heroHeadline: "Your Website Could Be Getting You 2–3x More Calls. We'll Build It Free.",
  heroSubhead:
    "New site built for more calls and booked jobs—we replace yours. No upfront cost; application-based; we may ask for a short video testimonial if results are strong.",
  heroBullets: DEFAULT_BULLETS,
  formCtaLabel: "Apply for the Free Redesign",
  qualificationSubtitle:
    "We're selective. The program fits service-based businesses that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "Service-based businesses (plumbers, HVAC, electricians, contractors, etc.) with an existing website that could get more calls and booked jobs. You're open to a new site built for leads, not just looks, and replacing your current one. You're willing to share a short video testimonial if the results are strong.",
  caseStudiesTitle: "See How We Approach Service Businesses",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for service-based businesses",
  strongCtaTitle: "Apply for the Free Redesign",
  strongCtaSubtitle:
    "No upfront cost. We build a new site designed to get you more calls and more booked jobs, then we replace your current one. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More Calls & Booked Jobs?",
  finalCtaSubtitle:
    "Service-based businesses: apply for the free redesign. We build a new site designed to get you more calls and booked jobs, then we replace your current one. No upfront cost; application-based.",
};

export const FREE_REDESIGN_COPY_PLUMBERS: FreeRedesignCopy = {
  ...FREE_REDESIGN_COPY_DEFAULT,
  heroHeadline: "Your Plumber Website Could Be Getting You 2–3x More Calls. We'll Build It Free.",
  heroSubhead:
    "New site built for more plumbing calls and booked jobs—we replace yours. No upfront cost; application-based; video testimonial if results are strong.",
  heroBullets: [
    "Designed to turn visitors into calls and booked jobs, not just a pretty refresh.",
    "New site built from the ground up, then we replace your current plumber website.",
    "Not everyone qualifies. We select plumbing businesses that fit.",
  ],
  formCtaLabel: "Apply for the Free Plumber Redesign",
  qualificationSubtitle:
    "We're selective. The program fits plumbing businesses that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "Plumbing companies with an existing website that could get more calls and booked jobs. You're open to a new site built for leads, not just looks, and replacing your current one. You're willing to share a short video testimonial if the results are strong.",
  caseStudiesTitle: "See How We Approach Plumbing Businesses",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for plumbing companies",
  strongCtaTitle: "Apply for the Free Plumber Redesign",
  strongCtaSubtitle:
    "No upfront cost. We build a new site designed to get plumbers more calls and more booked jobs, then we replace your current one. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More Plumbing Calls & Booked Jobs?",
  finalCtaSubtitle:
    "Plumbers: apply for the free redesign. We build a new site designed to get you more calls and booked jobs, then we replace your current one. No upfront cost; application-based.",
};

export const FREE_REDESIGN_COPY_HVAC: FreeRedesignCopy = {
  ...FREE_REDESIGN_COPY_DEFAULT,
  heroHeadline: "Your HVAC Website Could Be Getting You 2–3x More Calls. We'll Build It Free.",
  heroSubhead:
    "New site built for more HVAC calls and booked jobs—we replace yours. No upfront cost; application-based; video testimonial if results are strong.",
  heroBullets: [
    "Designed to turn visitors into calls and booked jobs, not just a pretty refresh.",
    "New site built from the ground up, then we replace your current HVAC website.",
    "Not everyone qualifies. We select HVAC businesses that fit.",
  ],
  formCtaLabel: "Apply for the Free HVAC Redesign",
  qualificationSubtitle:
    "We're selective. The program fits HVAC businesses that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "HVAC companies with an existing website that could get more calls and booked jobs. You're open to a new site built for leads, not just looks, and replacing your current one. You're willing to share a short video testimonial if the results are strong.",
  caseStudiesTitle: "See How We Approach HVAC Businesses",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for HVAC companies",
  strongCtaTitle: "Apply for the Free HVAC Redesign",
  strongCtaSubtitle:
    "No upfront cost. We build a new site designed to get HVAC companies more calls and more booked jobs, then we replace your current one. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More HVAC Calls & Booked Jobs?",
  finalCtaSubtitle:
    "HVAC companies: apply for the free redesign. We build a new site designed to get you more calls and booked jobs, then we replace your current one. No upfront cost; application-based.",
};

export const FREE_REDESIGN_COPY_ELECTRICIANS: FreeRedesignCopy = {
  ...FREE_REDESIGN_COPY_DEFAULT,
  heroHeadline: "Your Electrician Website Could Be Getting You 2–3x More Calls. We'll Build It Free.",
  heroSubhead:
    "New site built for more electrician calls and booked jobs—we replace yours. No upfront cost; application-based; video testimonial if results are strong.",
  heroBullets: [
    "Designed to turn visitors into calls and booked jobs, not just a pretty refresh.",
    "New site built from the ground up, then we replace your current electrician website.",
    "Not everyone qualifies. We select electrical contractors that fit.",
  ],
  formCtaLabel: "Apply for the Free Electrician Redesign",
  qualificationSubtitle:
    "We're selective. The program fits electrical contractors that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "Electrical contractors with an existing website that could get more calls and booked jobs. You're open to a new site built for leads, not just looks, and replacing your current one. You're willing to share a short video testimonial if the results are strong.",
  caseStudiesTitle: "See How We Approach Electrical Contractors",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for electricians",
  strongCtaTitle: "Apply for the Free Electrician Redesign",
  strongCtaSubtitle:
    "No upfront cost. We build a new site designed to get electricians more calls and more booked jobs, then we replace your current one. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More Electrician Calls & Booked Jobs?",
  finalCtaSubtitle:
    "Electricians: apply for the free redesign. We build a new site designed to get you more calls and booked jobs, then we replace your current one. No upfront cost; application-based.",
};
