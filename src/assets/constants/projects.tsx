import { Key, ReactNode } from "react";
import {
  BiLogoTypescript,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import {
  SiJest,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiVite,
  SiVitest,
  SiGoogleanalytics,
} from "react-icons/si";
import { TbApi, TbBrandNextjs } from "react-icons/tb";

export type TProject = {
  name: string;
  description?: string;
  date: string;
  stack: Iterable<ReactNode>;
  link?: string;
  index?: Key;
};

export const Projects: TProject[] = [
  {
    name: "Portfolio website",
    date: "june - july 2023",
    stack: [
      <BiLogoReact className="h-5 w-5 text-react" />,
      <BiLogoTypescript className="h-5 w-5 text-typescript" />,
      <SiTailwindcss />,
    ],
  },
  {
    name: "Effectly",
    date: "march 2022 - today",
    stack: [
      <BiLogoReact className="h-5 w-5 text-react" />,
      <BiLogoTypescript className="h-5 w-5 text-typescript" />,
      <SiStyledcomponents className="h-5 w-5 text-styledcomponents" />,
      <BiLogoRedux className="h-5 w-5 text-redux" />,
      <BiLogoFirebase className="h-5 w-5 text-firebase" />,
      <SiVite className="h-5 w-5 text-vite" />,
      <SiVitest className="h-5 w-5 text-vitest" />,
    ],
    link: "http://google.com",
  },
  {
    name: "Banking App (commercial)",
    date: "january 2023 - today",
    stack: [
      <BiLogoReact className="h-5 w-5 text-react" />,
      <BiLogoTypescript className="h-5 w-5 text-typescript" />,
      <BiLogoRedux className="h-5 w-5 text-redux" />,
      <SiSass className="h-5 w-5 text-sass" />,
      <SiJest className="h-5 w-5 text-jest" />,
      <TbApi />,
    ],
    link: "http://google.com",
  },
  {
    name: "VOD & News App (commercial)",
    date: "november 2021 - december 2022",
    stack: [
      <TbBrandNextjs />,
      <BiLogoReact className="h-5 w-5 text-react" />,
      <BiLogoTypescript className="h-5 w-5 text-typescript" />,
      <SiJest className="h-5 w-5 text-jest" />,
      <SiGoogleanalytics className="h-5 w-5 text-analytics" />
    ],
  },
];
