import HeroPhoto from "src/assets/photos/hero-photo.jpg";
import { TypeAnimation } from "react-type-animation";
import TechStack from "src/features/Hero/TechStack";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-6.25rem)] sm:h-[calc(100vh-8.25rem)] flex flex-col justify-center items-center bg-white w-full p-8 gap-14">
      <div className="-mt-10 flex flex-col justify-center gap-20 xl:flex-row  md:justify-between xl:gap-48">
        <div>
          <img
            src={HeroPhoto}
            className="w-[2rem] h-[2rem] md:w-[3.125rem] md:h-[3.125rem] rounded-full mb-6 xl:mb-10"
          />
          <TypeAnimation
            sequence={[1000, "Hello! I'm CJ"]}
            wrapper="span"
            cursor={true}
            className="text-3xl sm:text-4xl flex items-center h-6 sm:h-8 sm:w-[13rem] md:w-[22rem] md:text-5xl xl:text-6xl md:h-12 xl:h-14"
          />
        </div>
        <div className="w-full max-w-[18.75rem] sm:max-w-[20rem] md:max-w-[28rem] xl:max-w-[26rem]">
          <h2 className="font-medium text-xl sm:text-2xl md:text-4xl mb-2 md:mb-4">
            A Frontend Developer based in Toronto, Canada.
          </h2>
          <h3 className="font-medium text-xs sm:text-sm md:text-base opacity-60 mb-8 md:mb-24 leading-snug">
            I love to build pixel-perfect, engaging, and accessible digital
            experiences
          </h3>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
