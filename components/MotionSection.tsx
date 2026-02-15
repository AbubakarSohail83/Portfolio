"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08 * i,
    },
  }),
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 48, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },
};

const itemScale: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 22,
    },
  },
};

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Stagger direction: "up" (slide up + blur) or "scale" (pop in) */
  variant?: "up" | "scale";
  /** Delay before starting (seconds) when in view */
  delay?: number;
}

export function MotionSection({
  children,
  className,
  style,
  variant = "up",
  delay = 0,
}: MotionSectionProps) {
  const { ref, isVisible } = useInView({ rootMargin: "0px 0px -80px 0px", threshold: 0.06 });
  const item = variant === "scale" ? itemScale : itemUp;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      custom={delay}
    >
      <motion.div variants={item}>{children}</motion.div>
    </motion.div>
  );
}

/** For stagger children: wrap parent with this and use MotionItem on each child */
export function MotionStaggerContainer({
  children,
  className,
  style,
  variant = "up",
  staggerDelay = 0.1,
  inViewDelay = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: "up" | "scale";
  staggerDelay?: number;
  inViewDelay?: number;
}) {
  const { ref, isVisible } = useInView({ rootMargin: "0px 0px -60px 0px", threshold: 0.08 });
  const item = variant === "scale" ? itemScale : itemUp;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: inViewDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  variant = "up",
  className,
}: {
  children: ReactNode;
  variant?: "up" | "scale";
  className?: string;
}) {
  const item = variant === "scale" ? itemScale : itemUp;
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  );
}
