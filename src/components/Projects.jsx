import useFetchData from "../hooks/useFetchData";

import EntertainmentThumbnail from "../assets/thumbnails/entertainment.jpg";
import DictionaryThumbnail from "../assets/thumbnails/dictionary.jpg";
import PhotosnapThumbnail from "../assets/thumbnails/photosnap.jpg";
import PlanetsThumbnail from "../assets/thumbnails/planets.jpg";
import GithubIcon from "../assets/logos/github-logo.svg";
import ExtLinkIcon from "../assets/ext-link.svg";

const imageMap = {
  entertainment: EntertainmentThumbnail,
  dictionary: DictionaryThumbnail,
  photosnap: PhotosnapThumbnail,
  planets: PlanetsThumbnail,
};

const Projects = () => {
  const path = "/data/projects.json";
  const [data, loading, error] = useFetchData(path);

  return (
    <section className="content gap-10 md:gap-14 items-center max-w-96 md:max-w-2xl">
      <div className="w-full">
        <h2 className="heading-md mb-2">Projects 🧑🏻‍💻</h2>
        <h3 className="heading-sm leading-snug opacity-60">
          Here are some projects that I put my heart and soul into!
        </h3>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong 😢</p>}
      {data &&
        data.map((project, index) => {
          const { title, thumbnail, description, stack, repoLink, demoLink } =
            project;
          return (
            <Project
              key={title}
              title={`${index + 1}. ${title}`}
              thumbnail={imageMap[thumbnail]}
              description={description}
              stack={stack}
              repoLink={repoLink}
              demoLink={demoLink}
              reverse={index % 2 !== 0}
            />
          );
        })}
    </section>
  );
};

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

const TextIconLink = ({ text, icon, link }) => {
  return (
    <a
      className="flex flex-row items-center gap-2 hover:opacity-60 cursor-pointer font-normal transition-opacity"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text} <img src={icon} className="h-5" />
    </a>
  );
};

export default Projects;
