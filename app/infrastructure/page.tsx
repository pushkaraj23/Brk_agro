import type { Metadata } from "next";
import { InfrastructureHero } from "./InfrastructureHero";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { InfrastructureProcess } from "./InfrastructureProcess";
import { InfrastructureAssurance } from "./InfrastructureAssurance";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Infrastructure — BRK Agro | World-Class Processing Facility",
  description:
    "Explore BRK Agro's state-of-the-art processing infrastructure — IQF technology, retort processing, temperature-controlled storage, and export-ready packaging.",
};

export default function InfrastructurePage() {
  return (
    <>
      <InfrastructureHero />
      <InfrastructureSection />
      <InfrastructureProcess />
      <InfrastructureAssurance />
      <CTASection />
    </>
  );
}
