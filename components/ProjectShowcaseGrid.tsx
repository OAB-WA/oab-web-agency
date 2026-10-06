"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/caseStudies";
import { trackOutboundLink } from "@/lib/gtag";

type ProjectShowcaseGridProps = {
  studies: CaseStudy[];
};

function getStudyIcon(id: string) {
  if (id.includes("auto")) return "🚗";
  if (id.includes("tribeca")) return "🔧";
  return "🚰";
}

function getSpeedHighlight(study: CaseStudy) {
  if (study.id === "apex-auto-care") return "95/100 • 1.2s Fast";
  if (study.id === "tribeca-plumbing") return "96/100 • 15x Faster";
  if (study.id === "swan-plumbing") return "94/100 • 80% Faster";
  return `${study.performance?.score.after || 95}/100 Speed`;
}

export default function ProjectShowcaseGrid({ studies }: ProjectShowcaseGridProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {studies.map((study, index) => {
          const isNewBuild = study.type === "new-build" || study.label.includes("New Build");
          const domain = study.demoUrl?.replace(/^https?:\/\//, "").replace(/\/$/, "") || "demo.vercel.app";
          const icon = getStudyIcon(study.id);
          const speedText = getSpeedHighlight(study);

          return (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl border border-neutral-200/80 hover:border-neutral-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Browser Frame */}
              <div className="bg-[#000E1C] px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/10 text-white/75 text-[10px] sm:text-[11px] font-mono truncate max-w-[170px] sm:max-w-[200px]">
                  <svg className="w-2.5 h-2.5 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="truncate">{domain}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 hidden sm:inline-block">
                  Live
                </span>
              </div>

              {/* Preview Image */}
              <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden">
                <Image
                  src={study.imageUrl}
                  alt={`${study.business} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {study.demoUrl && (
                  <a
                    href={study.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackOutboundLink(study.demoUrl!, `Project Showcase - ${study.business}`)}
                    className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-xs"
                    aria-label={`Explore live demo for ${study.business}`}
                  >
                    <span className="px-4 py-2 rounded-xl bg-white text-primary-950 font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-200">
                      Explore Live Demo
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </a>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Meta badges: Category & PageSpeed */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isNewBuild
                          ? "bg-emerald-50 text-emerald-800 border border-emerald-200/80"
                          : "bg-primary-50 text-primary-900 border border-primary-200/60"
                      }`}
                    >
                      <span>{icon}</span>
                      <span>{isNewBuild ? "New Build" : "Redesign"}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-700 bg-emerald-50/90 border border-emerald-200/80 shadow-2xs">
                      <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      {speedText}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight group-hover:text-primary-600 transition-colors mb-1">
                    {study.business}
                  </h3>

                  <p className="text-xs font-semibold text-primary-600 mb-3">
                    {study.service}
                  </p>

                  <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4 line-clamp-3">
                    {study.compactSummary}
                  </p>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3 mt-auto">
                  <Link
                    href="/case-studies"
                    className="text-xs font-bold text-primary-950 hover:text-primary-700 flex items-center gap-1 transition-colors py-1.5"
                  >
                    <span>Full Case Study</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </Link>

                  {study.demoUrl && (
                    <a
                      href={study.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackOutboundLink(study.demoUrl!, `Project Card Button - ${study.business}`)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold transition-all active:scale-95 shadow-xs"
                    >
                      <span>Live Demo</span>
                      <svg className="w-3 h-3 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
