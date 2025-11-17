import doctorImage from "@/assets/doctor-male.jpg";
import MedicalCrossDecoration from "./MedicalCrossDecoration";

const About = () => {
  return (
    <section className="py-24 bg-clinic-light relative overflow-hidden">
      {/* Cruzes médicas de fundo */}
      <MedicalCrossDecoration />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagem da equipe */}
          <div className="relative animate-slide-up">
            <div className="absolute -inset-2 bg-secondary/20 rounded-2xl blur-xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-medium hover-lift">
              <img 
                src={doctorImage} 
                alt="Médico da clínica" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Conteúdo */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">
                Sobre Nós
              </span>
              <div className="h-1 w-20 bg-gradient-to-r from-secondary to-transparent mt-2 rounded-full" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light leading-tight">
              Atendimento de{" "}
              <span className="clinic-gradient-text font-normal">
                qualidade e humanizado
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Clínica Dr. Casuo nasceu em Florianópolis no ano de 1977, 
              fundada pelo Dr. Casuo Ishimine e sua esposa Midodi Uema Ishimine.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Há mais de 40 anos oferecemos atendimento de excelência nas mais 
              diversas especialidades médicas, sempre priorizando o cuidado 
              humanizado e a satisfação de nossos pacientes.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-light text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Anos de Tradição</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-primary mb-2">20+</div>
                <div className="text-sm text-muted-foreground">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-light text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
