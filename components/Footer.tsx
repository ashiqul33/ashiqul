"use client";

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
      <div className="mx-auto flex flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <p className="font- mb-8 w-40 rounded-full bg-gray-600 py-1 font-thin text-white">Get in touch</p>
        <p className="mb-8 font-thin">
          What&apos;s next? Feel free to reach out to me if you&apos;re looking for
          <br />a developer, have a query, or simply want to connect.
        </p>
        <div className="mb-8 flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <Mail className="mr-2 h-6 w-6" />
            <span className="text-3xl">{email}</span>
            <Button variant="ghost" size="icon" onClick={() => handleCopy(email)} className="ml-2">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center">
            <Phone className="mr-2 h-6 w-6" />
            <span className="text-3xl">{phone}</span>
            <Button variant="ghost" size="icon" onClick={() => handleCopy(phone)} className="ml-2">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <p className="mb-4 text-gray-400">You may also find me on these platforms!</p>
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
        <p className="mt-6 text-gray-500">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
