import React from 'react';
import Section from '../components/Section';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-navy-900 py-20 px-6 text-center">
        <h1 className="text-5xl font-display font-bold text-white mb-4">Get In Touch</h1>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
             <div className="glass-card p-8 rounded-xl">
               <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
               <ul className="space-y-6">
                 <li className="flex gap-4">
                    <div className="w-12 h-12 bg-navy-950 rounded flex items-center justify-center text-gold-500 shrink-0">
                       <MapPin size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold">Visit Us</h4>
                       <p className="text-gray-400">1204 luxury Blvd, Metropolis, NY 10012</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <div className="w-12 h-12 bg-navy-950 rounded flex items-center justify-center text-gold-500 shrink-0">
                       <Phone size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold">Call Us</h4>
                       <p className="text-gray-400">+1 (555) 012-3456</p>
                    </div>
                 </li>
                 <li className="flex gap-4">
                    <div className="w-12 h-12 bg-navy-950 rounded flex items-center justify-center text-gold-500 shrink-0">
                       <Mail size={24} />
                    </div>
                    <div>
                       <h4 className="text-white font-bold">Email Us</h4>
                       <p className="text-gray-400">bookings@royalebarbers.com</p>
                    </div>
                 </li>
               </ul>
             </div>

             <div className="glass-card p-8 rounded-xl">
               <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                 <Clock className="text-gold-500" /> Opening Hours
               </h3>
               <ul className="space-y-3 text-gray-400">
                 <li className="flex justify-between"><span>Monday - Friday</span> <span className="text-white">9:00 AM - 8:00 PM</span></li>
                 <li className="flex justify-between"><span>Saturday</span> <span className="text-white">10:00 AM - 6:00 PM</span></li>
                 <li className="flex justify-between"><span>Sunday</span> <span className="text-gold-500">Closed</span></li>
               </ul>
             </div>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-gray-400 text-sm mb-2">Name</label>
                   <input type="text" className="w-full bg-navy-950 border border-white/10 rounded p-3 text-white focus:border-gold-500 outline-none" />
                 </div>
                 <div>
                   <label className="block text-gray-400 text-sm mb-2">Email</label>
                   <input type="email" className="w-full bg-navy-950 border border-white/10 rounded p-3 text-white focus:border-gold-500 outline-none" />
                 </div>
               </div>
               <div>
                   <label className="block text-gray-400 text-sm mb-2">Subject</label>
                   <input type="text" className="w-full bg-navy-950 border border-white/10 rounded p-3 text-white focus:border-gold-500 outline-none" />
               </div>
               <div>
                   <label className="block text-gray-400 text-sm mb-2">Message</label>
                   <textarea rows={5} className="w-full bg-navy-950 border border-white/10 rounded p-3 text-white focus:border-gold-500 outline-none"></textarea>
               </div>
               <button className="w-full bg-gold-500 hover:bg-white text-navy-950 font-bold uppercase py-4 rounded transition-colors">
                 Send Message
               </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;