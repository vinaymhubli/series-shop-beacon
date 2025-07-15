
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import RecommendedSection from '@/components/RecommendedSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <HeroSection />
      <ProductGrid />
      <RecommendedSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
