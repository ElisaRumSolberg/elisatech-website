import type { Metadata } from "next";
import { MangfoldshusetCase } from "@/app/components/case-mangfoldshuset";
import { pageMetadata } from "@/app/components/root-shell";
import { getDict } from "@/app/i18n";

const c = getDict("nb").caseStudy;
export const metadata: Metadata = pageMetadata("nb", "/projects/mangfoldshuset-vestland", c.metaTitle, c.metaDescription, c.ogDescription);

export default function Page() {
  return <MangfoldshusetCase lang="nb" />;
}
