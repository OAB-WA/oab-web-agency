"use client";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { TESTIMONIALS } from "@/lib/testimonials";

type ReviewsMarqueeSectionProps = {
  variant?: "light" | "dark";
  showStats?: boolean;
  className?: string;
};

export default function ReviewsMarqueeSection({
  variant = "light",
  showStats = false,
  className = "",
}: ReviewsMarqueeSectionProps) {
  const sectionTheme =
    variant === "dark"
      ? "bg-[#000B16] text-white"
      : "bg-neutral-50/50";

  return (
    <Section className={`${sectionTheme} overflow-hidden ${className}`}>
      <SectionHeader
        className={showStats ? "mb-12" : "mb-16"}
        title="Real Results From Service Business Owners"
        subtitle="See what it feels like when your website starts generating calls"
      />

      {showStats && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          <div
            className={`text-center p-7 rounded-[2rem] border ${
              variant === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-neutral-100"
            }`}
          >
            <div className={`text-5xl md:text-6xl font-bold mb-3 tracking-tighter ${
              variant === "dark" ? "text-white" : "text-primary-950"
            }`}>2-3x</div>
            <p className={`text-xs font-bold uppercase tracking-widest ${
              variant === "dark" ? "text-white/60" : "text-neutral-500"
            }`}>More phone calls</p>
          </div>
          <div
            className={`text-center p-7 rounded-[2rem] border ${
              variant === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-neutral-100"
            }`}
          >
            <div className={`text-5xl md:text-6xl font-bold mb-3 tracking-tighter ${
              variant === "dark" ? "text-white" : "text-primary-950"
            }`}>{"<2.5s"}</div>
            <p className={`text-xs font-bold uppercase tracking-widest ${
              variant === "dark" ? "text-white/60" : "text-neutral-500"
            }`}>Page load time</p>
          </div>
          <div
            className={`text-center p-7 rounded-[2rem] border col-span-2 md:col-span-1 ${
              variant === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-neutral-100"
            }`}
          >
            <div className={`text-5xl md:text-6xl font-bold mb-3 tracking-tighter ${
              variant === "dark" ? "text-white" : "text-primary-950"
            }`}>40%+</div>
            <p className={`text-xs font-bold uppercase tracking-widest ${
              variant === "dark" ? "text-white/60" : "text-neutral-500"
            }`}>More conversions</p>
          </div>
        </div>
      )}

      <ReviewsMarquee testimonials={TESTIMONIALS} variant={variant} />
    </Section>
  );
}

