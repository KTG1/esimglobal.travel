export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-Video",
          "Googlebot-News",
          "GoogleOther",
          "GoogleOther-Image",
          "GoogleOther-Video",
          "Google-InspectionTool",
          "Google-CloudVertexBot",
          "Google-Extended",
          "AdsBot-Google",
          "AdsBot-Google-Mobile",
          "Mediapartners-Google",
          "Storebot-Google",
          "APIs-Google",
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
