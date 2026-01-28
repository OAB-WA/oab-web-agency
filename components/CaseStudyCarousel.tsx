"use client";

import { useMemo, useRef } from "react";
import CaseStudyCard from "@/components/CaseStudyCard";
import type { CaseStudy } from "@/lib/caseStudies";

export default function CaseStudyCarousel({
  studies,
}: {
  studies: CaseStudy[];
}) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const canScroll = useMemo(() => studies.length > 1, [studies.length]);

  const scrollByAmount = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9) * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative isolate">
      {/* Desktop arrows */}
      {canScroll && (
        <>
          <button
            type="button"
            onClick={() => scrollByAmount("left")}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center text-gray-600 hover:text-primary-950 hover:border-gray-300 transition-all active:scale-95 pointer-events-auto"
            aria-label="Scroll case studies left"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount("right")}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white border border-gray-200 shadow-lg items-center justify-center text-gray-600 hover:text-primary-950 hover:border-gray-300 transition-all active:scale-95 pointer-events-auto"
            aria-label="Scroll case studies right"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Scroll-snap scroller */}
      <div
        ref={scrollerRef}
        className="relative z-0 flex gap-6 overflow-x-auto pb-2 px-4 sm:px-6 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]"
      >
        {/* Hide scrollbar (webkit) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {studies.map((study) => (
          <div
            key={study.id}
            className="snap-start shrink-0 w-[92%] sm:w-[75%] md:w-[90%]"
          >
            <CaseStudyCard study={study} variant="compact" />
          </div>
        ))}
      </div>

      {/* Subtle hint on mobile */}
      {canScroll && (
        <p className="mt-3 text-center text-[10px] sm:text-xs text-gray-500 font-medium">
          Swipe to see more case studies
        </p>
      )}
    </div>
  );
}

