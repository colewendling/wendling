import { projects } from "@/data/projects";
import { ProjectContent } from "@/components/ProjectContent";
import Image from "next/image";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project)
    return (
      <div className="text-center py-20 text-white">Project not found</div>
    );

  return (
    <div className="container mx-auto py-10 px-4 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>

      {/* Thumbnail or main image */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        width={1200}
        height={600}
        className="rounded-lg shadow-lg mb-8"
      />

      {/* Project Links */}
      <div className="flex gap-4 mb-8">
        <a
          href={project.liveUrl}
          target="_blank"
          className="underline hover:text-gray-300"
        >
          Live Site
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          className="underline hover:text-gray-300"
        >
          GitHub
        </a>
        {project.wikiUrl && (
          <a
            href={project.wikiUrl}
            target="_blank"
            className="underline hover:text-gray-300"
          >
            Wiki
          </a>
        )}
      </div>

      {/* Content Blocks */}
      <ProjectContent contentBlocks={project.contentBlocks} />
    </div>
  );
}
