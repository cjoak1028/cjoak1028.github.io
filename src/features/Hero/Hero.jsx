import HeroPhoto from "src/assets/photos/hero-photo.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-6.25rem)] sm:h-[calc(100vh-8.25rem)] pl-10 sm:pl-16 lg:pl-36 2xl:pl-80 flex items-center bg-white w-full">
      <div className="-translate-y-10">
        <img
          src={HeroPhoto}
          className="w-[3.125rem] h-[3.125rem] sm:w-[4.75rem] sm:h-[4.75rem] rounded-full mb-6 sm:mb-10 md:mb-16"
        />
        <TypeAnimation
          sequence={[2000, "Hey! I'm CJ"]}
          wrapper="span"
          cursor={true}
          className="heading-lg whitespace-nowrap"
        />
      </div>
    </section>
  );
};

export default Hero;
