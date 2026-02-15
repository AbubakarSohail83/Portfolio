/**
 * Mirrors CSS theme (--gradient-start, --gradient-mid, --gradient-end).
 * Used by Three.js / WebGL where CSS variables aren't available.
 * Dark mode first (default theme).
 */
export const themeColors = {
  dark: {
    primary: "#38bdf8",
    secondary: "#22d3ee",
    tertiary: "#06b6d4",
  },
  light: {
    primary: "#6366f1",
    secondary: "#8b5cf6",
    tertiary: "#06b6d4",
  },
} as const;
