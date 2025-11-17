
import React from 'react';
import AnimatedSection from './AnimatedSection';

const partners = ['VOGUE', 'GLAMOUR', 'FORBES', 'ESTADÃO', 'SAÚDE'];

const Partners: React.FC = () => {
    return (
        <section className="py-16 bg-light-gray">
            <div className="container mx-auto px-6 text-center">
                <AnimatedSection>
                    <h3 className="text-sm font-semibold text-soft-black/60 uppercase tracking-widest mb-8">
                        Destaque na mídia e confiança de nossos parceiros
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
                        {partners.map(partner => (
                            <span key={partner} className="text-2xl font-bold text-gray-400 grayscale hover:grayscale-0 hover:text-gray-600 transition-all duration-300">
                                {partner}
                            </span>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Partners;
