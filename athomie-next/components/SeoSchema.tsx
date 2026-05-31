import { absoluteUrl, localeNames, localePath, siteSettings, type Locale } from "@/content/site";

type SeoSchemaProps = {
  locale: Locale;
  heroTitle: string;
  heroLede: string;
  process: [string, string, string][];
  faqs: [string, string][];
};

export function SeoSchema({ locale, heroTitle, heroLede, process, faqs }: SeoSchemaProps) {
  const pageUrl = absoluteUrl(localePath(locale));
  const organizationId = `${siteSettings.canonicalUrl}/#organization`;
  const websiteId = `${siteSettings.canonicalUrl}/#website`;
  const productId = `${siteSettings.canonicalUrl}/#homie-tiny-home`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "HomeAndConstructionBusiness"],
        "@id": organizationId,
        name: siteSettings.brand,
        url: siteSettings.canonicalUrl,
        logo: absoluteUrl("/images/brand/homie-logo.png"),
        email: siteSettings.email,
        description: siteSettings.description,
        areaServed: siteSettings.areaServed,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: siteSettings.email,
          areaServed: siteSettings.areaServed,
          availableLanguage: Object.values(localeNames)
        },
        knowsAbout: siteSettings.keywords
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: `${siteSettings.brand} - ${siteSettings.tagline}`,
        url: siteSettings.canonicalUrl,
        inLanguage: locale,
        publisher: {
          "@id": organizationId
        }
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: heroTitle,
        description: heroLede,
        inLanguage: locale,
        isPartOf: {
          "@id": websiteId
        },
        about: {
          "@id": productId
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/renders/homie-exterior-day.png")
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "HOMIE",
            item: siteSettings.canonicalUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: heroTitle,
            item: pageUrl
          }
        ]
      },
      {
        "@type": "Product",
        "@id": productId,
        name: "HOMIE timber tiny home",
        brand: {
          "@id": organizationId
        },
        category: "Tiny house",
        description:
          "A compact architectural timber tiny home for serious small living in Portugal, launching first in the Algarve.",
        image: [
          absoluteUrl("/images/renders/homie-exterior-day.png"),
          absoluteUrl("/images/renders/homie-interior.png"),
          absoluteUrl("/images/renders/homie-workshop-detail.png")
        ],
        material: ["Timber cladding", "Wood fibre insulation", "Timber frame"],
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Approximate size",
            value: "Approx. 27 m2"
          },
          {
            "@type": "PropertyValue",
            name: "Model",
            value: "One-bedroom compact tiny home"
          },
          {
            "@type": "PropertyValue",
            name: "Service area",
            value: "Portugal, launching first in the Algarve"
          }
        ]
      },
      {
        "@type": "HowTo",
        name: "How to start a HOMIE tiny home enquiry",
        description:
          "A controlled path from interest to handover, with site assumptions and scope confirmed before final commitments.",
        step: process.map(([, title, text], index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: title,
          text
        }))
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer
          }
        }))
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(graph).replace(/</g, "\\u003c")
      }}
    />
  );
}
