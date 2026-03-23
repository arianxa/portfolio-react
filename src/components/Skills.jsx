export const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "brush",
      bg: "bg-[#eef0e8]",
      accent: "text-[#535845]",
      pill: "bg-[#d8dccf] text-[#3a3d30]",
      pillHover: "hover:bg-[#c4c9b1]",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind"],
    },
    {
      title: "Backend",
      icon: "terminal",
      bg: "bg-[#ede8e3]",        // marrón muy suave
      accent: "text-[#6b4f3a]",
      pill: "bg-[#d4c4b8] text-[#4a3326]",
      pillHover: "hover:bg-[#c0aa9a]",
      items: ["Node.js", "Python", "Flask", "MySQL", "Java"],
    },
    {
      title: "Herramientas",
      icon: "build",
      bg: "bg-[#f0eeea]",        // gris cálido
      accent: "text-[#46473f]",
      pill: "bg-[#d8d6d2] text-[#2e2f2a]",
      pillHover: "hover:bg-[#c4c2be]",
      items: ["Git", "GitHub", "Figma", "Android Studio"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-surface-container-low">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
            Tecnologías
          </span>
          <h2 className="font-headline italic text-5xl md:text-6xl text-primary mt-2 leading-tight">
            Habilidades
          </h2>
          <div className="w-16 h-px bg-secondary mt-3" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-2xl p-10 border border-black/10 ${group.bg} transition-all duration-300 hover:-translate-y-1 flex flex-col gap-8`}
            >
              {/* Cabecera */}
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-xl ${group.accent}`}>
                  {group.icon}
                </span>
                <h3 className={`font-headline italic text-2xl ${group.accent}`}>
                  {group.title}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full font-label text-xs uppercase tracking-wider transition-all duration-200 cursor-default ${group.pill} ${group.pillHover}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};