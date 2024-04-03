import Image from 'next/image';
import htmlCssImg from '/public/html_css.svg';
import jsTsImg from '/public/js_ts.svg';
import reactNextImg from '/public/react_next.svg';
import vueImg from '/public/vue.svg';
import muiBootstrapImg from '/public/mui_bootstrap.svg';
import tailwindSassImg from '/public/tailwind_sass.svg';
import { Menu } from '@/types';

function TechStackSection() {
  return (
    <section id={`${Menu.TechStack}`}>
      <div className="py-20">
        <h2 className="text-center font-bold text-gray-700 text-4xl">
          {Menu.TechStack.replace('-', ' ')}
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-6 [&>img]:m-4">
          <Image
            title="HTML, CSS"
            src={htmlCssImg}
            alt="HTML, CSS"
            className="w-32"
          />
          <Image
            title="JavaScript, TypeScript"
            src={jsTsImg}
            alt="JavaScript, TypeScript"
            className="w-32"
          />
          <Image
            title="React, Next.JS"
            src={reactNextImg}
            alt="React, Next.JS"
            className="w-32"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center mt-6 [&>img]:m-4">
          <Image title="Vue" src={vueImg} alt="Vue" className="w-16" />
          <Image
            title="Material-UI, Bootstrap"
            src={muiBootstrapImg}
            alt="Material-UI, Bootstrap"
            className="w-32"
          />
          <Image
            title="Tailwind CSS, SASS"
            src={tailwindSassImg}
            alt="Tailwind CSS, SASS"
            className="w-32"
          />
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
