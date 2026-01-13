"use client";

import { useState, useEffect } from "react";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BoltIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import { CALENDLY_URL } from "@/lib/constants";
import { trackOutboundLink, trackCTAClick } from "@/lib/gtag";

export default function Home() {
  const testimonials = [
    {
      quote: "Absolutely blown away by the work OAB Web Agency delivered! They completely revamped our website and the result is exceptional. The new design is modern, clean and perfectly aligned with our brand. They also did a full SEO optimization and we've already seen noticeable improvements in our search rankings. The site is fully mobile responsive and looks stunning on every device.",
      author: "Ben Othman",
      role: "Owner, PeerSoc",
      rating: 5
    },
    {
      quote: "OAB Web Agency genuinely delivered amazing work that helped my business loads. They over-delivered on the website project and maintained professionalism throughout. Stellar performance all around. Would definitely work with them again.",
      author: "Gerald Winkler",
      role: "Owner, Green and Clean Services",
      rating: 5
    },
    {
      quote: "The team understood that I need phone calls, not a fancy website. They built something that actually generates jobs. I'm now ranking on page 1 and the phone won't stop ringing.",
      author: "Service Business Owner",
      role: "Electrical Services",
      rating: 5
    }
  ];

  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition */}
      <Section className="bg-neutral-50/50">
        <div className="text-center max-w-4xl mx-auto py-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            Your Website Should Bring You Leads: <span className="text-primary-600">Not Just Look Good</span>
          </h2>
          <p className="text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Most service businesses have websites that look fine but don't
            generate calls or bookings. We build websites designed to convert
            visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <CTAButton href="/contact" className="px-8 py-4 text-lg">Get a Free Website Audit or Consultation</CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary" className="px-8 py-4 text-lg">
              Book a 15-Minute Strategy Call
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-white/60 backdrop-blur-sm">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Why Service Businesses Choose Us
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            We focus on what matters: speed, leads, and trust
          </p>
        </div>

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

      {/* Testimonials Section */}
      <Section className="bg-neutral-50/50 overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Real Results From Service Business Owners
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            See how other service businesses are getting more calls and jobs
          </p>
        </div>

        <TestimonialSlider testimonials={testimonials} />
      </Section>

      {/* Demo Case Studies Section */}
      <Section className="bg-white/60 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See How We Transform Service Business Websites
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Demonstration projects showing our approach to building conversion-focused websites
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          <DemoCaseStudy
            businessType="Plumbing Company"
            label="Redesign Showcase"
            disclaimer="This is an unsolicited redesign of a real plumbing company's website, created to demonstrate our approach. We were not hired by this client."
            problem="Outdated website that wasn't mobile-friendly. Customers searching on phones couldn't easily find services or call. Site loaded slowly, causing visitors to leave before seeing services."
            improvement="Built a new mobile-first website with clear service descriptions, prominent phone number on every page, and fast loading times. Optimized for local search so customers find them when searching 'plumber near me'."
            outcome="Website now loads quickly on all devices. Clear call-to-action buttons make it easy for customers to call or book. Mobile experience matches desktop quality, capturing leads that were previously lost."
            beforeImageUrl="/swan-before.png"
            imageUrl="/swan-after.png"
            originalWebsiteUrl="https://www.callswan.com/"
            demoUrl="https://swanplumbing.vercel.app/"
            performance={{
              score: { before: 53, after: 94 },
              fcp: { before: 8.8, after: 1.4, unit: "s" },
              lcp: { before: 15.1, after: 3.0, unit: "s" },
              tbt: { before: 190, after: 0, unit: "ms" },
              cls: { before: 0, after: 0.045, unit: "" },
              speedIndex: { before: 10.2, after: 2.1, unit: "s" },
            }}
          />
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 mb-2">
            These are redesign showcases and demonstration projects showing our approach.
          </p>
          <p className="text-xs text-gray-400 mb-6">
            The plumbing redesign above is an unsolicited redesign of a real website, created to demonstrate our capabilities. 
            We were not hired by this client. Your results will vary based on your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" trackingLabel="Get Your Free Audit or Consultation" trackingLocation="Demo Case Studies">
              Get Your Free Audit or Consultation
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary" trackingLabel="Book a Strategy Call" trackingLocation="Demo Case Studies">
              Book a Strategy Call
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gray-50/40 backdrop-blur-sm">
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
            title="Free Website Audit or Consultation"
            description="We analyze your current site (if you have one) and show you exactly what's costing you leads and customers. No website yet? We'll discuss building a new one."
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
      <Section className="bg-white/60 backdrop-blur-sm">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            What We Do
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Specialized solutions to help your service business dominate local search
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            title="Website Design & Redesign"
            description="Build a new website from scratch or redesign your existing site. Converts visitors into customers. Built for speed and performance."
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

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5 backdrop-blur-sm">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Typical Results You Can Expect
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Based on industry standards and typical client outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <StatCard number="2-3x" label="Typical Lead Increase" />
          <StatCard number="<2.5s" label="Target Load Time" />
          <StatCard number="40%+" label="Conversion Improvement" />
          <StatCard number="24/7" label="Ongoing Support" />
        </div>
      </Section>

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
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary-950 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              Get Your Free Audit or Consultation
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-2xl text-lg font-bold hover:bg-white/10 transition-all active:scale-[0.98]"
            >
              Book a Strategy Call
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
                <span className="text-xl font-bold text-white tracking-tight">100% Result Guarantee</span>
              </div>
              <p className="text-base text-white/60 font-light leading-relaxed">
                Delivered in 1-2 weeks or it's free. Site loads in under 2.5 seconds or we fix it free. Not happy? Full refund in 30 days. No questions asked.
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
            <CTAButton href="/contact" variant="primary" dark className="px-10 py-5 text-lg font-bold">
              Get a Free Website Audit or Consultation
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary" dark className="px-10 py-5 text-lg font-bold">
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
      className="text-center group"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-950 text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
        {number}
    </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-neutral-600 leading-relaxed font-light">{description}</p>
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
      className="bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-primary-600 transition-colors">{title}</h3>
      <p className="text-neutral-600 leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  rating,
}: {
  quote: string;
  author: string;
  role: string;
  rating: number;
}) {
  return (
    <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-premium border border-white/40 h-full flex flex-col justify-between transition-all duration-500 hover:shadow-2xl">
      <div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-8">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-amber-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-gray-800 text-xl md:text-2xl italic mb-12 leading-relaxed font-light">
          "{quote}"
        </p>
      </div>
      
      <div className="flex items-center gap-5 border-t border-gray-100 pt-8 mt-auto">
        <div className="w-14 h-14 rounded-full bg-primary-950 text-white flex items-center justify-center text-xl font-bold shadow-lg border-2 border-white">
          {author.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className="font-bold text-gray-900 text-lg leading-tight">{author}</p>
          <p className="text-sm text-primary-600 font-medium uppercase tracking-widest mt-1">{role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialSlider({ testimonials }: { testimonials: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  return (
    <div className="max-w-5xl mx-auto px-4 relative">
      <div className="relative overflow-hidden pt-4 pb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -50, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="w-full"
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-center gap-8 mt-4">
        <button
          onClick={() => {
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setIsAutoPlaying(false);
          }}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-950 hover:border-primary-950 transition-all active:scale-90"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentIndex ? "w-10 bg-primary-950" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setIsAutoPlaying(false);
          }}
          className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary-950 hover:border-primary-950 transition-all active:scale-90"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-10 rounded-[2.5rem] bg-white/50 border border-white/20 shadow-sm"
    >
      <div className="text-6xl md:text-7xl font-bold text-primary-950 mb-4 tracking-tighter">
        {number}
      </div>
      <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

function DemoCaseStudy({
  businessType,
  label,
  disclaimer,
  problem,
  improvement,
  outcome,
  beforeImageUrl,
  imageUrl,
  originalWebsiteUrl,
  demoUrl,
  performance,
}: {
  businessType: string;
  label: string;
  disclaimer?: string;
  problem: string;
  improvement: string;
  outcome: string;
  beforeImageUrl?: string;
  imageUrl?: string;
  originalWebsiteUrl?: string;
  demoUrl?: string;
  performance?: {
    score: { before: number; after: number };
    fcp: { before: number; after: number; unit: string };
    lcp: { before: number; after: number; unit: string };
    tbt: { before: number; after: number; unit: string };
    cls: { before: number; after: number; unit: string };
    speedIndex: { before: number; after: number; unit: string };
  };
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden hover:shadow-premium transition-all duration-500 shadow-sm"
    >
      <div className="p-10 md:p-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-primary-50 text-primary-950 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
              {label}
            </span>
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              {businessType}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {originalWebsiteUrl && (
              <a 
                href={originalWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all active:scale-95"
                onClick={() => trackOutboundLink(originalWebsiteUrl, "View Original Website - Demo")}
              >
                Original Site
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-primary-950 text-white rounded-2xl text-base font-bold hover:bg-primary-900 transition-all shadow-md hover:shadow-xl active:scale-95"
                onClick={() => trackOutboundLink(demoUrl, "View Redesign Demo")}
              >
                Live Demo
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {disclaimer && (
          <div className="mb-12 p-6 bg-blue-50/50 border border-blue-100 rounded-3xl flex items-start gap-4">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-blue-600 text-xs font-bold">i</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed italic font-light">
              {disclaimer}
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">!</div>
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">The Problem</h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-xl">
                {problem}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</div>
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">Our Approach</h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-xl">
                {improvement}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">★</div>
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[10px]">The Outcome</h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-xl">
                {outcome}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Original</p>
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm grayscale opacity-40 transition-all hover:grayscale-0 hover:opacity-100">
                  <Image src={beforeImageUrl || ""} alt="" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-bold text-primary-950 uppercase tracking-widest">Redesign</p>
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border-2 border-primary-950 shadow-lg">
                  <Image src={imageUrl || ""} alt="" fill className="object-cover" />
                </div>
              </div>
            </div>
            
            {performance && (
              <div className="p-10 bg-gray-50/50 rounded-[2.5rem] border border-gray-100">
                <div className="flex items-center justify-between mb-8">
                  <h5 className="font-bold text-gray-900 uppercase tracking-widest text-[11px]">Core Web Vitals Comparison</h5>
                  <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[9px] font-bold uppercase tracking-wider">
                    Detailed Report
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-5 mb-10 pb-10 border-b border-gray-200/50">
                  <div className="text-6xl sm:text-7xl font-bold text-emerald-500 tracking-tighter leading-none">
                    {performance.score.after}
                  </div>
                  <div className="mb-1 sm:mb-2 text-gray-400 font-light text-sm">
                    Overall Score from <span className="line-through">{performance.score.before}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-8">
                  {[
                    { label: 'FCP', before: performance.fcp.before, after: performance.fcp.after, unit: performance.fcp.unit },
                    { label: 'LCP', before: performance.lcp.before, after: performance.lcp.after, unit: performance.lcp.unit },
                    { label: 'TBT', before: performance.tbt.before, after: performance.tbt.after, unit: performance.tbt.unit },
                    { label: 'CLS', before: performance.cls.before, after: performance.cls.after, unit: performance.cls.unit }
                  ].map((metric) => (
                    <div key={metric.label} className="flex flex-col">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{metric.label}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 line-through text-xs sm:text-sm">{metric.before}{metric.unit}</span>
                        <svg className="w-3 h-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-lg sm:text-xl font-bold text-gray-900">{metric.after}{metric.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

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
  );
}
