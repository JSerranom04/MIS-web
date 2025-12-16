"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: ReactNode;
  delayMs?: number;
}

export function FadeInSection({ children, delayMs = 0 }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
   const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Once the block has entered the viewport at least once,
        // keep it "visible" so we only rely on scroll for the lag effect.
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Lightweight scroll-based "lag" effect
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      // -1 (top) .. 0 (center) .. 1 (bottom)
      const center = rect.top + rect.height / 2;
      const normalized = (center / viewportHeight - 0.5) * 2;
      const clamped = Math.max(-1, Math.min(1, normalized));
      setScrollOffset(clamped);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stronger parallax-style lag so the effect is clearly noticeable
  const baseTranslate = visible ? 0 : 40;
  const lagTranslate = -scrollOffset * 40;
  const translateY = baseTranslate + lagTranslate;
  const scale = visible ? 1 : 0.96;

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ease-out ${
        visible
          ? "opacity-100"
          : "opacity-0"
      }`}
      style={{
        transitionDelay: `${delayMs}ms`,
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
      }}
    >
      {children}
    </div>
  );
}


