"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { ParticleField } from "./ParticleField";
import { WireframeTorus } from "./WireframeTorus";
import { WireframeSphere } from "./WireframeSphere";
import { themeColors } from "@/utils/themeColors";

export type Scene3DVariant = "hero" | "particles" | "wireframe" | "about" | "experience" | "projects" | "skills" | "contact";

interface Scene3DProps {
  variant: Scene3DVariant;
  className?: string;
}

const c = themeColors.dark;

function SceneContent({ variant }: { variant: Scene3DVariant }) {
  if (variant === "hero") {
    return (
      <>
        <ParticleField count={900} radius={12} color={c.primary} size={0.02} opacity={0.5} />
        <WireframeTorus radius={2.2} tube={0.3} color={c.primary} opacity={0.4} />
      </>
    );
  }
  if (variant === "about") {
    return <ParticleField count={400} radius={9} color={c.primary} size={0.016} opacity={0.35} />;
  }
  if (variant === "experience") {
    return <ParticleField count={380} radius={8} color={c.secondary} size={0.016} opacity={0.35} />;
  }
  if (variant === "projects") {
    return <ParticleField count={400} radius={8} color={c.tertiary} size={0.017} opacity={0.35} />;
  }
  if (variant === "skills") {
    return <ParticleField count={380} radius={8} color={c.primary} size={0.016} opacity={0.35} />;
  }
  if (variant === "contact") {
    return <ParticleField count={350} radius={7} color={c.secondary} size={0.018} opacity={0.35} />;
  }
  if (variant === "particles") {
    return <ParticleField count={600} radius={10} color={c.primary} size={0.02} opacity={0.4} />;
  }
  if (variant === "wireframe") {
    return (
      <>
        <WireframeTorus radius={2.2} tube={0.4} color={c.secondary} opacity={0.28} />
        <WireframeSphere radius={2.5} color={c.tertiary} opacity={0.18} />
      </>
    );
  }
  return null;
}

export function Scene3D({ variant, className = "" }: Scene3DProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      <Scene3DCanvas variant={variant} />
    </div>
  );
}

/** Canvas-only part: used inside a stable wrapper to avoid dual-render flash. */
export function Scene3DCanvas({ variant }: { variant: Scene3DVariant }) {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      className="absolute inset-0 transition-opacity duration-300 ease-out"
      style={{ opacity: shown ? 1 : 0 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.25]}
        gl={{ alpha: true, antialias: true, powerPreference: "low-power" }}
      >
        <color attach="background" args={["transparent"]} />
        <SceneContent variant={variant} />
      </Canvas>
    </div>
  );
}

export default Scene3D;
