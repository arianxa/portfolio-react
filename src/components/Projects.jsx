import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import img_cityPlanner from "../assets/img/img_cityplanner.png";
import img_APISIMPSON from "../assets/img/img_simpson1.png";
import img_retroGames from "../assets/img/img_retroGames.png";
import img_libro_CS from "../assets/img/img_libro_CS.png";
import img_libro_Android from "../assets/img/img_libro_Android.png";
import img_SantCugat_desktop from "../assets/img/img_SantCugat_desktop.png";
import ProjectModal from "./ProjectModal";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "API Simpson",
      year: "2026",
      description: t("projects.items.simpson.description"),
      fullDescription: t("projects.items.simpson.fullDescription"),
      tech: ["Vite", "React", "Bootstrap"],
      image: img_APISIMPSON,
      link: "https://api-simpson.vercel.app/",
      github: "https://github.com/4GeeksAcademy/fs-pt-127-API-Simpson-Arantxa-Ordoyo",
    },
    {
      title: "City Planner",
      year: "2024",
      description: t("projects.items.cityplanner.description"),
      fullDescription: t("projects.items.cityplanner.fullDescription"),
      tech: ["PHP", "SQL", "CSS/HTML"],
      image: img_cityPlanner,
      link: "https://cityplanner.page.gd/index.php",
      github: "https://github.com/arianxa/CityPlanner",
    },
    {
      title: "Retro Games",
      year: "2020",
      description: t("projects.items.retrogames.description"),
      fullDescription: t("projects.items.retrogames.fullDescription"),
      tech: ["PHP", "SQL", "HTML/CSS"],
      image: img_retroGames,
      link: "https://juego-de-lucha.vercel.app/",
      github: "https://github.com/arianxa/RetroFight-Guide",
    },
    {
      title: "Sant Cugat API C#",
      year: "2019",
      description: t("projects.items.santcugat.description"),
      fullDescription: t("projects.items.santcugat.fullDescription"),
      tech: ["C#", "ASP.NET", "Entity Framework"],
      image: img_SantCugat_desktop,
      github: "https://github.com/arianxa/Municipal-Sports-API",
    },
    {
      title: "Olor A Libro Android",
      year: "2018",
      description: t("projects.items.android.description"),
      fullDescription: t("projects.items.android.fullDescription"),
      tech: ["Java", "Android Studio", "XML"],
      image: img_libro_Android,
      github: "https://github.com/arianxa/OlorALibro-App",
    },
    {
      title: "Olor A Libro Escritorio",
      year: "2018",
      description: t("projects.items.desktop.description"),
      fullDescription: t("projects.items.desktop.fullDescription"),
      tech: ["C#", "XML", "JSON"],
      image: img_libro_CS,
      github: "https://github.com/arianxa/OlorALibro-Desktop",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">

      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
          {t("projects.label")}
        </span>
        <h2 className="font-headline italic text-5xl md:text-6xl text-primary mt-2 leading-tight">
          {showAll ? t("projects.title_all") : t("projects.title_featured")}
        </h2>
        <div className="w-16 h-px bg-secondary mt-6" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20"
        variants={container}
        initial="hidden"
  animate="visible"          
      >
        <AnimatePresence>
          {visibleProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariant}
              layout
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/20 hover:border-secondary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden bg-surface-container-high">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 right-3 bg-surface-container-lowest/90 font-label text-[10px] uppercase tracking-widest text-secondary px-3 py-1 rounded-full">
                  {project.year}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-headline italic text-2xl text-primary mb-2">{project.title}</h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] uppercase tracking-wider font-label rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 pt-4 border-t border-outline-variant/20">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-secondary font-label text-xs uppercase tracking-widest hover:gap-2.5 transition-all duration-200"
                    >
                      <span>{t("projects.demo")}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-on-surface-variant font-label text-xs uppercase tracking-widest hover:text-primary transition-colors duration-200"
                  >
                    <span className="material-symbols-outlined text-sm">code</span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex items-center gap-3 py-4 px-10 border border-outline-variant/40 text-primary rounded-lg font-label text-xs uppercase tracking-widest hover:bg-surface-container-low hover:border-secondary/40 transition-all duration-300"
        >
          {showAll ? (
            <><span className="material-symbols-outlined text-sm">expand_less</span>{t("projects.show_less")}</>
          ) : (
            <>{t("projects.show_all")}<span className="material-symbols-outlined text-sm">expand_more</span></>
          )}
        </button>
      </motion.div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};