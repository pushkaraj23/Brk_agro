import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WhyBrkSection } from "@/components/sections/WhyBrkSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Quality — BRK Agro | Trusted Frozen Food Partner",
  description:
    "Discover why buyers, distributors, and HoReCa partners trust BRK Agro for premium frozen produce. Quality certifications, traceability, and consistent standards.",
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        badge="Quality & Standards"
        title="Your Trusted Partner in Frozen Produce"
        subtitle="From trusted farm sourcing to reliable global delivery — discover what sets BRK Agro apart as a frozen food partner for buyers, distributors, and HoReCa worldwide."
        breadcrumb={[{ label: "Quality", href: "/quality" }]}
      />
      <WhyBrkSection />
      <TrustSection />
      <CTASection />
    </>
  );
}
