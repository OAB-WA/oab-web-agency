"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

type StatCardProps = {
  number: string;
  label: string;
};

function StatCard({ number, label }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center p-10 rounded-[2.5rem] bg-white/50 border border-white/20 shadow-sm"
    >
      <div className="text-6xl md:text-7xl font-bold text-primary-950 mb-4 tracking-tighter">
        {number}
      </div>
      <p className="text-sm text-neutral-500 font-bold uppercase tracking-widest">{label}</p>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <Section className="bg-gradient-to-br from-[#001B3A]/10 to-[#001B3A]/5 backdrop-blur-sm">
      <SectionHeader
        className="mb-12"
        title="Typical Results You Can Expect"
        subtitle="Based on industry standards and typical client outcomes"
      />

      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <StatCard number="2-3x" label="Typical Lead Increase" />
        <StatCard number="<2.5s" label="Target Load Time" />
        <StatCard number="40%+" label="Conversion Improvement" />
        <StatCard number="24/7" label="Ongoing Support" />
      </div>
    </Section>
  );
}

