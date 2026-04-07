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
        <path
          d="M0,40 C240,75 480,10 720,40 C960,70 1200,15 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
