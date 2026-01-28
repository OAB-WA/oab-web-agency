"use client";

import { motion } from "framer-motion";
import { PROCESS_COPY, type ProcessCopy } from "@/lib/process";

type ProcessSectionProps = {
  variant?: "light" | "dark";
  className?: string;
  copy?: ProcessCopy;
};

export default function ProcessSection({
  variant = "light",
  className = "",
  copy,
}: ProcessSectionProps) {
  const isDark = variant === "dark";

  const sectionTheme = isDark
    ? "bg-[#000B16] text-white"
    : "bg-white/60 backdrop-blur-sm";

  const headingTheme = isDark ? "text-white" : "text-gray-900";
  const subheadingTheme = isDark ? "text-white/70" : "text-neutral-600";
  const proofTheme = isDark ? "text-white/55" : "text-neutral-500";

  const cardOuterTheme = isDark
    ? "bg-gradient-to-br from-white/25 via-white/10 to-white/5"
    : "bg-gradient-to-br from-primary-950/10 via-black/5 to-transparent";

  const cardInnerTheme = isDark
    ? "bg-white/10 border-white/10"
    : "bg-white/80 border-black/5";

  const lineTheme = isDark
    ? "from-white/20 via-white/10 to-transparent"
    : "from-primary-950/15 via-black/10 to-transparent";

  const resolvedCopy = copy ?? PROCESS_COPY;
  const steps = resolvedCopy.steps;

  return (
    <section className={`py-20 md:py-28 ${sectionTheme} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2
            className={`text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] ${headingTheme}`}
          >
            {resolvedCopy.heading}
          </h2>
          <p className={`mt-5 text-lg md:text-xl font-light leading-relaxed ${subheadingTheme}`}>
            {resolvedCopy.subheading}
          </p>
          <p className={`mt-6 text-xs md:text-sm font-bold uppercase tracking-[0.2em] ${proofTheme}`}>
            {resolvedCopy.proofLine}
          </p>
        </motion.div>

        <div className="relative mt-14 md:mt-16">
          {/* connector line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-[34px] w-[72%] -translate-x-1/2">
            <div className={`h-[2px] w-full bg-gradient-to-r ${lineTheme}`} />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
                className="group"
              >
                <div className={`rounded-[2.25rem] p-[1px] ${cardOuterTheme}`}>
                  <div
                    className={`relative overflow-hidden rounded-[2.2rem] border px-8 py-10 ${cardInnerTheme} backdrop-blur-xl transition-colors duration-300 ${
                      isDark ? "hover:bg-white/14 hover:border-white/20" : "hover:bg-white hover:border-black/10"
                    }`}
                  >
                    {/* subtle corner glow */}
                    <div
                      className={`pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full blur-3xl ${
                        isDark ? "bg-white/10" : "bg-primary-950/10"
                      }`}
                    />

                    <div className="relative">
                      <div className="flex items-center justify-center">
                        <div
                          className={`h-[58px] w-[58px] rounded-2xl flex items-center justify-center text-lg font-bold tracking-tight ${
                            isDark ? "bg-white/10 text-white" : "bg-primary-950 text-white"
                          }`}
                        >
                          {idx + 1}
                        </div>
                      </div>

                      <h3
                        className={`mt-7 text-xl md:text-2xl font-bold tracking-tight ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p
                        className={`mt-4 text-base leading-relaxed font-light ${
                          isDark ? "text-white/75" : "text-neutral-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

