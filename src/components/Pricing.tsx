// /src/components/Pricing.tsx
import { Check } from "lucide-react";
import { saasConfig } from "@/config/saasConfig";
import CTAButton from "@/components/CTAButton";

export default function Pricing() {
  const { eyebrow, title, subtitle, tiers } = saasConfig.pricing;

  return (
    <section id="pricing" className="relative px-6 py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => {
            const ctaContext = `${tier.name} - ${tier.price}${tier.billingPeriod}`;

            const cardBody = (
              <div className="relative flex h-full flex-col rounded-[15px] bg-surface p-8">
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-semibold text-white shadow-md">
                    Most popular
                  </span>
                )}

                <h3 className="font-display text-xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-muted">{tier.description}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted">{tier.billingPeriod}</span>
                </div>

                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {tier.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                        aria-hidden="true"
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <CTAButton
                  context={ctaContext}
                  className={`mt-8 w-full rounded-lg px-4 py-3 text-center font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-primary to-primary-alt text-white shadow-lg shadow-primary/30"
                      : "border border-foreground/10 text-foreground hover:border-primary/40"
                  }`}
                >
                  {tier.ctaLabel}
                </CTAButton>
              </div>
            );

            // Highlighted tier gets a 1.5px gradient "ring" via a padded
            // wrapper; regular tiers keep a plain hairline border.
            return tier.highlighted ? (
              <div
                key={tier.id}
                className="rounded-2xl bg-gradient-to-b from-primary via-secondary to-tertiary p-[1.5px] shadow-xl shadow-primary/10 transition-all hover:-translate-y-1"
              >
                {cardBody}
              </div>
            ) : (
              <div
                key={tier.id}
                className="rounded-2xl border border-foreground/[0.06] transition-all hover:-translate-y-1 hover:border-primary/30"
              >
                {cardBody}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}