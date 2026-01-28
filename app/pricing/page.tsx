"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import SectionHeader from "@/components/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { CALL_CTA_HREF, CALL_CTA_LABEL, PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";
import ReviewsMarqueeSection from "@/components/ReviewsMarqueeSection";
import ProcessSection from "@/components/ProcessSection";
import { PROCESS_COPY_CHOICE_FIRST } from "@/lib/process";
import TripleGuaranteeSection from "@/components/TripleGuaranteeSection";

export default function Pricing() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  const [expandedTierFeatures, setExpandedTierFeatures] = useState<Record<string, boolean>>({});
  const [openCompareIndex, setOpenCompareIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const toggleTierFeatures = (tierName: string) => {
    setExpandedTierFeatures((prev) => ({ ...prev, [tierName]: !prev[tierName] }));
  };

  const toggleCompare = (index: number) => {
    setOpenCompareIndex(openCompareIndex === index ? null : index);
  };

  const pricingTiers = [
    {
      name: "Lead-Gen Landing Page",
      pricePrefix: "Starting at",
      priceAmount: "$950",
      description: "A high-converting single page designed specifically to turn your ad traffic into phone calls",
      features: [
        "1 conversion-focused landing page (desktop + mobile)",
        "Click-to-call + quote form",
        "Tracking for calls + form submissions",
        "Fast-loading build (no bloated templates)",
        "Ad-ready structure (headlines, proof, offer, CTA)",
        "Delivered in 3–5 business days",
        "14 days post-launch support",
      ],
      popular: false,
    },
    {
      name: "Professional Website",
      pricePrefix: "Starting at",
      priceAmount: "$2,400",
      description: "Our core package for service businesses. Everything you need to look professional and rank locally",
      features: [
        "5–7 pages (Home, Services, About, Reviews, Contact + more)",
        "Conversion-first layout + clear calls-to-action",
        "Local SEO foundation (titles, headings, internal links)",
        "Fast load time (under 2.5s target)",
        "Analytics + call/form tracking setup",
        "Delivered in 1–2 weeks",
        "30 days post-launch support",
      ],
      popular: true,
    },
    {
      name: "Market Dominator",
      pricePrefix: "Starting at",
      priceAmount: "$3,500",
      description: "The complete foundation for local search dominance—more pages, stronger trust signals, and ongoing support",
      features: [
        "10+ pages (services + service areas + trust pages)",
        "Copywriting included for core pages (scope-based)",
        "Google Business Profile setup/cleanup (if needed)",
        "Review request & display system (to build trust faster)",
        "3 months Growth Support (updates + improvements)",
        "Monthly performance check-ins & report",
        "Delivered in 2–3 weeks",
      ],
      popular: false,
    },
  ];

  const compareRows = [
    { label: "Best for", values: ["Ads / single offer", "Most service businesses", "Competitive markets"] },
    { label: "Pages", values: ["1 page", "5–7 pages", "10+ pages"] },
    { label: "Mobile-first design", values: ["Yes", "Yes", "Yes"] },
    { label: "Call + form tracking", values: ["Yes", "Yes", "Yes"] },
    { label: "Local SEO foundation", values: ["Basic", "Included", "Included + expanded"] },
    { label: "Copywriting", values: ["Light polish", "Guided / scope-based", "Included (scope-based)"] },
    { label: "Google Business Profile", values: ["—", "Optional add-on", "Setup/cleanup (if needed)"] },
    { label: "Post-launch support", values: ["14 days", "30 days", "3 months Growth Support"] },
  ];

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="relative text-white pt-32 pb-24 md:py-40 overflow-hidden -mt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/abstract_bg.png"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#000B16]/60"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Transparent Pricing for <span className="text-primary-400">Service Businesses</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              No hidden fees. No surprises. Just clear pricing that pays for itself with more calls and booked jobs—built fast and designed to convert. Payment plans available to fit your budget.
            </p>
            <p className="mt-6 text-sm md:text-base text-white/70 font-medium">
              We keep our build schedule intentionally small so every project gets senior attention.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      {/* <ReviewsMarqueeSection variant="light" className="bg-white/60 backdrop-blur-sm" /> */}

      {/* Pricing Tiers */}
      <Section className="py-24 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-[2.5rem] p-8 sm:p-10 shadow-sm border border-neutral-100 transition-all duration-500 hover:shadow-premium group ${
                tier.popular ? "order-first lg:order-none z-10 sm:border-primary-950 sm:ring-4 sm:ring-primary-50 lg:scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="hidden sm:block absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-primary-950 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-10">
                {tier.popular && (
                  <div className="sm:hidden mb-6">
                    <span className="inline-flex items-center bg-primary-950 text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {tier.name}
                </h3>
                <p className="text-neutral-500 font-light leading-relaxed mb-8">{tier.description}</p>
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-neutral-500 font-bold uppercase tracking-widest">
                    {tier.pricePrefix}
                  </span>
                  <span className="text-4xl md:text-5xl font-bold text-primary-950 tracking-tighter leading-none">
                    {tier.priceAmount}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-bold uppercase tracking-widest mt-2">One-time investment</p>
                <div className="mt-4 inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                  <svg className="w-3 h-3 text-emerald-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Payment Plans Available</span>
                </div>
              </div>

              <div className="border-b border-neutral-100 pb-8 mb-8">
                {/* Desktop/tablet: show all features */}
                <ul className="hidden sm:block space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-600 font-light text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Mobile: show key features first, expand for details */}
                <ul className="sm:hidden space-y-4">
                  {tier.features.slice(0, 5).map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-neutral-600 font-light text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <AnimatePresence initial={false}>
                  {expandedTierFeatures[tier.name] && tier.features.slice(5).length > 0 && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden sm:hidden"
                    >
                      <ul className="space-y-4 mt-4">
                        {tier.features.slice(5).map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                              <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-neutral-600 font-light text-sm leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {tier.features.slice(5).length > 0 && (
                  <button
                    type="button"
                    onClick={() => toggleTierFeatures(tier.name)}
                    className="sm:hidden mt-5 inline-flex items-center justify-center w-full text-sm font-bold text-primary-950 hover:text-primary-800 transition-colors"
                  >
                    {expandedTierFeatures[tier.name] ? "Show fewer features" : "Show all features"}
                  </button>
                )}
              </div>

              <CTAButton href="/contact" className="w-full py-5 text-lg" variant={tier.popular ? "primary" : "secondary"}>
                Get Started
              </CTAButton>
              <p className="mt-4 text-xs text-neutral-500 font-medium leading-relaxed text-center">
                Fill out the form and we'll recommend the best package for your business.
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Compare Packages */}
      <Section className="py-24 md:py-32 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            className="mb-12 md:mb-16"
            title={
              <>
                What’s Included in <span className="text-primary-600">Each Package</span>
              </>
            }
            subtitle="Clear deliverables so you know exactly what you’re getting."
          />

          {/* Mobile: accordion compare (no horizontal scrolling) */}
          <div className="md:hidden space-y-4">
            {compareRows.map((row, index) => (
              <div
                key={row.label}
                className="bg-white border border-neutral-200 rounded-[1.5rem] overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleCompare(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-base font-bold text-gray-900 tracking-tight pr-6">
                    {row.label}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openCompareIndex === index ? "bg-primary-950 text-white rotate-180" : "bg-neutral-50 text-primary-950"
                    }`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openCompareIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-neutral-100">
                        <div className="space-y-3 pt-4">
                          {pricingTiers.map((tier, tIdx) => (
                            <div
                              key={`${row.label}-${tier.name}`}
                              className={`p-4 rounded-2xl border ${
                                tier.popular ? "border-primary-950 bg-primary-950/[0.03]" : "border-neutral-200 bg-white"
                              }`}
                            >
                              <div className="flex items-center justify-between gap-4 mb-2">
                                <p className="text-sm font-bold text-gray-900 tracking-tight">
                                  {tier.name}
                                </p>
                                <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                                  {tier.priceAmount}
                                </p>
                              </div>
                              <p className="text-sm text-neutral-700 font-light leading-relaxed">
                                {row.values[tIdx]}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop/tablet: keep the existing comparison table */}
          <div className="hidden md:block overflow-x-auto rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <div className="min-w-[900px] grid grid-cols-4 gap-0">
              <div className="p-5 md:p-6 bg-neutral-50 border-b border-neutral-200">
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Includes</p>
              </div>
              {pricingTiers.map((tier) => (
                <div key={tier.name} className="p-5 md:p-6 border-b border-neutral-200">
                  <p className="text-sm font-bold text-gray-900">{tier.name}</p>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">
                    {tier.pricePrefix} {tier.priceAmount}
                  </p>
                </div>
              ))}

              {compareRows.map((row) => (
                <div key={row.label} className="contents">
                  <div className="p-5 md:p-6 bg-neutral-50 border-b border-neutral-200">
                    <p className="text-sm font-semibold text-gray-900">{row.label}</p>
                  </div>
                  {row.values.map((v, idx) => (
                    <div key={`${row.label}-${idx}`} className="p-5 md:p-6 border-b border-neutral-200">
                      <p className="text-sm text-neutral-700 font-light">{v}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-xs text-neutral-500 font-medium leading-relaxed max-w-3xl">
            “Starting at” pricing depends on scope (number of services, service areas, content needs, integrations, and timelines). We’ll confirm scope and a fixed quote on your call.
          </p>
        </div>
      </Section>

      {/* Optional Monthly Support */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader
            className="mb-12"
            title={
              <>
                Optional: Ongoing Support & <span className="text-primary-600">Growth</span>
              </>
            }
            subtitle="Your site works perfectly without ongoing support—that's the beauty of ownership. But if you want help with updates, hosting, and improvements, we've got you covered."
          />

          <div className="bg-gradient-to-br from-primary-950 to-primary-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <span className="text-sm font-bold uppercase tracking-widest">Optional Add-On</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Performance & Growth Plan</h3>
                <p className="text-white/80 font-light leading-relaxed mb-6">
                  Only if you want ongoing support—your site works perfectly without it. This plan is completely optional and you can cancel anytime.
                </p>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">$150</span>
                  <span className="text-white/60 font-light">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Managed hosting (fast, secure, reliable)",
                    "Monthly speed audits & optimization",
                    "Security updates & monitoring",
                    "Small content changes & updates",
                    "Priority support (direct access)",
                    "Monthly performance reports"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                        <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white/90 font-light text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <CTAButton href={CALL_CTA_HREF} variant="secondary" dark className="w-full sm:w-auto">
                  Learn More →
                </CTAButton>
              </div>
              <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">Why This Is Optional</p>
                <p className="text-white/80 font-light leading-relaxed mb-4">
                  Unlike monthly subscription agencies, your OAB website works perfectly on its own. You own it, it's fast, and it converts—no monthly fees required.
                </p>
                <p className="text-white/80 font-light leading-relaxed">
                  This plan is only for businesses that want ongoing help with updates, hosting, and improvements. Most clients don't need it, but it's there if you do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Optional Add-On: Google Ads */}
      <Section className="py-24 md:py-32 bg-neutral-50/50">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeader
            className="mb-12"
            title={
              <>
                Optional Add‑On: Google Ads <span className="text-primary-600">Accelerator</span>
              </>
            }
            subtitle="If you want faster results, Ads can turn your new landing pages into calls quickly. We keep this tightly scoped, tracking-first, and optional."
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-neutral-100">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
                <span className="text-sm font-bold uppercase tracking-widest text-primary-950">Launch Setup</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Build the campaign the right way</h3>
              <p className="text-neutral-600 font-light leading-relaxed mb-8">
                We set up conversion tracking, call tracking, and a clean campaign structure so your spend is measurable and optimized from day one.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Account + campaign build (Search)",
                  "Conversion setup (calls + forms)",
                  "Landing page alignment (offer, proof, CTA)",
                  "Service areas + scheduling rules",
                  "Negative keywords + basic guardrails",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-neutral-700 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <CTAButton href="/contact" className="w-full sm:w-auto">
                Get an Ads Quote
              </CTAButton>
              <p className="mt-4 text-xs text-neutral-500 font-medium leading-relaxed">
                Ad spend is paid directly to Google. Pricing depends on scope and service area count.
              </p>
            </div>

            <div className="bg-primary-950 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl border border-white/10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-bold uppercase tracking-widest">Monthly Management</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Optimize weekly, not “set and forget”</h3>
              <p className="text-white/80 font-light leading-relaxed mb-8">
                We manage bids, search terms, negatives, and landing page experiments so you get more qualified calls and booked jobs for the same budget.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Weekly search term cleanup + negatives",
                  "Budget + bid adjustments",
                  "Ad copy testing (high-intent keywords)",
                  "Landing page iteration recommendations",
                  "Simple performance reporting",
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90 font-light text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <CTAButton href={CALL_CTA_HREF} variant="secondary" dark className="w-full sm:w-auto">
                {CALL_CTA_LABEL}
              </CTAButton>
              <p className="mt-4 text-xs text-white/60 font-medium leading-relaxed">
                Note: Our Calls or It’s Free guarantee applies to website/SEO deliverables (tracking + page performance). Ad performance depends on spend, competition, and seasonality.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* What Happens Next */}
      <ProcessSection variant="light" copy={PROCESS_COPY_CHOICE_FIRST} />

      {/* Guarantee Section */}
      <TripleGuaranteeSection />

      {/* Speed Optimization Section */}
      <Section className="py-24 md:py-32 bg-neutral-50/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-neutral-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                </svg>
                Already have a website?
              </div>
              <SectionHeader
                align="left"
                className="mb-8"
                title={
                  <>
                    Website Speed <span className="text-primary-600">Optimization</span>
                  </>
                }
                subtitle="If your site takes more than 3 seconds to load, around half of your visitors leave. We'll fix your slow WordPress or Wix site and make it load instantly."
              />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Make your site feel instant (especially on mobile)",
                  "Fix slow images, heavy plugins, and bloated themes",
                  "Reduce lag, stutters, and “loading…” moments",
                  "Improve SEO signals tied to speed",
                  "Before/after speed report (proof included)",
                  "Implementation—not just an audit"
                ].map((item) => (
                  <li key={item} className="flex items-center text-neutral-600">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <CTAButton href={PRIMARY_CTA_HREF}>{PRIMARY_CTA_LABEL}</CTAButton>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-gray-900">Starting at $1,000</span>
                  <span className="text-xs text-neutral-400 font-bold uppercase tracking-widest">One-time investment</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-primary-500/10 blur-3xl rounded-full"></div>
                <div className="relative bg-white p-8 rounded-3xl border border-neutral-100 shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Page Speed Score</span>
                    <span className="text-emerald-500 font-bold text-2xl">98/100</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-4 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[98%] transition-all duration-1000"></div>
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-1/2 bg-neutral-100 rounded-full"></div>
                      <div className="h-2 w-4 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-1/3 bg-neutral-100 rounded-full"></div>
                      <div className="h-2 w-4 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="h-2 w-2/3 bg-neutral-100 rounded-full"></div>
                      <div className="h-2 w-4 bg-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Competitor Comparison */}
      <Section className="py-24 md:py-32 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            className="mb-12 md:mb-16"
            title={
              <>
                How OAB Compares to <span className="text-primary-600">Monthly Subscription Agencies</span>
              </>
            }
            subtitle="We're not saying monthly agencies are bad—they work for some businesses. But if you want to own your site and save money long-term, OAB is the better choice."
          />

          <div className="overflow-x-auto rounded-[2rem] border border-neutral-200 bg-white shadow-sm">
            <div className="min-w-[900px]">
              <div className="grid grid-cols-3 gap-0">
                <div className="p-5 md:p-6 bg-neutral-50 border-b border-neutral-200">
                  <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Feature / Service</p>
                </div>
                <div className="p-5 md:p-6 bg-red-50/50 border-b border-neutral-200">
                  <p className="text-sm font-bold text-gray-900">Monthly Subscription Agencies</p>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">Example: $99–$427/mo</p>
                </div>
                <div className="p-5 md:p-6 bg-emerald-50/50 border-b border-neutral-200">
                  <p className="text-sm font-bold text-gray-900">OAB Web Agency</p>
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mt-1">$950–$3,500 one-time</p>
                </div>

                {[
                  { label: "Initial Cost", values: ["$99–$427/mo", "Starting at $950 one-time"] },
                  { label: "2-Year Total Cost", values: ["$2,376–$10,248", "$950–$3,500"] },
                  { label: "Ownership", values: ["You rent it (monthly fees forever)", "You own 100% of code & assets"] },
                  { label: "What happens if you cancel?", values: ["You lose your site", "You keep everything"] },
                  { label: "Support", values: ["Included (but you pay forever)", "Optional $150/mo if you want it"] },
                  { label: "Customization", values: ["Limited by their platform/templates", "Fully custom, no limits"] },
                  { label: "Speed Guarantee", values: ["Usually slower (templates/bloat)", "Hand-coded, <2.5s guaranteed"] },
                  { label: "Focus", values: ["All-in-one (website + social + ads)", "Specialized: website + SEO for service businesses"] },
                  { label: "Results Guarantee", values: ["Rarely offered", "30-day calls or booked jobs guarantee or don't pay"] },
                ].map((row) => (
                  <div key={row.label} className="contents">
                    <div className="p-5 md:p-6 bg-neutral-50 border-b border-neutral-200">
                      <p className="text-sm font-semibold text-gray-900">{row.label}</p>
                    </div>
                    <div className="p-5 md:p-6 border-b border-neutral-200">
                      <p className="text-sm text-neutral-700 font-light">{row.values[0]}</p>
                    </div>
                    <div className="p-5 md:p-6 border-b border-neutral-200">
                      <p className="text-sm text-neutral-700 font-light font-semibold text-emerald-700">{row.values[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-blue-50/50 rounded-[2rem] border border-blue-100">
            <p className="text-sm text-neutral-700 font-light leading-relaxed">
              <span className="font-bold text-blue-900">The Bottom Line:</span> Monthly agencies are great if you want everything bundled and don't mind paying forever. OAB is better if you want to own your site, save money long-term, and work with specialists who focus on service business results.
            </p>
          </div>
        </div>
      </Section>

      {/* Custom Quote Section */}
      <Section className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                align="left"
                className="mb-8"
                title="Need a Custom Solution?"
                subtitle="Every service business has different needs. If you need a custom package or have specific requirements, we'll create a tailored solution that fits your business and budget."
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/contact">Get a Custom Quote</CTAButton>
              </div>
            </div>
            <div className="bg-neutral-50/50 rounded-[2.5rem] p-10 border border-neutral-100 shadow-sm">
              <SectionHeader
                align="left"
                size="md"
                className="mb-8"
                title="What’s Included:"
              />
              <div className="space-y-4">
                {[
                  "Detailed project scope",
                  "Timeline & milestones",
                  "Transparent pricing",
                  "Support & maintenance options"
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary-950 text-white flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-neutral-50/50 py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader className="mb-16" title="Pricing FAQ" />
          <div className="space-y-6">
            {[
              {
                q: "Do you offer payment plans?",
                a: "Yes! We offer flexible payment plans for all packages. Most clients choose 50% upfront and 50% upon completion, but we can create a custom schedule that fits your budget (e.g., 3-month payment plan). Contact us to discuss options."
              },
              {
                q: "Why should I pay upfront instead of monthly?",
                a: "Great question! Monthly subscriptions seem cheaper, but they add up fast. A $249/mo plan costs $5,976 over 2 years—more than double our Professional Website package ($2,400). Plus, with OAB, you own your site forever. If you stop paying a monthly agency, you lose your site. With OAB, you keep everything. We also offer payment plans (50% upfront, 50% on completion) to make it easier."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Your site works perfectly without ongoing support—that's the beauty of ownership. But if you want help with updates, hosting, and improvements, we offer an optional 'Performance & Growth Plan' for $150/month. It includes managed hosting, monthly speed audits, security updates, and small content changes. It's completely optional and you can cancel anytime."
              },
              {
                q: "How is OAB different from monthly subscription agencies?",
                a: "Monthly agencies rent you a website—you pay forever and if you stop, you lose it. OAB sells you a website—you pay once, own it forever, and it's yours to keep. Think of it like buying vs renting a house. We also focus specifically on service businesses and guarantee results (30-day calls or booked jobs guarantee), which most monthly agencies don't. Over 2 years, you'll save $4,800+ compared to typical monthly plans."
              },
              {
                q: "Can I add services later?",
                a: "Absolutely! Many clients start with one service and add more as they see results. We'll prorate any additional services based on your existing package."
              },
              {
                q: "Can you fix my current website?",
                a: "Yes. If you aren’t ready for a full redesign, we offer a standalone Speed Optimization service starting at $1,000. We’ll audit and implement improvements so the site feels faster and customers stop bouncing."
              },
              {
                q: "Do you offer refunds?",
                a: "Yes. Our 'Calls or It's Free' guarantee: If inbound calls or booked jobs do not increase within 30 days of website launch, you don't pay. Calls are tracked via call tracking, and booked jobs are tracked via form submissions or booking system integrations. The client must answer calls during normal business hours and respond to booking requests promptly. Website delivery is 1–2 weeks for new sites/redesigns or 2–3 weeks for complete packages (assumes prompt client feedback and content delivery). Pages are optimized to load under 2.5 seconds or we fix it at no cost."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-neutral-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-xl font-bold text-gray-900 pr-8 tracking-tight group-hover:text-primary-600 transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openFAQIndex === index ? "bg-primary-950 text-white rotate-180" : "bg-neutral-50 text-primary-950"
                  }`}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 border-t border-neutral-50 mt-2">
                        <p className="text-neutral-600 leading-relaxed font-light text-lg pt-6">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-primary-950 text-white py-24 md:py-40 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto px-4">
          <SectionHeader
            variant="dark"
            className="mb-10 md:mb-12"
            title={
              <>
                Ready to Get More Calls & <span className="text-primary-400">Booked Jobs?</span>
              </>
            }
            subtitle="Book a quick call to get a fixed scope and quote. If it’s a fit, we can usually start within the next available build slot."
          />
          <p className="text-sm text-white/60 font-medium mb-10">
            Prefer to start with a free audit? We’ll show exactly what’s holding your site back and what to fix first.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <CTAButton href={CALL_CTA_HREF} variant="primary" dark className="px-10 py-5 text-lg font-bold">
              {CALL_CTA_LABEL}
            </CTAButton>
            <CTAButton href={PRIMARY_CTA_HREF} variant="secondary" dark className="px-10 py-5 text-lg font-bold">
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}

