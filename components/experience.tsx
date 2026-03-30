const experiences = [
  {
    period: "2021 - Presente",
    title: "Estudiante de Ingenieria Informatica",
    company: "UCSE - Universidad Catolica de Santiago del Estero",
    description:
      "Cursando el 4to ano de la carrera con enfoque en desarrollo backend, bases de datos y arquitectura de software. Participacion activa en proyectos academicos y grupales.",
    skills: ["Algoritmos", "Estructuras de Datos", "POO", "Bases de Datos"],
  },
  {
    period: "2024",
    title: "Desarrollador Full Stack",
    company: "Proyecto SaaS - Sistema de Administracion",
    description:
      "Desarrollo de una plataforma SaaS para la gestion integral de gimnasios. Arquitectura hibrida con Java/Go en backend y React para modulos dinamicos.",
    skills: ["Java", "Go", "React", "PostgreSQL", "JWT"],
  },
  {
    period: "2023 - 2024",
    title: "Proyectos Academicos",
    company: "Trabajos Practicos Integradores",
    description:
      "Desarrollo de multiples proyectos academicos incluyendo sistemas de gestion logistica, aplicaciones fitness y juegos arcade, aplicando metodologias agiles y buenas practicas.",
    skills: ["C# .NET", "Go", "MongoDB", "Unit Testing"],
  },
];

const technologies = [
  { name: "C# .NET", level: 90 },
  { name: "Java", level: 90 },
  { name: "Go", level: 85 },
  { name: "SQL", level: 85 },
  { name: "Spring Boot", level: 75 },
  { name: "React", level: 70 },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-accent font-medium tracking-widest text-sm mb-4 uppercase">
            Trayectoria
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight">
            Experiencia & Formacion
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Timeline - Left side */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent" />

              {/* Timeline items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10 group">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-card border-2 border-accent transition-all duration-300 group-hover:scale-150 group-hover:bg-accent" />

                    {/* Content */}
                    <div className="bg-card/50 border border-border rounded-xl p-6 transition-all duration-300 hover:bg-card hover:border-accent/30">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full mb-4">
                        {exp.period}
                      </span>

                      <h3 className="text-xl font-semibold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-accent text-sm mb-4">{exp.company}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-border"
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
              <h3 className="text-xl font-semibold mb-8">
                Competencias Tecnicas
              </h3>

              <div className="space-y-6">
                {technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="text-xs text-accent">{tech.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional info card */}
              <div className="mt-12 p-6 bg-card/50 border border-border rounded-xl">
                <p className="text-muted-foreground text-sm mb-4">
                  Enfoque actual
                </p>
                <p className="text-foreground font-medium">
                  Desarrollo Backend & Arquitecturas Escalables
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Profundizando en patrones de diseno, microservicios y DevOps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
