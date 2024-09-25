import useFetchData from "src/hooks/useFetchData";
import EntertainmentThumbnail from "src/assets/thumbnails/entertainment.jpg";
import DictionaryThumbnail from "src/assets/thumbnails/dictionary.jpg";
import PhotosnapThumbnail from "src/assets/thumbnails/photosnap.jpg";
import PlanetsThumbnail from "src/assets/thumbnails/planets.jpg";
import Project from "src/features/Projects/Project";

const imageMap = {
  entertainment: EntertainmentThumbnail,
  dictionary: DictionaryThumbnail,
  photosnap: PhotosnapThumbnail,
  planets: PlanetsThumbnail,
};

const Projects = ({ propRef }) => {
  const path = "/data/projects.json";
  const [data, loading, error] = useFetchData(path);

  return (
    <section
      className="py-12 sm:py-24 scroll-m-[6.25rem] sm:scroll-m-[8.25rem] px-6 flex justify-center items-center"
      ref={propRef}
    >
      <div className="w-full max-w-[32.5rem] md:max-w-2xl">
        <h2 className="heading-md uppercase">My Projects 🧑🏻‍💻</h2>
        <h3 className="heading-sm leading-snug mt-2">
          Here are some projects that I put my heart and soul into!
        </h3>
        <div className="flex flex-col gap-10 md:gap-14 mt-10 md:mt-14 md:max-w-2xl">
          {loading && <p>Loading...</p>}
          {error && <p>Something went wrong 😢</p>}
          {data &&
            data.map((project, index) => {
              const {
                title,
                thumbnail,
                description,
                stack,
                repoLink,
                demoLink,
              } = project;
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
          <a
            className="self-end font-medium hover:opacity-60 transition-opacity cursor-pointer group mt-3 sm:mt-5"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/cjoak1028"
          >
            View more projects{" "}
            <span className="inline-block transition-transform transform group-hover:translate-x-2">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
