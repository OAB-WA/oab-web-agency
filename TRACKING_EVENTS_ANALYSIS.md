# Tracking Events Analysis & Updates Needed

## Analysis Results

### ✅ No Duplicates Found
All tracking events are unique and serve different purposes.

### ⚠️ Potentially Redundant Event
- **Line 65**: `trackFormSubmission("Free Audit Form - Plumber Leads")`
  - **Why redundant**: We already have GA4 conversion tracking (line 46) and Google Ads conversion (line 56)
  - **Recommendation**: Keep it for general form analytics, but it's optional
  - **Action**: Update label to be more unique

## Updates Needed - Unique Labels

### 1. Form Submission Events (Lines 44-65)

**Line 46-53**: Add `event_label` to GA4 conversion
```typescript
window.gtag("event", "conversion_event_submit_lead_form_1", {
  'event_callback': () => console.log("Lead tracked successfully"),
  'event_timeout': 2000,
  'event_label': 'Plumber Leads - GA4 Conversion Event', // ADD THIS
  'email': formData.email,
  'phone_number': formData.phone,
  'value': 100.0,
  'currency': 'USD'
});
```

**Line 56-61**: Add `event_label` to Google Ads conversion
```typescript
window.gtag('event', 'conversion', {
  'send_to': 'AW-17872130458/xihSCIvfmuobEJqjjMpC',
  'event_label': 'Plumber Leads - Google Ads Conversion', // ADD THIS
  'value': 100.0,
  'currency': 'USD',
  'transaction_id': `plumber-leads-${Date.now()}`
});
```

**Line 65**: Update trackFormSubmission label
```typescript
trackFormSubmission("Plumber Leads - Form Submission General Tracking");
```

### 2. CTA Click Events

**Line 358**: Solution Section CTA
```typescript
onClick={() => trackCTAClick("Plumber Leads - CTA Solution Section", "After Solution Benefits")}
```

**Line 554**: Demo Case Studies CTA
```typescript
onClick={() => trackCTAClick("Plumber Leads - CTA Demo Case Studies", "After Case Study")}
```

**Line 778**: Strong CTA Section
```typescript
onClick={() => trackCTAClick("Plumber Leads - CTA Strong CTA Section", "Before Guarantee Section")}
```

**Line 870**: Final CTA Section
```typescript
onClick={() => trackCTAClick("Plumber Leads - CTA Final CTA Section", "End of Page")}
```

### 3. Outbound Link Events

**Line 1066**: Original Website Link
```typescript
onClick={() => trackOutboundLink(originalWebsiteUrl, "Plumber Leads - Outbound Original Website - Swan Plumbing")}
```

**Line 1077**: Demo Link
```typescript
onClick={() => trackOutboundLink(demoUrl, "Plumber Leads - Outbound Demo Website - Swan Plumbing")}
```

## Summary

- **Total Events**: 9 tracking events
- **All Unique**: ✅ Yes
- **Redundant**: 1 (optional - trackFormSubmission)
- **Action Required**: Update all labels to include "Plumber Leads -" prefix for easy filtering
