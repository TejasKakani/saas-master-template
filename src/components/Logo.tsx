// /src/components/Logo.tsx
import React from "react";
import { saasConfig } from "@/config/saasConfig";
import { Terminal, RefreshCw, Kanban, ShieldCheck, Component } from "lucide-react";

// Mapping Lucide icons to look exactly like the dashboard spec
const logoMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shipready: Terminal,
  foliosync: RefreshCw,
  leansync: Kanban,
  a11yguard: ShieldCheck,
  creatorbase: Component,
};

export default function Logo() {
  const currentId = process.env.NEXT_PUBLIC_SAAS_ID || "shipready";
  const { meta } = saasConfig;
  
  // Select the matching Lucide icon based on the current active SaaS project
  const IconComponent = logoMap[currentId] || Terminal;

  return (
    <div className="flex items-center gap-2.5 font-bold text-xl tracking-tight text-foreground">
      <div className="flex h-9 width-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primaryAlt p-2 text-white shadow-sm">
        <IconComponent className="h-5 width-5 stroke-[2.5]" />
      </div>
      <span>{meta.siteName}</span>
    </div>
  );
}