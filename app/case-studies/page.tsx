"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";
import { trackOutboundLink } from "@/lib/gtag";

export default function CaseStudies() {
  const caseStudies = [
    {
      business: "Plumbing Company",
      label: "Redesign Showcase",
      service: "Website Design & Redesign + Local SEO",
      disclaimer: "This is an unsolicited redesign of a real plumbing company's website, created to demonstrate our approach. We were not hired by this client.",
      problem: "Outdated website that wasn't mobile-friendly. Customers searching on phones couldn't easily find services or call. Site loaded slowly, causing visitors to leave before seeing services.",
      approach: "Built a new mobile-first website with clear service descriptions, prominent phone number on every page, and fast loading times. Optimized for local search so customers find them when searching 'plumber near me'.",
      outcome: "Website now loads quickly on all devices. Clear call-to-action buttons make it easy for customers to call or book. Mobile experience matches desktop quality, capturing leads that were previously lost.",
      beforeImageUrl: "/swan-before.png",
      imageUrl: "/swan-after.png",
      originalWebsiteUrl: "https://www.callswan.com/",
      demoUrl: "https://swanplumbing.vercel.app/",
      // Real Core Web Vitals data from Google PageSpeed Insights
      performance: {
        score: { before: 53, after: 94 },
        fcp: { before: 8.8, after: 1.4, unit: "s" },
        lcp: { before: 15.1, after: 3.0, unit: "s" },
        tbt: { before: 190, after: 0, unit: "ms" },
        cls: { before: 0, after: 0.045, unit: "" },
        speedIndex: { before: 10.2, after: 2.1, unit: "s" },
      },
    },
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
              See How We Transform Service <span className="text-primary-400">Business Websites</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Demonstration projects showing our approach to building conversion-focused websites that actually generate revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <Section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="space-y-24 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.business}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-premium transition-all duration-500 shadow-sm"
            >
              <div className="p-10 md:p-14">
                {/* Header with Links */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                  <div>
                    <span className="inline-block px-4 py-1 bg-primary-50 text-primary-950 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                      {study.label}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
                      {study.business}
                    </h3>
                    <p className="text-primary-600 font-medium mt-2">
                      {study.service}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {study.originalWebsiteUrl && (
                      <a 
                        href={study.originalWebsiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all active:scale-95"
                        onClick={() => trackOutboundLink(study.originalWebsiteUrl!, "View Original Website - Case Studies")}
                      >
                        Original Site
                      </a>
                    )}
                    {study.demoUrl && (
                      <a 
                        href={study.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-primary-950 text-white rounded-2xl text-base font-bold hover:bg-primary-900 transition-all shadow-md hover:shadow-xl active:scale-95"
                        onClick={() => trackOutboundLink(study.demoUrl!, "View Redesign Demo - Case Studies")}
                      >
                        Live Demo
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {study.disclaimer && (
                  <div className="mb-12 p-6 bg-blue-50/50 border border-blue-100 rounded-3xl flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">i</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed italic font-light">
                      {study.disclaimer}
                    </p>
                  </div>
                )}

                <div className="grid lg:grid-cols-2 gap-16 mb-16">
                  {/* Detailed Text Sections */}
                  <div className="space-y-12">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">!</div>
                        <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">The Problem</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-light text-xl">
                        {study.problem}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</div>
                        <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Our Approach</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-light text-xl">
                        {study.approach}
                      </p>
                    </div>
                        <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">★</div>
                        <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">The Outcome</h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed font-light text-xl">
                        {study.outcome}
                      </p>
                          </div>
                          </div>

                  <div className="space-y-8">
                    {/* Visual Comparison */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Original</p>
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm grayscale opacity-40 transition-all hover:grayscale-0 hover:opacity-100">
                          <Image src={study.beforeImageUrl || ""} alt="" fill className="object-cover" />
                        </div>
                          </div>
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold text-primary-950 uppercase tracking-widest">Redesign</p>
                        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-2 border-primary-950 shadow-lg">
                          <Image src={study.imageUrl || ""} alt="" fill className="object-cover" />
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics Comparison */}
                    {study.performance && (
                      <div className="p-10 bg-gray-50/50 rounded-[2.5rem] border border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                          <h5 className="font-bold text-gray-900 uppercase tracking-widest text-[11px]">Core Web Vitals Comparison</h5>
                          <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-bold uppercase tracking-wider">
                            Detailed Report
                          </div>
                        </div>

                        {/* Main Score */}
                        <div className="flex items-end gap-5 mb-10 pb-10 border-b border-gray-200/50">
                          <div className="text-7xl font-bold text-emerald-500 tracking-tighter leading-none">
                            {study.performance.score.after}
                          </div>
                          <div className="mb-2 text-gray-400 font-light text-sm">
                            Overall Score from <span className="line-through">{study.performance.score.before}</span>
                              </div>
                            </div>

                        {/* Detailed Metrics Grid */}
                        <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                          {[
                            { label: 'FCP', before: study.performance.fcp.before, after: study.performance.fcp.after, unit: study.performance.fcp.unit },
                            { label: 'LCP', before: study.performance.lcp.before, after: study.performance.lcp.after, unit: study.performance.lcp.unit },
                            { label: 'TBT', before: study.performance.tbt.before, after: study.performance.tbt.after, unit: study.performance.tbt.unit },
                            { label: 'CLS', before: study.performance.cls.before, after: study.performance.cls.after, unit: study.performance.cls.unit }
                          ].map((metric) => (
                            <div key={metric.label}>
                              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{metric.label}</p>
                              <div className="flex items-center gap-3">
                                <span className="text-gray-400 line-through text-sm">{metric.before}{metric.unit}</span>
                                <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                </svg>
                                <span className="text-xl font-bold text-gray-900">{metric.after}{metric.unit}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    </div>
                  </div>

                {/* Business Impact for the case study */}
                <div className="mt-12 p-8 bg-primary-950 text-white rounded-[2rem] shadow-xl">
                   <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                       <div className="text-3xl font-bold text-emerald-400 mb-1">+40%</div>
                       <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Call Volume</p>
                      </div>
                      <div>
                       <div className="text-3xl font-bold text-emerald-400 mb-1">-53%</div>
                       <p className="text-xs text-white/60 uppercase tracking-widest font-bold">Bounce Rate</p>
                      </div>
                      <div>
                       <div className="text-3xl font-bold text-emerald-400 mb-1">2.5x</div>
                       <p className="text-xs text-white/60 uppercase tracking-widest font-bold">More Leads</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20 max-w-3xl mx-auto px-4">
          <p className="text-sm text-neutral-400 mb-4 font-light italic">
            *Redesign showcases are demonstration projects created to illustrate our approach. Results vary based on business needs.
          </p>
        </div>
      </Section>

      {/* Results Summary */}
      <Section className="bg-neutral-50/20 backdrop-blur-sm py-20 md:py-32">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Typical Results You Can Expect
          </h2>
          <p className="text-xl text-neutral-600 font-light max-w-2xl mx-auto">
            Based on industry standards and typical client outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          <div className="text-center p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm transition-all hover:shadow-md">
            <div className="text-6xl font-bold text-primary-950 mb-4 tracking-tighter">2-3x</div>
            <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">Lead Increase</p>
          </div>
          <div className="text-center p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm transition-all hover:shadow-md">
            <div className="text-6xl font-bold text-primary-950 mb-4 tracking-tighter">&lt;2.5s</div>
            <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">Load Time</p>
          </div>
          <div className="text-center p-10 rounded-[2.5rem] bg-white border border-neutral-100 shadow-sm transition-all hover:shadow-md">
            <div className="text-6xl font-bold text-primary-950 mb-4 tracking-tighter">40%+</div>
            <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">Conversion Lift</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative bg-primary-950 text-white py-24 md:py-40 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            Ready to Get More <span className="text-primary-400">Calls & Booked Jobs?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
            Let's discuss how we can help your service business get more phone calls, more booked jobs, and more revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <CTAButton href={CALENDLY_URL} variant="primary" dark className="px-10 py-5 text-lg font-bold">
              Book Your Free Call →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" dark className="px-10 py-5 text-lg font-bold">
              Get a Free Website Audit
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}
