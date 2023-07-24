import { Key, ReactNode } from "react";
import {
  BiLogoTypescript,
  BiLogoFirebase,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import { SiJest, SiSass, SiStyledcomponents, SiTailwindcss, SiVite, SiVitest } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export type TProject = {
  name: string;
  description?: string;
  date: string;
  stack: Iterable<ReactNode>;
  link?: string;
  detailsAvailable?: boolean;
  index?: Key;
};

export const Projects: TProject[] = [
  {
    name: "Portfolio website (this one!)",
    date: "june - july 2023",
    stack: [
      <BiLogoReact className="h-5 w-5 text-react" />,
      <BiLogoTypescript className="h-5 w-5 text-typescript" />,
      <SiTailwindcss />
    ], 
    detailsAvailable: false
  },
  {
    name: "Effectly",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error architecto quod, iusto nemo eos rerum repellendus tempore odio, deserunt vitae quis. Eligendi illo iure, consequuntur ad cumque quam suscipit totam?",
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
    detailsAvailable: true,
    link: "http://google.com",
  },
  {
    name: "Banking App (commercial)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quas vero quam, fuga amet cumque aspernatur, veritatis id porro voluptates aut, nostrum quia exercitationem iste voluptatum doloremque quis odio repellendus!",
    date: "january 2023 - today",
    stack: [
      <BiLogoReact className="h-5 w-5 text-react" />,
      <BiLogoTypescript className="h-5 w-5 text-typescript" />,
      <BiLogoRedux className="h-5 w-5 text-redux" />,
      <SiSass />,
      <SiJest />,
      <TbApi />
    ],
    detailsAvailable: true,
    link: "http://google.com",
  },
  {
    name: "Google Analytics FE for VOD",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quibusdam modi doloribus sapiente perferendis eos magni consequuntur sint aliquam, atque voluptatibus nulla dignissimos distinctio eaque perspiciatis itaque expedita porro iusto?",
    date: "november 2021 - december 2022",
    stack: []
  }
];
