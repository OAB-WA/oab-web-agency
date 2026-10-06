"use client";

import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import { TESTIMONIALS } from "@/lib/testimonials";

type ReviewsMarqueeSectionProps = {
  variant?: "light" | "dark";
  showStats?: boolean;
  className?: string;
  title?: string;
  subtitle?: string;
};

export default function ReviewsMarqueeSection({
  variant = "light",
  showStats = false,
  className = "",
  title = "Real Results From Service Business Owners",
  subtitle = "What business owners say after launching their high-speed, conversion-focused websites",
}: ReviewsMarqueeSectionProps) {
  const isDark = variant === "dark";
  const sectionTheme = isDark ? "bg-[#000B16] text-white" : "bg-neutral-50/60";

  return (
    <Section className={`${sectionTheme} overflow-hidden ${className}`}>
      {/* Centered Top Trust Pill */}
      <div className="flex justify-center mb-5 sm:mb-6">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold shadow-xs ${
            isDark
              ? "bg-white/10 text-white/90 border border-white/15"
              : "bg-white text-neutral-800 border border-neutral-200/80"
          }`}
        >
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span>5.0 / 5.0 Rating • 100% Client Satisfaction</span>
        </div>
      </div>

      <SectionHeader
        className={showStats ? "mb-12" : "mb-14 sm:mb-16"}
        title={title}
        subtitle={subtitle}
      />

      {showStats && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 max-w-5xl mx-auto">
          <div
            className={`text-center p-6 sm:p-7 rounded-2xl sm:rounded-[2rem] border shadow-xs ${
              isDark ? "bg-white/5 border-white/10" : "bg-white border-neutral-100"
            }`}
          >
            <div
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 tracking-tighter ${
                isDark ? "text-white" : "text-primary-950"
              }`}
            >
              2–3x
            </div>
            <p
              className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest ${
                isDark ? "text-white/60" : "text-neutral-500"
              }`}
            >
              More phone calls
            </p>
          </div>
          <div
            className={`text-center p-6 sm:p-7 rounded-2xl sm:rounded-[2rem] border shadow-xs ${
              isDark ? "bg-white/5 border-white/10" : "bg-white border-neutral-100"
            }`}
          >
            <div
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 tracking-tighter ${
                isDark ? "text-white" : "text-primary-950"
              }`}
            >
              {"<2.5s"}
            </div>
            <p
              className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest ${
                isDark ? "text-white/60" : "text-neutral-500"
              }`}
            >
              Page load time
            </p>
          </div>
          <div
            className={`text-center p-6 sm:p-7 rounded-2xl sm:rounded-[2rem] border col-span-2 md:col-span-1 shadow-xs ${
              isDark ? "bg-white/5 border-white/10" : "bg-white border-neutral-100"
            }`}
          >
            <div
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-3 tracking-tighter ${
                isDark ? "text-white" : "text-primary-950"
              }`}
            >
              40%+
            </div>
            <p
              className={`text-[11px] sm:text-xs font-bold uppercase tracking-widest ${
                isDark ? "text-white/60" : "text-neutral-500"
              }`}
            >
              More conversions
            </p>
          </div>
        </div>
      )}

      <ReviewsMarquee testimonials={TESTIMONIALS} variant={variant} />
    </Section>
  );
}


