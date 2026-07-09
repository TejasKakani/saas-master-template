// /src/config/saasConfig.ts

export interface FeatureItem {
  /** Any icon name exported by lucide-react, e.g. "Zap", "ShieldCheck", "Gauge" */
  icon: string;
  title: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  billingPeriod: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SaasConfig {
  meta: {
    siteName: string;
    title: string;
    description: string;
    url: string;
    ogImage: string;
    twitterHandle: string;
  };
  // Update the theme block in the SaasConfig interface
theme: {
  colors: {
    primary: string;
    primaryAlt: string;
    secondary: string;
    tertiary: string;
    background: string;
    surface: string;
    foreground: string;
    muted: string;
    accentPalette: string[];
    dark: {
      primary: string;
      primaryAlt: string;
      secondary: string;
      tertiary: string;
      background: string;
      surface: string;
      foreground: string;
      muted: string;
    };
  };
};
  posthog: {
    apiKey: string;
    apiHost: string;
    enabled: boolean;
  };
  // Update the hero block in the SaasConfig interface
hero: {
  eyebrow: string;
  headline: string;
  highlightText: string; // substring of headline to render with a gradient
  subheadline: string;
  primaryCtaLabel: string;
  primaryCtaContext: string;
  socialProof: string;
};
  features: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    tiers: PricingTier[];
  };
  waitlist: {
    title: string;
    description: string;
    successMessage: string;
  };
  nav: {
    links: NavLink[];
    ctaLabel: string;
    ctaContext: string;
  };
  footer: {
    tagline: string;
    columns: { title: string; links: NavLink[] }[];
    copyrightText: string;
  };
}

export const saasConfig: SaasConfig = {
  meta: {
    siteName: "Flowstack",
    title: "Flowstack — Ship your ops workflows in minutes, not sprints",
    description:
      "Flowstack lets small teams automate multi-step operations workflows without writing glue code or waiting on engineering.",
    url: "https://flowstack.example.com",
    ogImage: "/og-image.png",
    twitterHandle: "@flowstackhq",
  },

  // Replace the theme object in saasConfig
theme: {
  colors: {
    primary: "#7C3AED",     // violet — primary actions, links
    primaryAlt: "#2563EB",  // blue — paired with primary in gradients
    secondary: "#EC4899",   // pink — accents, highlighted badges
    tertiary: "#F59E0B",    // amber — third gradient stop, warm accent
    background: "#FAFAFF",  // page background
    surface: "#FFFFFF",     // card/panel background, sits above background
    foreground: "#0F0B1F",  // near-black with violet undertone
    muted: "#64617A",
    // Used to cycle feature icon colors — chosen to read clearly on both
    // light and dark surfaces so it doesn't need a separate dark variant.
    accentPalette: ["#7C3AED", "#EC4899", "#F59E0B", "#2563EB", "#10B981"],
    dark: {
      primary: "#A78BFA",
      primaryAlt: "#60A5FA",
      secondary: "#F472B6",
      tertiary: "#FBBF24",
      background: "#0A0814",
      surface: "#171326",
      foreground: "#F5F4FA",
      muted: "#9C98B2",
    },
  },
},

  // Fill these from your PostHog project settings.
  // NEXT_PUBLIC_POSTHOG_KEY / NEXT_PUBLIC_POSTHOG_HOST in .env.local will
  // override these at runtime if present.
  posthog: {
    apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_YOUR_PROJECT_API_KEY",
    apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
    enabled: true,
  },

  // Replace the hero object in saasConfig
hero: {
  eyebrow: "Now in private beta",
  headline: "Turn your team's messy hand-offs into workflows that just run",
  highlightText: "workflows that just run",
  subheadline:
    "Flowstack connects the tools you already use into automated, auditable workflows — no engineering backlog required.",
  primaryCtaLabel: "Get early access",
  primaryCtaContext: "Hero - Get Early Access",
  socialProof: "Join 400+ operations teams already on the waitlist",
},

  features: {
    eyebrow: "Why teams switch",
    title: "Everything your ops stack was missing",
    subtitle:
      "Built for the person who currently glues five tools together with spreadsheets and Slack reminders.",
    items: [
      {
        icon: "Workflow",
        title: "Visual workflow builder",
        description:
          "Drag, drop, and branch logic across your existing tools — no code, no YAML files to babysit.",
      },
      {
        icon: "Zap",
        title: "Instant triggers",
        description:
          "React to events the moment they happen, from a form submission to a status change in your CRM.",
      },
      {
        icon: "ShieldCheck",
        title: "Audit-ready by default",
        description:
          "Every run is logged with full input/output history, so you can answer 'what happened here' in seconds.",
      },
      {
        icon: "Gauge",
        title: "Built for scale",
        description:
          "From ten runs a day to ten thousand — the same workflow definition just keeps working.",
      },
      {
        icon: "Puzzle",
        title: "50+ integrations",
        description:
          "Native connectors for the tools already running your business, with a webhook fallback for the rest.",
      },
      {
        icon: "Users",
        title: "Built for teams, not just admins",
        description:
          "Role-based permissions mean ops can ship changes without waiting on IT for every tweak.",
      },
    ],
  },

  pricing: {
    eyebrow: "Early-bird pricing",
    title: "Lock in beta pricing before public launch",
    subtitle:
      "We're validating demand before we open sign-ups. Reserve your spot at these rates — they won't last past beta.",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: "$0",
        billingPeriod: "/mo",
        description: "For solo operators validating their first workflow.",
        features: [
          "Up to 3 active workflows",
          "500 workflow runs / month",
          "Core integrations",
          "Community support",
        ],
        ctaLabel: "Join the waitlist",
      },
      {
        id: "growth",
        name: "Growth",
        price: "$29",
        billingPeriod: "/mo",
        description: "For small teams ready to remove the manual glue work.",
        features: [
          "Unlimited workflows",
          "10,000 workflow runs / month",
          "All integrations",
          "Role-based permissions",
          "Priority support",
        ],
        ctaLabel: "Claim early-bird pricing",
        highlighted: true,
      },
      {
        id: "scale",
        name: "Scale",
        price: "$99",
        billingPeriod: "/mo",
        description: "For teams running mission-critical operations.",
        features: [
          "Everything in Growth",
          "Unlimited workflow runs",
          "SSO & audit logs",
          "Dedicated onboarding",
          "SLA-backed support",
        ],
        ctaLabel: "Talk to us",
      },
    ],
  },

  waitlist: {
    title: "You're almost in",
    description:
      "We're currently in a private beta. Drop your email to claim your early-bird spot and lock in this pricing before we open up publicly.",
    successMessage:
      "You're on the list! We'll email you the moment your spot opens up.",
  },

  nav: {
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
    ],
    ctaLabel: "Get early access",
    ctaContext: "Navbar - Get Early Access",
  },

  footer: {
    tagline:
      "Automated ops workflows for teams who'd rather not glue five tools together by hand.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Twitter", href: "https://twitter.com/flowstackhq" },
          { label: "Contact", href: "mailto:hello@flowstack.example.com" },
        ],
      },
    ],
    copyrightText: `© ${new Date().getFullYear()} Flowstack. All rights reserved.`,
  },
};
