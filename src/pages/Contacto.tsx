
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const EvaAnimation = () => {
  return (
    <div className="loader">
      <div className="modelViewPort">
        <div className="eva">
          <div className="head">
            <div className="eyeChamber">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
          </div>
          <div className="body">
            <div className="hand"></div>
            <div className="hand"></div>
            <div className="scannerThing"></div>
            <div className="scannerOrigin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contacto = () => {
  const [calLoaded, setCalLoaded] = useState(false);

  useEffect(() => {
    // Cargar el script de Cal.com
    const script = document.createElement('script');
    script.src = "https://appointment.kelvinscale.net/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (typeof window.Cal !== 'undefined') {
        window.Cal("init", "kelvinscale-demo", {origin: "https://appointment.kelvinscale.net"});
        
        // Initialize inline calendar
        window.Cal.ns["kelvinscale-demo"]("inline", {
          elementOrSelector: "#my-cal-inline",
          config: {
            "layout": "month_view",
            "theme": "light"
          },
          calLink: "kelvinscale/kelvinscale-demo",
        });

        window.Cal.ns["kelvinscale-demo"]("ui", {
          "theme": "light",
          "styles": {"branding": {"brandColor": "#0EA5E9"}},
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
        
        setCalLoaded(true);
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow pt-32 pb-20 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-noise-pattern opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-radial from-iaeva-light-purple/20 to-transparent opacity-30 blur-3xl pointer-events-none"></div>
        
        {/* Breadcrumb Section */}
        <section className="relative mb-16">
          <div className="container mx-auto px-4">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Hablemos de IA</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-iaeva-blue to-iaeva-purple mx-auto"></div>
            </div>
          </div>
        </section>
        
        {/* Calendar Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10 animate-fade-in-up">
                <h2 className="text-3xl font-display font-bold mb-6">
                  Reserva tu llamada <span className="gradient-text">gratis</span> <Phone className="inline-block ml-2" />
                </h2>
              </div>
              
              <div className="glass-panel p-6 mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div style={{width:"100%", height:"700px", overflow:"hidden"}} id="my-cal-inline" className="rounded-lg">
                  {!calLoaded && (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-iaeva-blue"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Chat with IAEVA Section */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 animate-fade-in-up">
              <h2 className="text-3xl font-display font-bold mb-6">
                O pregúntale a <span className="gradient-text">IAEVA</span>, lo sabe todo sobre IA <MessageSquare className="inline-block ml-2" />
              </h2>
            </div>
            
            <div className="glass-panel p-8 relative mb-20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col lg:flex-row gap-10">
                {/* IAEVA Avatar and Intro */}
                <div className="lg:w-1/3">
                  <div className="bg-white/50 rounded-xl p-6 shadow-soft flex flex-col items-center">
                    <div className="mb-6 w-32 h-32 relative">
                      <EvaAnimation />
                    </div>
                    <p className="text-gray-700 text-center">
                      ¡Hola! Soy IAEVA, y me han entrenado para convencerte (amablemente, claro) de que agendes una llamada con nosotros. Así que si no quieres caer en mis encantos, mejor no empieces este chat. 😉
                    </p>
                  </div>
                </div>
                
                {/* Chatbot iframe */}
                <div className="lg:w-2/3">
                  <iframe
                    src="https://app.kelvinscale.net/chatbot/YRgSWkFdgheIlKgb"
                    style={{ width: "100%", height: "700px", borderRadius: "12px" }}
                    frameBorder="0"
                    allow="microphone"
                    title="IAEVA Chatbot"
                    className="shadow-glass"
                    id="iaeva-chat"
                  ></iframe>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-tr from-iaeva-blue to-iaeva-purple rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Script to modify iframe styles */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('iaeva-chat').onload = function() {
            try {
              const styleSheet = this.contentDocument.createElement('style');
              styleSheet.textContent = \`
                .text-gray-400 {
                  --tw-text-opacity: 1;
                  color: rgb(152 162 179 / var(--tw-text-opacity));
                  display: none;
                }
              \`;
              this.contentDocument.head.appendChild(styleSheet);
            } catch (e) {
              console.log('No se puede acceder al contenido del iframe debido a políticas de mismo origen');
            }
          };
        `
      }} />
    </div>
  );
};

// Add Cal.com types for TypeScript
declare global {
  interface Window {
    Cal: any;
  }
}

export default Contacto;
