import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { CompanyStats } from "./CompanyStats";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About BRK Agro — Leading Frozen Food Manufacturer & Exporter",
  description:
    "Learn about BRK Agro's journey as a leading processor and exporter of premium frozen fruits and vegetables. Our mission, vision, and commitment to quality.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Leading Processor & Exporter of Premium Frozen Produce"
        subtitle="With state-of-the-art infrastructure and a commitment to quality, BRK Agro delivers export-grade frozen fruits and vegetables to global markets."
        breadcrumb={[{ label: "About", href: "/about" }]}
      />
      <AboutSection />
      <MissionVisionSection />
      <CompanyStats />
      <CTASection />
    </>
  );
}
