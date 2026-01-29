export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OAB Web Agency",
    url: "https://oabwebagency.com",
    logo: "https://oabwebagency.com/logo_dark.webp",
    description:
      "Lead-generating websites built for service-based businesses. We turn visitors into calls and booked jobs.",
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
    serviceType: "Web Design and Development",
    provider: {
      "@type": "Organization",
      name: "OAB Web Agency",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description:
      "Website design, development, SEO, and conversion optimization for service-based businesses.",
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
      "Web design and development agency specializing in lead-generating websites for service-based businesses.",
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

