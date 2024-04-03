import ContractSection from '@/components/contactSection';
import FooterSection from '@/components/footerSection';
import Header from '@/components/header';
import HeroSection from '@/components/heroSection';
import ProjectSection from '@/components/projectSection';
import TechStackSection from '@/components/techStack';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TechStackSection />
        <ProjectSection />
        <ContractSection />
        <FooterSection />
      </main>
    </>
  );
}
