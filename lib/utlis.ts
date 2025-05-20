// lib/utils.ts

import { useRef, useState, useEffect } from 'react';

/**
 * Hook that observes when an element enters the viewport.
 * @param threshold Intersection ratio threshold (default 0.1)
 * @returns { ref, isVisible }
 */
export function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
