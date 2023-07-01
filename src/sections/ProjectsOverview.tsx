import { Projects } from "../assets/constants/projects";
import Project from "./Project";

const ProjectsOverview = () => {
  return (
    <section>
      <h2 className="text-3xl mb-4">Projects overview</h2>
      {Projects?.map(({ name, description, stack, link }, index) => (
        <Project
          name={name}
          description={description}
          stack={stack}
          link={link}
          key={index}
          index={index}
        />
      ))}
    </section>
  );
};

export default ProjectsOverview;
