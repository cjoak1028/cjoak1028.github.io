import AboutMobile from "src/assets/photos/about-mobile.jpg";
import AboutDesktop from "src/assets/photos/about-desktop.jpg";
import ScrollToSection from "src/components/ScrollToSection";

const About = ({ propRef }) => {
  return (
    <ScrollToSection propRef={propRef}>
      <div className="w-full max-w-[32.5rem] md:max-w-2xl">
        <div className="flex flex-col gap-3 sm:gap-5 md:flex-row md:gap-12 md:justify-between">
          <h2 className="heading-md uppercase md:hidden">About me ✌️</h2>
          <img
            src={AboutMobile}
            className="w-full h-auto md:hidden rounded-xl"
            alt="Photo of CJ"
          />
          <img
            src={AboutDesktop}
            className="w-1/3 h-1/3 hidden md:block rounded-xl"
            alt="Photo of CJ"
          />
          <div className="flex flex-col gap-3 sm:gap-5 md:gap-3 md:justify-between md:w-2/3">
            <h2 className="heading-md uppercase hidden md:block">
              About me ✌️
            </h2>
            <p>
              Hello! I’m CJ, a passionate React front-end developer based in
              Toronto, Canada. I love to design and build pixel-perfect,
              engaging, and accessible web experiences. When I’m not designing
              or coding, I’m on my home patio holding a cup of joe in one hand
              and a book in the other or in the gym pumping iron and hitting
              PR’s. Every now and then, I’d go on a little trip, but that
              doesn’t stop me from sticking to my daily ritual of solving a
              LeetCode problem!
            </p>
            <a
              className="self-end font-medium hover:opacity-60 transition-opacity cursor-pointer group"
              target="_blank"
              rel="noopener noreferrer"
              href="/resume.pdf"
            >
              View resume{" "}
              <span className="inline-block transition-transform transform group-hover:translate-x-2">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </ScrollToSection>
  );
};

export default About;
