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
  // Intentionally disabled globally: wave dividers removed from the site.
  void fill;
  void className;
  void flip;

  return null;
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
