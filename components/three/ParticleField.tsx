"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ParticleFieldProps {
  count?: number;
  radius?: number;
  color?: string;
  size?: number;
  opacity?: number;
}

export function ParticleField({
  count = 1200,
  radius = 12,
  color = "#38bdf8",
  size = 0.02,
  opacity = 0.6,
}: ParticleFieldProps) {
  const points = useRef<THREE.Points>(null);
  const [positions, speeds] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = radius * (0.4 + Math.random() * 0.6);
      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
      speeds[i] = 0.2 + Math.random() * 0.4;
    }
    return [positions, speeds];
  }, [count, radius]);

  useFrame((state) => {
    if (!points.current) return;
    const pos = points.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const s = speeds[i];
      pos[i3] += Math.sin(time * s) * 0.004;
      pos[i3 + 1] += Math.cos(time * s * 0.7) * 0.003;
      pos[i3 + 2] += Math.sin(time * s * 0.5) * 0.004;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
