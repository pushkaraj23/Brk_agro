import { LeafDecor } from "@/components/decorative/LeafDecor";

/**
 * Paired leaf accents matching the footer: top-right + bottom-left.
 * Place inside a `relative overflow-hidden` container so they layer behind content.
 */
export function SectionLeafAccents() {
  return (
    <>
      <LeafDecor className="pointer-events-none absolute top-12 right-16 h-12 w-8 rotate-[20deg] text-brand-green/10 hidden lg:block" />
      <LeafDecor className="pointer-events-none absolute bottom-24 left-12 h-10 w-6 -rotate-[15deg] text-brand-green/8 hidden lg:block" />
    </>
  );
}
