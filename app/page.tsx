"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  BoltIcon,
  ChartBarIcon,
  MapPinIcon,
  PaintBrushIcon,
  PhoneIcon,
  SparklesIcon,
} from "@/components/Icons";
import ProjectShowcaseGrid from "@/components/ProjectShowcaseGrid";
import SectionHeader from "@/components/SectionHeader";
import { trackCTAClick } from "@/lib/gtag";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import {
  CALL_CTA_HREF,
  CALL_CTA_LABEL,
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
  PRIMARY_CTA_LABEL_LONG,
} from "@/lib/cta";
import ReviewsMarqueeSection from "@/components/ReviewsMarqueeSection";
import ProcessSection from "@/components/ProcessSection";
import StatsSection from "@/components/StatsSection";
import ExampleAuditOutputSection from "@/components/ExampleAuditOutputSection";
import { PROCESS_COPY_CHOICE_FIRST } from "@/lib/process";

export default function Home() {
  return (
    <div className="bg-transparent">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Reviews / Social Proof Marquee */}
      <ReviewsMarqueeSection variant="light" />

      {/* 3. Problem Section - Why Local Service Sites Leak Leads */}
      <Section className="bg-neutral-50/50">
        <SectionHeader
          className="mb-16"
          title={
            <>
              Why Most Local Service Websites{" "}
              <span className="text-rose-600">Leak Paying Customers</span>
            </>
          }
          subtitle="Getting traffic is only half the battle. If your website has any of these common friction points, local searchers leave and call your competitors instead."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <ProblemCard
            number="01"
            title="Speed Breaks Intent"
            description="53% of mobile searchers leave if a page takes over 3 seconds to load. Sluggish templates cause customers with urgent needs to bounce immediately."
            tag="Speed Leak"
          />
          <ProblemCard
            number="02"
            title="Buried Phone Numbers"
            description="When roadside drivers or homeowners need help, hunting for a contact number or battling a long form causes 70%+ of prospects to abandon."
            tag="Friction Leak"
          />
          <ProblemCard
            number="03"
            title="Missing Service Pages"
            description="Without dedicated, search-optimized pages for every core service you offer, Google ranks competitor shops and franchise chains above you."
            tag="SEO Leak"
          />
          <ProblemCard
            number="04"
            title="Weak Trust Proof"
            description="When licenses, warranties, ASE/trade certifications, and real reviews aren't placed right next to your CTAs, cautious buyers hesitate and look elsewhere."
            tag="Trust Leak"
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            The average local service business loses $2,000–$6,000/month from preventable website leaks.
          </div>
        </div>
      </Section>

      {/* 4. Solution Framework - The OAB Conversion Engine */}
      <Section className="bg-white/60 backdrop-blur-sm">
        <SectionHeader
          className="mb-16"
          title={
            <>
              The OAB Conversion Engine:{" "}
              <span className="text-primary-600">Built for Calls & Booked Jobs</span>
            </>
          }
          subtitle="We don't build generic brochure templates. Every layout, button, and headline is engineered to turn local search intent into paying customers."
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <BenefitCard
            title="Lightning Fast (<2.5s)"
            description="Custom-built without bloated plugins or heavy themes. Your site loads instantly on mobile so searchers never bounce."
            icon="bolt"
          />
          <BenefitCard
            title="1-Tap Calling & Quick Quotes"
            description="Frictionless mobile tap-to-call buttons and streamlined quote forms placed exactly where decision-making happens."
            icon="phone"
          />
          <BenefitCard
            title="Local Search Dominance"
            description="Engineered service-area architecture and Google Business Profile synergy to rank for high-intent 'near me' searches."
            icon="mappin"
          />
        </div>
      </Section>

      {/* 5. Industries Served Section - Broad Positioning + Featured Auto Repair */}
      <Section className="bg-neutral-50/70 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            className="mb-14"
            title="Built for Established Local Service Businesses"
            subtitle="Whether you run an independent auto repair shop, a multi-truck plumbing fleet, or an HVAC service, we engineer your site to win local customers."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Featured Auto Repair Card */}
            <Link
              href="/auto-repair-websites"
              className="group relative bg-gradient-to-br from-primary-950 via-[#00152E] to-primary-900 text-white p-7 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between border border-primary-500/30"
            >
              <div className="absolute top-4 right-4">
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Featured ICP
                </span>
              </div>
              <div>
                <div className="text-3xl mb-4">🚗</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
                  Auto Repair Shops
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6">
                  Websites built for independent repair shops. Turn drivers searching for brake, engine, and diagnostic repairs into scheduled bays.
                </p>
              </div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                View Auto Repair Page <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>

            {/* Plumbing */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Plumbing Companies</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Emergency tap-to-call architecture and dedicated service pages for drain cleaning, repiping, and water heaters.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-primary-950 uppercase tracking-wider">
                Emergency & Scheduled Jobs
              </div>
            </div>

            {/* HVAC */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">❄️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">HVAC & Cooling</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Seasonal AC and heating repair funnels designed to capture peak demand in your primary service territories.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-primary-950 uppercase tracking-wider">
                Seasonal & Service Calls
              </div>
            </div>

            {/* Electrical */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Electrical Contractors</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  High-converting quote requests for panel upgrades, EV charger installations, and residential troubleshooting.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-primary-950 uppercase tracking-wider">
                High-Ticket Installations
              </div>
            </div>

            {/* Pest Control */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🐜</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pest Control Services</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Instant quote requests and recurring treatment plan sign-ups with trust badges for guaranteed extermination.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-primary-950 uppercase tracking-wider">
                Recurring Service Plans
              </div>
            </div>

            {/* Cleaning */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🧹</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cleaning & Janitorial</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Fast online booking estimates for residential deep cleans, move-outs, and commercial office contracts.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-primary-950 uppercase tracking-wider">
                Online Quote Estimates
              </div>
            </div>

            {/* Landscaping */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Landscaping & Tree Care</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Visual project galleries and seasonal property maintenance estimate forms tailored for local homeowners.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-primary-950 uppercase tracking-wider">
                Property & Tree Estimates
              </div>
            </div>

            {/* Roofing / Contractors */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div className="text-3xl mb-4">🔨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Roofing & Contractors</h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-light">
                  Storm damage inspection request flows, warranty proof stacks, and financing integration.
                </p>
              </div>
              <div className="pt-6 text-xs font-semibold text-primary-950 uppercase tracking-wider">
                Inspection & Job Quotes
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Demo Case Studies & Projects Section */}
      <Section id="case-studies" className="bg-white/60 backdrop-blur-sm scroll-mt-24">
        <SectionHeader
          className="mb-12"
          title="See Our Work in Action"
          subtitle="Real showcase projects engineered for sub-second speed, Google search dominance, and high conversion"
        />

        <div className="max-w-7xl mx-auto">
          <ProjectShowcaseGrid studies={getFeaturedCaseStudies(3)} />
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 bg-neutral-50/80 border border-neutral-200/80 p-6 sm:p-8 rounded-3xl max-w-4xl mx-auto shadow-xs text-left">
            <div>
              <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-1">
                Want to see our full technical breakdowns?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Explore Core Web Vitals scorecards, before/after comparisons, and conversion architecture.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                href="/case-studies"
                className="btn-primary px-6 py-3 text-sm font-bold text-center whitespace-nowrap shadow-sm"
              >
                In-Depth Case Studies →
              </Link>
            </div>
          </div>

          <p className="text-[11px] text-gray-400 mt-6 max-w-xl mx-auto font-light">
            *Redesign showcases and demonstration projects created to illustrate our approach. Results vary based on business needs.
          </p>
        </div>
      </Section>

      {/* 7. Outcome-Focused Services Section */}
      <Section className="bg-neutral-50/50">
        <SectionHeader
          className="mb-20"
          title="What We Do"
          subtitle="Specialized solutions engineered to help your local service business dominate search and capture more customers"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ServiceCard
            icon="paintbrush"
            title="Conversion-First Website Design & Redesign"
            description="Build a new website or redesign your current site from scratch. Engineered to turn mobile visitors into immediate phone calls and booked appointments."
          />
          <ServiceCard
            icon="bolt"
            title="Instant Speed & Core Web Vitals"
            description="Achieve sub-2.5s load times on real cellular devices. Eliminate bloated code and plugins so you never lose an impatient searcher."
          />
          <ServiceCard
            icon="mappin"
            title="Local Search & Map Pack Dominance"
            description="Structured service-area architecture and Google Business Profile optimization so local customers find you first for high-intent searches."
          />
          <ServiceCard
            icon="chartbar"
            title="Call & Lead Conversion Tracking"
            description="Track every inbound phone call, quote request, and appointment. Measure exactly which services generate your best revenue."
          />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="text-[#001B3A] hover:text-[#00152E] font-bold text-lg inline-flex items-center gap-2"
          >
            Explore All Services & Packages <span>→</span>
          </Link>
        </div>
      </Section>

      {/* 8. Free Website Audit Deliverable Showcase */}
      {/* <ExampleAuditOutputSection showHeader={true} showCta={true} /> */}

      {/* 9. Proven Stats Section */}
      <StatsSection />

      {/* 10. Process Section */}
      <ProcessSection variant="light" copy={PROCESS_COPY_CHOICE_FIRST} />

      {/* 11. Final CTA Section with Guarantee */}
      <Section className="relative bg-gradient-to-br from-[#001B3A] via-[#00152E] to-[#001022] text-white overflow-hidden py-24 md:py-40">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            Ready to Turn Local Searches Into <span className="text-emerald-400">Paying Customers?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
            Get your free 24-hour website audit to uncover your biggest lead leaks, or book a 15-minute intro call to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link
              href={PRIMARY_CTA_HREF}
              onClick={() => trackCTAClick(PRIMARY_CTA_LABEL_LONG, "Homepage - Bottom Dark CTA")}
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-950 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              {PRIMARY_CTA_LABEL_LONG}
            </Link>
            <Link
              href={CALL_CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick(CALL_CTA_LABEL, "Homepage - Bottom Dark Call CTA")}
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
                <span className="text-xl font-bold text-white tracking-tight">Calls or It&apos;s Free Guarantee</span>
              </div>
              <p className="text-base text-white/60 font-light leading-relaxed">
                If inbound calls or quote requests do not increase within 30 days of website launch, you get a full refund. Website delivery is 1–2 weeks for new sites and redesigns. All pages are optimized to load under 2.5 seconds or we fix it at no cost.
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
        <div className="absolute inset-0 bg-[#000B16]/65"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-20 md:py-24 w-full">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sm font-medium text-white/90 mb-8"
          >
            <SparklesIcon className="w-4 h-4 text-emerald-400" />
            <span>Built for Local Service Businesses & Auto Repair Shops</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.08] tracking-tight"
          >
            Websites That Turn Local Searches{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
              Into Customers
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Fast, professional, conversion-focused websites for local service businesses that want more calls, bookings, and quote requests.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-14"
          >
            <CTAButton
              href={PRIMARY_CTA_HREF}
              variant="primary"
              dark
              className="px-10 py-5 text-lg font-bold shadow-2xl"
              trackingLocation="Homepage Hero"
            >
              {PRIMARY_CTA_LABEL_LONG}
            </CTAButton>
            <CTAButton
              href={CALL_CTA_HREF}
              variant="secondary"
              dark
              className="px-10 py-5 text-lg font-bold"
              trackingLocation="Homepage Hero"
            >
              {CALL_CTA_LABEL}
            </CTAButton>
          </motion.div>

          {/* Key Value Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10 text-xs sm:text-sm text-white/75 font-light"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Sub-2.5s Speed
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Mobile-First UX
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> Tracked Phone Calls
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span> 30-Day Guarantee
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  number,
  title,
  description,
  tag,
}: {
  number: string;
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-3xl font-black text-neutral-200">{number}</span>
          <span className="px-3 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded-full border border-rose-100">
            {tag}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{title}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
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
  const IconComponent =
    {
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
              Core Service
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{title}</h3>
          <p className="mt-4 text-neutral-600 leading-relaxed font-light">{description}</p>

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
