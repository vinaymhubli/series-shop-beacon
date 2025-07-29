
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AboutStats = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.2);

  const stats = [
    {
      number: "2M+",
      label: "Happy Readers",
      description: "Readers worldwide enjoying our content"
    },
    {
      number: "15",
      label: "Countries",
      description: "Global distribution network"
    },
    {
      number: "8",
      label: "Years",
      description: "Of publishing excellence"
    },
    {
      number: "99%",
      label: "Satisfaction",
      description: "Reader satisfaction rate"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`py-12 sm:py-16 bg-gray-900 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
    </section>
  );
};

export default AboutStats;
