
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-iaeva-bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-display font-bold">
                <span className="text-iaeva-light-blue">IA</span>
                <span className="text-iaeva-light-purple">EVA</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4">
              Transformando la atención al cliente en el sector médico con inteligencia artificial humanizada y gestión inteligente de citas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-iaeva-light-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iaeva-light-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iaeva-light-blue transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-iaeva-light-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Enlaces Útiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/casos-de-uso" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Casos de Uso
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Nuestros Servicios</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Atención al Cliente IA
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Gestión de Citas
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Integración WhatsApp
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  CRM para Salud
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  Recordatorios Automáticos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-iaeva-light-blue flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300">Av. Principal #123, Ciudad Médica, Madrid, España</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-iaeva-light-blue flex-shrink-0" size={18} />
                <a href="tel:+34756980278" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  +34 756 98 02 78
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-iaeva-light-blue flex-shrink-0" size={18} />
                <a href="mailto:info@iaeva.com" className="text-gray-300 hover:text-iaeva-light-blue transition-colors">
                  info@iaeva.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} IAEVA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-iaeva-light-blue text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="#" className="text-gray-400 hover:text-iaeva-light-blue text-sm transition-colors">
                Términos de Servicio
              </Link>
              <Link to="#" className="text-gray-400 hover:text-iaeva-light-blue text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
