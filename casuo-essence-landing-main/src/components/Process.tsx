import { FileSearch, Calendar, Activity, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    number: "01",
    title: "Avaliação",
    description: "Entendemos sua história, objetivos e necessidades com uma escuta atenta."
  },
  {
    icon: Calendar,
    number: "02",
    title: "Planejamento",
    description: "Montamos um plano de tratamento exclusivo para você, baseado em ciência."
  },
  {
    icon: Activity,
    number: "03",
    title: "Procedimentos",
    description: "Executamos cada etapa com precisão, segurança e cuidado humanizado."
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Acompanhamento",
    description: "Monitoramos sua evolução e ajustamos o protocolo quando necessário."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            Como Funciona
          </span>
          <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-6">
            Processo de{" "}
            <span className="clinic-gradient-text font-normal">Atendimento</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Do primeiro contato até o acompanhamento contínuo, cada etapa é pensada 
            para garantir sua segurança, conforto e satisfação.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Linha conectora */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-secondary/50 to-transparent -translate-x-4" />
              )}
              
              <div className="relative text-center space-y-4">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 mb-4 relative">
                  <step.icon className="w-10 h-10 text-secondary" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-medium">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
