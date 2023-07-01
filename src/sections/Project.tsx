import { Key, ReactNode } from "react";

interface IProject {
  name: string;
  description: string;
  stack: Iterable<ReactNode>;
  link: string;
  index: Key;
}

const Project = ({ name, description, stack, link, index }: IProject) => {
  return (
    <div className="font-jet-brains">
      <div className="flex gap-2 items-center mb-4">
        <h3 className="text-2xl">{`${(index as number) + 1}. ${name}`}</h3>
        <div className="flex gap-1 mx-1 items-center max-w-[10ch]">{[...stack]}</div>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default Project;
