import NavLink from "./NavLink";

const MobileMenu = ({ isMenuOpen, navLinks, overlayRef, handleMenuState }) => {
  return (
    isMenuOpen && (
      <div
        ref={overlayRef}
        className="h-full bg-black/50 z-10 fixed top-[3.75rem] left-0 w-full sm:hidden opacity-0 transition-opacity duration-300"
        onClick={handleMenuState}
      >
        <span className="h-0.5 w-full bg-gray-50 block"></span>
        <nav className="bg-white p-8" onClick={(e) => e.stopPropagation()}>
          <ul className="flex flex-col font-medium -mt-3 -mb-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink label={link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  );
};

export default MobileMenu;
