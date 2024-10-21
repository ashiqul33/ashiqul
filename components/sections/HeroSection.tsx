import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

type heroType = {
  nickName: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  image: string;
  name: string;
};

export const HeroSection = ({ nickName, title, email, github, linkedin, image, name }: heroType) => (
  <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I&apos;m {nickName} 👋</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-6">{title}</p>
      <div className="flex space-x-4">
        <Button variant="outline" size="icon" asChild>
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="outline" size="icon" asChild>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-full object-contain bg-white w-48 h-48 md:w-64 md:h-64"
      />
    </div>
  </section>
);
