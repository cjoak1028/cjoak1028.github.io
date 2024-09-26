const ScrollToSection = ({
  propRef,
  backgroundColor = "bg-white",
  children,
}) => {
  return (
    <section
      className={`scroll-m-[8rem] sm:scroll-m-[10.25rem] lg:scroll-m-[11.25rem] mb-14 sm:mb-16 lg:mb-24 ${backgroundColor}`}
      ref={propRef}
    >
      {children}
    </section>
  );
};

export default ScrollToSection;
