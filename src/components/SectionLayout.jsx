const SectionLayout = ({ title, subTitle = "", propRef, children }) => {
  return (
    <section
      className="py-8 sm:py-24 scroll-m-[6.25rem] sm:scroll-m-[8.25rem]"
      ref={propRef}
    >
      <div className={`w-full`}>
        <h2 className="heading-md uppercase">{title}</h2>
        {subTitle && (
          <h3 className="heading-sm leading-snug mt-2">{subTitle}</h3>
        )}
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
