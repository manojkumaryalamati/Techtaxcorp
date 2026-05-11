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

/** `null` until client check completes — avoids mounting WebGL before we know support. */
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
  componentDidCatch(_e: Error, _i: ErrorInfo) {
    /* WebGL or R3F init failed — show static hero visual */
  }
  render() {
    return this.state.err ? this.props.fallback : this.props.children;
  }
}

function HeroVisualFallback() {
  return (
    <div
      className="relative mx-auto w-full max-w-lg md:max-w-none"
      role="img"
      aria-label="Stylized ledger dashboard connecting VahanBooks and MySiteWorks"
    >
      <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-gradient-to-b from-white/[0.07] via-transparent to-transparent p-5 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-white/[0.04] sm:p-6 md:p-8">
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-500/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl"
          aria-hidden
        />

        <div className="relative grid min-h-[240px] grid-cols-12 gap-3 sm:min-h-[280px] md:min-h-[300px]">
          <div className="col-span-12 flex flex-col rounded-2xl border border-white/[0.08] bg-black/25 p-4 backdrop-blur-md sm:col-span-7">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Operations</span>
              <span className="h-1.5 w-10 rounded-full bg-white/10" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[40, 56, 32, 64].map((h, i) => (
                <div
                  key={i}
                  className="flex h-24 flex-col justify-end rounded-lg border border-white/[0.06] bg-white/[0.04] px-1.5 pb-2 pt-3 sm:h-28"
                >
                  <div
                    className="mx-auto w-full max-w-[2rem] rounded-sm bg-gradient-to-t from-orange-500/45 to-orange-400/15"
                    style={{ height: `${h}px` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-2 w-3/5 max-w-[12rem] rounded-full bg-white/[0.12]" />
              <div className="h-2 w-2/5 max-w-[8rem] rounded-full bg-white/[0.06]" />
            </div>
          </div>

          <div className="col-span-6 flex flex-col gap-2 sm:col-span-5">
            <div className="flex flex-1 flex-col rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-transparent p-3">
              <div className="h-1.5 w-8 rounded-full bg-orange-400/90" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/15" />
                <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
              </div>
              <div className="mt-auto flex gap-1 pt-3">
                <div className="h-6 flex-1 rounded-md bg-white/[0.06]" />
                <div className="h-6 w-8 rounded-md bg-orange-500/30" />
              </div>
            </div>
            <div className="flex flex-1 flex-col rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-transparent p-3">
              <div className="h-1.5 w-8 rounded-full bg-sky-400/90" />
              <div className="mt-3 space-y-1.5">
                <div className="h-1.5 w-full rounded-full bg-white/15" />
                <div className="h-1.5 w-3/5 rounded-full bg-white/10" />
              </div>
              <div className="mt-auto flex gap-1 pt-3">
                <div className="h-6 flex-1 rounded-md bg-white/[0.06]" />
                <div className="h-6 w-8 rounded-md bg-sky-500/30" />
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute left-[28%] top-[42%] hidden h-px w-[20%] origin-left rotate-[18deg] bg-gradient-to-r from-orange-400/50 to-transparent sm:block" aria-hidden />
          <div className="pointer-events-none absolute right-[28%] top-[42%] hidden h-px w-[20%] origin-right -rotate-[18deg] bg-gradient-to-l from-sky-400/50 to-transparent sm:block" aria-hidden />
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
  const ring =
    accent === "orange"
      ? "hover:border-orange-500/40 hover:shadow-orange-500/10"
      : "hover:border-sky-500/40 hover:shadow-sky-500/10";
  const iconBg =
    accent === "orange" ? "bg-orange-500/15 text-orange-400" : "bg-sky-500/15 text-sky-400";

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
        className={`group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-left shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] ${ring} sm:p-5`}
      >
        <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} sm:h-11 sm:w-11`}>
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <span className="mt-3 font-serif text-base font-bold tracking-tight text-white sm:text-lg">{title}</span>
        <span className="mt-1 line-clamp-2 text-xs leading-snug text-slate-300 sm:text-sm">{tagline}</span>
        <span className="mt-3 inline-flex items-center gap-0.5 text-xs font-semibold text-orange-300 sm:text-sm">
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
      className="relative scroll-mt-24 overflow-hidden border-b border-white/5 bg-gradient-to-b from-brand-navy via-brand-navy-mid to-brand-navy"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_-30%,rgba(249,115,22,0.18),transparent_55%),radial-gradient(ellipse_60%_50%_at_100%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(ellipse_50%_40%_at_0%_80%,rgba(15,39,68,0.9),transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,22,40,0.2),rgba(5,13,24,0.95))]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 xl:gap-16">
          <div className="order-2 flex flex-col justify-center text-center lg:order-1 lg:text-left">
            <Badge className="mx-auto mb-4 w-fit gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-100 shadow-sm backdrop-blur-md sm:mb-5 sm:px-4 sm:text-xs lg:mx-0">
              <Sparkles className="h-3.5 w-3.5 shrink-0 text-orange-400" aria-hidden />
              Ledger software · Product studio · Custom apps
            </Badge>
            <h1
              id="hero-heading"
              className="bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text font-serif text-[1.7rem] font-bold leading-[1.12] tracking-tight text-transparent text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
            >
              Premium business software, built for how you actually work
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-slate-300 sm:mt-5 sm:text-lg lg:mx-0">
              TechTaxCorp designs ledger platforms and field-ready products—{" "}
              <strong className="font-semibold text-white">VahanBooks</strong> for transport khata &amp; trips, and{" "}
              <strong className="font-semibold text-white">MySiteWorks</strong> for construction projects—plus custom
              websites, mobile apps, and enterprise-style workflows.
            </p>
            <p className="mx-auto mt-3 max-w-lg text-xs leading-relaxed text-slate-400 sm:text-sm lg:mx-0">
              Mobile-first, fast to adopt, and clear enough for owners and crews to run day to day.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mx-auto sm:max-w-md sm:flex-row sm:justify-center lg:mx-0 lg:max-w-none lg:justify-start">
              <Button
                size="lg"
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
                className="h-12 w-full rounded-full border-2 border-white/25 bg-white/5 text-base text-white backdrop-blur-sm hover:bg-white/10 sm:flex-1 lg:w-auto lg:min-w-[11rem]"
                asChild
              >
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {useCanvas ? (
              <WebGLErrorBoundary fallback={<HeroVisualFallback />}>
                <Suspense fallback={<HeroVisualFallback />}>
                  <HeroR3FLayer />
                </Suspense>
              </WebGLErrorBoundary>
            ) : (
              <HeroVisualFallback />
            )}
          </div>
        </div>

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
