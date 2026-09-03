"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Testimonial } from "@/lib/testimonials";

type ReviewsMarqueeProps = {
  testimonials: Testimonial[];
  variant?: "light" | "dark";
  speedSeconds?: number;
};

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-neutral-200/80"}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  testimonial,
  variant,
  className = "",
  onMouseEnter,
  onMouseLeave,
}: {
  testimonial: Testimonial;
  variant: "light" | "dark";
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const isDark = variant === "dark";
  const initials = testimonial.author
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <article
      className={`group relative shrink-0 w-[290px] sm:w-[360px] md:w-[400px] overflow-hidden rounded-2xl border pl-5 pr-8 py-8 md:pl-6 md:pr-9 md:py-9 shadow-sm transition-transform duration-300 will-change-transform ${
        isDark
          ? "border-white/10 bg-white/[0.08] text-white"
          : "border-neutral-200/80 bg-white text-neutral-900"
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`absolute inset-y-0 left-0 w-1 ${
          isDark ? "bg-emerald-400/80" : "bg-primary-950"
        }`}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <StarRow rating={testimonial.rating} />
          <span
            className={`select-none font-serif text-6xl leading-none ${
              isDark ? "text-white/15" : "text-primary-950/12"
            }`}
            aria-hidden="true"
          >
            “
          </span>
        </div>

        <p
          className={`mt-2 text-[15px] md:text-base leading-relaxed font-light ${
            isDark ? "text-white/85" : "text-neutral-700"
          }`}
        >
          {testimonial.quote}
        </p>

        <div
          className={`mt-8 flex items-center gap-4 border-t pt-6 ${
            isDark ? "border-white/10" : "border-neutral-100"
          }`}
        >
          <div
            className={`h-11 w-11 rounded-xl flex items-center justify-center text-sm font-bold tracking-wide ${
              isDark ? "bg-white/15 text-white" : "bg-primary-950 text-white"
            }`}
            aria-hidden="true"
          >
            {initials}
          </div>
          <div>
            <p className="font-bold leading-tight">{testimonial.author}</p>
            <p
              className={`text-xs font-medium uppercase tracking-widest mt-1 ${
                isDark ? "text-white/60" : "text-primary-600"
              }`}
            >
              {testimonial.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ReviewsMarquee({
  testimonials,
  variant = "light",
  speedSeconds = 55,
}: ReviewsMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const [supportsHover, setSupportsHover] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setSupportsHover(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  const cardHover = supportsHover ? "hover:-translate-y-1" : "";

  const maskTheme =
    variant === "dark"
      ? {
          left: "bg-gradient-to-r from-[#000B16] to-transparent",
          right: "bg-gradient-to-l from-[#000B16] to-transparent",
        }
      : {
          left: "bg-gradient-to-r from-white to-transparent",
          right: "bg-gradient-to-l from-white to-transparent",
        };

  const items = useMemo(() => testimonials, [testimonials]);

  if (prefersReducedMotion) {
    return (
      <div className="relative">
        <div className={`pointer-events-none absolute inset-y-0 left-0 w-16 ${maskTheme.left}`} />
        <div className={`pointer-events-none absolute inset-y-0 right-0 w-16 ${maskTheme.right}`} />
        <div className="overflow-x-auto [-webkit-overflow-scrolling:touch]">
          <div className="flex gap-6 py-4 pr-6 snap-x snap-mandatory">
            {items.map((t, idx) => (
              <ReviewCard
                key={`${t.author}-${idx}`}
                testimonial={t}
                variant={variant}
                className={`${cardHover} snap-start`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <style>{`
        @keyframes oab-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className={`pointer-events-none absolute inset-y-0 left-0 w-20 ${maskTheme.left}`} />
      <div className={`pointer-events-none absolute inset-y-0 right-0 w-20 ${maskTheme.right}`} />

      <div className="overflow-hidden py-4">
        <div
          className="flex w-max"
          style={{
            animationName: "oab-marquee",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: `${speedSeconds}s`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {[0, 1].map((dup) => (
            <div key={dup} className="flex gap-6 pr-6">
              {items.map((t, idx) => (
                <ReviewCard
                  key={`${dup}-${t.author}-${idx}`}
                  testimonial={t}
                  variant={variant}
                  className={cardHover}
                  onMouseEnter={() => {
                    if (!supportsHover) return;
                    setPaused(true);
                  }}
                  onMouseLeave={() => {
                    if (!supportsHover) return;
                    setPaused(false);
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
