"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { trackFormSubmission, trackCTAClick } from "@/lib/gtag";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import SectionHeader from "@/components/SectionHeader";
import { AUDIT_FORM_ANCHOR, AUDIT_CTA_LABEL } from "@/lib/cta";
import ReviewsMarqueeSection from "@/components/ReviewsMarqueeSection";
import ProcessSection from "@/components/ProcessSection";
import { PROCESS_COPY_AUDIT_FIRST } from "@/lib/process";

export default function PlumbersLandingPage() {
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
      
      // Track form submission for GA4 Import to Google Ads
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion_event_submit_lead_form_1", {
          'event_callback': () => console.log("Lead tracked successfully"),
          'event_timeout': 2000,
          'event_label': 'Plumber Leads - GA4 Conversion Event',
          'email': formData.email, // Enhanced Conversions
          'phone_number': formData.phone, // Enhanced Conversions
          'value': 100.0,
          'currency': 'USD'
        });

        // Google Ads conversion tracking for Plumber Leads campaign
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17872130458/JB8nCJS-oOobEJqjjMpC',
          'event_label': 'Plumber Leads - Google Ads Conversion',
          'value': 100.0,
          'currency': 'USD',
          'transaction_id': `plumber-leads-${Date.now()}` // Unique ID to prevent duplicate conversions
        });
      }
      
      // Keep existing local tracking
      trackFormSubmission("Plumber Leads - Form Submission General Tracking");
      
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
      {/* Hero Section - US Plumber-specific */}
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
                US Plumbing Companies: Get 2-3x More <span className="text-primary-400">Emergency Calls</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
                Stop losing leads to slow, outdated websites. Get a free audit (if you have a site) or consultation (if you need a new one) showing exactly how many emergency calls you're missing.
              </p>
              <div className="space-y-5 text-white/80">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  </div>
                  <span className="text-lg"><strong>Free Audit:</strong> See exactly how many calls you're missing (24h delivery)</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  </div>
                  <span className="text-lg">Speed issues, SEO problems, conversion opportunities</span>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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
                    {AUDIT_CTA_LABEL}
                </h2>
                  <p className="text-gray-500 text-center text-sm">
                    Discover why customers are leaving your site
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
                      : AUDIT_CTA_LABEL}
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

      {/* Problem → Pain → Cost Section - Plumber-specific */}
      <section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-16"
            title="Your Website Is Costing You Emergency Calls Every Day"
            subtitle="Many US plumbing companies lose potential customers due to slow or missing websites. Whether you have a slow website or no website at all, you're likely losing emergency calls to competitors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Invisible to 90% of Customers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you don't have a website, customers searching "plumber near me" can't find you. They'll call your competitor who shows up in Google search results instead.
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Slow Loading = Lost Calls
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If your site takes more than 3 seconds, around half of visitors leave. When someone has a plumbing emergency, they need answers fast, or they call your competitor.
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Mobile Issues Cost Leads
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Over 60% of searches happen on phones. If your site isn't optimized for mobile, you're invisible when customers need you most in an emergency.
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
                Poor Local SEO Visibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                When customers search for "plumber near me", they find your competitors first. You lose the job before you even know it existed.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center bg-gray-50/80 p-10 md:p-14 rounded-[2rem] border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary-950/10 group-hover:bg-primary-950 transition-colors" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
              The average US plumbing company loses $2,000-$5,000 per month in missed opportunities.
            </p>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              Every day you don't have a fast, lead-generating website, you're handing emergency calls to your competitors on a silver platter.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Positioning - US/Plumber-specific */}
      <section className="py-24 md:py-32 bg-gray-50/40 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            className="mb-10"
            title={
              <>
                The Performance Partner for{" "}
                <span className="text-primary-600">Growth-Minded Plumbers</span>
              </>
            }
            subtitle={'We don\'t just "make websites." We build revenue-generating assets that turn search traffic into booked jobs.'}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-900 font-medium">ServiceTitan Ready</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-900 font-medium">Jobber Integrated</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-900 font-medium">Local SEO Optimized</span>
            </div>
          </div>
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick(AUDIT_CTA_LABEL, "Plumber Leads - CTA Solution Section")}
            className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
          >
            {AUDIT_CTA_LABEL}
          </a>
        </div>
      </section>

      {/* Why US Plumber Leads Choose Us Section */}
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
              title="Why US Plumber Leads Choose Us"
              subtitle="We understand the unique speed and conversion needs of plumbing businesses."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-950 mb-8 group-hover:bg-primary-950 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Built for Urgency</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                When a pipe bursts, customers need you <strong>now</strong>. We optimize for 1-tap calls and instant mobile speed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-950 mb-8 group-hover:bg-primary-950 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Mobile Domination</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Most emergency plumber searches happen on mobile. Your site will look and work better than any competitor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-premium hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-50 text-primary-950 mb-8 group-hover:bg-primary-950 group-hover:text-white transition-colors duration-300">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Dominant Local SEO</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Optimized for local search so when customers search "plumber near me", you show up first in your service area.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Case Studies Section - Plumbing First */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <SectionHeader
              title="See How We'd Approach Your US Plumbing Business"
              subtitle="Demonstration projects showing our approach to building lead-generating websites for plumbing companies"
            />
          </motion.div>

          <div className="space-y-12">
            <CaseStudyCarousel
              studies={getFeaturedCaseStudies(2)}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-500 mb-2">
              These are redesign showcases and demonstration projects showing our approach.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              The redesigns above are unsolicited demonstration projects created to show our approach. We were not hired by these clients.
              Your results will vary based on your specific business needs.
            </p>
            <a
              href={AUDIT_FORM_ANCHOR}
              onClick={() => trackCTAClick(AUDIT_CTA_LABEL, "Plumber Leads - CTA Demo Case Studies")}
              className="btn-primary px-10 py-5 text-lg font-bold inline-block"
            >
              {AUDIT_CTA_LABEL}
            </a>
          </motion.div>
        </div>
      </section>

      <ReviewsMarqueeSection variant="light" showStats />

      <ProcessSection variant="light" copy={PROCESS_COPY_AUDIT_FIRST} />

      {/* Strong CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#001B3A] via-[#00152E] to-[#001022] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            variant="dark"
            className="mb-12"
            title="Stop Handing Emergency Calls to Your Competitors"
            subtitle="Get a free website audit showing speed issues, SEO problems, and conversion opportunities. Or get a consultation to discuss building a new lead-generating machine."
          />
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick(AUDIT_CTA_LABEL, "Plumber Leads - CTA Strong CTA Section")}
            className="inline-flex items-center px-10 py-5 bg-white text-primary-950 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            {AUDIT_CTA_LABEL}
          </a>
          <p className="mt-6 text-sm text-white/50 uppercase tracking-widest font-bold">
            Delivered in 24 hours. No obligation.
          </p>
        </div>
      </section>

      {/* Final CTA - Repeat Ask */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              className="mb-12"
              title="Ready to Scale Your Plumbing Business?"
              subtitle="Every day you don't have a fast, lead-generating website, you're losing emergency calls to competitors. Get your free audit and see exactly what you're missing."
            />
            <a
              href={AUDIT_FORM_ANCHOR}
              onClick={() => trackCTAClick(AUDIT_CTA_LABEL, "Plumber Leads - CTA Final CTA Section")}
              className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
            >
              {AUDIT_CTA_LABEL}
            </a>
            <p className="mt-6 text-sm text-gray-400 font-light">
              No spam. No sales pitch. Just real numbers for your US plumbing business.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

