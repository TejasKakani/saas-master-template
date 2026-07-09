// /src/app/actions/submitLead.ts
"use server";

import { z } from "zod";
import { headers } from "next/headers";
import clientPromise from "@/lib/mongodb";
import { checkRateLimit } from "@/lib/rateLimit";

const leadSchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email address."),
  tier: z.string().min(1, "Missing plan context for this lead."),
  timestamp: z.string().datetime({ message: "Invalid timestamp." }),
  // Honeypot: real users never fill this in. Must arrive empty.
  honeypot: z.string().max(0).optional().default(""),
});

export type LeadPayload = z.input<typeof leadSchema>;

export interface SubmitLeadResult {
  success: boolean;
  message: string;
}

export async function submitLead(
  payload: LeadPayload
): Promise<SubmitLeadResult> {
  const parsed = leadSchema.safeParse(payload);

  if (!parsed.success) {
    // Bot caught by the honeypot: pretend success so it doesn't learn to
    // leave the field empty next time. Everyone else gets the real error.
    const isHoneypotTriggered = parsed.error.issues.some(
      (issue) => issue.path[0] === "honeypot"
    );
    if (isHoneypotTriggered) {
      return { success: true, message: "You're on the list!" };
    }
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid submission.",
    };
  }

  const { email, tier, timestamp } = parsed.data;

  // Rate limit by IP first (covers repeated submissions from one source
  // across different emails), then by email (covers one determined bot
  // rotating IPs but reusing an address).
  const ip = (await headers()).get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const ipLimit = checkRateLimit(`ip:${ip}`);
  if (!ipLimit.allowed) {
    return {
      success: false,
      message: `Too many attempts. Please try again in ${ipLimit.retryAfterSeconds}s.`,
    };
  }

  const emailLimit = checkRateLimit(`email:${email}`);
  if (!emailLimit.allowed) {
    return {
      success: false,
      message: `Too many attempts. Please try again in ${emailLimit.retryAfterSeconds}s.`,
    };
  }

  try {
    if (clientPromise) {
      const client = await clientPromise;
      const db = client.db("saas_validation");
      await db.collection("leads").insertOne({
        email,
        tier,
        timestamp,
        source: "landing_page",
        ip,
      });
    } else {
      // No MONGODB_URI configured yet — log so the template still works.
      console.log("[submitLead] New lead captured (no DB configured):", {
        email,
        tier,
        timestamp,
      });
    }

    return {
      success: true,
      message: "You're on the list! We'll be in touch.",
    };
  } catch (error) {
    console.error("[submitLead] Failed to save lead:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again in a moment.",
    };
  }
}