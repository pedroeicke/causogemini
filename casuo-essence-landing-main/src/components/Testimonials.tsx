import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Ana Paula Silva",
    treatment: "Harmonização Facial",
    text: "O resultado ficou tão natural que as pessoas acham que eu apenas descansé bem. A equipe é extremamente atenciosa e cuidadosa. Recomendo de olhos fechados!",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    treatment: "Bioestimuladores",
    text: "Profissionais altamente qualificados, ambiente impecável e resultados surpreendentes. Minha pele está muito mais firme e com aspecto saudável.",
    rating: 5
  },
  {
    name: "Marina Costa",
    treatment: "Tratamento Corporal",
    text: "Fui tratada com muito respeito e individualidade. O protocolo foi desenhado especialmente para mim, considerando meu histórico e objetivos. Estou muito feliz!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-secondary text-sm font-medium tracking-wider uppercase">
            Depoimentos
          </span>
          <h2 className="text-4xl lg:text-5xl font-light mt-4 mb-6">
            O que nossos{" "}
            <span className="clinic-gradient-text font-normal">pacientes</span>{" "}
            dizem
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-secondary">{testimonial.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
