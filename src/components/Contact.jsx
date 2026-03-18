import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! (Integration Pending)");
    handleClear();
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gym-black px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gym-gold font-black uppercase tracking-[0.3em] text-sm mb-2">Contact Us</h2>
          <h1 className="text-5xl md:text-6xl font-black dark:text-white text-gym-black uppercase italic">Get In <span className="text-gym-gold">Touch</span></h1>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Left Column: Info & Hours */}
          <div className="space-y-10">
            <div className="bg-gym-black dark:bg-gym-gray p-8 rounded-sm shadow-2xl border-l-4 border-gym-gold">
              <h3 className="text-gym-gold font-bold uppercase mb-4 tracking-widest">Opening Hours</h3>
              <ul className="text-gray-300 space-y-2 font-medium">
                <li>Monday – Friday: <span className="text-white">5:00 AM – 11:00 PM</span></li>
                <li>Saturday: <span className="text-white">7:00 AM – 8:00 PM</span></li>
                <li>Sunday: <span className="text-white">8:00 AM – 6:00 PM</span></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-black dark:text-white text-gym-black uppercase italic">Location</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium text-lg leading-relaxed">
                Fitness Sports Center<br />
                Pitipana North, Homagama.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 text-gym-black dark:text-white">
              <a href="#" className="hover:text-gym-gold transition-transform hover:scale-125"><i className="fab fa-facebook text-3xl"></i></a>
              <a href="#" className="hover:text-gym-gold transition-transform hover:scale-125"><i className="fas fa-map-marker-alt text-3xl"></i></a>
              <a href="#" className="hover:text-gym-gold transition-transform hover:scale-125"><i className="fab fa-whatsapp text-3xl"></i></a>
            </div>
          </div>

          {/* Right Column: Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="dark:text-white text-gym-black font-bold uppercase text-xs">Name</label>
              <input 
                type="text" name="name" value={formData.name} onChange={handleChange} required
                className="w-full p-4 bg-gray-100 dark:bg-gym-gray border-2 border-transparent focus:border-gym-gold rounded-sm dark:text-white outline-none transition-all"
                placeholder="Enter your name"
              />
            </div>
            <div className="space-y-1">
              <label className="dark:text-white text-gym-black font-bold uppercase text-xs">Email</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange} required
                className="w-full p-4 bg-gray-100 dark:bg-gym-gray border-2 border-transparent focus:border-gym-gold rounded-sm dark:text-white outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-1">
              <label className="dark:text-white text-gym-black font-bold uppercase text-xs">Message</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} rows="4" required
                className="w-full p-4 bg-gray-100 dark:bg-gym-gray border-2 border-transparent focus:border-gym-gold rounded-sm dark:text-white outline-none transition-all"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <button type="submit" className="flex-1 bg-gym-gold text-black py-4 font-black uppercase tracking-widest hover:bg-yellow-500 transition-all shadow-lg active:scale-95">
                Submit
              </button>
              <button type="button" onClick={handleClear} className="px-8 border-2 border-gray-300 dark:border-white/20 dark:text-white text-gym-black py-4 font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all">
                Clear
              </button>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;