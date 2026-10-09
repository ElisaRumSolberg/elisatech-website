import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bodoni_Moda, Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://elisatech.io"),
  title: "Elisa Rumeysa Solberg — Elisa Studio | elisatech.io",
  description:
    "Portfolio and web studio of Elisa Rumeysa Solberg, Computer Engineering student in Bergen. Websites, software and AI systems, with real projects and a direct line for new work.",
  applicationName: "Elisa Studio",
  authors: [{ name: "Elisa Rumeysa Solberg", url: "https://elisatech.io" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Elisa Rumeysa Solberg — Elisa Studio",
    description: "Thoughtful technology, beautifully built. Websites, software and AI systems from Bergen.",
    url: "https://elisatech.io",
    siteName: "Elisa Studio",
    images: [{ url: "/work/mangfoldshuset.jpg", width: 2160, height: 1170 }],
    locale: "en_GB",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://elisatech.io/#website",
      url: "https://elisatech.io/",
      name: "Elisa Studio",
      alternateName: ["ElisaTech", "elisatech.io"],
      author: { "@id": "https://elisatech.io/#elisa" },
    },
    {
      "@type": "Person",
      "@id": "https://elisatech.io/#elisa",
      name: "Elisa Rumeysa Solberg",
      url: "https://elisatech.io/",
      email: "mailto:hello@elisatech.io",
      jobTitle: "Computer Engineering student",
      affiliation: { "@type": "CollegeOrUniversity", name: "Western Norway University of Applied Sciences (HVL)" },
      address: { "@type": "PostalAddress", addressLocality: "Bergen", addressCountry: "NO" },
      knowsLanguage: ["nb", "en", "tr"],
      sameAs: ["https://github.com/ElisaRumSolberg"],
    },
  ],
};

export const viewport: Viewport = {
  themeColor: "#FAF7F3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JBR4458X7Q" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JBR4458X7Q');`}
        </Script>
      </body>
    </html>
  );
}
