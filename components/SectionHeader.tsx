import React from "react";

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  variant = "light",
  size = "lg",
  className = "",
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const maxWidthClass = align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl";

  const titleSizeClass =
    size === "sm"
      ? "text-lg sm:text-xl md:text-2xl lg:text-3xl"
      : size === "md"
        ? "text-xl sm:text-2xl md:text-3xl lg:text-4xl"
        : "text-2xl sm:text-3xl md:text-4xl lg:text-5xl";

  const subtitleSizeClass =
    size === "sm"
      ? "text-sm sm:text-base md:text-lg"
      : size === "md"
        ? "text-base sm:text-lg md:text-xl"
        : "text-base sm:text-lg md:text-xl";

  const titleToneClass = variant === "dark" ? "text-white" : "text-gray-900";
  const subtitleToneClass = variant === "dark" ? "text-white/80" : "text-neutral-600";

  return (
    <div className={`${alignClass} ${maxWidthClass} ${className}`}>
      <h2 className={`${titleSizeClass} font-bold ${titleToneClass} mb-4 sm:mb-6 tracking-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`${subtitleSizeClass} ${subtitleToneClass} font-light leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

