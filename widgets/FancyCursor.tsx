"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SMOOTH = 0.12;

export function FancyCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);
  const pos = useRef({ x: 0, y: 0 });
  const render = useRef({ x: 0, y: 0 });
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  const hasMoved = useRef(false);
  const updatePosition = useCallback((e: MouseEvent) => {
    pos.current = { x: e.clientX, y: e.clientY };
    if (!hasMoved.current) {
      hasMoved.current = true;
      render.current = { x: e.clientX, y: e.clientY };
    }
    if (!visible) setVisible(true);
  }, [visible]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target) return;
    const interactive = target.closest("a, button, [role='button'], input, select, textarea, [data-cursor-hover]");
    setHover(!!interactive);
  }, []);

  const handleMouseOut = useCallback(() => setHover(false), []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (prefersReduced || !hasPointer) {
      return;
    }
    setActive(true);
    document.body.classList.add("fancy-cursor-active");

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", handleMouseOver, true);
    window.addEventListener("mouseout", handleMouseOut, true);

    const tick = () => {
      const dx = pos.current.x - render.current.x;
      const dy = pos.current.y - render.current.y;
      render.current.x += dx * SMOOTH;
      render.current.y += dy * SMOOTH;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${render.current.x}px, ${render.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${render.current.x}px, ${render.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.body.classList.remove("fancy-cursor-active");
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mouseover", handleMouseOver, true);
      window.removeEventListener("mouseout", handleMouseOut, true);
      cancelAnimationFrame(raf.current);
    };
  }, [updatePosition, handleMouseOver, handleMouseOut]);

  if (!active) return null;

  return (
    <div
      className="fancy-cursor"
      aria-hidden
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        ref={dotRef}
        className="fancy-cursor-dot"
        style={{
          left: 0,
          top: 0,
          transform: `translate(${render.current.x}px, ${render.current.y}px)`,
        }}
      />
      <div
        ref={ringRef}
        className="fancy-cursor-ring"
        data-hover={hover}
        style={{
          left: 0,
          top: 0,
          transform: `translate(${render.current.x}px, ${render.current.y}px)`,
        }}
      />
    </div>
  );
}
