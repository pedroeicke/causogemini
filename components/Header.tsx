
import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Sobre', href: '#sobre' },
  { name: 'Tratamentos', href: '#tratamentos' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Contato', href: '#contato' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-petrol">Dr. Casuo</a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-soft-black hover:text-gold transition-colors duration-300">{link.name}</a>
          ))}
          <a href="#contato" className="bg-petrol text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 text-sm">
            Agendar Avaliação
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-petrol focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-soft-black hover:text-gold transition-colors duration-300">{link.name}</a>
            ))}
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="bg-petrol text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all duration-300 text-sm">
              Agendar Avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
