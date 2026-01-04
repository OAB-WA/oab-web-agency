"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BoltIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import { CALENDLY_URL } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Value Proposition */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Website Should Bring You Jobs — Not Just Look Pretty
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Most service businesses have websites that look fine but don't generate calls. Meanwhile, your competitors are ranking higher and getting all the jobs. We build websites designed to get you more phone calls and booked appointments — not just win design awards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">Get a Free Website Audit or Consultation (See What You're Missing)</CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary">
              Book a 15-Min Strategy Call
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
            We focus on what actually matters: getting you more calls, more jobs, and more revenue
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard
            title="Lightning Fast (Under 2.5 Seconds)"
            description="Your website loads instantly on phones and tablets. Slow sites lose customers before they even see your services. When someone searches 'plumber near me' at 2 AM, your site needs to load fast or they're calling your competitor."
            icon="bolt"
          />
          <BenefitCard
            title="Built to Get Phone Calls"
            description="Every page is designed to get phone calls and form submissions. No fluff, no fancy animations that slow things down. Just clear service descriptions, easy-to-find phone numbers, and buttons that actually work on mobile."
            icon="phone"
          />
          <BenefitCard
            title="Rank Higher in Local Search"
            description="We optimize your site so when customers search 'HVAC repair [your city]' or 'electrician near me', you show up first. More visibility = more calls = more booked jobs."
            icon="mappin"
          />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results From Real Service Business Owners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how other service businesses are getting more calls and jobs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <TestimonialCard
            quote="We went from maybe 2-3 calls a week to 10-15 calls a week after the website redesign. The investment paid for itself in the first month. Now I'm turning down work instead of chasing it."
            author="Service Business Owner"
            role="Plumbing Company"
            rating={5}
          />
          <TestimonialCard
            quote="Our website was so slow, customers were leaving before it even loaded. After optimization, we're getting 3x more leads. Best $1,500 I've spent on my business this year."
            author="Service Business Owner"
            role="HVAC Company"
            rating={5}
          />
          <TestimonialCard
            quote="The team understood that I need phone calls, not a fancy website. They built something that actually generates jobs. I'm now ranking on page 1 for 'electrician [my city]' and the phone won't stop ringing."
            author="Service Business Owner"
            role="Electrical Services"
            rating={5}
          />
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Get You More Calls & Booked Jobs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple 3-step process that actually works for service businesses
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ProcessStep
            number="1"
            title="Free Website Audit or Consultation"
            description="If you have a website, we'll analyze it and show you exactly what's costing you leads. Don't have one? We'll discuss building a new website from scratch. You'll see why customers are leaving (or why you're invisible), why you're not ranking, and how many jobs you're missing out on every month."
          />
          <ProcessStep
            number="2"
            title="Build Your Lead-Generating Website"
            description="We design and build a website focused on one thing: getting you more phone calls and booked appointments. Fast loading, mobile-friendly, and optimized for local search. Delivered in 1-2 weeks."
          />
          <ProcessStep
            number="3"
            title="Launch & Watch the Calls Come In"
            description="We launch your new site and optimize it based on real performance. You'll see more calls, more booked jobs, and more revenue — not just a pretty website."
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

        <div className="text-center mt-12 space-x-6">
          <Link
            href="/services"
            className="text-[#001B3A] hover:text-[#00152E] font-semibold"
          >
            View All Services →
          </Link>
          <span className="text-gray-300">|</span>
          <Link
            href="/pricing"
            className="text-[#001B3A] hover:text-[#00152E] font-semibold"
          >
            See Pricing →
          </Link>
        </div>
      </Section>

      {/* Client Logos Section */}
      <Section className="bg-white">
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
            {/* Placeholder for client logos - replace with actual logos */}
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
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5">
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
      <Section className="relative bg-gradient-to-br from-[#001B3A] via-[#00152E] to-[#001022] text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#003366] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#001B3A] rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Every Day You Don't Have a Website (Or It's Slow), You're Losing Jobs to Competitors
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free audit (if you have a site) or consultation (if you need a new one) and see exactly how many calls and jobs you're missing out on every month. No sales pitch — just real numbers showing what you're missing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-primary-dark px-8 py-4"
            >
              Get Your Free Audit or Consultation (See What You're Missing)
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-dark px-8 py-4"
            >
              Book a 15-Min Call (No Pressure)
            </Link>
          </div>
          
          {/* Guarantee Badge */}
          <div className="mt-8 pt-8 border-t border-white/30">
            <div className="flex flex-col items-center">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-lg font-bold text-white">100% Money-Back Guarantee</span>
              </div>
              <p className="text-sm text-white/80 max-w-2xl">
                Delivered in 1-2 weeks or it's free. Site loads in under 2.5 seconds or we fix it free. Not happy? Full refund in 30 days. No questions asked.
              </p>
            </div>
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
      
      {/* Animated background elements - subtle animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#003366] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#001B3A] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90 border border-white/20">
              Websites That Get Service Businesses More Jobs
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            Stop Losing Jobs to Competitors With{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Slow, Broken Websites</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-[#004C99]/30 -rotate-1"></span>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            While your competitors are getting calls from Google, you're losing customers to slow websites and poor mobile experience. We build fast, conversion-focused websites that get service businesses more phone calls and booked jobs.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <CTAButton href="/contact" variant="secondary">
              Get Your Free Audit or Consultation
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary" dark>
              Book a 15-Min Call (No Sales Pitch)
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
      className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-[#001B3A]/30 transition-all duration-300 overflow-hidden"
    >
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001B3A]/0 to-[#001B3A]/0 group-hover:from-[#001B3A]/10 group-hover:to-[#001B3A]/5 transition-all duration-300"></div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#001B3A] text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#001B3A] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
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
      className="relative text-center"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#001B3A] text-white text-3xl font-bold mb-6 shadow-xl hover:scale-110 transition-transform duration-300">
        {number}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
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
      className="group bg-white p-6 rounded-xl border border-gray-200 hover:shadow-xl hover:border-[#001B3A]/30 transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#001B3A] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      {/* Star Rating */}
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
      
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </motion.div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-[#001B3A] mb-2">
        {number}
      </div>
      <p className="text-lg text-gray-700 font-medium">{label}</p>
    </motion.div>
  );
}
