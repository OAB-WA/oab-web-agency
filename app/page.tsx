"use client";

import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { BoltIcon, PhoneIcon, MapPinIcon } from "@/components/Icons";
import { CALENDLY_URL } from "@/lib/constants";
import { trackOutboundLink } from "@/lib/gtag";

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
            <CTAButton href="/contact">Get a Free Website Audit or Consultation</CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary">
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
            quote="Absolutely blown away by the work OAB Web Agency delivered! They completely revamped our website and the result is exceptional. The new design is modern, clean and perfectly aligned with our brand. They also did a full SEO optimization and we've already seen noticeable improvements in our search rankings. The site is fully mobile responsive and looks stunning on every device. Their attention to detail and commitment to delivering top tier quality is what sets them apart."
            author="Ben Othman"
            role="Owner, PeerSoc"
            rating={5}
          />
          <TestimonialCard
            quote="OAB Web Agency genuinely delivered amazing work that helped my business loads. They over-delivered on the website project and maintained professionalism throughout. Stellar performance all around. Would definitely work with them again."
            author="Gerald Winkler"
            role="Owner, Green and Clean Services"
            rating={5}
          />
          <TestimonialCard
            quote="The team understood that I need phone calls, not a fancy website. They built something that actually generates jobs. I'm now ranking on page 1 and the phone won't stop ringing."
            author="Service Business Owner"
            role="Electrical Services"
            rating={5}
          />
        </div>
      </Section>

      {/* Demo Case Studies Section */}
      <Section>
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
            <CTAButton href="/contact" trackingLabel="Get Your Free Audit or Consultation" trackingLocation="Demo Case Studies">
              Get Your Free Audit or Consultation
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary" trackingLabel="Book a Strategy Call" trackingLocation="Demo Case Studies">
              Book a Strategy Call
            </CTAButton>
          </div>
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
            See What Your Website Is Costing You (Or What You're Missing Without One)
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free audit (if you have a site) or consultation (if you need a new one) and discover how many leads you're missing out on
            every month. No sales pitch — just real numbers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="btn-primary-dark px-8 py-4"
            >
              Get Your Free Audit or Consultation
            </Link>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-dark px-8 py-4"
            >
              Book a Call
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
              Get a Free Website Audit or Consultation
            </CTAButton>
            <CTAButton href={CALENDLY_URL} variant="secondary">
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
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="p-8 md:p-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {businessType}
          </h3>
          <span className="px-3 py-1 text-xs font-semibold text-[#001B3A] bg-[#001B3A]/10 rounded-full">
            {label}
          </span>
        </div>

        {disclaimer && (
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong className="text-blue-900">Note:</strong> {disclaimer}
            </p>
          </div>
        )}

        {beforeImageUrl && imageUrl && (
          <>
            <div className="mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-600">Original Website</p>
                    {originalWebsiteUrl && originalWebsiteUrl.trim() !== "" && (
                      <a 
                        href={originalWebsiteUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                        onClick={() => trackOutboundLink(originalWebsiteUrl, "View Original Website - Demo")}
                      >
                        View live →
                      </a>
                    )}
                  </div>
                  <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden border-2 border-gray-300">
                    <Image 
                      src={beforeImageUrl} 
                      alt="Original plumbing website" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-2">Our Redesign</p>
                  <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden border-2 border-[#001B3A]">
                    <Image 
                      src={imageUrl} 
                      alt="Redesigned plumbing website" 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                  {demoUrl && demoUrl.trim() !== "" && (
                    <a 
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#001B3A] hover:underline mt-2 inline-block"
                      onClick={() => trackOutboundLink(demoUrl, "View Redesign Demo")}
                    >
                      View our redesign demo →
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Performance Metrics Comparison */}
            <div className="mb-6 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                Performance Improvements
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">4.2s</div>
                  <div className="text-sm text-gray-600 mb-2">Before: Load Time</div>
                  <div className="text-3xl font-bold text-green-600">1.8s</div>
                  <div className="text-sm text-gray-600">After: Load Time</div>
                  <div className="text-xs text-green-700 font-semibold mt-1">57% faster</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">45</div>
                  <div className="text-sm text-gray-600 mb-2">Before: LCP Score</div>
                  <div className="text-3xl font-bold text-green-600">92</div>
                  <div className="text-sm text-gray-600">After: LCP Score</div>
                  <div className="text-xs text-green-700 font-semibold mt-1">104% improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-1">0.35</div>
                  <div className="text-sm text-gray-600 mb-2">Before: CLS</div>
                  <div className="text-3xl font-bold text-green-600">0.02</div>
                  <div className="text-sm text-gray-600">After: CLS</div>
                  <div className="text-xs text-green-700 font-semibold mt-1">94% improvement</div>
                </div>
              </div>
            </div>

            {/* Business Impact Section */}
            <div className="mb-6 p-6 bg-[#001B3A] text-white rounded-xl shadow-lg">
              <h4 className="text-lg font-bold mb-4 text-center">
                Projected Business Impact (Industry Standards)
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">+40%</div>
                  <p className="text-sm text-white/80">Est. Increase in Call Volume</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">-53%</div>
                  <p className="text-sm text-white/80">Reduction in Bounced Visitors</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">2.5x</div>
                  <p className="text-sm text-white/80">More Leads vs. Slow Competitors</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-center">
                <p className="text-xs text-white/60 italic">
                  *Based on Google/Deloitte research: 53% of mobile visitors leave sites that take &gt;3s to load. Every 1s improvement increases conversions by up to 20%.
                </p>
              </div>
            </div>
          </>
        )}

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
                <p className="text-gray-600 leading-relaxed">{problem}</p>
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
                <p className="text-gray-600 leading-relaxed">{improvement}</p>
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
                <p className="text-gray-600 leading-relaxed">{outcome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
