interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  textClassName?: string;
}

function LogoIcon({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="100" height="100" rx="16" fill="#0f1b2d" />

      <path d="M15 22 H85 V34 H56 V78 H44 V34 H15 Z" fill="#ffffff" />

      <path d="M50 34 H80 V46 H68 V78 H56 V46 H50 Z" fill="#14b8a6" />

      <line x1="20" y1="44" x2="38" y2="44" stroke="#14b8a6" strokeWidth="2" />
      <line x1="20" y1="52" x2="34" y2="52" stroke="#14b8a6" strokeWidth="2" />
      <line x1="20" y1="60" x2="30" y2="60" stroke="#14b8a6" strokeWidth="2" />
      <circle cx="38" cy="44" r="2.5" fill="#14b8a6" />
      <circle cx="34" cy="52" r="2.5" fill="#14b8a6" />
      <circle cx="30" cy="60" r="2.5" fill="#14b8a6" />

      <path d="M70 58 L77 48 L84 58 H80 V70 H74 V58 Z" fill="#14b8a6" />
    </svg>
  );
}

export function Logo({ className = "", iconSize = 40, showText = true, textClassName = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon size={iconSize} />
      {showText && (
        <span className={`font-serif font-bold tracking-tight ${textClassName}`}>
          <span className="text-foreground">Tech</span>
          <span className="text-foreground">Tax</span>
          <span style={{ color: "#14b8a6" }}>Corp</span>
        </span>
      )}
    </div>
  );
}
