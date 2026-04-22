import type { Metadata } from "next";
import { QualityAssuranceSection } from "./QualityAssuranceSection";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Quality Standards - Frozen Corn & Retort Corn";
const description =
  "BRK Agro quality systems for Frozen Corn and Retort Corn: microbiological testing, process control, traceability, documentation, and export-aligned food safety practices.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "frozen corn quality testing",
    "retort corn quality standards",
    "microbiological testing frozen foods",
    "food safety frozen corn",
    "haccp frozen corn india",
  ],
  alternates: {
    canonical: "/quality",
  },
  ...pageSocialMetadata({ title, description, path: "/quality" }),
};

export default function QualityPage() {
  return (
    <>
      <QualityAssuranceSection />
      <SectionEdgeOrnament />
      <CTASection />

    </>
  );
}
