import GithubIcon from "../../assets/logos/github-logo.svg";
import ExtLinkIcon from "../../assets/ext-link.svg";
import TextIconLink from "../Shared/TextIconLink";

const Project = ({
  title,
  thumbnail,
  description,
  stack,
  repoLink,
  demoLink,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col gap-3 md:gap-14 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex flex-col gap-3 md:w-3/5">
        <h4 className="text-base font-medium self-start md:hidden">{title}</h4>
        <img
          className="w-full h-auto shadow-md"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
      </div>
      <div className="flex flex-col gap-3 items-center md:w-2/5 md:justify-between md:h-5/6 self-center">
        <h4 className="heading-sm hidden md:block text-center">{title}</h4>
        <p className="text-center leading-snug font-light">{description}</p>
        <ul className="flex flex-row gap-3 opacity-60 uppercase">
          {stack.map((tech, index) => (
            <li key={`${tech}${index}`}>{tech}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-7">
          <TextIconLink text="Code" icon={GithubIcon} link={repoLink} />
          <TextIconLink text="Demo" icon={ExtLinkIcon} link={demoLink} />
        </div>
      </div>
    </div>
  );
};

export default Project;
