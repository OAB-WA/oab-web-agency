"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Image from "next/image";
import { CALENDLY_URL } from "@/lib/constants";

export default function About() {
  const values = [
    {
      title: "Results-Driven",
      description:
        "We measure success by the leads, calls, and bookings your website generates — not just how it looks.",
    },
    {
      title: "Performance-First",
      description:
        "Every website we build is optimized for speed and Core Web Vitals. Fast sites convert better and rank higher.",
    },
    {
      title: "Service Business Focus",
      description:
        "We understand the unique needs of service businesses. Our websites are built specifically for plumbers, HVAC companies, electricians, landscapers, roofers, cleaners, and other service-based businesses.",
    },
    {
      title: "Transparent & Honest",
      description:
        "No agency fluff or buzzwords. We tell you exactly what your website needs and why it matters for your business.",
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
              We Build Websites That Get You More Calls & Jobs
            </h1>
            <p className="text-xl text-white/90">
              Specializing in high-converting websites for service-based businesses. We work with plumbers, HVAC companies, electricians, landscapers, roofers, and other trades.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-4">
              Most service businesses have websites that look fine but don't generate calls. They're slow, hard to use on phones, and don't convert visitors into customers. Meanwhile, competitors with better websites are getting all the jobs.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              We started OAB Web Agency to fix that. We build websites designed specifically for service businesses — websites that turn visitors into phone calls and booked jobs. No fancy animations or design awards. Just websites that bring you customers.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our focus is simple: speed, local SEO, and getting you phone calls. We don't build flashy sites that win design awards. We build websites that pay for themselves with more calls, more jobs, and more revenue.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Stand For
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Service Businesses */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why We Focus on Service Businesses
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Home-based service businesses have unique needs. When someone's pipe bursts at 2 AM or their AC breaks in the summer, they need to find you quickly, trust you immediately, and contact you easily. Your website needs to be fast, mobile-friendly, and optimized for local search — or they're calling your competitor.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            We understand these needs because we've worked with plumbers, HVAC companies, electricians, landscapers, roofers, and other service-based businesses. We know what works (fast loading, clear phone numbers, local SEO) and what doesn't (slow sites, fancy animations, confusing navigation).
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-[#001B3A] text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get More Calls & Booked Jobs?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can build you a new website or turn your existing website into a lead-generating machine that actually pays for itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a Strategy Call
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Get a Free Audit or Consultation
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}

