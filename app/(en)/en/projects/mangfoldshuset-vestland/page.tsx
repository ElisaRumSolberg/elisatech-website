import type { Metadata } from "next";
import { MangfoldshusetCase } from "@/app/components/case-mangfoldshuset";
import { pageMetadata } from "@/app/components/root-shell";
import { getDict } from "@/app/i18n";

const c = getDict("en").caseStudy;
export const metadata: Metadata = pageMetadata("en", "/projects/mangfoldshuset-vestland", c.metaTitle, c.metaDescription, c.ogDescription);

export default function Page() {
  return <MangfoldshusetCase lang="en" />;
}
