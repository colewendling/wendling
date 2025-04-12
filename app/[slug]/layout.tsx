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
      <div className="min-h-screen pl-0 md:pl-[20%]">{children}</div>
    </GradientBackground>
  );
}
