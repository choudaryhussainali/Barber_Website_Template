import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors, Instagram, Facebook, Twitter, Phone, MapPin, ArrowUp, Code2 } from 'lucide-react';
import { APP_NAME, BRANCHES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPhoneMenuOpen, setIsPhoneMenuOpen] = useState(false);
  const location = useLocation();
  const phoneMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (phoneMenuRef.current && !phoneMenuRef.current.contains(event.target as Node)) {
        setIsPhoneMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setIsPhoneMenuOpen(false);
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Team', path: '/team' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold-500 selection:text-navy-950">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-navy-950/95 backdrop-blur-md shadow-lg py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center text-navy-950 shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
              <Scissors size={24} />
            </div>
            <span className="text-2xl font-display font-bold tracking-wider text-white">
              ROYALE<span className="text-gold-500">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold-500 ${
                  location.pathname === link.path ? 'text-gold-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Call Now Dropdown */}
            <div className="relative" ref={phoneMenuRef}>
              <button 
                onClick={() => setIsPhoneMenuOpen(!isPhoneMenuOpen)}
                className="flex items-center gap-2 text-white hover:text-gold-500 transition-colors uppercase font-medium text-sm tracking-widest"
              >
                <Phone size={16} /> Call Now
              </button>
              
              {isPhoneMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-64 bg-navy-900 border border-white/10 rounded-lg shadow-xl py-2 z-50 animate-fade-in-up">
                    <div className="absolute -top-2 right-8 w-4 h-4 bg-navy-900 border-l border-t border-white/10 rotate-45"></div>
                    {BRANCHES.map(branch => (
                        <a href={`tel:${branch.phone}`} key={branch.id} className="block px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                            <div className="text-white font-bold text-sm mb-0.5">{branch.name}</div>
                            <div className="text-gold-500 text-xs tracking-wider">{branch.phone}</div>
                        </a>
                    ))}
                </div>
              )}
            </div>

            <Link
              to="/booking"
              className="px-6 py-2 bg-gold-500 text-navy-950 font-bold uppercase tracking-wide text-xs rounded hover:bg-white transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-navy-950 border-b border-white/5 py-8 px-6 flex flex-col gap-4 animate-fade-in max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-medium ${
                  location.pathname === link.path ? 'text-gold-500' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="my-4 border-t border-white/10 pt-4">
              <h4 className="text-gold-500 text-xs uppercase tracking-widest font-bold mb-3">Call Us</h4>
              {BRANCHES.map(branch => (
                 <a href={`tel:${branch.phone}`} key={branch.id} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 text-white hover:text-gold-500">
                     <span>{branch.name}</span>
                     <span className="text-sm text-gray-400">{branch.phone}</span>
                 </a>
              ))}
            </div>

            <Link
              to="/booking"
              className="mt-2 w-full text-center py-4 bg-gold-500 text-navy-950 font-bold uppercase rounded"
            >
              Book Appointment
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Floating Action Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
        {/* Developer Portfolio Button */}
        <a 
          href="https://choudaryhussainali.online/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-gold-500/20 hover:scale-110 transition-transform cursor-pointer group relative"
        >
          <span className="absolute right-full mr-3 bg-navy-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-white/10 pointer-events-none">
            Developer Portfolio
          </span>
          <Code2 size={24} className="text-navy-950" />
          <div className="absolute inset-0 rounded-full border border-gold-500 animate-ping opacity-30"></div>
        </a>

        {/* WhatsApp Floating Icon */}
        <a 
          href="https://wa.me/15550123456" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer group relative"
        >
          <span className="absolute right-full mr-3 bg-white text-navy-950 px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
            Chat with us
          </span>
          <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-navy-900 border-t border-white/5 pt-20 pb-10 relative">
        {/* Scroll To Top Button */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
             <button 
                onClick={scrollToTop}
                className="w-12 h-12 bg-navy-950 border border-gold-500/30 text-gold-500 rounded-full flex items-center justify-center shadow-lg shadow-black/50 hover:bg-gold-500 hover:text-navy-950 hover:border-gold-500 transition-all duration-300 group z-10"
                aria-label="Scroll to top"
             >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
             </button>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gold-500 rounded flex items-center justify-center text-navy-950">
                  <Scissors size={18} />
                </div>
                <span className="text-xl font-display font-bold text-white">
                  ROYALE<span className="text-gold-500">.</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Redefining the art of grooming. Experience luxury, precision, and style in an environment designed for the modern gentleman.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500 transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500 transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-gold-500 hover:border-gold-500 transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><Link to="/about" className="hover:text-gold-500 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-gold-500 transition-colors">Services</Link></li>
                <li><Link to="/team" className="hover:text-gold-500 transition-colors">Our Team</Link></li>
                <li><Link to="/pricing" className="hover:text-gold-500 transition-colors">Pricing</Link></li>
                <li><Link to="/booking" className="hover:text-gold-500 transition-colors">Book Appointment</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li>Haircuts & Styling</li>
                <li>Beard Sculpting</li>
                <li>Hot Towel Shave</li>
                <li>Facial Treatments</li>
                <li>Kids Cuts</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="text-gold-500 mt-1 shrink-0" size={16} />
                  <span>1204 luxury Blvd,<br/>Metropolis, NY 10012</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-gold-500 shrink-0" size={16} />
                  <span>+1 (555) 012-3456</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;