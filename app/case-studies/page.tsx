import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import CaseStudyCard from "@/components/CaseStudyCard";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { getCaseStudiesNewestFirst } from "@/lib/caseStudies";
import { CALL_CTA_HREF, CALL_CTA_LABEL, PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";
import StatsSection from "@/components/StatsSection";

export default function CaseStudiesPage() {
  return (
    <div className="bg-transparent">
      {/* Hero */}
      <section className="relative text-white pt-32 pb-24 md:py-40 overflow-hidden -mt-20">
        <div className="absolute inset-0">
          <Image src="/abstract_bg.png" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-[#000B16]/60"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight px-2">
              See How We Transform Service <span className="text-primary-400">Business Websites</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl mx-auto px-2">
              Demonstration projects showing our approach to building conversion-focused websites that actually generate revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <Section className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white/60 via-white/80 to-white/60 backdrop-blur-sm">
        <div className="space-y-16 sm:space-y-24 md:space-y-32 max-w-7xl mx-auto px-4 sm:px-6">
          {getCaseStudiesNewestFirst().map((study) => (
            <CaseStudyCard key={study.id} study={study} variant="full" />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 md:mt-20 max-w-3xl mx-auto px-4">
          <p className="text-xs sm:text-sm text-neutral-400 mb-4 font-light italic leading-relaxed">
            *Redesign showcases are demonstration projects created to illustrate our approach. Results vary based on business needs.
          </p>
        </div>
      </Section>

      {/* Results Summary */}
      <StatsSection />

      {/* CTA */}
      <Section className="relative bg-primary-950 text-white py-16 sm:py-20 md:py-24 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] sm:w-[40rem] sm:h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 tracking-tight leading-[1.1]">
            Ready to Get More <span className="text-primary-400">Calls & Booked Jobs?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-10 md:mb-12 font-light leading-relaxed">
            Let's discuss how we can help your service business get more phone calls, more booked jobs, and more revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center">
            <CTAButton href={CALL_CTA_HREF} variant="primary" dark className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold touch-manipulation min-h-[44px]">
              {CALL_CTA_LABEL}
            </CTAButton>
            <CTAButton href={PRIMARY_CTA_HREF} variant="secondary" dark className="px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-bold touch-manipulation min-h-[44px]">
              {PRIMARY_CTA_LABEL}
            </CTAButton>
          </div>
        </div>
      </Section>
    </div>
  );
}

