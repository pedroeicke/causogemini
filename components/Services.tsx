
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { services } from '../constants';
import { Service } from '../types';

const ServiceCard: React.FC<{ service: Service; delay: number }> = ({ service, delay }) => (
    <AnimatedSection delay={delay} className="w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg h-full border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
            <div className="text-gold mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-petrol mb-3">{service.title}</h3>
            <p className="text-soft-black">{service.description}</p>
        </div>
    </AnimatedSection>
);

const Services: React.FC = () => {
    return (
        <section id="tratamentos" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-petrol">Nossos <span className="font-semibold">Tratamentos</span></h2>
                    <p className="text-lg text-soft-black mt-2">Soluções personalizadas para a sua beleza e saúde.</p>
                     <div className="w-24 h-1 bg-gold mt-4 mx-auto"></div>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
