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
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-navy-mid via-brand-navy to-[#020617] px-6 py-10 text-center shadow-2xl shadow-black/40 sm:rounded-3xl sm:px-10 sm:py-14"
          {...fadeUp}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_15%_20%,rgba(249,115,22,0.35),transparent_42%),radial-gradient(circle_at_88%_10%,rgba(56,189,248,0.22),transparent_38%),radial-gradient(circle_at_50%_100%,rgba(15,39,68,0.9),transparent_55%)]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2
              id="cta-heading"
              className="font-serif text-2xl font-bold leading-tight tracking-tight text-white drop-shadow-sm sm:text-3xl lg:text-4xl"
            >
              Websites, mobile apps, and custom business software
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Share your goals—we reply with next steps, rough timelines, and what a first milestone could look like.
            </p>
            <dl className="mt-8 space-y-2 text-left text-sm text-slate-300 sm:mx-auto sm:max-w-md sm:text-center sm:text-base">
              <div>
                <dt className="inline font-semibold text-white">Email: </dt>
                <dd className="inline">
                  <a
                    href="mailto:techtaxcorp@gmail.com"
                    className="break-all text-orange-300 underline decoration-orange-500/40 underline-offset-4 hover:decoration-orange-300"
                  >
                    techtaxcorp@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold text-white">Site: </dt>
                <dd className="inline">
                  <a
                    href="https://techtaxcorp.com"
                    className="text-orange-300 underline decoration-orange-500/40 underline-offset-4 hover:decoration-orange-300"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    techtaxcorp.com
                  </a>
                </dd>
              </div>
            </dl>
            <Button
              size="lg"
              className="mt-9 h-12 rounded-full border-0 bg-gradient-to-r from-orange-500 to-orange-600 px-8 text-base font-semibold text-white shadow-lg shadow-orange-500/30 hover:from-orange-400 hover:to-orange-500"
              asChild
            >
              <Link href="/contact">
                Contact TechTaxCorp
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
