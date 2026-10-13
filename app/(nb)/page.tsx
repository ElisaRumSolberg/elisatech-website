import type { Metadata } from "next";
import { HomePage } from "@/app/components/home-page";
import { pageMetadata } from "@/app/components/root-shell";
import { getDict } from "@/app/i18n";

const d = getDict("nb");
export const metadata: Metadata = pageMetadata("nb", "/", d.meta.homeTitle, d.meta.homeDescription, d.meta.ogDescription);

export default function Page() {
  return <HomePage lang="nb" />;
}
