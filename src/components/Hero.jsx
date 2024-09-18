import HeroImage from "../assets/hero-profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-6.875rem)] sm:h-[calc(100vh-8.875rem)] pl-10 sm:pl-16 lg:pl-44 2xl:pl-80 flex items-center bg-white">
      <div className="-translate-y-10">
        <img
          src={HeroImage}
          className="w-[3.125rem] h-[3.125rem] sm:w-[4.75rem] sm:h-[4.75rem] rounded-full mb-6 sm:mb-10 md:mb-16"
        />
        <TypeAnimation
          sequence={[
            "Hello! I'm CJ",
            2000,
            "Frontend Developer",
            2000,
            "UI/UX Designer",
            4000,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="heading-lg whitespace-nowrap"
        />
      </div>
    </section>
  );
};

export default Hero;
