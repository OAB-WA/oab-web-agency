"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";

export default function CaseStudies() {
  const caseStudies = [
    {
      business: "Plumbing Company",
      label: "Demo Project",
      service: "Website Design & Redesign + Local SEO",
      problem: "Outdated website that wasn't mobile-friendly. Customers searching on phones couldn't easily find services or call. Site loaded slowly, causing visitors to leave before seeing services.",
      approach: "Built a new mobile-first website with clear service descriptions, prominent phone number on every page, and fast loading times. Optimized for local search so customers find them when searching 'plumber near me'.",
      outcome: "Website now loads quickly on all devices. Clear call-to-action buttons make it easy for customers to call or book. Mobile experience matches desktop quality, capturing leads that were previously lost.",
    },
    {
      business: "HVAC Company",
      label: "Concept Redesign",
      service: "Performance Optimization + Conversion Optimization",
      problem: "Existing website was slow and cluttered. Contact form was hard to find, and service pages didn't clearly explain what they offer. Customers were confused and leaving without contacting.",
      approach: "Redesigned with focus on clarity and speed. Simplified navigation, made contact information prominent, and created clear service pages. Optimized images and code for faster loading.",
      outcome: "Faster loading times keep visitors engaged. Clear service descriptions help customers understand offerings immediately. Prominent contact options make it easy to get quotes and book appointments.",
    },
    {
      business: "Electrical Services",
      label: "Demo Project",
      service: "Complete Website Design & Redesign",
      problem: "No website existed. Business relied solely on word-of-mouth and referrals. Missing out on customers searching online for electrical services in their area.",
      approach: "Built a complete website from scratch focused on local SEO and conversion. Included service pages, customer testimonials, clear pricing information, and easy booking options. Optimized for 'electrician [city]' searches.",
      outcome: "Now visible to customers searching online. Website clearly communicates services and expertise. Easy-to-use contact forms and phone numbers capture leads 24/7. Local SEO helps them rank for area-specific searches.",
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
          <p className="text-sm text-gray-500 mb-6">
            These are demonstration projects showing our approach. Your results will vary based on your specific business needs.
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

