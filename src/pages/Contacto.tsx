
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Contacto = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: '',
      });
      
      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="gradient-text">Contacto</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-iaeva-blue to-iaeva-purple mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Quedamos a vuestra disposición para más detalles.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Información de contacto */}
            <div className="w-full lg:w-1/3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-iaeva-blue mr-4 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-medium mb-1">Dirección</h3>
                      <p className="text-gray-600">Av. Principal #123, Ciudad Médica, Madrid, España</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-iaeva-blue mr-4 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-medium mb-1">Teléfono</h3>
                      <a href="tel:+34756980278" className="text-gray-600 hover:text-iaeva-blue transition-colors">
                        +34 756 98 02 78
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-iaeva-blue mr-4 flex-shrink-0 mt-1" size={22} />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:info@iaeva.com" className="text-gray-600 hover:text-iaeva-blue transition-colors">
                        info@iaeva.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium mb-4">Redes Sociales</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-iaeva-bg-light flex items-center justify-center text-iaeva-blue hover:bg-iaeva-blue hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-iaeva-bg-light flex items-center justify-center text-iaeva-blue hover:bg-iaeva-blue hover:text-white transition-colors"
                      aria-label="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-iaeva-bg-light flex items-center justify-center text-iaeva-blue hover:bg-iaeva-blue hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-iaeva-blue to-iaeva-purple rounded-2xl shadow-soft p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Horario de Atención</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>9:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>10:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Formulario de contacto */}
            <div className="w-full lg:w-2/3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl shadow-soft p-8">
                <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
                    <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-medium text-green-800 mb-2">¡Mensaje enviado con éxito!</h3>
                    <p className="text-green-700">Gracias por contactarnos. Un miembro de nuestro equipo se pondrá en contacto contigo pronto.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                          Nombre completo *
                        </label>
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          value={formState.nombre}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-iaeva-blue/20 focus:border-iaeva-blue outline-none transition-colors"
                          placeholder="Tu nombre"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-iaeva-blue/20 focus:border-iaeva-blue outline-none transition-colors"
                          placeholder="tu@email.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                          Teléfono
                        </label>
                        <input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formState.telefono}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-iaeva-blue/20 focus:border-iaeva-blue outline-none transition-colors"
                          placeholder="+34 XXX XXX XXX"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1">
                          Empresa/Organización *
                        </label>
                        <input
                          id="empresa"
                          name="empresa"
                          type="text"
                          value={formState.empresa}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-iaeva-blue/20 focus:border-iaeva-blue outline-none transition-colors"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje *
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formState.mensaje}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-iaeva-blue/20 focus:border-iaeva-blue outline-none transition-colors"
                        placeholder="¿Cómo podemos ayudarte?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={cn(
                        "w-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple text-white py-3.5 rounded-lg font-medium transition-all flex items-center justify-center",
                        isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-button hover:translate-y-[-2px]"
                      )}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensaje <Send className="ml-2" size={18} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white rounded-2xl shadow-soft p-6">
              <h2 className="text-2xl font-semibold mb-6">Nuestra Ubicación</h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12139.571067795282!2d-3.6997629779195573!3d40.41677007938949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1662475764422!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de ubicación"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contacto;
