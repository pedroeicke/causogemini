
import React from 'react';
import AnimatedSection from './AnimatedSection';

const steps = [
    { num: 1, title: 'Avaliação', description: 'Entendemos sua história, objetivos e necessidades.' },
    { num: 2, title: 'Planejamento', description: 'Montamos um plano de tratamento exclusivo para você.' },
    { num: 3, title: 'Procedimentos', description: 'Executamos cada etapa com precisão e segurança.' },
    { num: 4, title: 'Acompanhamento', description: 'Monitoramos sua evolução e ajustamos quando necessário.' },
];

const Process: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-light text-petrol">Nosso <span className="font-semibold">Processo de Atendimento</span></h2>
                    <div className="w-24 h-1 bg-gold mt-4 mx-auto"></div>
                </AnimatedSection>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                    <div className="grid md:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => (
                            <AnimatedSection key={step.num} delay={index * 200} className="text-center">
                                <div className="relative mb-4">
                                     <div className="w-16 h-16 mx-auto rounded-full bg-petrol text-white flex items-center justify-center text-2xl font-bold border-4 border-white shadow-lg">
                                        {step.num}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-petrol mb-2">{step.title}</h3>
                                <p className="text-soft-black">{step.description}</p>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
