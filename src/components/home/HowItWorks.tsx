
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

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

    // Preload the image
    const img = new Image();
    img.src = "/lovable-uploads/cd8c2d66-8439-45cc-a904-ebccb8369983.png";
    img.onload = () => setImageLoaded(true);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const steps = [
    {
      number: "1",
      title: "Interacción Inicial",
      description: "El paciente contacta a través de WhatsApp o el widget web. IAEVA inicia la conversación y responde consultas básicas.",
      delay: "0.1s",
      color: "from-iaeva-blue to-iaeva-teal"
    },
    {
      number: "2",
      title: "Resolución o Transferencia",
      description: "IAEVA resuelve la consulta directamente o, si es necesario, transfiere la conversación a un agente humano sin perder contexto.",
      delay: "0.2s",
      color: "from-iaeva-teal to-iaeva-purple"
    },
    {
      number: "3",
      title: "Gestión de Citas",
      description: "El sistema puede agendar, modificar o cancelar citas, optimizando automáticamente los horarios y enviando recordatorios.",
      delay: "0.3s",
      color: "from-iaeva-purple to-iaeva-blue"
    },
    {
      number: "4",
      title: "Seguimiento Continuo",
      description: "IAEVA envía recordatorios 24 horas antes de la cita y facilita la confirmación, reprogramación o cancelación si es necesario.",
      delay: "0.4s",
      color: "from-iaeva-blue to-iaeva-purple"
    }
  ];

  return (
    <section id="como-funciona" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Imagen izquierda */}
          <div 
            ref={sectionRef}
            className="w-full lg:w-1/2 opacity-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-iaeva-purple/10 to-transparent rounded-3xl"></div>
              
              {!imageLoaded && (
                <div className="w-full h-80 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-3xl"></div>
              )}
              
              <img
                src="/lovable-uploads/cd8c2d66-8439-45cc-a904-ebccb8369983.png"
                alt="IAEVA en acción"
                className={`w-full h-auto rounded-3xl shadow-soft object-cover z-10 relative ${!imageLoaded ? 'hidden' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  // Fallback a un placeholder si la imagen no carga
                  setImageLoaded(false);
                }}
              />
              
              {/* Chat flotante */}
              <div className="absolute -bottom-6 -right-6 p-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-soft max-w-xs animate-pulse-soft">
                <div className="flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple flex-shrink-0"></div>
                    <div className="bg-iaeva-bg-light rounded-2xl rounded-tl-none p-3">
                      <p className="text-sm">Hola, soy IAEVA. ¿En qué puedo ayudarte hoy?</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-iaeva-blue/10 rounded-2xl rounded-tr-none p-3">
                      <p className="text-sm">Quiero agendar una cita con el Dr. García.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pasos */}
          <div className="w-full lg:w-1/2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-iaeva-bg-light text-iaeva-blue font-medium text-sm mb-3">
              Proceso Sencillo
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Cómo IAEVA <span className="gradient-text">transforma</span> la atención médica
            </h2>
            <p className="text-gray-600 mb-8">
              Un sistema integral que combina inteligencia artificial y atención humana para ofrecer una experiencia excepcional en cada punto de contacto con el paciente.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Step 
                  key={index}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={step.delay}
                  color={step.color}
                />
              ))}
            </div>
            
            <div className="mt-10">
              <Link 
                to="/contacto" 
                className="bg-gradient-to-r from-iaeva-blue to-iaeva-purple text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-button hover:translate-y-[-2px] inline-flex items-center"
              >
                Solicitar Demo Personalizada <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
