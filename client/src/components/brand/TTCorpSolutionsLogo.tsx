import { cn } from "@/lib/utils";

type TTCorpSolutionsLogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

/**
 * Vector logo mark — rendered as SVG + real text rather than a raster image.
 * This guarantees pixel-perfect sharpness at any size/DPR and avoids the
 * blur/softness that comes from scaling up a low-resolution source asset.
 */
export function TTCorpSolutionsLogo({ className, variant = "header" }: TTCorpSolutionsLogoProps) {
  const isHeader = variant === "header";

  return (
    <span
      className={cn(
        "inline-flex select-none items-center gap-2",
        isHeader ? "gap-1.5 sm:gap-2" : "gap-2.5",
        className,
      )}
    >
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className={cn("shrink-0", isHeader ? "h-7 w-7 sm:h-8 sm:w-8" : "h-10 w-10 sm:h-11 sm:w-11")}
      >
        <path d="M6 4H30V13H22V56H14V13H6V4Z" fill="#FDBA74" />
        <path d="M20 0H58V11H44V60H34V11H20V0Z" fill="#F97316" />
      </svg>

      <span
        className={cn(
          "font-sans font-bold leading-none tracking-tight",
          isHeader ? "text-lg sm:text-xl md:text-[1.35rem]" : "text-2xl sm:text-[1.75rem]",
        )}
      >
        <span className="text-orange-500">TTCorp</span>
        <span className="text-slate-800 dark:text-slate-100">Solutions</span>
      </span>
    </span>
  );
}
