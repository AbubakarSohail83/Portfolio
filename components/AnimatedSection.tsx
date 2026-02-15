"use client";

import { useInView } from "@/hooks/useInView";
import { type CSSProperties, type ReactNode, Children } from "react";
import { motion, type Variants } from "framer-motion";
import clsx from "clsx";

const revealUp: Variants = {
  hidden: { opacity: 0, y: 56, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 0.8 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0.1) => ({
    opacity: 1,
    transition: { staggerChildren: delay, delayChildren: 0.05 },
  }),
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 110, damping: 18 },
  },
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  mode?: "single" | "stagger";
  blur?: boolean;
}

export function AnimatedSection({
  children,
  className,
  style,
  mode = "single",
  blur = false,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useInView({ rootMargin: "0px 0px -50px 0px", threshold: 0.06 });

  if (mode === "single") {
    return (
      <motion.div
        ref={ref}
        className={clsx(className)}
        style={style}
        variants={revealUp}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={clsx(className)}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      custom={0.1}
    >
      {Children.map(children, (child) => (
        <motion.div variants={staggerItem}>{child}</motion.div>
      ))}
    </motion.div>
  );
}

/** Wrap each direct child that should stagger; use with mode="stagger" on parent */
export function AnimatedSectionItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
