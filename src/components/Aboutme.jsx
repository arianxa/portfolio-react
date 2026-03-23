import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Aboutme = () => {
  return (
    <section id="aboutme" className="py-24 bg-surface-container-low">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          {/* Título izquierda */}
          <motion.div
            className="md:col-span-4 space-y-3 md:pt-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              Sobre mí
            </span>
            <h2 className="font-headline italic text-4xl md:text-5xl text-primary leading-tight">
              Mi esencia
            </h2>
            <div className="w-12 h-px bg-secondary mt-4" />
          </motion.div>

          {/* Contenido derecha */}
          <motion.div
            className="md:col-span-8 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: "easeOut" } },
            }}
          >
      
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
          </motion.div>

        </div>
      </div>
    </section>
  );
};