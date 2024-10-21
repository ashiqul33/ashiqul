import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

type HeroType = {
  nickName: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  image: string;
  name: string;
  location: string;
};

export const HeroSection = ({ nickName, title, email, github, linkedin, image, name, location }: HeroType) => (
  <section className="md:mt-14 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between" id="about">
    <div className="md:w-1/2 mb-8 md:mb-0">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I&apos;m {nickName} 👋</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-6">{title}</p>
      <div className="flex items-center text-gray-400 mb-8">
        <MapPin className="h-5 w-5 mr-2" />
        <span>{location}</span>
      </div>
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
    <div className="md:w-1/3 hidden md:flex justify-center">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="rounded object-cover"
        />
        <div className="absolute -bottom-7 -right-7 w-full h-full border-r-20 border-b-20 border-gray-600"></div>
      </div>
    </div>
  </section>
);
