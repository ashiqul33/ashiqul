import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail } from "lucide-react";
import portfolio from "@/data/portfolio.json";

const SectionTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-white mb-6">{children}</h2>
);

const SkillIcon = ({ skill }: { skill: string }) => (
  <div className="bg-gray-800 p-2 rounded-lg">
    <Image src={`/placeholder.svg?height=40&width=40&text=${skill}`} alt={skill} width={40} height={40} />
  </div>
);

const ProjectCard = ({ project }: { project: (typeof portfolio.projects)[0] }) => (
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

const ExperienceCard = ({
  role,
  company,
  period,
  responsibilities,
}: {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
}) => (
  <Card className="bg-gray-800 border-gray-700 mb-6">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        <Image src="/placeholder.svg?height=60&width=60&text=Upwork" alt={company} width={60} height={60} className="mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-white">{role}</h3>
          <p className="text-green-500">{company}</p>
          <p className="text-gray-400">{period}</p>
        </div>
      </div>
      <ul className="list-disc pl-5 space-y-1 text-gray-300">
        {responsibilities.map((resp, idx) => (
          <li key={idx}>{resp}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m {portfolio.name} 👋</h1>
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

      <footer className="bg-gray-800 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Let&apos;s work together on your next project</p>
          <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 mb-6">
            Get in touch
          </Button>
          <div className="flex justify-center space-x-4 mb-6">
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
          <p className="text-gray-500">&copy; 2024 {portfolio.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
