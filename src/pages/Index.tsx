
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SimpleProductGrid from '@/components/SimpleProductGrid';
import RecommendedSection from '@/components/RecommendedSection';
import AnnouncementsSection from '@/components/AnnouncementsSection';
import SocialsSection from '@/components/SocialsSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
const Index = () => {
  console.log('Index page rendering');
  
  return (
    <div className="min-h-screen bg-gray-900">
      {/* TEST: If you see this comment, the deployment is working */}
      <Header />
      <div className="text-yellow-500 text-xl text-center py-4 font-bold">BEFORE HERO SECTION</div>
      <HeroSection />
      <div className="text-yellow-500 text-xl text-center py-4 font-bold">AFTER HERO SECTION</div>
      <SimpleProductGrid />
      <div className="text-yellow-500 text-xl text-center py-4 font-bold">BEFORE RECOMMENDED SECTION</div>
      <RecommendedSection />
      <div className="text-yellow-500 text-xl text-center py-4 font-bold">BEFORE ANNOUNCEMENTS SECTION</div>
      <AnnouncementsSection />
      <div className="text-yellow-500 text-xl text-center py-4 font-bold">AFTER ANNOUNCEMENTS SECTION</div>
      <SocialsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
