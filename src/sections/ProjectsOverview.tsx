import { Projects } from "../assets/constants/projects";
import Project from "./Project";

const ProjectsOverview = () => {
  return (
    <section className="mt-10 mb-10">
      <h2 className="text-3xl mb-6 font-extrabold">Projects overview</h2>
      {Projects?.map(({ name, description, stack, link, date, detailsAvailable }, index) => (
        <Project
          name={name}
          description={description}
          date={date}
          stack={stack}
          link={link}
          key={index}
          index={index}
          detailsAvailable={detailsAvailable}
        />
      ))}
    </section>
  );
};

export default ProjectsOverview;
