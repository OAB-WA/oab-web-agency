"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackFormSubmission, trackCTAClick } from "@/lib/gtag";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import SectionHeader from "@/components/SectionHeader";
import { AUDIT_FORM_ANCHOR } from "@/lib/cta";
import ReviewsMarqueeSection from "@/components/ReviewsMarqueeSection";
import ProcessSection from "@/components/ProcessSection";
import { PROCESS_COPY_FREE_WEBSITE } from "@/lib/process";
import type { FreeWebsiteCopy, FreeWebsiteVertical } from "@/lib/freeWebsiteCopy";

type FreeWebsiteLandingPageProps = {
  copy: FreeWebsiteCopy;
  vertical: FreeWebsiteVertical | null;
};

export default function FreeWebsiteLandingPage({ copy, vertical }: FreeWebsiteLandingPageProps) {
  const verticalSlug = vertical ?? "general";
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    videoTestimonialWilling: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const qualified = formData.videoTestimonialWilling === "Yes";
    const payload = {
      ...formData,
      qualified,
      _form: "free-website-application",
      _vertical: verticalSlug,
    };

    try {
      const response = await fetch("https://submit-form.com/LIAVJSrnY", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to send application. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        businessName: "",
        email: "",
        videoTestimonialWilling: "",
        notes: "",
      });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17872130458/JB8nCJS-oOobEJqjjMpC",
          event_label: `Free Website - ${verticalSlug} - Application Submitted`,
          value: 100.0,
          currency: "USD",
          transaction_id: `free-website-${Date.now()}`,
        });
      }
      trackFormSubmission(`Free Website - ${verticalSlug} - Application Form Submission`);

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#apply-form") {
        setTimeout(() => firstInputRef.current?.focus(), 300);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section - Free Website (Case Study Program) */}
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

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:py-28 w-full">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-[1.1] tracking-tight text-white">
                {copy.heroHeadline}
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                {copy.heroSubhead}
              </p>
              <div className="mt-10 space-y-4 text-white/80">
                {copy.heroBullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base md:text-lg">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="apply-form" className="scroll-mt-20">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-white/20">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                    {copy.formCtaLabel}
                  </h2>
                  <p className="text-gray-500 text-center text-sm">
                    Application form. We review and respond by email.
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      ref={firstInputRef}
                      type="text"
                      name="businessName"
                      placeholder="Business name *"
                      required
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Willing to record a 2–3 min VIDEO testimonial as part of the program?</label>
                    <select
                      name="videoTestimonialWilling"
                      required
                      value={formData.videoTestimonialWilling}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50"
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      name="notes"
                      placeholder="Optional notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={2}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {submitted && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                      Application received. We&apos;ll review and be in touch.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-[#001B3A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00152E] hover:shadow-xl active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? "Submitting..." : submitted ? "Submitted ✓" : copy.formCtaLabel}
                  </button>
                </form>
                <p className="mt-6 text-[12px] text-gray-400 text-center leading-relaxed">
                  Application-based. We select participants that fit. No spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Section - This Is Not for Everyone */}
      <section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-16"
            title="This Is Not for Everyone"
            subtitle={copy.qualificationSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-emerald-50/50 border border-emerald-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Who this is for
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {copy.qualificationWhoFor}
              </p>
            </div>

            <div className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                Who this is NOT for
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Businesses that only want a one-page placeholder or a quick template. Anyone unwilling to record a 2–3 minute video testimonial as part of the program. We exclude applicants who aren't willing to do that; it's part of the exchange.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center bg-gray-50/80 p-10 md:p-14 rounded-[2rem] border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary-950/10 group-hover:bg-primary-950 transition-colors" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight max-w-3xl mx-auto">
              Application-based. We select participants that fit, and we're clear about what we need in return.
            </p>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto">
              No upfront cost. A full site built to get you more calls and booked jobs. A short video testimonial as part of the program. That's the exchange.
            </p>
          </div>
        </div>
      </section>

      {/* Why We're Doing This */}
      <section className="py-24 md:py-32 bg-gray-50/40 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            className="mb-10"
            title={
              <>
                Why We&apos;re Doing This
              </>
            }
            subtitle="We're building case studies. We ask for a short video testimonial as part of the program. No upfront cost for you, a proven case study for us."
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-900 font-medium">Case study acquisition</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-900 font-medium">Case study program</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-gray-900 font-medium">No upfront cost to you</span>
            </div>
          </div>
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick(copy.formCtaLabel, `Free Website - ${verticalSlug} - CTA Why Section`)}
            className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
          >
            {copy.formCtaLabel}
          </a>
        </div>
      </section>

      {/* Experience & Credibility */}
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
              title="Experience & Credibility"
              subtitle="We've spent over a year working with a service-based agency in Kalamazoo, Michigan. We focus on service businesses because we understand how they get leads and what breaks when a site isn't built to turn visitors into calls and booked jobs."
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Service-Based Focus</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Plumbers, HVAC, electricians, contractors: we build for businesses that live on calls and booked jobs, not e‑commerce carts.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Kalamazoo & Beyond</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Over a year of hands-on work with a service-based agency in Kalamazoo, Michigan. We know local search and lead flow.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Built to Convert</h3>
              <p className="text-gray-500 leading-relaxed font-light">
                Speed, clarity, mobile-first. We build sites that turn search traffic into calls and booked jobs, not just pretty pages.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20 md:py-32 bg-gray-50/40 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-16"
            title="What the Website Includes"
            subtitle="A full site built to get you more calls and more booked jobs—not a one-page template."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">Built for more calls & booked jobs</h3>
              <p className="text-gray-600 leading-relaxed">
                Every layout, CTA, and page is designed to turn visitors into calls and booked jobs, not just to look good. You get a complete site built for your business and your goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">Conversion & clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear calls to action, structure that guides visitors to call or book, and copy that speaks to your ideal customer so they take action.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">Speed & Core Web Vitals</h3>
              <p className="text-gray-600 leading-relaxed">
                Fast load times so visitors don't bounce before they call or book. Optimized for LCP, CLS, and INP.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">Mobile-first</h3>
              <p className="text-gray-600 leading-relaxed">
                Most service-business searches happen on mobile. Your site is built mobile-first so it turns phone traffic into calls and booked jobs, not lost leads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Case Studies Section */}
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
              title={copy.caseStudiesTitle}
              subtitle={copy.caseStudiesSubtitle}
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
              These are demonstration projects showing our approach.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              The projects above are unsolicited demonstration work created to show our approach. We were not hired by these clients.
              Your results will vary based on your specific business needs.
            </p>
            <a
              href={AUDIT_FORM_ANCHOR}
              onClick={() => trackCTAClick(copy.formCtaLabel, `Free Website - ${verticalSlug} - CTA Case Studies`)}
              className="btn-primary px-10 py-5 text-lg font-bold inline-block"
            >
              {copy.formCtaLabel}
            </a>
          </motion.div>
        </div>
      </section>

      <ReviewsMarqueeSection variant="light" showStats />

      <ProcessSection variant="light" copy={PROCESS_COPY_FREE_WEBSITE} />

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-12"
            title="Frequently Asked Questions"
            subtitle="Quick answers about the free website and what happens next."
          />
          <div className="space-y-6">
            {[
              {
                q: "How long until my site is live?",
                a: "We determine scope and aim to deliver within 1–2 weeks of kickoff.",
              },
              {
                q: "What if I'm not happy with the site or the results?",
                a: "We'll do a reasonable round or two of revisions to get the site right. If you're not satisfied with the site or the results you're getting (calls, booked jobs), we'll work with you to improve it within that scope. The program isn't unlimited design iterations—we're committed to getting you to a site you're happy with, within reason.",
              },
              {
                q: "What do I get? A template or a custom site?",
                a: "You get a full website built from the ground up, designed to get you more calls and booked jobs. We don't hand you a generic template; we build for your business and your goals—mobile-first, fast, and built for leads.",
              },
              {
                q: "When do you ask for the video testimonial?",
                a: "After we launch your site. We ask for a short 2–3 minute video testimonial as part of the program—it's how we build case studies.",
              },
              {
                q: "Why do you ask for a video testimonial?",
                a: "It's part of the exchange: no upfront cost for you, a proven case study for us. We always ask for a short video as part of the program, and we exclude applicants who aren't willing to do that.",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white border border-neutral-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group"
                >
                  <span className="text-xl font-bold text-gray-900 pr-8 tracking-tight group-hover:text-primary-600 transition-colors">
                    {faq.q}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openFAQIndex === index ? "bg-primary-950 text-white rotate-180" : "bg-neutral-50 text-primary-950"
                  }`}>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 border-t border-neutral-50 mt-2">
                        <p className="text-neutral-600 leading-relaxed font-light text-lg pt-6">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#001B3A] via-[#00152E] to-[#001022] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <SectionHeader
            variant="dark"
            className="mb-12"
            title={copy.strongCtaTitle}
            subtitle={copy.strongCtaSubtitle}
          />
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick(copy.formCtaLabel, `Free Website - ${verticalSlug} - CTA Strong CTA Section`)}
            className="inline-flex items-center px-10 py-5 bg-white text-primary-950 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            {copy.formCtaLabel}
          </a>
          <p className="mt-6 text-sm text-white/50 uppercase tracking-widest font-bold">
            Application-based. No obligation to proceed if selected.
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
              title={copy.finalCtaTitle}
              subtitle={copy.finalCtaSubtitle}
            />
            <a
              href={AUDIT_FORM_ANCHOR}
              onClick={() => trackCTAClick(copy.formCtaLabel, `Free Website - ${verticalSlug} - CTA Final CTA Section`)}
              className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
            >
              {copy.formCtaLabel}
            </a>
            <p className="mt-6 text-sm text-gray-400 font-light">
              No spam. Application-based. We respond by email.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
