const NavLink = ({ label }) => {
  return (
    <a className="py-3 sm:px-4 sm:py-0 hover:opacity-60 cursor-pointer transition-opacity inline-block">
      {label}
    </a>
  );
};

export default NavLink;
