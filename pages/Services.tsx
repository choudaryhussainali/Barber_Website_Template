import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';

interface ServiceSection {
  title: string;
  subtitle: string;
  categories: ServiceCategory[];
  image: string;
}

const SECTIONS: ServiceSection[] = [
  {
    title: "Haircuts & Beards",
    subtitle: "Precision cutting tailored to your unique face shape.",
    categories: [ServiceCategory.HAIRCUT, ServiceCategory.BEARD, ServiceCategory.SHAVE],
    // Image: Haircut scissors
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Styling & Finish",
    subtitle: "The final touches that set you apart.",
    categories: [ServiceCategory.STYLING],
    // Image: Barber products
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Manicure & Pedicure",
    subtitle: "Essential care for hands and feet.",
    categories: [ServiceCategory.MANICURE],
    // Image: Manicure
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Facial & Skincare",
    subtitle: "Rejuvenating treatments for the modern man.",
    categories: [ServiceCategory.FACIAL],
    // Image: Facial
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Waxing Services",
    subtitle: "Professional hair removal for a clean look.",
    categories: [ServiceCategory.WAXING],
    // Image: Waxing/Brows
    image: "https://images.unsplash.com/photo-1672642150262-6edcbffa463e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFpciUyMHdheGluZyUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Hair Treatments",
    subtitle: "Scalp health and color blending.",
    categories: [ServiceCategory.TREATMENT],
    // Image: Hair wash
    image: "https://images.unsplash.com/photo-1693591936914-14645081663a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMHRyZWF0bWVudCUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Signature Packages",
    subtitle: "Curated experiences for special occasions.",
    categories: [ServiceCategory.GROOM, ServiceCategory.EVENT],
    // Image: Groom
    image: "https://images.unsplash.com/photo-1591828208865-52047fa4054c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const Services: React.FC = () => {
  return (
    <div className="pt-20 bg-navy-950 min-h-screen">
      {/* Hero Header */}
      <div className="relative py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-navy-950/90 z-10"></div>
             {/* Image: Barber Shop background */}
             <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover" alt="Services Hero" />
        </div>
        <div className="relative z-20 max-w-4xl mx-auto">
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="text-gold-500 font-bold tracking-[0.3em] uppercase text-sm block mb-4"
             >
               Our Expertise
             </motion.span>
             <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.1 }}
               className="text-5xl md:text-7xl font-display font-bold text-white mb-8"
             >
               Service Menu
             </motion.h1>
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
             >
                Explore our comprehensive range of grooming services. From master haircuts to rejuvenating spa treatments, 
                we offer everything the modern man needs to look and feel his best.
            </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-32 max-w-7xl">
        {SECTIONS.map((section, idx) => {
          // Filter services that belong to this section's categories
          const sectionServices = SERVICES.filter(s => section.categories.includes(s.category));
          
          if (sectionServices.length === 0) return null;

          const isEven = idx % 2 === 0;

          return (
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                key={idx} 
                className="mb-32 last:mb-0"
            >
               <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                   
                   {/* Image Side */}
                   <div className="lg:w-5/12 w-full">
                        <div className="relative rounded-lg overflow-hidden aspect-[3/4] shadow-2xl group">
                            <div className="absolute inset-0 bg-navy-950/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                            <img 
                                src={section.image} 
                                alt={section.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                            />
                            {/* Frame Border */}
                            <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none"></div>
                        </div>
                   </div>

                   {/* Content Side */}
                   <div className="lg:w-7/12 w-full">
                        <div className={`mb-10 ${isEven ? 'text-left' : 'lg:text-right text-left'}`}>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                                {section.title}
                            </h2>
                            <p className="text-gold-500 font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-4">
                               {isEven ? (
                                 <><span>{section.subtitle}</span> <div className="h-[1px] w-12 bg-gold-500/50"></div></>
                               ) : (
                                 <><div className="hidden lg:block h-[1px] w-12 bg-gold-500/50"></div> <span>{section.subtitle}</span> <div className="lg:hidden h-[1px] w-12 bg-gold-500/50"></div></>
                               )}
                            </p>
                        </div>

                        {/* Service List */}
                        <div className="grid grid-cols-1 gap-4">
                            {sectionServices.map((service) => (
                                <div key={service.id} className="group relative bg-navy-900/50 border border-white/5 rounded-xl p-6 hover:bg-navy-900 hover:border-gold-500/30 transition-all duration-300">
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2">
                                        <h3 className="text-xl font-bold text-white group-hover:text-gold-500 transition-colors">{service.title}</h3>
                                        
                                        {/* Spacer Line */}
                                        <div className="hidden sm:block flex-grow mx-4 border-b border-dashed border-gray-700/50 group-hover:border-gray-600 transition-colors"></div>
                                        
                                        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                                             <span className="text-xl font-mono font-bold text-white">${service.price}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-end mt-2">
                                        <p className="text-gray-400 text-sm max-w-lg leading-relaxed">{service.description}</p>
                                        <div className="flex flex-col items-end gap-2 min-w-fit pl-4">
                                            <span className="text-xs text-gray-500 flex items-center gap-1 bg-navy-950 px-3 py-1 rounded border border-white/5">
                                                <Clock size={12} /> {service.duration} min
                                            </span>
                                        </div>
                                    </div>

                                    {/* Action Button - Shows on Hover */}
                                    <Link to="/booking" className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:flex w-10 h-10 bg-gold-500 rounded-full items-center justify-center text-navy-950 shadow-lg hover:scale-110">
                                         <ArrowRight size={20} />
                                    </Link>
                                </div>
                            ))}
                        </div>
                   </div>
               </div>
            </motion.div>
          );
        })}
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
             <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent">
                <Link to="/booking" className="block px-12 py-5 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white font-bold uppercase tracking-widest text-sm rounded-full transition-all duration-300 shadow-xl">
                    Book Your Experience
                </Link>
             </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;