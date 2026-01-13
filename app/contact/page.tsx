"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { trackFormSubmission, trackOutboundLink } from "@/lib/gtag";
import { CALENDLY_URL } from "@/lib/constants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
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
      setFormData({ name: "", email: "", phone: "", business: "", message: "" });
      
      // Track form submission
      trackFormSubmission("Contact Form");
      
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="relative text-white pt-32 pb-24 md:py-40 overflow-hidden -mt-20">
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
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
              Let's Get You <span className="text-primary-400">More Calls & Jobs</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto">
              Book a free 15-minute call or get a free website audit showing exactly what's costing you leads. No sales pitch, just real data.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 md:py-32 bg-white/60 backdrop-blur-sm">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto px-4">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-neutral-100"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-950 focus:border-transparent outline-none transition-all placeholder:text-neutral-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-950 focus:border-transparent outline-none transition-all placeholder:text-neutral-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-950 focus:border-transparent outline-none transition-all placeholder:text-neutral-300"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Business Name</label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your Business LLC"
                    className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-950 focus:border-transparent outline-none transition-all placeholder:text-neutral-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">How can we help? *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or current website..."
                  className="w-full px-5 py-4 bg-neutral-50 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-950 focus:border-transparent outline-none transition-all placeholder:text-neutral-300"
                />
              </div>

              {error && (
                <div className="bg-rose-50 border border-rose-100 text-rose-600 px-5 py-4 rounded-xl text-sm font-light">
                  {error}
                </div>
              )}

              {submitted && (
                <div className="bg-emerald-50 border border-emerald-100 text-emerald-600 px-5 py-4 rounded-xl text-sm font-light">
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full bg-primary-950 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-primary-900 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : submitted ? "Message Sent! ✓" : "Send Message →"}
              </button>
            </form>
          </motion.div>

          {/* Side Info */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">
                What Happens Next?
              </h2>
              <div className="space-y-10">
                {[
                  {
                    step: "1",
                    title: "We Review Your Request",
                    text: "We'll review your message and current website status, getting back to you within 24 hours."
                  },
                  {
                    step: "2",
                    title: "Schedule a Call",
                    text: "We'll hop on a free 15-minute strategy call to discuss your goals and needs."
                  },
                  {
                    step: "3",
                    title: "Get Your Free Audit",
                    text: "If you have a website, we'll provide a detailed performance report. If not, we'll build a clear launch plan."
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start group">
                    <div className="flex-shrink-0 w-12 h-12 bg-neutral-50 text-primary-950 rounded-2xl flex items-center justify-center font-bold text-xl mr-6 border border-neutral-100 group-hover:bg-primary-950 group-hover:text-white transition-colors duration-300 shadow-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-50/50 p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Prefer to Talk?
              </h3>
              <p className="text-neutral-600 font-light mb-8 leading-relaxed">
                Book a call directly using our calendar. No form required.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackOutboundLink(CALENDLY_URL, "Book a 15-Minute Call - Contact Page")}
                className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary-950 border border-neutral-200 rounded-2xl font-bold hover:bg-neutral-50 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                Book a 15-Minute Call →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

