"use client";

import { motion } from "framer-motion";

interface GlobeProps {
  className?: string;
  size?: number;
  subtle?: boolean;
}

/** Animated globe (sphere + wireframe) for background/foreground */
export function Globe({ className = "", size = 280, subtle = true }: GlobeProps) {
  const r = size / 2;
  const cx = r;
  const cy = r;
  const stroke = subtle ? "rgba(148, 163, 184, 0.35)" : "var(--text-tertiary)";
  const fillOpacity = subtle ? 0.03 : 0.06;

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size, position: "relative" }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
    >
      <motion.svg
        viewBox={`0 0 ${size} ${size}`}
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="globe-shade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity={fillOpacity} />
            <stop offset="100%" stopColor="var(--accent-tertiary)" stopOpacity={fillOpacity * 0.5} />
          </linearGradient>
        </defs>
        {/* Sphere fill */}
        <circle cx={cx} cy={cy} r={r * 0.95} fill="url(#globe-shade)" />
        {/* Latitude lines */}
        {[0.2, 0.4, 0.6, 0.8].map((y, i) => {
          const yPos = size * y;
          const visibleRadius = (r * 0.95) * Math.sin(Math.acos((yPos - cy) / (r * 0.95)));
          if (visibleRadius <= 0) return null;
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={yPos}
              rx={visibleRadius}
              ry={visibleRadius * 0.35}
              stroke={stroke}
              fill="none"
              strokeWidth={1}
            />
          );
        })}
        {/* Longitude lines (vertical ellipses) */}
        {[0.15, 0.35, 0.5, 0.65, 0.85].map((x, i) => {
          const angle = (x - 0.5) * Math.PI * 0.85;
          const scaleX = Math.cos(angle);
          if (Math.abs(scaleX) < 0.15) return null;
          return (
            <ellipse
              key={`lng-${i}`}
              cx={cx}
              cy={cy}
              rx={r * 0.95 * Math.abs(scaleX)}
              ry={r * 0.95 * 0.4}
              stroke={stroke}
              fill="none"
              strokeWidth={1}
            />
          );
        })}
      </motion.svg>
    </motion.div>
  );
}
