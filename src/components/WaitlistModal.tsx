// /src/components/WaitlistModal.tsx
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { usePostHog } from "posthog-js/react";
import { saasConfig } from "@/config/saasConfig";
import { submitLead } from "@/app/actions/submitLead";

interface WaitlistContextValue {
  isOpen: boolean;
  tierContext: string;
  openModal: (context: string) => void;
  closeModal: () => void;
}

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function useWaitlist(): WaitlistContextValue {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error("useWaitlist must be used within a WaitlistProvider");
  }
  return ctx;
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [tierContext, setTierContext] = useState("");

  const openModal = useCallback((context: string) => {
    setTierContext(context);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <WaitlistContext.Provider value={{ isOpen, tierContext, openModal, closeModal }}>
      {children}
    </WaitlistContext.Provider>
  );
}

type SubmissionState = "idle" | "submitting" | "success" | "error";

export default function WaitlistModal() {
  const { isOpen, tierContext, closeModal } = useWaitlist();
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const posthog = usePostHog();

  if (!isOpen) return null;

  const resetAndClose = () => {
    closeModal();
    setTimeout(() => {
      setEmail("");
      setHoneypot("");
      setStatus("idle");
      setErrorMessage("");
    }, 200);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const result = await submitLead({
      email,
      tier: tierContext,
      timestamp: new Date().toISOString(),
      honeypot,
    });

    if (result.success) {
      setStatus("success");
      posthog?.capture("waitlist_lead_captured", { tier: tierContext, email });
    } else {
      setStatus("error");
      setErrorMessage(result.message);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="waitlist-modal-title"
      onClick={resetAndClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-4 backdrop-blur-sm transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-surface w-full max-w-md rounded-2xl p-6 shadow-2xl transition-all sm:p-8"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="gradient-text text-sm font-semibold">{tierContext}</p>
            <h3
              id="waitlist-modal-title"
              className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl"
            >
              {saasConfig.waitlist.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={resetAndClose}
            aria-label="Close dialog"
            className="shrink-0 rounded-full p-1.5 text-muted transition-colors hover:bg-foreground/5 hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <CheckCircle2 className="h-10 w-10 text-secondary" />
            <p className="text-foreground">{saasConfig.waitlist.successMessage}</p>
            <button
              type="button"
              onClick={resetAndClose}
              className="mt-2 text-sm font-medium text-primary hover:underline"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-muted">
              {saasConfig.waitlist.description}
            </p>

            <div>
              <label htmlFor="waitlist-email" className="sr-only">
                Email address
              </label>
              <input
                id="waitlist-email"
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-lg border border-foreground/10 bg-surface px-4 py-3 text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>

            {/* Honeypot — invisible to real users, catches naive bots */}
            <input
              type="text"
              name="company"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
            />

            {status === "error" && (
              <p className="text-sm text-red-500" role="alert">
                {errorMessage || "Something went wrong. Please try again."}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary-alt px-4 py-3 font-medium text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "submitting" ? "Submitting..." : "Claim my spot"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}