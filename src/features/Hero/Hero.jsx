import HeroPhoto from "src/assets/photos/hero-photo.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "src/components/SocialLinks";
// import TechStack from "src/features/Hero/TechStack";

const Hero = () => {
  return (
    <div className="flex flex-col lg:h-full lg:justify-between py-12 md:py-24 px-6 sm:px-12 lg:px-0 lg:py-0">
      <div>
        <img
          src={HeroPhoto}
          className="w-[2rem] h-[2rem] md:w-[3.125rem] md:h-[3.125rem] rounded-full mb-4"
        />
        <TypeAnimation
          sequence={[1000, "I'm CJ Kim"]}
          wrapper="span"
          cursor={true}
          className="text-3xl sm:text-4xl flex items-center h-6 md:text-5xl md:h-12  font-semibold w-full mb-8"
        />
        <div className="w-full max-w-[16rem] sm:max-w-[20rem] mb-8">
          <h2 className="font-medium text-xl sm:text-2xl mb-2">
            A Frontend Developer based in Toronto, Canada.
          </h2>
          <h3 className="font-medium text-xs sm:text-sm md:text-base opacity-60 leading-snug">
            I love to design and build anything, most especially things on the
            web.
          </h3>
          {/* <TechStack /> */}
        </div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default Hero;
