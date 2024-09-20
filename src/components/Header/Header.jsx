import { useState, useRef } from "react";
import NavLink from "./NavLink";
import HamburgerButton from "./HamburgerButton";
import MobileMenu from "./MobileMenu";
import LogoImage from "../../assets/logo-profile.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isButtonOpen, setIsButtonOpen] = useState(false);
  const navLinks = ["About", "Projects", "Contact"];
  const overlayRef = useRef(null);

  const handleMenuState = () => {
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

  return (
    <div>
      <div className="px-6 md:px-10 h-[3.75rem] sm:h-[5.125rem] flex flex-row justify-between items-center bg-white">
        <div className="flex flex-row gap-2 sm:gap-3 items-center">
          {/* <img src={LogoImage} className="w-5 h-5 sm:w-7 sm:h-7 rounded-full" /> */}
          <span className="font-semibold tracking-widest sm:text-lg">
            cjkim.dev
          </span>
        </div>
        <nav className="hidden sm:block">
          <ul className="flex flex-row items-center font-medium">
            {navLinks.map((link, index) => {
              return (
                <li key={`${link}${index}`}>
                  <NavLink label={link} />
                </li>
              );
            })}
            <a className="ml-4 flex items-center primary-button">Resume</a>
          </ul>
        </nav>
        <HamburgerButton
          onClick={handleMenuState}
          isButtonOpen={isButtonOpen}
        />
      </div>
      <MobileMenu
        isMenuOpen={isMenuOpen}
        navLinks={navLinks}
        overlayRef={overlayRef}
        handleMenuState={handleMenuState}
      />
    </div>
  );
};

export default Header;
