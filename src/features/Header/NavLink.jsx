import { useContext } from "react";
import { ToggleMenuContext } from "src/features/Header/ToggleMenuContext";

const NavLink = ({ label, section }) => {
  const toggleMenu = useContext(ToggleMenuContext);

  const handleLinkClick = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
    if (toggleMenu) {
      toggleMenu();
    }
  };

  return (
    <a
      className="py-3 sm:px-4 sm:py-0 hover:opacity-60 cursor-pointer transition-opacity inline-block"
      onClick={() => handleLinkClick(section)}
    >
      {label}
    </a>
  );
};

export default NavLink;
