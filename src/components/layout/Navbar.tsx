
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cierra el menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out", 
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-soft py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            aria-label="IAEVA"
          >
            <div className="text-2xl font-display font-extrabold">
              <span className="text-iaeva-blue">IA</span>
              <span className="text-iaeva-purple">EVA</span>
            </div>
          </Link>

          {/* Navegación escritorio */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={cn("nav-link", location.pathname === "/" && "text-iaeva-purple")}>
              Inicio
            </Link>
            <Link to="/casos-de-uso" className={cn("nav-link", location.pathname === "/casos-de-uso" && "text-iaeva-purple")}>
              Casos de Uso
            </Link>
            <Link to="/blog" className={cn("nav-link", location.pathname === "/blog" && "text-iaeva-purple")}>
              Blog
            </Link>
            <Link to="/contacto" className={cn("nav-link", location.pathname === "/contacto" && "text-iaeva-purple")}>
              Contacto
            </Link>
          </nav>

          {/* Botón CTA */}
          <div className="hidden md:block">
            <Link 
              to="/contacto" 
              className="bg-gradient-to-r from-iaeva-blue to-iaeva-purple text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-button hover:translate-y-[-2px]"
            >
              Solicitar Demo
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={cn("block px-4 py-2 rounded-md", 
                location.pathname === "/" ? "bg-iaeva-bg-light text-iaeva-blue font-medium" : "text-gray-700"
              )}
            >
              Inicio
            </Link>
            <Link 
              to="/casos-de-uso" 
              className={cn("block px-4 py-2 rounded-md", 
                location.pathname === "/casos-de-uso" ? "bg-iaeva-bg-light text-iaeva-blue font-medium" : "text-gray-700"
              )}
            >
              Casos de Uso
            </Link>
            <Link 
              to="/blog" 
              className={cn("block px-4 py-2 rounded-md", 
                location.pathname === "/blog" ? "bg-iaeva-bg-light text-iaeva-blue font-medium" : "text-gray-700"
              )}
            >
              Blog
            </Link>
            <Link 
              to="/contacto" 
              className={cn("block px-4 py-2 rounded-md", 
                location.pathname === "/contacto" ? "bg-iaeva-bg-light text-iaeva-blue font-medium" : "text-gray-700"
              )}
            >
              Contacto
            </Link>
            <Link 
              to="/contacto" 
              className="w-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple text-white text-center px-6 py-3 rounded-full font-medium"
            >
              Solicitar Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
