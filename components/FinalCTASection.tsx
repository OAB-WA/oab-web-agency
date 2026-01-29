import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL, CALL_CTA_HREF, CALL_CTA_LABEL } from "@/lib/cta";

type FinalCTASectionProps = {
  title: string | React.ReactNode;
  subtitle?: string;
  variant?: "dark" | "light";
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  className?: string;
};

export default function FinalCTASection({
  title,
  subtitle,
  variant = "dark",
  primaryCTA = { label: PRIMARY_CTA_LABEL, href: PRIMARY_CTA_HREF },
  secondaryCTA = { label: CALL_CTA_LABEL, href: CALL_CTA_HREF },
  className,
}: FinalCTASectionProps) {
  const isDark = variant === "dark";

  if (isDark) {
    return (
      <Section className={`relative bg-primary-950 text-white py-24 md:py-40 overflow-hidden ${className || ""}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative text-center max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[1.1]">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/80 mb-12 font-light leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <CTAButton href={primaryCTA.href} variant="primary" dark className="px-10 py-5 text-lg font-bold">
              {primaryCTA.label}
            </CTAButton>
            <CTAButton href={secondaryCTA.href} variant="secondary" dark className="px-10 py-5 text-lg font-bold">
              {secondaryCTA.label}
            </CTAButton>
          </div>
        </div>
      </Section>
    );
  }

  // Light variant
  return (
    <Section className={`bg-neutral-50/20 backdrop-blur-sm py-20 md:py-32 ${className || ""}`}>
      <div className="text-center max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 font-light leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <CTAButton href={primaryCTA.href} variant="primary" className="px-10 py-5 text-lg font-bold">
            {primaryCTA.label}
          </CTAButton>
          <CTAButton href={secondaryCTA.href} variant="secondary" className="px-10 py-5 text-lg font-bold">
            {secondaryCTA.label}
          </CTAButton>
        </div>
      </div>
    </Section>
  );
}
