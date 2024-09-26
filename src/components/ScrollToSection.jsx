const ScrollToSection = ({
  propRef,
  backgroundColor = "bg-white",
  children,
}) => {
  return (
    <section
      className={`py-12 md:py-24 scroll-m-[6.25rem] sm:scroll-m-[8.25rem] px-6 md:px-12 ${backgroundColor}`}
      ref={propRef}
    >
      {children}
    </section>
  );
};

export default ScrollToSection;
