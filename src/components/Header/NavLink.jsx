const NavLink = ({ label, section }) => {
  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      className="py-3 sm:px-4 sm:py-0 hover:opacity-60 cursor-pointer transition-opacity inline-block"
      onClick={() => scrollToSection(section)}
    >
      {label}
    </a>
  );
};

export default NavLink;
