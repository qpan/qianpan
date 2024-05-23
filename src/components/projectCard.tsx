import Image from 'next/image';
import Link from 'next/link';
import { Avatar } from '@nextui-org/react';
import { ProjectProps } from '@/types';

function ProjectCard({
  title,
  description,
  techStack,
  url,
  imgSrc,
  source,
}: ProjectProps) {
  return (
    <div className="flex flex-col max-w-sm md:flex-row md:max-w-4xl rounded overflow-hidden shadow-lg bg-white">
      <Link href={url}>
        <Image
          src={imgSrc}
          alt={title}
          priority
          style={{ objectFit: 'cover', objectPosition: '50% 100%' }}
          className="w-full h-full"
        />
      </Link>
      <div className="md:w-4/5">
        <div className="px-6 py-4">
          <Link href={url}>
            <div className="text-center font-bold text-xl mb-2">
              <span>{title}</span>&nbsp;
            </div>
          </Link>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <Link href={url}>
          <div className="flex justify-center items-center gap-2 pb-2 font-semibold">
            {source.text}
            {source.subText && (
              <span className="font-light italic text-small">
                ({source.subText})
              </span>
            )}
            <Avatar
              icon={source.icon}
              size="sm"
              className="bg-white shadow-lg"
            />
          </div>
        </Link>
        <div className="px-6 pt-2 pb-2 text-center">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
