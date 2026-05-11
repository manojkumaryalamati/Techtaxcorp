import { cn } from "@/lib/utils";
import brandLogo from "@/assets/images/techtaxfinalogo.png";

type TechTaxCorpLogoProps = {
  className?: string;
  variant?: "header" | "footer";
};

export function TechTaxCorpLogo({ className, variant = "header" }: TechTaxCorpLogoProps) {
  return (
    <img
      src={brandLogo}
      alt="TechTaxCorp logo — ledger software and business application development company"
      width={520}
      height={140}
      className={cn(
        "block h-auto w-auto max-w-[min(100vw-5rem,18rem)] shrink-0 object-contain object-left",
        variant === "header"
          ? "min-h-[3.5rem] h-16 sm:h-[4.25rem] md:h-[4.75rem] lg:h-20"
          : "min-h-[7rem] h-32 sm:h-36 md:h-40 lg:h-44 max-w-md",
        "select-none drop-shadow-[0_1px_2px_rgba(15,23,42,0.06)]",
        className,
      )}
      decoding="async"
      fetchPriority={variant === "header" ? "high" : "auto"}
    />
  );
}
