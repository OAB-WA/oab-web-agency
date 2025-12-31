"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CaseStudies() {
  const caseStudies = [
    {
      business: "Example: Plumbing Company",
      service: "Website Redesign + Local SEO",
      results: [
        "2-3x increase in phone calls",
        "40-50% improvement in page load speed",
        "Improved local search rankings",
        "2-3x increase in form submissions",
      ],
      description:
        "A plumbing company had an outdated website that wasn't generating calls. Customers were leaving before the site even loaded. After a redesign focused on speed, mobile experience, and local SEO, they went from 2-3 calls a week to 10-15 calls a week. The investment paid for itself in the first month.",
    },
    {
      business: "Example: HVAC Company",
      service: "Performance Optimization + Conversion Optimization",
      results: [
        "50-60% reduction in bounce rate",
        "Under 3 second page load time (down from 8+ seconds)",
        "30-40% increase in contact form submissions",
        "Improved Core Web Vitals scores",
      ],
      description:
        "An HVAC company's website was so slow (8+ seconds to load), customers were leaving before they could even see the services. After speed optimization and conversion improvements, page load time dropped to under 3 seconds and they're now getting 3x more leads. Best $1,500 they spent all year.",
    },
    {
      business: "Example: Electrical Services",
      service: "Complete Website Redesign",
      results: [
        "3-4x increase in monthly leads",
        "Mobile-friendly design (was not mobile-responsive)",
        "Improved Google Business Profile visibility",
        "Better user experience across all devices",
      ],
      description:
        "An electrical services company needed a complete website overhaul. Their old site wasn't mobile-friendly (most customers search on phones) and had terrible conversion rates. The new site focused on speed, mobile experience, and clear calls-to-action. Result: 3-4x more monthly leads and now ranking on page 1 for local searches.",
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
              Real Results From Plumbers, HVAC Companies & Electricians
            </h1>
            <p className="text-xl text-white/90">
              See typical outcomes service businesses achieve — more calls, more jobs, more revenue
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <Section>
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.business}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {study.business}
                  </h2>
                  <p className="text-[#001B3A] font-semibold">
                    {study.service}
                  </p>
                </div>

                <p className="text-lg text-gray-600 mb-8">
                  {study.description}
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {study.results.map((result) => (
                    <div
                      key={result}
                      className="flex items-start bg-gray-50 p-4 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-900 font-medium">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Results Summary */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Typical Results You Can Expect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Based on real results from plumbers, HVAC companies, and electricians we've worked with
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
            <div className="text-5xl font-bold text-[#001B3A] mb-2">&lt;3s</div>
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
            <CTAButton href="/contact" variant="secondary">
              Book a Free Strategy Call
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Get a Free Website Audit
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

