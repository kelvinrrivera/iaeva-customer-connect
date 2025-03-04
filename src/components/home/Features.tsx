
import { Check, Clock, Calendar, MessageSquare, Brain, Users, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, delay = "0s", className }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-2xl p-6 border border-gray-100 shadow-soft transition-all hover:shadow-lg opacity-0",
        className
      )}
      style={{ animationDelay: delay, animationFillMode: 'forwards' }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-iaeva-blue/10 to-iaeva-purple/10 flex items-center justify-center mb-5">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-iaeva-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-iaeva-blue font-medium text-sm mb-3">
            Características Principales
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            <span className="gradient-text">Soluciones inteligentes</span> para el sector médico
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            IAEVA integra tecnologías de vanguardia para ofrecer una atención al cliente excepcional, optimizar la gestión de citas y mejorar la experiencia del paciente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Brain className="text-iaeva-blue" size={28} />}
            title="IA Super Humanizada"
            description="Agentes de IA entrenados específicamente para el sector médico, capaces de mantener conversaciones naturales y empáticas con los pacientes."
            delay="0.1s"
          />
          <FeatureCard 
            icon={<Calendar className="text-iaeva-purple" size={28} />}
            title="Gestión Inteligente de Citas"
            description="Sistema completo para programar, modificar y cancelar citas médicas, con optimización automática de horarios para maximizar la eficiencia."
            delay="0.2s"
          />
          <FeatureCard 
            icon={<MessageSquare className="text-iaeva-teal" size={28} />}
            title="Integración con WhatsApp"
            description="Comunicación fluida a través de WhatsApp para confirmaciones, recordatorios y consultas, mejorando la accesibilidad y la satisfacción del paciente."
            delay="0.3s"
          />
          <FeatureCard 
            icon={<Clock className="text-iaeva-blue" size={28} />}
            title="Recordatorios Automáticos"
            description="Sistema de notificaciones para reducir las ausencias a citas programadas, con confirmación y opción para reagendar con anticipación."
            delay="0.4s"
          />
          <FeatureCard 
            icon={<Users className="text-iaeva-purple" size={28} />}
            title="Colaboración IA-Humano"
            description="Transferencia inteligente a agentes humanos cuando sea necesario, manteniendo todo el contexto de la conversación para una experiencia sin interrupciones."
            delay="0.5s"
          />
          <FeatureCard 
            icon={<Check className="text-iaeva-teal" size={28} />}
            title="CRM Integrado"
            description="Sistema centralizado para gestionar todas las interacciones con pacientes, permitiendo un seguimiento personalizado y una atención de calidad."
            delay="0.6s"
          />
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/casos-de-uso" 
            className="inline-flex items-center text-iaeva-blue hover:text-iaeva-purple transition-colors font-medium"
          >
            Ver todos los casos de uso
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
