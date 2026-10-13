import type { Accent } from "../i18n";

/** Renders [before, accent, after] with the accent in italics. */
export function A({ t }: { t: Accent }) {
  return (
    <>
      {t[0]}
      <em>{t[1]}</em>
      {t[2]}
    </>
  );
}

export function External({ href, newTab, children }: { href: string; newTab: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow">
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only">{newTab}</span>
    </a>
  );
}
