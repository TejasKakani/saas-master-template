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
  };
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
  hero: {
    eyebrow: string;
    headline: string;
    highlightText: string;
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

// Map all 5 configurations into a single object
const configMap: Record<string, SaasConfig> = {
  shipready: {
    meta: {
      siteName: "ShipReady",
      title: "ShipReady — Never launch a broken website again",
      description: "Automated pre-launch audits that catch missing SSLs, broken links, and SEO errors before your clients do.",
      url: "https://shipready.example.com",
      ogImage: "/og-image.png",
    },
    theme: {
      colors: {
        primary: "#0EA5E9",
        primaryAlt: "#2563EB",
        secondary: "#10B981",
        tertiary: "#F59E0B",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        foreground: "#0F172A",
        muted: "#64748B",
        accentPalette: ["#0EA5E9", "#10B981", "#F59E0B", "#8B5CF6", "#EC4899"],
        dark: {
          primary: "#38BDF8",
          primaryAlt: "#60A5FA",
          secondary: "#34D399",
          tertiary: "#FBBF24",
          background: "#020617",
          surface: "#0F172A",
          foreground: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
    },
    posthog: {
      apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_YOUR_PROJECT_API_KEY",
      apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      enabled: true,
    },
    hero: {
      eyebrow: "Now in private beta",
      headline: "Stop letting missing SSLs and broken links ruin your launches",
      highlightText: "ruin your launches",
      subheadline: "ShipReady scans your staging URL and generates a personalized, interactive fix-list of technical SEO, accessibility, and performance errors in 60 seconds.",
      primaryCtaLabel: "Scan your site",
      primaryCtaContext: "Hero - Scan Site",
      socialProof: "Join 600+ freelance web developers on the waitlist",
    },
    features: {
      eyebrow: "The Final Check",
      title: "Catch the silent errors that kill conversions",
      subtitle: "Built for developers who are tired of manual QA checklists and embarrassing client emails post-launch.",
      items: [
        {
          icon: "Search",
          title: "Deep Automated Audits",
          description: "Checks for 50+ critical launch factors: broken links, missing canonicals, unoptimized images, and rogue console errors.",
        },
        {
          icon: "CheckCircle",
          title: "Actionable Fix-Lists",
          description: "No confusing developer jargon. Get a simple, prioritized checklist of exactly what to fix and where it is.",
        },
        {
          icon: "Smartphone",
          title: "Real Device Simulation",
          description: "Verifies mobile tap targets and viewport scaling so your site actually works on phones.",
        },
        {
          icon: "ShieldCheck",
          title: "Security & DNS Basics",
          description: "Automatically verifies SSL certificates, DNS propagation, and basic header security before you go live.",
        },
      ],
    },
    pricing: {
      eyebrow: "Early-bird pricing",
      title: "Stop doing manual QA",
      subtitle: "Lock in beta pricing. Your first scan is on us.",
      tiers: [
        {
          id: "solo",
          name: "Solo Dev",
          price: "$9",
          billingPeriod: "/mo",
          description: "For indie hackers shipping a few side projects a year.",
          features: ["3 automated audits / month", "Standard SEO checks", "Basic reporting"],
          ctaLabel: "Join the waitlist",
        },
        {
          id: "freelancer",
          name: "Freelancer",
          price: "$29",
          billingPeriod: "/mo",
          description: "For freelance designers shipping sites weekly.",
          features: ["Unlimited audits", "Deep technical checks", "PDF client reports", "Priority support"],
          ctaLabel: "Claim early-bird pricing",
          highlighted: true,
        },
        {
          id: "agency",
          name: "Agency",
          price: "$79",
          billingPeriod: "/mo",
          description: "For web agencies managing multiple staging environments.",
          features: ["Everything in Freelancer", "White-label reports", "API access", "Team members"],
          ctaLabel: "Talk to us",
        },
      ],
    },
    waitlist: {
      title: "You're almost in",
      description: "Drop your email to claim your early-bird spot and lock in this pricing before we launch publicly.",
      successMessage: "You're on the list! We'll email you when your spot opens up.",
    },
    nav: {
      links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }],
      ctaLabel: "Get early access",
      ctaContext: "Navbar - Get Early Access",
    },
    footer: {
      tagline: "The automated pre-flight checklist for modern web developers.",
      columns: [
        { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Company", links: [{ label: "Contact", href: "mailto:tejaskakani.official@gmail.com" }] },
      ],
      copyrightText: `© ${new Date().getFullYear()} ShipReady. All rights reserved.`,
    },
  },

  foliosync: {
    meta: {
      siteName: "FolioSync",
      title: "FolioSync — The portfolio that updates itself",
      description: "Connect your Dribbble, GitHub, and Behance. We automatically generate a stunning, SEO-optimized portfolio that is never out of date.",
      url: "https://foliosync.example.com",
      ogImage: "/og-image.png",
    },
    theme: {
      colors: {
        primary: "#D946EF",
        primaryAlt: "#8B5CF6",
        secondary: "#F43F5E",
        tertiary: "#0EA5E9",
        background: "#FFFBFB",
        surface: "#FFFFFF",
        foreground: "#271C19",
        muted: "#78716C",
        accentPalette: ["#D946EF", "#F43F5E", "#8B5CF6", "#0EA5E9", "#F59E0B"],
        dark: {
          primary: "#E879F9",
          primaryAlt: "#A78BFA",
          secondary: "#FB7185",
          tertiary: "#38BDF8",
          background: "#1C1917",
          surface: "#292524",
          foreground: "#FAFAF9",
          muted: "#A8A29E",
        },
      },
    },
    posthog: {
      apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_YOUR_PROJECT_API_KEY",
      apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      enabled: true,
    },
    hero: {
      eyebrow: "Private Beta Registration",
      headline: "Stop losing clients because your portfolio is two years out of date",
      highlightText: "two years out of date",
      subheadline: "FolioSync connects to the platforms where you already post your work, automatically syncing your latest projects into a beautiful, custom-domain portfolio site.",
      primaryCtaLabel: "Automate your portfolio",
      primaryCtaContext: "Hero - Automate Portfolio",
      socialProof: "Over 850 designers and devs are reclaiming their weekends.",
    },
    features: {
      eyebrow: "Zero Maintenance",
      title: "You do the creative work. We do the admin.",
      subtitle: "Built for creatives who hate dealing with WordPress, Webflow, or manual image uploads.",
      items: [
        {
          icon: "RefreshCw",
          title: "Auto-Sync Integrations",
          description: "Push code to GitHub or publish a shot on Dribbble/Behance, and your portfolio updates instantly.",
        },
        {
          icon: "Layout",
          title: "Designer-Grade Templates",
          description: "Choose from minimalist, typography-driven layouts that put your work front and center.",
        },
        {
          icon: "Globe",
          title: "Custom Domains & SEO",
          description: "Connect your own domain name. We handle the meta tags, sitemaps, and Lighthouse scores automatically.",
        },
        {
          icon: "BarChart3",
          title: "Profile Analytics",
          description: "See exactly which case studies recruiters and potential clients are actually reading.",
        },
      ],
    },
    pricing: {
      eyebrow: "Creator Pricing",
      title: "Cheaper than your current website builder",
      subtitle: "Reserve your spot at our early-bird rates.",
      tiers: [
        {
          id: "hobby",
          name: "Hobby",
          price: "$0",
          billingPeriod: "/mo",
          description: "For students and junior creatives.",
          features: ["1 platform sync", "Standard template", "foliosync.com subdomain"],
          ctaLabel: "Join the waitlist",
        },
        {
          id: "pro",
          name: "Pro Creator",
          price: "$12",
          billingPeriod: "/mo",
          description: "For working freelancers and full-time professionals.",
          features: ["Unlimited platform syncs", "Custom domain support", "Premium layouts", "Analytics dashboard"],
          ctaLabel: "Claim early-bird pricing",
          highlighted: true,
        },
      ],
    },
    waitlist: {
      title: "Secure your beta invite",
      description: "Leave your email to lock in this pricing and get first access to our platform sync engine.",
      successMessage: "You're on the list! Keep an eye on your inbox.",
    },
    nav: {
      links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }],
      ctaLabel: "Get early access",
      ctaContext: "Navbar - Get Early Access",
    },
    footer: {
      tagline: "The portfolio platform that actually maintains itself.",
      columns: [
        { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Company", links: [{ label: "Contact", href: "mailto:tejaskakani.official@gmail.com" }] }
      ],
      copyrightText: `© ${new Date().getFullYear()} FolioSync. All rights reserved.`,
    },
  },

  leansync: {
    meta: {
      siteName: "LeanSync",
      title: "LeanSync — Project management without the enterprise bloat",
      description: "Task management built strictly for teams of 2 to 5. No complex workflows, no custom fields, just instant clarity on who is doing what.",
      url: "https://leansync.example.com",
      ogImage: "/og-image.png",
    },
    theme: {
      colors: {
        primary: "#F59E0B",
        primaryAlt: "#EA580C",
        secondary: "#3B82F6",
        tertiary: "#10B981",
        background: "#FFFAF0",
        surface: "#FFFFFF",
        foreground: "#1C1917",
        muted: "#78716C",
        accentPalette: ["#F59E0B", "#3B82F6", "#10B981", "#8B5CF6", "#EF4444"],
        dark: {
          primary: "#FCD34D",
          primaryAlt: "#F97316",
          secondary: "#60A5FA",
          tertiary: "#34D399",
          background: "#171717",
          surface: "#262626",
          foreground: "#F5F5F5",
          muted: "#A3A3A3",
        },
      },
    },
    posthog: {
      apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_YOUR_PROJECT_API_KEY",
      apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      enabled: true,
    },
    hero: {
      eyebrow: "Early Access Beta",
      headline: "Jira and Asana are built for corporations. We built this for you.",
      highlightText: "built for corporations.",
      subheadline: "LeanSync is a radically simple task manager for teams of 2 to 5 people. Ditch the custom fields and endless dropdowns for a tool that actually stays out of your way.",
      primaryCtaLabel: "Simplify your workflow",
      primaryCtaContext: "Hero - Simplify Workflow",
      socialProof: "Over 300 micro-teams are ditching enterprise bloat.",
    },
    features: {
      eyebrow: "Focus over Features",
      title: "Everything you need. Nothing you don't.",
      subtitle: "We stripped away 90% of the features you never use to give you the fastest task manager on the market.",
      items: [
        {
          icon: "Zap",
          title: "Keyboard-First Entry",
          description: "Hit 'CMD+K', type a task, assign it, and get back to work in under 3 seconds.",
        },
        {
          icon: "LayoutList",
          title: "Zero-Config Sprints",
          description: "No backlog grooming rituals required. Just drag tasks into 'This Week' or 'Next Week'.",
        },
        {
          icon: "MessageSquare",
          title: "Contextual Discussions",
          description: "Keep file uploads and feedback attached directly to the task, not lost in a Slack channel.",
        },
        {
          icon: "Bot",
          title: "Automated Daily Digests",
          description: "A simple, automated morning email showing exactly what everyone is focusing on today.",
        },
      ],
    },
    pricing: {
      eyebrow: "Flat-rate pricing",
      title: "Never pay 'per-seat' again",
      subtitle: "We don't penalize you for collaborating. One flat rate for your whole team.",
      tiers: [
        {
          id: "duo",
          name: "Duo",
          price: "$0",
          billingPeriod: "/mo",
          description: "For two founders hacking in a garage.",
          features: ["2 team members", "Unlimited tasks", "7-day history"],
          ctaLabel: "Join the waitlist",
        },
        {
          id: "micro",
          name: "Micro Team",
          price: "$19",
          billingPeriod: "/mo flat",
          description: "Flat rate. No per-user fees.",
          features: ["Up to 5 team members", "Unlimited history", "File attachments", "Slack integration"],
          ctaLabel: "Claim early-bird pricing",
          highlighted: true,
        },
      ],
    },
    waitlist: {
      title: "Claim your team's workspace",
      description: "We're onboarding beta users slowly to ensure lightning-fast performance. Drop your email to get in.",
      successMessage: "You're on the list! We will reach out shortly.",
    },
    nav: {
      links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }],
      ctaLabel: "Get early access",
      ctaContext: "Navbar - Get Early Access",
    },
    footer: {
      tagline: "Project management for the rest of us.",
      columns: [
        { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Company", links: [{ label: "Contact", href: "mailto:tejaskakani.official@gmail.com" }] },
      ],
      copyrightText: `© ${new Date().getFullYear()} LeanSync. All rights reserved.`,
    },
  },

  a11yguard: {
    meta: {
      siteName: "A11yGuard",
      title: "A11yGuard — Protect your site from accessibility lawsuits",
      description: "Automated WCAG 2.1 scanning and compliance tracking. Meet the 2025 European Accessibility Act requirements without hiring an expensive agency.",
      url: "https://a11yguard.example.com",
      ogImage: "/og-image.png",
    },
    theme: {
      colors: {
        primary: "#059669",
        primaryAlt: "#2563EB",
        secondary: "#0F766E",
        tertiary: "#4338CA",
        background: "#F8FAFC",
        surface: "#FFFFFF",
        foreground: "#0F172A",
        muted: "#64748B",
        accentPalette: ["#059669", "#2563EB", "#0F766E", "#4338CA", "#0284C7"],
        dark: {
          primary: "#34D399",
          primaryAlt: "#60A5FA",
          secondary: "#2DD4BF",
          tertiary: "#818CF8",
          background: "#020617",
          surface: "#0F172A",
          foreground: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
    },
    posthog: {
      apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_YOUR_PROJECT_API_KEY",
      apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      enabled: true,
    },
    hero: {
      eyebrow: "Prepare for 2025 Compliance",
      headline: "Automate your website accessibility audits before it becomes a legal issue",
      highlightText: "becomes a legal issue",
      subheadline: "A11yGuard scans your entire platform for WCAG 2.1 violations and generates prioritized, developer-ready fix-lists. Protect your revenue and serve every customer.",
      primaryCtaLabel: "Start your audit",
      primaryCtaContext: "Hero - Start Audit",
      socialProof: "Trusted by 150+ proactive digital agencies and e-commerce brands.",
    },
    features: {
      eyebrow: "Enterprise-Grade Scanning",
      title: "Compliance made actionable",
      subtitle: "Stop paying $5k for manual agency audits. Get continuous, automated accessibility monitoring.",
      items: [
        {
          icon: "ScanSearch",
          title: "Automated WCAG Scanning",
          description: "Detects contrast errors, missing ARIA labels, keyboard trap issues, and screen-reader blockers instantly.",
        },
        {
          icon: "FileCheck",
          title: "Proof-of-Effort Reporting",
          description: "Generate time-stamped compliance reports to show stakeholders and auditors your ongoing remediation efforts.",
        },
        {
          icon: "Eye",
          title: "Visual Bug Locator",
          description: "We screenshot the exact DOM element causing the violation so your developers don't have to hunt for it.",
        },
        {
          icon: "Bell",
          title: "Regression Monitoring",
          description: "Set up weekly scheduled scans. If a new code push breaks accessibility, you'll be alerted immediately.",
        },
      ],
    },
    pricing: {
      eyebrow: "Compliance Pricing",
      title: "Fraction of the cost of a manual audit",
      subtitle: "Lock in beta pricing and secure your compliance roadmap today.",
      tiers: [
        {
          id: "starter",
          name: "Single Site",
          price: "$49",
          billingPeriod: "/mo",
          description: "For individual businesses protecting their storefront.",
          features: ["1 domain up to 500 pages", "Weekly automated scans", "WCAG 2.1 checks", "PDF Reports"],
          ctaLabel: "Join the waitlist",
        },
        {
          id: "pro",
          name: "Pro Monitor",
          price: "$99",
          billingPeriod: "/mo",
          description: "For businesses updating their site constantly.",
          features: ["3 domains up to 5,000 pages", "Daily automated scans", "Visual bug locators", "Slack alerts"],
          ctaLabel: "Claim early-bird pricing",
          highlighted: true,
        },
      ],
    },
    waitlist: {
      title: "Secure your compliance engine",
      description: "We are onboarding our final batch of private beta users. Drop your email to reserve your spot.",
      successMessage: "You're on the list! We'll be in touch soon.",
    },
    nav: {
      links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }],
      ctaLabel: "Get early access",
      ctaContext: "Navbar - Get Early Access",
    },
    footer: {
      tagline: "Automated accessibility intelligence for modern web teams.",
      columns: [
        { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Company", links: [{ label: "Contact", href: "mailto:tejaskakani.official@gmail.com" }] },
      ],
      copyrightText: `© ${new Date().getFullYear()} A11yGuard. All rights reserved.`,
    },
  },

  creatorbase: {
    meta: {
      siteName: "CreatorBase",
      title: "CreatorBase — Your entire content engine in one tab",
      description: "Stop jumping between six different apps to publish one post. Generate graphics, write copy, and schedule social media from one unified workspace.",
      url: "https://creatorbase.example.com",
      ogImage: "/og-image.png",
    },
    theme: {
      colors: {
        primary: "#E11D48",
        primaryAlt: "#EA580C",
        secondary: "#8B5CF6",
        tertiary: "#14B8A6",
        background: "#FFFBFB",
        surface: "#FFFFFF",
        foreground: "#271C19",
        muted: "#78716C",
        accentPalette: ["#E11D48", "#EA580C", "#8B5CF6", "#14B8A6", "#F59E0B"],
        dark: {
          primary: "#FB7185",
          primaryAlt: "#F97316",
          secondary: "#A78BFA",
          tertiary: "#2DD4BF",
          background: "#1C1917",
          surface: "#292524",
          foreground: "#FAFAF9",
          muted: "#A8A29E",
        },
      },
    },
    posthog: {
      apiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY ?? "phc_YOUR_PROJECT_API_KEY",
      apiHost: process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      enabled: true,
    },
    hero: {
      eyebrow: "Early Access Beta",
      headline: "Stop paying for five different content tools just to publish a LinkedIn post",
      highlightText: "five different content tools",
      subheadline: "CreatorBase unifies your design templates, AI writing assistant, editorial calendar, and auto-publishing API into one seamless marketing engine.",
      primaryCtaLabel: "Consolidate your stack",
      primaryCtaContext: "Hero - Consolidate Stack",
      socialProof: "Join 500+ lean marketers saving 10 hours a week.",
    },
    features: {
      eyebrow: "The Unified Workflow",
      title: "From idea to published in 3 minutes",
      subtitle: "Built for solo operators who need to maintain a massive content presence without hiring a social media manager.",
      items: [
        {
          icon: "Image",
          title: "Code-Driven Templates",
          description: "Generate consistent social graphics, podcast covers, and open-graph images without opening a design tool.",
        },
        {
          icon: "CalendarDays",
          title: "Unified Editorial Calendar",
          description: "Plan your blogs, newsletters, and social posts on one drag-and-drop timeline.",
        },
        {
          icon: "Send",
          title: "Direct Auto-Publishing",
          description: "Connected natively to LinkedIn, X (Twitter), and Instagram APIs. Schedule it once, and we handle the rest.",
        },
        {
          icon: "BarChart",
          title: "Cross-Platform Analytics",
          description: "Stop logging into three different platforms to check your engagement metrics. See it all in one dashboard.",
        },
      ],
    },
    pricing: {
      eyebrow: "Early-bird pricing",
      title: "Replace $100/mo of disjointed tools",
      subtitle: "Reserve your beta access and lock in these prices forever.",
      tiers: [
        {
          id: "solo",
          name: "Creator",
          price: "$19",
          billingPeriod: "/mo",
          description: "For indie hackers building their personal brand.",
          features: ["3 connected social profiles", "50 graphics / month", "Unified calendar"],
          ctaLabel: "Join the waitlist",
        },
        {
          id: "growth",
          name: "Growth",
          price: "$39",
          billingPeriod: "/mo",
          description: "For lean startups driving heavy inbound traffic.",
          features: ["10 connected social profiles", "Unlimited graphics", "Advanced analytics", "AI writing assistant"],
          ctaLabel: "Claim early-bird pricing",
          highlighted: true,
        },
      ],
    },
    waitlist: {
      title: "Consolidate your workflow",
      description: "Leave your email to claim your early-bird spot and stop paying for bloated marketing software.",
      successMessage: "You're on the list! Keep an eye on your inbox for the beta invite.",
    },
    nav: {
      links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }],
      ctaLabel: "Get early access",
      ctaContext: "Navbar - Get Early Access",
    },
    footer: {
      tagline: "The all-in-one content engine for lean creators.",
      columns: [
        { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
        { title: "Company", links: [{ label: "Contact", href: "mailto:tejaskakani.official@gmail.com" }] },
      ],
      copyrightText: `© ${new Date().getFullYear()} CreatorBase. All rights reserved.`,
    },
  }
};

// Check the environment variable (default to 'shipready' if not set)
const currentAppId = process.env.NEXT_PUBLIC_SAAS_ID!;

// Export the specific configuration for the active build
export const saasConfig: SaasConfig = configMap[currentAppId];