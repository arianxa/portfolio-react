import { useState, useEffect } from "react";

const navigation = [
  { name: "Home",        href: "#hero",     id: "hero" },
  { name: "Sobre mí",    href: "#aboutme",  id: "aboutme" },
  { name: "Proyectos",   href: "#projects", id: "projects" },
  { name: "Habilidades", href: "#skills",   id: "skills" },
  { name: "Contacto",    href: "#contact",  id: "contact" },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigation
      .map((item) => ({ id: item.id, element: document.getElementById(item.id) }))
      .filter((s) => s.element);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10) {
        setActiveSection("contact");
        return;
      }
      let current = "hero";
      for (const section of sections) {
        if (section.element.offsetTop <= scrollPosition) current = section.id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#fbf9f5] transition-all duration-500">
      <div className="flex justify-between items-center px-8 py-5 w-full max-w-7xl mx-auto">

        {/* Logo — iniciales */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="font-headline italic text-on-primary text-base leading-none">AO</span>
          </div>
          <span className="font-label text-xs uppercase tracking-widest text-primary/60 hidden sm:block">
            Arantxa Ordoyo
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={
                activeSection === item.id
                  ? "font-label uppercase tracking-widest text-xs text-primary font-semibold border-b-2 border-secondary pb-0.5 transition-all duration-300"
                  : "font-label uppercase tracking-widest text-xs text-primary/50 hover:text-primary transition-all duration-300"
              }
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hamburger — solo móvil */}
  <button
  className="md:hidden"
  onClick={() => setMenuOpen((o) => !o)}
>
  <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-105 transition-transform">
    {menuOpen ? "close" : "menu"}
  </span>
</button>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-outline-variant/30" />

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#fbf9f5] px-8 pb-6 pt-2 flex flex-col gap-4">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={
                activeSection === item.id
                  ? "font-label uppercase tracking-widest text-sm text-primary font-semibold border-l-2 border-secondary pl-3"
                  : "font-label uppercase tracking-widest text-sm text-primary/50 hover:text-primary pl-3"
              }
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};