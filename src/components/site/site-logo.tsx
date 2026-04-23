type SiteLogoProps = {
  /** Cream header vs green footer — same asset, tuned for contrast on each surface */
  placement?: "header" | "footer";
  className?: string;
};

/**
 * Full wordmark; source art is processed to transparent WebP (`public/logo-transparent.webp`).
 */
export function SiteLogo({ placement = "header", className = "" }: SiteLogoProps) {
  const base =
    placement === "header"
      ? "h-9 w-auto max-h-9 max-w-[min(72vw,400px)] object-contain object-left contrast-[1.02] saturate-[1.02]"
      : "h-11 w-auto max-w-[min(85vw,300px)] object-contain object-left drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] contrast-[1.03]";

  return (
    <img
      src="/logo-transparent.webp"
      alt="A.I.BUILD — Precision Automation"
      width={720}
      height={172}
      loading={placement === "header" ? "eager" : "lazy"}
      decoding="async"
      className={`${base} ${className}`.trim()}
    />
  );
}
