import React from 'react';
import Section from '../components/Section';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  // Group services by category
  const categories = Object.values(ServiceCategory);

  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Price List</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Transparent pricing for premium services. No hidden costs.
        </p>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto space-y-16">
          {categories.map((cat) => {
            const catServices = SERVICES.filter(s => s.category === cat);
            if (catServices.length === 0) return null;

            return (
              <div key={cat}>
                <h2 className="text-2xl font-bold text-gold-500 mb-8 pb-4 border-b border-white/10">{cat}</h2>
                <div className="grid gap-8">
                  {catServices.map((service) => (
                    <div key={service.id} className="group">
                      <div className="flex items-end mb-2">
                          <h3 className="text-lg md:text-xl font-bold text-white relative z-10 shrink-0 mr-4">{service.title}</h3>
                          {/* Flex grow container for the line */}
                          <div className="flex-grow border-b-2 border-dotted border-gray-700/50 mb-2 relative z-0"></div>
                          <span className="text-xl md:text-2xl font-mono text-white relative z-10 shrink-0 ml-4">${service.price}</span>
                      </div>
                      <p className="text-gray-500 text-sm max-w-lg">{service.description} • {service.duration} min</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
            <div className="glass-card p-8 inline-block rounded-xl max-w-xl w-full">
                <h3 className="text-2xl font-bold text-white mb-2">Ready to look your best?</h3>
                <p className="text-gray-400 mb-6">Appointments fill up fast. Secure your slot today.</p>
                <Link 
                    to="/booking"
                    className="inline-block px-8 py-3 bg-gold-500 text-navy-950 font-bold uppercase tracking-wider text-sm rounded hover:bg-white transition-colors shadow-lg"
                >
                    Book an Appointment
                </Link>
            </div>
        </div>
      </Section>
    </div>
  );
};

export default Pricing;