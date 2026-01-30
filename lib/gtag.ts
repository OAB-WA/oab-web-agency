export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_MEASUREMENT_ID!, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  event({
    action: "submit_form",
    category: "Form",
    label: formName,
  });
};

/**
 * Send submit_form via gtag with event_callback and optional delayed navigation.
 * Use when you want to fire the conversion event and then redirect (e.g. to a thank-you page)
 * so the event has time to send before the page unloads.
 * @param formLabel - Same label as trackFormSubmission (e.g. "Free Audit Form - Plumbers")
 * @param url - Optional URL to navigate to after the event is sent (or after timeout)
 * @param timeoutMs - Max wait before callback runs (default 2000)
 * @returns false so you can use onClick="return gtagSendEvent(...)" to prevent immediate navigation
 */
export function gtagSendEventAndMaybeNavigate(
  formLabel: string,
  url?: string,
  timeoutMs: number = 2000
): boolean {
  if (typeof window === "undefined" || !window.gtag) {
    if (url) window.location.href = url;
    return false;
  }
  const callback = () => {
    if (typeof url === "string" && url) {
      window.location.href = url;
    }
  };
  window.gtag("event", "submit_form", {
    event_category: "Form",
    event_label: formLabel,
    event_callback: callback,
    event_timeout: timeoutMs,
  });
  return false;
}

// Track CTA button clicks
export const trackCTAClick = (ctaLabel: string, location?: string) => {
  event({
    action: "click",
    category: "CTA",
    label: location ? `${ctaLabel} - ${location}` : ctaLabel,
  });
};

// Track outbound link clicks
export const trackOutboundLink = (url: string, label?: string) => {
  event({
    action: "click",
    category: "Outbound Link",
    label: label || url,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  event({
    action: "scroll",
    category: "Engagement",
    label: `${depth}%`,
    value: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  event({
    action: "time_on_page",
    category: "Engagement",
    label: `${Math.round(seconds)}s`,
    value: Math.round(seconds),
  });
};

