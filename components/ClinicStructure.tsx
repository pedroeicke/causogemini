
import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const images = [
    { src: 'https://picsum.photos/seed/reception/800/600', alt: 'Recepção da clínica', title: 'Recepção Acolhedora' },
    { src: 'https://picsum.photos/seed/office/800/600', alt: 'Consultório médico', title: 'Consultórios Modernos' },
    { src: 'https://picsum.photos/seed/equipment/800/600', alt: 'Equipamentos de estética', title: 'Tecnologia Avançada' },
];

const ParallaxImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById(alt);
            if (element) {
                const rect = element.getBoundingClientRect();
                const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                if (scrollPercent >= 0 && scrollPercent <= 1) {
                    setOffsetY((scrollPercent - 0.5) * 50); // Adjust multiplier for parallax intensity
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [alt]);

    return (
        <div id={alt} className="overflow-hidden rounded-lg shadow-2xl h-96">
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-out"
                style={{ transform: `scale(1.1) translateY(${offsetY}px)` }}
            />
        </div>
    );
};

const ClinicStructure: React.FC = () => {
    return (
        <section className="py-20 bg-light-gray">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-petrol">Nossa <span className="font-semibold">Estrutura</span></h2>
                    <p className="text-lg text-soft-black mt-2">Um ambiente projetado para seu conforto e segurança.</p>
                    <div className="w-24 h-1 bg-gold mt-4 mx-auto"></div>
                </AnimatedSection>
                <div className="grid md:grid-cols-3 gap-8">
                    {images.map((image, index) => (
                        <AnimatedSection key={image.alt} delay={index * 150}>
                            <div className="relative">
                                <ParallaxImage src={image.src} alt={image.alt} />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-4 text-white text-center font-semibold text-lg backdrop-blur-sm rounded-b-lg">
                                    {image.title}
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClinicStructure;
