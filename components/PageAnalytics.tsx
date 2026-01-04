"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/gtag";

export default function PageAnalytics() {
  const pathname = usePathname();
  const scrollDepthTracked = useRef<Set<number>>(new Set());
  const timeOnPageStart = useRef<number>(Date.now());
  const timeTracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    // Reset tracking when pathname changes
    scrollDepthTracked.current.clear();
    timeTracked.current.clear();
    timeOnPageStart.current = Date.now();

    // Track scroll depth
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      // Track milestones: 25%, 50%, 75%, 90%, 100%
      const milestones = [25, 50, 75, 90, 100];
      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !scrollDepthTracked.current.has(milestone)
        ) {
          scrollDepthTracked.current.add(milestone);
          trackScrollDepth(milestone);
        }
      });
    };

    // Track time on page at intervals
    const timeInterval = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - timeOnPageStart.current) / 1000);
      
      // Track milestones: 30s, 1min, 2min, 5min, 10min
      const milestones = [30, 60, 120, 300, 600];
      milestones.forEach((milestone) => {
        if (timeSpent >= milestone && !timeTracked.current.has(milestone)) {
          timeTracked.current.add(milestone);
          trackTimeOnPage(milestone);
        }
      });
    }, 10000); // Check every 10 seconds

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Track initial page view time (after 10 seconds)
    const initialTimeTrack = setTimeout(() => {
      trackTimeOnPage(10);
      timeTracked.current.add(10);
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timeInterval);
      clearTimeout(initialTimeTrack);
      
      // Track final time on page when leaving
      const finalTime = Math.floor(
        (Date.now() - timeOnPageStart.current) / 1000
      );
      if (finalTime > 0) {
        trackTimeOnPage(finalTime);
      }
    };
  }, [pathname]);

  return null;
}

