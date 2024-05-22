import { StaticImageData } from 'next/image';

export const Menu = {
  Home: 'Home',
  TechStack: 'Tech-Stack',
  Projects: 'Projects',
  Resume: 'Resume',
  Contact: 'Contact',
};

export type ProjectProps = {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imgSrc: StaticImageData;
  source: {
    text: string;
    subText: string;
    icon: JSX.Element;
  };
};
