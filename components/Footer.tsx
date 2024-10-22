"use client"

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Copy } from "lucide-react";

type FooterProps = {
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  name: string;
};

export const Footer = ({ email, phone, github, linkedin, name }: FooterProps) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <footer className="bg-gray-800 py-16 text-white">
      <div className="flex flex-col items-center mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-8 w-40 font- text-white font-thin py-1 bg-gray-600 rounded-full">
          Get in touch
        </p>
        <p className="mb-8 font-thin">
          What's next? Feel free to reach out to me if you're looking for<br />
          a developer, have a query, or simply want to connect.
        </p>
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="flex items-center">
            <Mail className="h-6 w-6 mr-4" />
            <span className="text-3xl">{email}</span>
            <Button variant="ghost" size="icon" onClick={() => handleCopy(email)} className="ml-4">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center">
            <Phone className="h-6 w-6 mr-4" />
            <span className="text-3xl">{phone}</span>
            <Button variant="ghost" size="icon" onClick={() => handleCopy(phone)} className="ml-4">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="text-gray-400 mb-4">You may also find me on these platforms!</p>
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
        </div>
        <p className="text-gray-500 mt-6">&copy; {new Date().getFullYear()} {name}. All rights reserved.</p>
      </div>
    </footer>
  );
};
