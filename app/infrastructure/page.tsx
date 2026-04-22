import type { Metadata } from "next";
import { InfrastructureHero } from "./InfrastructureHero";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { InfrastructureProcess } from "./InfrastructureProcess";
import { InfrastructureAssurance } from "./InfrastructureAssurance";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Infrastructure - IQF & Retort Corn Processing Facility";
const description =
  "BRK Agro processing infrastructure in Nashik: JBT IQF lines for Frozen Corn, retort systems for vacuum-packed corn on the cob, hygienic zones, and cold storage.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "iqf corn processing facility",
    "retort processing plant india",
    "frozen corn infrastructure",
    "cold chain frozen foods",
    "nashik iqf plant",
  ],
  alternates: {
    canonical: "/infrastructure",
  },
  ...pageSocialMetadata({ title, description, path: "/infrastructure" }),
};

export default function InfrastructurePage() {
  return (
    <>
      <InfrastructureHero />
      <SectionEdgeOrnament />
      <InfrastructureSection />
      <SectionEdgeOrnament />
      <InfrastructureProcess />
      <SectionEdgeOrnament />
      <InfrastructureAssurance />
      <SectionEdgeOrnament />
      <CTASection />
    </>
  );
}
