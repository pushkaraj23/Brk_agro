import type { Metadata } from "next";
import { QualityHero } from "./QualityHero";
import { WhyBrkSection } from "@/components/sections/WhyBrkSection";
import { QualityAssuranceSection } from "./QualityAssuranceSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Quality — BRK Agro | Trusted Frozen Food Partner",
  description:
    "Discover why buyers, distributors, and HoReCa partners trust BRK Agro for premium frozen produce. Quality certifications, traceability, and consistent standards.",
};

export default function QualityPage() {
  return (
    <>
      <QualityHero />
      <WhyBrkSection />
      <QualityAssuranceSection />
      <CTASection />
    </>
  );
}
