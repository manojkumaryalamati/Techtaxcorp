import type { ReactNode } from "react";
import { motion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  id?: string;
};

export function PageHero({ eyebrow, title, description, actions, id }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-brand-navy-deep via-brand-navy to-brand-navy-mid py-20 sm:py-28"
      aria-labelledby={id}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_15%_15%,rgba(249,115,22,0.20),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.16),transparent_42%),radial-gradient(circle_at_50%_100%,rgba(99,102,241,0.14),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-orange-300 backdrop-blur-sm">
            {eyebrow}
          </span>
          <h1
            id={id}
            className="mt-5 text-[32px] font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[52px]"
          >
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
          {actions && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{actions}</div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
