
import React from 'react';
import AnimatedSection from './AnimatedSection';

const features = [
    { icon: '⭐', title: 'Resultados naturais e personalizados', description: 'Tratamentos que respeitam sua individualidade e realçam sua beleza.' },
    { icon: '🔬', title: 'Tecnologia de ponta', description: 'Equipamentos modernos e seguros para garantir os melhores resultados.' },
    { icon: '❤️', title: 'Atendimento humano e atencioso', description: 'Cuidamos de você com empatia e dedicação em cada etapa.' },
    { icon: '💎', title: 'Protocolos exclusivos', description: 'Combinações de tratamentos desenvolvidas para potencializar seus resultados.' },
    { icon: '🛋️', title: 'Ambiente premium e acolhedor', description: 'Um espaço pensado para o seu conforto, segurança e bem-estar.' },
];

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-20 bg-light-gray">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-petrol">Por que escolher a <span className="font-semibold">Clínica Dr. Casuo</span></h2>
                     <div className="w-24 h-1 bg-gold mt-4 mx-auto"></div>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <AnimatedSection key={feature.title} delay={index * 100} className="w-full">
                            <div className="bg-white p-6 rounded-lg text-center h-full border border-transparent hover:border-gold transition-all duration-300 shadow-md">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-petrol mb-2">{feature.title}</h3>
                                <p className="text-soft-black">{feature.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
