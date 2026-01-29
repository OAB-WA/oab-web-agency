"use client";

import SectionHeader from "@/components/SectionHeader";
import { AUDIT_FORM_ANCHOR, AUDIT_CTA_LABEL } from "@/lib/cta";
import { trackCTAClick } from "@/lib/gtag";

type ExampleAuditOutputSectionProps = {
  showHeader?: boolean;
  showCta?: boolean;
};

export default function ExampleAuditOutputSection({
  showHeader = true,
  showCta = true,
}: ExampleAuditOutputSectionProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {showHeader ? (
          <div className="text-center mb-10 md:mb-14">
            <SectionHeader
              title="Example Audit Output (Redacted)"
              subtitle="This is what your deliverable looks like: a clear scorecard, the top lead leaks, and a simple priority roadmap."
            />
          </div>
        ) : null}

        <div className="relative overflow-hidden rounded-[2.25rem] sm:rounded-[3rem] border border-gray-100 bg-white shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-950/5 via-transparent to-emerald-500/5 pointer-events-none" />
          <div className="relative p-5 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">
                  OAB Web Agency • Report Preview
                </p>
                <h3 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  Website Lead Leak Audit
                </h3>
                <p className="mt-3 text-gray-600 font-light leading-relaxed max-w-2xl">
                  Delivered in 24 hours. No sales pitch. Plain-English findings + a checklist you can hand to any
                  developer.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full text-xs font-bold bg-gray-100 text-gray-700">
                  Example output (redacted)
                </span>
                <span className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700">
                  Prioritized fixes
                </span>
                <span className="inline-flex items-center px-3 py-2 sm:px-4 rounded-full text-xs font-bold bg-primary-950/5 text-primary-950">
                  Quick wins included
                </span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-white/80 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 p-5 sm:p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Scorecard</p>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <MetricRow label="Performance score" before="59" after="96" unit="" />
                  <MetricRow label="LCP" before="36.2" after="2.4" unit="s" />
                  <MetricRow label="FCP" before="2.1" after="1.2" unit="s" />
                  <MetricRow label="CLS" before="0.123" after="0.000" unit="" />
                  <MetricRow label="TBT" before="180" after="0" unit="ms" />
                  <MetricRow label="Speed Index" before="7.9" after="4.0" unit="s" />
                </div>

                <p className="mt-6 text-xs text-gray-400 font-light leading-relaxed">
                  Numbers shown are from a redacted example. “After” values represent a typical target after implementing
                  the recommended fixes, not guaranteed results.
                </p>
              </div>

              <div className="bg-white/80 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 p-5 sm:p-6 md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Modeled impact (example)</p>
                <div className="mt-6 space-y-4">
                  <ImpactPill label="Calls" value="+18–40%" />
                  <ImpactPill label="Bounce rate" value="−15–35%" />
                  <ImpactPill label="Leads" value="+12–32%" />
                </div>
                <p className="mt-6 text-xs text-gray-400 font-light leading-relaxed">
                  Modeled estimates based on UX/performance improvements (not measured client results).
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Top 5 lead leaks</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <LeakCard
                  number="1"
                  title="Speed is breaking intent (especially on mobile)"
                  bullets={[
                    "Issue: Key pages take too long to become usable.",
                    "Impact: High-intent visitors bounce before seeing services or the phone number.",
                    "Fix: Reduce heavy scripts/images and remove render-blocking assets (target LCP < 2.5s).",
                  ]}
                />
                <LeakCard
                  number="2"
                  title="Primary next step isn’t obvious above the fold"
                  bullets={[
                    "Issue: Call / request service / booking isn’t consistently dominant on mobile.",
                    "Impact: Visitors hesitate and leave.",
                    "Fix: One primary CTA + persistent tap-to-call on every key page.",
                  ]}
                />
                <LeakCard
                  number="3"
                  title="Mobile navigation friction hides revenue pages"
                  bullets={[
                    "Issue: Services and service areas are hard to reach quickly.",
                    "Impact: Users can’t confirm fit fast enough.",
                    "Fix: Simplify nav, strengthen services hub, clarify coverage and service details.",
                  ]}
                />
                <LeakCard
                  number="4"
                  title="Local visibility gaps"
                  bullets={[
                    "Issue: Pages don’t map cleanly to local search intent.",
                    "Impact: Missed free leads and higher reliance on ads.",
                    "Fix: Improve service/location page structure, titles/H1s, and internal linking.",
                  ]}
                />
                <div className="md:col-span-2">
                  <LeakCard
                    number="5"
                    title="Trust signals aren’t positioned where decisions happen"
                    bullets={[
                      "Issue: Proof (licenses, availability, reviews) isn’t near CTAs.",
                      "Impact: Hesitation lowers conversions.",
                      "Fix: Move trust signals next to CTAs and in the booking/call sections.",
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 bg-white/80 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 p-5 sm:p-6 md:p-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Priority roadmap</p>
                {showCta ? (
                  <a
                    href={AUDIT_FORM_ANCHOR}
                    onClick={() => trackCTAClick(AUDIT_CTA_LABEL, "Example Audit Output")}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-4 sm:py-3 bg-primary-950 text-white rounded-2xl text-sm font-bold hover:bg-primary-900 transition-all shadow-lg active:scale-[0.98]"
                  >
                    {AUDIT_CTA_LABEL}
                  </a>
                ) : null}
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <RoadmapCol
                  label="P0 (This week)"
                  items={[
                    "Fix biggest speed bottlenecks (target LCP < 2.5s)",
                    "Make tap-to-call + primary CTA persistent",
                    "Clarify hero: what you do + where + next step",
                  ]}
                />
                <RoadmapCol
                  label="P1 (Week 1–2)"
                  items={[
                    "Upgrade core service pages and FAQs",
                    "Tighten local SEO structure (titles/H1s/internal links)",
                    "Add conversion improvements on key pages",
                  ]}
                />
                <RoadmapCol
                  label="P2 (Week 2–4)"
                  items={[
                    "Strengthen trust layer near CTAs",
                    "Reduce form friction + add tracking",
                    "Iterate based on what users click/call",
                  ]}
                />
              </div>

              <p className="mt-6 text-xs text-gray-400 font-light leading-relaxed">
                This preview is redacted and provided as an example. Results vary and are not guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricRow({
  label,
  before,
  after,
  unit,
}: {
  label: string;
  before: string;
  after: string;
  unit: string;
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4 sm:p-5">
      <p className="text-sm font-bold text-gray-900 tracking-tight">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Before</p>
          <p className="mt-1 text-lg font-bold text-rose-600">
            {before}
            {unit ? <span className="text-sm font-bold text-rose-500/70"> {unit}</span> : null}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">After</p>
          <p className="mt-1 text-lg font-bold text-emerald-600">
            {after}
            {unit ? <span className="text-sm font-bold text-emerald-600/70"> {unit}</span> : null}
          </p>
        </div>
      </div>
    </div>
  );
}

function ImpactPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-black/5 bg-white px-4 sm:px-5 py-4">
      <span className="text-sm font-bold text-gray-700">{label}</span>
      <span className="text-sm font-bold text-gray-900">{value}</span>
    </div>
  );
}

function LeakCard({
  number,
  title,
  bullets,
}: {
  number: string;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="bg-white/80 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 p-5 sm:p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-primary-950 text-white flex items-center justify-center font-bold">
          {number}
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900 tracking-tight">{title}</h4>
          <ul className="mt-4 space-y-2 text-gray-600 font-light leading-relaxed">
            {bullets.map((b) => (
              <li key={b} className="flex gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function RoadmapCol({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="rounded-[2rem] border border-black/5 bg-white p-4 sm:p-5">
      <p className="text-sm font-bold text-gray-900">{label}</p>
      <ul className="mt-3 space-y-2 text-sm text-gray-600 font-light leading-relaxed">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500/60 flex-shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

