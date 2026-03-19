import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  const handleChange = (e) => {
    if (showBanner) setShowBanner(false);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowBanner(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-hide success message after 4 seconds
      setTimeout(() => setShowBanner(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gym-black px-6 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gym-gold font-black uppercase tracking-[0.3em] text-sm mb-2">Get In Touch</h2>
          <h1 className="text-5xl md:text-7xl font-black dark:text-white text-gym-black uppercase italic tracking-tighter">
            READY TO <span className="text-gym-gold">EVOLVE?</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info Card */}
          <div className="space-y-8">
            <div className="bg-gym-gray p-10 rounded-sm shadow-2xl border-l-8 border-gym-gold">
              <h3 className="text-gym-gold font-black uppercase italic text-xl mb-6 tracking-widest">Opening Hours</h3>
              <ul className="space-y-4 text-gray-300 font-bold uppercase text-sm">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon — Fri</span> <span className="text-white text-right">05:00 — 23:00</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span> <span className="text-white text-right">07:00 — 20:00</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Sunday</span> <span className="text-white text-right">08:00 — 18:00</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black dark:text-white text-gym-black uppercase italic">Location</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-lg border-l-4 border-gym-gold pl-4">
                Fitness Sports Center, Pitipana North, Homagama.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-8 pt-4">
              {['facebook', 'map-marker-alt', 'whatsapp'].map((icon, idx) => (
                <a key={idx} href="#" className="text-gym-black dark:text-white hover:text-gym-gold transition-all duration-300 hover:scale-125 text-3xl">
                  <i className={`fab fa-${icon === 'map-marker-alt' ? '' : icon} fas fa-${icon === 'map-marker-alt' ? icon : ''}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Refined Form */}
          <div className="relative">
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 dark:bg-gym-gray/30 p-8 rounded-sm shadow-xl">
              <div className="grid gap-6">
                <input 
                  type="text" name="name" placeholder="FULL NAME" required
                  value={formData.name} onChange={handleChange}
                  className="w-full p-4 bg-white dark:bg-gym-black border-b-2 border-transparent focus:border-gym-gold outline-none transition-all dark:text-white font-bold placeholder:text-gray-500 uppercase text-xs"
                />
                <input 
                  type="email" name="email" placeholder="EMAIL ADDRESS" required
                  value={formData.email} onChange={handleChange}
                  className="w-full p-4 bg-white dark:bg-gym-black border-b-2 border-transparent focus:border-gym-gold outline-none transition-all dark:text-white font-bold placeholder:text-gray-500 uppercase text-xs"
                />
                <textarea 
                  name="message" placeholder="YOUR MESSAGE" rows="4" required
                  value={formData.message} onChange={handleChange}
                  className="w-full p-4 bg-white dark:bg-gym-black border-b-2 border-transparent focus:border-gym-gold outline-none transition-all dark:text-white font-bold placeholder:text-gray-500 uppercase text-xs"
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button 
                  type="submit" disabled={isSubmitting}
                  className="flex-1 bg-gym-gold text-black py-4 font-black uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {/* Success Feedback Banner */}
            <AnimatePresence>
              {showBanner && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-16 left-0 right-0 bg-gym-gold text-black p-4 text-center font-black uppercase italic text-sm shadow-2xl tracking-widest flex items-center justify-center space-x-2"
                >
                  <i className="fas fa-check-circle"></i>
                  <span>Message Sent Successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;