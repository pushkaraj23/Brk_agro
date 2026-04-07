import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InfrastructureSection } from "@/components/sections/InfrastructureSection";
import { ProcessFlowSection } from "@/components/sections/ProcessFlowSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Infrastructure — BRK Agro | World-Class Processing Facility",
  description:
    "Explore BRK Agro's state-of-the-art processing infrastructure — IQF technology, retort processing, temperature-controlled storage, and export-ready packaging.",
};

export default function InfrastructurePage() {
  return (
    <>
      <PageHero
        badge="Our Infrastructure"
        title="World-Class Processing Facility"
        subtitle="A modern, hygienic, and technology-driven facility designed to deliver premium frozen produce that meets the highest international standards."
        breadcrumb={[{ label: "Infrastructure", href: "/infrastructure" }]}
      />
      <InfrastructureSection />
      <ProcessFlowSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
