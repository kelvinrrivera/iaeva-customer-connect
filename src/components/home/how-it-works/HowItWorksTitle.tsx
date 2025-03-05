
import React from 'react';

interface HowItWorksTitleProps {
  className?: string;
}

const HowItWorksTitle: React.FC<HowItWorksTitleProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <span className="inline-block px-4 py-1.5 rounded-full bg-iaeva-bg-light text-iaeva-blue font-medium text-sm mb-3">
        Proceso Sencillo
      </span>
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
        Cómo IAEVA <span className="gradient-text">transforma</span> la atención médica
      </h2>
      <p className="text-gray-600 mb-8">
        Un sistema integral que combina inteligencia artificial y atención humana para ofrecer una experiencia excepcional en cada punto de contacto con el paciente.
      </p>
    </div>
  );
};

export default HowItWorksTitle;
