
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dra. Ana Rodríguez",
    role: "Directora Médica",
    company: "Clínica Santa Elena",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=120&h=120&q=80",
    quote: "IAEVA ha transformado completamente nuestra gestión de citas. Los pacientes aprecian la facilidad para agendar y recibir recordatorios, y nosotros hemos reducido las ausencias en un 45%. El sistema se adaptó perfectamente a nuestros procesos existentes.",
    rating: 5
  },
  {
    id: 2,
    name: "Dr. Carlos Méndez",
    role: "Gerente General",
    company: "Hospital San Rafael",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=120&h=120&q=80",
    quote: "La combinación de IA y atención humana ha mejorado significativamente nuestra capacidad de respuesta. IAEVA maneja eficientemente las consultas rutinarias, permitiendo que nuestro personal se enfoque en casos que requieren atención personalizada.",
    rating: 5
  },
  {
    id: 3,
    name: "Laura Fernández",
    role: "Jefa de Atención al Paciente",
    company: "Centro Médico Avanzado",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=120&h=120&q=80",
    quote: "Implementar IAEVA fue una de las mejores decisiones que tomamos. La transición fue muy fluida y el soporte excepcional. Nuestros pacientes valoran la atención inmediata 24/7 y la facilidad para gestionar sus citas.",
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
    <section className="py-20 bg-iaeva-bg-light overflow-hidden">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 md:px-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-iaeva-blue font-medium text-sm mb-3">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Profesionales del sector médico comparten su experiencia con IAEVA y cómo ha transformado su atención al paciente.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Controles de navegación */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-gray-600 hover:text-iaeva-blue transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-gray-600 hover:text-iaeva-blue transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Carrusel de testimonios */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-soft">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-iaeva-purple/20">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                          }}
                        />
                      </div>
                      
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={18}
                            className={cn(
                              "mx-0.5",
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            )}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="mb-6">
                        <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                      </blockquote>
                      
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  activeIndex === index 
                    ? "bg-gradient-to-r from-iaeva-blue to-iaeva-purple w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
