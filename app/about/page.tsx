"use client";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import Image from "next/image";
import FinalCTASection from "@/components/FinalCTASection";

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
        "We understand the unique needs of local service businesses. Our websites are built specifically for auto repair shops, plumbers, HVAC companies, electricians, pest control, cleaners, landscapers, roofers, and other local service providers.",
    },
    {
      title: "Transparent & Honest",
      description:
        "No agency fluff or buzzwords. We tell you exactly what your website needs, deliver clear audit roadmaps, and build sites that pay for themselves.",
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
              Websites That Turn Local Searches <span className="text-emerald-400">Into Customers</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              We engineer fast, high-converting websites for local service businesses and auto repair shops that want more calls, bookings, and quote requests.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader align="left" className="mb-10" title="Our Story" />
          <div className="space-y-8">
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              Most local service businesses have websites that look decent on a desktop computer but fail to generate actual phone calls. They're slow to load on mobile, bury their phone number, lack dedicated service pages, and leak customers to competitors every single day.
            </p>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              We started OAB Web Agency to fix that. We build websites engineered specifically for local service businesses and independent shops. Websites that turn local search intent into booked jobs, scheduled bays, and tracked quote requests.
            </p>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              Our focus is simple: instant speed, local search visibility, and conversion architecture. We don't build generic templates that win superficial design awards—we build high-performing digital assets that pay for themselves.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-neutral-50/20 backdrop-blur-sm py-20 md:py-32">
        <div className="px-4 mb-16">
          <SectionHeader title="What We Stand For" subtitle="Our Core Values & Mission" />
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
          <SectionHeader className="mb-10" title="Why We Focus on Local Service Businesses" />
          <div className="space-y-8">
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              When someone&apos;s brakes start squeaking, their water heater leaks, or their AC stops cooling in July, they search on their phone, evaluate credibility in seconds, and call the first business they trust. If your site takes 4 seconds to load or makes it hard to call, you lose that customer instantly.
            </p>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              We understand these dynamics because we focus exclusively on local service businesses—including auto repair shops, plumbers, HVAC technicians, electricians, and contractors. We know what converts (sub-2.5s speed, 1-tap calling, clear service pages, trust proof) and what fails.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <FinalCTASection
        title={
          <>
            Ready to Get More <span className="text-primary-400">Calls & Booked Jobs?</span>
          </>
        }
        subtitle="Let's discuss how we can build you a new website from scratch or turn your existing website into a lead-generating machine."
      />
    </div>
  );
}

