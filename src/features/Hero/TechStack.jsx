import HtmlLogo from "src/assets/logos/html-logo.svg";
import CssLogo from "src/assets/logos/css-logo.svg";
import JsLogo from "src/assets/logos/js-logo.svg";
import ReactLogo from "src/assets/logos/react-logo.svg";
import SassLogo from "src/assets/logos/sass-logo.svg";
import TailwindLogo from "src/assets/logos/tailwind-logo.svg";

const logos = {
  HTML: HtmlLogo,
  CSS: CssLogo,
  JavaScript: JsLogo,
  React: ReactLogo,
  Sass: SassLogo,
  Tailwind: TailwindLogo,
};

const TechStack = () => {
  const TechLogo = ({ path, tech }) => (
    <img src={path} className="h-7" alt={`${tech} Logo`} />
  );

  return (
    <div className="flex flex-row items-center justify-center sm:gap-4">
      <h2 className="heading-sm uppercase hidden md:inline-block opacity-60 whitespace-nowrap">
        Tech Stack
      </h2>
      <span className="heading-sm hidden md:block opacity-60">|</span>
      <ul className="flex flex-row w-full justify-between">
        {Object.entries(logos).map(([key, value]) => (
          <li key={key}>
            <TechLogo path={value} tech={key} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
