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
  title: "Elisa Studio · Elisa Rumeysa Solberg",
  description:
    "Computer Engineering student in Bergen building thoughtful websites, useful software and intelligent systems. Real projects, and a direct line for new work.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Elisa Studio · Elisa Rumeysa Solberg",
    description: "Thoughtful technology, beautifully built. Websites, software and AI systems from Bergen.",
    url: "https://elisatech.io",
    siteName: "Elisa Studio",
    images: [{ url: "/work/mangfoldshuset.jpg", width: 2160, height: 1170 }],
    locale: "en_GB",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JBR4458X7Q" strategy="afterInteractive" />
        <Script id="ga" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-JBR4458X7Q');`}
        </Script>
      </body>
    </html>
  );
}
