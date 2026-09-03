"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackFormSubmission, trackCTAClick } from "@/lib/gtag";
import SectionHeader from "@/components/SectionHeader";
import ReviewsMarqueeSection from "@/components/ReviewsMarqueeSection";
import CaseStudyCarousel from "@/components/CaseStudyCarousel";
import { getFeaturedCaseStudies } from "@/lib/caseStudies";
import ExampleAuditOutputSection from "@/components/ExampleAuditOutputSection";
import { AUDIT_FORM_ANCHOR } from "@/lib/cta";
import { BoltIcon, ChartBarIcon, MapPinIcon, PhoneIcon, SparklesIcon } from "@/components/Icons";

export default function AutoRepairWebsitesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    shopName: "",
    bays: "",
    monthlyLeadsGoal: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const payload = {
      ...formData,
      _form: "auto-repair-audit-request",
      _vertical: "auto-repair",
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
        throw new Error("Failed to submit audit request. Please try again.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        websiteUrl: "",
        shopName: "",
        bays: "",
        monthlyLeadsGoal: "",
      });

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "conversion", {
          send_to: "AW-17872130458/JB8nCJS-oOobEJqjjMpC",
          event_label: "Auto Repair Campaign - Free Audit Request",
          value: 100.0,
          currency: "USD",
          transaction_id: `auto-repair-audit-${Date.now()}`,
        });
      }
      trackFormSubmission("Auto Repair Campaign - Audit Form Submitted");

      setTimeout(() => setSubmitted(false), 6000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      console.error("Form error:", err);
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

  const autoRepairServices = [
    {
      title: "Brake & Rotor Repair Pages",
      desc: "Capture drivers searching for 'brake repair near me' with dedicated pricing context, warranty trust badges, and instant appointment booking.",
      icon: "🛑",
    },
    {
      title: "Check Engine & Diagnostics",
      desc: "Turn stressed motorists dealing with warning lights into immediate phone calls with clear diagnostic procedures and fast estimate forms.",
      icon: "⚡",
    },
    {
      title: "A/C & Heating Service",
      desc: "Dominate peak seasonal surges when summer heat or winter freezes hit your city, funneling high-ticket repair jobs to your shop.",
      icon: "❄️",
    },
    {
      title: "Transmission & Drivetrain",
      desc: "Win high-margin transmission rebuild and replacement jobs that usually get taken by expensive franchise dealerships.",
      icon: "⚙️",
    },
    {
      title: "Suspension & Steering",
      desc: "Showcase ASE certified alignment and suspension repairs with before/after diagnostic explanations and transparent pricing.",
      icon: "🔩",
    },
    {
      title: "Factory Scheduled Maintenance",
      desc: "Keep your bays full of steady 30k/60k/90k mile service jobs and oil changes with automated appointment reminders and review widgets.",
      icon: "📅",
    },
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* 1. Hero Section */}
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
          <div className="absolute inset-0 bg-[#000B16]/70"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24 md:py-28 w-full">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column: Value Prop */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs sm:text-sm font-semibold text-emerald-300 mb-8">
                <SparklesIcon className="w-4 h-4 text-emerald-400" />
                <span>Engineered for Independent Auto Repair Shops</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight text-white">
                Turn Local Drivers Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200">
                  Calls & Scheduled Bays
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light mb-10">
                While dealerships and competitors take high-ticket repair jobs from Google, your shop website might be leaking customers. We build fast, mobile-first websites designed specifically to win brake, diagnostic, and major repair jobs.
              </p>

              <div className="space-y-4 text-white/85">
                {[
                  "1-Tap mobile click-to-call for roadside drivers with urgent mechanical needs",
                  "Dedicated service pages that rank on Google above franchise chains",
                  "Built-in trust stack (ASE badges, warranties, financing, review integration)",
                  "Free 24-hour website audit showing your exact lead leaks",
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-base sm:text-lg font-light">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Free Audit Form */}
            <div id="apply-form" className="scroll-mt-24">
              <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/20">
                <div className="mb-8">
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
                    Free 24h Shop Audit
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Get Your Shop Website Audit
                  </h2>
                  <p className="text-gray-500 text-sm">
                    We&apos;ll inspect your speed, mobile conversion, and local search leaks. 100% free. No sales pitch.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <input
                      ref={firstInputRef}
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50 text-base"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="shopName"
                      placeholder="Auto Repair Shop Name *"
                      required
                      value={formData.shopName}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50 text-base"
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
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50 text-base"
                    />
                  </div>

                  <div>
                    <input
                      type="url"
                      name="websiteUrl"
                      placeholder="Current Website URL (or 'None') *"
                      required
                      value={formData.websiteUrl}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-900 bg-gray-50/50 text-base"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <select
                        name="bays"
                        value={formData.bays}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-700 bg-gray-50/50 text-sm"
                      >
                        <option value="">Service Bays?</option>
                        <option value="1-3">1–3 Bays</option>
                        <option value="4-6">4–6 Bays</option>
                        <option value="7+">7+ Bays</option>
                      </select>
                    </div>
                    <div>
                      <select
                        name="monthlyLeadsGoal"
                        value={formData.monthlyLeadsGoal}
                        onChange={handleChange}
                        className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-950/5 focus:border-primary-950 transition-all text-gray-700 bg-gray-50/50 text-sm"
                      >
                        <option value="">Monthly Goal?</option>
                        <option value="10-25">10–25 New Jobs</option>
                        <option value="25-50">25–50 New Jobs</option>
                        <option value="50+">50+ New Jobs</option>
                      </select>
                    </div>
                  </div>

                  {error && (
                    <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {submitted && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-lg text-sm font-medium">
                      ✓ Audit request received! We are analyzing your website and will email your full deliverable within 24 hours.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-[#001B3A] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#00152E] hover:shadow-xl active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {isSubmitting ? "Generating Request..." : submitted ? "Audit Requested ✓" : "Get Free Shop Audit (24h)"}
                  </button>
                </form>

                <p className="mt-4 text-[12px] text-gray-400 text-center">
                  Delivered in 24 hours. No sales pitch. No spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Reviews Marquee */}
      <ReviewsMarqueeSection variant="light" />

      {/* 3. Auto Repair Specific Leaks */}
      <section className="py-20 md:py-32 bg-neutral-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-16"
            title={
              <>
                The 4 Fatal Website Leaks Costing Auto Repair Shops{" "}
                <span className="text-rose-600">Thousands in Lost Bays</span>
              </>
            }
            subtitle="When a driver's vehicle breaks down, they search on Google and make a calling decision in under 10 seconds. Here is why ordinary shop websites fail:"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No 1-Tap Emergency Call</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Over 75% of auto repair searches happen on mobile phones. If a driver has to zoom in or copy a number, they bounce and call the next shop.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-rose-600 uppercase tracking-wider">Lost Emergency Calls</div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missing Service Pages</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  If your site lacks dedicated pages for Brakes, Transmissions, and Diagnostics, Google gives the #1 rank to dealerships and chains.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-rose-600 uppercase tracking-wider">Lost Search Rankings</div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Missing Trust Proof</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Motorists fear getting overcharged. If ASE badges, nationwide warranties, and 5-star reviews aren&apos;t front and center, they hesitate.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-rose-600 uppercase tracking-wider">Lost Trust & Hesitation</div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-2xl mb-4">⏳</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Slow Mobile Load Speeds</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">
                  Bloated WordPress themes taking 4+ seconds to load lose half their visitors before the shop address or phone number is even rendered.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-rose-600 uppercase tracking-wider">50%+ Mobile Bounce</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. High-Ticket Auto Repair Service Silos */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-16"
            title="Dedicated Landing Architecture for Your Highest-Margin Jobs"
            subtitle="We build high-converting dedicated service pages that rank on Google and convince local drivers your shop is the top specialist in town."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {autoRepairServices.map((svc, i) => (
              <div
                key={i}
                className="bg-neutral-50/70 p-8 rounded-3xl border border-neutral-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{svc.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{svc.title}</h3>
                <p className="text-sm text-neutral-600 font-light leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deliverable Audit Preview */}
      <ExampleAuditOutputSection showHeader={true} showCta={false} />

      {/* 6. Demonstration Case Studies */}
      <section className="py-20 md:py-32 bg-neutral-50/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-14"
            title="See Our Speed & Conversion Transformations"
            subtitle="Demonstration projects showing our mobile-first redesign approach and Core Web Vitals optimization."
          />

          <CaseStudyCarousel studies={getFeaturedCaseStudies(2)} />

          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400 mb-6 max-w-xl mx-auto">
              Demonstration showcase projects created to illustrate our performance and UX conversion approach.
            </p>
            <a
              href={AUDIT_FORM_ANCHOR}
              onClick={() => trackCTAClick("Get Free Shop Audit", "Auto Repair Page - Case Studies CTA")}
              className="btn-primary px-10 py-5 text-lg font-bold inline-block"
            >
              Get Free Shop Website Audit
            </a>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            className="mb-12"
            title="Frequently Asked Questions"
            subtitle="Common questions from auto repair shop owners about our websites and free audit."
          />

          <div className="space-y-5">
            {[
              {
                q: "How does the free 24-hour auto repair website audit work?",
                a: "You enter your name, shop name, and website URL. Within 24 hours, we analyze your mobile speed, Core Web Vitals, Google local search visibility, click-to-call placement, and service pages. You receive a plain-English scorecard with prioritized fixes. No obligation and no high-pressure sales pitch.",
              },
              {
                q: "Can you integrate with our shop management / appointment booking software?",
                a: "Yes. Whether you use Shopmonkey, Mitchell 1, Shop-Ware, Tekmetric, or a custom scheduling tool, we seamlessly integrate direct estimate and appointment requests into your site.",
              },
              {
                q: "How long does it take to launch a new auto repair website?",
                a: "Our typical delivery timeline is 1–2 weeks for standard websites and 2–3 weeks for complete packages. We work fast so your bays start filling with new calls as soon as possible.",
              },
              {
                q: "What is your 'Calls or It's Free' guarantee?",
                a: "If inbound calls or appointment requests do not increase within 30 days of website launch, you receive a full refund. We also guarantee sub-2.5s mobile page load speeds.",
              },
            ].map((faq, index) => (
              <div
                key={faq.q}
                className="bg-neutral-50 border border-neutral-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg font-bold text-gray-900 pr-4">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-950 font-bold transition-transform ${openFAQIndex === index ? "rotate-180" : ""}`}>
                    ↓
                  </span>
                </button>
                <AnimatePresence>
                  {openFAQIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden px-8 pb-6 text-neutral-600 font-light leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Bottom Dark CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-[#001B3A] via-[#00152E] to-[#001022] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 tracking-tight">
            Stop Losing Repair Jobs to Dealerships & Chains
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Get your free 24-hour shop audit now and see exactly what is holding your website back from winning local drivers.
          </p>
          <a
            href={AUDIT_FORM_ANCHOR}
            onClick={() => trackCTAClick("Get Free Shop Audit", "Auto Repair Bottom CTA")}
            className="inline-flex items-center px-10 py-5 bg-white text-primary-950 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            Get My Free Shop Audit
          </a>
          <p className="mt-6 text-xs text-white/50 uppercase tracking-widest font-bold">
            Delivered in 24 Hours • No Sales Pitch • 100% Free
          </p>
        </div>
      </section>
    </div>
  );
}
