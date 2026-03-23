export const Aboutme = () => {
  return (
    <section id="aboutme" className="py-24 bg-surface-container-low">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
 
          {/* Título izquierda */}
          <div className="md:col-span-4 space-y-3 md:pt-2">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              Sobre mí
            </span>
            <h2 className="font-headline italic text-4xl md:text-5xl text-primary leading-tight">
              Mi esencia
            </h2>
            {/* Línea decorativa */}
            <div className="w-12 h-px bg-secondary mt-4" />
          </div>
 
          {/* Contenido derecha */}
          <div className="md:col-span-8 relative">
         
            <div className="space-y-5 text-on-surface-variant leading-relaxed font-body text-base md:text-lg">
              <p>
                Soy una persona trabajadora, honesta y apasionada por la
                tecnología. Siempre estoy lista para aprender nuevas
                habilidades y enfrentar nuevos desafíos.
              </p>
              <p>
                Llevo seis años en formación continua en programación y diseño
                web, especializándome en React, JavaScript y HTML/CSS. Me
                encanta crear experiencias digitales que sean tanto funcionales
                como visualmente atractivas.
              </p>
              <p>
                Soy amable, colaborativa y puedo trabajar tanto de forma
                independiente como en equipo. Me motiva seguir creciendo
                profesionalmente y contribuir en proyectos innovadores.
              </p>
            </div>
 
          </div>
 
        </div>
      </div>
    </section>
  );
};

