import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, MapPin, Award } from 'lucide-react';
import Section from '../components/Section';
import { SERVICES, BRANCHES, BARBERS, GALLERY_ITEMS } from '../constants';

const SERVICE_CATEGORIES = [
  {
    title: 'Haircuts',
    desc: 'Precision cuts tailored to your unique face shape and style.',
    // Image: Man haircut profile
    image: 'https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services'
  },
  {
    title: 'Shaving',
    desc: 'Traditional hot towel straight razor shaves for ultimate smoothness.',
    // Image: Shaving
    image: 'https://images.unsplash.com/photo-1733995471058-3d6ff2013de3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services'
  },
  {
    title: 'Trimming',
    desc: 'Expert beard sculpting, lining, and maintenance.',
    // Image: Beard trim
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop',
    link: '/services'
  },
  {
    title: 'Styling',
    desc: 'Premium styling with top-shelf products for a lasting look.',
    // Image: Hair styling
    image: 'https://images.unsplash.com/photo-1590540179937-484393bfd879?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/services'
  }
];

// ============================================
// MAIN SLIDER IMAGES
// ============================================
const HERO_IMAGES = [
  // 1. Barber Shop Interior
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  // 2. Barber Tools
  "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
  // 3. Vintage Chair
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images to prevent flickering
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-950">
        
        {/* Animated Background Images */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            <motion.img 
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex]}
              alt="Hero Background"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Static Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40 z-10" />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gold-500 uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-6"
          >
            Est. 2024 • Premium Grooming
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight drop-shadow-2xl"
          >
            Refine Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Image</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/booking"
              className="w-full md:w-auto px-8 py-4 bg-gold-500 hover:bg-white text-navy-950 font-bold uppercase tracking-wider text-sm rounded transition-all duration-300 min-w-[200px] shadow-lg hover:shadow-gold-500/20"
            >
              Book Appointment
            </Link>
            <Link 
              to="/services"
              className="w-full md:w-auto px-8 py-4 border border-white/20 hover:border-gold-500 text-white hover:text-gold-500 font-bold uppercase tracking-wider text-sm rounded transition-all duration-300 min-w-[200px] backdrop-blur-sm"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent"></div>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <Section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">Why Choose Us</h2>
            <h3 className="text-4xl font-display font-bold text-white mb-6">More Than Just a Haircut</h3>
            <p className="text-gray-400 leading-relaxed mb-8">
              We believe grooming is an essential part of a man's character. Our master barbers combine traditional techniques with modern styling to create a look that is uniquely yours.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Star, title: "Master Barbers", desc: "Highly trained professionals" },
                { icon: Clock, title: "Precision", desc: "Detailed oriented styling" },
                { icon: Award, title: "Premium Products", desc: "Top-shelf grooming essentials" },
                { icon: MapPin, title: "Prime Locations", desc: "Accessible luxury spaces" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded bg-navy-800 flex items-center justify-center text-gold-500 shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <div className="absolute -inset-4 border-2 border-gold-500/20 rounded-lg translate-x-4 translate-y-4 z-0 hidden md:block"></div>
            {/* Image: Barber cutting hair */}
            <img 
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=1000&auto=format&fit=crop" 
              alt="Barber Working" 
              className="rounded-lg shadow-2xl relative z-10 w-full"
            />
          </div>
        </div>
      </Section>

      {/* Service Categories */}
      <Section darker>
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">Expertise</h2>
          <h3 className="text-4xl font-display font-bold text-white">Our Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_CATEGORIES.map((cat, index) => (
            <div key={index} className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer">
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h4 className="text-2xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{cat.title}</h4>
                <p className="text-gray-300 text-sm mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {cat.desc}
                </p>
                <Link 
                  to={cat.link}
                  className="inline-flex items-center gap-2 text-gold-500 font-bold uppercase tracking-wider text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200"
                >
                  View More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* About Us Parallax Section */}
      <div 
        className="relative py-32 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1549271568-e87e07c5406b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="absolute inset-0 bg-navy-950/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-gold-500 text-sm font-bold tracking-[0.3em] uppercase mb-6">Our Legacy</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-relaxed">
                Refining the Gentleman <br/> Since 2024
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                Royale Barbers wasn't just built to cut hair; it was established to restore the ritual of male grooming. 
                We combine the timeless traditions of the classic barbershop with modern techniques and an atmosphere of understated luxury.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
                <div className="text-center px-6 sm:border-r border-white/10 last:border-0">
                  <span className="block text-4xl font-display font-bold text-white mb-1">2.5k+</span>
                  <span className="text-xs text-gold-500 uppercase tracking-widest">Happy Clients</span>
                </div>
                <div className="text-center px-6 sm:border-r border-white/10 last:border-0">
                  <span className="block text-4xl font-display font-bold text-white mb-1">100%</span>
                  <span className="text-xs text-gold-500 uppercase tracking-widest">Satisfaction</span>
                </div>
                <div className="text-center px-6">
                  <span className="block text-4xl font-display font-bold text-white mb-1">15+</span>
                  <span className="text-xs text-gold-500 uppercase tracking-widest">Master Barbers</span>
                </div>
              </div>

              <Link 
                to="/about"
                className="inline-block px-10 py-4 border border-gold-500 text-gold-500 font-bold uppercase tracking-widest text-sm hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 rounded"
              >
                Discover Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Signature Services */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">Pricing</h2>
          <h3 className="text-4xl font-display font-bold text-white">Signature Packages</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.slice(0, 3).map((service) => (
            <div key={service.id} className="group glass-card p-8 rounded-xl hover:bg-white/5 transition-all duration-300 flex flex-col">
              <div className="h-48 overflow-hidden rounded-lg mb-6 shrink-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                  <p className="text-gold-500 font-mono text-sm">{service.duration} MIN</p>
                </div>
                <span className="text-2xl font-mono text-white">${service.price}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
              <Link to="/booking" className="flex items-center gap-2 text-gold-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-wide">
                Book This <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="inline-block border-b border-gold-500 text-white pb-1 hover:text-gold-500 transition-colors">
            View All Services
          </Link>
        </div>
      </Section>

      {/* Gallery Section */}
      <section className="relative py-32 bg-navy-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center z-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
        />
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">Our Work</h2>
            <h3 className="text-4xl font-display font-bold text-white">Masterpiece Gallery</h3>
          </div>

          <div className="flex mb-8 -rotate-1 scale-105">
             <motion.div 
               className="flex gap-6 min-w-max"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
             >
               {[...GALLERY_ITEMS, ...GALLERY_ITEMS, ...GALLERY_ITEMS].map((item, idx) => (
                 <div key={`row1-${idx}`} className="w-[300px] h-[200px] rounded-lg overflow-hidden relative group shadow-2xl">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold uppercase tracking-wider text-xs border border-white px-4 py-2">View Style</span>
                   </div>
                 </div>
               ))}
             </motion.div>
          </div>

          <div className="flex rotate-1 scale-105">
             <motion.div 
               className="flex gap-6 min-w-max"
               initial={{ x: "-50%" }}
               animate={{ x: ["-50%", "0%"] }}
               transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
             >
               {[...GALLERY_ITEMS, ...GALLERY_ITEMS, ...GALLERY_ITEMS].reverse().map((item, idx) => (
                 <div key={`row2-${idx}`} className="w-[300px] h-[200px] rounded-lg overflow-hidden relative group shadow-2xl">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-bold uppercase tracking-wider text-xs border border-white px-4 py-2">View Style</span>
                   </div>
                 </div>
               ))}
             </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-gold-500 hover:text-white font-bold uppercase tracking-widest text-sm transition-colors">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Book Appointment Custom Section */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="relative border border-gold-500/30 p-8 md:p-12 mt-12 max-w-6xl mx-auto bg-navy-900/20 backdrop-blur-sm">
                
                {/* Decorative Elements */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-navy-950 border border-gold-500 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-gold-500 rotate-45"></div>
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-navy-950 border border-gold-500 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-gold-500 rotate-45"></div>
                </div>
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-navy-950 border border-gold-500 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-gold-500 rotate-45"></div>
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-navy-950 border border-gold-500 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 bg-gold-500 rotate-45"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Image Side - Refined for mobile safety */}
                    <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[500px] overflow-hidden rounded">
                         <img 
                            // Image: Barber portrait
                            src="https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=1000&auto=format&fit=crop"
                            className="absolute bottom-0 left-0 w-full h-full object-cover rounded shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                            alt="Barber"
                        />
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7 w-full">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-4 mb-2">
                                <div className="h-[1px] w-12 bg-gold-500/50"></div>
                                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                                <div className="h-[1px] w-12 bg-gold-500/50"></div>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
                                Book an Appointment
                            </h2>
                             <div className="flex items-center justify-center gap-4 mt-2">
                                <div className="h-[1px] w-24 bg-gold-500/50"></div>
                                <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                                <div className="h-[1px] w-24 bg-gold-500/50"></div>
                            </div>
                        </div>

                        <form onSubmit={handleQuickBook} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gold-500 text-xs uppercase tracking-widest font-bold ml-1">First Name</label>
                                    <input required type="text" className="w-full bg-navy-950/80 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors rounded-none placeholder-gray-600" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gold-500 text-xs uppercase tracking-widest font-bold ml-1">Email</label>
                                    <input required type="email" className="w-full bg-navy-950/80 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors rounded-none placeholder-gray-600" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gold-500 text-xs uppercase tracking-widest font-bold ml-1">Phone Number</label>
                                    <input required type="tel" className="w-full bg-navy-950/80 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors rounded-none placeholder-gray-600" placeholder="(555) 000-0000" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gold-500 text-xs uppercase tracking-widest font-bold ml-1">Date</label>
                                    <input required type="date" className="w-full bg-navy-950/80 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors rounded-none placeholder-gray-600" />
                                </div>
                            </div>

                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gold-500 text-xs uppercase tracking-widest font-bold ml-1">Select Services</label>
                                    <select className="w-full bg-navy-950/80 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors rounded-none text-gray-400">
                                        <option>Select the option</option>
                                        {SERVICES.slice(0,5).map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                                    </select>
                                </div>
                                <div className="space-y-2">
                                     <label className="text-gold-500 text-xs uppercase tracking-widest font-bold ml-1">Your Barbers</label>
                                    <select className="w-full bg-navy-950/80 border border-white/10 p-4 text-white focus:border-gold-500 outline-none transition-colors rounded-none text-gray-400">
                                        <option>Select the option</option>
                                        {BARBERS.map(b => <option key={b.id} value={b.id}>{b.name}</option>)}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-gold-500 hover:bg-white text-navy-950 font-bold uppercase tracking-[0.2em] py-5 mt-4 transition-all duration-300 shadow-lg">
                                Book Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Locations */}
      <Section darker>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <div className="flex flex-col justify-center">
              <h2 className="text-gold-500 text-sm font-bold tracking-widest uppercase mb-4">Visit Us</h2>
              <h3 className="text-4xl font-display font-bold text-white mb-6">Our Locations</h3>
              <p className="text-gray-400 mb-8">
                Designed with an industrial-chic aesthetic, our shops provide the perfect atmosphere to relax and unwind.
              </p>
              
              <div className="space-y-6">
                {BRANCHES.map(branch => (
                  <div key={branch.id} className="glass p-6 rounded-lg flex items-center gap-6">
                    <img src={branch.image} alt={branch.name} className="w-20 h-20 object-cover rounded" />
                    <div>
                      <h4 className="text-white font-bold text-lg">{branch.name}</h4>
                      <p className="text-gray-400 text-sm">{branch.address}</p>
                      <p className="text-gold-500 text-sm mt-1">{branch.phone}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
           <div className="h-[300px] lg:h-[500px] w-full bg-navy-800 rounded-xl overflow-hidden relative">
             {/* Placeholder for Map - Using an image for visual */}
             <img 
                // Image: Map/City
                src="https://plus.unsplash.com/premium_photo-1712832299675-de3d282b904a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full object-cover opacity-50 hover:opacity-75 transition-opacity duration-500"
                alt="Map Background"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-navy-950 px-6 py-3 rounded font-bold hover:bg-gold-500 transition-colors shadow-lg">
                  Open in Google Maps
                </button>
             </div>
           </div>
        </div>
      </Section>
    </>
  );
};

export default Home;