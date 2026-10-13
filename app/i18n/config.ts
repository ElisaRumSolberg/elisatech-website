export const SITE_URL = "https://elisatech.io";

export type Lang = "nb" | "en";
export const langs: Lang[] = ["nb", "en"];

/** Norwegian lives at the root, English under /en. */
export function href(lang: Lang, path: string) {
  if (lang === "nb") return path;
  if (path === "/") return "/en";
  return `/en${path}`;
}

/** The same page in the other language. */
export function switchPath(pathname: string, to: Lang) {
  const bare = pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
  return href(to, bare);
}

/** hreflang alternates for a page path, for metadata and the sitemap. */
export function alternates(path: string) {
  return {
    nb: `${SITE_URL}${href("nb", path)}`,
    en: `${SITE_URL}${href("en", path)}`,
    "x-default": `${SITE_URL}${href("nb", path)}`,
  };
}
