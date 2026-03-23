import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
  <footer className="py-8 bg-surface-container-low border-t border-outline-variant/20">
    <p className="text-center font-label text-xs uppercase tracking-widest text-on-surface-variant">
      Made with{" "}
      <FontAwesomeIcon icon={faHeart} className="text-[#6b4f3a] mx-1" />{" "}
      by Arantxa Ordoyo
    </p>
  </footer>
);