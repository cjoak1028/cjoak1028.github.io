import LogoImage from "../assets/logo-profile.jpg";

const Header = () => {
  const navLinks = ["About", "Projects", "Contact"];

  const NavLink = ({ label }) => {
    return (
      <a className="px-4 hover:opacity-60 cursor-pointer transition-opacity">
        {label}
      </a>
    );
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 h-[3.75rem] sm:h-[5.125rem] flex flex-row justify-between items-center bg-white">
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
      <button className="px-4 sm:hidden font-medium hover:opacity-60 transition-opacity">
        Menu
      </button>
    </div>
  );
};

export default Header;
