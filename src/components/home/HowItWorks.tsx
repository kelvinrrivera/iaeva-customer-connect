
import { useEffect, useRef } from 'react';
import ImageContainer from './how-it-works/ImageContainer';
import StepsContainer from './how-it-works/StepsContainer';
import HowItWorksTitle from './how-it-works/HowItWorksTitle';
import CTAButton from './how-it-works/CTAButton';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left image */}
          <div 
            ref={sectionRef}
            className="w-full lg:w-1/2 opacity-0"
          >
            <ImageContainer 
              imageUrl="/lovable-uploads/cd8c2d66-8439-45cc-a904-ebccb8369983.png"
              alt="IAEVA en acción"
            />
          </div>
          
          {/* Steps */}
          <div className="w-full lg:w-1/2">
            <HowItWorksTitle />
            <StepsContainer />
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
