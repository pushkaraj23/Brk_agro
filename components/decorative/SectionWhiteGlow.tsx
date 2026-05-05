/**
 * Prominent white radial glows for full-bleed green (`--color-section-green-bg`) sections.
 * Parent must be `relative overflow-hidden`.
 */
export function SectionWhiteGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Top bloom — main highlight */}
      <div className="absolute -top-[36%] left-1/2 aspect-[2/1] w-[160%] max-w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse_closest_side,rgba(255,255,255,0.88),rgba(255,255,255,0.38)_38%,rgba(255,255,255,0.12)_55%,transparent_72%)]" />
      {/* Bottom-right wash */}
      <div className="absolute -bottom-[14%] -right-[10%] h-[28rem] w-[28rem] max-w-[110vw] bg-[radial-gradient(circle,rgba(255,255,255,0.62),rgba(255,255,255,0.22)_42%,transparent_68%)]" />
      {/* Left accent */}
      <div className="absolute top-[22%] -left-[14%] h-[24rem] w-[24rem] bg-[radial-gradient(circle,rgba(255,255,255,0.52),rgba(255,255,255,0.14)_45%,transparent_62%)]" />
      {/* Center veil — lifts mid-tones */}
      <div className="absolute left-1/2 top-[42%] h-[min(130%,60rem)] w-[min(100%,80rem)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.34),rgba(255,255,255,0.08)_48%,transparent_70%)]" />
    </div>
  );
}
