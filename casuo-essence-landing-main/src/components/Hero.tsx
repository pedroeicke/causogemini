import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";
import heroImage from "@/assets/hero-doctor-consultation.jpg";
import MedicalCrossDecoration from "./MedicalCrossDecoration";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-clinic-light/50 to-background" />
      
      {/* Cruzes médicas animadas de fundo */}
      <MedicalCrossDecoration />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm text-secondary-foreground">
              <Star className="w-4 h-4 fill-secondary text-secondary" />
              Clínica Médica Dr. Casuo
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
              Cuidamos de{" "}
              <span className="clinic-gradient-text font-normal">
                você e da sua família
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Atendimento de qualidade nas mais diversas especialidades médicas, 
              exames e outros serviços na área da saúde.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="group text-base bg-secondary hover:bg-secondary/90"
                onClick={() => window.scrollTo({ top: document.getElementById('contato')?.offsetTop || 0, behavior: 'smooth' })}
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-base border-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://wa.me/5548999140306', '_blank')}
              >
                <Phone className="w-5 h-5" />
                (48) 99914-0306
              </Button>
            </div>
            
            {/* Selos */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary animate-glow" />
                Profissionais qualificados
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-secondary animate-glow" />
                Atendimento humanizado
              </div>
            </div>
          </div>
          
          {/* Imagem Hero */}
          <div className="relative animate-fade-in-delayed">
            <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-3xl opacity-30 animate-float" />
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Médico atendendo paciente" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Elemento decorativo ondulado */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-clinic-light to-transparent" />
    </section>
  );
};

export default Hero;
