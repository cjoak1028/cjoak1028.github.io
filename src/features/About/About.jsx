import ScrollToSection from "src/components/ScrollToSection";
import TextArrowLink from "src/components/TextArrowLink";

const About = ({ propRef }) => {
  return (
    <ScrollToSection propRef={propRef}>
      <h2 className="heading-md uppercase md:hidden mb-3 lg:block">
        About me ✌️
      </h2>
      <h2 className="heading-md uppercase hidden md:block lg:hidden mb-3">
        About me ✌️
      </h2>
      <p className="mb-4">
        Hello! I’m CJ, a passionate Frontend Developer based in Toronto, Canada.
        I love to design and build pixel-perfect, engaging, and accessible web
        experiences.
      </p>
      <p className="mb-4">
        When I’m not coding or designing, you’ll find me on my patio with a cup
        of joe in one hand and a book in the other, or at the gym hitting PRs. I
        also enjoy traveling, but no matter where I am, I stick to my daily
        commitment to solving Leetcode problems!
      </p>
      <p>
        I’ve worked in a startup, founded my own, and now I’m ready to embark on
        a new adventure — one filled with learning, collaboration, and growth as
        I strive to become the best frontend developer I can be. Feel free to
        reach out!
      </p>
      <div className="text-end mt-3">
        <TextArrowLink label="View resume" link="/resume.pdf" />
      </div>
    </ScrollToSection>
  );
};

export default About;
