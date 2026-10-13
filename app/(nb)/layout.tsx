import type { Metadata, Viewport } from "next";
import { RootShell, siteMetadata } from "@/app/components/root-shell";

export const metadata: Metadata = siteMetadata("nb");
export const viewport: Viewport = { themeColor: "#FAF7F3" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="nb">{children}</RootShell>;
}
