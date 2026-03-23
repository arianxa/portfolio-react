import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Aboutme = () => {
  const { t } = useTranslation();

  return (
    <section id="aboutme" className="py-24 bg-surface-container-low">
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

          <motion.div
            className="md:col-span-4 space-y-3 md:pt-2"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
          >
            <span className="font-label text-xs uppercase tracking-[0.3em] text-secondary font-bold">
              {t("about.label")}
            </span>
            <h2 className="font-headline italic text-4xl md:text-5xl text-primary leading-tight">
              {t("about.title")}
            </h2>
            <div className="w-12 h-px bg-secondary mt-4" />
          </motion.div>

          <motion.div
            className="md:col-span-8 relative"
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.15, ease: "easeOut" } },
            }}
          >
            <span className="material-symbols-outlined absolute -top-3 -right-2 text-5xl text-secondary/10 select-none">
              park
            </span>
            <div className="space-y-5 text-on-surface-variant leading-relaxed font-body text-base md:text-lg">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};