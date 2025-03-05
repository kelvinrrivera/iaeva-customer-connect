
import React from 'react';

interface FloatingChatProps {
  className?: string;
}

const FloatingChat: React.FC<FloatingChatProps> = ({ className = "" }) => {
  return (
    <div className={`absolute -bottom-6 -left-6 p-4 bg-white/90 backdrop-blur-md border border-white/20 rounded-xl shadow-soft max-w-xs animate-pulse-soft ${className}`}>
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
  );
};

export default FloatingChat;
