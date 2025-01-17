import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

type HeroType = {
  title: string;
  email: string;
  github: string;
  linkedin: string;
  image: string;
  name: string;
  location: string;
};

export const HeroSection = ({ title, email, github, linkedin, image, name, location }: HeroType) => (
  <section className="container mx-auto mt-14 flex flex-col items-center justify-between px-4 py-12 sm:px-6 md:flex-row md:py-20 lg:px-8">
    <div className="mb-20 flex justify-center md:order-last md:mb-0 md:w-1/3">
      <div className="relative">
        <Image src={image} alt={name} width={300} height={300} className="rounded object-cover" />
        <div className="absolute -bottom-7 -right-7 h-full w-full border-b-20 border-r-20 border-gray-600"></div>
      </div>
    </div>
    <div className="md:w-1/2">
      <h2 className="mb-2 text-4xl font-bold">Hi👋 I&apos;m </h2>
      <span className="flex mb-2 text-2xl font-bold md:text-3xl" dangerouslySetInnerHTML={{ __html: name }}></span>
      <p className="mb-6 text-lg text-gray-400 md:text-xl">{title}</p>
      <div className="mb-8 flex items-center text-gray-400">
        <MapPin className="mr-2 h-5 w-5" />
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
  </section>
);
