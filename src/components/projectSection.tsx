import { AiFillGithub } from 'react-icons/ai';
import { MdArrowForward } from 'react-icons/md';

import { Menu, ProjectProps } from '@/types';
import readmeMakerDemoImg from '/public/readmeMakerDemo.png';
import tworkDemoImg from '/public/tworkDemo.png';
import moneyvisorkDemoImg from '/public/moneyvisorDemo.png';
import ProjectCard from './projectCard';

function ProjectSection() {
  const Projects: ProjectProps[] = [
    {
      title: 'Readme Maker',
      description:
        'Readme Maker is a user-friendly online editor that enables developers to quickly create and customize professional readmes for their projects.',
      techStack: ['Next.js', 'shadcn/ui', 'TailwindCSS', 'Zustand'],
      url: 'https://readme-maker.com/',
      imgSrc: readmeMakerDemoImg,
      source: {
        text: 'Website',
        subText: '',
        icon: <MdArrowForward size={'24px'} />,
      },
    },
    {
      title: 'Moneyvisor',
      description:
        'Moneyvistor is a wealth management app that streamlines financial management tasks by eliminating the need for paper receipts and manual calculations.',
      techStack: ['React', 'MUI', 'JSON-Server'],
      url: 'https://github.com/qpan/moneyvisor',
      imgSrc: moneyvisorkDemoImg,
      source: {
        text: 'Code',
        subText: '',
        icon: <AiFillGithub size={'24px'} />,
      },
    },
    {
      title: 'T-Work',
      description:
        'T-Work is a project management platform catering to make your ambition a reality. Twork is a flexible and easy to use platform for anyone who wants to team up.',
      techStack: ['Vue', 'Buefy', 'Express', 'MongoDB'],
      url: 'https://twork.site/',
      imgSrc: tworkDemoImg,
      source: {
        text: 'Website',
        subText: '50 seconds cold start',
        icon: <MdArrowForward size={'24px'} />,
      },
    },
  ];

  return (
    <section id={`${Menu.Projects}`}>
      <div className="py-20 bg-gray-300">
        <h2 className="text-center font-bold text-gray-800 text-4xl px-20">
          {Menu.Projects}
        </h2>
        <div className="flex flex-col justify-center items-center gap-8 mt-6 p-2">
          {Projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
