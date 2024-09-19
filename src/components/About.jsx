import AboutImage from "../assets/about-image.jpg";
import HtmlLogo from "../assets/logos/html-logo.svg";
import CssLogo from "../assets/logos/css-logo.svg";
import JsLogo from "../assets/logos/js-logo.svg";
import ReactLogo from "../assets/logos/react-logo.svg";
import SassLogo from "../assets/logos/sass-logo.svg";
import TailwindLogo from "../assets/logos/tailwind-logo.svg";

const About = () => {
  const logos = {
    HTML: HtmlLogo,
    CSS: CssLogo,
    JavaScript: JsLogo,
    React: ReactLogo,
    Sass: SassLogo,
    Tailwind: TailwindLogo,
  };

  const TechLogo = ({ path, tech }) => (
    <img src={path} className="h-7" alt={`${tech} Logo`} />
  );

  return (
    <section className="py-8 sm:py-24 flex flex-col gap-3 sm:gap-5 max-w-96 sm:max-w-[32.5rem]">
      <h2 className="heading-md">About me ✌️</h2>
      <img src={AboutImage} className="w-full h-auto" alt="About me" />
      <p>
        Hello! I’m CJ, a passionate React front-end developer based in Toronto,
        Canada. I love to design and build pixel-perfect, engaging, and
        accessible web experiences. When I’m not coding, I’m probably either on
        my home patio holding a cup of joe in one hand and a book in the other
        or in the gym pumping iron and hitting PR’s. Every now and then, I’d go
        on a little trip, but that doesn’t stop me from sticking to my daily
        ritual of solving a LeetCode problem!
      </p>
      <div className="flex flex-row items-center justify-center sm:gap-8">
        <h2 className="heading-sm uppercase hidden sm:inline-block opacity-60">
          Tech Stack
        </h2>
        <span className="heading-sm hidden sm:block opacity-60">|</span>
        <ul className="flex flex-row gap-6 sm:gap-8 py-4">
          {Object.entries(logos).map(([key, value]) => (
            <li key={key}>
              <TechLogo path={value} tech={key} />
            </li>
          ))}
        </ul>
      </div>
      <a className="self-end font-medium hover:opacity-60 transition-opacity cursor-pointer group">
        View Resume{" "}
        <span className="inline-block transition-transform transform group-hover:translate-x-2">
          &rarr;
        </span>
      </a>
    </section>
  );
};

export default About;
