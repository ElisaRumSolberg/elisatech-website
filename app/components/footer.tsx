import Link from "next/link";
import { href, type Lang } from "../i18n/config";

export function Footer({ lang, tagline, copyright, privacy }: { lang: Lang; tagline: string; copyright: string; privacy: string }) {
  return (
    <footer className="footer">
      <span className="wordmark small">
        elisa<span className="dot">.</span>
        <small>studio</small>
      </span>
      <p>{tagline}</p>
      <p className="footer-meta">
        <span>{copyright}</span>
        <Link href={href(lang, "/personvern")}>{privacy}</Link>
      </p>
    </footer>
  );
}
