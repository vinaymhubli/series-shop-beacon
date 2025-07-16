
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutHero = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={elementRef}
      className={`relative py-20 bg-gradient-to-b from-gray-900 to-black transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About <span className="text-red-500">Crossed Hearts</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A global publishing house specialising in the English localization of Japanese manga and Korean webtoon comics, bringing incredible stories to readers worldwide.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
