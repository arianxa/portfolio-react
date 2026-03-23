import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "brush",
      bg: "bg-[#eef0e8]",
      accent: "text-[#535845]",
      pill: "bg-[#d8dccf] text-[#3a3d30]",
      pillHover: "hover:bg-[#c4c9b1]",
      items: ["React", "JavaScript", "HTML/CSS", "Tailwind", "Vite"],
    },
    {
      title: "Backend",
      icon: "terminal",
      bg: "bg-[#ede8e3]",
      accent: "text-[#6b4f3a]",
      pill: "bg-[#d4c4b8] text-[#4a3326]",
      pillHover: "hover:bg-[#c0aa9a]",
      items: ["Node.js", "Python", "PHP", "MySQL", "Java", "C#"],
    },
    {
      title: "Herramientas",
      icon: "build",
      bg: "bg-[#f0eeea]",
      accent: "text-[#46473f]",
      pill: "bg-[#d8d6d2] text-[#2e2f2a]",
      pillHover: "hover:bg-[#c4c2be]",
      items: ["Git", "GitHub", "Figma", "Android Studio", "ASP.NET"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-surface-container-low">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
            Tecnologías
          </span>
          <h2 className="font-headline italic text-5xl md:text-6xl text-primary mt-2 leading-tight">
            Habilidades
          </h2>
          <div className="w-16 h-px bg-secondary mt-3" />
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariant}
              className={`rounded-2xl p-10 border border-black/10 ${group.bg} hover:-translate-y-1 transition-transform duration-300 flex flex-col gap-8`}
            >
              <div className="flex items-center gap-3">
                <span className={`material-symbols-outlined text-xl ${group.accent}`}>
                  {group.icon}
                </span>
                <h3 className={`font-headline italic text-2xl ${group.accent}`}>
                  {group.title}
                </h3>
              </div>

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
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};