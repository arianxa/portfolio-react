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
            {/* Icono decorativo */}
            <span className="material-symbols-outlined absolute -top-3 -right-2 text-5xl text-secondary/10 select-none">
              park
            </span>
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
 
            {/* Chips de skills rápidos */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["React", "JavaScript", "Python", "Flask", "SQL", "HTML/CSS"].map((s) => (
                <span
                  key={s}
                  className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant font-label text-[10px] uppercase tracking-wider rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
};

// import img_profile from "../assets/img/img_profile.jpeg";
 
// export const Aboutme = () => {
//   return (
//     <section id="aboutme" className="py-20 bg-fondo-medio overflow-hidden">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="flex justify-center lg:justify-start">
//             <div className="relative">
//               <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src={img_profile}
//                   alt="Arantxa Ordoyo"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
 
//           <div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-4 text-texto">
//               Sobre mí
//             </h2>
//             <div className="w-20 h-1 bg-boton mb-6" />
//             <p className="text-lg text-principal mb-6">
//               Soy una persona trabajadora, honesta y apasionada por la
//               tecnología. Siempre estoy lista para aprender nuevas habilidades y
//               enfrentar nuevos desafíos.
//             </p>
//             <p className="text-lg text-principal mb-6">
//               Llevo seis años en formación continua en programación y diseño
//               web, especializándome en React, JavaScript y HTML/CSS. Me encanta
//               crear experiencias digitales que sean tanto funcionales como
//               visualmente atractivas.
//             </p>
//             <p className="text-lg text-principal mb-8">
//               Soy amable, colaborativa y puedo trabajar tanto de forma
//               independiente como en equipo. Me motiva seguir creciendo
//               profesionalmente y contribuir en proyectos innovadores.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };








// import ScrollReveal from "./ScrollReveal";

// const Aboutme = () => {
//   return (
//     <section id="about" className="py-24 md:py-32 px-6">
//       <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12 md:gap-16 items-center">
//         {/* Photo placeholder */}
//         <ScrollReveal className="md:col-span-2">
//           <div className="aspect-[4/5] rounded-2xl bg-secondary/80 overflow-hidden shadow-lg shadow-primary/5 flex items-end justify-center">
//             <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
//               <div className="text-center space-y-2">
//                 <div className="w-20 h-20 rounded-full bg-muted mx-auto flex items-center justify-center text-3xl font-serif text-muted-foreground/50">
//                   ?
//                 </div>
//                 <p className="text-xs font-sans">Tu foto aquí</p>
//               </div>
//             </div>
//           </div>
//         </ScrollReveal>

//         {/* Text */}
//         <div className="md:col-span-3 space-y-6">
//           <ScrollReveal>
//             <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground font-sans">
//               Sobre mí
//             </p>
//           </ScrollReveal>

//           <ScrollReveal delay={80}>
//             <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground leading-snug tracking-tight text-balance">
//               Diseño con propósito,<br />código con cariño
//             </h2>
//           </ScrollReveal>

//           <ScrollReveal delay={160}>
//             <div className="space-y-4 text-muted-foreground leading-relaxed font-sans">
//               <p>
//                 Soy desarrolladora fullstack con una fuerte pasión por el diseño.
//                 Me encanta construir interfaces que no solo funcionen bien, sino que
//                 también se sientan <em>bien</em> — donde cada píxel tiene su razón de ser.
//               </p>
//               <p>
//                 Mi enfoque combina la solidez del backend con la sensibilidad del
//                 frontend. Creo en el código limpio, las buenas prácticas y la atención
//                 obsesiva al detalle que convierte un buen producto en una experiencia
//                 memorable.
//               </p>
//               <p>
//                 Fuera de la pantalla, encuentro inspiración en la naturaleza y la
//                 tranquilidad. Esa calma se refleja en mi trabajo: interfaces limpias,
//                 funcionales y con carácter.
//               </p>
//             </div>
//           </ScrollReveal>
//         </div>
//       </div>
//     </section>
//   );
// };

// export {Aboutme};
