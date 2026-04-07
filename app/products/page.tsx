import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ProductQuality } from "./ProductQuality";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Products — Premium Frozen Fruits & Vegetables | BRK Agro",
  description:
    "Explore BRK Agro's range of premium IQF frozen products — Sweet Corn Kernels, Green Peas, Cut Beans, Cauliflower, Diced Carrot, Corn on Cobs, and French Fries.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        badge="Our Products"
        title="Premium Frozen Product Range"
        subtitle="Each product is individually quick frozen using advanced IQF technology, preserving natural taste, vibrant color, and nutritional value for global markets."
        breadcrumb={[{ label: "Products", href: "/products" }]}
      />
      <ProductsSection />
      <ProductQuality />
      <CTASection />
    </>
  );
}
