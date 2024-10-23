import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard, projectType } from "@/components/ProjectCard";

export const ProjectSection = ({ projects }: { projects: projectType[] }) => (
  <section className="container mx-auto px-4 py-12 sm:px-6 md:py-24 lg:px-8" id="projects">
    <SectionTitle>Projects 🛠️</SectionTitle>
    <div className="grid grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  </section>
);
