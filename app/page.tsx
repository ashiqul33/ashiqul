import portfolio from "@/data/portfolio.json";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection
        title={portfolio.title}
        email={portfolio.email}
        github={portfolio.github}
        linkedin={portfolio.linkedin}
        image={portfolio.image}
        name={portfolio.name_html}
        location={portfolio.location}
      />
      <AboutSection about={portfolio.about} image={portfolio.imageAbout} />
      <SkillSection skills={portfolio.skills} />
      <ExperienceSection experiences={portfolio.experiences} />
      <ProjectSection projects={portfolio.projects} />
    </main>
  );
}
