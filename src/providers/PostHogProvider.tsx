// /src/providers/PostHogProvider.tsx
"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { saasConfig } from "@/config/saasConfig";

if (typeof window !== "undefined" && saasConfig.posthog.enabled) {
  posthog.init(saasConfig.posthog.apiKey, {
    api_host: saasConfig.posthog.apiHost,
    // We capture pageviews manually below so we can track App Router
    // client-side navigations, which PostHog's default pageview capture misses.
    capture_pageview: false,
    capture_pageleave: true,
    // Autocapture logs clicks, form submits, and inputs on every element,
    // including every CTA button rendered by CTAButton.tsx.
    autocapture: true,
  });
}

function PostHogPageview(): null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || !saasConfig.posthog.enabled) return;

    let url = window.origin + pathname;
    const query = searchParams?.toString();
    if (query) url += `?${query}`;

    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PHProvider client={posthog}>
      {/* useSearchParams requires a Suspense boundary in the App Router */}
      <Suspense fallback={null}>
        <PostHogPageview />
      </Suspense>
      {children}
    </PHProvider>
  );
}