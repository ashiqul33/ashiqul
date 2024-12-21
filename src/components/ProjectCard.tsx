import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { memo } from "react";

export type projectType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  points?: string[];
};

export const ProjectCard = memo(({ project, index }: { project: projectType; index: number }) => (
  <Card className="flex flex-col border-gray-700 bg-gray-800 md:flex-row">
    <CardContent
      className={`order-first flex flex-1 rounded-t-xl bg-gray-600 p-0 sm:rounded-none ${(index & 1) === 0 ? "md:order-first md:rounded-s-xl" : "md:order-last md:rounded-e-xl"}`}
    >
      <Image src={project.image} alt={project.title} width={400} height={0} className="w-full object-contain p-2 md:p-8" />
    </CardContent>
    <CardContent className="flex-1 p-6">
      <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
      <p className="mb-6 text-gray-300" dangerouslySetInnerHTML={{ __html: project.description }}></p>
      {project?.points && project?.points?.length > 0 && (
        <ul className="mb-6 list-disc space-y-1 pl-4">
          {project.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300">
            {tag}
          </Badge>
        ))}
      </div>
      {project.link && (
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 transition-colors hover:text-blue-600">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      )}
    </CardContent>
  </Card>
));

ProjectCard.displayName = "ProjectCard";
