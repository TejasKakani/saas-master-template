// /src/lib/hexToRgb.ts

/** Converts "#5B4FE9" -> "91 79 233" — the space-separated channel format
 *  Tailwind needs for `rgb(var(--x) / <alpha-value>)` color tokens. */
export function hexToRgbChannels(hex: string): string {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r} ${g} ${b}`;
}

/** Converts "#5B4FE9" + 0.12 -> "rgba(91, 79, 233, 0.12)". Used for one-off
 *  inline styles (e.g. feature icon chips) that fall outside the theme's
 *  fixed CSS variables. */
export function hexToRgba(hex: string, alpha: number): string {
  const sanitized = hex.replace("#", "");
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}