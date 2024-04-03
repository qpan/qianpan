import Image from 'next/image';
import { Avatar, Link } from '@nextui-org/react';
import { MdMailOutline } from 'react-icons/md';
import linkedinImg from '/public/linkedin.svg';
import githubImg from '/public/github.svg';
import { Menu } from '@/types';

function ContractSection() {
  return (
    <section id={`${Menu.Contact}`}>
      <div className="p-20 text-center flex flex-col justify-center items-center">
        <h2 className="font-bold text-4xl text-blue-500">{Menu.Contact}</h2>
        <h3 className="font-medium mt-6 text-xl max-md:text-medium p-2">
          Don&apos;t hesitate to contact me.
        </h3>
        <div className="flex justify-center items-center gap-2">
          <Avatar
            icon={<MdMailOutline size={'24px'} />}
            size="md"
            className="bg-white text-red-500 shadow-lg"
          />
          <Link size="lg" href="mailto:qianpan17@gmail.com">
            qianpan17@gmail.com
          </Link>
        </div>
        <div className="flex justify-center items-center [&>a]:m-2">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/qian-pan-590b942b4/"
          >
            <Image
              title="LinkedIn"
              src={linkedinImg}
              alt="LinkedIn"
              className="w-8"
            />
          </Link>
          <Link target="_blank" href="https://github.com/qpan">
            <Image
              title="Github"
              src={githubImg}
              alt="Github"
              className="w-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContractSection;
