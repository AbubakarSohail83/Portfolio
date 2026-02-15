"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface WireframeTorusProps {
  radius?: number;
  tube?: number;
  color?: string;
  opacity?: number;
}

export function WireframeTorus({
  radius = 2.2,
  tube = 0.4,
  color = "#38bdf8",
  opacity = 0.35,
}: WireframeTorusProps) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime * 0.08;
    mesh.current.rotation.x = t;
    mesh.current.rotation.y = t * 1.2;
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[radius, tube, 16, 48]} />
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
