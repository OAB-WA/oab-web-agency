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
    <>
      {/* Hero */}
      <section className="relative text-white py-20 overflow-hidden">
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
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              See How We Transform Service Business Websites
            </h1>
            <p className="text-xl text-white/90">
              Demonstration projects showing our approach to building conversion-focused websites
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <Section>
        <div className="space-y-12 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.business}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {study.business}
                    </h2>
                    <p className="text-[#001B3A] font-semibold">
                      {study.service}
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-semibold text-[#001B3A] bg-[#001B3A]/10 rounded-full">
                    {study.label}
                  </span>
                </div>

                {study.disclaimer && (
                  <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                    <p className="text-sm text-gray-700">
                      <strong className="text-blue-900">Note:</strong> {study.disclaimer}
                    </p>
                  </div>
                )}

                {study.beforeImageUrl && study.imageUrl && (
                  <>
                    <div className="mb-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <p className="text-sm font-semibold text-gray-600">Original Website</p>
                            {study.originalWebsiteUrl && study.originalWebsiteUrl.trim() !== "" && (
                              <a 
                                href={study.originalWebsiteUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 hover:text-blue-800 underline"
                                onClick={() => trackOutboundLink(study.originalWebsiteUrl!, "View Original Website - Case Studies")}
                              >
                                View live →
                              </a>
                            )}
                          </div>
                          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300">
                            <Image 
                              src={study.beforeImageUrl} 
                              alt="Original plumbing website" 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-600 mb-2">Our Redesign</p>
                          <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden border-2 border-[#001B3A]">
                            <Image 
                              src={study.imageUrl} 
                              alt="Redesigned plumbing website" 
                              fill 
                              className="object-cover" 
                            />
                          </div>
                          {study.demoUrl && study.demoUrl.trim() !== "" && (
                            <a 
                              href={study.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-[#001B3A] hover:underline mt-2 inline-block"
                              onClick={() => trackOutboundLink(study.demoUrl!, "View Redesign Demo - Case Studies")}
                            >
                              View our redesign demo →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics Comparison */}
                    {study.performance && (
                      <div className="mb-6 space-y-6">
                        {/* Performance Score - Hero Section */}
                        <div className="p-8 bg-gradient-to-br from-red-50 via-orange-50 to-green-50 rounded-xl border-2 border-gray-200">
                          <div className="text-center mb-4">
                            <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                              Overall Performance Score
                            </p>
                            <div className="flex items-center justify-center gap-4 mb-2">
                              <div className="text-center">
                                <div className="text-5xl md:text-6xl font-bold text-red-600 mb-1">
                                  {study.performance.score.before}
                                </div>
                                <div className="text-xs text-gray-600">Before</div>
                              </div>
                              <div className="text-3xl text-gray-400">→</div>
                              <div className="text-center">
                                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-green-600 to-green-500 bg-clip-text text-transparent mb-1">
                                  {study.performance.score.after}
                                </div>
                                <div className="text-xs text-gray-600">After</div>
                              </div>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                              <span className="text-sm font-bold text-green-700">
                                {Math.round(((study.performance.score.after - study.performance.score.before) / study.performance.score.before) * 100)}% Improvement
                              </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-3">
                              As measured by Google PageSpeed Insights
                            </p>
                          </div>
                        </div>

                        {/* Core Web Vitals - Detailed Metrics */}
                        <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                          <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">
                            Core Web Vitals & Performance Metrics
                          </h4>
                          <div className="grid md:grid-cols-3 gap-6 mb-6">
                            {/* First Contentful Paint */}
                            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                              <div className="text-center">
                                <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                  First Contentful Paint
                                </div>
                                <div className="text-2xl font-bold text-red-600 mb-1">
                                  {study.performance.fcp.before}{study.performance.fcp.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">Before</div>
                                <div className="text-2xl font-bold text-green-600 mb-1">
                                  {study.performance.fcp.after}{study.performance.fcp.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">After</div>
                                <div className="text-xs text-green-700 font-semibold">
                                  {Math.round(((study.performance.fcp.before - study.performance.fcp.after) / study.performance.fcp.before) * 100)}% faster
                                </div>
                              </div>
                            </div>

                            {/* Largest Contentful Paint */}
                            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                              <div className="text-center">
                                <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                  Largest Contentful Paint
                                </div>
                                <div className="text-2xl font-bold text-red-600 mb-1">
                                  {study.performance.lcp.before}{study.performance.lcp.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">Before</div>
                                <div className="text-2xl font-bold text-green-600 mb-1">
                                  {study.performance.lcp.after}{study.performance.lcp.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">After</div>
                                <div className="text-xs text-green-700 font-semibold">
                                  {Math.round(((study.performance.lcp.before - study.performance.lcp.after) / study.performance.lcp.before) * 100)}% faster
                                </div>
                              </div>
                            </div>

                            {/* Total Blocking Time */}
                            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                              <div className="text-center">
                                <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                  Total Blocking Time
                                </div>
                                <div className="text-2xl font-bold text-red-600 mb-1">
                                  {study.performance.tbt.before}{study.performance.tbt.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">Before</div>
                                <div className="text-2xl font-bold text-green-600 mb-1">
                                  {study.performance.tbt.after}{study.performance.tbt.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">After</div>
                                <div className="text-xs text-green-700 font-semibold">
                                  {study.performance.tbt.after === 0 ? "100% eliminated" : `${Math.round(((study.performance.tbt.before - study.performance.tbt.after) / study.performance.tbt.before) * 100)}% faster`}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Cumulative Layout Shift */}
                            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                              <div className="text-center">
                                <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                  Cumulative Layout Shift
                                </div>
                                <div className="text-2xl font-bold text-green-600 mb-1">
                                  {study.performance.cls.before}{study.performance.cls.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">Before</div>
                                <div className="text-2xl font-bold text-green-600 mb-1">
                                  {study.performance.cls.after}{study.performance.cls.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">After</div>
                                <div className="text-xs text-green-700 font-semibold">
                                  Excellent (under 0.1)
                                </div>
                              </div>
                            </div>

                            {/* Speed Index */}
                            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                              <div className="text-center">
                                <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                                  Speed Index
                                </div>
                                <div className="text-2xl font-bold text-red-600 mb-1">
                                  {study.performance.speedIndex.before}{study.performance.speedIndex.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">Before</div>
                                <div className="text-2xl font-bold text-green-600 mb-1">
                                  {study.performance.speedIndex.after}{study.performance.speedIndex.unit}
                                </div>
                                <div className="text-xs text-gray-500 mb-2">After</div>
                                <div className="text-xs text-green-700 font-semibold">
                                  {Math.round(((study.performance.speedIndex.before - study.performance.speedIndex.after) / study.performance.speedIndex.before) * 100)}% faster
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Business Impact Section */}
                    <div className="mb-6 p-6 bg-[#001B3A] text-white rounded-xl shadow-lg">
                      <h4 className="text-lg font-bold mb-4 text-center">
                        Projected Business Impact (Industry Standards)
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400 mb-1">+40%</div>
                          <p className="text-sm text-white/80">Est. Increase in Call Volume</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400 mb-1">-53%</div>
                          <p className="text-sm text-white/80">Reduction in Bounced Visitors</p>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-green-400 mb-1">2.5x</div>
                          <p className="text-sm text-white/80">More Leads vs. Slow Competitors</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/20 text-center">
                        <p className="text-xs text-white/60 italic">
                          *Based on Google/Deloitte research: 53% of mobile visitors leave sites that take &gt;3s to load. Every 1s improvement increases conversions by up to 20%.
                        </p>
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-6">
                  <div>
                    <div className="flex items-start mb-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          className="w-4 h-4 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">The Problem</h4>
                        <p className="text-gray-600 leading-relaxed">{study.problem}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start mb-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">Our Approach</h4>
                        <p className="text-gray-600 leading-relaxed">{study.approach}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start mb-2">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">The Outcome</h4>
                        <p className="text-gray-600 leading-relaxed">{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-sm text-gray-500 mb-2">
            These are redesign showcases and demonstration projects showing our approach.
          </p>
          <p className="text-xs text-gray-400 mb-6">
            The plumbing redesign above is an unsolicited redesign of a real website, created to demonstrate our capabilities. 
            We were not hired by this client. Your results will vary based on your specific business needs.
          </p>
        </div>
      </Section>

      {/* Results Summary */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Typical Results You Can Expect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Based on industry standards and typical client outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-[#001B3A] mb-2">2-3x</div>
            <p className="text-gray-600">Typical increase in leads</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-[#001B3A] mb-2">&lt;2.5s</div>
            <p className="text-gray-600">Target page load time</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="text-5xl font-bold text-[#001B3A] mb-2">40%+</div>
            <p className="text-gray-600">Typical conversion improvement</p>
          </motion.div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#001B3A] text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More Calls & Booked Jobs?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help your service business get more phone calls, more booked jobs, and more revenue. Book a free 15-minute call (no sales pitch).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a Free Strategy Call
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Get a Free Website Audit or Consultation
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

