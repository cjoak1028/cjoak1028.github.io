import AboutMobile from "src/assets/photos/about-mobile.jpg";
import AboutDesktop from "src/assets/photos/about-desktop.jpg";
import ScrollToSection from "src/components/ScrollToSection";

const About = ({ propRef }) => {
  return (
    <ScrollToSection propRef={propRef}>
      <h2 className="heading-md uppercase md:hidden mb-3 lg:block">
        About me ✌️
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-col w-full">
        <img
          src={AboutMobile}
          className="w-full h-auto md:hidden rounded-xl mb-3"
          alt="Photo of CJ"
        />
        <img
          src={AboutDesktop}
          className="w-1/3 h-1/3 hidden md:block lg:hidden rounded-xl mr-12"
          alt="Photo of CJ"
        />
        <div className="mb-3">
          <h2 className="heading-md uppercase hidden md:block lg:hidden mb-3">
            About me ✌️
          </h2>
          <p>
            Hello! I’m CJ, a passionate React front-end developer based in
            Toronto, Canada. I love to design and build pixel-perfect, engaging,
            and accessible web experiences. When I’m not designing or coding,
            I’m on my home patio holding a cup of joe in one hand and a book in
            the other or in the gym pumping iron and hitting PR’s. Every now and
            then, I’d go on a little trip, but that doesn’t stop me from
            sticking to my daily ritual of solving a LeetCode problem!
          </p>
        </div>
      </div>
      <div className="text-end">
        <a
          className="font-medium hover:opacity-60 transition-opacity cursor-pointer group"
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
    </ScrollToSection>
  );
};

export default About;
