
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

    // Preload the hero image
    const heroImage = new Image();
    heroImage.src = "https://kelvinscale.net/wp-content/uploads/2025/01/mixto-image-ks-header.svg";
    heroImage.onload = () => setImagesLoaded(true);

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
              <span className="gradient-text">¿Listo para experimentar</span> la diferencia que IAEVA puede hacer en tu centro de salud?
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              IAEVA combina la potencia de la IA con el toque humano para transformar la experiencia del paciente, 
              la gestión de citas y la comunicación en clínicas y hospitales.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Cómo IAEVA se adapta a tus necesidades específicas.</li>
              <li>Cómo puedes optimizar tu atención y liberar a tu personal.</li>
              <li>Cómo mejorar la experiencia de tus pacientes.</li>
              <li>El potencial de crecimiento que IAEVA te ofrece.</li>
            </ul>
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
          
          {/* Imagen derecha - Mejorada para ser responsive */}
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="relative h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-radial from-iaeva-blue/10 to-transparent rounded-3xl"></div>
              {!imagesLoaded && (
                <div className="w-full aspect-[4/3] md:aspect-[5/3] max-h-[450px] bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-3xl"></div>
              )}
              <div className="relative w-full h-full max-h-[450px] overflow-hidden rounded-3xl">
                <img 
                  src="https://kelvinscale.net/wp-content/uploads/2025/01/mixto-image-ks-header.svg" 
                  alt="IAEVA atención al cliente con IA" 
                  className={`w-full h-auto max-h-[450px] object-contain rounded-3xl shadow-soft z-10 ${!imagesLoaded ? 'hidden' : ''}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
              
              {/* Tarjeta flotante */}
              <div className="absolute -bottom-6 -left-6 lg:-left-20 p-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-soft animate-pulse-soft">
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
              
              <div className="absolute top-10 -right-6 lg:-right-10 p-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-soft animate-pulse-soft" style={{ animationDelay: '1s' }}>
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
      </div>
    </section>
  );
};

export default Hero;
