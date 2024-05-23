import Header from '@/components/header';
import HeroSection from '@/components/heroSection';
import TechStackSection from '@/components/techStackSection';
import ProjectSection from '@/components/projectSection';
import ContractSection from '@/components/contactSection';
import FooterSection from '@/components/footerSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TechStackSection />
        <ProjectSection />
        <ContractSection />
      </main>
      <FooterSection />
    </>
  );
}
