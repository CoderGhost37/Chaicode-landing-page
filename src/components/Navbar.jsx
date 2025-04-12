import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./ui/resizable-navbar";
import { useState } from "react";
import Logo from '../assets/chaicode-white.png';
import { BookOpen, Code, Star, Terminal } from 'lucide-react';

const navItems = [
  {
    name: "Cohorts",
    link: "#cohorts",
    icon: Code
  },
  {
    name: "Udemy",
    link: "#udemy",
    icon: BookOpen
  },
  {
    name: "Docs",
    link: "#docs",
    icon: Terminal
  },
  {
    name: "Reviews",
    link: "#reviews",
    icon: Star
  }
];

export function AppNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo src={Logo} />
          <NavItems items={navItems} />
          <a href="https://courses.chaicode.com/learn/account/signin">
            <NavbarButton variant="primary" className="bg-brand-primary text-white">Login</NavbarButton>
          </a>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div className="flex items-center gap-2">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            <NavbarLogo src={Logo} />
              </div>
              <a href="https://courses.chaicode.com/learn/account/signin">
            <NavbarButton variant="primary" className="bg-brand-primary text-white">Login</NavbarButton>
          </a>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative flex items-center gap-1 text-neutral-600 dark:text-neutral-300"
              >
                <item.icon size={16} />
                <span className="block">{item.name}</span>
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
  );
}
