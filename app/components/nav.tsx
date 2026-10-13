"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { href, switchPath, type Lang } from "../i18n/config";

type Strings = {
  work: string;
  studio: string;
  about: string;
  cta: string;
  home: string;
  openMenu: string;
  closeMenu: string;
  language: string;
};

export function Nav({ lang, t }: { lang: Lang; t: Strings }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const home = href(lang, "/");

  const links = [
    { href: `${home}#work`, label: t.work },
    { href: `${home}#studio`, label: t.studio },
    { href: `${home}#about`, label: t.about },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <Link href={home} className="wordmark" aria-label={t.home}>
        elisa<span className="dot">.</span>
        <small>studio</small>
      </Link>
      <nav aria-label="Main">
        <ul id="menu" className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
          <li className="nav-cta-item">
            <Link href={`${home}#contact`} className="btn btn-primary btn-small" onClick={() => setOpen(false)}>
              {t.cta}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="nav-tools">
        <div className="lang-switch" role="group" aria-label={t.language}>
          {(["nb", "en"] as Lang[]).map((l) =>
            l === lang ? (
              <span key={l} aria-current="true" lang={l}>{l === "nb" ? "NO" : "EN"}</span>
            ) : (
              <Link key={l} href={switchPath(pathname, l)} hrefLang={l} lang={l} aria-label={l === "nb" ? "Norsk" : "English"}>
                {l === "nb" ? "NO" : "EN"}
              </Link>
            ),
          )}
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? t.closeMenu : t.openMenu}</span>
          <span aria-hidden="true" className="menu-icon" />
        </button>
      </div>
    </header>
  );
}
