import { cn } from "@/lib/utils";
import brandLogo from "@/assets/images/ttcorp-logo-horizontal.png";

type TTCorpSolutionsLogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function TTCorpSolutionsLogo({ className, variant = "header" }: TTCorpSolutionsLogoProps) {
  return (
    <img
      src={brandLogo}
      alt="TTCorpSolutions logo — ledger software and business application development company"
      width={600}
      height={160}
      className={cn(
        "block h-auto w-auto max-w-[min(100vw-4rem,22rem)] shrink-0 object-contain object-left",
        variant === "header"
          ? "min-h-[2.25rem] h-9 sm:h-10 md:h-11 lg:h-12"
          : "min-h-[3.5rem] h-14 sm:h-16 md:h-[4.5rem] max-w-sm",
        "select-none",
        className,
      )}
      decoding="async"
      fetchpriority={variant === "header" ? "high" : "auto"}
    />
  );
}
