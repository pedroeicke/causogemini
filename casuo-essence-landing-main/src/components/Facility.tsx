import receptionImage from "@/assets/clinic-reception.jpg";
import equipmentImage from "@/assets/equipment-room.jpg";

const Facility = () => {
  return (
    <section className="py-24 bg-clinic-light">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            Nossa Estrutura
          </span>
          <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-6">
            Ambiente{" "}
            <span className="clinic-gradient-text font-normal">
              Premium
            </span>{" "}
            e Acolhedor
          </h2>
          <p className="text-lg text-muted-foreground">
            Espaço moderno, confortável e equipado com tecnologia de ponta 
            para garantir sua segurança e conforto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="relative animate-slide-up overflow-hidden rounded-2xl shadow-medium hover-lift">
            <img 
              src={receptionImage} 
              alt="Recepção da clínica" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
              <h3 className="text-white text-2xl font-light">Recepção Elegante</h3>
              <p className="text-white/80 mt-2">Ambiente acolhedor e sofisticado</p>
            </div>
          </div>
          
          <div className="relative animate-slide-up overflow-hidden rounded-2xl shadow-medium hover-lift" style={{ animationDelay: "150ms" }}>
            <img 
              src={equipmentImage} 
              alt="Sala de procedimentos" 
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent">
              <h3 className="text-white text-2xl font-light">Equipamentos Modernos</h3>
              <p className="text-white/80 mt-2">Tecnologia de última geração</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facility;
