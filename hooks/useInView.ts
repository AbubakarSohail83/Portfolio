"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export function useInView(options: UseInViewOptions = {}) {
  const {
    rootMargin = "0px 0px -80px 0px",
    threshold = 0.1,
    triggerOnce = true,
  } = options;
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold, triggerOnce]);

  return { ref, isVisible };
}
