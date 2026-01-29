"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { trackFormSubmission, trackCTAClick } from "@/lib/gtag";
import SectionHeader from "@/components/SectionHeader";
import { AUDIT_FORM_ANCHOR } from "@/lib/cta";
import ProcessSection from "@/components/ProcessSection";
import { PROCESS_COPY_AUDIT_FIRST } from "@/lib/process";
import ExampleAuditOutputSection from "@/components/ExampleAuditOutputSection";
import type { FreeAuditCopy, FreeAuditVertical } from "@/lib/freeAuditCopy";

const FORMSPARK_ENDPOINT = "https://submit-form.com/LIAVJSrnY";

const AUDIT_FORM_GA_LABEL: Record<FreeAuditVertical, string> = {
  plumbers: "Free Audit Form - Plumbers",
  hvac: "Free Audit Form - HVAC",
  electricians: "Free Audit Form - Electricians",
};

type FreeAuditLandingPageProps = {
  vertical: FreeAuditVertical;
  copy: FreeAuditCopy;
};

export default function FreeAuditLandingPage({ vertical, copy }: FreeAuditLandingPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      const response = await fetch(FORMSPARK_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _vertical: vertical,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", website: "" });

      trackFormSubmission(AUDIT_FORM_GA_LABEL[vertical]);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#audit-form") {
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 300);
      }
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-transparent">
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
          <div className="absolute inset-0 bg-[#000B16]/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:py-20 w-full">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
                {copy.heroHeadline}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed font-light">
                {copy.heroSubhead}
              </p>
              <div className="space-y-4 text-white/80">
                {copy.heroBenefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center mr-4 mt-1">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div id="audit-form" className="scroll-mt-20">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-premium border border-white/20">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
                    {copy.ctaLabel}
                  </h2>
                  <p className="text-gray-500 text-center text-sm">
                    {copy.formSubtext}
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
                      type="url"
                      name="website"
                      placeholder="Your Website URL *"
                      required
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
                        : copy.ctaLabel}
                  </button>
                </form>
                <p className="mt-6 text-[12px] text-gray-400 text-center leading-relaxed">
                  No spam. No sales pitch. Delivered in 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-16"
            title={copy.problemTitle}
            subtitle={copy.problemSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {copy.problemCards.map(([title, description], i) => (
              <div
                key={i}
                className="bg-rose-50/50 border border-rose-100 p-8 rounded-2xl transition-all hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                  <svg
                    className="w-5 h-5 text-rose-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {i === 0 ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    ) : i === 1 ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    ) : (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </>
                    )}
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-xl tracking-tight">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-gray-50/80 p-10 md:p-14 rounded-[2rem] border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary-950/10 group-hover:bg-primary-950 transition-colors" />
            <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
              {copy.problemCalloutTitle}
            </p>
            <p className="text-lg text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              {copy.problemCalloutBody}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeader
              className="mb-0"
              title={copy.whatsIncludedTitle}
              subtitle={copy.whatsIncludedSubtitle}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Speed + Mobile Issues
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                What's slowing your site down (especially on phones) and the top
                fixes that usually unlock more calls.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Local SEO + Visibility Gaps
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                The biggest local search issues that keep competitors ranking
                above you, and what to change first.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Conversion Leaks
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Where visitors are dropping off (calls, forms, booking) and the
                simplest changes to increase leads.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Priority Roadmap
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                A straightforward checklist you can give any developer, ordered
                by impact so you don't waste money.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <a
              href={AUDIT_FORM_ANCHOR}
              onClick={() => trackCTAClick(copy.ctaLabel, "What's Included")}
              className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
            >
              {copy.ctaLabel}
            </a>
            <p className="mt-5 text-sm text-gray-400 font-light">
              No spam. No pitch. Just clear next steps.
            </p>
          </div>
        </div>
      </section>

      <ExampleAuditOutputSection />
      <ProcessSection variant="light" copy={PROCESS_COPY_AUDIT_FIRST} />

      <section className="py-24 md:py-40 bg-white/60 backdrop-blur-sm relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-[1.1]">
            Find Out Exactly What's{" "}
            <span className="text-primary-600">Costing You Leads</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            {copy.ctaSubtext}
          </p>
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick(copy.ctaLabel, "Bottom CTA")}
            className="inline-flex items-center px-12 py-6 bg-primary-950 text-white rounded-2xl text-xl font-bold hover:bg-primary-900 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            {copy.ctaLabel}
          </a>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
  );
}
