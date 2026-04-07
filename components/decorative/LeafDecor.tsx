interface LeafDecorProps {
  className?: string;
}

export function LeafDecor({ className = "" }: LeafDecorProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 60"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20 0C20 0 40 20 40 35C40 49.36 31.05 60 20 60C8.95 60 0 49.36 0 35C0 20 20 0 20 0Z" />
      <path
        d="M20 12V50"
        stroke="white"
        strokeWidth="1.2"
        fill="none"
        opacity="0.25"
      />
      <path
        d="M20 25C14 22 10 28 8 32"
        stroke="white"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
      />
      <path
        d="M20 35C26 32 30 38 32 42"
        stroke="white"
        strokeWidth="0.8"
        fill="none"
        opacity="0.2"
      />
    </svg>
  );
}
