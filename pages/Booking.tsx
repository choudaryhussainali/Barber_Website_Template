import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, BARBERS, BRANCHES } from '../constants';
import { Check, ChevronRight, ChevronLeft, Home, ArrowLeft } from 'lucide-react';
import { api } from '../services/api';

const steps = ['Service', 'Barber', 'Time', 'Details'];

const Booking: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    serviceId: '',
    barberId: '',
    branchId: BRANCHES[0].id,
    date: '',
    time: '',
    name: '',
    email: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const handleNext = (e?: React.MouseEvent | React.FormEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Safety check: Don't advance if on the last step
    if (currentStep >= steps.length - 1) return;

    if (currentStep === 1) { // If moving to Time step
       fetchSlots();
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const fetchSlots = async () => {
    setLoadingSlots(true);
    // Use selected date or a mock default
    const slots = await api.checkAvailability(formData.date || '2023-11-20', formData.barberId);
    setAvailableSlots(slots);
    setLoadingSlots(false);
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // STRICT GUARD: Only proceed if on the final step AND details are filled
    if (currentStep !== steps.length - 1) {
      return; 
    }

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all contact details.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await api.createBooking({
        serviceId: formData.serviceId,
        barberId: formData.barberId,
        branchId: formData.branchId,
        date: formData.date || new Date().toISOString().split('T')[0],
        time: formData.time,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone
      });

      if (result.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Booking failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                onClick={() => setFormData({...formData, serviceId: service.id})}
                className={`p-6 rounded-lg cursor-pointer border transition-all ${
                  formData.serviceId === service.id 
                    ? 'bg-gold-500/10 border-gold-500 shadow-[0_0_15px_rgba(201,161,91,0.2)]' 
                    : 'bg-white/5 border-transparent hover:bg-white/10'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-white">{service.title}</h3>
                  <span className="text-gold-500 font-mono">${service.price}</span>
                </div>
                <p className="text-xs text-gray-400">{service.duration} mins • Professional Finish</p>
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {BARBERS.map((barber) => (
              <div 
                key={barber.id}
                onClick={() => setFormData({...formData, barberId: barber.id})}
                className={`relative overflow-hidden rounded-lg cursor-pointer border transition-all group ${
                  formData.barberId === barber.id 
                    ? 'border-gold-500 ring-2 ring-gold-500/50' 
                    : 'border-transparent hover:border-gray-600'
                }`}
              >
                <img src={barber.image} alt={barber.name} className="w-full h-48 object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-navy-950 to-transparent">
                  <h3 className="font-bold text-white">{barber.name}</h3>
                  <p className="text-xs text-gold-500 uppercase tracking-widest">{barber.role}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold-500 font-bold mb-3">1. Select Date</label>
              <input 
                type="date" 
                required
                className="w-full bg-navy-900 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-gold-500 transition-colors"
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                value={formData.date}
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-gold-500 font-bold mb-3">2. Available Slots</label>
              {loadingSlots ? (
                <div className="flex items-center gap-3 text-gold-500 text-sm py-4">
                  <div className="w-4 h-4 border-2 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
                  Checking availability...
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({...formData, time: slot})}
                      className={`py-3 px-4 rounded text-xs font-bold transition-all uppercase tracking-widest border ${
                        formData.time === slot
                          ? 'bg-gold-500 text-navy-950 border-gold-500'
                          : 'bg-white/5 text-gray-400 border-transparent hover:border-white/20'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
               <p className="text-gray-400 text-sm italic">"Precision is our signature. Detail is our promise."</p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-navy-900 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-navy-900 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-bold ml-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-navy-900 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-gold-500 transition-colors placeholder-gray-700"
                  required
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center px-6 bg-navy-950">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-10 md:p-20 rounded-3xl text-center max-w-2xl w-full border border-gold-500/20 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full"></div>
          
          <div className="w-24 h-24 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', damping: 12 }}
              className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center"
            >
              <Check size={32} className="text-navy-950" strokeWidth={3} />
            </motion.div>
            <div className="absolute inset-0 rounded-full border border-gold-500 animate-ping opacity-20"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Booking Confirmed</h2>
          <div className="h-[2px] w-24 bg-gold-500 mx-auto mb-8"></div>
          
          <p className="text-gray-400 mb-12 text-lg leading-relaxed">
            Thank you, <span className="text-white font-bold">{formData.name}</span>. Your royal session is secured for <span className="text-gold-500 font-bold">{formData.date}</span> at <span className="text-gold-500 font-bold">{formData.time}</span>.
          </p>
          
          <div className="flex flex-col gap-6">
            <button 
              onClick={() => navigate('/')}
              className="w-full bg-gold-500 text-navy-950 py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-all shadow-[0_10px_30px_rgba(201,161,91,0.2)] flex items-center justify-center gap-3 group"
            >
              <Home size={20} className="group-hover:-translate-y-1 transition-transform" />
              Return to Home Page
            </button>
            
            <Link 
              to="/services"
              className="flex items-center justify-center gap-2 text-gray-500 hover:text-gold-500 text-xs uppercase tracking-widest font-bold transition-colors group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Explore More Services
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-navy-950">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-500 text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            Reservations
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Book Appointment</h1>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-12 relative overflow-hidden border border-white/5">
          {/* Subtle Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

          {/* Progress Bar */}
          <div className="mb-16 relative">
             <div className="flex justify-between items-center relative">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-10 -translate-y-1/2"></div>
                {steps.map((step, index) => (
                  <div key={step} className="flex flex-col items-center gap-3 bg-navy-950 px-3 z-10">
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${
                        index <= currentStep 
                          ? 'bg-gold-500 border-gold-500 text-navy-950 shadow-[0_0_20px_rgba(201,161,91,0.3)]' 
                          : 'bg-navy-900 border-white/10 text-gray-600'
                      }`}
                    >
                      {index + 1}
                    </div>
                    <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${index <= currentStep ? 'text-gold-500' : 'text-gray-600'}`}>
                      {step}
                    </span>
                  </div>
                ))}
             </div>
          </div>

          <form onSubmit={handleFinalSubmit} className="relative z-10">
            <div className="min-h-[350px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex flex-col-reverse sm:flex-row justify-between mt-16 pt-8 border-t border-white/5 gap-6">
              {currentStep > 0 ? (
                <button 
                  type="button"
                  onClick={handleBack}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded font-bold uppercase tracking-widest text-xs transition-all text-gray-400 hover:text-white border border-white/10 hover:border-white"
                >
                  <ChevronLeft size={16} /> Previous Step
                </button>
              ) : (
                <div className="hidden sm:block w-32"></div>
              )}
              
              {currentStep === steps.length - 1 ? (
                <button 
                  type="submit"
                  disabled={isSubmitting || !formData.phone || !formData.email || !formData.name}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gold-500 hover:bg-white text-navy-950 px-12 py-4 rounded font-bold uppercase tracking-[0.2em] text-xs transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Reservation'}
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={handleNext}
                  disabled={
                    (currentStep === 0 && !formData.serviceId) ||
                    (currentStep === 1 && !formData.barberId) ||
                    (currentStep === 2 && (!formData.time || !formData.date))
                  }
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-gold-500 text-navy-950 px-12 py-4 rounded font-bold uppercase tracking-[0.2em] text-xs transition-all disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed ml-auto"
                >
                  Continue <ChevronRight size={16} />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;