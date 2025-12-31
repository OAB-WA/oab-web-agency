"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackCTAClick } from "@/lib/gtag";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  trackingLabel?: string;
  trackingLocation?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  trackingLabel,
  trackingLocation,
}: CTAButtonProps) {
  const handleClick = () => {
    const label = trackingLabel || (typeof children === "string" ? children : "CTA Button");
    trackCTAClick(label, trackingLocation);
  };
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl px-8 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden group";

  const variantStyles = {
    primary:
      "bg-[#001B3A] text-white hover:bg-[#00152E] focus:ring-[#001B3A] shadow-lg hover:shadow-xl hover:scale-105",
    secondary:
      "bg-white text-[#001B3A] border-2 border-white hover:bg-[#001B3A]/10 focus:ring-[#001B3A] shadow-lg hover:shadow-xl hover:scale-105",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        onClick={handleClick}
      >
        <span className="relative z-10">{children}</span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-[#003366] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
      </Link>
    </motion.div>
  );
}

