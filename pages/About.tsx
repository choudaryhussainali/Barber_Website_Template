import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-20 px-6 text-center">
        <h1 className="text-5xl font-display font-bold text-white mb-4">Our Story</h1>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">Since 2024</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-6">A New Standard in Grooming</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Royale Barbers was founded with a singular mission: to bring back the lost art of the gentleman's barbershop while infusing it with modern luxury and precision. We are not just cutting hair; we are cultivating confidence.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
               Our spaces are designed to be sanctuaries from the hustle of the city. Industrial chic meets warm leather and polished wood, creating an atmosphere where you can relax with a drink while our master barbers work their magic.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div>
                  <span className="block text-4xl font-mono text-white font-bold mb-2">5k+</span>
                  <span className="text-gold-500 text-sm uppercase tracking-wider">Happy Clients</span>
               </div>
               <div>
                  <span className="block text-4xl font-mono text-white font-bold mb-2">15</span>
                  <span className="text-gold-500 text-sm uppercase tracking-wider">Awards Won</span>
               </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <img src="https://images.unsplash.com/photo-1599351431202-6e0c051cd708?q=80&w=1000&auto=format&fit=crop" className="rounded-lg w-full h-64 object-cover translate-y-8" alt="Interior" />
             <img src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop" className="rounded-lg w-full h-64 object-cover" alt="Tools" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;