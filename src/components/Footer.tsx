// /src/components/Footer.tsx
import { saasConfig } from "@/config/saasConfig";

export default function Footer() {
  const { tagline, columns, copyrightText } = saasConfig.footer;

  return (
    <footer className="relative border-t border-foreground/[0.06] px-6 py-12 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <p className="font-display text-lg font-bold text-foreground">
              {saasConfig.meta.siteName}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
              {tagline}
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <p className="text-sm font-semibold text-foreground">
                {column.title}
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-foreground/[0.06] pt-6">
          <p className="text-xs text-muted">{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}