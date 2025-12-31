# OAB Web Agency Website

A production-ready Next.js website for OAB Web Agency, specializing in high-converting websites for service-based businesses.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Fonts**: Inter (via `next/font`)
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel (can deploy anywhere)

## 📁 Project Structure

```
oab-web-agency/
├── app/
│   ├── (standalone)/          # Standalone pages (no header/footer)
│   │   └── landing/           # Landing page for ads/email traffic
│   ├── about/                 # About page
│   ├── case-studies/          # Case studies/results page
│   ├── contact/               # Contact page with form
│   ├── services/              # Services page
│   ├── layout.tsx             # Root layout (includes Header/Footer)
│   ├── page.tsx               # Home page
│   ├── globals.css            # Global styles
│   ├── sitemap.ts             # Dynamic sitemap generation
│   └── robots.ts              # Robots.txt configuration
├── components/
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── CTAButton.tsx          # Reusable CTA button component
│   └── Section.tsx            # Reusable section wrapper with animations
└── public/                    # Static assets
```

## 🎯 Key Features

### Performance Optimizations

1. **Core Web Vitals Optimized**
   - Static rendering by default (Server Components)
   - Optimized font loading with `next/font` (Inter)
   - Image optimization ready (using `next/image`)
   - Minimal JavaScript bundle size
   - Fast page load times (< 2s target)

2. **SEO Optimized**
   - Comprehensive metadata on all pages
   - Open Graph and Twitter Card support
   - Semantic HTML structure
   - Proper heading hierarchy (1 H1 per page)
   - Dynamic sitemap generation
   - Robots.txt configuration
   - Structured data ready

3. **Conversion-Focused Design**
   - Clear value propositions
   - Strong, prominent CTAs
   - Mobile-first responsive design
   - Trust-building elements
   - Service business-specific copy

4. **Animations**
   - Subtle Framer Motion animations
   - Scroll-triggered animations
   - Stagger effects for lists
   - Optimized for performance (viewport-based)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📄 Pages

### Main Website

- **Home** (`/`) - Hero, value proposition, benefits, process, services preview
- **Services** (`/services`) - Detailed service descriptions
- **Case Studies** (`/case-studies`) - Results and testimonials
- **About** (`/about`) - Agency story and values
- **Contact** (`/contact`) - Contact form and booking options

### Landing Page

- **Free Audit** (`/free-audit`) - Standalone conversion-focused page for:
  - Google Ads campaigns
  - Facebook Ads campaigns
  - Cold email traffic
  - Direct marketing links

## 🎨 Design Decisions

### Color Scheme
- Primary: Blue (#2563eb) - Trust, professionalism
- Background: White/Gray-50 - Clean, minimal
- Text: Gray-900 - High contrast, readable

### Typography
- Font: Inter (via Google Fonts)
- Optimized loading with `next/font`
- Clear hierarchy with proper font weights

### Layout
- Max width: 7xl (1280px) for content
- Responsive breakpoints: sm, md, lg
- Mobile-first approach

## ⚡ Performance Decisions

1. **Server Components by Default**
   - Reduced client-side JavaScript
   - Faster initial page loads
   - Better SEO

2. **Static Rendering**
   - All pages are statically generated
   - Fast page loads
   - Easy to cache

3. **Optimized Animations**
   - Framer Motion with `viewport={{ once: true }}`
   - Animations only trigger once
   - Reduced re-renders

4. **Font Optimization**
   - Inter font loaded via `next/font`
   - Automatic subsetting
   - Display swap for better LCP

## 🔍 SEO Decisions

1. **Metadata Strategy**
   - Unique title and description per page
   - Template-based titles for consistency
   - Open Graph for social sharing
   - Twitter Cards for better social previews

2. **Semantic HTML**
   - Proper use of `<header>`, `<main>`, `<section>`, `<footer>`
   - One H1 per page
   - Logical heading hierarchy

3. **Sitemap & Robots**
   - Dynamic sitemap generation
   - Proper robots.txt configuration
   - All pages indexed

4. **Content Structure**
   - Service business-focused keywords
   - Local SEO ready
   - Conversion-focused copy

## 📝 Content Strategy

All copy is written specifically for service-based businesses:
- Plumbers
- HVAC companies
- Electricians
- Cleaners
- Contractors
- Other service providers

Copy emphasizes:
- Results over features
- Lead generation
- Phone calls and bookings
- Speed and performance
- Local search visibility

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site is static-friendly and can be deployed to:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any static hosting

## 🔧 Customization

### Update Contact Form

The contact form in `/app/contact/page.tsx` currently logs to console. To make it functional:

1. Add a form handler (e.g., Formspree, Resend, or custom API)
2. Update the `handleSubmit` function
3. Add success/error handling

### Update Calendly Link

Replace the placeholder Calendly link in the contact page with your actual booking link.

### Update Domain

Update the `baseUrl` in:
- `app/sitemap.ts`
- `app/robots.ts`
- `app/layout.tsx` (Open Graph URL)

### Add Images

Add images to `/public` and use `next/image` for optimization.

## 📊 Analytics & Tracking

To add analytics:

1. **Google Analytics**: Add to `app/layout.tsx`
2. **Conversion Tracking**: Add to CTA buttons
3. **Heatmaps**: Add tools like Hotjar or Microsoft Clarity

## 🎯 Next Steps

1. **Add Real Images**: Replace placeholder content with actual images
2. **Connect Contact Form**: Integrate with email service or CRM
3. **Add Analytics**: Set up tracking for conversions
4. **A/B Testing**: Test different CTAs and headlines
5. **Content Updates**: Add real case studies and testimonials
6. **Blog Section**: Consider adding a blog for SEO

## 📄 License

This project is proprietary and created for OAB Web Agency.

## 🤝 Support

For questions or issues, contact the development team.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
