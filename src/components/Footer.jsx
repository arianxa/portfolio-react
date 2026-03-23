import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
  <footer className="footer mt-auto py-6 text-center bg-fondo-medio">
    <p className="text-texto">
      Made with{" "}
      <FontAwesomeIcon icon={faHeart} className="text-boton mx-1" /> by Arantxa
      Ordoyo
    </p>
  </footer>
);
