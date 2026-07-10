// /src/app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/providers/PostHogProvider";
import { saasConfig } from "@/config/saasConfig";
import { hexToRgbChannels } from "@/lib/hexToRgb";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: saasConfig.meta.title,
  description: saasConfig.meta.description,
  metadataBase: new URL(saasConfig.meta.url),
  openGraph: {
    title: saasConfig.meta.title,
    description: saasConfig.meta.description,
    url: saasConfig.meta.url,
    siteName: saasConfig.meta.siteName,
    images: [{ url: saasConfig.meta.ogImage, width: 1200, height: 630 }],
    type: "website",
  },
};

const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    var isDark = stored ? stored === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", isDark);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { primary, primaryAlt, secondary, tertiary, background, surface, foreground, muted, dark } =
    saasConfig.theme.colors;

  const themeCss = `
    :root {
      --color-primary: ${hexToRgbChannels(primary)};
      --color-primary-alt: ${hexToRgbChannels(primaryAlt)};
      --color-secondary: ${hexToRgbChannels(secondary)};
      --color-tertiary: ${hexToRgbChannels(tertiary)};
      --color-background: ${hexToRgbChannels(background)};
      --color-surface: ${hexToRgbChannels(surface)};
      --color-foreground: ${hexToRgbChannels(foreground)};
      --color-muted: ${hexToRgbChannels(muted)};
    }
    .dark {
      --color-primary: ${hexToRgbChannels(dark.primary)};
      --color-primary-alt: ${hexToRgbChannels(dark.primaryAlt)};
      --color-secondary: ${hexToRgbChannels(dark.secondary)};
      --color-tertiary: ${hexToRgbChannels(dark.tertiary)};
      --color-background: ${hexToRgbChannels(dark.background)};
      --color-surface: ${hexToRgbChannels(dark.surface)};
      --color-foreground: ${hexToRgbChannels(dark.foreground)};
      --color-muted: ${hexToRgbChannels(dark.muted)};
    }
  `;

  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCss }} />
      </head>
      <body
        className="bg-background font-body text-foreground antialiased transition-colors"
        suppressHydrationWarning
      >
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}