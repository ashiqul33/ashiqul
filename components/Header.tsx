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
    <header className="relative left-0 right-0 top-0 z-10 flex items-center justify-between px-4 py-6 sm:px-6 md:fixed md:bg-slate-800 lg:px-8">
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
      {mobileMenuOpen ? (
        <div className="translateX(100%) absolute right-0 top-0 flex w-52 bg-gray-800/90 p-4 transition-transform duration-300 ease-in-out md:hidden">
          <div>
            <ul className="space-y-2">
              <li>
                <NavItem href="#about">About</NavItem>
              </li>
              <li>
                <NavItem href="#skills">Skills</NavItem>
              </li>
              <li>
                <NavItem href="#experiences">Experiences</NavItem>
              </li>
              <li>
                <NavItem href="#projects">Projects</NavItem>
              </li>
            </ul>
            <Button variant="default" className="mt-4 rounded-xl font-bold text-black">
              <Link href="/file/Mohammad_Ashiqul_Islam.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </Link>
            </Button>
          </div>
          <Button variant="ghost" className="border-2 border-gray-600" onClick={toggleMobileMenu}>
            <X className="h-6 w-6" />
          </Button>
        </div>
      ) : (
        <div className="absolute right-0 top-0 p-4 md:hidden">
          <Button variant="ghost" onClick={toggleMobileMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      )}
    </header>
  );
};
