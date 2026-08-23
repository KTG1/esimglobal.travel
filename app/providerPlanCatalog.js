const catalogueProviders = [
  { brand: "Airalo", url: "https://www.airalo.com/", color: "#ff6b4a" },
  { brand: "Holafly", url: "https://esim.holafly.com/", color: "#7b2dff" },
  { brand: "Nomad", url: "https://www.getnomad.app/", color: "#2563eb" },
  { brand: "aloSIM", url: "https://alosim.com/", color: "#e11d48" },
  { brand: "Jetpac", url: "https://www.jetpacglobal.com/", color: "#0891b2" },
];

export function buildProviderPlanCatalog(country, slug, starterPrice) {
  const sailyUrl = `https://saily.com/esim-${slug}/`;
  return [
    {
      brand: "Saily", product: `${country} Starter`, data: 1, dataLabel: "1 GB", days: 7,
      daysLabel: "7 days", price: starterPrice, network: "3G / 4G / LTE / 5G", color: "#3626a7",
      note: "Best overall · published price", url: sailyUrl,
    },
    ...catalogueProviders.map((provider) => ({
      ...provider,
      product: `${country} catalogue`,
      data: 0,
      dataLabel: "Live plans",
      days: 0,
      daysLabel: "Varies",
      price: null,
      network: "Plan and local partner dependent",
      note: "Check destination availability",
    })),
  ];
}
