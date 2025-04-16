// components/HomeBackground.tsx

"use client";

import { usePathname } from "next/navigation";
import AnimatedBlurBackground from "./AnimatedBlurBackground";

export default function HomeBackground() {
  const pathname = usePathname();
  return pathname === "/" ? <AnimatedBlurBackground /> : null;
}
