import logoImage from "@assets/logo.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "h-10",
  md: "h-14",
  lg: "h-20",
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImage}
        alt="TechTaxCorp"
        className={`${sizeMap[size]} w-auto object-contain`}
      />
    </div>
  );
}
