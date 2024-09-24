import HeroPhoto from "src/assets/photos/hero-photo.jpg";
import { TypeAnimation } from "react-type-animation";
import TechStack from "src/features/Hero/TechStack";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-6.25rem)] sm:h-[calc(100vh-8.25rem)] flex flex-col justify-center bg-white w-full p-8 gap-14">
      <div className="-mt-10 flex flex-col justify-center gap-12">
        <div>
          <img
            src={HeroPhoto}
            className="w-[3.125rem] h-[3.125rem] sm:w-[4.75rem] sm:h-[4.75rem] rounded-full mb-6 sm:mb-10 md:mb-16"
          />
          <TypeAnimation
            sequence={[1000, "Hello! I'm CJ"]}
            wrapper="span"
            cursor={true}
            className="text-[2rem] whitespace-nowrap"
          />
        </div>
        <div>
          <h2 className="text-xl font-extralight mb-6">
            A Frontend Developer based in <br></br>Toronto, Canada
          </h2>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Hero;
