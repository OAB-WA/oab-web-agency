# Setup Guide - OAB Web Agency Website

This guide will help you complete the final setup steps for your website.

## 🔧 Required Setup (Before Going Live)

### 1. Contact Form Integration

The contact form is currently set up to use Formspree. Choose one of these options:

#### Option A: Formspree (Easiest - Free tier available)
1. Go to [formspree.io](https://formspree.io) and create an account
2. Create a new form
3. Copy your form ID
4. Open `app/contact/page.tsx`
5. Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID

#### Option B: Custom API Endpoint
1. Create an API route at `app/api/contact/route.ts`
2. Uncomment the API endpoint code in `app/contact/page.tsx`
3. Implement email sending (using Resend, SendGrid, or similar)

### 2. Update Contact Information

Update the following files with your actual contact information:

**`components/Footer.tsx`** - Update:
- `contactInfo.email` - Your email address
- `contactInfo.phone` - Your phone number
- `contactInfo.address` - Your business address
- `socialLinks` - Your social media URLs

**`components/SchemaMarkup.tsx`** - Update:
- Organization address
- Contact phone and email
- Social media URLs in `sameAs` array

### 3. Update Calendly Link

**`app/contact/page.tsx`** - Replace:
```tsx
href="https://calendly.com"
```
With your actual Calendly booking URL.

### 4. Custom Favicon

Replace the default Next.js favicon:

1. Create or obtain your favicon files:
   - `favicon.ico` (32x32 or 16x16)
   - `apple-touch-icon.png` (180x180)
   - `favicon-16x16.png`
   - `favicon-32x32.png`

2. Place them in the `app/` directory (or `public/` for static files)

3. Update `app/layout.tsx` metadata if needed:
```tsx
icons: {
  icon: '/favicon.ico',
  apple: '/apple-touch-icon.png',
}
```

### 5. Update Domain URLs

Update the base URL in these files:

**`app/sitemap.ts`** - Replace:
```tsx
const baseUrl = "https://oabwebagency.com";
```

**`app/robots.ts`** - Replace:
```tsx
sitemap: "https://oabwebagency.com/sitemap.xml",
```

**`app/layout.tsx`** - Update Open Graph URL:
```tsx
url: "https://oabwebagency.com",
```

### 6. Add Google Analytics (Optional but Recommended)

Google Analytics 4 is already set up! You just need to add your Measurement ID.

#### Setup Steps:
1. Create a GA4 property at [Google Analytics](https://analytics.google.com/)
2. Get your Measurement ID (format: `G-XXXXXXXXXX`)
3. Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
4. Replace `G-XXXXXXXXXX` with your actual Measurement ID
5. Restart your development server

#### What's Already Tracked:
- ✅ Page views on all pages
- ✅ Contact form submissions
- ✅ Free audit form submissions
- ✅ Automatic page view tracking

#### Additional Tracking Available:
The following utilities are available in `lib/gtag.ts`:
- `trackFormSubmission(formName)` - Track form submissions
- `trackCTAClick(ctaLabel, location)` - Track CTA button clicks
- `trackOutboundLink(url, label)` - Track external link clicks
- `event({ action, category, label, value })` - Custom event tracking

Example usage:
```tsx
import { trackCTAClick } from "@/lib/gtag";

<button onClick={() => trackCTAClick("Get Free Audit", "Hero")}>
  Get Your Free Audit
</button>
```

### 7. Add Real Images

Replace placeholder content with actual images:

1. **Hero Images**: Add to hero sections
2. **Case Study Screenshots**: Add before/after images
3. **Team Photos**: Add to About page
4. **Client Logos**: Add to footer or testimonials section
5. **Service Icons**: Replace emojis with SVG icons

Use `next/image` for all images:
```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // for above-the-fold images
/>
```

### 8. Review Legal Pages

Review and customize:
- `app/privacy/page.tsx` - Privacy Policy
- `app/terms/page.tsx` - Terms of Service

Update with your specific business details and legal requirements.

### 9. Test Everything

Before going live, test:
- [ ] Contact form submission
- [ ] All links work correctly
- [ ] Mobile responsiveness
- [ ] Page load speeds
- [ ] SEO metadata (use Google Rich Results Test)
- [ ] All pages render correctly
- [ ] 404 page works

## 📝 Optional Enhancements

### Newsletter Signup
Add an email capture form using:
- Mailchimp
- ConvertKit
- Resend
- Or your preferred email service

### Live Chat Widget
Add a chat widget:
- Intercom
- Drift
- Tawk.to (free)

### Performance Monitoring
- Google Search Console
- Google Analytics
- Hotjar or Microsoft Clarity (heatmaps)

## 🚀 Deployment Checklist

Before deploying:
- [ ] All contact information updated
- [ ] Contact form tested and working
- [ ] All URLs updated to production domain
- [ ] Analytics configured
- [ ] Legal pages reviewed
- [ ] Images optimized and added
- [ ] SEO metadata verified
- [ ] Mobile testing completed
- [ ] Cross-browser testing done

## 📞 Need Help?

If you need assistance with any of these setup steps, refer to the main README.md or contact your developer.

---

**Note**: All TODO comments in the code indicate places where you need to add your actual information.

