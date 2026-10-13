import type { Metadata } from "next";
import Link from "next/link";
import { Bodoni_Moda, Figtree } from "next/font/google";
import { nb } from "./i18n/nb";
import { en } from "./i18n/en";
import "./globals.css";

const display = Bodoni_Moda({ variable: "--font-display", subsets: ["latin", "latin-ext"], style: ["normal", "italic"] });
const sans = Figtree({ variable: "--font-sans", subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "404 · Elisa Studio",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="nb" className={`${display.variable} ${sans.variable}`}>
      <body>
        <main className="not-found">
          <Link href="/" className="wordmark">
            elisa<span className="dot">.</span>
            <small>studio</small>
          </Link>
          <h1 className="section-title">{nb.notFound.title}</h1>
          <p className="section-lede">{nb.notFound.text}</p>
          <p className="section-lede" lang="en">{en.notFound.title}. {en.notFound.text}</p>
          <div className="hero-actions">
            <Link href="/" className="btn btn-primary">{nb.notFound.home}</Link>
            <Link href="/en" className="btn btn-ghost" lang="en">{en.notFound.home}</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
