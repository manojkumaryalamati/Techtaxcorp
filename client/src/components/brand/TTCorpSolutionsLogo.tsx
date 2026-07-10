import { cn } from "@/lib/utils";
import brandLogo from "@/assets/images/ttcorp-logo-final.png";

type TTCorpSolutionsLogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function TTCorpSolutionsLogo({ className, variant = "header" }: TTCorpSolutionsLogoProps) {
  const isHeader = variant === "header";

  return (
    <img
      src={brandLogo}
      alt="TTCorp Solutions logo — ledger software and business application development company"
      width={980}
      height={444}
      className={cn(
        "block h-auto w-auto max-w-[min(100vw-4rem,24rem)] shrink-0 select-none object-contain object-left",
        isHeader ? "h-9 sm:h-10 md:h-11" : "h-14 sm:h-16 md:h-[4.5rem] max-w-sm",
        className,
      )}
      decoding="async"
      fetchpriority={isHeader ? "high" : "auto"}
    />
  );
}
