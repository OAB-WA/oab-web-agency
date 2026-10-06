"use client";

import { motion } from "framer-motion";
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
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-neutral-200"}`}
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

export function ReviewCard({
  testimonial,
  variant = "light",
  index = 0,
}: {
  testimonial: Testimonial;
  variant?: "light" | "dark";
  index?: number;
}) {
  const isDark = variant === "dark";
  const initials = testimonial.author
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative w-full rounded-2xl sm:rounded-3xl border p-6 sm:p-8 md:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
        isDark
          ? "border-white/10 bg-white/[0.05] text-white hover:border-white/20 hover:bg-white/[0.08]"
          : "border-neutral-200/80 bg-white text-neutral-900 hover:border-neutral-300"
      }`}
    >
      {/* Subtle top accent */}
      <div
        className={`absolute top-0 left-8 right-8 h-0.5 rounded-full ${
          isDark
            ? "bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent"
            : "bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"
        }`}
      />

      <div>
        {/* Card Header: Rating + Verified Badge */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <StarRow rating={testimonial.rating} />
            <span className={`text-xs font-bold ${isDark ? "text-white/70" : "text-neutral-500"}`}>
              5.0
            </span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
              isDark
                ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30"
                : "bg-emerald-50 text-emerald-700 border border-emerald-200/80"
            }`}
          >
            <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Verified Client</span>
          </div>
        </div>

        {/* Quote text */}
        <p
          className={`text-sm sm:text-base md:text-[1.05rem] leading-relaxed font-light ${
            isDark ? "text-white/90" : "text-neutral-700"
          }`}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div
        className={`mt-6 sm:mt-8 pt-5 sm:pt-6 border-t flex flex-wrap items-center justify-between gap-4 ${
          isDark ? "border-white/10" : "border-neutral-100"
        }`}
      >
        <div className="flex items-center gap-3.5">
          <div
            className={`h-11 w-11 rounded-xl flex items-center justify-center text-sm font-bold tracking-wide shadow-sm flex-shrink-0 ${
              isDark
                ? "bg-gradient-to-br from-emerald-500/30 to-teal-500/20 text-white border border-white/15"
                : "bg-gradient-to-br from-[#001B3A] to-[#002B5C] text-white"
            }`}
          >
            {initials}
          </div>
          <div>
            <p className={`font-bold text-sm sm:text-base leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
              {testimonial.author}
            </p>
            <p className={`text-xs sm:text-sm font-medium mt-0.5 ${isDark ? "text-white/60" : "text-primary-600"}`}>
              {testimonial.role}
            </p>
          </div>
        </div>

        {testimonial.projectType && (
          <span
            className={`text-[11px] font-semibold px-3 py-1 rounded-lg ${
              isDark
                ? "bg-white/10 text-white/70"
                : "bg-neutral-100 text-neutral-600"
            }`}
          >
            {testimonial.projectType}
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function ReviewsMarquee({
  testimonials,
  variant = "light",
}: ReviewsMarqueeProps) {
  return (
    <div className="w-full">
      {/* 2-Column Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, idx) => (
          <ReviewCard
            key={`${testimonial.author}-${idx}`}
            testimonial={testimonial}
            variant={variant}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}
