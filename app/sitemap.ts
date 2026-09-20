import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.tcb-church.com";

  const routes = [
    "",
    "/about",
    "/about/history",
    "/about/beliefs",
    "/about/leadership",
    "/plan-a-visit",
    "/services",
    "/events",
    "/watch",
    "/ministries",
    "/give",
    "/contact",
    "/prayer",
    "/announcements",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
