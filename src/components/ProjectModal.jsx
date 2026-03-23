import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faXmark } from "@fortawesome/free-solid-svg-icons";
 
const ProjectModal = ({ project, onClose }) => {
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
 
  if (!project) return null;
 
  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="relative bg-fondo-claro rounded-2xl max-w-3xl w-full shadow-2xl border-4 border-borde"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 text-subtitulo hover:text-titulo text-xl font-bold transition-colors z-10 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center hover:bg-boton hover:text-white"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
 
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover"
          />
        </div>
 
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-3xl font-bold text-titulo">{project.title}</h2>
            <span className="text-subtitulo text-lg font-medium bg-fondo-medio px-4 py-1.5 rounded-full">
              {project.year}
            </span>
          </div>
 
          <p className="text-texto mb-6 leading-relaxed text-lg">
            {project.fullDescription}
          </p>
 
          <h3 className="font-bold text-lg mb-3 text-titulo">Tecnologias utilizadas:</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-fondo-medio text-texto text-sm font-semibold rounded-full hover:bg-boton hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
 
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer flex-1 text-center px-6 py-3 bg-boton text-white font-semibold rounded-lg hover:bg-boton-hover transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver Demo
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-lg translate-y-[1px]" />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer flex-1 text-center px-6 py-3 border-2 border-fondo-medio text-titulo font-semibold rounded-lg hover:bg-fondo-medio transition-all duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2 text-lg" />
              Ver en GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ProjectModal;