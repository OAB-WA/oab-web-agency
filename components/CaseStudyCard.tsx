"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/caseStudies";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { trackOutboundLink } from "@/lib/gtag";

function calculateImprovement(before: number, after: number, isTime = false): number {
  if (before === 0) return 0;
  return Math.round(((isTime ? before - after : after - before) / before) * 100);
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatRange(low: number, high: number, prefix: "+" | "-" = "+") {
  const l = Math.round(low * 100);
  const h = Math.round(high * 100);
  return `${prefix}${Math.min(l, h)}–${Math.max(l, h)}%`;
}

function estimateCompactImpact(perf: NonNullable<CaseStudy["performance"]>) {
  // Build a simple 0–100 index from improvements. This is a heuristic and is used only for
  // modeled ranges (not guarantees).
  const scoreDelta = perf.score.after - perf.score.before; // points
  const scoreNorm = clamp(scoreDelta / 50, 0, 1); // 0–50+ points → 0–1

  const lcpPct = perf.lcp.before > 0 ? clamp((perf.lcp.before - perf.lcp.after) / perf.lcp.before, 0, 1) : 0;
  const fcpPct = perf.fcp.before > 0 ? clamp((perf.fcp.before - perf.fcp.after) / perf.fcp.before, 0, 1) : 0;
  const tbtPct = perf.tbt.before > 0 ? clamp((perf.tbt.before - perf.tbt.after) / perf.tbt.before, 0, 1) : 0;
  const clsPct = perf.cls.before > 0 ? clamp((perf.cls.before - perf.cls.after) / perf.cls.before, 0, 1) : 0;

  // Weighted blend: emphasize LCP + overall performance score.
  const index01 =
    scoreNorm * 0.4 +
    lcpPct * 0.35 +
    fcpPct * 0.1 +
    tbtPct * 0.1 +
    clsPct * 0.05;

  const impact = clamp(index01, 0, 1);

  // Central modeled uplifts (conservative).
  // Calls tend to be a bit more sensitive to speed/UX than forms; bookings slightly less than forms.
  const callsMid = 0.06 + impact * 0.22; // 6% → 28%
  const formsMid = 0.05 + impact * 0.20; // 5% → 25%
  const bookingsMid = formsMid * 0.85; // bookings as a subset of forms
  const bounceMid = 0.08 + impact * 0.22; // 8% → 30% reduction

  // Range width scales with confidence; we keep it simple and stable.
  const width = 0.3; // ±30%

  const callsLow = clamp(callsMid * (1 - width), 0.03, 0.35);
  const callsHigh = clamp(callsMid * (1 + width), 0.05, 0.45);

  const formsLow = clamp(formsMid * (1 - width), 0.03, 0.30);
  const formsHigh = clamp(formsMid * (1 + width), 0.05, 0.40);

  const bookingsLow = clamp(bookingsMid * (1 - width), 0.02, 0.25);
  const bookingsHigh = clamp(bookingsMid * (1 + width), 0.03, 0.35);

  const bounceLow = clamp(bounceMid * (1 - width), 0.05, 0.35);
  const bounceHigh = clamp(bounceMid * (1 + width), 0.08, 0.50);

  return {
    emergencyCalls: { low: callsLow, high: callsHigh },
    formSubmissions: { low: formsLow, high: formsHigh },
    bookings: { low: bookingsLow, high: bookingsHigh },
    bounceRate: { low: bounceLow, high: bounceHigh },
  };
}

function PerformancePanel({
  study,
  stickyOnDesktop,
}: {
  study: CaseStudy;
  stickyOnDesktop?: boolean;
}) {
  if (!study.performance) return null;

  const scoreImprovement = study.performance.score.after - study.performance.score.before;
  const fcpImprovement = calculateImprovement(study.performance.fcp.before, study.performance.fcp.after, true);
  const lcpImprovement = calculateImprovement(study.performance.lcp.before, study.performance.lcp.after, true);
  const tbtImprovement =
    study.performance.tbt.before > 0
      ? calculateImprovement(study.performance.tbt.before, study.performance.tbt.after, true)
      : 0;
  const clsImprovement =
    study.performance.cls.before > 0
      ? calculateImprovement(study.performance.cls.before, study.performance.cls.after, true)
      : 0;

  return (
    <div className={`space-y-6 sm:space-y-8 ${stickyOnDesktop ? "lg:sticky lg:top-[124px] lg:self-start" : ""}`}>
      <div className="p-5 sm:p-8 md:p-10 bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-[2.5rem] border-2 border-gray-200 shadow-xl">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h5 className="font-bold text-gray-900 uppercase tracking-widest text-xs sm:text-sm">Performance Score</h5>
          <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-100 text-emerald-700 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
            Improved
          </div>
        </div>

        <div className="mb-6 sm:mb-10 pb-6 sm:pb-10 border-b-2 border-gray-200">
          <div className="flex items-end gap-3 sm:gap-6 mb-4">
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-emerald-500 to-emerald-600 bg-clip-text text-transparent tracking-tighter leading-none">
              {study.performance.score.after}
            </div>
            <div className="mb-2 sm:mb-3">
              <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400 line-through mb-1">
                {study.performance.score.before}
              </div>
              <div className="text-xs sm:text-sm font-bold text-emerald-600">+{scoreImprovement} points</div>
            </div>
          </div>

          <div className="relative h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-1000"
              style={{ width: `${study.performance.score.after}%` }}
            />
            <div
              className="absolute inset-y-0 left-0 bg-gray-400 rounded-full opacity-50"
              style={{ width: `${study.performance.score.before}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {[
            {
              label: "FCP",
              before: study.performance.fcp.before,
              after: study.performance.fcp.after,
              unit: study.performance.fcp.unit,
              improvement: fcpImprovement,
              isTime: true,
            },
            {
              label: "LCP",
              before: study.performance.lcp.before,
              after: study.performance.lcp.after,
              unit: study.performance.lcp.unit,
              improvement: lcpImprovement,
              isTime: true,
            },
            {
              label: "TBT",
              before: study.performance.tbt.before,
              after: study.performance.tbt.after,
              unit: study.performance.tbt.unit,
              improvement: tbtImprovement,
              isTime: false,
            },
            {
              label: "CLS",
              before: study.performance.cls.before,
              after: study.performance.cls.after,
              unit: study.performance.cls.unit,
              improvement: clsImprovement,
              isTime: false,
            },
          ].map((metric) => (
            <div key={metric.label} className="p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2 sm:mb-3">
                {metric.label}
              </p>
              <div className="space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span className="text-gray-400 line-through text-[10px] sm:text-xs">
                    {metric.before}
                    {metric.unit}
                  </span>
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">
                    {metric.after}
                    {metric.unit}
                  </span>
                </div>
                {metric.improvement > 0 && (
                  <div className="text-[10px] sm:text-xs font-bold text-emerald-600">
                    {metric.improvement}% {metric.isTime ? "faster" : "improvement"}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyCard({
  study,
  variant,
}: {
  study: CaseStudy;
  variant: "full" | "compact";
}) {
  const isFull = variant === "full";
  const modeled = !isFull && study.performance ? estimateCompactImpact(study.performance) : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`relative bg-gradient-to-br from-white to-gray-50/50 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-gray-200 overflow-hidden ${
        isFull ? "lg:overflow-visible" : ""
      } hover:shadow-2xl transition-all duration-500 shadow-lg group`}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className={`relative ${isFull ? "p-4 sm:p-6 md:p-8 lg:p-16" : "p-4 sm:p-6 md:p-8"}`}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
          <div className="flex-1">
            <span className="inline-block px-3 py-1.5 sm:px-5 sm:py-2 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-950 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow-sm">
              {study.label}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-2 sm:mb-3">
              {study.business}
            </h3>
            <p className="text-primary-600 font-semibold text-sm sm:text-base md:text-lg">{study.service}</p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {study.originalWebsiteUrl && (
              <a
                href={study.originalWebsiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2.5 sm:px-6 sm:py-3 border-2 border-gray-200 text-gray-700 rounded-xl text-xs sm:text-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition-all active:scale-95 shadow-sm touch-manipulation min-h-[44px]"
                onClick={() => trackOutboundLink(study.originalWebsiteUrl!, "View Original Website - Case Study")}
              >
                Original Site
              </a>
            )}
            {study.demoUrl && (
              <a
                href={study.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-primary-950 to-primary-900 text-white rounded-xl sm:rounded-2xl text-sm sm:text-base font-bold hover:from-primary-900 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl active:scale-95 touch-manipulation min-h-[44px]"
                onClick={() => trackOutboundLink(study.demoUrl!, "View Redesign Demo - Case Study")}
              >
                Live Demo
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Compact summary */}
        {!isFull && (
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light mb-8">
            {study.compactSummary}
          </p>
        )}

        {/* Compact headline metric */}
        {!isFull && study.performance && (
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-gray-200 shadow-sm">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Performance</span>
              <span className="text-lg font-bold text-gray-900">{study.performance.score.after}</span>
              <span className="text-sm font-bold text-emerald-600">
                (+{study.performance.score.after - study.performance.score.before})
              </span>
            </div>
          </div>
        )}

        {/* Compact modeled estimates */}
        {!isFull && modeled && (
          <div className="mb-8">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">
              Estimated results (modeled)
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Emergency calls</p>
                <p className="text-sm font-bold text-gray-900">{formatRange(modeled.emergencyCalls.low, modeled.emergencyCalls.high, "+")}</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Form submissions</p>
                <p className="text-sm font-bold text-gray-900">{formatRange(modeled.formSubmissions.low, modeled.formSubmissions.high, "+")}</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Bookings</p>
                <p className="text-sm font-bold text-gray-900">{formatRange(modeled.bookings.low, modeled.bookings.high, "+")}</p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-200 shadow-sm">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Bounce rate</p>
                <p className="text-sm font-bold text-gray-900">{formatRange(modeled.bounceRate.low, modeled.bounceRate.high, "-")}</p>
              </div>
            </div>
            <p className="mt-3 text-[10px] text-gray-500 font-medium leading-relaxed">
              Modeled estimates based on performance improvements. Results vary.
            </p>
          </div>
        )}

        {/* Disclaimer (full only) */}
        {isFull && study.disclaimer && (
          <div className="mb-8 sm:mb-12 p-4 sm:p-6 bg-gradient-to-r from-blue-50/80 to-blue-100/50 border-2 border-blue-200 rounded-2xl sm:rounded-3xl flex items-start gap-3 sm:gap-4 shadow-sm">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
              <span className="text-white text-xs sm:text-sm font-bold">i</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic font-light">{study.disclaimer}</p>
          </div>
        )}

        {/* Key Takeaways */}
        {isFull && study.keyTakeaways && (
          <div className={`${isFull ? "mb-8 sm:mb-12" : "mb-8"} p-4 sm:p-6 bg-gradient-to-r from-emerald-50/80 to-primary-50/80 border-2 border-emerald-200/50 rounded-xl sm:rounded-2xl`}>
            <h4 className="text-[10px] sm:text-xs font-bold text-gray-600 uppercase tracking-widest mb-3 sm:mb-4 flex items-center gap-2">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Key Takeaways
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {study.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Slider */}
        <div className={isFull ? "mb-10 sm:mb-12 md:mb-16" : "mb-8"}>
          <BeforeAfterSlider beforeImage={study.beforeImageUrl} afterImage={study.imageUrl} />
          <p className="text-center text-[10px] sm:text-xs text-gray-500 mt-3 sm:mt-4 font-medium px-2">
            Drag or swipe to compare before and after
          </p>
        </div>

        {/* Full layout details */}
        {isFull && (
          <>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
              <div className="space-y-6 sm:space-y-8 md:space-y-10">
                <div className="relative p-5 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50/50 to-rose-100/30 rounded-2xl sm:rounded-3xl border-2 border-rose-200/50 shadow-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md flex-shrink-0">
                      !
                    </div>
                    <h4 className="font-bold text-rose-700 uppercase tracking-widest text-[10px] sm:text-xs">The Problem</h4>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-light">{study.problem}</p>
                </div>

                <div className="relative p-5 sm:p-6 md:p-8 bg-gradient-to-br from-emerald-50/50 to-emerald-100/30 rounded-2xl sm:rounded-3xl border-2 border-emerald-200/50 shadow-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md flex-shrink-0">
                      ✓
                    </div>
                    <h4 className="font-bold text-emerald-700 uppercase tracking-widest text-[10px] sm:text-xs">Our Approach</h4>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-light">{study.approach}</p>
                </div>

                <div className="relative p-5 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl sm:rounded-3xl border-2 border-blue-200/50 shadow-sm">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md flex-shrink-0">
                      ★
                    </div>
                    <h4 className="font-bold text-blue-700 uppercase tracking-widest text-[10px] sm:text-xs">The Outcome</h4>
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed font-light">{study.outcome}</p>
                </div>
              </div>

              <PerformancePanel study={study} stickyOnDesktop />
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950 text-white rounded-2xl sm:rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-primary-500/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <h4 className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-widest mb-6 sm:mb-8 text-center">
                  Estimated Impact (Modeled)
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
                  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                      {study.businessImpact?.callVolume || "+40%"}
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest font-bold">Call Volume</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                      {study.businessImpact?.bounceRate || "-53%"}
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest font-bold">Bounce Rate</p>
                  </div>
                  <div className="p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-400 mb-2">
                      {study.businessImpact?.leads || "2.5x"}
                    </div>
                    <p className="text-[10px] sm:text-xs text-white/70 uppercase tracking-widest font-bold">More Leads</p>
                  </div>
                </div>
                <p className="mt-6 text-center text-[11px] text-white/60 font-medium leading-relaxed">
                  Modeled estimates based on performance improvements. Results vary by market, offer, and follow‑up.
                </p>
              </div>
            </div>
          </>
        )}

      </div>
    </motion.div>
  );
}

