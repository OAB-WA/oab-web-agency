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
        "We measure success by the leads, calls, and bookings your website generates, not just how it looks.",
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
              We Build Websites That Get You <span className="text-primary-400">More Calls & Jobs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Specializing in high-converting websites for service-based businesses. We turn your online presence into a lead-generating machine.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
            Our Story
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              Most service businesses have websites that look fine but don't generate calls. They're slow, hard to use on phones, and don't convert visitors into customers. Meanwhile, competitors with better websites are getting all the jobs.
            </p>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              We started OAB Web Agency to fix that. We build websites designed specifically for service businesses. Websites that turn visitors into phone calls and booked jobs. No fancy animations or design awards. Just websites that bring you customers.
            </p>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              Our focus is simple: speed, local SEO, and getting you phone calls. We don't build flashy sites that win design awards. We build websites that pay for themselves with more calls, more jobs, and more revenue.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-neutral-50/20 backdrop-blur-sm py-20 md:py-32">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            What We Stand For
          </h2>
          <p className="text-xl text-neutral-500 font-light max-w-2xl mx-auto">Our Core Values & Mission</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-neutral-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                {value.title}
              </h3>
              <p className="text-neutral-600 font-light leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Service Businesses */}
      <Section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
            Why We Focus on Service Businesses
          </h2>
          <div className="space-y-8">
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              Home-based service businesses have unique needs. When someone's pipe bursts at 2 AM or their AC breaks in the summer, they need to find you quickly, trust you immediately, and contact you easily. Your website needs to be fast, mobile-friendly, and optimized for local search. Or they're calling your competitor.
            </p>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              We understand these needs because we've worked with plumbers, HVAC companies, electricians, landscapers, roofers, and other service-based businesses. We know what works (fast loading, clear phone numbers, local SEO) and what doesn't (slow sites, fancy animations, confusing navigation).
            </p>
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
            Let's discuss how we can build you a new website or turn your existing website into a lead-generating machine.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <CTAButton href={CALENDLY_URL} variant="primary" dark className="px-10 py-5 text-lg font-bold">
              Book a Strategy Call →
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" dark className="px-10 py-5 text-lg font-bold">
              Get Your Free Audit
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}

