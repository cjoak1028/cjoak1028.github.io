import EntertainmentThumbnail from "../assets/projects/entertainment.jpg";
import DictionaryThumbnail from "../assets/projects/dictionary.jpg";
import PhotosnapThumbnail from "../assets/projects/photosnap.jpg";
import PlanetsThumbnail from "../assets/projects/planets.jpg";
import GithubLogo from "../assets/logos/github-logo.svg";
import ExtLinkIcon from "../assets/ext-link.svg";

const Projects = () => {
  return (
    <section className="py-24 flex flex-col gap-10 sm:gap-5 max-w-[32.5rem]">
      <div>
        <h2 className="heading-md mb-2">Projects 🧑🏻‍💻</h2>
        <h3 className="heading-sm">
          Here are some projects that I put my heart and soul into!
        </h3>
      </div>
      <Project
        title="1. Entertainment Web App"
        thumbnail={EntertainmentThumbnail}
        description="An entertainment web app that allows users to browse and bookmark movies and TV shows"
        stack={["React", "Tailwind CSS"]}
        repoLink="https://github.com/cjoak1028/entertainment-web-app"
      />
      <Project
        title="2. Dictionary"
        thumbnail={DictionaryThumbnail}
        description="A dictionary web app integrated with the Free Dictionary API"
        stack={["React", "Tailwind CSS"]}
        repoLink="https://github.com/cjoak1028/dictionary-web-app"
        demoLink="https://dictionary-web-app-7wod.vercel.app/"
      />
      <Project
        title="3. Photosnap"
        thumbnail={PhotosnapThumbnail}
        description="A multi-page marketing website for a photo-sharing application"
        stack={["HTML", "Sass", "JavaScript"]}
        repoLink="https://github.com/cjoak1028/photosnap-multi-page-website"
        demoLink="https://photosnap-multi-page-website-theta.vercel.app/"
      />
      <Project
        title="4. Planets"
        thumbnail={PlanetsThumbnail}
        description="A multi-page website showcasing each planet in our solar system"
        stack={["HTML", "Sass", "JavaScript"]}
        repoLink="https://github.com/cjoak1028/planets-fact-site"
        demoLink="https://planets-fact-site-sand.vercel.app/"
      />
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
          className="flex flex-row items-center gap-2 font-medium"
          href={repoLink}
        >
          Code <img src={GithubLogo} className="h-5" />
        </a>
        <a
          className="flex flex-row items-center gap-2 font-medium"
          href={demoLink}
        >
          Demo <img src={ExtLinkIcon} className="h-5" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
