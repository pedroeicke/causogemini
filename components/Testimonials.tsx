
import React from 'react';
import AnimatedSection from './AnimatedSection';

const testimonials = [
    {
        name: 'Juliana P.',
        avatar: 'https://picsum.photos/seed/woman1/100/100',
        text: 'Atendimento impecável e resultados que superaram minhas expectativas. Me senti segura e acolhida do início ao fim.'
    },
    {
        name: 'Marcos R.',
        avatar: 'https://picsum.photos/seed/man1/100/100',
        text: 'Profissionalismo e conhecimento técnico admiráveis. O Dr. Casuo entendeu exatamente o que eu buscava: um resultado natural.'
    },
    {
        name: 'Fernanda L.',
        avatar: 'https://picsum.photos/seed/woman2/100/100',
        text: 'A clínica é linda e a equipe toda é muito atenciosa. Recomendo de olhos fechados! Minha autoestima foi renovada.'
    },
];

const StarRating = () => (
    <div className="flex text-gold">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        ))}
    </div>
);


const Testimonials: React.FC = () => {
    return (
        <section id="depoimentos" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-petrol">O que nossos <span className="font-semibold">pacientes dizem</span></h2>
                    <div className="w-24 h-1 bg-gold mt-4 mx-auto"></div>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                         <AnimatedSection key={testimonial.name} delay={index * 150} className="w-full">
                             <div className="bg-light-gray p-8 rounded-lg h-full flex flex-col justify-between shadow-sm">
                                <div>
                                    <StarRating />
                                    <p className="text-soft-black my-4 italic">"{testimonial.text}"</p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                                    <span className="font-semibold text-petrol">{testimonial.name}</span>
                                </div>
                             </div>
                         </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
