import { Menu } from '@/types';

function ProjectSection() {
  return (
    <section id={`${Menu.Projects}`}>
      <div className="py-20 bg-gray-300">
        <h2 className="text-center font-bold text-gray-800 text-4xl px-20">
          {Menu.Projects}
        </h2>
      </div>
    </section>
  );
}

export default ProjectSection;
