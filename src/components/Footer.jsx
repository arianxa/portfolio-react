import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <motion.footer
      className="py-8 bg-surface-container-low border-t border-outline-variant/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-center font-label text-xs uppercase tracking-widest text-on-surface-variant">
        {t("footer.made_with")}{" "}
        <FontAwesomeIcon icon={faHeart} className="text-[#6b4f3a] mx-1" />{" "}
        by Arantxa Ordoyo
      </p>
    </motion.footer>
  );
};