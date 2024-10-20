import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type projectType = {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProjectCard = ({ project }: { project: projectType }) => (
  <Card className="bg-gray-800 border-gray-700">
    <CardContent className="p-0">
      <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-700 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);
