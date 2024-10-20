import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Footer } from "@/components/Footer";

import portfolio from "@/data/portfolio.json";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-white mb-6">{children}</h2>
);

const SkillIcon = ({ skill }: { skill: string }) => (
  <div className="bg-gray-800 p-2 rounded-lg">
    <Image src={`/placeholder.svg?height=40&width=40&text=${skill}`} alt={skill} width={40} height={40} />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m {portfolio.nickName} 👋</h1>
            <p className="text-lg md:text-xl text-gray-400 mb-6">{portfolio.title}</p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <a href={`mailto:${portfolio.email}`} aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={portfolio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href={portfolio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={portfolio.image}
              alt={portfolio.name}
              width={300}
              height={300}
              className="rounded-full object-contain bg-white w-48 h-48 md:w-64 md:h-64"
            />
          </div>
        </section>

        <section className="py-12 md:py-20">
          <SectionTitle>About me</SectionTitle>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Casual photo"
                width={400}
                height={400}
                className="rounded-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              {portfolio.about.description.map((paragraph, index) => (
                <p key={index} className="text-gray-300 mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
            {portfolio.skills.map((skill) => (
              <SkillIcon key={skill} skill={skill} />
            ))}
          </div>
        </section>

        <section className="py-12 md:py-20">
          <SectionTitle>Experience</SectionTitle>
          <p className="text-gray-400 mb-6">Here is a quick summary of my most recent experiences:</p>
          {portfolio.experience.map((job, index) => (
            <ExperienceCard key={index} {...job} />
          ))}
        </section>

        <section className="py-12 md:py-20">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolio.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </main>
      <Footer email={portfolio.email} github={portfolio.github} linkedin={portfolio.linkedin} name={portfolio.name} />
    </div>
  );
}
