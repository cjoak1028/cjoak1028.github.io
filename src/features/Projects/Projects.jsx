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
      className="content gap-10 md:gap-14 items-center max-w-[32.5rem]  md:max-w-2xl scroll-m-[6.25rem] sm:scroll-m-[8.25rem]"
      ref={propRef}
    >
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

export default Projects;
