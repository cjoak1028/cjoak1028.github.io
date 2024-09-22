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
            {Object.entries(navLinks).map(([linkLabel, linkSectionRef]) => (
              <li key={linkLabel}>
                <NavLink label={linkLabel} section={linkSectionRef} />
              </li>
            ))}
            <Divider />
            <li>
              <a
                className="py-3 sm:px-4 sm:py-0 hover:opacity-60 cursor-pointer transition-opacity inline-block group"
                target="_blank"
                rel="noopener noreferrer"
                href="/resume.pdf"
              >
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
