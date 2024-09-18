import HeroImage from "../assets/hero-profile.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-6.875rem)] p-10 flex items-center">
      <div className="-translate-y-10">
        <img
          src={HeroImage}
          className="w-[3.125rem] h-[3.125rem] rounded-full mb-6"
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
          className="heading-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
