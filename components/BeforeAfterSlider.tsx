"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  className = "",
  aspectClassName = "aspect-[4/3] md:aspect-[16/10]",
}: {
  beforeImage: string;
  afterImage: string;
  className?: string;
  aspectClassName?: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;
      e.preventDefault(); // Prevent scrolling while dragging
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  return (
    <div
      className={`relative w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border-2 border-gray-200 shadow-xl bg-gray-100 ${className}`}
    >
      <div ref={containerRef} className={`relative w-full select-none touch-none ${aspectClassName}`}>
        {/* After Image (Full) */}
        <div className="absolute inset-0">
          <Image src={afterImage} alt="After redesign" fill className="object-cover" />
        </div>

        {/* Before Image (Clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
          <Image src={beforeImage} alt="Before redesign" fill className="object-cover grayscale" />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 md:w-1 bg-white shadow-2xl z-10"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-primary-950 touch-manipulation">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-primary-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 px-2 py-1.5 md:px-4 md:py-2 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl shadow-lg z-20">
          <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Original</p>
        </div>
        <div className="absolute top-2 right-2 md:top-4 md:right-4 px-2 py-1.5 md:px-4 md:py-2 bg-primary-950/95 backdrop-blur-sm text-white rounded-lg md:rounded-xl shadow-lg z-20">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Redesign</p>
        </div>
      </div>

      {/* Drag Handle Area */}
      <div
        className="absolute inset-0 z-10 cursor-col-resize touch-manipulation"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
      />
    </div>
  );
}

