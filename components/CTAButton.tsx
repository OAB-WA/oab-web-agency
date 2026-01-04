"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/gtag";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  dark?: boolean;
  className?: string;
  trackingLabel?: string;
  trackingLocation?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  dark = false,
  className = "",
  trackingLabel,
  trackingLocation,
}: CTAButtonProps) {
  const handleClick = () => {
    const label = trackingLabel || (typeof children === "string" ? children : "CTA Button");
    trackCTAClick(label, trackingLocation);
  };

  const getButtonClass = () => {
    if (dark) {
      switch (variant) {
        case "primary":
          return "btn-primary-dark";
        case "secondary":
          return "btn-secondary-dark";
        case "ghost":
          return "btn-ghost-dark";
        case "outline":
          return "btn-outline-dark";
        default:
          return "btn-primary-dark";
      }
    } else {
      switch (variant) {
        case "primary":
          return "btn-primary";
        case "secondary":
          return "btn-secondary";
        case "ghost":
          return "btn-ghost";
        case "outline":
          return "btn-outline";
        default:
          return "btn-primary";
      }
    }
  };

  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      className={`${getButtonClass()} ${className}`}
      onClick={handleClick}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  );
}

