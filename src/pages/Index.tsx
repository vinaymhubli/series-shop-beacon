
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CompanySnapshot from '@/components/CompanySnapshot';
import SolutionsGrid from '@/components/SolutionsGrid';
import OneRoofSection from '@/components/OneRoofSection';
import SustainabilitySection from '@/components/SustainabilitySection';
import JeevamSection from '@/components/JeevamSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CompanySnapshot />
      <SolutionsGrid />
      <OneRoofSection />
      <SustainabilitySection />
      <JeevamSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
