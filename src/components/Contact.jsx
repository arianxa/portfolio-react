import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID   = "service_78gb8sn";
const EMAILJS_TEMPLATE_ID  = "template_le7wr9a";
const EMAILJS_AUTOREPLY_ID = "template_g9d7zwf";
const EMAILJS_PUBLIC_KEY   = "mkAY6iaiwFs1b4ljN";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // 1. Envía el mensaje a ti
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      // 2. Envía el agradecimiento al remitente
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_AUTOREPLY_ID,
        {
          name:  formRef.current.querySelector('[name="name"]').value,
          email: formRef.current.querySelector('[name="email"]').value,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left column */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              Conversemos
            </span>
            <h2 className="font-headline italic text-5xl md:text-6xl text-primary mt-2 leading-tight">
              Conectemos
            </h2>
            <div className="w-16 h-px bg-secondary mt-3" />
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed pt-3">
              Me apasiona transformar ideas en productos digitales con alma. Ya sea para
              colaborar en un nuevo proyecto o simplemente charlar sobre código, mi buzón
              siempre está abierto.
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-label text-xs uppercase tracking-widest text-outline">
              Encuéntrame en
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://linkedin.com/in/arantxa-ordoyo" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors">
                <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-sm">link</span>
                </span>
                <span className="font-label text-sm tracking-wide">LinkedIn</span>
              </a>
              <a href="https://github.com/arianxa" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors">
                <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-sm">code</span>
                </span>
                <span className="font-label text-sm tracking-wide">GitHub</span>
              </a>
              <a href="mailto:pro.arantxa.ordoyo@gmail.com"
                className="group flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors">
                <span className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-secondary-container transition-colors">
                  <span className="material-symbols-outlined text-sm">mail</span>
                </span>
                <span className="font-label text-sm tracking-wide">pro.arantxa.ordoyo@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right column: form */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-low p-8 md:p-12 rounded-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-outline ml-1" htmlFor="name">
                    Nombre completo
                  </label>
                  <input id="name" name="name" type="text" placeholder="Tu nombre" required
                    className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-outline-variant/60 outline-none font-body text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="font-label text-[10px] uppercase tracking-widest text-outline ml-1" htmlFor="email">
                    Correo electrónico
                  </label>
                  <input id="email" name="email" type="email" placeholder="hola@ejemplo.com" required
                    className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-outline-variant/60 outline-none font-body text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase tracking-widest text-outline ml-1" htmlFor="message">
                  Tu mensaje
                </label>
                <textarea id="message" name="message" rows="6" required
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-4 focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary/30 transition-all placeholder:text-outline-variant/60 resize-none outline-none font-body text-sm" />
              </div>

              <button type="submit" disabled={status === "sending"}
                className="group relative w-full md:w-auto px-10 py-4 bg-primary text-on-primary rounded-lg font-label text-xs uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" ? "Enviando..." : "Enviar mensaje"}
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">send</span>
                </span>
                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
              </button>

              {status === "success" && (
                <div className="flex items-center gap-3 bg-[#eef0e8] border border-[#535845]/20 rounded-lg px-5 py-4">
                  <span className="material-symbols-outlined text-[#535845] text-lg">check_circle</span>
                  <p className="font-label text-xs uppercase tracking-widest text-[#535845]">
                    ¡Mensaje enviado! Te responderé lo antes posible.
                  </p>
                </div>
              )}
              {status === "error" && (
                <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-lg px-5 py-4">
                  <span className="material-symbols-outlined text-red-600 text-lg">error</span>
                  <p className="font-label text-xs uppercase tracking-widest text-red-600">
                    Hubo un error. Inténtalo de nuevo.
                  </p>
                </div>
              )}

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;