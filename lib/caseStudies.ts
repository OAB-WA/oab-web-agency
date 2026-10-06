export type CaseStudyPerformanceMetric = {
  before?: number;
  after: number;
  unit: string;
};

export type CaseStudy = {
  id: string;
  business: string;
  label: string;
  service: string;
  type?: "redesign" | "new-build";
  disclaimer?: string;
  // Long-form copy (used on /case-studies)
  problem: string;
  approach: string;
  outcome: string;
  // Short copy (used on compact cards)
  compactSummary: string;
  beforeImageUrl?: string;
  imageUrl: string;
  originalWebsiteUrl?: string;
  demoUrl?: string;
  keyTakeaways?: string[];
  performance?: {
    score: { before?: number; after: number };
    accessibility?: number;
    bestPractices?: number;
    seo?: number;
    fcp: CaseStudyPerformanceMetric;
    lcp: CaseStudyPerformanceMetric;
    tbt: CaseStudyPerformanceMetric;
    cls: CaseStudyPerformanceMetric;
    speedIndex: CaseStudyPerformanceMetric;
  };
  businessImpact?: {
    callVolume?: string;
    bounceRate?: string;
    leads?: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "swan-plumbing",
    business: "Swan Plumbing & Heating",
    label: "Redesign Showcase",
    type: "redesign",
    service: "Website Design & Redesign + Local SEO",
    disclaimer:
      "This is an unsolicited redesign of a real plumbing company's website, created to demonstrate our approach. We were not hired by this client. Any “impact” metrics shown are modeled estimates based on performance/UX improvements (not measured client results).",
    compactSummary:
      "A fast, mobile-first redesign with clearer service pages and stronger calls-to-action, built to capture more calls and bookings.",
    problem:
      "Outdated website that wasn't mobile-friendly. Customers searching on phones couldn't easily find services or call. Site loaded slowly, causing visitors to leave before seeing services.",
    approach:
      "Built a new mobile-first website with clear service descriptions, prominent phone number on every page, and fast loading times. Optimized for local search so customers find them when searching 'plumber near me'.",
    outcome:
      "Website now loads quickly on all devices. Clear call-to-action buttons make it easy for customers to call or book. Mobile experience matches desktop quality, capturing leads that were previously lost.",
    beforeImageUrl: "/swan-before.png",
    imageUrl: "/swan-after.png",
    originalWebsiteUrl: "https://www.callswan.com/",
    demoUrl: "https://swanplumbing.vercel.app/",
    keyTakeaways: [
      "≈80% faster load times (avg across key metrics)",
      "Mobile-first design improved conversions",
      "Clear CTAs increased lead capture",
    ],
    performance: {
      score: { before: 53, after: 94 },
      fcp: { before: 8.8, after: 1.4, unit: "s" },
      lcp: { before: 15.1, after: 3.0, unit: "s" },
      tbt: { before: 190, after: 0, unit: "ms" },
      cls: { before: 0, after: 0.045, unit: "" },
      speedIndex: { before: 10.2, after: 2.1, unit: "s" },
    },
    businessImpact: {
      callVolume: "+15–35%",
      bounceRate: "-12–28%",
      leads: "+10–30%",
    },
  },
  {
    id: "tribeca-plumbing",
    business: "Tribeca Plumbing Inc",
    label: "Redesign Showcase",
    type: "redesign",
    service: "Website Design & Redesign + Local SEO",
    disclaimer:
      "This is an unsolicited redesign of a real plumbing company's website, created to demonstrate our approach. We were not hired by this client. Any “impact” metrics shown are modeled estimates based on performance/UX improvements (not measured client results).",
    compactSummary:
      "Transformed a website that took ~36 seconds to load into a fast, mobile-friendly site designed to capture more calls and booked jobs.",
    problem:
      "Website took over 36 seconds to load—customers were leaving before they could even see services. The site was hard to navigate on phones, didn't show up well in local Google searches for Dallas/Ft. Worth area, and had confusing buttons that made it unclear how to contact them. Most visitors left immediately, costing the business potential customers every single day.",
    approach:
      "Built a lightning-fast website that loads in under 3 seconds on any device. Made the phone number and booking options impossible to miss on every page. Optimized the site so it shows up when customers search 'plumber near me' in their area. Simplified the design to build trust—showing they're licensed, insured, and available 24/7—and made it crystal clear what services they offer and how to get help.",
    outcome:
      "Website now loads ~15x faster, so customers actually see the site instead of leaving. Mobile experience is smooth and easy to use, with the phone number always visible. The design builds trust quickly and makes the next step obvious—call now or request service—so it’s set up to capture more calls and booked jobs from the same traffic.",
    beforeImageUrl: "/tribeca_before.png",
    imageUrl: "/tribeca_after.png",
    originalWebsiteUrl: "https://www.tribecaplumbinginc.com/",
    demoUrl: "https://tribecaplumbing.vercel.app/",
    keyTakeaways: [
      "Website loads 15x faster (36 seconds → 2.4 seconds)",
      "Clear emergency CTAs and booking flow",
      "Trust signals positioned to reduce hesitation",
    ],
    performance: {
      score: { before: 59, after: 96 },
      fcp: { before: 2.1, after: 1.2, unit: "s" },
      lcp: { before: 36.2, after: 2.4, unit: "s" },
      tbt: { before: 180, after: 0, unit: "ms" },
      cls: { before: 0.123, after: 0, unit: "" },
      speedIndex: { before: 7.9, after: 4.0, unit: "s" },
    },
    businessImpact: {
      callVolume: "+18–40%",
      bounceRate: "-15–35%",
      leads: "+12–32%",
    },
  },
  {
    id: "apex-auto-care",
    business: "Apex Auto Care",
    label: "New Build Showcase",
    type: "new-build",
    service: "Auto Repair Website Design & Local SEO",
    disclaimer:
      "This is a custom demonstration website built from scratch to showcase our mobile-first, high-conversion web development approach for independent auto repair shops. Any impact metrics shown are modeled estimates based on Core Web Vitals and conversion architecture.",
    compactSummary:
      "A blazing-fast, mobile-first auto repair website engineered with 1-tap emergency calling, dedicated service silos, digital inspection transparency, and 95–100 Google PageSpeed scores.",
    problem:
      "Most auto repair shop websites struggle to win high-margin repair jobs (brakes, diagnostics, transmissions) from Google. They rely on bloated templates that take 4+ seconds to load on mobile, bury their phone numbers behind nested menus, lack dedicated landing pages for core services, and fail to present clear trust credentials—causing over 60% of roadside drivers to bounce and call competitors.",
    approach:
      "Built a custom, lightning-fast web application from the ground up tailored for modern motorists. Engineered 1-tap emergency mobile dialing, dedicated high-margin service landing silos (Brakes, Engine, A/C, Diagnostics, Maintenance), transparent digital photo/video inspection proof, ASE certified trust badges, and a frictionless 2-step bay reservation flow.",
    outcome:
      "Achieved exceptional Google PageSpeed Insights results (95 Performance, 95 Accessibility, 100 Best Practices, 100 SEO) with a 1.2s First Contentful Paint, 20ms Total Blocking Time, and 0 layout shift. Designed to maximize local search capture and turn urgent motorists into booked service bays.",
    imageUrl: "/apex_autocare.png",
    demoUrl: "https://apexautocare.vercel.app/",
    keyTakeaways: [
      "95–100 Google PageSpeed scores across all 4 categories",
      "1-Tap mobile roadside calling & streamlined bay booking",
      "Dedicated service silos for brakes, diagnostics, AC & maintenance",
    ],
    performance: {
      score: { after: 95 },
      accessibility: 95,
      bestPractices: 100,
      seo: 100,
      fcp: { after: 1.2, unit: "s" },
      lcp: { after: 2.6, unit: "s" },
      tbt: { after: 20, unit: "ms" },
      cls: { after: 0, unit: "" },
      speedIndex: { after: 4.1, unit: "s" },
    },
    businessImpact: {
      callVolume: "+25–45%",
      bounceRate: "-30–50%",
      leads: "2.5–3x",
    },
  },
];

export function getCaseStudy(id: CaseStudy["id"]): CaseStudy | undefined {
  return caseStudies.find((s) => s.id === id);
}

// You said you'll always append new case studies to the end of the array.
// These helpers ensure the most recently added case study shows first.
export function getCaseStudiesNewestFirst(): CaseStudy[] {
  return [...caseStudies].reverse();
}

export function getFeaturedCaseStudies(count = 3): CaseStudy[] {
  return getCaseStudiesNewestFirst().slice(0, count);
}


