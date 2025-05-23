// app/[slug]/page.tsx

import { projects } from "@/data/projects";
import { ProjectContent } from "@/components/ProjectContent";
import { ProjectDetails } from "@/components/ProjectDetails";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return (
      <div className="text-center py-20 text-white">Project not found</div>
    );

  const {
    title,
    header,
    stats,
    links,
    linkColor,
    statColor,
    textTheme,
    contentBlocks,
  } = project;

  return (
    <div className="container mx-auto py-10 px-4 text-white">
      <div className="px-4 md:px-24">
        <ProjectDetails
          {...{ title, header, stats, links, linkColor, statColor }}
        />
        <ProjectContent contentBlocks={contentBlocks} textTheme={textTheme} statColor={statColor} />
      </div>
    </div>
  );
}
