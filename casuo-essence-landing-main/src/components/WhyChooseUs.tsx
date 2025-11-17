import { CheckCircle, Award, Users, HeartHandshake, Clock } from "lucide-react";
import MedicalCrossDecoration from "./MedicalCrossDecoration";

const reasons = [
  {
    icon: Clock,
    title: "Tradição e Experiência",
    description: "Mais de 40 anos cuidando da saúde de Florianópolis e região."
  },
  {
    icon: Users,
    title: "Equipe Qualificada",
    description: "Profissionais experientes e em constante atualização."
  },
  {
    icon: HeartHandshake,
    title: "Atendimento Humanizado",
    description: "Cuidado individual, escuta ativa e respeito ao paciente."
  },
  {
    icon: Award,
    title: "Estrutura Completa",
    description: "Clínica equipada para diversas especialidades e exames."
  },
  {
    icon: CheckCircle,
    title: "Convênios Aceitos",
    description: "Trabalhamos com os principais planos de saúde da região."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-clinic-light relative overflow-hidden">
      {/* Cruzes médicas de fundo */}
      <MedicalCrossDecoration />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            Diferenciais
          </span>
          <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-6">
            Por que escolher a{" "}
            <span className="clinic-gradient-text font-normal">
              Clínica Dr. Casuo
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tradição, qualidade e dedicação ao cuidado com você e sua família.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 mb-4">
                <reason.icon className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-medium">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
