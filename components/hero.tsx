"use client";

import { Github, Linkedin, Instagram, ArrowDown } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/NicoGauchat",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/nicol%C3%A1s-gauchat-39b9a1272/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/gauchatnico/",
    icon: Instagram,
    label: "Instagram",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient circle */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/5 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-muted/30 via-transparent to-transparent blur-3xl" />

        {/* Geometric lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <line
            x1="0"
            y1="200"
            x2="1200"
            y2="600"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="400"
            x2="1200"
            y2="200"
            stroke="currentColor"
            strokeWidth="1"
          />
          <line
            x1="600"
            y1="0"
            x2="800"
            y2="800"
            stroke="currentColor"
            strokeWidth="1"
          />
          <circle cx="900" cy="300" r="150" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="500" r="100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Accent geometric shapes */}
        <div className="absolute top-1/4 right-[15%] w-32 h-32 border border-accent/10 rotate-45 hidden lg:block" />
        <div className="absolute bottom-1/3 left-[10%] w-24 h-24 border border-accent/10 rotate-12 hidden lg:block" />
        <div className="absolute top-1/3 left-[20%] w-2 h-2 bg-accent/30 rounded-full hidden lg:block" />
        <div className="absolute bottom-1/4 right-[25%] w-3 h-3 bg-accent/20 rounded-full hidden lg:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-accent font-medium tracking-widest text-sm mb-6 uppercase">
              Software Engineer
            </p>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
              <span className="block text-foreground">NICOLAS</span>
              <span className="block text-accent mt-2">GAUCHAT</span>
            </h1>

            <p className="text-muted-foreground text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10">
              Estudiante de Ingenieria Informatica especializado en Backend
              Development, APIs RESTful y arquitecturas escalables.
            </p>

            {/* Social links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-12">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-border bg-card/50 transition-all duration-300 hover:border-accent hover:bg-accent hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
              >
                Contactar
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full transition-all duration-300 hover:border-accent hover:text-accent"
              >
                Ver Proyectos
              </a>
            </div>
          </div>

          {/* Right side - Stats card */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-accent/20 rounded-3xl rotate-3" />
              <div className="absolute -inset-8 border border-accent/10 rounded-3xl -rotate-2" />

              {/* Stats card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 lg:p-10">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="font-serif text-4xl lg:text-5xl font-bold text-accent">
                      4
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Año Cursando
                    </p>
                  </div>
                  <div className="border-x border-border px-4">
                    <p className="font-serif text-4xl lg:text-5xl font-bold text-accent">
                      5+
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Proyectos
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl lg:text-5xl font-bold text-accent">
                      10+
                    </p>
                    <p className="text-muted-foreground text-sm mt-2">
                      Tecnologias
                    </p>
                  </div>
                </div>

                {/* Tech stack preview */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider mb-4">
                    Stack Principal
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["C# .NET", "Java", "Go", "SQL", "React"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-accent" />
      </div>
    </section>
  );
}
