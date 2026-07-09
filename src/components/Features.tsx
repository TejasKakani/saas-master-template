// /src/components/Features.tsx
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { saasConfig } from "@/config/saasConfig";
import { hexToRgba } from "@/lib/hexToRgb";

export default function Features() {
  const { eyebrow, title, subtitle, items } = saasConfig.features;
  const palette = saasConfig.theme.colors.accentPalette;

  return (
    <section id="features" className="px-6 py-24 lg:px-8">
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

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((feature, index) => {
            const Icon = (Icons[feature.icon as keyof typeof Icons] ??
              Icons.Sparkles) as LucideIcon;
            // Cycles through the config's accent palette so the grid reads
            // as intentionally colorful rather than one repeated accent.
            const accent = palette[index % palette.length];

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-foreground/[0.06] bg-surface p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ backgroundColor: hexToRgba(accent, 0.12), color: accent }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>

                {/* Accent underline appears on hover, matching the icon color */}
                <div
                  className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-300 group-hover:scale-x-100"
                  style={{ backgroundColor: accent }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}