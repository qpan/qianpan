import Image from 'next/image';
import heroImg from '/public/hero.jpg';
import Header from '@/components/header';
import { Button } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="relative flex h-500px">
            <Image
              src={heroImg}
              alt="Hero background image"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 100%' }}
            />
            <div className="flex justify-center w-full z-0 mt-10">
              <div className="text-center">
                <h1 className="text-6xl">
                  <span>
                    <span className="text-amber-500">HI</span>
                    <span>, MY NAME IS</span>
                  </span>
                  <span className="font-bold text-blue-500">
                    &nbsp;QIAN PAN
                  </span>
                </h1>
                <h3 className="mt-4 text-xl p-2">
                  <p>
                    <span className="bg-white">
                      A <span className="font-bold">Front-End Developer</span>{' '}
                      with knowledge in web development and design.
                    </span>
                  </p>
                  <p>
                    <span className="bg-white">
                      I enjoy delving into diverse realms of software
                      development.
                    </span>
                  </p>
                  <div className="mt-4"></div>
                  <Button
                    color="warning"
                    size="lg"
                    radius="none"
                    variant="shadow"
                  >
                    <span className="font-medium">CONTACT ME</span>
                  </Button>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
