import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutBrief } from "@/components/sections/home/AboutBrief";
import { ProductsBrief } from "@/components/sections/home/ProductsBrief";
import { WhyBrkBrief } from "@/components/sections/home/WhyBrkBrief";
import { InfrastructureBrief } from "@/components/sections/home/InfrastructureBrief";
import { CTASection } from "@/components/sections/CTASection";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { siteConfig } from "@/lib/constants";
import { pageSocialMetadata } from "@/lib/seo";

const homeTitle = "Frozen Corn & Retort Corn Exporter from India";
const homeDescription =
  "Premium Frozen Corn and Retort Corn from Nashik, India — IQF kernels, retort corn on the cob, hygienic processing, and export support for distributors and food brands.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  keywords: [
    "frozen corn exporter",
    "retort corn exporter",
    "frozen corn india",
    "retort corn india",
    "iqf frozen corn",
    "corn on cobs vacuum packed",
    "sweet corn kernels iqf",
    "brk agro nashik",
  ],
  alternates: {
    canonical: "/",
  },
  ...pageSocialMetadata({
    title: homeTitle,
    description: homeDescription,
    path: "/",
  }),
};

export default function HomePage() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BRK Agro",
    url: "https://www.brkagro.com",
    description: siteConfig.description,
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BRK Agro",
    url: "https://www.brkagro.com",
    logo: "https://www.brkagro.com/brk_logo.png",
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Industrial Area",
      addressLocality: "Nashik",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919876543210",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    sameAs: [] as string[],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection />
      <SectionEdgeOrnament />
      <StatsStrip />
      <SectionEdgeOrnament />
      <AboutBrief />
      <SectionEdgeOrnament />
      <ProductsBrief />
      <SectionEdgeOrnament />
      <WhyBrkBrief />
      <SectionEdgeOrnament />
      <InfrastructureBrief />
      <SectionEdgeOrnament />
      <CTASection />
    </>
  );
}
