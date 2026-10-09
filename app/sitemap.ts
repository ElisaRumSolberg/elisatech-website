import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elisatech.io/",
      lastModified: new Date("2026-10-09"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
