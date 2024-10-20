import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

type footerType = {
  email: string;
  github: string;
  linkedin: string;
  name: string;
};

export const Footer = ({ email, github, linkedin, name }: footerType) => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 mb-4">Let&apos;s work together on your next project</p>
        <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700 mb-6">
          Get in touch
        </Button>
        <div className="flex justify-center space-x-4 mb-6">
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
        <p className="text-gray-500">&copy; 2024 {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
