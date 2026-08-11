export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-News",
          "GoogleOther",
          "Google-Extended",
          "AdsBot-Google",
          "Mediapartners-Google",
          "Storebot-Google",
        ],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}
