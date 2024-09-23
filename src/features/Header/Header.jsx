import { useState, useRef, useEffect } from "react";
import { ToggleMenuContext } from "./ToggleMenuContext";
import NavLink from "src/features/Header/NavLink";
import HamburgerButton from "src/features/Header/HamburgerButton";
import MobileMenu from "src/features/Header/MobileMenu";
import Banner from "src/features/Header/Banner";
import Logo from "src/assets/logos/logo.svg";

const Header = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const overlayRef = useRef(null);

  // Close menu (if open) when screen is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && isMenuOpen) {
        setIsMenuOpen(false);
        setIsButtonOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsButtonOpen((prevState) => !prevState);
    if (isMenuOpen) {
      overlayRef.current.classList.add("opacity-0"); // Start closing animation
      setTimeout(() => {
        setIsMenuOpen(false); // Close menu after animation completes
      }, 300);
    } else {
      setIsMenuOpen(true); // Open the menu immediately
      requestAnimationFrame(() => {
        if (overlayRef.current) {
          overlayRef.current.classList.remove("opacity-0"); // Start opening animation
        }
      }); // Delay to ensure it runs after the state change
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleLogoClick = () => {
    scrollToTop();
    if (isMenuOpen) {
      toggleMenu();
    }
  };

  return (
    <div className="sticky top-0 z-10">
      <div className="px-6 md:px-10 h-[3.75rem] sm:h-[5.125rem] flex flex-row justify-between items-center bg-white">
        <div
          className="flex flex-row gap-1 sm:gap-2 items-center hover:opacity-60 cursor-pointer transition-opacity"
          onClick={handleLogoClick}
        >
          <img src={Logo} className="h-5 sm:h-7 rounded-full" />
          <span className="font-semibold tracking-widest sm:text-lg">
            cjkim.dev
          </span>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex flex-row items-center font-medium">
            {Object.entries(navLinks).map(([linkLabel, linkSectionRef]) => {
              return (
                <li key={`${linkLabel}`}>
                  <NavLink label={linkLabel} section={linkSectionRef} />
                </li>
              );
            })}
            <a
              className="ml-4 flex items-center primary-button"
              target="_blank"
              rel="noopener noreferrer"
              href="/resume.pdf"
            >
              Resume
            </a>
          </ul>
        </nav>
        <HamburgerButton onClick={toggleMenu} isOpen={isButtonOpen} />
      </div>
      <Banner />

      <ToggleMenuContext.Provider value={toggleMenu}>
        <MobileMenu
          isMenuOpen={isMenuOpen}
          navLinks={navLinks}
          overlayRef={overlayRef}
        />
      </ToggleMenuContext.Provider>
    </div>
  );
};

export default Header;
