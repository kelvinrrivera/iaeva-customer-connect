
import Step from './Step';

const StepsContainer = () => {
  const steps = [
    {
      number: "1",
      title: "Interacción Inicial",
      description: "El paciente contacta a través de WhatsApp o el widget web. IAEVA inicia la conversación y responde consultas básicas.",
      delay: "0.1s",
      color: "from-iaeva-blue to-iaeva-teal"
    },
    {
      number: "2",
      title: "Resolución o Transferencia",
      description: "IAEVA resuelve la consulta directamente o, si es necesario, transfiere la conversación a un agente humano sin perder contexto.",
      delay: "0.2s",
      color: "from-iaeva-teal to-iaeva-purple"
    },
    {
      number: "3",
      title: "Gestión de Citas",
      description: "El sistema puede agendar, modificar o cancelar citas, optimizando automáticamente los horarios y enviando recordatorios.",
      delay: "0.3s",
      color: "from-iaeva-purple to-iaeva-blue"
    },
    {
      number: "4",
      title: "Seguimiento Continuo",
      description: "IAEVA envía recordatorios 24 horas antes de la cita y facilita la confirmación, reprogramación o cancelación si es necesario.",
      delay: "0.4s",
      color: "from-iaeva-blue to-iaeva-purple"
    }
  ];

  return (
    <div className="space-y-8">
      {steps.map((step, index) => (
        <Step 
          key={index}
          number={step.number}
          title={step.title}
          description={step.description}
          delay={step.delay}
          color={step.color}
        />
      ))}
    </div>
  );
};

export default StepsContainer;
