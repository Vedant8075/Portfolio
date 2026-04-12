import React, { useEffect, useState } from "react";
import { Buttons } from "../shared-items/Buttons";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

export const Navbar = () => {
  const [menumobile, setmenumobile] = useState(false);
  const [isscrolled, setisscrolled] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setisscrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handlescroll);

    return () => window.removeEventListener("scroll", handlescroll); 
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isscrolled
          ? "glass-strong py-3 backdrop-blur-md"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="cursor-target text-xl font-bold tracking-tight hover:text-primary transition-colors"
        >
          VG <span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass px-2 py-1 rounded-full flex items-center gap-1">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="cursor-target px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a href="#contactus">
            <Buttons size="sm" className="cursor-target">
              Contact Me
            </Buttons>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setmenumobile(!menumobile)}
          className="md:hidden p-2 text-foreground cursor-pointer hover:text-primary transition-colors duration-200"
        >
          {!menumobile ? <Menu size={24} /> : <X size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menumobile && (
        <div className="md:hidden glass-strong my-4 animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col ">
            {navLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-lg cursor-target text-muted-foreground hover:text-foreground hover:bg-surface rounded-full transition-all duration-200"
              >
                {item.label}
              </a>
            ))}

            <Buttons size="default" className="my-4 cursor-target">
              Contact Me
            </Buttons>
          </div>
        </div>
      )}
    </header>
  );
};
