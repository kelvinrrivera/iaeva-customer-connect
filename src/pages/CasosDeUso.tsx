import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Building, Hospital, Beaker, Calendar, MessageSquare, Clock, Heart } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const CasosDeUso = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-iaeva-bg-light to-white z-0"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6 gradient-text">
                Casos de Uso de IAEVA en el Sector Médico
              </h1>
              <p className="text-lg text-gray-700 mb-10">
                Descubre cómo nuestra asistente virtual está transformando la atención al paciente 
                y optimizando la gestión de clínicas, hospitales y laboratorios.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases Tabs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Clínicas */}
              <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="h-48 bg-gradient-to-r from-iaeva-blue/20 to-iaeva-purple/20 flex items-center justify-center">
                  <Building size={72} className="text-iaeva-blue" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Clínicas Médicas</h3>
                  <p className="text-gray-600 mb-4">
                    Optimice la gestión de pacientes y reduzca las ausencias a citas con nuestra asistente virtual disponible 24/7.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Reducción del 60% en no-shows gracias a recordatorios automáticos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Gestión inteligente de agendas médicas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Atención al paciente 24/7 sin incrementar costos</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contacto" 
                    className="text-iaeva-blue font-medium inline-flex items-center hover:text-iaeva-purple transition-colors"
                  >
                    Ver cómo implementarlo <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Hospitales */}
              <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="h-48 bg-gradient-to-r from-iaeva-blue/20 to-iaeva-purple/20 flex items-center justify-center">
                  <Hospital size={72} className="text-iaeva-blue" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Hospitales</h3>
                  <p className="text-gray-600 mb-4">
                    Agilice los procesos de admisión y seguimiento de pacientes mientras reduce la carga de trabajo administrativo.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Atención personalizada y respuestas inmediatas a consultas comunes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Mejora en la eficiencia del personal administrativo</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Coordinación inteligente entre departamentos</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contacto" 
                    className="text-iaeva-blue font-medium inline-flex items-center hover:text-iaeva-purple transition-colors"
                  >
                    Ver cómo implementarlo <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>

              {/* Laboratorios */}
              <div className="bg-white rounded-xl shadow-soft overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-4px]">
                <div className="h-48 bg-gradient-to-r from-iaeva-blue/20 to-iaeva-purple/20 flex items-center justify-center">
                  <Beaker size={72} className="text-iaeva-blue" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Laboratorios</h3>
                  <p className="text-gray-600 mb-4">
                    Mejore la comunicación con los pacientes y optimice la entrega de resultados con nuestra plataforma integrada.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Notificaciones automáticas sobre disponibilidad de resultados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Resolución de dudas sobre preparación para exámenes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle size={18} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">Gestión de citas para toma de muestras sin esperas</span>
                    </li>
                  </ul>
                  <Link 
                    to="/contacto" 
                    className="text-iaeva-blue font-medium inline-flex items-center hover:text-iaeva-purple transition-colors"
                  >
                    Ver cómo implementarlo <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Funcionalidades Principales */}
        <section className="py-16 bg-iaeva-bg-light">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-6">Funcionalidades que Transforman la Atención Médica</h2>
              <p className="text-lg text-gray-700">
                IAEVA ofrece un conjunto completo de herramientas diseñadas específicamente para el sector médico, mejorando la experiencia tanto de pacientes como de profesionales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {/* Gestión de Citas */}
              <div className={cn(
                "rounded-xl p-6 transition-all relative",
                "bg-white shadow-soft hover:shadow-lg"
              )}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple flex items-center justify-center mb-4">
                  <Calendar className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Gestión Inteligente de Citas</h3>
                <p className="text-gray-600 mb-4">
                  Un sistema avanzado que permite a pacientes, médicos y personal administrativo gestionar el calendario de forma óptima.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Agendamiento automático según disponibilidad</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Recordatorios personalizados para reducir ausencias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Reagendamiento conversacional mediante IA</span>
                  </li>
                </ul>
              </div>

              {/* Asistente Virtual */}
              <div className={cn(
                "rounded-xl p-6 transition-all relative",
                "bg-white shadow-soft hover:shadow-lg"
              )}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple flex items-center justify-center mb-4">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Asistente Virtual Humanizado</h3>
                <p className="text-gray-600 mb-4">
                  Una IA conversacional entrenada específicamente para atención médica, con capacidad para derivar a humanos cuando sea necesario.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Respuestas precisas a consultas frecuentes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Detección inteligente de casos que requieren atención humana</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Integración con WhatsApp y chat web</span>
                  </li>
                </ul>
              </div>

              {/* Recordatorios */}
              <div className={cn(
                "rounded-xl p-6 transition-all relative",
                "bg-white shadow-soft hover:shadow-lg"
              )}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple flex items-center justify-center mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sistema de Recordatorios</h3>
                <p className="text-gray-600 mb-4">
                  Notificaciones automáticas que reducen significativamente las ausencias a citas programadas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Secuencia de recordatorios: confirmación, 24h antes, día de la cita</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Opción de cancelar o reagendar directamente desde WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Seguimiento post-consulta personalizado</span>
                  </li>
                </ul>
              </div>

              {/* Experiencia de Paciente */}
              <div className={cn(
                "rounded-xl p-6 transition-all relative",
                "bg-white shadow-soft hover:shadow-lg"
              )}>
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-iaeva-blue to-iaeva-purple flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Mejora de Experiencia del Paciente</h3>
                <p className="text-gray-600 mb-4">
                  Herramientas diseñadas para crear una experiencia fluida y positiva para los pacientes en todo momento.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Atención personalizada basada en historial</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Respuestas instantáneas a consultas 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-iaeva-teal mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Indicaciones claras y accesibles sobre procedimientos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Métricas de Impacto */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold font-display mb-6">Resultados Medibles</h2>
              <p className="text-lg text-gray-700">
                Nuestros clientes han experimentado mejoras significativas en sus operaciones tras implementar IAEVA en sus centros médicos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-iaeva-bg-light rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-iaeva-blue mb-2">60%</h3>
                <p className="text-gray-700">Reducción en ausencias a citas médicas</p>
              </div>
              <div className="bg-iaeva-bg-light rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-iaeva-blue mb-2">75%</h3>
                <p className="text-gray-700">Consultas resueltas automáticamente</p>
              </div>
              <div className="bg-iaeva-bg-light rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-iaeva-blue mb-2">40%</h3>
                <p className="text-gray-700">Reducción en tiempo administrativo</p>
              </div>
              <div className="bg-iaeva-bg-light rounded-xl p-6 text-center">
                <h3 className="text-4xl font-bold text-iaeva-blue mb-2">90%</h3>
                <p className="text-gray-700">Satisfacción del paciente</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-iaeva-blue to-iaeva-purple py-16 px-8 md:px-12">
              {/* Elementos decorativos */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  ¿Listo para transformar la experiencia de tus pacientes?
                </h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Solicita una demostración personalizada y descubre cómo IAEVA puede adaptarse a las necesidades específicas de tu centro médico.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contacto" 
                    className="bg-white text-iaeva-blue px-8 py-3.5 rounded-full font-medium transition-all hover:shadow-lg hover:translate-y-[-2px] inline-flex items-center justify-center"
                  >
                    Solicitar Demo <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CasosDeUso;
