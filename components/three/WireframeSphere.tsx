"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WireframeSphereProps {
  radius?: number;
  color?: string;
  opacity?: number;
}

export function WireframeSphere({
  radius = 3,
  color = "#22d3ee",
  opacity = 0.25,
}: WireframeSphereProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * 0.1;
    mesh.current.rotation.y = t;
    mesh.current.rotation.x = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[radius, 2]} />
      <meshBasicMaterial
        color={color}
        wireframe
        transparent
        opacity={opacity}
        depthWrite={false}
      />
    </mesh>
  );
}
