export const dynamic = "force-static";

import { siteUrl } from "./sitePath";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: siteUrl("/sitemap.xml"),
    host: siteUrl("/"),
  };
}
