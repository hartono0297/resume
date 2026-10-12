"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isHidden, setIsHidden] = useState(false);

  // Only hide content that starts below the fold, so anything visible on load never flickers.
  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion || !window.innerHeight) return;
    if (element.getBoundingClientRect().top < window.innerHeight) return;

    animate(element, { opacity: 0, y: 18 }, { duration: 0 });
    setIsHidden(true);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const element = ref.current;
    if (!element || !isHidden || !isInView) return;

    animate(element, { opacity: 1, y: 0 }, { duration: 0.5, ease: "easeOut", delay });
  }, [isHidden, isInView, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
