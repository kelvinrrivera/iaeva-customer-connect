
import { useEffect, useRef } from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const Step = ({ number, title, description, delay = 0 }: StepProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full bg-white shadow-soft flex items-center justify-center mb-4 relative z-10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple flex items-center justify-center">
          <span className="text-white font-bold">{number}</span>
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
      <p className="text-sm text-gray-600 text-center max-w-[200px]">{description}</p>
    </div>
  );
};

const ImplementationPlan = () => {
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
    <section className="py-16 bg-iaeva-bg-light overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={sectionRef}
          className="text-center mb-12 opacity-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-iaeva-blue font-medium text-sm mb-3">
            Plan de Implementación
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <span className="gradient-text">Sencillo y rápido</span> de implementar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Integramos IAEVA en tu sistema actual en menos de 30 días con un proceso diseñado para minimizar interrupciones y maximizar resultados.
          </p>
        </div>

        <div className="relative">
          {/* Línea de conexión */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-iaeva-blue to-iaeva-purple hidden md:block"></div>
          
          {/* Pasos */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 relative z-10">
            <Step 
              number={1} 
              title="Análisis Inicial" 
              description="Evaluamos tus necesidades y configuramos el sistema"
            />
            <Step 
              number={2} 
              title="Integración" 
              description="Conectamos IAEVA con tus sistemas actuales"
            />
            <Step 
              number={3} 
              title="Personalización" 
              description="Adaptamos las respuestas y flujos a tu negocio"
            />
            <Step 
              number={4} 
              title="Entrenamiento" 
              description="Capacitamos a tu equipo para aprovechar el sistema"
            />
            <Step 
              number={5} 
              title="Lanzamiento" 
              description="Implementamos el sistema con soporte 24/7"
            />
            <Step 
              number={6} 
              title="Optimización" 
              description="Mejoramos continuamente basados en resultados"
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-iaeva-blue font-medium">Tiempo estimado: <span className="font-bold">30 días</span></p>
        </div>
      </div>
    </section>
  );
};

export default ImplementationPlan;
