import React, { useEffect, useState } from "react";

const experiences = [
  {
    period: "2007-2024",
    role: "Student",
    company: "City Montessori School",
    description: "",
    technologies: ["Academics", "Activities"],
  },
  {
    period: "2025-present",
    role: "Undergraduate",
    company: "NIT Jalandhar",
    description: "",
    technologies: ["C++", "DSA"],
    current: true,
  },
  {
    period: "2026-present",
    role: "Member",
    company: "SEED Club, NIT Jalandhar",
    description: "",
    technologies: ["Teamwork", "Events"],
  },
];

const Experience = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("experience");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const total = rect.height + windowHeight;
      const progress = (windowHeight - rect.top) / total;

      setScrollProgress(Math.max(0, Math.min(1, progress)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground">
            A timeline of my growth from school to college and beyond.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Base line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary/20 md:-translate-x-1/2" />

          {/* Animated fill line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-primary to-transparent md:-translate-x-1/2 transition-all duration-200"
            style={{ height: `${scrollProgress * 100}%` }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative grid md:grid-cols-2 gap-8">
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                    <p className="text-muted-foreground">{exp.company}</p>

                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-800 text-xs rounded-full text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
