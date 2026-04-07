import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutBrief } from "@/components/sections/home/AboutBrief";
import { ProductsBrief } from "@/components/sections/home/ProductsBrief";
import { WhyBrkBrief } from "@/components/sections/home/WhyBrkBrief";
import { InfrastructureBrief } from "@/components/sections/home/InfrastructureBrief";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <AboutBrief />
      <ProductsBrief />
      <WhyBrkBrief />
      <InfrastructureBrief />
      <CTASection />
    </>
  );
}
