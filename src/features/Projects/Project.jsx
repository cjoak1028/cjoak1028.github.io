import GithubLogo from "src/assets/logos/github-logo.svg";
import LinkIcon from "src/assets/icons/link-icon.svg";
import TextIconLink from "src/components/TextIconLink";

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
      className={`flex flex-col gap-3 sm:gap-12 lg:flex-col lg:gap-3 xl:gap-12 ${
        reverse
          ? "sm:flex-row-reverse xl:flex-row-reverse"
          : "sm:flex-row xl:flex-row"
      }`}
    >
      <div className="flex flex-col gap-3 sm:w-1/2 lg:w-full xl:w-1/2">
        <h4 className="text-base font-medium self-start sm:hidden lg:block xl:hidden">
          {title}
        </h4>
        <img
          className="w-full h-auto shadow-md rounded-xl"
          src={thumbnail}
          alt={`${title} thumbnail`}
        />
      </div>
      <div className="flex flex-col gap-3 items-center sm:w-1/2 sm:justify-between self-center lg:w-full xl:w-1/2 xl:justify-between">
        <h4 className="heading-sm hidden sm:block text-center lg:hidden xl:block">
          {title}
        </h4>
        <p className="text-center leading-snug font-light">{description}</p>
        <ul className="flex flex-row gap-3 opacity-60 uppercase">
          {stack.map((tech, index) => (
            <li key={`${tech}${index}`}>{tech}</li>
          ))}
        </ul>
        <div className="flex flex-row gap-7">
          <TextIconLink text="Code" icon={GithubLogo} link={repoLink} />
          <TextIconLink text="Demo" icon={LinkIcon} link={demoLink} />
        </div>
      </div>
    </div>
  );
};

export default Project;
