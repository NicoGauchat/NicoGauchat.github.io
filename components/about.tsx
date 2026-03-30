import Image from "next/image";
import { Server, Network, Database } from "lucide-react";


const skills = [
  {
    icon: Server,
    title: "Desarrollo Backend",
    description:
      "Construccion de logica de servidor eficiente utilizando C# (.NET), Java y Go. Implementacion de patrones de diseño y arquitecturas limpias.",
  },
  {
    icon: Network,
    title: "APIs RESTful",
    description:
      "Diseño y desarrollo de APIs escalables para integrar sistemas. Experiencia conectando servicios y asegurando la integridad de los datos.",
  },
  {
    icon: Database,
    title: "Gestion de Datos",
    description:
      "Manejo de bases de datos relacionales (SQL) y conocimientos en bases no relacionales. Optimizacion de consultas y modelado de datos.",
  },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-accent font-medium tracking-widest text-sm mb-4 uppercase">
            Sobre Mi
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight">
            Ingeniero en Formacion
          </h2>
        </div>

        {/* Split grid - Image and Text */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Image side */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-full h-full border border-accent/30 rounded-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

              {/* Image container */}
              <div className="relative w-80 h-[420px] rounded-2xl overflow-hidden bg-card border border-border">
                <Image
                  src="/foto/Yo.jpeg"
                  alt="Nicolas Gauchat"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -right-8 bottom-12 bg-card border border-border rounded-xl p-4 shadow-xl">
                <p className="text-accent font-serif text-2xl font-bold">4to</p>
                <p className="text-muted-foreground text-xs">Año Ing.</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="text-center lg:text-left">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-6">
              Desarrollador & Profesional en Formacion
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy estudiante de 4to año de{" "}
                <span className="text-foreground font-medium">
                  Ingenieria Informatica
                </span>{" "}
                en la Universidad Catolica de Santiago del Estero (sede Rafaela,
                Santa Fe), apasionado por transformar problemas complejos en
                soluciones de software eficientes.
              </p>

              <p>
                Me defino como un profesional{" "}
                <span className="text-foreground font-medium">
                  autodidacta, disciplinado y proactivo
                </span>
                , con una gran capacidad de adaptacion y trabajo en equipo.
              </p>

              <p>
                Cuento con una solida base academica orientada al{" "}
                <span className="text-foreground font-medium">
                  Desarrollo Backend
                </span>{" "}
                y la ciencia de datos. Me motiva el aprendizaje continuo y busco
                oportunidades para aplicar mis habilidades en proyectos
                desafiantes.
              </p>
            </div>

            <a
              href="/cv-nicolas-gauchat.pdf"
              download
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/25"
            >
              Descargar CV
            </a>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transition-all duration-500 hover:bg-card hover:border-accent/30 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                <skill.icon className="w-6 h-6 text-accent transition-colors group-hover:text-accent-foreground" />
              </div>

              <h4 className="text-xl font-semibold mb-4">{skill.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
