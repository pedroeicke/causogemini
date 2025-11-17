
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Partners from './components/Partners';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';

// Define the BackgroundEffects component within App.tsx
const BackgroundEffects: React.FC = () => {
    const effects = Array.from({ length: 25 }); // Generate 25 '+' symbols

    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            {effects.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    fontSize: `${Math.random() * 2 + 0.5}rem`, // 0.5rem to 2.5rem
                    animationDelay: `${Math.random() * 15}s`,
                    animationDuration: `${Math.random() * 10 + 10}s`, // 10s to 20s
                };
                return (
                    <span key={i} className="plus-effect" style={style}>
                        +
                    </span>
                );
            })}
        </div>
    );
};


const App: React.FC = () => {
  return (
    <div className="bg-white font-montserrat overflow-x-hidden relative">
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <WhyChooseUs /> {/* This serves as the "Benefits" section */}
        <Process /> {/* This serves as the "How it works" section */}
        <Pricing />
        <Testimonials />
        <FAQ />
        <ContactForm /> {/* This serves as the "CTA Section" */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
