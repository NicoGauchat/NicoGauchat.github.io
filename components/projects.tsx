"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Github, ExternalLink, Lock, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

type Project = {
  title: string;
  status: string;
  description: string;
  images: string[];
  stack: string[];
  github: string | null;
  demo: string | null;
  isPrivate: boolean;
};

const projects: Project[] = [
  {
    title: "TrackIt-One",
    status: "En preparacion",
    description:
      "Tarjeta lista para cargar las capturas y terminar de presentar TrackIt-One dentro del portfolio.",
    images: [],
    stack: [],
    github: null,
    demo: null,
    isPrivate: false,
  },
  {
    title: "Gym Node",
    status: "En desarrollo",
    description:
      "Sistema de gestion para gimnasios disenado para centralizar la operacion diaria en una sola plataforma. Permite administrar clientes, asistencias, cuotas, precios e informacion administrativa con una estructura clara, moderna y preparada para crecer.",
    images: ["/foto/tp3.png", "/foto/tp2.png"],
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker", "JWT"],
    github: null,
    demo: null,
    isPrivate: true,
  },
  {
    title: "Gestor de Rutinas",
    status: "Completado",
    description:
      "Aplicacion Web Full Stack para gestion personalizada de entrenamientos. Backend en Go (Gin) con arquitectura limpia, autenticacion JWT, roles Admin/User y persistencia en MongoDB.",
    images: ["/foto/tp3.png"],
    stack: ["Go", "Gin", "MongoDB", "JWT"],
    github: "https://github.com/juanpoggi12/JGNSolutions",
    demo: null,
    isPrivate: false,
  },
  {
    title: "ExamGenIA",
    status: "En preparacion",
    description:
      "Tarjeta lista para cargar las capturas y completar la presentacion visual de ExamGenIA.",
    images: [],
    stack: [],
    github: null,
    demo: null,
    isPrivate: false,
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  return (
    <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden bg-[#0c1220] rounded-xl group/carousel">
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex]}
          alt={`${title} - imagen ${currentIndex + 1}`}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <button
        className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
        aria-label="Expandir imagen"
      >
        <Maximize2 className="w-4 h-4 text-foreground" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-24 bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-background/80 rounded-r-lg"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-24 bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-background/80 rounded-l-lg"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-6 h-2 bg-accent"
                  : "w-2 h-2 bg-foreground/40 hover:bg-foreground/60"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EmptyProjectMedia({ title }: { title: string }) {
  return (
    <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden rounded-xl border border-dashed border-accent/30 bg-gradient-to-br from-card/80 via-card/50 to-muted/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,97,0.16),_transparent_55%)]" />
      <div className="relative flex h-full items-center justify-center p-8 text-center">
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">
            Capturas pendientes
          </p>
          <h4 className="mt-4 font-serif text-3xl font-bold tracking-tight">
            {title}
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Esta tarjeta ya esta preparada para que agregues las fotos del proyecto cuando las tengas listas.
          </p>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isHighlighted = status === "En desarrollo" || status === "En preparacion";

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-md border ${
        isHighlighted
          ? "bg-accent/10 text-accent border-accent/30"
          : "bg-muted/50 text-muted-foreground border-border"
      }`}
    >
      {status}
    </span>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="text-accent font-medium tracking-widest text-sm mb-4 uppercase">
            Portafolio
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Proyectos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una seleccion de mis trabajos mas destacados, abarcando desde
            sistemas de gestion empresarial hasta desarrollo full stack.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group"
            >
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <StatusBadge status={project.status} />
              </div>

              {project.images.length > 0 ? (
                <ImageCarousel images={project.images} title={project.title} />
              ) : (
                <EmptyProjectMedia title={project.title} />
              )}

              <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <p className="text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                {project.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-md">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 text-sm font-medium bg-transparent text-foreground rounded-full border border-border hover:border-accent/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {(project.isPrivate || project.github || project.demo) && (
                <div className="mt-6 flex items-center gap-6">
                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="w-4 h-4" />
                      Codigo Privado (SaaS)
                    </span>
                  ) : (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          <Github className="w-4 h-4" />
                          Ver Codigo
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver Demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
