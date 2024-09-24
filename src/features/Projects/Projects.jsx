import useFetchData from "src/hooks/useFetchData";
import EntertainmentThumbnail from "src/assets/thumbnails/entertainment.jpg";
import DictionaryThumbnail from "src/assets/thumbnails/dictionary.jpg";
import PhotosnapThumbnail from "src/assets/thumbnails/photosnap.jpg";
import PlanetsThumbnail from "src/assets/thumbnails/planets.jpg";
import SectionLayout from "src/components/SectionLayout";
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
    <div className="max-w-[32.5rem] md:max-w-2xl">
      <SectionLayout
        title="Projects 🧑🏻‍💻"
        subTitle="Here are some projects that I put my heart and soul into!"
        propRef={propRef}
      >
        <div className="content gap-10 md:gap-14 mt-10 md:mt-14 md:max-w-2xl">
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
        </div>
      </SectionLayout>
    </div>
  );
};

export default Projects;
