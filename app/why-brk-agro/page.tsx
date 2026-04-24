import type { Metadata } from "next";
import { WhyBrkSection } from "@/components/sections/WhyBrkSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { PartnershipApproach } from "./PartnershipApproach";
import { WhyBrkHero } from "./WhyBrkHero";
import { ColdRoomRentalSection } from "@/components/sections/ColdRoomRentalSection";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Why BRK Agro - Trusted Corn Export Partner";
const description =
  "Why buyers choose BRK Agro for Frozen Corn and Retort Corn: farm-linked sourcing, IQF and retort capability, solar-installed facilities, cold room rental options, documentation support, and dependable export execution.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "why choose brk agro",
    "frozen corn export partner",
    "retort corn supplier india",
    "reliable frozen food exporter",
    "iqf corn supplier",
    "cold storage rental partner",
    "solar powered processing facility",
  ],
  alternates: {
    canonical: "/why-brk-agro",
  },
  ...pageSocialMetadata({ title, description, path: "/why-brk-agro" }),
};

export default function WhyBrkAgroPage() {
  return (
    <>
      <WhyBrkHero />
      <SectionEdgeOrnament />
      <WhyBrkSection />
      <SectionEdgeOrnament />
      <PartnershipApproach />
      <SectionEdgeOrnament />
      <ColdRoomRentalSection />
      <SectionEdgeOrnament />
      <TrustSection />
      <SectionEdgeOrnament />
      <CTASection />
    </>
  );
}
