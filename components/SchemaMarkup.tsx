export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OAB Web Agency",
    url: "https://oabwebagency.com",
    logo: "https://oabwebagency.com/logo_dark.webp",
    description:
      "Fast, conversion-focused websites for local service businesses and auto repair shops. We turn local searches into calls, bookings, and quote requests.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+2349150725803",
      contactType: "Customer Service",
      email: "hello@oabwebagency.com",
      availableLanguage: "English",
    },
    sameAs: [
      // TODO: Add your actual social media URLs
      "https://linkedin.com/company/oab-web-agency",
      "https://facebook.com/oabwebagency",
      "https://twitter.com/oab_web_agency",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Conversion-Focused Web Design and Local SEO",
    provider: {
      "@type": "Organization",
      name: "OAB Web Agency",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description:
      "Conversion-focused website design, auto repair web design, speed optimization, and local SEO for service businesses.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "OAB Web Agency",
    description:
      "Web design agency specializing in fast, conversion-focused websites that turn local searches into customers for service-based businesses and auto repair shops.",
    url: "https://oabwebagency.com",
    telephone: "+2349150725803",
    email: "hello@oabwebagency.com",
    priceRange: "$$",
    image: "https://oabwebagency.com/logo_dark.webp",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // TODO: Add your actual coordinates if you have a physical location
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [
      "https://linkedin.com/company/oab-web-agency",
      "https://facebook.com/oabwebagency",
      "https://twitter.com/oab_web_agency",
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://oabwebagency.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://oabwebagency.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pricing",
        item: "https://oabwebagency.com/pricing",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

