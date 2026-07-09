// /src/components/Navbar.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { saasConfig } from "@/config/saasConfig";
import CTAButton from "@/components/CTAButton";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { links, ctaLabel, ctaContext } = saasConfig.nav;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="glass-surface sticky top-0 z-40 border-x-0 border-t-0">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="gradient-text font-display text-lg font-bold">
          {saasConfig.meta.siteName}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <CTAButton
            context={ctaContext}
            className="rounded-lg bg-gradient-to-r from-primary to-primary-alt px-4 py-2 text-sm font-medium text-white shadow-md shadow-primary/25 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {ctaLabel}
          </CTAButton>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-foreground/5"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-foreground/[0.06] bg-background px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
                <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <CTAButton
              context={ctaContext}
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-primary to-primary-alt px-4 py-3 text-center text-sm font-medium text-white shadow-md shadow-primary/25"
            >
              {ctaLabel}
            </CTAButton>
          </div>
        </div>
      )}
    </header>
  );
}