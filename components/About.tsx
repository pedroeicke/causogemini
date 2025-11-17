
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
    return (
        <section id="sobre" className="py-20 bg-light-gray">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <AnimatedSection className="lg:w-2/5">
                        <div className="relative">
                           <div className="absolute top-0 left-0 w-full h-full bg-petrol rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
                            <img 
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Dr. Casuo" 
                                className="relative rounded-lg shadow-xl w-full h-auto" 
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="lg:w-3/5" delay={200}>
                        <h2 className="text-3xl md:text-4xl font-light text-petrol mb-4">Dr. Casuo: Excelência em Medicina <span className="font-semibold">Estética e Integrativa</span></h2>
                        <div className="w-24 h-1 bg-gold mb-6"></div>
                        <p className="text-soft-black text-lg mb-6 leading-relaxed">
                            Na Clínica Dr. Casuo, unimos tecnologia, conhecimento científico e cuidado humano para oferecer tratamentos seguros e resultados naturais. Cada plano é individualizado, considerando sua saúde, história e objetivos.
                        </p>
                        <p className="text-soft-black text-lg leading-relaxed">
                           Nossa missão é realçar sua beleza única e promover um bem-estar completo, de dentro para fora, através de uma abordagem que integra o melhor da estética avançada com a saúde do corpo como um todo.
                        </p>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

export default About;
