const HamburgerButton = ({ onClick, isOpen }) => {
  return (
    <button
      className="inline-flex sm:hidden w-6 h-6 text-slate-800 bg-white text-center items-center justify-center rounded transition"
      onClick={onClick}
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-4 h-4 fill-current pointer-events-none"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
            isOpen
              ? "translate-x-0 translate-y-0 rotate-[315deg]"
              : "-translate-y-[5px] translate-x-[7px]"
          }`}
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
        <rect
          className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] ${
            isOpen && "rotate-45"
          }`}
          y="7"
          width="16"
          height="2"
          rx="1"
        ></rect>
        <rect
          className={`origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] ${
            isOpen ? "translate-y-0 rotate-[135deg]" : "translate-y-[5px]"
          }`}
          y="7"
          width="9"
          height="2"
          rx="1"
        ></rect>
      </svg>
    </button>
  );
};

export default HamburgerButton;
