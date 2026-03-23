import { useState } from "react";
import img_cityPlanner from "../assets/img/img_cityplanner.png";
import img_APISIMPSON from "../assets/img/img_simpson1.png";
import img_retroGames from "../assets/img/img_retroGames.png";
import img_libro_CS from "../assets/img/img_libro_CS.png";
import img_libro_Android from "../assets/img/img_libro_Android.png";
import img_SantCugat_desktop from "../assets/img/img_SantCugat_desktop.png";
import ProjectModal from "./ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "API Simpson",
      year: "2026",
      description: "Explorador dinámico de personajes con consumo de API REST y filtrado en tiempo real.",
      fullDescription: "Aplicación web interactiva que consume la API pública de Los Simpson para mostrar información detallada sobre personajes, ubicaciones y episodios de la serie. Implementa un sistema de búsqueda en tiempo real con filtrado instantáneo, permitiendo a los usuarios explorar el universo Simpson de forma intuitiva.",
      tech: ["Vite", "React", "Bootstrap"],
      image: img_APISIMPSON,
      link: "https://api-simpson.vercel.app/",
      github: "https://github.com/4GeeksAcademy/fs-pt-127-API-Simpson-Arantxa-Ordoyo",
    },
    {
      title: "City Planner",
      year: "2024",
      description: "Plataforma integral para la búsqueda y gestión de eventos culturales y musicales.",
      fullDescription: "Plataforma web fullstack diseñada para centralizar la búsqueda y gestión de eventos culturales y musicales en la ciudad. Incluye autenticación de usuarios, filtros avanzados y una interfaz responsive.",
      tech: ["PHP", "SQL", "CSS/HTML"],
      image: img_cityPlanner,
      link: "https://cityplanner.page.gd/index.php",
      github: "https://github.com/arianxa/CityPlanner",
    },
    {
      title: "Retro Games",
      year: "2020",
      description: "Guía interactiva y catálogo de juegos arcade clásicos con panel de administración.",
      fullDescription: "Catálogo web dedicado a preservar y documentar la historia de los videojuegos arcade clásicos. Incluye un completo panel CRUD y un diseño retro que rinde homenaje a las recreativas de los años 80 y 90.",
      tech: ["PHP", "SQL", "HTML/CSS"],
      image: img_retroGames,
      link: "https://juego-de-lucha.vercel.app/",
      github: "https://github.com/arianxa/RetroFight-Guide",
    },
    {
      title: "Sant Cugat API C#",
      year: "2019",
      description: "Servicio backend para la gestión de entidades deportivas y reserva de instalaciones.",
      fullDescription: "API REST en C# con ASP.NET Core para gestionar el ecosistema deportivo municipal. Implementa Entity Framework, autenticación JWT y arquitectura en capas.",
      tech: ["C#", "ASP.NET", "Entity Framework"],
      image: img_SantCugat_desktop,
      github: "https://github.com/arianxa/Municipal-Sports-API",
    },
    {
      title: "Olor A Libro Android",
      year: "2018",
      description: "Aplicación móvil para la gestión de actividades y fidelización en bibliotecas.",
      fullDescription: "App Android para conectar usuarios con la red de bibliotecas municipales. Incluye gamificación, notificaciones push y sincronización con el sistema central.",
      tech: ["Java", "Android Studio", "XML"],
      image: img_libro_Android,
      github: "https://github.com/arianxa/OlorALibro-App",
    },
    {
      title: "Olor A Libro Escritorio",
      year: "2018",
      description: "Gestor administrativo de escritorio para la red de bibliotecas y eventos.",
      fullDescription: "Aplicación de escritorio en C# para la administración completa de bibliotecas municipales. Incluye informes estadísticos, gestión de multas y sincronización entre sedes.",
      tech: ["C#", "XML", "JSON"],
      image: img_libro_CS,
      github: "https://github.com/arianxa/OlorALibro-Desktop",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
          Portafolio
        </span>
        <h2 className="font-headline italic text-5xl md:text-6xl text-primary mt-2 leading-tight">
          {showAll ? "Todos mis proyectos" : "Proyectos destacados"}
        </h2>
        <div className="w-16 h-px bg-secondary mt-6" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
        {visibleProjects.map((project) => (
          <div
            key={project.title}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/20 hover:border-secondary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Imagen */}
            <div className="relative h-52 overflow-hidden bg-surface-container-high">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute top-3 right-3 bg-surface-container-lowest/90 font-label text-[10px] uppercase tracking-widest text-secondary px-3 py-1 rounded-full">
                {project.year}
              </span>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="font-headline italic text-2xl text-primary mb-2">
                {project.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] uppercase tracking-wider font-label rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-5 pt-4 border-t border-outline-variant/20">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-secondary font-label text-xs uppercase tracking-widest hover:gap-2.5 transition-all duration-200"
                  >
                    <span>Demo</span>
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
          </div>
        ))}
      </div>

      {/* Ver más / Ver menos */}
      <div className="text-center mt-16">
        <button
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex items-center gap-3 py-4 px-10 border border-outline-variant/40 text-primary rounded-lg font-label text-xs uppercase tracking-widest hover:bg-surface-container-low hover:border-secondary/40 transition-all duration-300"
        >
          {showAll ? (
            <>
              <span className="material-symbols-outlined text-sm">expand_less</span>
              Ver menos
            </>
          ) : (
            <>
              Ver todos los proyectos
              <span className="material-symbols-outlined text-sm">expand_more</span>
            </>
          )}
        </button>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};