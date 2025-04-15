// app/[slug]/layout.tsx

import { GradientBackground } from "@/components/GradientBackground";
import { projects } from "@/data/projects";

export default function ProjectLayout({
  params,
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const project = projects.find((p) => p.slug === params.slug);

  return (
    <GradientBackground
      colors={project?.gradientColors || ["#111", "#222", "#333"]}
    >
      <div className="min-h-screen px-6 md:pl-[20%] md:px-8">{children}</div>
    </GradientBackground>
  );
}
