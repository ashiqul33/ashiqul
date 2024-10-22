import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export type projectType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  points?: string[];
};

export const ProjectCard = ({ project, index }: { project: projectType; index: number }) => (
  <Card className="bg-gray-800 border-gray-700 flex flex-col md:flex-row">
    <CardContent className={`bg-gray-600 p-0 flex-1 ${(index & 1) === 0 ? "order-first rounded-s-xl" : "order-last rounded-e-xl"}`}>
      <Image src={project.image} alt={project.title} width={400} height={0} className="w-full p-8 object-cover" />
    </CardContent>
    <CardContent className="p-6 flex-1">
      <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: project.description }}></p>
      {project?.points && project?.points?.length > 0 && (
        <ul className="list-disc pl-4 space-y-1 mb-6">
          {project.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300">
            {tag}
          </Badge>
        ))}
      </div>
      <Link href={project.link} className="text-blue-400 hover:text-blue-600 transition-colors">
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
    </CardContent>
  </Card>
);
