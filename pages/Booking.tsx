import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { SERVICES, BARBERS, BRANCHES } from '../constants';
import { Check, ChevronRight, ChevronLeft, Calendar, Clock, User, Scissors } from 'lucide-react';
import { api } from '../services/api';

const steps = ['Service', 'Barber', 'Time', 'Details'];

const Booking: React.FC = () => {
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

  const handleNext = () => {
    if (currentStep === 1) { // If moving to Time step
       fetchSlots();
    }
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const fetchSlots = async () => {
    setLoadingSlots(true);
    // Use today's date mock
    const slots = await api.checkAvailability('2023-11-20', formData.barberId);
    setAvailableSlots(slots);
    setLoadingSlots(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await api.createBooking({
      serviceId: formData.serviceId,
      barberId: formData.barberId,
      branchId: formData.branchId,
      date: formData.date || '2023-11-20', // Mock date
      time: formData.time,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone
    });

    setIsSubmitting(false);
    if (result.success) {
      setIsSuccess(true);
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
                    ? 'bg-gold-500/10 border-gold-500' 
                    : 'bg-white/5 border-transparent hover:bg-white/10'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-bold text-white">{service.title}</h3>
                  <span className="text-gold-500">${service.price}</span>
                </div>
                <p className="text-xs text-gray-400">{service.duration} mins</p>
              </div>
            ))}
          </div>
        );
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <p className="text-xs text-gold-500">{barber.role}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Select Date</label>
              <input 
                type="date" 
                className="w-full bg-navy-900 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-gold-500"
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            
            <div>
              <label className="block text-sm text-gray-400 mb-2">Available Slots</label>
              {loadingSlots ? (
                <div className="text-gold-500 text-sm animate-pulse">Checking availability...</div>
              ) : (
                <div className="grid grid-cols-3 gap-3">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({...formData, time: slot})}
                      className={`py-2 px-4 rounded text-sm transition-all ${
                        formData.time === slot
                          ? 'bg-gold-500 text-navy-950 font-bold'
                          : 'bg-white/5 text-gray-300 hover:bg-white/10'
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
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-navy-900 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-gold-500"
              required
            />
             <input 
              type="email" 
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-navy-900 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-gold-500"
              required
            />
             <input 
              type="tel" 
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-navy-900 border border-white/10 rounded p-4 text-white focus:outline-none focus:border-gold-500"
              required
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center px-6">
        <div className="glass-card p-12 rounded-xl text-center max-w-lg w-full">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-500" />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">Booking Confirmed</h2>
          <p className="text-gray-400 mb-8">
            Thank you, {formData.name}. We have sent a confirmation email to {formData.email}. See you on {formData.date || 'your selected date'} at {formData.time}.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="w-full bg-white text-navy-950 py-3 rounded font-bold hover:bg-gold-500 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-white">Book Appointment</h1>
        </div>

        <div className="glass-card rounded-2xl p-6 md:p-10">
          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-12 relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10"></div>
            {steps.map((step, index) => (
              <div key={step} className="flex flex-col items-center gap-2 bg-navy-950 px-2 z-10">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
                    index <= currentStep 
                      ? 'bg-gold-500 border-gold-500 text-navy-950' 
                      : 'bg-navy-900 border-gray-700 text-gray-500'
                  }`}
                >
                  {index + 1}
                </div>
                <span className={`text-xs uppercase tracking-wider ${index <= currentStep ? 'text-gold-500' : 'text-gray-600'}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStepContent()}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-12 pt-6 border-t border-white/5">
              <button 
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded font-bold uppercase text-sm ${
                  currentStep === 0 ? 'opacity-0 pointer-events-none' : 'text-gray-400 hover:text-white'
                }`}
              >
                <ChevronLeft size={16} /> Back
              </button>
              
              {currentStep === steps.length - 1 ? (
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-2 bg-gold-500 hover:bg-white text-navy-950 px-8 py-3 rounded font-bold uppercase text-sm transition-all"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                </button>
              ) : (
                <button 
                  type="button"
                  onClick={handleNext}
                  // Simple validation disable
                  disabled={
                    (currentStep === 0 && !formData.serviceId) ||
                    (currentStep === 1 && !formData.barberId) ||
                    (currentStep === 2 && !formData.time)
                  }
                  className="flex items-center gap-2 bg-white hover:bg-gold-500 text-navy-950 px-8 py-3 rounded font-bold uppercase text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step <ChevronRight size={16} />
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