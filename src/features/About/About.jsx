import AboutPhoto from "src/assets/photos/about-photo.jpg";
import SectionLayout from "src/components/SectionLayout";

const About = ({ propRef }) => {
  return (
    <section
      className="py-12 sm:py-24 scroll-m-[6.25rem] sm:scroll-m-[8.25rem] px-6 flex justify-center items-center"
      ref={propRef}
    >
      <div className="w-full max-w-[32.5rem] md:max-w-2xl">
        <SectionLayout title="About me ✌️" propRef={propRef}>
          <div className="content gap-3 sm:gap-5 mt-3 sm:mt-5">
            <img src={AboutPhoto} className="w-full h-auto" alt="About me" />
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
        </SectionLayout>
      </div>
    </section>
  );
};

export default About;
