// app/[slug]/page.tsx

import { projects } from "@/data/projects";
import { ProjectContent } from "@/components/ProjectContent";
import { ProjectCard } from "@/components/ProjectCard";


export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return (
      <div className="text-center py-20 text-white">Project not found</div>
    );

  const { title, header, stats, links, linkColor, statColor, contentBlocks } = project;

  return (
    <div className="container mx-auto py-10 px-4 text-white">
      <div className="px-24">
        <ProjectCard {...{ title, header, stats, links, linkColor, statColor }} />
        <ProjectContent contentBlocks={contentBlocks} />
      </div>
    </div>
  );
}
