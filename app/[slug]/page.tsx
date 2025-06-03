// app/[slug]/page.tsx

import { projects } from "@/data/projects";
import { ProjectContent } from "@/components/ProjectContent";
import { ProjectDetails } from "@/components/ProjectDetails";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "resume") {
    return {
      title: "Cole Wendling | Resume",
      description: "Download the PDF resume of Cole Wendling, Fullstack Software Engineer.",
      openGraph: {
        title: "Cole Wendling | Resume",
        description: "Download the PDF resume of Cole Wendling, Fullstack Software Engineer.",
        url: "https://wendling.io/resume",
        images: [
          {
            url: "https://wendling.io/meta/social-share.jpg",
            alt: "Cole Wendling Resume",
          },
        ],
        siteName: "Cole Wendling",
        type: "website",
      },
      twitter: {
        title: "Cole Wendling | Resume",
        description: "Download the PDF resume of Cole Wendling, Fullstack Software Engineer.",
        images: ["https://wendling.io/meta/social-share.jpg"],
        card: "summary_large_image",
      },
      alternates: { canonical: "https://wendling.io/resume" },
    };
  }
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Cole Wendling | Project Not Found",
      description: "No project found for this slug.",
    };
  }
  const title = `Cole Wendling | ${project.title}`;
  const description = project.description;
  const url = `https://wendling.io/${slug}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Cole Wendling",
      images: [
        {
          url: `https://wendling.io${project.thumbnail}`,
          alt: project.title,
        },
      ],
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [`https://wendling.io${project.thumbnail}`],
      card: "summary_large_image",
    },
    alternates: {
      canonical: url,
    },
  };
}

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
        <ProjectContent
          contentBlocks={contentBlocks}
          textTheme={textTheme}
          statColor={statColor}
        />
      </div>
    </div>
  );
}
