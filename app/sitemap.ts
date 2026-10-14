import type { MetadataRoute } from "next";
import { alternates, langs } from "./i18n/config";

const pages = [
  { path: "/", priority: 1 },
  { path: "/projects/mangfoldshuset-vestland", priority: 0.8 },
  { path: "/personvern", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.flatMap(({ path, priority }) => {
    const urls = alternates(path);
    return langs.map((lang) => ({
      url: urls[lang],
      lastModified: new Date("2026-10-13"),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: { nb: urls.nb, en: urls.en } },
    }));
  });
}
