import { siteUrl } from "./sitePath";

export default function CountryStructuredData({ slug, name, description, image, imageAlt, plans }) {
  const pageUrl = siteUrl(`/${slug}/`);
  const webpageId = `${pageUrl}#webpage`;
  const imageId = `${pageUrl}#primaryimage`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const planListId = `${pageUrl}#plans-list`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: pageUrl,
        name: `Best eSIM for ${name}: Compare Plans & Prices`,
        description,
        inLanguage: "en",
        dateModified: "2026-08-23T21:46:26+03:00",
        isPartOf: { "@id": `${siteUrl("/")}#website` },
        publisher: { "@id": `${siteUrl("/")}#organization` },
        primaryImageOfPage: { "@id": imageId },
        breadcrumb: { "@id": breadcrumbId },
        mainEntity: { "@id": planListId },
        about: {
          "@type": "Thing",
          name: `${name} travel eSIM plans`,
        },
      },
      {
        "@type": "ImageObject",
        "@id": imageId,
        url: siteUrl(image),
        contentUrl: siteUrl(image),
        width: 1200,
        height: 630,
        caption: imageAlt,
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Global eSIMs",
            item: siteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: `${name} eSIMs`,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": planListId,
        name: `eSIM plans compared for ${name}`,
        numberOfItems: plans.length,
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: plans.map((plan, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Service",
            name: `${plan.brand} ${plan.product} eSIM plan`,
            serviceType: "Prepaid travel eSIM plan",
            provider: {
              "@type": "Organization",
              name: plan.brand,
            },
            areaServed: {
              "@type": "Country",
              name,
            },
            description: `${plan.dataLabel} for ${plan.days} days with ${plan.network} network access.`,
            offers: {
              "@type": "Offer",
              price: plan.price.toFixed(2),
              priceCurrency: "USD",
              url: `${pageUrl}#plans`,
            },
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
