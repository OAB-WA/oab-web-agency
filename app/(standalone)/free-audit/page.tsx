"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackFormSubmission, trackCTAClick, trackOutboundLink } from "@/lib/gtag";

export default function LandingPage() {
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
      quote: "The team understood that I need phone calls, not a fancy website. They built something that actually generates jobs. I'm now ranking on page 1 for 'electrician [my city]' and the phone won't stop ringing.",
      author: "Service Business Owner",
      role: "Electrical Services",
      rating: 5
    }
  ];

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
                    Get Your Free Audit
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
                      : "Get My Free Audit →"}
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Your Website (Or Lack of One) Is Costing You Customers Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Most service businesses lose 40-60% of potential customers. Whether you have a slow website or no website at all, you're losing jobs to competitors.
            </p>
          </div>

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
                If your site takes more than 3 seconds, 53% of visitors leave. They call your competitor instead.
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
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            We Build Websites That Get You More Phone Calls & Booked Jobs
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
            Not fancy designs. Not award-winning portfolios. We build fast, conversion-focused websites that get service businesses more phone calls and booked appointments. We specialize in helping plumbers, HVAC companies, electricians, and other trades.
          </p>
          <p className="text-lg text-gray-500 mb-12 font-light">
            Most clients see 2-3x more leads within 30 days. Your website pays for itself in the first month.
          </p>
          <a
            href="#audit-form"
            onClick={() => trackCTAClick("Get Your Free Website Audit or Consultation", "Solution Section")}
            className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
          >
            Get Your Free Audit or Consultation →
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32 bg-gray-50/40 backdrop-blur-sm overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Real Results From Service Business Owners
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              See how we're helping service businesses dominate their local markets
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-950 mb-4 tracking-tighter">2-3x</div>
              <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">More phone calls</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-950 mb-4 tracking-tighter">&lt;2.5s</div>
              <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">Page load time</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-950 mb-4 tracking-tighter">40%+</div>
              <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">More conversions</p>
            </div>
          </motion.div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Demo Case Studies Section */}
      <section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              See How We Transform Service Business Websites
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
              Demonstration projects showing our approach to building conversion-focused websites
            </p>
          </motion.div>

          <div className="space-y-16">
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
              The plumbing redesign above is an unsolicited redesign of a real website, created to demonstrate our capabilities. 
              We were not hired by this client. Your results will vary based on your specific business needs.
            </p>
            <a
              href="#audit-form"
              onClick={() => trackCTAClick("Get Your Free Audit or Consultation", "Demo Case Studies")}
              className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
            >
              Get Your Free Audit or Consultation →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-24 md:py-32 bg-gray-50/40 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              How We Get You More Calls & Booked Jobs
            </h2>
            <p className="text-xl text-neutral-600 font-light leading-relaxed">
              Simple 3-step process. Delivered in 1-2 weeks.
            </p>
          </motion.div>

          <div className="space-y-10">
            {[
              { 
                num: 1, 
                title: "Get Your Free Website Audit or Consultation", 
                text: "If you have a website, we'll analyze it and show you exactly what's costing you leads: speed issues, SEO problems, and how many jobs you're missing. Don't have a website? We'll discuss building a new one from scratch that gets you more calls and jobs." 
              },
              { 
                num: 2, 
                title: "Build Your Lead-Generating Website", 
                text: "We build a website designed to get you more phone calls and booked appointments. We focus on speed, mobile experience, and local SEO. We handle everything. You just focus on your jobs. Delivered in 1-2 weeks." 
              },
              { 
                num: 3, 
                title: "Launch & Get More Calls", 
                text: "We launch your new site and optimize it based on real data. You'll see more phone calls and more booked jobs. Your website pays for itself through new customers." 
              }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row items-start bg-white p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-950 text-white rounded-2xl flex items-center justify-center font-bold text-3xl mb-6 md:mb-0 md:mr-10 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed font-light">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="#audit-form"
              onClick={() => trackCTAClick("Get Your Free Website Audit or Consultation", "Process Section")}
              className="inline-flex items-center px-10 py-5 bg-primary-950 text-white rounded-2xl text-lg font-bold hover:bg-primary-900 transition-all shadow-lg hover:shadow-2xl active:scale-[0.98]"
            >
              Get Your Free Audit or Consultation →
            </a>
          </div>
        </div>
      </section>

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
            href="#audit-form"
            onClick={() => trackCTAClick("Get Your Free Website Audit or Consultation", "Bottom CTA")}
            className="inline-flex items-center px-12 py-6 bg-primary-950 text-white rounded-2xl text-xl font-bold hover:bg-primary-900 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            Get Your Free Audit or Consultation →
          </a>
        </div>
        
        {/* Background accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />
      </section>
    </div>
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
    <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] shadow-premium border border-white/40 h-full flex flex-col justify-between transition-all duration-500 hover:shadow-2xl text-center md:text-left">
      <div>
        {/* Star Rating */}
        <div className="flex items-center justify-center md:justify-start gap-1 mb-8">
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
      
      <div className="flex flex-col md:flex-row items-center gap-5 border-t border-gray-100 pt-8 mt-auto">
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

function DemoCaseStudy({
  businessType,
  label,
  disclaimer,
  problem,
  improvement,
  outcome,
  imageUrl,
  beforeImageUrl,
  originalWebsiteUrl,
  demoUrl,
  performance,
}: {
  businessType: string;
  label: string;
  disclaimer: string;
  problem: string;
  improvement: string;
  outcome: string;
  imageUrl: string;
  beforeImageUrl?: string;
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
    <div className="bg-white rounded-[3rem] border border-gray-100 shadow-premium overflow-hidden transition-all hover:shadow-2xl">
      <div className="p-8 md:p-14">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-50 text-primary-950 text-xs font-bold uppercase tracking-widest mb-4 border border-primary-100">
              {label}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-none mb-2">
              {businessType}
            </h3>
            <p className="text-gray-400 font-light italic text-sm">Case Study & Technical Report</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {originalWebsiteUrl && (
              <a 
                href={originalWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-gray-200 text-gray-600 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-all"
                onClick={() => trackOutboundLink(originalWebsiteUrl, "View Original Site")}
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

        <div className="mb-12 p-8 bg-primary-50/30 border border-primary-100 rounded-3xl flex items-start gap-5">
          <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-primary-600 text-sm font-bold">i</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed italic font-light">
            {disclaimer}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-sm shadow-sm">!</div>
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[11px]">The Problem</h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-xl">
                {problem}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm shadow-sm">✓</div>
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[11px]">The Strategy</h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-xl">
                {improvement}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-sm shadow-sm">★</div>
                <h4 className="font-bold text-gray-400 uppercase tracking-widest text-[11px]">The Result</h4>
              </div>
              <p className="text-gray-700 leading-relaxed font-light text-xl">
                {outcome}
              </p>
            </div>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">Original Website</p>
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm grayscale opacity-40 transition-all hover:grayscale-0 hover:opacity-100 group">
                  <Image src={beforeImageUrl || ""} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-bold text-primary-950 uppercase tracking-widest text-center">Our Redesign</p>
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border-2 border-primary-950 shadow-xl group">
                  <Image src={imageUrl || ""} alt="" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </div>
            </div>

            {performance && (
              <div className="p-10 bg-gray-50/50 rounded-[2.5rem] border border-gray-100">
                <div className="flex items-center justify-between mb-10">
                  <h5 className="font-bold text-gray-900 uppercase tracking-widest text-[11px]">Performance Audit</h5>
                  <div className="px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    High Performance
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
      </div>
    </div>
  );
}
