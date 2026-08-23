import { countrySlugs } from "./countryPages";
import { siteUrl } from "./sitePath";

export const dynamic = "force-static";

const editorialRoutes = [
  "airalo-alternatives",
  "best-travel-esim",
  "esim-glossary",
  "how-to-choose-a-travel-esim",
  "saily-review",
  "saily-vs-airalo",
  "saily-vs-holafly",
  "travel-esim-statistics",
  "what-is-a-travel-esim",
];

export default function sitemap() {
  const countryRoutes = ["france", ...countrySlugs];

  return [
    {
      url: siteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...countryRoutes.map((route) => ({
      url: siteUrl(`/${route}/`),
      changeFrequency: "weekly",
      priority: 0.9,
    })),
    ...editorialRoutes.map((route) => ({
      url: siteUrl(`/${route}/`),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
