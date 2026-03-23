import img_profile from "../assets/img/img_profile.jpeg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">

        {/* Foto */}
        <div className="relative flex justify-center order-2 md:order-1 md:w-1/2">
          <div className="relative w-56 md:w-64">
            {/* Imagen */}
            <img
              src={img_profile}
              alt="Arantxa Ordoyo"
              className="w-full h-auto rounded-xl"
            />
            {/* Tarjeta flotante */}
            <div className="absolute -bottom-4 -right-4 bg-surface-container-lowest px-5 py-3 shadow-lg rounded-xl">
              <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-0.5">
                Based in Spain
              </span>
              <p className="font-headline italic text-base leading-tight text-primary">
                Código con alma.
              </p>
            </div>
          </div>
        </div>

        {/* Texto */}
        <div className="md:w-1/2 order-1 md:order-2">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-5 block">
            Available for Work
          </span>
          <h1 className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6">
            Hola, soy <br />
            <span className="not-italic font-semibold text-on-surface">Arantxa</span>
          </h1>
          <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-10 flex flex-wrap gap-x-3">
            <span>Fullstack Developer</span>
            <span className="text-outline-variant">|</span>
            <span>React & JavaScript</span>
            <span className="text-outline-variant">|</span>
            <span>Design Lover</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="bg-primary text-on-primary px-8 py-3.5 rounded-lg font-label uppercase text-xs tracking-widest hover:opacity-85 transition-opacity duration-300 shadow-md text-center"
            >
              Ver mis proyectos
            </a>
            <a
              href="#contact"
              className="bg-[#6b4f3a] text-[#f5efe9] px-8 py-3.5 rounded-lg font-label uppercase text-xs tracking-widest hover:opacity-85 transition-opacity duration-300 text-center"
            >
              Hablemos
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};