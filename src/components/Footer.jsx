import { section } from 'motion/react-client'
import React from 'react'
import {Instagram,Github, Linkedin} from "lucide-react"
export const Footer = () => {
  return (
    <section className="flex glass justify-evenly overflow-hidden container mt-20 bg-secondary min-w-full">
      <a
        href="about"
        className="flex items-center cursor-target text-xl font-bold tracking-tight hover:text-primary transition-colors"
      >
        VG <span className="text-primary">.</span>
      </a>
      <div className="text-lg flex items-center py-10 justify-center">
        <p>made with love and computer obviosuly</p>
      </div>
      <div className="flex gap-2 items-center justify-center">
        {[
                      { icon: Github, href: "https://github.com/Vedant8075" },
                      { icon: Linkedin, href: "https://www.linkedin.com/in/vedant-gupta-18405031b/" },
                      { icon: Instagram, href: "https://www.instagram.com/vedant_8075" },
                    ].map((social, idx) => (
          <a
            key={idx}
            href={social.href}
            className="px-2 cursor-target glass border p-2 hover:bg-primary transition-all  duration-200  "
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </section>
  );
}
