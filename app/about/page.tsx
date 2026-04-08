import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
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
      <AboutHero />
      <AboutSection />
      <MissionVisionSection />
      <CompanyStats />
      <CTASection />
    </>
  );
}
