export type FreeWebsiteVertical = "plumbers" | "hvac" | "electricians";

export type FreeWebsiteCopy = {
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
  "Designed to turn visitors into calls and booked jobs, not just a pretty site.",
  "Full site built from the ground up—typically delivered in 1–2 weeks.",
  "Not everyone qualifies. We select participants that fit.",
];

export const FREE_WEBSITE_COPY_DEFAULT: FreeWebsiteCopy = {
  heroHeadline: "Your Business Could Be Getting 2–3x More Calls. We'll Build Your Website Free.",
  heroSubhead:
    "Full website built for more calls and booked jobs. No upfront cost; application-based; we ask for a short video testimonial as part of the program.",
  heroBullets: DEFAULT_BULLETS,
  formCtaLabel: "Apply for the Free Website",
  qualificationSubtitle:
    "We're selective. The program fits service-based businesses that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "Service-based businesses (plumbers, HVAC, electricians, contractors, etc.) that need a website built for more calls and booked jobs. You're open to a new site built for leads, not just looks. You're willing to share a short video testimonial as part of the program.",
  caseStudiesTitle: "See How We Approach Service Businesses",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for service-based businesses",
  strongCtaTitle: "Apply for the Free Website",
  strongCtaSubtitle:
    "No upfront cost. We build a full site designed to get you more calls and more booked jobs. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More Calls & Booked Jobs?",
  finalCtaSubtitle:
    "Service-based businesses: apply for the free website. We build a site designed to get you more calls and booked jobs. No upfront cost; application-based.",
};

export const FREE_WEBSITE_COPY_PLUMBERS: FreeWebsiteCopy = {
  ...FREE_WEBSITE_COPY_DEFAULT,
  heroHeadline: "Your Plumbing Business Could Be Getting 2–3x More Calls. We'll Build Your Website Free.",
  heroSubhead:
    "Full plumber website built for more calls and booked jobs. No upfront cost; application-based; we ask for a short video testimonial as part of the program.",
  heroBullets: [
    "Designed to turn visitors into calls and booked jobs, not just a pretty site.",
    "Full plumber website built from the ground up—typically delivered in 1–2 weeks.",
    "Not everyone qualifies. We select plumbing businesses that fit.",
  ],
  formCtaLabel: "Apply for the Free Plumber Website",
  qualificationSubtitle:
    "We're selective. The program fits plumbing businesses that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "Plumbing companies that need a website built for more calls and booked jobs. You're open to a new site built for leads, not just looks. You're willing to share a short video testimonial as part of the program.",
  caseStudiesTitle: "See How We Approach Plumbing Businesses",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for plumbing companies",
  strongCtaTitle: "Apply for the Free Plumber Website",
  strongCtaSubtitle:
    "No upfront cost. We build a full site designed to get plumbers more calls and more booked jobs. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More Plumbing Calls & Booked Jobs?",
  finalCtaSubtitle:
    "Plumbers: apply for the free website. We build a site designed to get you more calls and booked jobs. No upfront cost; application-based.",
};

export const FREE_WEBSITE_COPY_HVAC: FreeWebsiteCopy = {
  ...FREE_WEBSITE_COPY_DEFAULT,
  heroHeadline: "Your HVAC Business Could Be Getting 2–3x More Calls. We'll Build Your Website Free.",
  heroSubhead:
    "Full HVAC website built for more calls and booked jobs. No upfront cost; application-based; we ask for a short video testimonial as part of the program.",
  heroBullets: [
    "Designed to turn visitors into calls and booked jobs, not just a pretty site.",
    "Full HVAC website built from the ground up—typically delivered in 1–2 weeks.",
    "Not everyone qualifies. We select HVAC businesses that fit.",
  ],
  formCtaLabel: "Apply for the Free HVAC Website",
  qualificationSubtitle:
    "We're selective. The program fits HVAC businesses that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "HVAC companies that need a website built for more calls and booked jobs. You're open to a new site built for leads, not just looks. You're willing to share a short video testimonial as part of the program.",
  caseStudiesTitle: "See How We Approach HVAC Businesses",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for HVAC companies",
  strongCtaTitle: "Apply for the Free HVAC Website",
  strongCtaSubtitle:
    "No upfront cost. We build a full site designed to get HVAC companies more calls and more booked jobs. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More HVAC Calls & Booked Jobs?",
  finalCtaSubtitle:
    "HVAC companies: apply for the free website. We build a site designed to get you more calls and booked jobs. No upfront cost; application-based.",
};

export const FREE_WEBSITE_COPY_ELECTRICIANS: FreeWebsiteCopy = {
  ...FREE_WEBSITE_COPY_DEFAULT,
  heroHeadline: "Your Electrical Business Could Be Getting 2–3x More Calls. We'll Build Your Website Free.",
  heroSubhead:
    "Full electrician website built for more calls and booked jobs. No upfront cost; application-based; we ask for a short video testimonial as part of the program.",
  heroBullets: [
    "Designed to turn visitors into calls and booked jobs, not just a pretty site.",
    "Full electrician website built from the ground up—typically delivered in 1–2 weeks.",
    "Not everyone qualifies. We select electrical contractors that fit.",
  ],
  formCtaLabel: "Apply for the Free Electrician Website",
  qualificationSubtitle:
    "We're selective. The program fits electrical contractors that meet a few criteria, and we're upfront about who it's not for.",
  qualificationWhoFor:
    "Electrical contractors that need a website built for more calls and booked jobs. You're open to a new site built for leads, not just looks. You're willing to share a short video testimonial as part of the program.",
  caseStudiesTitle: "See How We Approach Electrical Contractors",
  caseStudiesSubtitle:
    "Demonstration projects showing our approach to building sites that get more calls and booked jobs for electricians",
  strongCtaTitle: "Apply for the Free Electrician Website",
  strongCtaSubtitle:
    "No upfront cost. We build a full site designed to get electricians more calls and more booked jobs. Application-based; we select participants that fit.",
  finalCtaTitle: "Ready for More Electrician Calls & Booked Jobs?",
  finalCtaSubtitle:
    "Electricians: apply for the free website. We build a site designed to get you more calls and booked jobs. No upfront cost; application-based.",
};
