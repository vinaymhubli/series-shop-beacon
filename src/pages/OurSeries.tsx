
import Header from '@/components/Header';
import SeriesHero from '@/components/SeriesHero';
import SeriesFilters from '@/components/SeriesFilters';
import FeaturedSeries from '@/components/FeaturedSeries';
import AllSeries from '@/components/AllSeries';
import SeriesActivity from '@/components/SeriesActivity';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const OurSeries = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <SeriesHero />
      <SeriesFilters />
      <FeaturedSeries />
      <AllSeries />
      <SeriesActivity />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default OurSeries;
