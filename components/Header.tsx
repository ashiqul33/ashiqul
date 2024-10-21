"use client";

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NavItem = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link className="text-gray-400 hover:text-white cursor-pointer" href={href}>
    {children}
  </Link>
);

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="md:fixed top-0 left-0 right-0 z-10 bg-slate-800 py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div className="text-2xl font-bold"></div>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <NavItem href="#about">About</NavItem>
          <NavItem href="#projects">Projects</NavItem>
        </ul>
      </nav>
      <Button variant="outline" className="hidden md:inline-flex bg-blue-600 text-white hover:bg-blue-700">
        Contact
      </Button>
      <Button variant="ghost" className="md:hidden" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 p-4 md:hidden">
          <ul className="space-y-2">
            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
            {/* <NavItem onClick={toggleMobileMenu}>Contact</NavItem> */}
          </ul>
          <Button variant="outline" className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
            Contact
          </Button>
        </div>
      )}
    </header>
  );
};
