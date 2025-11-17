
import React from 'react';
import AnimatedSection from './AnimatedSection';

const StarIcon = () => (
    <svg className="w-4 h-4 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
    </svg>
);

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-24 md:pt-20">
            <div className="container mx-auto px-6 z-10">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Left Column: Text Content */}
                    <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
                        <AnimatedSection>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-petrol leading-tight mb-4">
                                Cuidamos da sua <span className="font-semibold">saúde, beleza e bem-estar</span> com excelência.
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <p className="text-lg md:text-xl text-soft-black max-w-2xl mx-auto md:mx-0 mb-8">
                                Tratamentos modernos, profissionais especializados e resultados naturais. Seu rosto e seu corpo tratados com respeito, ciência e precisão.
                            </p>
                        </AnimatedSection>
                        <AnimatedSection delay={400} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
                            <a href="#contato" className="w-full sm:w-auto bg-petrol text-white px-10 py-4 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                                Agendar Avaliação
                            </a>
                            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-transparent border-2 border-petrol text-petrol px-10 py-4 rounded-full hover:bg-petrol hover:text-white transition-all duration-300 transform hover:scale-105">
                                Falar no WhatsApp
                            </a>
                        </AnimatedSection>
                         <AnimatedSection delay={500} className="mb-12">
                            <div className="flex items-center justify-center md:justify-start bg-light-gray p-3 rounded-lg max-w-sm mx-auto md:mx-0">
                                <div className="flex -space-x-2 mr-3">
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/p1/50/50" alt="Paciente 1"/>
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/p2/50/50" alt="Paciente 2"/>
                                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/seed/p3/50/50" alt="Paciente 3"/>
                                </div>
                                <p className="text-sm text-soft-black font-medium">Junte-se a mais de <span className="font-bold text-petrol">500 pacientes</span> satisfeitos.</p>
                            </div>
                        </AnimatedSection>
                        <AnimatedSection delay={600} className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 md:gap-8 text-soft-black">
                             <div className="flex items-center">
                                <StarIcon />
                                <span>Profissionais qualificados</span>
                            </div>
                             <div className="flex items-center">
                                <StarIcon />
                                <span>Equipamentos de última geração</span>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right Column: Image */}
                    <div className="md:w-1/2 lg:w-2/5 mt-8 md:mt-0">
                        <AnimatedSection delay={300}>
                            <div className="relative mx-auto max-w-md">
                                <div className="absolute -top-3 -left-3 w-full h-full border-4 border-gold rounded-lg transform -rotate-2"></div>
                                <img 
                                    src="https://images.unsplash.com/photo-1576091160550-2173dba9996a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                    alt="Médico atendendo paciente" 
                                    className="relative w-full h-auto rounded-lg shadow-2xl"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
