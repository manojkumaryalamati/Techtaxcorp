import { Component, lazy, Suspense, type ErrorInfo, type ReactNode, useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronRight, HardHat, Sparkles, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroR3FLayer = lazy(() => import("./HeroR3FLayer"));

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

function useReducedMotionPref() {
  return useReducedMotion() ?? false;
}

class WebGLErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { err: boolean }
> {
  state = { err: false };
  static getDerivedStateFromError() { return { err: true }; }
  componentDidCatch(_e: Error, _i: ErrorInfo) {}
  render() { return this.state.err ? this.props.fallback : this.props.children; }
}

/* Static CSS globe shown when WebGL is unavailable */
function GlobeFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* Outer glow */}
      <div className="absolute h-[70vmin] w-[70vmin] rounded-full bg-blue-700/10 blur-[80px]" />
      {/* Rings */}
      {[1, 0.78, 0.56, 0.34].map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-blue-500/20"
          style={{ width: `${s * 70}vmin`, height: `${s * 70}vmin` }}
        />
      ))}
      {/* Orbit dots */}
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <div
          key={deg}
          className="absolute h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_4px_rgba(56,189,248,0.7)]"
          style={{
            left: `calc(50% + ${Math.cos((deg * Math.PI) / 180) * 33}vmin - 5px)`,
            top:  `calc(50% + ${Math.sin((deg * Math.PI) / 180) * 33}vmin - 5px)`,
          }}
        />
      ))}
    </div>
  );
}

function FloatingProductLink({
  href, icon: Icon, title, tagline, accent,
}: {
  href: string; icon: typeof Truck; title: string; tagline: string; accent: "orange" | "sky";
}) {
  const ring   = accent === "orange" ? "hover:border-orange-500/50" : "hover:border-sky-500/50";
  const iconBg = accent === "orange" ? "bg-orange-500/20 text-orange-400" : "bg-sky-500/20 text-sky-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={href}
        data-testid={`link-product-${title.toLowerCase()}`}
        className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-left shadow-xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.09] ${ring} sm:p-5`}
      >
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} sm:h-11 sm:w-11`}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="mt-3 font-serif text-base font-bold tracking-tight text-white sm:text-lg">{title}</span>
        <span className="mt-1 line-clamp-2 text-xs leading-snug text-slate-300 sm:text-sm">{tagline}</span>
        <span className="mt-3 inline-flex items-center gap-0.5 text-xs font-semibold text-orange-400 sm:text-sm">
          Explore
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </Link>
    </motion.div>
  );
}

export function Hero3D() {
  const noMotion = useReducedMotionPref();
  const webgl    = useWebGLAvailable();
  const useCanvas = !noMotion && webgl === true;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #010714 0%, #020c1a 60%, #03111f 100%)",
      }}
      aria-labelledby="hero-heading"
    >
      {/* ── Full-viewport 3D Globe (background layer) ── */}
      <div className="absolute inset-0 z-0">
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

      {/* ── Gradient scrim — left side darker so text pops ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: [
            /* left dark veil for text readability */
            "linear-gradient(90deg, rgba(1,7,20,0.88) 0%, rgba(1,7,20,0.70) 38%, rgba(1,7,20,0.25) 65%, transparent 100%)",
            /* bottom fade */
            "linear-gradient(to top, rgba(1,7,20,0.95) 0%, transparent 30%)",
            /* top fade */
            "linear-gradient(to bottom, rgba(1,7,20,0.5) 0%, transparent 20%)",
          ].join(","),
        }}
        aria-hidden
      />

      {/* ── Subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,1) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(148,163,184,1) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
        aria-hidden
      />

      {/* ── Foreground content ── */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center px-4 sm:px-8 lg:px-16 xl:px-24">
        <div className="w-full max-w-2xl xl:max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge
              data-testid="badge-hero-tagline"
              className="mb-6 gap-1.5 rounded-full border border-sky-400/25 bg-sky-950/60 px-3 py-1.5 text-[11px] font-medium text-sky-300 shadow-lg backdrop-blur-md sm:text-xs"
            >
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-sky-400" aria-hidden />
              Software Products · Custom Applications · Digital Solutions
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            data-testid="heading-hero"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl font-extrabold leading-[1.07] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Building{" "}
            <span
              style={{
                background: "linear-gradient(130deg, #38bdf8 0%, #818cf8 55%, #f97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              software
            </span>{" "}
            that moves businesses forward
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-300 sm:mt-6 sm:text-lg lg:text-xl"
          >
            TTCorp Solutions builds mobile apps, web platforms, business software, websites,
            automation systems, and digital solutions for growing companies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-3 text-sm text-slate-500 sm:text-base"
          >
            Serving businesses in India and the United States
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap gap-3 sm:mt-10"
          >
            <Button
              size="lg"
              data-testid="button-hero-products"
              className="h-12 rounded-full border-0 bg-gradient-to-r from-orange-500 to-orange-600 px-7 text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-orange-500"
              asChild
            >
              <Link href="/#products">
                Explore Our Work <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-testid="button-hero-contact"
              className="h-12 rounded-full border border-white/20 bg-white/[0.06] px-7 text-base text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/[0.11]"
              asChild
            >
              <Link href="/contact">Start a Project</Link>
            </Button>
          </motion.div>

          {/* Product cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14"
          >
            <FloatingProductLink
              href="/vahanbooks"
              icon={Truck}
              title="VahanBooks"
              tagline="Transport khata and trip management for Indian truck businesses."
              accent="orange"
            />
            <FloatingProductLink
              href="/mysiteworks"
              icon={HardHat}
              title="MySiteWorks"
              tagline="Construction project management for modern builders."
              accent="sky"
            />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-slate-500/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
