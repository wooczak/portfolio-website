import type { TProject } from "../assets/constants/projects";

const Project = ({ name, description, stack, date, link, index }: TProject) => {
  return (
    <div className="font-jet-brains mb-8">
      <div className="flex gap-3 justify-between">
        <h3 className="text-xl">{`${(index as number) + 1}. ${name}`}</h3>
        <div className="flex gap-1 items-center grow-0">{[...stack]}</div>
      </div>
      <p className="text-datepurple mt-3 mb-3">{date}</p>
      <p className="text-sm leading-[1.35rem]">{description}</p>
      <div className="flex mt-5 mb-5 gap-6">
        <button className="custom-button">see more details</button>
        <button className="custom-button">
          <a href={link}>see my code</a>
        </button>
      </div>
      <span className="bg-lime-300 inline-block w-full h-[0.8px] mt-4"/>
    </div>
  );
};

export default Project;
