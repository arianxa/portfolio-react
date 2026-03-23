import { motion } from "framer-motion";
import img_profile from "../assets/img/img_profile.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto"
    >
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">

        {/* Foto */}
        <motion.div
          className="relative flex justify-center order-2 md:order-1 md:w-1/2"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
        >
          <div className="relative w-56 md:w-64">
            <img
              src={img_profile}
              alt="Arantxa Ordoyo"
              className="w-full h-auto rounded-xl"
            />
            <motion.div
              className="absolute -bottom-4 -right-4 bg-surface-container-lowest px-5 py-3 shadow-lg rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4, ease: "easeOut" }}
            >
              <span className="font-label text-[10px] uppercase tracking-widest text-secondary block mb-0.5">
                Based in Spain
              </span>
              <p className="font-headline italic text-base leading-tight text-primary">
                Código con alma.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Texto */}
        <div className="md:w-1/2 order-1 md:order-2">
          <motion.span
            className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-5 block"
            initial="hidden" animate="visible" variants={fadeUp} custom={0}
          >
            Available for Work
          </motion.span>

          <motion.h1
            className="font-headline italic text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            Hola, soy <br />
            <span className="not-italic font-semibold text-on-surface">Arantxa</span>
          </motion.h1>

          <motion.p
            className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-10 flex flex-wrap gap-x-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            <span>Fullstack Developer</span>
            <span className="text-outline-variant">|</span>
            <span>React & JavaScript</span>
            <span className="text-outline-variant">|</span>
            <span>Design Lover</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
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
          </motion.div>
        </div>

      </div>
    </section>
  );
};