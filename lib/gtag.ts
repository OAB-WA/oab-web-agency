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

