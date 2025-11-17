import { Stethoscope, Activity, Users, Heart, TestTube, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import MedicalCrossDecoration from "./MedicalCrossDecoration";

const services = [
  {
    icon: Stethoscope,
    title: "Clínica Geral",
    description: "Atendimento médico completo para toda a família com profissionais experientes.",
    delay: "0ms"
  },
  {
    icon: Heart,
    title: "Cardiologia",
    description: "Cuidados especializados para a saúde do seu coração com equipamentos modernos.",
    delay: "100ms"
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Tratamentos de reabilitação e pilates para seu bem-estar físico.",
    delay: "200ms"
  },
  {
    icon: TestTube,
    title: "Exames Laboratoriais",
    description: "Laboratório completo para diagnóstico preciso e rápido.",
    delay: "300ms"
  },
  {
    icon: Brain,
    title: "Neurologia",
    description: "Tratamento especializado para doenças neurológicas com tecnologia avançada.",
    delay: "400ms"
  },
  {
    icon: Users,
    title: "Pediatria",
    description: "Cuidado especial e atencioso para a saúde das crianças.",
    delay: "500ms"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Cruzes médicas de fundo */}
      <MedicalCrossDecoration />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            O Que Fazemos
          </span>
          <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-6">
            Nossas{" "}
            <span className="clinic-gradient-text font-normal">Especialidades</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Atendimento completo em diversas áreas médicas com profissionais 
            altamente qualificados e dedicados ao seu bem-estar.
          </p>
        </div>
        
        {/* Grid de Serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover-lift border-border/50 bg-card animate-slide-up"
              style={{ animationDelay: service.delay }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-medium">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
