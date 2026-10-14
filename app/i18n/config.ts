export const SITE_URL = "https://www.elisastudio.no";

export type Lang = "nb" | "en";
export const langs: Lang[] = ["nb", "en"];

/** Pages whose English slug differs from the Norwegian one (keyed by the Norwegian path). */
const enSlugs: Record<string, string> = {
  "/personvern": "/privacy",
};

/** Norwegian lives at the root, English under /en. `path` is always the Norwegian path. */
export function href(lang: Lang, path: string) {
  if (lang === "nb") return path;
  if (path === "/") return "/en";
  return `/en${enSlugs[path] ?? path}`;
}

/** The same page in the other language. */
export function switchPath(pathname: string, to: Lang) {
  let bare = pathname === "/en" ? "/" : pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
  const nbPath = Object.keys(enSlugs).find((k) => enSlugs[k] === bare);
  if (nbPath) bare = nbPath;
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
