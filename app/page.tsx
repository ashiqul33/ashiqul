import portfolio from "@/data/portfolio.json";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillSection } from "@/components/sections/SkillSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectSection } from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection
          nickName={portfolio.nickName}
          title={portfolio.title}
          email={portfolio.email}
          github={portfolio.github}
          linkedin={portfolio.linkedin}
          image={portfolio.image}
          name={portfolio.name}
          location={portfolio.location}
        />
        <AboutSection about={portfolio.about}  image={portfolio.imageAbout} />
        <SkillSection skills={portfolio.skills} />
        <ExperienceSection experiences={portfolio.experiences} />
        <ProjectSection projects={portfolio.projects} />
      </main>
    </div>
  );
}
