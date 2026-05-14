import { Component, lazy, Suspense, type ErrorInfo, type ReactNode, useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, HardHat, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroR3FLayer = lazy(() => import("./HeroR3FLayer"));

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );
  useEffect(() => {
    const mq = window.matchMedia(query);
    const fn = () => setMatches(mq.matches);
    fn();
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, [query]);
  return matches;
}

function useWebGLAvailable(): boolean | null {
  const [ok, setOk] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setOk(!!(c.getContext("webgl") ?? c.getContext("experimental-webgl")));
    } catch {
      setOk(false);
    }
  }, []);
  return ok;
}

class WebGLErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { err: boolean }> {
  state = { err: false };
  static getDerivedStateFromError() {
    return { err: true };
  }
  componentDidCatch(_e: Error, _i: ErrorInfo) {}
  render() {
    return this.state.err ? this.props.fallback : this.props.children;
  }
}

function GlobeFallback() {
  return (
    <div
      className="relative mx-auto flex aspect-square w-full max-w-[380px] items-center justify-center md:max-w-none"
      role="img"
      aria-label="Global connectivity illustration"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 via-indigo-600/10 to-transparent blur-3xl" />
      <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-blue-500/20 bg-gradient-to-br from-blue-900/30 to-indigo-900/20 shadow-[0_0_80px_rgba(59,130,246,0.15)] md:h-80 md:w-80 lg:h-96 lg:w-96">
        <div className="absolute inset-4 rounded-full border border-blue-400/10" />
        <div className="absolute inset-10 rounded-full border border-blue-400/10" />
        <div className="absolute inset-16 rounded-full border border-blue-400/15" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <div
            key={deg}
            className="absolute h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.9)]"
            style={{
              left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 44}% - 4px)`,
              top: `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 44}% - 4px)`,
            }}
          />
        ))}
        <div className="text-center">
          <div className="text-2xl font-bold text-white/80 md:text-3xl">🌐</div>
          <p className="mt-2 text-xs text-blue-300/70">Global Connect</p>
        </div>
      </div>
    </div>
  );
}

function FloatingProductLink({
  href,
  icon: Icon,
  title,
  tagline,
  accent,
}: {
  href: string;
  icon: typeof Truck;
  title: string;
  tagline: string;
  accent: "orange" | "sky";
}) {
  const ring = accent === "orange"
    ? "hover:border-orange-500/40 hover:shadow-orange-500/10"
    : "hover:border-sky-500/40 hover:shadow-sky-500/10";
  const iconBg = accent === "orange"
    ? "bg-orange-500/15 text-orange-400"
    : "bg-sky-500/15 text-sky-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={href}
        data-testid={`link-product-${title.toLowerCase()}`}
        className={`group flex h-full flex-col rounded-2xl border border-white/[0.09] bg-white/[0.04] p-4 text-left shadow-lg shadow-black/30 ring-1 ring-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.07] ${ring} sm:p-5`}
      >
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} sm:h-11 sm:w-11`}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="mt-3 font-serif text-base font-bold tracking-tight text-white sm:text-lg">{title}</span>
        <span className="mt-1 line-clamp-2 text-xs leading-snug text-slate-400 sm:text-sm">{tagline}</span>
        <span className="mt-3 inline-flex items-center gap-0.5 text-xs font-semibold text-orange-400 sm:text-sm">
          Explore
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </Link>
    </motion.div>
  );
}

export function Hero3D() {
  const prefersReducedMotion = useReducedMotion();
  const mdUp = useMediaQuery("(min-width: 768px)");
  const webgl = useWebGLAvailable();
  const useCanvas = !prefersReducedMotion && webgl === true && mdUp;

  return (
    <section
      className="relative scroll-mt-24 overflow-hidden border-b border-white/[0.06]"
      style={{ background: "linear-gradient(160deg, #020817 0%, #04101f 45%, #020c1a 100%)" }}
      aria-labelledby="hero-heading"
    >
      {/* Deep glow ambience */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 90% 60% at 70% 50%, rgba(29,78,216,0.13) 0%, transparent 60%)",
            "radial-gradient(ellipse 55% 50% at 15% 30%, rgba(249,115,22,0.1) 0%, transparent 55%)",
            "radial-gradient(ellipse 40% 40% at 50% 100%, rgba(2,8,23,0.95) 0%, transparent 60%)",
          ].join(","),
        }}
        aria-hidden
      />

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-8 xl:gap-14">

          {/* ── Left: text content ── */}
          <div className="order-2 flex flex-col justify-center text-center lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge
                data-testid="badge-hero-tagline"
                className="mx-auto mb-5 w-fit gap-1.5 rounded-full border border-sky-400/20 bg-sky-950/50 px-3 py-1 text-[11px] font-medium text-sky-300 shadow-sm backdrop-blur-md sm:px-4 sm:text-xs lg:mx-0"
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden />
                Ledger software · Product studio · Custom apps
              </Badge>

              <h1
                id="hero-heading"
                data-testid="heading-hero"
                className="font-serif text-[1.85rem] font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-4xl lg:text-[3rem] lg:leading-[1.07]"
              >
                Premium business{" "}
                <span
                  className="inline"
                  style={{
                    background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #a78bfa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  software
                </span>
                , built for how you actually work
              </h1>

              <p className="mx-auto mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-300 sm:mt-6 sm:text-lg lg:mx-0">
                TechTaxCorp designs ledger platforms and field-ready products —{" "}
                <strong className="font-semibold text-white">VahanBooks</strong> for transport khata &amp; trips, and{" "}
                <strong className="font-semibold text-white">MySiteWorks</strong> for construction projects — plus custom
                websites, mobile apps, and enterprise-style workflows.
              </p>

              <p className="mx-auto mt-3 max-w-lg text-[13px] leading-relaxed text-slate-500 sm:text-sm lg:mx-0">
                Mobile-first, fast to adopt, and clear enough for owners and crews to run day to day.
              </p>

              <div className="mt-8 flex w-full flex-col gap-3 sm:mx-auto sm:max-w-md sm:flex-row sm:justify-center lg:mx-0 lg:max-w-none lg:justify-start">
                <Button
                  size="lg"
                  data-testid="button-hero-products"
                  className="h-12 w-full rounded-full border-0 bg-gradient-to-r from-orange-500 to-orange-600 px-6 text-base font-semibold text-white shadow-lg shadow-orange-500/25 hover:from-orange-400 hover:to-orange-500 sm:flex-1 lg:w-auto lg:min-w-[11rem]"
                  asChild
                >
                  <Link href="/#products">
                    View products
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-hero-contact"
                  className="h-12 w-full rounded-full border border-white/20 bg-white/[0.06] text-base text-white backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.10] sm:flex-1 lg:w-auto lg:min-w-[11rem]"
                  asChild
                >
                  <Link href="/contact">Talk to us</Link>
                </Button>
              </div>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start"
            >
              {["India-built", "Mobile-first", "SMB-ready"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 text-xs text-slate-500">
                  <span className="h-1 w-1 rounded-full bg-sky-500" />
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: 3D Globe ── */}
          <div className="order-1 relative lg:order-2">
            {/* Glow behind globe */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: "85%",
                height: "85%",
                background: "radial-gradient(circle, rgba(29,78,216,0.22) 0%, rgba(99,102,241,0.10) 40%, transparent 70%)",
                filter: "blur(24px)",
              }}
              aria-hidden
            />
            {useCanvas ? (
              <WebGLErrorBoundary fallback={<GlobeFallback />}>
                <Suspense fallback={<GlobeFallback />}>
                  <HeroR3FLayer />
                </Suspense>
              </WebGLErrorBoundary>
            ) : (
              <GlobeFallback />
            )}
          </div>
        </div>

        {/* ── Product Cards ── */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-14 lg:gap-6">
          <FloatingProductLink
            href="/vahanbooks"
            icon={Truck}
            title="VahanBooks"
            tagline="Simple transport khata and trip management for Indian truck businesses."
            accent="orange"
          />
          <FloatingProductLink
            href="/mysiteworks"
            icon={HardHat}
            title="MySiteWorks"
            tagline="Simple construction project management for modern builders."
            accent="sky"
          />
        </div>
      </div>
    </section>
  );
}
