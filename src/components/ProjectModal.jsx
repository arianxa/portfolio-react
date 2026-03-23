import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";

const ProjectModal = ({ project, onClose }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!project) return;
    const handleEscape = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <motion.div
            className="relative bg-surface-container-lowest rounded-2xl max-w-3xl w-full shadow-2xl border border-outline-variant/20 max-h-[90vh] flex flex-col"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-surface-container text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all duration-200"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            {/* Imagen */}
            <div className="relative overflow-hidden rounded-t-2xl flex-shrink-0">
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <span className="absolute top-3 right-12 bg-surface-container-lowest/90 font-label text-[10px] uppercase tracking-widest text-secondary px-3 py-1 rounded-full">
                {project.year}
              </span>
            </div>

            {/* Contenido scrollable */}
            <div className="overflow-y-auto p-8">
              <h2 className="font-headline italic text-3xl text-primary mb-4">{project.title}</h2>
              <p className="font-body text-on-surface-variant leading-relaxed text-base mb-6">{project.fullDescription}</p>

              <h3 className="font-label text-xs uppercase tracking-[0.2em] text-secondary font-bold mb-3">
                {t("projects.tech_label")}
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span key={tech}
                    className="px-4 py-2 bg-[#ede8e3] text-[#4a3326] font-label text-xs uppercase tracking-wider rounded-full hover:bg-[#c0aa9a] transition-all duration-200 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-outline-variant/20">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noreferrer"
                    className="flex-1 text-center px-6 py-3 bg-primary text-on-primary font-label text-xs uppercase tracking-widest rounded-lg hover:opacity-85 transition-opacity duration-300 shadow-md">
                    {t("projects.view_demo")}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer"
                  className="flex-1 text-center px-6 py-3 bg-[#6b4f3a] text-[#f5efe9] font-label text-xs uppercase tracking-widest rounded-lg hover:opacity-85 transition-opacity duration-300">
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  {t("projects.view_github")}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;