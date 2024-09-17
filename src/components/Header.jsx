import ProfileImg from "../assets/profile.jpg";

const Header = () => {
  const navLinks = ["About", "Projects", "Contact"];

  return (
    <div className="px-4 sm:px-6 md:px-10 h-[3.75rem] sm:h-[5.125rem] flex flex-row justify-between items-center">
      <div className="flex flex-row gap-2 sm:gap-3 items-center">
        <img src={ProfileImg} className="w-5 h-5 sm:w-7 sm:h-7 rounded-full" />
        <span className="font-bold tracking-widest sm:text-lg">cjkim.dev</span>
      </div>
      <nav className="hidden sm:block">
        <ul className="flex flex-row items-center font-bold">
          {navLinks.map((link, index) => {
            return (
              <li key={`${link}${index}`}>
                <NavLink label={link} />
              </li>
            );
          })}
          <button className="ml-4 px-6 h-12 bg-black text-white rounded-full hover:opacity-60 font-bold">
            Resume
          </button>
        </ul>
      </nav>
      <button className="px-4 sm:hidden font-bold">Menu</button>
    </div>
  );
};

const NavLink = ({ label }) => {
  return <a className="px-4 hover:opacity-60 cursor-pointer">{label}</a>;
};

export default Header;
