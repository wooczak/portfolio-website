import { Projects } from "../assets/constants/projects";
import Project from "../components/Project";

const ProjectsOverview = () => {
  return (
    <section className="mt-[15vh] mb-14">
      <h2 className="text-6xl font-extrabold">Projects</h2>
      <h2 className="text-6xl font-extrabold -translate-y-3 translate-x-4 mb-5">overview</h2>
      {Projects?.map(({ name, description, stack, link, date }, index) => (
        <Project
          name={name}
          description={description}
          date={date}
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
