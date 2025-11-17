
import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    alert('Obrigado! Sua mensagem foi enviada.');
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  return (
    <section id="contato" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 lg:flex lg:items-center lg:gap-12">
          <AnimatedSection className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-light text-petrol mb-4">Pronto(a) para transformar sua <span className="font-semibold">autoestima?</span></h2>
            <div className="w-24 h-1 bg-gold mb-6"></div>
            <p className="text-lg text-soft-black leading-relaxed">
              Agende agora a sua avaliação com nossos especialistas e descubra qual é o melhor protocolo para o seu momento.
            </p>
          </AnimatedSection>
          <AnimatedSection className="lg:w-1/2" delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nome completo" required className="w-full p-4 border border-gray-300 rounded-md focus:border-gold focus:ring-gold focus:ring-1 outline-none transition-all duration-300" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu melhor e-mail" required className="w-full p-4 border border-gray-300 rounded-md focus:border-gold focus:ring-gold focus:ring-1 outline-none transition-all duration-300" />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefone / WhatsApp" required className="w-full p-4 border border-gray-300 rounded-md focus:border-gold focus:ring-gold focus:ring-1 outline-none transition-all duration-300" />
              <select name="interest" value={formData.interest} onChange={handleChange} className="w-full p-4 border border-gray-300 rounded-md focus:border-gold focus:ring-gold focus:ring-1 outline-none transition-all duration-300 bg-white">
                <option value="">Tenho interesse em...</option>
                <option value="harmonizacao">Harmonização Facial</option>
                <option value="botox">Botox e Preenchimentos</option>
                <option value="corporal">Tratamentos Corporais</option>
                <option value="laser">Laser e Tecnologias</option>
                <option value="integrativa">Saúde Integrativa</option>
                <option value="avaliacao">Agendar uma avaliação</option>
              </select>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Sua mensagem (opcional)" rows={4} className="w-full p-4 border border-gray-300 rounded-md focus:border-gold focus:ring-gold focus:ring-1 outline-none transition-all duration-300"></textarea>
              <button type="submit" className="w-full bg-petrol text-white p-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-[0_10px_20px_rgba(30,58,95,0.2)]">
                Agendar Agora
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
