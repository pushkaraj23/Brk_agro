import type { Metadata } from "next";
import { AboutHero } from "./AboutHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { MissionVisionSection } from "@/components/sections/MissionVisionSection";
import { CompanyStats } from "./CompanyStats";
import { CTASection } from "@/components/sections/CTASection";
import { pageSocialMetadata } from "@/lib/seo";

const title = "About BRK Agro - Frozen Corn Processing Company";
const description =
  "Learn about BRK Agro — Frozen Corn and Retort Corn processor in Nashik, India — mission, vision, IQF and retort focus, hygiene, and export partnerships.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about brk agro",
    "frozen corn company india",
    "retort corn supplier",
    "frozen food exporter india",
    "nashik frozen food manufacturer",
  ],
  alternates: {
    canonical: "/about",
  },
  ...pageSocialMetadata({ title, description, path: "/about" }),
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
