import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const navLinks = [
  { href: "#about", label: "Sobre Mi" },
  { href: "#experience", label: "Experiencia" },
  { href: "#projects", label: "Proyectos" },
  { href: "#contact", label: "Contacto" },
];

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Logo & description */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-serif text-3xl font-bold tracking-tight text-accent"
            >
              NG
            </Link>
            <p className="text-muted-foreground text-sm mt-3 max-w-xs mx-auto md:mx-0">
              Software Engineer enfocado en crear soluciones backend escalables
              y de alto rendimiento.
            </p>
          </div>

          {/* Navigation */}
          <nav className="text-center">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card/50 transition-all duration-300 hover:border-accent hover:bg-accent"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-muted-foreground transition-colors group-hover:text-accent-foreground" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            {currentYear} Nicolas Gauchat. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Disenado y desarrollado con pasion
          </p>
        </div>
      </div>
    </footer>
  );
}
