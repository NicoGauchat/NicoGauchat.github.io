"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";

const experiences = [
  {
    period: "2023 - Presente",
    title: "Estudiante de Ingenieria Informatica",
    company: "UCSE - Universidad Catolica de Santiago del Estero",
    description:
      "Cursando el 4to año de la carrera con enfoque en desarrollo backend, bases de datos y arquitectura de software. Participacion activa en proyectos academicos y grupales.",
    skills: ["Algoritmos", "Estructuras de Datos", "POO", "Bases de Datos"],
    icon: "graduation",
  },
  {
    period: "2025 - Actualidad",
    title: "Desarrollador Full Stack",
    company: "Emprendimiento SaaS - Desarollos de software",
    description:
      "Desarrollo continuos de plataformas SaaS. Arquitecturas hibridas con Java/Go en backend y React para modulos dinamicos.",
    skills: ["Java", "Go", "React", "PostgreSQL", "JWT"],
    icon: "code",
  },
  {
    period: "2023 - Actualidad",
    title: "Proyectos Academicos",
    company: "Trabajos Practicos Integradores",
    description:
      "Desarrollo continuo de multiples proyectos academicos incluyendo sistemas de gestion logistica, aplicaciones fitness y juegos arcade, aplicando metodologias agiles y buenas practicas.",
    skills: ["C# .NET", "Go", "MongoDB", "Unit Testing"],
    icon: "folder",
  },
];

type SkillLevel = "Experto" | "Avanzado" | "Intermedio" | "Aprendiendo";

interface Technology {
  name: string;
  level: SkillLevel;
  yearsExp?: string;
  projects?: number;
  icon: string;
  color: string;
}

const levelConfig: Record<SkillLevel, { bars: number; label: string }> = {
  Experto: { bars: 5, label: "Dominio completo" },
  Avanzado: { bars: 4, label: "Uso profesional" },
  Intermedio: { bars: 3, label: "Proyectos reales" },
  Aprendiendo: { bars: 2, label: "En desarrollo" },
};

const technologies: Technology[] = [
  { name: "C# .NET", level: "Avanzado", yearsExp: "+3", projects: 5, icon: "csharp", color: "#9B4F96" },
  { name: "Java", level: "Avanzado", yearsExp: "+3", projects: 4, icon: "java", color: "#f89820" },
  { name: "Go", level: "Avanzado", yearsExp: "+2", projects: 3, icon: "go", color: "#00ADD8" },
  { name: "SQL", level: "Avanzado", yearsExp: "+3", projects: 6, icon: "database", color: "#336791" },
  { name: "Spring Boot", level: "Intermedio", yearsExp: "+1", projects: 2, icon: "spring", color: "#6DB33F" },
  { name: "React", level: "Intermedio", yearsExp: "+1", projects: 2, icon: "react", color: "#61DAFB" },
];

// Icon components
function TechIcon({ type, color }: { type: string; color: string }) {
  const icons: Record<string, ReactElement> = {
    csharp: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zM9.426 7.12a5.55 5.55 0 0 1 .79.044 5.55 5.55 0 0 1 .774.136l-.19 1.054a4.29 4.29 0 0 0-.57-.097 4.29 4.29 0 0 0-.59-.037A3.5 3.5 0 0 0 7 9.154 3.5 3.5 0 0 0 6.09 12 3.5 3.5 0 0 0 7 14.846 3.5 3.5 0 0 0 9.64 15.78a4.29 4.29 0 0 0 .59-.037 4.29 4.29 0 0 0 .57-.097l.19 1.054a5.55 5.55 0 0 1-.774.136 5.55 5.55 0 0 1-.79.044A4.72 4.72 0 0 1 5.7 15.48 4.72 4.72 0 0 1 4.8 12a4.72 4.72 0 0 1 .9-3.48 4.72 4.72 0 0 1 3.726-1.4zM15.5 9.5h1v1h1v1h-1v1h-1v-1h-1v-1h1zM18.5 9.5h1v1h1v1h-1v1h-1v-1h-1v-1h1z"/>
      </svg>
    ),
    java: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
        <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.154 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
      </svg>
    ),
    go: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
        <path d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zM2.828 12.381c-.046 0-.058.035-.035.07l.163.292c.023.035.07.058.117.058h2.338c.047 0 .07-.035.07-.082l.023-.28c0-.047-.035-.082-.082-.082zM15.89 10.231c-.74.186-1.244.315-1.984.502-.187.047-.198.059-.363-.128-.187-.223-.328-.363-.592-.502-.79-.397-1.548-.28-2.257.222-.838.595-1.268 1.454-1.256 2.502.012 1.036.688 1.887 1.712 2.014.89.117 1.642-.175 2.221-.861.117-.14.222-.292.352-.479h-2.455c-.258 0-.316-.163-.234-.373.152-.385.432-.937.596-1.232.047-.082.152-.222.316-.222h4.603c-.024.327-.024.654-.071.98-.106.653-.304 1.283-.619 1.864-.485.902-1.163 1.63-2.072 2.12-.74.397-1.536.56-2.386.479-1.212-.117-2.187-.618-2.93-1.583-.676-.876-.93-1.876-.852-2.964.093-1.326.548-2.466 1.466-3.416.981-1.017 2.174-1.583 3.613-1.665 1.14-.059 2.187.175 3.106.876.56.432.979.967 1.256 1.607.07.14.023.222-.14.268z"/>
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
        <path d="M12 3C7.58 3 4 4.79 4 7v10c0 2.21 3.59 4 8 4s8-1.79 8-4V7c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.5 6 2s-2.13 2-6 2-6-1.5-6-2 2.13-2 6-2zm6 12c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V17zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2v-2.23c1.61.78 3.72 1.23 6 1.23s4.39-.45 6-1.23V13zm0-4c0 .5-2.13 2-6 2s-6-1.5-6-2V6.77C7.61 7.55 9.72 8 12 8s4.39-.45 6-1.23V9z"/>
      </svg>
    ),
    spring: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
        <path d="M21.8 2.2c-.1-.1-.3-.1-.4 0-3.4 2.7-6.3 3.5-8.5 3.5-2.8 0-4.6-1.1-4.6-1.1-.1-.1-.3-.1-.4 0-.1.1-.1.3 0 .4 0 0 .7.8 1.6 1.6-1.7.4-3.7 1.4-5.5 3.6C.4 14.5.2 19.6 3.3 22c.1.1.3.1.4 0 .1-.1.1-.3 0-.4-2.9-2.2-2.7-7 .6-10.9 1.6-1.9 3.4-2.9 4.9-3.3.7.6 1.5 1.2 2.3 1.7-2.5 1.1-5.4 3.5-6.2 8.2-.1.2.1.3.2.4.2.1.3-.1.4-.2.8-4.4 3.5-6.7 5.8-7.7 1.2.6 2.4 1.1 3.6 1.4-1.5 1.2-3.1 3.1-3.8 6-.1.2.1.3.2.4.2.1.3-.1.4-.2.6-2.7 2.1-4.5 3.5-5.6 1.5.3 2.9.3 4.1.1-.4 1.4-.4 3.3.7 5.6.1.1.2.2.4.1.1-.1.2-.2.1-.4-1-2.1-1.1-3.9-.7-5.2 1.8-.4 3.2-1.1 4.2-2 .1-.1.1-.3 0-.4-.8-.7-2.3-1.5-4.5-1.6-.9-.1-1.9 0-2.9.2-1.1-.3-2.2-.8-3.3-1.4 1.3-.4 2.6-.5 3.6-.4 2.4.2 4.3 1.4 4.3 1.4.1.1.3.1.4 0 .1-.1.1-.3 0-.4 0 0-2-1.3-4.6-1.5-1.2-.1-2.7.1-4.1.5-.8-.5-1.5-1-2.2-1.6 2.4.1 5.7-.7 9.4-3.7.2-.1.2-.3.1-.4z"/>
      </svg>
    ),
    react: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill={color}>
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
      </svg>
    ),
  };

  return icons[type] || <div className="w-5 h-5 rounded-full" style={{ backgroundColor: color }} />;
}

function ExperienceIcon({ type }: { type: string }) {
  const icons: Record<string, ReactElement> = {
    graduation: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    code: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    folder: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
      </svg>
    ),
  };

  return icons[type] || null;
}

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export function Experience() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-accent font-medium tracking-widest text-sm mb-4 uppercase animate-fade-in">
            Trayectoria
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight">
            Experiencia & Formacion
          </h2>
          <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Timeline - Left side */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Animated vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px">
                <div className="h-full bg-gradient-to-b from-accent via-accent/50 to-transparent animate-pulse" />
              </div>

              {/* Timeline items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-12 group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot with icon */}
                    <div className="absolute left-0 top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-card border-2 border-accent/50 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/10 group-hover:shadow-lg group-hover:shadow-accent/20">
                      <span className="text-accent transition-transform duration-300 group-hover:scale-110">
                        <ExperienceIcon type={exp.icon} />
                      </span>
                    </div>

                    {/* Content card */}
                    <div className="bg-card/30 backdrop-blur-sm border border-border rounded-2xl p-6 transition-all duration-500 hover:bg-card/60 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block px-3 py-1.5 text-xs font-semibold text-accent bg-accent/10 rounded-full border border-accent/20">
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-accent/80 text-sm mb-4 font-medium">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                        {exp.description}
                      </p>

                      {/* Skills with hover effect */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 text-xs bg-muted/30 text-muted-foreground rounded-full border border-border/50 transition-all duration-300 hover:bg-accent/10 hover:text-accent hover:border-accent/30 hover:scale-105 cursor-default"
                            style={{ animationDelay: `${skillIndex * 50}ms` }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills - Right side */}
          <div className="lg:col-span-2">
            <div className="sticky top-32">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold">Stack Tecnologico</h3>
              </div>

              <div className="space-y-3">
                {technologies.map((tech, index) => {
                  const config = levelConfig[tech.level];
                  const isHovered = hoveredTech === tech.name;

                  return (
                    <div
                      key={tech.name}
                      className={`group relative p-4 bg-card/30 backdrop-blur-sm border rounded-xl transition-all duration-500 cursor-pointer overflow-hidden ${
                        isHovered ? "bg-card/60 border-accent/50 shadow-lg shadow-accent/10 scale-[1.02]" : "border-border hover:border-accent/30"
                      }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                    >
                      {/* Glow effect on hover */}
                      <div
                        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${tech.color}10, transparent 70%)`,
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg transition-all duration-300 ${isHovered ? "scale-110" : ""}`}
                              style={{ backgroundColor: `${tech.color}15` }}
                            >
                              <TechIcon type={tech.icon} color={tech.color} />
                            </div>
                            <span className="font-medium">{tech.name}</span>
                          </div>
                          <span
                            className="text-xs px-2.5 py-1 rounded-full font-medium transition-all duration-300"
                            style={{
                              backgroundColor: isHovered ? `${tech.color}20` : "rgba(201, 169, 97, 0.1)",
                              color: isHovered ? tech.color : "var(--color-accent)",
                            }}
                          >
                            {tech.level}
                          </span>
                        </div>

                        {/* Animated skill bars */}
                        <div className="flex items-center gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((bar) => (
                            <div
                              key={bar}
                              className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                bar <= config.bars
                                  ? isHovered
                                    ? "scale-y-150"
                                    : ""
                                  : "bg-muted/30"
                              }`}
                              style={{
                                backgroundColor: bar <= config.bars ? tech.color : undefined,
                                transitionDelay: `${bar * 50}ms`,
                              }}
                            />
                          ))}
                        </div>

                        {/* Additional info with animated counters */}
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span className="opacity-70">{config.label}</span>
                          <div className="flex items-center gap-4">
                            {tech.yearsExp && (
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-foreground font-medium">{tech.yearsExp}</span> años
                              </span>
                            )}
                            {tech.projects && (
                              <span className="flex items-center gap-1">
                                <svg className="w-3 h-3 text-accent/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                <AnimatedCounter value={tech.projects} /> proyectos
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Focus card with glassmorphism */}
              <div className="mt-10 p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-accent/20 rounded-2xl relative overflow-hidden group hover:border-accent/40 transition-all duration-500">
                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <p className="text-muted-foreground text-sm font-medium">
                      Enfoque actual
                    </p>
                  </div>
                  <p className="text-foreground font-semibold text-lg mb-2">
                    Desarrollo Backend & Arquitecturas Escalables
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Profundizando en patrones de diseño, microservicios y DevOps.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["Microservicios", "DevOps", "Clean Architecture"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-accent/5 text-accent/80 rounded border border-accent/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
