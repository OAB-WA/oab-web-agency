"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { trackFormSubmission, trackCTAClick } from "@/lib/gtag";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import SectionHeader from "@/components/SectionHeader";
import { AUDIT_FORM_ANCHOR, PRIMARY_CTA_LABEL } from "@/lib/cta";
import ReviewsMarqueeSection from "@/components/ReviewsMarqueeSection";
import ProcessSection from "@/components/ProcessSection";
import { PROCESS_COPY_AUDIT_FIRST } from "@/lib/process";
import TripleGuaranteeSection from "@/components/TripleGuaranteeSection";

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Using Formspark
      const response = await fetch("https://submit-form.com/LIAVJSrnY", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", website: "" });
      
      // Track form submission
      trackFormSubmission("Free Audit Form");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Auto-focus first field when hash is #audit-form
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#audit-form") {
        // Small delay to allow scroll to complete
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 300);
      }
    };

    // Check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section - Outcome-driven headline, ONE primary CTA */}
      <section className="relative text-white overflow-hidden min-h-[100dvh] flex items-center -mt-20">
        <div className="absolute inset-0">
          <Image
            src="/abstract_bg.png"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#000B16]/60"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:py-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Headline & Benefits */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
                Get 2-3x More Phone Calls From Your Website
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
                While your competitors get calls from Google, you're losing customers to slow websites. Get a free audit (if you have a site) or consultation (if you need a new one) showing exactly how many leads you're missing.
              </p>
              <div className="space-y-4 text-white/80">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">See exactly what's costing you leads</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Speed issues, SEO problems, conversion opportunities</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Delivered in 24 hours. No sales pitch.</span>
                </div>
              </div>
            </div>
            
            {/* Right: Form */}
            <div id="audit-form" className="scroll-mt-20">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-white/20">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                    {PRIMARY_CTA_LABEL}
                  </h2>
                  <p className="text-gray-500 text-center text-sm">
                    Discover how many phone calls you're missing
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      ref={nameInputRef}
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="website"
                      placeholder="Your Website URL (Optional)"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                      ✓ Success! We'll send your free audit within 24 hours.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-[#001B3A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00152E] hover:shadow-xl active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : submitted
                      ? "Request Sent! ✓"
                      : PRIMARY_CTA_LABEL}
                  </button>
                </form>
                <p className="mt-6 text-[12px] text-gray-400 text-center leading-relaxed">
                  No spam. No sales pitch. Delivered in 24 hours. <br/>Don't have a website? We'll discuss building a new one!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Pain → Cost Section */}
      <section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-16"
            title="Your Website (Or Lack of One) Is Costing You Customers Every Day"
            subtitle="Most service businesses lose 40-60% of potential customers. Whether you have a slow website or no website at all, you're losing jobs to competitors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                No Website = Invisible to 90% of Customers
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                If you don't have a website, customers can't find you online. They'll call your competitor who shows up in Google search results instead.
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Slow Loading = Lost Customers
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                If your site takes more than 3 seconds, around half of visitors leave. They call your competitor instead.
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Not Mobile-Friendly = Missing 60% of Searches
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                Over 60% of "plumber near me" searches happen on phones. If your site isn't optimized, you're invisible.
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Poor Local SEO = Competitors Get the Calls
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                When customers search for your services, they find your competitors first. You lose the job before you even know about it.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center bg-gray-50/80 p-10 md:p-14 rounded-[2rem] border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary-950/10 group-hover:bg-primary-950 transition-colors" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              Every day you're invisible online, you're losing jobs to competitors.
            </p>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              The average service business loses $2,000-$5,000 per month in missed opportunities from not having a website or having a poor one.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Positioning */}
      <section className="py-24 md:py-32 bg-gray-50/40 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            className="mb-10"
            title="We Build Websites That Get You More Phone Calls & Booked Jobs"
            subtitle="Not fancy designs. Not award-winning portfolios. We build fast, conversion-focused websites that get service businesses more phone calls and booked jobs."
          />
          <p className="text-lg text-gray-500 mb-12 font-light">
            Many clients see 2–3x more leads within 30 days. Results vary based on your offer, competition, and how quickly you follow up.
          </p>
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick(PRIMARY_CTA_LABEL, "Solution Section")}
            className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
          >
            {PRIMARY_CTA_LABEL}
          </a>
        </div>
      </section>

      <ReviewsMarqueeSection variant="light" showStats />

      {/* Demo Case Studies Section */}
      <section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <SectionHeader
              title="See How We Transform Service Business Websites"
              subtitle="Demonstration projects showing our approach to building conversion-focused websites"
            />
          </motion.div>

          <div className="space-y-16">
            <CaseStudyCarousel
              studies={getFeaturedCaseStudies(2)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-20 p-10 bg-gray-50/50 rounded-[3rem] border border-gray-100"
          >
            <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-widest">
              Important Disclaimer
            </p>
            <p className="text-gray-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              The redesigns above are unsolicited demonstration projects created to show our approach. We were not hired by these clients.
              Your results will vary based on your specific business needs.
            </p>
            <a
              href={AUDIT_FORM_ANCHOR}
              onClick={() => trackCTAClick(PRIMARY_CTA_LABEL, "Demo Case Studies")}
              className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
            >
              {PRIMARY_CTA_LABEL}
            </a>
          </motion.div>
        </div>
      </section>

      <ProcessSection variant="light" copy={PROCESS_COPY_AUDIT_FIRST} />

      {/* Guarantee Section */}
      <TripleGuaranteeSection />

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            Stop Losing Customers to Competitors With <span className="text-primary-600">Slow Websites</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Get your free website audit or consultation today and see exactly what's costing you phone calls and booked jobs. Delivered in 24 hours. No sales pitch.
          </p>
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick(PRIMARY_CTA_LABEL, "Bottom CTA")}
            className="inline-flex items-center px-12 py-6 bg-primary-950 text-white rounded-2xl text-xl font-bold hover:bg-primary-900 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            {PRIMARY_CTA_LABEL}
          </a>
        </div>
        
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}

