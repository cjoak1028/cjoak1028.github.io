import useFetchData from "src/hooks/useFetchData";
import EntertainmentThumbnail from "src/assets/thumbnails/entertainment.jpg";
import DictionaryThumbnail from "src/assets/thumbnails/dictionary.jpg";
import PhotosnapThumbnail from "src/assets/thumbnails/photosnap.jpg";
import PlanetsThumbnail from "src/assets/thumbnails/planets.jpg";
import Project from "src/features/Projects/Project";
import ScrollToSection from "src/components/ScrollToSection";
import TextArrowLink from "src/components/TextArrowLink";

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
    <ScrollToSection propRef={propRef}>
      <div className="w-full">
        <h2 className="heading-md uppercase">My Projects 🧑🏻‍💻</h2>
        <h3 className="text-base font-medium leading-snug mt-2 opacity-60">
          Here are some projects that I put my heart and soul into!
        </h3>
        <div className="flex flex-col gap-10 md:gap-14 mt-10 md:mt-14">
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
          <div className="text-end mt-3">
            <TextArrowLink
              label="View more projects"
              link="https://github.com/cjoak1028"
            />
          </div>
        </div>
      </div>
    </ScrollToSection>
  );
};

export default Projects;
