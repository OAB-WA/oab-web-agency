"use client";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

export default function TripleGuaranteeSection() {
  return (
    <Section className="bg-emerald-50/20 backdrop-blur-sm py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white text-emerald-600 mb-8 shadow-sm border border-emerald-100">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <SectionHeader
            className="mb-0"
            title="Our Triple Guarantee"
            subtitle="We remove the risk. You get a fast website built to generate calls, with clear expectations and real tracking."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Fast Delivery</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Delivered in{" "}
              <span className="font-bold text-emerald-600">1–2 weeks</span> (new sites/redesigns) or{" "}
              <span className="font-bold text-emerald-600">2–3 weeks</span> (complete packages), or it's{" "}
              <span className="font-bold text-emerald-600">free</span>.
              <span className="text-xs text-neutral-400 block mt-4 italic">Assumes prompt feedback.</span>
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Lightning Fast</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              Loads in under <span className="font-bold text-emerald-600">2.5 seconds</span> or we{" "}
              <span className="font-bold text-emerald-600">fix it free</span>.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-emerald-100 hover:shadow-md transition-all">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Calls or It's Free</h3>
            <p className="text-neutral-600 font-light leading-relaxed">
              If inbound calls or booked jobs do not increase within{" "}
              <span className="font-bold text-emerald-600">30 days of website launch</span>, you get a full refund.
              <span className="text-xs text-neutral-400 block mt-4 italic">
                Calls are tracked via call tracking. Booked jobs are tracked via form submissions or booking system integrations. Client must answer calls during normal business hours and respond to booking requests promptly.
              </span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

