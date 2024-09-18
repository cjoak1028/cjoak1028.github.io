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
    <section className="px-4 py-24 flex flex-col gap-3">
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
      <ul className="flex flex-row gap-5 self-center py-4">
        {Object.entries(logos).map(([key, value]) => (
          <li key={key}>
            <TechLogo path={value} tech={key} />
          </li>
        ))}
      </ul>
      <a className="self-end font-medium">View Resume &rarr;</a>
    </section>
  );
};

export default About;
