// /src/app/icon.tsx
import { ImageResponse } from "next/og";
import { saasConfig } from "@/config/saasConfig";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const currentId = process.env.NEXT_PUBLIC_SAAS_ID || "shipready";
  const { theme } = saasConfig;

  // Define unique geometric SVGs for each brand to render inside the favicon
  const getIconGlyph = (id: string) => {
    switch (id) {
      case "shipready": // Code bracket </>
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case "foliosync": // Sync loops
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
          </svg>
        );
      case "leansync": // Stacked lean bars
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="16" y2="12" />
            <line x1="4" y1="18" x2="12" y2="18" />
          </svg>
        );
      case "a11yguard": // Shield
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        );
      case "creatorbase": // Play/Content Accent
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        );
      default:
        return null;
    }
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primaryAlt})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
        }}
      >
        {getIconGlyph(currentId)}
      </div>
    ),
    { ...size }
  );
}