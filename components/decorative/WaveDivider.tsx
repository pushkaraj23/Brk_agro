/** Shared silhouette for top and bottom wave strips. */
const WAVE_PATH =
  "M0,40 C240,75 480,10 720,40 C960,70 1200,15 1440,40 L1440,80 L0,80 Z";

interface WaveDividerProps {
  fill?: string;
  className?: string;
  flip?: boolean;
}

export function WaveDivider({
  fill = "var(--color-cream)",
  className = "",
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="block h-8 w-full sm:h-12 md:h-16"
      >
        <path d={WAVE_PATH} fill={fill} />
      </svg>
    </div>
  );
}

interface WaveDividerBottomProps {
  /** Color of the filled wave (usually the section **below** this strip). */
  fill?: string;
  className?: string;
}

/**
 * Same wave as {@link WaveDivider}, rotated 180° so it reads as the **bottom**
 * edge of a block. Place it after your section content, before the next section.
 */
export function WaveDividerBottom({
  fill = "var(--color-cream)",
  className = "",
}: WaveDividerBottomProps) {
  return <WaveDivider fill={fill} className={className} flip />;
}
