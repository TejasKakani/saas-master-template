// /src/components/Hero.tsx
import { ArrowRight, Sparkles } from "lucide-react";
import { saasConfig } from "@/config/saasConfig";
import CTAButton from "@/components/CTAButton";

export default function Hero() {
  const {
    headline,
    highlightText,
    eyebrow,
    subheadline,
    primaryCtaLabel,
    primaryCtaContext,
    socialProof,
  } = saasConfig.hero;

  // Splits the config-driven headline around highlightText so that phrase
  // (and only that phrase) renders with the gradient treatment.
  const [before, after] = headline.includes(highlightText)
    ? headline.split(highlightText)
    : [headline, ""];

  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-28 sm:pt-36 lg:px-8">
      {/* Aurora mesh — the page's signature background element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute right-1/4 top-10 h-72 w-72 rounded-full bg-secondary/25 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-tertiary/20 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <div className="glass-surface inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          {eyebrow}
        </div>

        <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {before}
          {highlightText && <span className="gradient-text">{highlightText}</span>}
          {after}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {subheadline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <CTAButton
            context={primaryCtaContext}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-alt px-6 py-3.5 font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/40 active:scale-[0.98] sm:w-auto"
          >
            {primaryCtaLabel}
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </CTAButton>
        </div>

        {socialProof && <p className="mt-6 text-sm text-muted">{socialProof}</p>}
      </div>
    </section>
  );
}