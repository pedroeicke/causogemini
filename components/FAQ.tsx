
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const faqData = [
    {
        question: 'Qual a duração dos resultados dos tratamentos?',
        answer: 'A duração varia conforme o procedimento. Botox dura de 4 a 6 meses, enquanto preenchedores podem durar mais de um ano. Bioestimuladores têm efeito progressivo e duradouro. Na sua avaliação, traçaremos um plano com expectativas realistas.'
    },
    {
        question: 'Os procedimentos são dolorosos?',
        answer: 'Nossa prioridade é o seu conforto. Utilizamos anestésicos tópicos e técnicas minimamente invasivas para garantir uma experiência tranquila e com o mínimo de desconforto possível.'
    },
    {
        question: 'Como funciona a primeira consulta de avaliação?',
        answer: 'A primeira consulta é uma conversa detalhada para entendermos seus objetivos, histórico de saúde e avaliarmos sua pele e estrutura facial/corporal. A partir daí, criamos um plano de tratamento 100% personalizado para você.'
    },
    {
        question: 'Quais são as formas de pagamento?',
        answer: 'Aceitamos diversas formas de pagamento, incluindo cartões de crédito (com parcelamento), débito, PIX e transferência bancária. Consulte nossas condições especiais durante sua avaliação.'
    }
];

const FaqItem: React.FC<{ item: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-petrol focus:outline-none"
            >
                <span>{item.question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-soft-black leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 bg-light-gray">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-light text-petrol">Perguntas <span className="font-semibold">Frequentes</span></h2>
                     <div className="w-24 h-1 bg-gold mt-4 mx-auto"></div>
                </AnimatedSection>
                <AnimatedSection delay={200}>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                        {faqData.map((item, index) => (
                            <FaqItem
                                key={index}
                                item={item}
                                isOpen={openIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default FAQ;
