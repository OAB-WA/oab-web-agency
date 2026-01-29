import { CALENDLY_URL } from "@/lib/constants";

// Sitewide primary CTA (main website)
export const PRIMARY_CTA_LABEL = "Request a Quote";

// Use when space is tight (e.g., mobile header button)
export const PRIMARY_CTA_LABEL_SHORT = "Request Quote";

// Default destination for the primary CTA from non-landing pages
export const PRIMARY_CTA_HREF = "/contact#quote-form";

// Standalone ads landing CTA (free audit)
export const AUDIT_CTA_LABEL = "Get My Free Audit";
export const AUDIT_CTA_LABEL_SHORT = "Get My Audit";
export const AUDIT_CTA_HREF = "/free-audit";

// Anchor used on landing pages to jump directly to the form
export const AUDIT_FORM_ANCHOR = "#audit-form";

// Call CTA (single consistent label sitewide)
export const CALL_CTA_LABEL = "Book a Call";
export const CALL_CTA_HREF = CALENDLY_URL;

