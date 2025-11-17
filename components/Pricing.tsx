
import React from 'react';
import AnimatedSection from './AnimatedSection';

const plans = [
    {
        name: 'Tratamentos Faciais',
        description: 'Foco em rejuvenescimento e harmonização da face.',
        features: [
            'Botox e preenchimentos',
            'Bioestimuladores de colágeno',
            'Fios de sustentação',
            'Protocolos para melasma',
            'Limpeza de pele avançada',
        ],
        cta: 'Saiba Mais',
        highlight: false,
    },
    {
        name: 'Planos Integrativos',
        description: 'Cuidado completo que une estética e saúde.',
        features: [
            'Todos os tratamentos faciais',
            'Protocolos corporais personalizados',
            'Reposição hormonal e de vitaminas',
            'Acompanhamento nutricional',
            'Plano de bem-estar completo',
        ],
        cta: 'Agendar Avaliação',
        highlight: true,
    },
    {
        name: 'Tratamentos Corporais',
        description: 'Protocolos para gordura localizada, flacidez e mais.',
        features: [
            'Criolipólise de placas',
            'Tratamento para estrias',
            'Protocolos para celulite',
            'Definição muscular',
            'Pós-operatório',
        ],
        cta: 'Saiba Mais',
        highlight: false,
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="planos" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-petrol">Planos de Tratamento <span className="font-semibold">Personalizados</span></h2>
                    <p className="text-lg text-soft-black mt-2">Encontre a abordagem ideal para seus objetivos de saúde e beleza.</p>
                     <div className="w-24 h-1 bg-gold mt-4 mx-auto"></div>
                </AnimatedSection>
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <AnimatedSection key={plan.name} delay={index * 150} className="w-full h-full flex">
                            <div className={`w-full flex flex-col p-8 rounded-xl border ${plan.highlight ? 'bg-petrol text-white border-petrol scale-105 shadow-2xl' : 'bg-light-gray border-gray-200'}`}>
                                {plan.highlight && (
                                    <div className="text-center mb-4">
                                        <span className="bg-gold text-petrol font-bold text-xs uppercase px-3 py-1 rounded-full">Mais Popular</span>
                                    </div>
                                )}
                                <h3 className={`text-2xl font-semibold mb-2 text-center ${plan.highlight ? 'text-white' : 'text-petrol'}`}>{plan.name}</h3>
                                <p className={`text-center mb-6 h-12 ${plan.highlight ? 'text-white/80' : 'text-soft-black'}`}>{plan.description}</p>
                                <ul className="space-y-4 mb-8 flex-grow">
                                    {plan.features.map(feature => (
                                        <li key={feature} className="flex items-center">
                                            <svg className={`w-5 h-5 mr-3 ${plan.highlight ? 'text-gold' : 'text-petrol'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contato" className={`w-full block text-center mt-auto px-6 py-3 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-105 ${plan.highlight ? 'bg-white text-petrol' : 'bg-petrol text-white'}`}>
                                    {plan.cta}
                                </a>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
