import React from "react";
import TechSection from "../component/Techsection"
import {
  SiC,
  SiCplusplus,
  SiOpenjdk,
  SiPython,
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiGithub,
  SiFigma,
  SiUnity,
  SiPostman,
  SiVercel,
  SiLinux,
} from "react-icons/si";

import { FaCode } from "react-icons/fa"; 

const techData = [
  {
    title: "Programming Languages",
    icons: [SiC, SiCplusplus, SiOpenjdk, SiPython, SiJavascript],
  },
  {
    title: "Databases",
    icons: [SiMysql, SiMongodb],
  },
  {
    title: "Frontend",
    icons: [SiReact, SiTailwindcss, SiHtml5],
  },
  {
    title: "Version Control",
    icons: [SiGit, SiGithub],
  },
  {
    title: "Tools & Platforms",
    icons: [SiFigma, SiUnity, SiPostman, SiVercel],
  },
  {
    title: "Other",
    icons: [FaCode, SiLinux, FaCode], // OOPS, Linux, DSA
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative mt-10 mx-23 space-y-10">
      {/* Background dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(80)].map((_, i) => {
          const size = Math.random() * 4 + 1; // 1px → 5px
          return (
            <div
              key={i}
              className="absolute rounded-full opacity-60"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: "#20B2A6",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `slow-drift ${
                  10 + Math.random() * 30
                }s ease-in-out infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 text-5xl text-primary-foreground hover:text-primary font-serif lg:mx-40">
        Skills
      </div>

      <div className="relative z-10 lg:mx-40">
        {techData.map((section, index) => (
          <TechSection
            key={index}
            title={section.title}
            icons={section.icons}
          />
        ))}
      </div>
    </section>
  );
};
