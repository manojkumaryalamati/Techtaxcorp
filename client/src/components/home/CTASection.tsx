import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "./motion-variants";

export function CTASection() {
  return (
    <section
      id="contact-cta"
      className="scroll-mt-24 bg-gradient-to-b from-brand-navy-deep to-brand-navy px-4 pb-16 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-[1240px]">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-navy-mid via-brand-navy to-[#020617] px-6 py-10 text-center shadow-2xl shadow-black/40 sm:rounded-3xl sm:px-10 sm:py-14"
          {...fadeUp}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.30),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(37,99,235,0.20),transparent_38%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="text-[30px] font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[44px]"
            >
              Have a software or digital project in mind?
            </h2>
            <p className="mt-4 text-base font-normal leading-relaxed text-slate-300 sm:text-lg">
              Tell us what your business needs. TTCorp Solutions can help plan, design, build, launch,
              and support the right solution.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button
                size="lg"
                className="h-12 rounded-full border-0 bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-orange-500"
                asChild
              >
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-full border border-white/20 bg-white/[0.06] px-8 text-base text-white backdrop-blur-sm hover:border-white/35 hover:bg-white/[0.11]"
                asChild
              >
                <Link href="/contact">Contact TTCorp Solutions</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
