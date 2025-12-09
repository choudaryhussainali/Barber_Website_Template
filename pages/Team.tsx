import React from 'react';
import Section from '../components/Section';
import { BARBERS } from '../constants';
import { Instagram, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Team: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-navy-900 py-20 px-6 text-center">
        <h1 className="text-5xl font-display font-bold text-white mb-4">Our Master Barbers</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Meet the artisans behind the chair. Years of experience, passion for style.
        </p>
      </div>
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-xl aspect-[4/5]">
                <img 
                  src={barber.image} 
                  alt={barber.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="flex gap-4">
                     <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors">
                        <Instagram size={20} className="text-navy-950" />
                     </button>
                     <Link to="/booking" className="px-6 py-2 bg-gold-500 text-navy-950 font-bold rounded-full flex items-center text-sm uppercase">
                        Book Now
                     </Link>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-1">{barber.name}</h3>
              <p className="text-gold-500 uppercase tracking-widest text-xs font-bold mb-4">{barber.role}</p>
              
              <div className="flex justify-center items-center gap-6 text-sm text-gray-400 border-t border-white/10 pt-4 mx-8">
                 <div className="flex flex-col">
                    <span className="font-bold text-white">{barber.experience} Years</span>
                    <span>Experience</span>
                 </div>
                 <div className="w-[1px] h-8 bg-white/10"></div>
                 <div className="flex flex-col">
                    <span className="font-bold text-white flex items-center gap-1 justify-center">
                      {barber.rating} <Star size={12} className="fill-gold-500 text-gold-500" />
                    </span>
                    <span>Rating</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Team;