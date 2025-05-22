// app/[slug]/layout.tsx
import { GradientBackground } from "@/components/GradientBackground";
import { projects } from "@/data/projects";
import Resume from "@/components/Resume";
import type { ReactNode } from "react";

export default async function ProjectLayout({
  params,
  children,
}: {
  params: Promise<{ slug: string }>;
  children: ReactNode;
}) {
  const { slug } = await params;

  if (slug === "resume") {
    return (
      <GradientBackground
        colors={[
          "rgba(73,73,73,1)",
          "rgba(150,82,27,1)",
          "rgba(62,59,52,0.98)",
        ]}
      >
        <div className="min-h-screen md:pl-[20%]">
          <Resume />
        </div>
      </GradientBackground>
    );
  }
  const project = projects.find((p) => p.slug === slug);
  return (
    <GradientBackground
      colors={project?.gradientColors || ["#111", "#222", "#333"]}
    >
      <div className="min-h-screen px-6 md:pl-[20%] md:px-8">{children}</div>
    </GradientBackground>
  );
}
