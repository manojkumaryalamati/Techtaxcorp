import logoIcon from "@assets/logo-icon.png";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const config = {
  sm: { icon: "h-8 w-8", text: "text-lg" },
  md: { icon: "h-10 w-10", text: "text-xl" },
  lg: { icon: "h-14 w-14", text: "text-3xl" },
};

export function Logo({ className = "", size = "md" }: LogoProps) {
  const { icon, text } = config[size];
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoIcon}
        alt=""
        className={`${icon} object-contain flex-shrink-0`}
      />
      <span className={`font-serif font-bold tracking-tight leading-none ${text}`}>
        <span className="text-foreground">TechTax</span>
        <span style={{ color: "#14b8a6" }}>Corp</span>
      </span>
    </div>
  );
}
