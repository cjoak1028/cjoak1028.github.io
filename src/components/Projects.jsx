import useFetchData from "../hooks/useFetchData";

import EntertainmentThumbnail from "../assets/projects/entertainment.jpg";
import DictionaryThumbnail from "../assets/projects/dictionary.jpg";
import PhotosnapThumbnail from "../assets/projects/photosnap.jpg";
import PlanetsThumbnail from "../assets/projects/planets.jpg";
import GithubLogo from "../assets/logos/github-logo.svg";
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
    <section className="py-24 flex flex-col gap-10 sm:gap-5 max-w-[32.5rem] items-center">
      <div>
        <h2 className="heading-md mb-2">Projects 🧑🏻‍💻</h2>
        <h3 className="heading-sm">
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
              key={`${title}${index}`}
              title={`${index + 1}. ${title}`}
              thumbnail={imageMap[thumbnail]}
              description={description}
              stack={stack}
              repoLink={repoLink}
              demoLink={demoLink}
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
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="text-base font-medium self-start">{title}</h4>
      <img className="w-full h-auto" src={thumbnail} />
      <p className="text-center leading-snug font-light">{description}</p>
      <ul className="flex flex-row gap-3 opacity-60 uppercase">
        {stack.map((tech, index) => (
          <li key={`${tech}${index}`}>{tech}</li>
        ))}
      </ul>
      <div className="flex flex-row gap-7">
        <a
          className="flex flex-row items-center gap-2 font-medium hover:opacity-60 cursor-pointer"
          href={repoLink}
        >
          Code <img src={GithubLogo} className="h-5" />
        </a>
        <a
          className="flex flex-row items-center gap-2 font-medium hover:opacity-60 cursor-pointer"
          href={demoLink}
        >
          Demo <img src={ExtLinkIcon} className="h-5" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
