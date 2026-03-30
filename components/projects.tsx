"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Lock,
  Maximize2,
  X,
} from "lucide-react";

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
      "Aplicacion de organizacion academica pensada para estudiantes que quieren administrar mejor su tiempo. Integra tareas, materias, calendario, seguimiento de entregas, estadisticas y espacios de concentracion en una sola experiencia.",
    images: [
      "/foto/trackit-one/inicio.png",
      "/foto/trackit-one/tareas.png",
      "/foto/trackit-one/materias.png",
      "/foto/trackit-one/calendario.png",
      "/foto/trackit-one/estadisticas.png",
      "/foto/trackit-one/concentracion.png",
    ],
    stack: ["React", "Next.js", "PostgreSQL", "Go"],
    github: null,
    demo: null,
    isPrivate: false,
  },
  {
    title: "Gym Node",
    status: "En desarrollo",
    description:
      "Parte de un emprendimiento desarrollado junto a otros dos socios. Sistema de gestion para gimnasios diseñado para centralizar la operacion diaria en una sola plataforma. Permite administrar clientes, asistencias, cuotas, precios e informacion administrativa con una estructura clara, moderna y preparada para crecer.",
    images: [
      "/foto/gym-node/panel-general.png",
      "/foto/gym-node/clientes.png",
      "/foto/gym-node/cuotas.png",
      "/foto/gym-node/caja-tesoreria.png",
      "/foto/gym-node/movimientos.png",
      "/foto/gym-node/historial.png",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker", "JWT"],
    github: null,
    demo: null,
    isPrivate: true,
  },
  {
    title: "Gestor de Rutinas",
    status: "Completado",
    description:
      "Trabajo final de la materia Programacion II (3er año). Aplicacion Web Full Stack para gestion personalizada de entrenamientos. Backend en Go (Gin) con arquitectura limpia, autenticacion JWT, roles Admin/User y persistencia en MongoDB.",
    images: [
      "/foto/tp3/inicio de sesion.png",
      "/foto/tp3/inicio.png",
      "/foto/tp3/rutinas.png",
      "/foto/tp3/creadorRutina.png",
      "/foto/tp3/entrenamiento.png",
      "/foto/tp3/estadisticas.png",
      "/foto/tp3/configuracion.png",
      "/foto/tp3/anadirejer.png",
      "/foto/tp3/paneladmin.png",
      "/foto/tp3/paneladmin2.png",
      "/foto/tp3/tp3.png",
    ],
    stack: ["Go", "Gin", "MongoDB", "JWT"],
    github: "https://github.com/juanpoggi12/JGNSolutions",
    demo: null,
    isPrivate: false,
  },
  {
    title: "ExamGenIA",
    status: "Completado",
    description:
      "Programa en Python donde subis un archivo y te genera preguntas de verdadero o falso, unir, respuesta corta y otros formatos automaticamente. Utiliza Groq para procesar el contenido y construir las evaluaciones.",
    images: [
      "/foto/examgen/inicio.png",
      "/foto/examgen/preguntas.png",
      "/foto/examgen/unir.png",
      "/foto/examgen/respuesta.png",
      "/foto/examgen/respuestas2.png",
      "/foto/examgen/calificacion.png",
    ],
    stack: ["Python", "Groq"],
    github: "https://github.com/NicoGauchat/ExamGen-IA",
    demo: null,
    isPrivate: false,
  },
];

function getWrappedIndex(index: number, total: number) {
  return (index + total) % total;
}

function CarouselArrow({
  direction,
  onClick,
  className,
}: {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#09101d]/80 text-white shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-accent/50 hover:text-accent ${className ?? ""}`}
    >
      {direction === "left" ? (
        <ChevronLeft className="h-5 w-5" />
      ) : (
        <ChevronRight className="h-5 w-5" />
      )}
    </button>
  );
}

function SlideFrame({
  image,
  title,
  isActive,
  onClick,
  onExpand,
}: {
  image: string;
  title: string;
  isActive: boolean;
  onClick?: () => void;
  onExpand?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(event) => {
        if (!onClick) {
          return;
        }

        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      className={`group/slide relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-[#0d1423] text-left shadow-[0_26px_90px_rgba(0,0,0,0.45)] transition-all duration-500 ${isActive ? "cursor-default" : "cursor-pointer"}`}
    >
      <div className="flex items-center justify-between border-b border-white/6 bg-white/[0.04] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          {title}
        </p>
        <div className="flex items-center gap-2">
          {isActive && onExpand ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onExpand();
              }}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#08101d]/80 text-white transition-all duration-300 hover:border-accent/50 hover:text-accent"
              aria-label={`Abrir ${title} en pantalla completa`}
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          ) : (
            <span className="h-6 w-6 rounded-full border border-white/10 bg-white/[0.02]" />
          )}
        </div>
      </div>

      <div className="relative h-[calc(100%-61px)] bg-[radial-gradient(circle_at_top,_rgba(201,169,97,0.14),_transparent_45%)]">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,24,0.1),rgba(8,13,24,0.4))]" />
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-3 md:p-4"
          sizes="(max-width: 768px) 90vw, 70vw"
        />
      </div>
    </div>
  );
}

function FullscreenCarousel({
  title,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  onSelect,
}: {
  title: string;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[#030712]/95 backdrop-blur-md">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,97,0.14),_transparent_40%)]" />

      <div className="relative flex h-full flex-col px-4 py-4 sm:px-8 sm:py-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-accent/80">
              Pantalla completa
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[#09101d]/80 text-white transition-all duration-300 hover:border-accent/50 hover:text-accent"
              aria-label="Cerrar pantalla completa"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-6 flex flex-1 items-center justify-center">
          {images.length > 1 && (
            <>
              <CarouselArrow
                direction="left"
                onClick={onPrevious}
                className="absolute left-0 z-10 sm:left-4"
              />
              <CarouselArrow
                direction="right"
                onClick={onNext}
                className="absolute right-0 z-10 sm:right-4"
              />
            </>
          )}

          <div className="relative h-full max-h-[72vh] w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-[#0d1423] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between border-b border-white/6 bg-white/[0.04] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {title}
              </p>
              <span className="h-6 w-6 rounded-full border border-white/10 bg-white/[0.02]" />
            </div>

            <div className="relative h-[calc(100%-65px)]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,13,24,0.14),rgba(8,13,24,0.38))]" />
              <Image
                src={images[currentIndex]}
                alt={`${title} - imagen ${currentIndex + 1}`}
                fill
                className="object-contain p-4 sm:p-6"
                sizes="100vw"
              />
            </div>
          </div>
        </div>

        {images.length > 1 && (
          <div className="mx-auto mt-6 flex w-full max-w-5xl gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => onSelect(index)}
                className={`relative h-20 min-w-32 overflow-hidden rounded-2xl border transition-all duration-300 ${
                  index === currentIndex
                    ? "border-accent shadow-[0_0_0_1px_rgba(201,169,97,0.45)]"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${title} miniatura ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isFullscreenOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsFullscreenOpen(false);
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious, isFullscreenOpen]);

  const previousIndex = getWrappedIndex(currentIndex - 1, images.length);
  const nextIndex = getWrappedIndex(currentIndex + 1, images.length);
  const showSideSlides = images.length > 2;

  return (
    <>
      <div className="relative overflow-hidden rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,#09101d_0%,#070d18_100%)] px-4 py-6 shadow-[0_40px_120px_rgba(0,0,0,0.4)] sm:px-8 sm:py-8 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,169,97,0.12),_transparent_38%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

        <div className="relative h-[320px] sm:h-[420px] lg:h-[560px]">
          {showSideSlides && (
            <>
              <div
                className="absolute left-1/2 top-1/2 hidden aspect-[16/10] md:block"
                style={{
                  width: "min(38%, 420px)",
                  transform: "translate(calc(-50% - min(31vw, 340px)), -50%) scale(0.84)",
                  opacity: 0.22,
                  filter: "blur(1px)",
                }}
              >
                <SlideFrame
                  image={images[previousIndex]}
                  title={title}
                  isActive={false}
                  onClick={() => goToSlide(previousIndex)}
                />
              </div>

              <div
                className="absolute left-1/2 top-1/2 hidden aspect-[16/10] md:block"
                style={{
                  width: "min(38%, 420px)",
                  transform: "translate(calc(-50% + min(31vw, 340px)), -50%) scale(0.84)",
                  opacity: 0.22,
                  filter: "blur(1px)",
                }}
              >
                <SlideFrame
                  image={images[nextIndex]}
                  title={title}
                  isActive={false}
                  onClick={() => goToSlide(nextIndex)}
                />
              </div>
            </>
          )}

          <div
            className="absolute left-1/2 top-1/2 aspect-[16/10]"
            style={{
              width: "min(84%, 980px)",
              transform: "translate(-50%, -50%)",
            }}
          >
            <SlideFrame
              image={images[currentIndex]}
              title={title}
              isActive
              onExpand={() => setIsFullscreenOpen(true)}
            />
          </div>

          {images.length > 1 && (
            <>
              <CarouselArrow
                direction="left"
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 md:left-[14%]"
              />
              <CarouselArrow
                direction="right"
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 md:right-[14%]"
              />
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="relative mt-8 flex items-center justify-center gap-2">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-accent shadow-[0_0_18px_rgba(201,169,97,0.45)]"
                    : "w-2.5 bg-white/18 hover:bg-white/35"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {isFullscreenOpen && (
        <FullscreenCarousel
          title={title}
          images={images}
          currentIndex={currentIndex}
          onClose={() => setIsFullscreenOpen(false)}
          onNext={goToNext}
          onPrevious={goToPrevious}
          onSelect={goToSlide}
        />
      )}
    </>
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
  const stylesByStatus: Record<string, string> = {
    "En preparacion": "bg-sky-500/10 text-sky-300 border-sky-500/30",
    "En desarrollo": "bg-amber-500/10 text-amber-300 border-amber-500/30",
    Completado: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-md border ${stylesByStatus[status] ?? "bg-muted/50 text-muted-foreground border-border"}`}
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
