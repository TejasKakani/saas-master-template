// /src/components/CTAButton.tsx
"use client";

import type { ReactNode } from "react";
import { useWaitlist } from "@/components/WaitlistModal";

interface CTAButtonProps {
  /** Passed to the modal so it knows exactly which offer the user clicked. */
  context: string;
  children: ReactNode;
  className?: string;
}

export default function CTAButton({
  context,
  children,
  className = "",
}: CTAButtonProps) {
  const { openModal } = useWaitlist();

  return (
    <button
      type="button"
      onClick={() => openModal(context)}
      // PostHog autocapture picks up data-ph-capture-attribute-* automatically,
      // so every click event arrives already tagged with which CTA was pressed.
      data-ph-capture-attribute-cta-context={context}
      className={className}
    >
      {children}
    </button>
  );
}