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

export default function ReviewsMarquee({
  testimonials,
  variant = "light",
  speedSeconds = 55,
}: ReviewsMarqueeProps) {
  const prefersReducedMotion = useReducedMotion();
  const [supportsHover, setSupportsHover] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Only enable hover-pause on devices that actually hover.
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setSupportsHover(mql.matches);
    update();
    mql.addEventListener?.("change", update);
    return () => mql.removeEventListener?.("change", update);
  }, []);

  const cardBase =
    "group relative shrink-0 w-[290px] sm:w-[360px] md:w-[400px] rounded-[2.25rem] p-[1px] transition-transform duration-300 will-change-transform";

  const cardOuterTheme =
    variant === "dark"
      ? "bg-gradient-to-br from-white/20 via-white/10 to-white/5"
      : "bg-gradient-to-br from-primary-950/10 via-black/5 to-transparent";

  const cardInnerBase =
    "relative overflow-hidden rounded-[2.2rem] border px-8 py-8 md:px-9 md:py-9 backdrop-blur-xl transition-all duration-300";

  const cardInnerTheme =
    variant === "dark"
      ? "bg-white/10 border-white/10 text-white hover:bg-white/14 hover:border-white/20"
      : "bg-white/80 border-black/5 text-neutral-900 hover:bg-white hover:border-black/10";

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
              <article
                key={`${t.author}-${idx}`}
                className={`${cardBase} ${cardOuterTheme} ${cardHover} snap-start`}
              >
                <div className={`${cardInnerBase} ${cardInnerTheme}`}>
                  <div
                    className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl ${
                      variant === "dark" ? "bg-white/10" : "bg-primary-950/10"
                    }`}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <StarRow rating={t.rating} />
                      <svg
                        className={`h-5 w-5 ${
                          variant === "dark" ? "text-white/35" : "text-neutral-300"
                        }`}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M7.17 6A5.17 5.17 0 002 11.17V22h10.83V11.17A5.17 5.17 0 007.66 6H7.17zm9.17 0A5.17 5.17 0 0011 11.17V22h11V11.17A5.17 5.17 0 0016.34 6h-.0z" />
                      </svg>
                    </div>

                    <p
                      className={`mt-5 text-[15px] md:text-base leading-relaxed font-light ${
                        variant === "dark" ? "text-white/85" : "text-neutral-700"
                      }`}
                    >
                      {t.quote}
                    </p>

                    <div
                      className={`mt-8 flex items-center gap-4 border-t pt-6 ${
                        variant === "dark" ? "border-white/10" : "border-black/5"
                      }`}
                    >
                      <div
                        className={`h-12 w-12 rounded-2xl flex items-center justify-center text-sm font-bold tracking-wide ${
                          variant === "dark"
                            ? "bg-white/15 text-white"
                            : "bg-primary-950 text-white"
                        }`}
                        aria-hidden="true"
                      >
                        {t.author
                          .split(" ")
                          .slice(0, 2)
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-bold leading-tight">{t.author}</p>
                        <p
                          className={`text-xs font-medium uppercase tracking-widest mt-1 ${
                            variant === "dark" ? "text-white/60" : "text-primary-600"
                          }`}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
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
                <article
                  key={`${dup}-${t.author}-${idx}`}
                  className={`${cardBase} ${cardOuterTheme} ${cardHover}`}
                  onMouseEnter={() => {
                    if (!supportsHover) return;
                    setPaused(true);
                  }}
                  onMouseLeave={() => {
                    if (!supportsHover) return;
                    setPaused(false);
                  }}
                >
                  <div className={`${cardInnerBase} ${cardInnerTheme}`}>
                    <div
                      className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full blur-3xl ${
                        variant === "dark" ? "bg-white/10" : "bg-primary-950/10"
                      }`}
                    />
                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <StarRow rating={t.rating} />
                        <svg
                          className={`h-5 w-5 ${
                            variant === "dark" ? "text-white/35" : "text-neutral-300"
                          }`}
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M7.17 6A5.17 5.17 0 002 11.17V22h10.83V11.17A5.17 5.17 0 007.66 6H7.17zm9.17 0A5.17 5.17 0 0011 11.17V22h11V11.17A5.17 5.17 0 0016.34 6h-.0z" />
                        </svg>
                      </div>

                      <p
                        className={`mt-5 text-[15px] md:text-base leading-relaxed font-light ${
                          variant === "dark" ? "text-white/85" : "text-neutral-700"
                        }`}
                      >
                        {t.quote}
                      </p>

                      <div
                        className={`mt-8 flex items-center gap-4 border-t pt-6 ${
                          variant === "dark" ? "border-white/10" : "border-black/5"
                        }`}
                      >
                        <div
                          className={`h-12 w-12 rounded-2xl flex items-center justify-center text-sm font-bold tracking-wide ${
                            variant === "dark"
                              ? "bg-white/15 text-white"
                              : "bg-primary-950 text-white"
                          }`}
                          aria-hidden="true"
                        >
                          {t.author
                            .split(" ")
                            .slice(0, 2)
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-bold leading-tight">{t.author}</p>
                          <p
                            className={`text-xs font-medium uppercase tracking-widest mt-1 ${
                              variant === "dark" ? "text-white/60" : "text-primary-600"
                            }`}
                          >
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

