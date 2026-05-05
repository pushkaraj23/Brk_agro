import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { AboutBrief } from "@/components/sections/home/AboutBrief";
import { ProductsBrief } from "@/components/sections/home/ProductsBrief";
import { WhyBrkBrief } from "@/components/sections/home/WhyBrkBrief";
import { InfrastructureBrief } from "@/components/sections/home/InfrastructureBrief";
import { ColdRoomRentalSection } from "@/components/sections/ColdRoomRentalSection";
import { CTASection } from "@/components/sections/CTASection";
import { SectionEdgeOrnament } from "@/components/decorative/SectionEdgeOrnament";
import { siteConfig, contactInfo } from "@/lib/constants";
import { phoneDialString } from "@/lib/contactLinks";
import { pageSocialMetadata } from "@/lib/seo";

const homeTitle =
  "BRK Agro | Leading Processor & Exporter of Frozen Food from India";
const homeDescription =
  "BRK Agro is a leading processor and exporter of premium quality frozen food from India. IQF kernels, retort corn, mixed vegetables and more — hygienic Pune district facility, export-ready packaging, and cold room rental support.";

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
    "brk agro pune shirur",
    "shikrapur frozen corn",
    "cold room rental facility",
    "solar cold storage",
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
      streetAddress: "A/P, Shikrapur",
      addressLocality: "Shirur",
      addressRegion: "Maharashtra",
      postalCode: "412208",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: phoneDialString(contactInfo.phone),
      email: contactInfo.email,
      contactType: "customer service",
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
      <ColdRoomRentalSection />
      <SectionEdgeOrnament />
      <CTASection />
    </>
  );
}
