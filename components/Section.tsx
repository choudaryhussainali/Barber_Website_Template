import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  darker?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, darker = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 px-6 ${darker ? 'bg-navy-950' : 'bg-navy-900'} ${className}`}
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;