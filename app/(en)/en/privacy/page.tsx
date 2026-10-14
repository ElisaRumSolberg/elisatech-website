import type { Metadata } from "next";
import { PrivacyPage } from "@/app/components/privacy-page";
import { pageMetadata } from "@/app/components/root-shell";
import { getDict } from "@/app/i18n";

const p = getDict("en").privacy;
export const metadata: Metadata = pageMetadata("en", "/personvern", p.metaTitle, p.metaDescription, p.metaDescription);

export default function Page() {
  return <PrivacyPage lang="en" />;
}
