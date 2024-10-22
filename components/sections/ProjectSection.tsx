import { SectionTitle } from "@/components/SectionTitle";
import { ProjectCard, projectType } from "@/components/ProjectCard";

export const ProjectSection = ({ projects }: { projects: projectType[] }) => (
  <section className="py-12 md:py-24" id="projects">
    <SectionTitle>Projects 🛠️</SectionTitle>
    <div className="grid grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  </section>
);
