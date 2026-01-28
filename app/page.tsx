"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BoltIcon, ChartBarIcon, MapPinIcon, PaintBrushIcon, PhoneIcon } from "@/components/Icons";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import SectionHeader from "@/components/SectionHeader";
import { trackOutboundLink, trackCTAClick } from "@/lib/gtag";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import { CALL_CTA_HREF, CALL_CTA_LABEL, PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";
import ReviewsMarqueeSection from "@/components/ReviewsMarqueeSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import { PROCESS_COPY_CHOICE_FIRST } from "@/lib/process";

export default function Home() {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition */}
      <Section className="bg-neutral-50/50">
        <div className="text-center max-w-4xl mx-auto py-8">
          <SectionHeader
            className="mb-12"
            title={
              <>
                Your Website Should Bring You Leads:{" "}
                <span className="text-primary-600">Not Just Look Good</span>
              </>
            }
            subtitle={
              <>
                Most service businesses have websites that look fine but don't generate calls or bookings. We build websites designed to convert visitors into customers.
              </>
            }
          />
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <CTAButton href={PRIMARY_CTA_HREF} className="px-8 py-4 text-lg">
              {PRIMARY_CTA_LABEL}
            </CTAButton>
            <CTAButton href={CALL_CTA_HREF} variant="secondary" className="px-8 py-4 text-lg">
              {CALL_CTA_LABEL}
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white/60 backdrop-blur-sm">
        <SectionHeader
          className="mb-20"
          title="Why Service Businesses Choose Us"
          subtitle="We focus on what matters: speed, leads, and trust"
        />

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            title="Lightning Fast"
            description="Your website loads in under 2.5 seconds. Slow sites lose customers before they even see your services."
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

      <ReviewsMarqueeSection variant="light" />

      {/* Demo Case Studies Section */}
      <Section className="bg-white/60 backdrop-blur-sm">
        <SectionHeader
          className="mb-12"
          title="See How We Transform Service Business Websites"
          subtitle="Demonstration projects showing our approach to building conversion-focused websites"
        />

        <div className="space-y-12 max-w-6xl mx-auto">
          <CaseStudyCarousel
            studies={getFeaturedCaseStudies(2)}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-2">
            These are redesign showcases and demonstration projects showing our approach.
          </p>
          <p className="text-xs text-gray-400 mb-6">
            The redesigns above are unsolicited demonstration projects created to show our approach. We were not hired by these clients.
            Your results will vary based on your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              href={PRIMARY_CTA_HREF}
              variant="primary"
              trackingLabel={PRIMARY_CTA_LABEL}
              trackingLocation="Demo Case Studies"
            >
              {PRIMARY_CTA_LABEL}
            </CTAButton>
            <CTAButton
              href={CALL_CTA_HREF}
              variant="secondary"
              trackingLabel={CALL_CTA_LABEL}
              trackingLocation="Demo Case Studies"
            >
              {CALL_CTA_LABEL}
            </CTAButton>
          </div>
        </div>
      </Section>

      <ProcessSection variant="light" copy={PROCESS_COPY_CHOICE_FIRST} />

      {/* Services Preview */}
      <Section className="bg-white/60 backdrop-blur-sm">
        <SectionHeader
          className="mb-20"
          title="What We Do"
          subtitle="Specialized solutions to help your service business dominate local search"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            icon="paintbrush"
            title="Website Design & Redesign"
            description="Build a new website from scratch or redesign your existing site. Converts visitors into customers. Built for speed and performance."
          />
          <ServiceCard
            icon="bolt"
            title="Performance Optimization"
            description="Make your existing site faster. Improve Core Web Vitals and reduce bounce rates."
          />
          <ServiceCard
            icon="mappin"
            title="Local SEO"
            description="Get found by customers in your area. Optimize for local search and Google Business Profile."
          />
          <ServiceCard
            icon="chartbar"
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

      {/* Client Logos Section */}
      {/* <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Service Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped service businesses across the US get more leads and customers
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 bg-gray-100 rounded-lg"
              >
                <span className="text-gray-400 text-sm font-medium">
                  Client Logo {i}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Add your client logos here to build trust and credibility
          </p>
        </div>
      </Section> */}

      <StatsSection />

      {/* CTA Section */}
      <Section className="relative bg-gradient-to-br from-[#001B3A] via-[#00152E] to-[#001022] text-white overflow-hidden py-24 md:py-40">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-primary-500/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            Stop Missing Leads With Your <span className="text-primary-400">Current Website</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
            Get a free audit and discover how many leads you're missing out on
            every month. No sales pitch: just real data and a plan to win.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link
              href={PRIMARY_CTA_HREF}
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-950 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              {PRIMARY_CTA_LABEL}
            </Link>
            <Link
              href={CALL_CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-2xl text-lg font-bold hover:bg-white/10 transition-all active:scale-[0.98]"
            >
              {CALL_CTA_LABEL}
            </Link>
          </div>
          
          {/* Guarantee Badge */}
          <div className="max-w-2xl mx-auto pt-12 border-t border-white/10">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white tracking-tight">Calls or It's Free Guarantee</span>
              </div>
              <p className="text-base text-white/60 font-light leading-relaxed">
                If inbound calls or booked jobs do not increase within 30 days of website launch, you don't pay. Calls are tracked via call tracking, and booked jobs are tracked via form submissions or booking system integrations. The client must answer calls during normal business hours and respond to booking requests promptly. Website delivery is 1–2 weeks for new sites/redesigns or 2–3 weeks for complete packages (assumes prompt client feedback and content delivery). Pages are optimized to load under 2.5 seconds or we fix it at no cost.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden min-h-[100dvh] flex items-center -mt-20">
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
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:py-20 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            Websites That Turn Visitors Into <span className="text-primary-400">Calls & Booked Jobs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            High-performance websites built for service businesses. We
            specialize in generating leads, phone calls, and booked jobs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <CTAButton href={PRIMARY_CTA_HREF} variant="primary" dark className="px-10 py-5 text-lg font-bold">
              {PRIMARY_CTA_LABEL}
            </CTAButton>
            <CTAButton href={CALL_CTA_HREF} variant="secondary" dark className="px-10 py-5 text-lg font-bold">
              {CALL_CTA_LABEL}
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
      className="bg-white p-10 rounded-[2rem] shadow-sm border border-neutral-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-neutral-50 text-primary-950 mb-8 group-hover:bg-primary-950 group-hover:text-white transition-colors duration-300">
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-neutral-600 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: "paintbrush" | "bolt" | "mappin" | "chartbar";
  title: string;
  description: string;
}) {
  const Icon = {
    paintbrush: PaintBrushIcon,
    bolt: BoltIcon,
    mappin: MapPinIcon,
    chartbar: ChartBarIcon,
  }[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-[2.75rem] p-[1px] bg-gradient-to-br from-primary-950/12 via-black/5 to-transparent transition-transform duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-[2.7rem] border border-black/5 bg-white px-10 py-10">
        <div className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full bg-primary-950/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-primary-950/5 blur-3xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-7">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary-950 text-white">
              <Icon className="h-7 w-7" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              Service
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
            {title}
          </h3>
          <p className="mt-4 text-neutral-600 leading-relaxed font-light">
            {description}
          </p>

          <Link
            href="/services"
            className="mt-8 inline-flex items-center text-primary-950 font-semibold"
          >
            Learn more{" "}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// StatCard moved to components/StatsSection.tsx
