
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative"
    >
      {/* Círculos decorativos */}
      <div className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-gradient-to-r from-iaeva-blue/10 to-iaeva-purple/10 blur-3xl z-0"></div>
      <div className="absolute bottom-20 left-[10%] w-80 h-80 rounded-full bg-gradient-to-r from-iaeva-purple/10 to-iaeva-blue/10 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Contenido izquierdo */}
          <div className="w-full lg:w-1/2 space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="inline-block px-4 py-1.5 rounded-full bg-iaeva-bg-light text-iaeva-blue font-medium text-sm mb-2">
              Revolucionando la atención médica
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Atención al Cliente <span className="text-iaeva-blue">Inteligente</span> para el Sector Médico
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              IAEVA combina la potencia de la IA con el toque humano para transformar la experiencia del paciente, la gestión de citas y la comunicación en clínicas y hospitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="/contacto" 
                className="bg-gradient-to-r from-iaeva-blue to-iaeva-purple text-white px-8 py-3.5 rounded-full font-medium transition-all hover:shadow-button hover:translate-y-[-2px] inline-flex items-center justify-center"
              >
                Solicitar Demo <ArrowRight className="ml-2" size={18} />
              </Link>
              <a 
                href="#como-funciona" 
                className="inline-flex items-center justify-center px-8 py-3.5 border border-iaeva-purple/30 rounded-full text-iaeva-purple font-medium transition-all hover:border-iaeva-purple hover:bg-iaeva-bg-light"
              >
                Cómo Funciona
              </a>
            </div>
          </div>
          
          {/* Imagen derecha */}
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-iaeva-blue/10 to-transparent rounded-3xl"></div>
              <img 
                src="/lovable-uploads/39f47b90-761f-4d63-a41c-47282e7b3507.png" 
                alt="IAEVA atención al cliente con IA" 
                className="w-full h-auto rounded-3xl shadow-soft object-cover z-10 relative"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/lovable-uploads/31e5f6a3-76d4-4c80-88ff-cdcf0ff7290f.png";
                }}
              />
              
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -left-6 lg:-left-20 p-4 glass-panel shadow-soft animate-pulse-soft">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple flex items-center justify-center">
                    <span className="text-white font-bold">97%</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Satisfacción</p>
                    <p className="text-xs text-gray-500">de pacientes</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-10 -right-6 lg:-right-10 p-4 glass-panel shadow-soft animate-pulse-soft" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-iaeva-teal to-iaeva-blue flex items-center justify-center">
                    <span className="text-white font-bold">24/7</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Atención</p>
                    <p className="text-xs text-gray-500">continua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Marcas asociadas */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
          <p className="text-center text-gray-500 text-sm mb-6">CONFÍAN EN NOSOTROS</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-32 h-12 flex items-center justify-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                <div className="w-24 h-8 bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
