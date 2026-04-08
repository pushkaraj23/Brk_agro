import type { Metadata } from "next";
import { ProductsHero } from "./ProductsHero";
import { ProductShowcase } from "./ProductShowcase";
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
      <ProductsHero />
      <ProductShowcase />
      <ProductQuality />
      <CTASection />
    </>
  );
}
