"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { trackFormSubmission, trackCTAClick } from "@/lib/gtag";

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
              While your competitors get calls from Google, you're losing customers to slow websites. Get a free audit showing exactly how many leads you're missing.
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
                  Get Your Free Website Audit
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
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
                      : "Get Your Free Website Audit →"}
                  </button>
                </form>
                <p className="mt-4 text-xs text-gray-600 text-center">
                  No spam. No sales pitch. Delivered in 24 hours.
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
              Your Website Is Costing You Customers Every Day
            </h2>
            <p className="text-lg text-gray-600">
              Most service businesses lose 40-60% of potential customers before they even see your services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-xl">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">
                Weak CTAs = Visitors Don't Know How to Contact You
              </h3>
              <p className="text-gray-700">
                Visitors can't find your phone number or contact form. They leave. Your competitor gets the call.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center bg-gray-50 p-8 rounded-2xl border-2 border-red-200">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Every day your website is slow or hard to find, you're losing jobs to competitors.
            </p>
            <p className="text-lg text-gray-700">
              The average service business loses $2,000-$5,000 per month in missed opportunities from a poor website.
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
            Not fancy designs. Not award-winning portfolios. We build fast, conversion-focused websites that get plumbers, HVAC companies, and electricians more phone calls and booked appointments.
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Most clients see 2-3x more leads within 30 days. Your website pays for itself in the first month.
          </p>
          <a
            href="#audit-form"
            onClick={() => trackCTAClick("Get Your Free Website Audit", "Solution Section")}
            className="inline-flex items-center justify-center rounded-xl bg-[#001B3A] px-10 py-5 text-lg font-bold text-white hover:bg-[#00152E] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02]"
          >
            Get Your Free Website Audit →
          </a>
        </div>
      </section>

      {/* Proof / Credibility Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results From Service Business Owners
            </h2>
            <p className="text-lg text-gray-600">
              See how other plumbers, HVAC companies, and electricians are getting more calls
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#001B3A] mb-2">2-3x</div>
              <p className="text-gray-700 font-medium">More phone calls</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#001B3A] mb-2">&lt;2s</div>
              <p className="text-gray-700 font-medium">Page load time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#001B3A] mb-2">40%+</div>
              <p className="text-gray-700 font-medium">More conversions</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5 p-8 rounded-2xl border border-[#001B3A]/20">
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
                "We went from 2-3 calls a week to 10-15 calls a week after our website redesign. The investment paid for itself in the first month."
              </p>
              <p className="text-gray-900 font-semibold">— Service Business Owner</p>
              <p className="text-sm text-gray-600">Plumbing Company</p>
            </div>

            <div className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5 p-8 rounded-2xl border border-[#001B3A]/20">
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
                "Our website was so slow, customers were leaving before it loaded. After optimization, we're getting 3x more leads. Best investment this year."
              </p>
              <p className="text-gray-900 font-semibold">— Service Business Owner</p>
              <p className="text-sm text-gray-600">HVAC Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple 3-Step Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Get You More Calls & Booked Jobs
            </h2>
            <p className="text-lg text-gray-600">
              Simple 3-step process. Delivered in 1-2 weeks.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-[#001B3A] text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Get Your Free Website Audit
                </h3>
                <p className="text-gray-700">
                  We analyze your current website and show you exactly what's costing you leads. You'll see speed issues, SEO problems, and how many jobs you're missing each month.
                </p>
              </div>
            </div>

            <div className="flex items-start">
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
            </div>

            <div className="flex items-start">
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
            </div>
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
              <div className="text-4xl font-bold text-[#001B3A] mb-4">&lt;2s</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lightning Fast Loading
              </h3>
              <p className="text-gray-700">
                Pages load in under 2 seconds. Fast sites rank higher in Google and keep visitors from leaving.
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
            See Exactly How Many Leads Your Website Is Costing You
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get a free website audit showing speed issues, SEO problems, and conversion opportunities. No sales pitch. Just real numbers.
          </p>
          <a
            href="#audit-form"
            onClick={() => trackCTAClick("Get Your Free Website Audit", "Strong CTA Section")}
            className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-lg font-bold text-[#001B3A] hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02]"
          >
            Get Your Free Website Audit →
          </a>
          <p className="mt-4 text-sm text-white/80">
            Delivered in 24 hours. No obligation.
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Triple Guarantee
            </h2>
            <p className="text-lg text-gray-700">
              We remove all the risk. You get results or your money back.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-700">
                Delivered in <span className="font-bold text-green-700">1-2 weeks</span> or it's <span className="font-bold text-green-700">free</span>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-700">
                Loads in under <span className="font-bold text-green-700">2 seconds</span> or we <span className="font-bold text-green-700">fix it free</span>.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Money-Back</h3>
              <p className="text-sm text-gray-700">
                Not happy? <span className="font-bold text-green-700">Full refund</span> in <span className="font-bold text-green-700">30 days</span>. No questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Repeat Ask */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stop Losing Jobs to Competitors
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Every day your website is slow or hard to find, you're losing customers. Get your free audit and see exactly what's costing you leads.
          </p>
          <a
            href="#audit-form"
            onClick={() => trackCTAClick("Get Your Free Website Audit", "Solution Section")}
            className="inline-flex items-center justify-center rounded-xl bg-[#001B3A] px-10 py-5 text-lg font-bold text-white hover:bg-[#00152E] transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-[1.02]"
          >
            Get Your Free Website Audit →
          </a>
          <p className="mt-4 text-sm text-gray-600">
            No spam. No sales pitch. Just actionable insights about your website.
          </p>
        </div>
      </section>
    </div>
  );
}
