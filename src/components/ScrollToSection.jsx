const ScrollToSection = ({ propRef, children }) => {
  return (
    <section
      className="py-12 sm:py-24 scroll-m-[6.25rem] sm:scroll-m-[8.25rem] px-6 flex justify-center items-center"
      ref={propRef}
    >
      {children}
    </section>
  );
};

export default ScrollToSection;
