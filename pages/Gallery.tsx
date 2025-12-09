import React, { useState } from 'react';
import Section from '../components/Section';
import { GALLERY_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Haircut', 'Beard', 'Fades', 'Grooming'];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'All' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-20 px-6 text-center">
        <h1 className="text-5xl font-display font-bold text-white mb-4">Style Gallery</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Inspiration for your next look. Browse our collection of precision cuts and styles.
        </p>
      </div>

      <Section>
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm uppercase tracking-wide border transition-all ${
                filter === cat 
                  ? 'bg-gold-500 border-gold-500 text-navy-950 font-bold' 
                  : 'border-white/20 text-gray-400 hover:border-gold-500 hover:text-gold-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedImage(item.image)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-gold-500 text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] relative">
            <img src={selectedImage} alt="Full view" className="max-w-full max-h-full rounded shadow-2xl" />
            <button className="absolute -top-12 right-0 text-white hover:text-gold-500 font-bold uppercase tracking-widest text-sm">
              Close [X]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;