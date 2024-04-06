import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { MdArrowForward } from 'react-icons/md';

import { Menu } from '@/types';
import tworkDemoImg from '/public/tworkDemo.png';
import moneyvisorkDemoImg from '/public/moneyvisorDemo.png';
import { Avatar } from '@nextui-org/react';

function ProjectSection() {
  return (
    <section id={`${Menu.Projects}`}>
      <div className="py-20 bg-gray-300">
        <h2 className="text-center font-bold text-gray-800 text-4xl px-20">
          {Menu.Projects}
        </h2>
        <div className="flex max-sm:flex-col justify-center items-center gap-8 mt-6 p-2">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Link href="https://github.com/qpan/moneyvisor">
              <Image
                src={moneyvisorkDemoImg}
                alt="Hero background image"
                priority
                className="w-full"
              />
            </Link>
            <div className="px-6 py-4">
              <Link href="https://github.com/qpan/moneyvisor">
                <div className="text-center font-bold text-xl mb-2">
                  <span>Moneyvisor</span>&nbsp;
                </div>
              </Link>
              <p className="text-gray-700 text-base">
                Moneyvistor is a wealth management app that streamlines
                financial management tasks by eliminating the need for paper
                receipts and manual calculations.
              </p>
            </div>
            <Link href="https://github.com/qpan/moneyvisor">
              <div className="flex justify-center items-center gap-2 pb-2 font-semibold">
                Code
                <Avatar
                  icon={<AiFillGithub size={'24px'} />}
                  size="sm"
                  className="bg-white shadow-lg"
                />
              </div>
            </Link>
            <div className="px-6 pt-2 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                React
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                MUI
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                JSON-Server
              </span>
            </div>
          </div>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Link href="https://twork.site/">
              <Image
                src={tworkDemoImg}
                alt="Hero background image"
                priority
                className="w-full"
              />
            </Link>
            <div className="px-6 py-4">
              <Link href="https://twork.site/">
                <div className="text-center font-bold text-xl mb-2">
                  <span>Twork</span>&nbsp;
                  <span className="font-light">(TeamWork)</span>
                </div>
              </Link>
              <p className="text-gray-700 text-base">
                Twork is a project management platform catering to make your
                ambition a reality. Twork is a flexible and easy to use platform
                for anyone who wants to team up.
              </p>
            </div>
            <Link href="https://twork.site/">
              <div className="flex justify-center items-center gap-2 pb-2 font-semibold">
                Live Demo{' '}
                <span className="font-light italic text-small">
                  (<span className="text-blue-600">50 seconds</span> cold start)
                </span>
                <Avatar
                  icon={<MdArrowForward size={'24px'} />}
                  size="sm"
                  className="bg-white shadow-lg"
                />
              </div>
            </Link>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Vue
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Buefy
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                Express
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
