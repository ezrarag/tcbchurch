import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/", // Prototype preview: noindex
    },
    sitemap: "https://www.tcb-church.com/sitemap.xml",
  };
}
