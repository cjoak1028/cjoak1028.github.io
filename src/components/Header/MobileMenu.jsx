import NavLink from "./NavLink";
import Divider from "../Shared/Divider";

const MobileMenu = ({ isMenuOpen, navLinks, overlayRef, handleMenuState }) => {
  return (
    isMenuOpen && (
      <div
        ref={overlayRef}
        className="h-full bg-black/50 z-10 fixed top-[3.75rem] left-0 w-full sm:hidden opacity-0 transition-opacity duration-300"
        onClick={handleMenuState}
      >
        <Divider />
        <nav className="bg-white p-8" onClick={(e) => e.stopPropagation()}>
          <ul className="flex flex-col font-medium -mt-3 -mb-3">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink label={link} />
              </li>
            ))}
            <Divider />
            <li>
              <a className="py-3 sm:px-4 sm:py-0 hover:opacity-60 cursor-pointer transition-opacity inline-block group font-bold">
                Resume{" "}
                <span className="inline-block transition-transform transform group-hover:translate-x-2">
                  &rarr;
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  );
};

export default MobileMenu;
