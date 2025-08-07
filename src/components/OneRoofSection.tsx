import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const OneRoofSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={elementRef}
      className={`py-20 bg-gradient-to-br from-blue-900 to-indigo-900 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Everything Under One Roof
          </h2>
          {/* Image placeholder - user will provide replacement */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-2xl p-20 backdrop-blur-sm border border-white/20">
              <p className="text-white/80 text-lg">
                [Image placeholder - User will provide replacement image]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneRoofSection;