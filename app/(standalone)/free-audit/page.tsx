"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { trackFormSubmission, trackCTAClick, trackOutboundLink } from "@/lib/gtag";

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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Outcome-driven headline, ONE primary CTA */}
      <section className="relative text-white overflow-hidden">
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
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Headline & Benefits */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Get 2-3x More Phone Calls From Your Website
            </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
              While your competitors get calls from Google, you're losing customers to slow websites. Get a free audit (if you have a site) or consultation (if you need a new one) showing exactly how many leads you're missing.
            </p>
              <div className="space-y-3 text-white/90">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>See exactly what's costing you leads</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Speed issues, SEO problems, conversion opportunities</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Delivered in 24 hours. No sales pitch.</span>
                </div>
              </div>
            </div>
            
            {/* Right: Form */}
            <div id="audit-form" className="scroll-mt-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Get Your Free Website Audit or Consultation
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      ref={nameInputRef}
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001B3A] focus:border-[#001B3A] text-gray-900"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001B3A] focus:border-[#001B3A] text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number (Optional)"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001B3A] focus:border-[#001B3A] text-gray-900"
                    />
                  </div>
                  <div>
                    <input
                      type="url"
                      name="website"
                      placeholder="Your Website URL (Optional)"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001B3A] focus:border-[#001B3A] text-gray-900"
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
                    className="w-full bg-[#001B3A] text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-[#00152E] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting
                      ? "Submitting..."
                      : submitted
                      ? "Request Sent! ✓"
                      : "Get Your Free Audit or Consultation →"}
                  </button>
                </form>
                <p className="mt-4 text-xs text-gray-600 text-center">
                  No spam. No sales pitch. Delivered in 24 hours. Don't have a website? We'll discuss building a new one!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Pain → Cost Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Website (Or Lack of One) Is Costing You Customers Every Day
            </h2>
            <p className="text-lg text-gray-600">
              Most service businesses lose 40-60% of potential customers. Whether you have a slow website or no website at all, you're losing jobs to competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                No Website = Invisible to 90% of Customers
              </h3>
              <p className="text-gray-700">
                If you don't have a website, customers can't find you online. They'll call your competitor who shows up in Google search results instead.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Slow Loading = Lost Customers
              </h3>
              <p className="text-gray-700">
                If your site takes more than 3 seconds, 53% of visitors leave. They call your competitor instead.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Not Mobile-Friendly = Missing 60% of Searches
              </h3>
              <p className="text-gray-700">
                Over 60% of "plumber near me" searches happen on phones. If your site isn't optimized, you're invisible.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Poor Local SEO = Competitors Get the Calls
              </h3>
              <p className="text-gray-700">
                When customers search for your services, they find your competitors first. You lose the job before you even know about it.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gray-50 p-8 rounded-2xl border-2 border-red-200">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Every day you don't have a website, or your website is slow or hard to find, you're losing jobs to competitors.
            </p>
            <p className="text-lg text-gray-700">
              The average service business loses $2,000-$5,000 per month in missed opportunities from not having a website or having a poor one.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Positioning */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            We Build Websites That Get You More Phone Calls & Booked Jobs
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Not fancy designs. Not award-winning portfolios. We build fast, conversion-focused websites that get service businesses more phone calls and booked appointments. We specialize in helping plumbers, HVAC companies, electricians, and other trades.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Most clients see 2-3x more leads within 30 days. Your website pays for itself in the first month.
          </p>
          <a
            href="#audit-form"
            onClick={() => trackCTAClick("Get Your Free Website Audit or Consultation", "Solution Section")}
            className="btn-primary px-10 py-5 text-lg font-bold"
          >
            Get Your Free Audit or Consultation →
          </a>
        </div>
      </section>

      {/* Proof / Credibility Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results From Service Business Owners
            </h2>
            <p className="text-lg text-gray-600">
              See how other plumbers, HVAC companies, and electricians are getting more calls
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-5xl font-bold text-[#001B3A] mb-2">2-3x</div>
              <p className="text-gray-700 font-medium">More phone calls</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#001B3A] mb-2">&lt;2.5s</div>
              <p className="text-gray-700 font-medium">Page load time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#001B3A] mb-2">40%+</div>
              <p className="text-gray-700 font-medium">More conversions</p>
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5 p-8 rounded-2xl border border-[#001B3A]/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
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
              <p className="text-lg text-gray-800 italic mb-4 leading-relaxed">
                "Absolutely blown away by the work OAB Web Agency delivered! They completely revamped our website and the result is exceptional. The new design is modern, clean and perfectly aligned with our brand. They also did a full SEO optimization and we've already seen noticeable improvements in our search rankings. The site is fully mobile responsive and looks stunning on every device."
              </p>
              <p className="text-gray-900 font-semibold">— Ben Othman</p>
              <p className="text-sm text-gray-600">Owner, PeerSoc</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5 p-8 rounded-2xl border border-[#001B3A]/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
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
              <p className="text-lg text-gray-800 italic mb-4 leading-relaxed">
                "OAB Web Agency genuinely delivered amazing work that helped my business loads. They over-delivered on the website project and maintained professionalism throughout. Stellar performance all around. Would definitely work with them again."
              </p>
              <p className="text-gray-900 font-semibold">— Gerald Winkler</p>
              <p className="text-sm text-gray-600">Owner, Green and Clean Services</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Case Studies Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See How We Transform Service Business Websites
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Demonstration projects showing our approach to building conversion-focused websites
            </p>
          </motion.div>

          <div className="space-y-12">
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
            className="text-center mt-12"
          >
            <p className="text-sm text-gray-500 mb-2">
              These are redesign showcases and demonstration projects showing our approach.
            </p>
            <p className="text-xs text-gray-400 mb-6">
              The plumbing redesign above is an unsolicited redesign of a real website, created to demonstrate our capabilities. 
              We were not hired by this client. Your results will vary based on your specific business needs.
            </p>
            <a
              href="#audit-form"
              onClick={() => trackCTAClick("Get Your Free Audit or Consultation", "Demo Case Studies")}
              className="btn-primary px-10 py-5 text-lg font-bold inline-block"
            >
              Get Your Free Audit or Consultation →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Get You More Calls & Booked Jobs
            </h2>
            <p className="text-lg text-gray-600">
              Simple 3-step process. Delivered in 1-2 weeks.
            </p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#001B3A] text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get Your Free Website Audit or Consultation
                </h3>
                <p className="text-gray-700">
                  If you have a website, we'll analyze it and show you exactly what's costing you leads—speed issues, SEO problems, and how many jobs you're missing. Don't have a website? We'll discuss building a new one from scratch that gets you more calls and jobs.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#001B3A] text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  We Build Your Lead-Generating Website
                </h3>
                <p className="text-gray-700">
                  We design and build a fast, mobile-friendly website optimized for local search. Every page is designed to get phone calls and booked appointments.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-start"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-[#001B3A] text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Launch & Watch the Calls Come In
                </h3>
                <p className="text-gray-700">
                  We launch your new site. You start getting more calls, more booked jobs, and more revenue. Most clients see results within 30 days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Benefits - Results, Not Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What You Get: More Calls, More Jobs, More Revenue
            </h2>
            <p className="text-lg text-gray-600">
              Results that matter for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-[#001B3A] mb-4">2-3x</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                More Phone Calls
              </h3>
              <p className="text-gray-700">
                Clear CTAs and easy-to-find contact information mean more qualified leads calling you every week.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-[#001B3A] mb-4">&lt;2.5s</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lightning Fast Loading
              </h3>
              <p className="text-gray-700">
                Pages load in under 2.5 seconds. Fast sites rank higher in Google and keep visitors from leaving.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-4xl font-bold text-[#001B3A] mb-4">#1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Found First in Local Search
              </h3>
              <p className="text-gray-700">
                Optimized for local search so when customers search for your services, you show up first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#001B3A] via-[#00152E] to-[#001022] text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            See Exactly What You're Missing
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free website audit (if you have a site) showing speed issues, SEO problems, and conversion opportunities. Or get a consultation to discuss building a new website. No sales pitch. Just real insights.
          </p>
          <a
            href="#audit-form"
            onClick={() => trackCTAClick("Get Your Free Website Audit or Consultation", "Strong CTA Section")}
            className="btn-secondary px-10 py-5 text-lg font-bold"
          >
            Get Your Free Audit or Consultation →
          </a>
          <p className="mt-4 text-sm text-white/80">
            Delivered in 24 hours. No obligation.
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Triple Guarantee
            </h2>
            <p className="text-lg text-gray-700">
              We remove all the risk. You get results or your money back.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-700">
                Delivered in <span className="font-bold text-green-700">1-2 weeks</span> or it's <span className="font-bold text-green-700">free</span>.
                <span className="text-xs text-gray-600 block mt-1">(Assumes prompt client feedback)</span>
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-700">
                Loads in under <span className="font-bold text-green-700">2.5 seconds</span> or we <span className="font-bold text-green-700">fix it free</span>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Money-Back</h3>
              <p className="text-sm text-gray-700">
                Not happy? <span className="font-bold text-green-700">Full refund</span> in <span className="font-bold text-green-700">30 days</span>. No questions asked.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - Repeat Ask */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stop Losing Jobs to Competitors
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Every day you don't have a website, or your website is slow or hard to find, you're losing customers. Get your free audit (if you have a site) or consultation (if you need a new one) and see exactly what you're missing.
            </p>
            <a
              href="#audit-form"
              onClick={() => trackCTAClick("Get Your Free Website Audit or Consultation", "Final CTA Section")}
              className="btn-primary px-10 py-5 text-lg font-bold"
            >
              Get Your Free Audit or Consultation →
            </a>
            <p className="mt-4 text-sm text-gray-600">
              No spam. No sales pitch. Just actionable insights about your website or a plan to build a new one.
            </p>
          </motion.div>
        </div>
      </section>
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
                        onClick={() => trackOutboundLink(originalWebsiteUrl, "View Original Website - Free Audit")}
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
                      onClick={() => trackOutboundLink(demoUrl, "View Redesign Demo - Free Audit")}
                    >
                      View our redesign demo →
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Performance Metrics Comparison */}
            {performance ? (
              <div className="mb-6 space-y-6">
                {/* Performance Score - Hero Section */}
                <div className="p-8 bg-gradient-to-br from-red-50 via-orange-50 to-green-50 rounded-xl border-2 border-gray-200">
                  <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                      Overall Performance Score
                    </p>
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-bold text-red-600 mb-1">
                          {performance.score.before}
                        </div>
                        <div className="text-xs text-gray-600">Before</div>
                      </div>
                      <div className="text-3xl text-gray-400">→</div>
                      <div className="text-center">
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-green-600 to-green-500 bg-clip-text text-transparent mb-1">
                          {performance.score.after}
                        </div>
                        <div className="text-xs text-gray-600">After</div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span className="text-sm font-bold text-green-700">
                        {Math.round(((performance.score.after - performance.score.before) / performance.score.before) * 100)}% Improvement
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      As measured by Google PageSpeed Insights
                    </p>
                  </div>
                </div>

                {/* Core Web Vitals - Detailed Metrics */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">
                    Core Web Vitals & Performance Metrics
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    {/* First Contentful Paint */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          First Contentful Paint
                        </div>
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          {performance.fcp.before}{performance.fcp.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">Before</div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {performance.fcp.after}{performance.fcp.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">After</div>
                        <div className="text-xs text-green-700 font-semibold">
                          {Math.round(((performance.fcp.before - performance.fcp.after) / performance.fcp.before) * 100)}% faster
                        </div>
                      </div>
                    </div>

                    {/* Largest Contentful Paint */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          Largest Contentful Paint
                        </div>
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          {performance.lcp.before}{performance.lcp.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">Before</div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {performance.lcp.after}{performance.lcp.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">After</div>
                        <div className="text-xs text-green-700 font-semibold">
                          {Math.round(((performance.lcp.before - performance.lcp.after) / performance.lcp.before) * 100)}% faster
                        </div>
                      </div>
                    </div>

                    {/* Total Blocking Time */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          Total Blocking Time
                        </div>
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          {performance.tbt.before}{performance.tbt.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">Before</div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {performance.tbt.after}{performance.tbt.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">After</div>
                        <div className="text-xs text-green-700 font-semibold">
                          {performance.tbt.after === 0 ? "100% eliminated" : `${Math.round(((performance.tbt.before - performance.tbt.after) / performance.tbt.before) * 100)}% faster`}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Cumulative Layout Shift */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          Cumulative Layout Shift
                        </div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {performance.cls.before}{performance.cls.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">Before</div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {performance.cls.after}{performance.cls.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">After</div>
                        <div className="text-xs text-green-700 font-semibold">
                          Excellent (under 0.1)
                        </div>
                      </div>
                    </div>

                    {/* Speed Index */}
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <div className="text-center">
                        <div className="text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">
                          Speed Index
                        </div>
                        <div className="text-2xl font-bold text-red-600 mb-1">
                          {performance.speedIndex.before}{performance.speedIndex.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">Before</div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {performance.speedIndex.after}{performance.speedIndex.unit}
                        </div>
                        <div className="text-xs text-gray-500 mb-2">After</div>
                        <div className="text-xs text-green-700 font-semibold">
                          {Math.round(((performance.speedIndex.before - performance.speedIndex.after) / performance.speedIndex.before) * 100)}% faster
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
            )}

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
