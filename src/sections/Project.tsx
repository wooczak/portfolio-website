import type { TProject } from "../assets/constants/projects";

const Project = ({ name, description, stack, date, link, index, detailsAvailable }: TProject) => {
  return (
    <div className="font-jet-brains mb-8 mt-8">
      <div className="flex gap-3">
        <h3 className="text-2xl">{`${(index as number) + 1}. ${name}`}</h3>
        <div className="flex gap-1 items-center grow-0">{[...stack]}</div>
      </div>
      <p className="text-datepurple mt-3 mb-3">{date}</p>
      <p>{description}</p>
      <div className="flex mt-5 mb-5 gap-6">
        {detailsAvailable && <button className="custom-button">see more details</button>}
        <button className="custom-button">
          <a href={link}>see my code</a>
        </button>
      </div>
    </div>
  );
};

export default Project;
