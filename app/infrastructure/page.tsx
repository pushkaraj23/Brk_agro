import type { Metadata } from "next";
import { InfrastructureHero } from "./InfrastructureHero";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { InfrastructureProcess } from "./InfrastructureProcess";
import { InfrastructureAssurance } from "./InfrastructureAssurance";
import { ColdRoomRentalSection } from "@/components/sections/ColdRoomRentalSection";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Infrastructure — Frozen Food Processing Facility | BRK Agro";
const description =
  "BRK Agro is a leading processor and exporter of premium quality frozen food from India. Our Pune district plant features latest IQF technology, advanced retort systems, hygienic processing, strict grading, temperature-controlled storage, and export-ready packaging.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "iqf corn processing facility",
    "retort processing plant india",
    "frozen corn infrastructure",
    "cold chain frozen foods",
    "pune shirur iqf plant",
    "cold room rental",
    "solar installed facility",
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
      <ColdRoomRentalSection />
      <SectionEdgeOrnament />
      <InfrastructureProcess />
      <SectionEdgeOrnament />
      <InfrastructureAssurance />
      <SectionEdgeOrnament />
      <CTASection />
    </>
  );
}
