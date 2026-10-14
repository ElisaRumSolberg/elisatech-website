import type { Metadata } from "next";
import Script from "next/script";
import { Bodoni_Moda, Figtree, JetBrains_Mono } from "next/font/google";
import { SITE_URL, alternates, type Lang } from "../i18n/config";
import { getDict } from "../i18n";
import "../globals.css";

const display = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const sans = Figtree({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export function siteMetadata(lang: Lang): Metadata {
  const d = getDict(lang);
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: "Elisa Studio",
    authors: [{ name: "Elisa Rumeysa Solberg", url: SITE_URL }],
    robots: { index: true, follow: true },
    openGraph: { siteName: "Elisa Studio", locale: d.meta.ogLocale, type: "website" },
  };
}

/** Page-level metadata with canonical and hreflang alternates for `path`. */
export function pageMetadata(lang: Lang, path: string, title: string, description: string, ogDescription: string, image = "/work/mangfoldshuset.jpg"): Metadata {
  const urls = alternates(path);
  return {
    title,
    description,
    alternates: { canonical: urls[lang], languages: urls },
    openGraph: {
      title,
      description: ogDescription,
      url: urls[lang],
      siteName: "Elisa Studio",
      locale: getDict(lang).meta.ogLocale,
      type: "website",
      images: [{ url: image, width: 2160, height: 1170 }],
    },
  };
}

function structuredData(lang: Lang) {
  const d = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: "Elisa Studio",
        alternateName: ["ElisaTech", "elisatech.io", "elisastudio.no"],
        inLanguage: ["nb", "en"],
        author: { "@id": `${SITE_URL}/#elisa` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#elisa`,
        name: "Elisa Rumeysa Solberg",
        url: `${SITE_URL}/`,
        email: "mailto:hello@elisatech.io",
        jobTitle: d.meta.jobTitle,
        affiliation: { "@type": "CollegeOrUniversity", name: "Høgskulen på Vestlandet (HVL)" },
        address: { "@type": "PostalAddress", addressLocality: "Bergen", addressCountry: "NO" },
        knowsLanguage: ["nb", "en", "tr"],
        sameAs: ["https://github.com/ElisaRumSolberg", "https://www.linkedin.com/in/elisa-rumeysa-solberg-a36bb3323/"],
      },
    ],
  };
}

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(lang)) }} />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JBR4458X7Q" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JBR4458X7Q');`}
        </Script>
      </body>
    </html>
  );
}
