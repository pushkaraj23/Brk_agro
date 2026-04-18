import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhyBrkSection } from "@/components/sections/WhyBrkSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PartnershipApproach } from "./PartnershipApproach";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "Why BRK Agro - Trusted Corn Export Partner";
const description =
  "Why buyers choose BRK Agro for Frozen Corn and Retort Corn: farm-linked sourcing, IQF and retort capability, documentation support, and dependable export execution.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "why choose brk agro",
    "frozen corn export partner",
    "retort corn supplier india",
    "reliable frozen food exporter",
    "iqf corn supplier",
  ],
  alternates: {
    canonical: "/why-brk-agro",
  },
  ...pageSocialMetadata({ title, description, path: "/why-brk-agro" }),
};

export default function WhyBrkAgroPage() {
  return (
    <>
      <PageHero
        badge="Why BRK Agro"
        title="Your Trusted Partner in Frozen & Retort Corn"
        subtitle="From trusted sweet corn sourcing to IQF and retort processing and reliable export execution — see what makes BRK Agro a strong partner for Frozen Corn and Retort Corn buyers, distributors, and HoReCa worldwide."
        breadcrumb={[
          { label: "Why BRK Agro", href: "/why-brk-agro" },
        ]}
      />
      <WhyBrkSection />
      <PartnershipApproach />
      <TrustSection />
      <CTASection />
    </>
  );
}
