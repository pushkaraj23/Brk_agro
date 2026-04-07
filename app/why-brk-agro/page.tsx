import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhyBrkSection } from "@/components/sections/WhyBrkSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PartnershipApproach } from "./PartnershipApproach";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Why BRK Agro — Your Trusted Frozen Food Partner",
  description:
    "Discover why buyers, distributors, and HoReCa partners worldwide trust BRK Agro for premium frozen fruits and vegetables. Quality, reliability, and partnership.",
};

export default function WhyBrkAgroPage() {
  return (
    <>
      <PageHero
        badge="Why BRK Agro"
        title="Your Trusted Partner in Frozen Produce"
        subtitle="From trusted farm sourcing to reliable global delivery — discover what sets BRK Agro apart as a frozen food partner for buyers, distributors, and HoReCa worldwide."
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
