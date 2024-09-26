import HeroPhoto from "src/assets/photos/hero-photo.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "src/components/SocialLinks";
import ScrollToSection from "src/components/ScrollToSection";
// import TechStack from "src/features/Hero/TechStack";

const Hero = () => {
  return (
    <ScrollToSection>
      <div className="flex flex-col gap-8">
        <div className="">
          <img
            src={HeroPhoto}
            className="w-[2rem] h-[2rem] md:w-[3.125rem] md:h-[3.125rem] rounded-full mb-4"
          />
          <TypeAnimation
            sequence={[1000, "I'm CJ Kim"]}
            wrapper="span"
            cursor={true}
            className="text-3xl sm:text-4xl flex items-center h-6 md:text-5xl md:h-12  font-semibold w-full"
          />
        </div>
        <div className="w-full max-w-[16rem] sm:max-w-[20rem]">
          <h2 className="font-medium text-xl sm:text-2xl mb-2">
            A Frontend Developer based in Toronto, Canada.
          </h2>
          <h3 className="font-medium text-xs sm:text-sm md:text-base opacity-60 leading-snug">
            I love to design and build anything, most especially things on the
            web.
          </h3>
          {/* <TechStack /> */}
        </div>
        <SocialLinks />
      </div>
    </ScrollToSection>
  );
};

export default Hero;
