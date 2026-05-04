import type { ReactNode } from "react";
import { brochureAsset } from "@/lib/constants";

export function BrochureDownloadLink({
  className = "",
  children = "Download brochure",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={brochureAsset.href} download={brochureAsset.fileName} className={className}>
      {children}
    </a>
  );
}
