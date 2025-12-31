"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BoltIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Website Should Bring You Leads — Not Just Look Good
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Most service businesses have websites that look fine but don't
            generate calls or bookings. We build websites designed to convert
            visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">Get a Free Website Audit</CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Book a 15-Minute Strategy Call
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Service Businesses Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We focus on what matters: speed, leads, and trust
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            title="Lightning Fast"
            description="Your website loads in under 2 seconds. Slow sites lose customers before they even see your services."
            icon="bolt"
          />
          <BenefitCard
            title="Built for Leads"
            description="Every page is designed to get phone calls and form submissions. No fluff, just conversion-focused design."
            icon="phone"
          />
          <BenefitCard
            title="Local SEO Optimized"
            description="We optimize your site so customers in your area find you when they search for your services."
            icon="mappin"
          />
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Build Your High-Converting Website
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple 3-step process that gets results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ProcessStep
            number="1"
            title="Free Website Audit"
            description="We analyze your current site and show you exactly what's costing you leads and customers."
          />
          <ProcessStep
            number="2"
            title="Strategy & Design"
            description="We design a website focused on your goals: more calls, more bookings, more revenue."
          />
          <ProcessStep
            number="3"
            title="Launch & Optimize"
            description="We launch your new site and continuously optimize based on real performance data."
          />
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ServiceCard
            title="Website Redesign"
            description="Complete website redesigns that convert visitors into customers. Built for speed and performance."
          />
          <ServiceCard
            title="Performance Optimization"
            description="Make your existing site faster. Improve Core Web Vitals and reduce bounce rates."
          />
          <ServiceCard
            title="Local SEO"
            description="Get found by customers in your area. Optimize for local search and Google Business Profile."
          />
          <ServiceCard
            title="Conversion Optimization"
            description="Turn more visitors into leads. Optimize forms, CTAs, and user experience for maximum conversions."
          />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="text-[#001B3A] hover:text-[#00152E] font-semibold"
          >
            View All Services →
          </Link>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-[#001B3A] text-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See What Your Website Is Costing You
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free audit and discover how many leads you're missing out on
            every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-[#001B3A] hover:bg-gray-100 transition-colors"
            >
              Get Your Free Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
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
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Websites That Turn Visitors Into Calls & Booked Jobs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            High-performance websites built for service businesses. We
            specialize in generating leads, phone calls, and booked jobs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton href="/contact" variant="secondary">
              Get a Free Website Audit
            </CTAButton>
            <CTAButton href="/contact" variant="secondary">
              Book a 15-Minute Call
            </CTAButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  const IconComponent = {
    bolt: BoltIcon,
    phone: PhoneIcon,
    mappin: MapPinIcon,
  }[icon] || BoltIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br bg-[#001B3A] text-white mb-6 shadow-lg">
        <IconComponent className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#001B3A] text-white text-2xl font-bold mb-4">
        {number}
    </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
