
import { useEffect, useRef } from 'react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  delay?: string;
  color?: string;
}

const Step = ({ number, title, description, delay = "0s", color = "from-iaeva-blue to-iaeva-purple" }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (stepRef.current) {
      observer.observe(stepRef.current);
    }

    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className="relative flex gap-5 opacity-0"
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="flex-shrink-0">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r ${color} text-white font-bold`}>
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Step;
