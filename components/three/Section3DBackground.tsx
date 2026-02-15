"use client";

import dynamic from "next/dynamic";
import type { Scene3DVariant } from "./Scene3D";

const Scene3DCanvas = dynamic(
  () => import("./Scene3D").then((m) => ({ default: m.Scene3DCanvas })),
  { ssr: false }
);

interface Section3DBackgroundProps {
  variant: Scene3DVariant;
  className?: string;
}

/**
 * Renders a stable wrapper from first paint, then the Three.js canvas loads inside.
 * Avoids "dual render" (old UI then 3D) by keeping the wrapper in the DOM always.
 */
export function Section3DBackground({ variant, className }: Section3DBackgroundProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
      aria-hidden
    >
      <Scene3DCanvas variant={variant} />
    </div>
  );
}
