"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavItem = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link className="cursor-pointer text-gray-400 hover:text-white" href={href}>
    {children}
  </Link>
);

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`${mobileMenuOpen ? "relative" : "left-0 right-0 top-0 z-10 md:fixed"} flex items-center justify-between bg-slate-800 px-4 py-6 sm:px-6 lg:px-8`}
    >
      <div className="text-2xl font-bold"></div>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#experiences">Experiences</NavItem>
          <NavItem href="#projects">Projects</NavItem>
        </ul>
      </nav>
      <Button variant="default" className="hidden rounded-xl font-bold text-black md:inline-flex">
        <Link href="/file/Mohammad_Ashiqul_Islam.pdf" target="_blank" rel="noopener noreferrer">
          Download CV
        </Link>
      </Button>
      <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-gray-800 p-4 md:hidden">
          <ul className="space-y-2">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#experiences">Experiences</NavItem>
            <NavItem href="#projects">Projects</NavItem>
          </ul>
          <Button variant="default" className="hidden rounded-xl font-bold text-black md:inline-flex">
            Download CV
          </Button>
        </div>
      )}
    </header>
  );
};
