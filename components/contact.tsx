"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgpwpvg";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nicogauchat2@gmail.com",
    href: null,
  },
  {
    icon: Phone,
    label: "Telefono",
    value: "+54 15 3492596566",
    href: "tel:+543492596566",
  },
  {
    icon: MapPin,
    label: "Ubicacion",
    value: "Rafaela, Santa Fe, Argentina",
    href: null,
  },
];

export function Contact() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setFeedbackMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el formulario.");
      }

      form.reset();
      setFeedbackMessage("Mensaje enviado correctamente por Formspree.");
    } catch {
      setFeedbackMessage(
        "No se pudo enviar el mensaje. Revisa la configuracion de Formspree e intenta de nuevo."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-accent font-medium tracking-widest text-sm mb-4 uppercase">
            Contacto
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Trabajemos Juntos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estoy disponible para discutir nuevas oportunidades laborales y
            colaboraciones. No dudes en contactarme.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact info - Left side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Informacion de Contacto
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-foreground font-medium transition-colors hover:text-accent"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability status */}
            <div className="p-6 bg-card/50 border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-foreground font-medium">
                  Disponible para oportunidades
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Actualmente buscando posiciones de desarrollo backend y
                oportunidades de pasantia.
              </p>
            </div>
          </div>

          {/* Contact form - Right side */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                  placeholder="Asunto del mensaje"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                  placeholder="Cuentame sobre tu proyecto o propuesta..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-medium rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>

              <p className="mt-3 text-sm text-muted-foreground">
                Formspree plan gratis: hasta 50 envios por mes.
              </p>

              {feedbackMessage && (
                <p className="mt-2 text-sm text-accent">
                  {feedbackMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
